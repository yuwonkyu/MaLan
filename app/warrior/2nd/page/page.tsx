"use client";

import SideNavigation from "@/components/ui/SideNavigation";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import PageSkills from "@/components/warrior/2nd/PageSkills";
import HuntingGroundsGuide from "@/components/warrior/2nd/HuntingGrounds";

export default function PageJobPage() {
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
              🛡️ 페이지 (Page) 육성 가이드
            </h1>
            <p className="description-text mb-8">
              검과 둔기를 사용하는 전사의 2차 전직. <strong>쓰레테닝</strong>으로 몬스터 방어력을 낮추며, 3차 나이트, 4차 팔라딘으로 성장합니다.
            </p>

            <div id="skill-tree">
              <PageSkills />
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
