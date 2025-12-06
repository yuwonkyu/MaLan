"use client";

import { useState, useRef, useEffect } from "react";
import { matchSearch } from "@/lib/utils";
import { allJobNames } from "@/lib/data/jobs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchIcon from "@/components/icons/SearchIcon";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredJobs = query
    ? allJobNames
        .filter((job) => matchSearch(job.name, query))
        .sort((a, b) => {
          const lowerQuery = query.toLowerCase();
          const aName = a.name.toLowerCase();
          const bName = b.name.toLowerCase();

          // 1. 완전 일치 우선
          const aExactMatch = aName === lowerQuery;
          const bExactMatch = bName === lowerQuery;
          if (aExactMatch && !bExactMatch) return -1;
          if (!aExactMatch && bExactMatch) return 1;

          // 2. 시작 문자 일치 우선
          const aStartsWith = aName.startsWith(lowerQuery);
          const bStartsWith = bName.startsWith(lowerQuery);
          if (aStartsWith && !bStartsWith) return -1;
          if (!aStartsWith && bStartsWith) return 1;

          // 3. 차수 순서 (2차 > 3차 > 4차)
          const tierOrder: { [key: string]: number } = {
            "2차": 1,
            "3차": 2,
            "4차": 3,
          };
          const aTierOrder = tierOrder[a.tier] || 99;
          const bTierOrder = tierOrder[b.tier] || 99;
          if (aTierOrder !== bTierOrder) {
            return aTierOrder - bTierOrder;
          }

          // 4. 이름 길이 (짧은 것 우선)
          return aName.length - bName.length;
        })
    : [];

  // 선택된 항목이 변경될 때마다 초기화
  useEffect(() => {
    if (!isOpen) {
      setSelectedIndex(-1);
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || filteredJobs.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredJobs.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < filteredJobs.length) {
          const selectedJob = filteredJobs[selectedIndex];
          router.push(`/${selectedJob.category}`);
          setIsOpen(false);
          setQuery("");
          setSelectedIndex(-1);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="직업명을 검색하세요 (초성 검색 가능: ㅍㅇㅌ = 파이터)"
          className="w-full px-6 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-full focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setSelectedIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
        />
        <SearchIcon className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 dark:text-gray-500" />
      </div>

      {/* 검색 결과 */}
      {isOpen && query && filteredJobs.length > 0 && (
        <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto z-50">
          {filteredJobs.map((job, index) => (
            <Link
              key={`${job.category}-${job.name}-${index}`}
              href={`/${job.category}`}
              className={`block px-6 py-4 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0 ${
                index === selectedIndex
                  ? "bg-blue-50 dark:bg-blue-900"
                  : "hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
              onClick={() => {
                setIsOpen(false);
                setQuery("");
                setSelectedIndex(-1);
              }}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className="flex items-center justify-between">
                <div className="font-semibold text-gray-900 dark:text-gray-100">
                  {job.name}
                </div>
                <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                  {job.tier}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* 검색 결과 없음 */}
      {isOpen && query && filteredJobs.length === 0 && (
        <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 text-center text-gray-500 dark:text-gray-400 z-50">
          검색 결과가 없습니다
        </div>
      )}

      {/* 배경 클릭 시 닫기 */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
