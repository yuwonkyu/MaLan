"use client";

import { useState } from "react";
import { matchSearch } from "@/lib/utils";
import { allJobs } from "@/lib/data/jobs";
import Link from "next/link";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredJobs = query
    ? allJobs.filter((job) => matchSearch(job.name, query))
    : [];

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          placeholder="직업명을 검색하세요 (초성 검색 가능: ㅍㅇㅌ = 파이터)"
          className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        <svg
          className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* 검색 결과 */}
      {isOpen && query && filteredJobs.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
          {filteredJobs.map((job) => (
            <Link
              key={job.id}
              href={`/${job.category}`}
              className="block px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => {
                setIsOpen(false);
                setQuery("");
              }}
            >
              <div className="font-semibold text-gray-900">{job.name}</div>
              <div className="text-sm text-gray-600">{job.description}</div>
            </Link>
          ))}
        </div>
      )}

      {/* 검색 결과 없음 */}
      {isOpen && query && filteredJobs.length === 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center text-gray-500 z-50">
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
