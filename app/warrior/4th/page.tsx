"use client";

import Link from "next/link";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import SideNavigation from "@/components/ui/SideNavigation";
import HeroSkillTree from "@/components/warrior/4th/HeroSkillTree";
import HuntingGrounds from "@/components/warrior/4th/HuntingGrounds";

const HeroFourthJobPage = () => {
  const sections = [
    { id: "skill-tree", label: "스킬 트리 & 사냥터" },
    { id: "hunting-grounds", label: "고레벨 사냥터" },
    { id: "equipment", label: "장비 추천" },
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
              전사 4차 전직 - 히어로/팔라딘/다크나이트 완벽 가이드
            </h1>
            <p className="description-text text-lg mb-4">
              브랜디시로 최강의 사냥 효율을 자랑하는 히어로 | 2025년 9월 최신 메타 반영
            </p>
            <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong>전직 레벨:</strong> 120레벨
              </p>
              <p className="text-sm description-text">
                <strong>특징:</strong> 넓은 사거리와 빠른 공속의 브랜디시로 1티어 직업으로 군림합니다.
              </p>
            </div>
          </div>

          <div id="skill-tree">
            <HeroSkillTree />
          </div>

          <div id="hunting-grounds">
            <HuntingGrounds />
          </div>

          {/* 장비 추천 */}
          <div id="equipment" className="mb-12">
            <h2 className="section-title mb-6">장비 추천</h2>
            <div className="card-bg p-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-bold mb-2">양손검 (주력)</h3>
                  <p className="text-sm description-text">
                    히어로는 기본적으로 양손검을 주무기로 사용하며, 
                    브랜디시의 넓은 사거리를 최대한 활용할 수 있습니다.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-bold mb-2">한손검 + 방패 (선택)</h3>
                  <p className="text-sm description-text mb-2">
                    사냥 고점을 위해 한손검(스팟/레드 카트) + 방패를 사용할 때는 
                    실드 마스터리에 투자하여 방어력을 높입니다.
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    💡 포션 소비를 줄이고 싶을 때 추천하는 옵션입니다.
                  </p>
                </div>
              </div>
            </div>
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

export default HeroFourthJobPage;
