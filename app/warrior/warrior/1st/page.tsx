"use client";

import Link from "next/link";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import SideNavigation from "@/components/ui/SideNavigation";
import FirstJobAdvancement from "@/components/warrior/1st/FirstJobAdvancement";
import StatDistribution from "@/components/warrior/1st/StatDistribution";
import SkillTree from "@/components/warrior/1st/SkillTree";
import HuntingGrounds from "@/components/warrior/1st/HuntingGrounds";
import Equipment from "@/components/warrior/1st/Equipment";
import SecondJobPreparation from "@/components/warrior/1st/SecondJobPreparation";

const WarriorFirstJobPage = () => {
  const sections = [
    { id: "job-advancement", label: "1차 전직 방법" },
    { id: "stat-distribution", label: "스탯 분배" },
    { id: "skill-tree", label: "스킬 트리" },
    { id: "hunting-grounds", label: "추천 사냥터" },
    { id: "equipment", label: "장비 추천" },
    { id: "second-job", label: "2차 전직 준비" },
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
              전사 (Warrior) - 1차 전직 완벽 가이드
            </h1>
            <p className="description-text text-lg">
              스텟 분배부터 스킬 트리, 사냥터, 장비까지 전사 육성의 모든 것
            </p>
          </div>

          <div id="job-advancement">
            <FirstJobAdvancement />
          </div>
          <div id="stat-distribution">
            <StatDistribution />
          </div>
          <div id="skill-tree">
            <SkillTree />
          </div>
          <div id="hunting-grounds">
            <HuntingGrounds />
          </div>
          <div id="equipment">
            <Equipment />
          </div>
          <div id="second-job">
            <SecondJobPreparation />
          </div>
        </main>

        {/* 사이드 네비게이션 - 데스크톱만, 오른쪽 배치 */}
        <SideNavigation
          sections={sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />
      </div>
    </div>
  );
};

export default WarriorFirstJobPage;
