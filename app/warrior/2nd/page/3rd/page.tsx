"use client";

import Link from "next/link";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import SideNavigation from "@/components/ui/SideNavigation";
import KnightSkills from "@/components/warrior/3rd/KnightSkills";
import HuntingGrounds from "@/components/warrior/3rd/HuntingGrounds";

export default function KnightPage() {
  const sections = [
    { id: "skill-tree", label: "스킬 트리" },
    { id: "hunting-grounds", label: "추천 사냥터" },
  ];

  const { activeSection, scrollToSection } = useScrollNavigation(sections);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <SideNavigation
            sections={sections}
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />

          <main className="flex-1">
            <div className="mb-8">
              <Link
                href="/warrior/2nd/page"
                className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
              >
                ← 페이지로 돌아가기
              </Link>
              <h1 className="page-title mb-4">
                🛡️ 나이트 (Knight) 육성 가이드
              </h1>
              <p className="description-text text-lg mb-4">
                차지드 블로우와 속성 공격을 사용하는 페이지의 3차 전직 | 2025년 9월 최신 메타 반영
              </p>
              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <p className="text-sm description-text">
                  <strong>전직 레벨:</strong> 70레벨 | <strong>4차 전직:</strong> 팔라딘 (120레벨)
                </p>
              </div>
            </div>

            <div id="skill-tree">
              <KnightSkills />
            </div>

            <div id="hunting-grounds">
              <HuntingGrounds />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
