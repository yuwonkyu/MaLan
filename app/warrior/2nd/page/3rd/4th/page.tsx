"use client";

import Link from "next/link";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import SideNavigation from "@/components/ui/SideNavigation";
import PaladinSkills from "@/components/warrior/4th/PaladinSkills";
import HuntingGrounds from "@/components/warrior/4th/HuntingGrounds";

export default function PaladinPage() {
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
                href=".."
                className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
              >
                ← 나이트로 돌아가기
              </Link>
              <h1 className="page-title mb-4">
                🛡️ 팔라딘 (Paladin) 육성 가이드
              </h1>
              <p className="description-text text-lg mb-4">
                속성 공격과 방어를 겸비한 페이지 계열의 최종 직업 | 2025년 9월 최신 메타 반영
              </p>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm description-text">
                  <strong>전직 레벨:</strong> 120레벨 | <strong>주력 스킬:</strong> 블래스트, 헤븐즈 해머
                </p>
              </div>
            </div>

            <div id="skill-tree">
              <PaladinSkills />
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
