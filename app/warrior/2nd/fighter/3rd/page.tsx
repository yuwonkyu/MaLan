"use client";

import Link from "next/link";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import SideNavigation from "@/components/ui/SideNavigation";
import CrusaderSkills from "@/components/warrior/3rd/CrusaderSkills";
import HuntingGrounds from "@/components/warrior/3rd/HuntingGrounds";

export default function CrusaderPage() {
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
                href="/warrior/2nd/fighter"
                className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
              >
                ← 파이터로 돌아가기
              </Link>
              <h1 className="page-title mb-4">
                ⚔️ 크루세이더 (Crusader) 육성 가이드
              </h1>
              <p className="description-text text-lg mb-4">
                콤보 어택으로 강력한 한방을 자랑하는 파이터의 3차 전직 | 2025년 9월 최신 메타 반영
              </p>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="text-sm description-text">
                  <strong>전직 레벨:</strong> 70레벨 | <strong>4차 전직:</strong> 히어로 (120레벨)
                </p>
              </div>
            </div>

            <div id="skill-tree">
              <CrusaderSkills />
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
