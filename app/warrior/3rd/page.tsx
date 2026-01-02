"use client";

import Link from "next/link";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import SideNavigation from "@/components/ui/SideNavigation";
import CrusaderSkillTree from "@/components/warrior/3rd/CrusaderSkillTree";
import HuntingGrounds from "@/components/warrior/3rd/HuntingGrounds";

const CrusaderThirdJobPage = () => {
  const sections = [
    { id: "skill-tree", label: "스킬 트리" },
    { id: "hunting-grounds", label: "추천 사냥터" },
  ];

  const { activeSection, scrollToSection } = useScrollNavigation(sections);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:flex lg:gap-8">
        {/* 메인 콘텐츠 */}
        <main className="flex-1 min-w-0">
          {/* 헤더 */}
          <div className="mb-8">
            <Link
              href="/warrior"
              className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
            >
              ← 전사 직업군으로 돌아가기
            </Link>
            <h1 className="page-title mb-4">
              전사 3차 전직 - 크루세이더/나이트/용기사 완벽 가이드
            </h1>
            <p className="description-text text-lg mb-4">
              콤보 어택으로 강력한 한방을 자랑하는 크루세이더 | 2025년 9월 최신 메타 반영
            </p>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-sm description-text">
                <strong>전직 레벨:</strong> 70레벨 | <strong>4차 전직:</strong> 히어로 (120레벨)
              </p>
            </div>
          </div>

          <div id="skill-tree">
            <CrusaderSkillTree />
          </div>

          <div id="hunting-grounds">
            <HuntingGrounds />
          </div>
        </main>

        {/* 사이드 네비게이션 */}
        <SideNavigation
          sections={sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />
      </div>
    </div>
  );
};

export default CrusaderThirdJobPage;
