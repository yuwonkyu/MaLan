"use client";

import SideNavigation from "@/components/ui/SideNavigation";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import SpearmanSkills from "@/components/warrior/2nd/SpearmanSkills";
import HuntingGroundsGuide from "@/components/warrior/2nd/HuntingGrounds";

export default function SpearmanPage() {
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
              🔱 스피어맨 (Spearman) 육성 가이드
            </h1>
            <p className="description-text mb-8">
              창과 폴암을 사용하는 전사의 2차 전직. <strong>하이퍼 바디</strong>로 생존력을 높이며, 3차 버서커(용기사), 4차 다크나이트로 성장합니다.
            </p>

            <div id="skill-tree">
              <SpearmanSkills />
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
