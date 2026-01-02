"use client";

import SideNavigation from "@/components/ui/SideNavigation";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import FighterSkills from "@/components/warrior/2nd/FighterSkills";
import HuntingGroundsGuide from "@/components/warrior/2nd/HuntingGrounds";

export default function FighterPage() {
  const sections = [
    { id: "skill-tree", label: "스킬 트리" },
    { id: "hunting-grounds", label: "사냥터 가이드" },
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
            <h1 className="page-title mb-8">
              ⚔️ 파이터 (Fighter) 육성 가이드
            </h1>
            <p className="description-text mb-8">
              검과 도끼를 사용하는 전사의 2차 전직. <strong>분노</strong> 버프로 최강의 공격력을 자랑하며, 3차 크루세이더, 4차 히어로로 성장합니다.
            </p>

            <div id="skill-tree">
              <FighterSkills />
            </div>

            <div id="hunting-grounds">
              <HuntingGroundsGuide />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
