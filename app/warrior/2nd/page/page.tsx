"use client";

import Link from "next/link";
import SideNavigation from "@/components/ui/SideNavigation";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import PageSkills from "@/components/warrior/2nd/PageSkills";
import HuntingGroundsGuide from "@/components/warrior/2nd/HuntingGrounds";

export default function PageJobPage() {
  const sections = [
    { id: "skill-tree", label: "스킬 트리" },
    { id: "hunting-grounds", label: "사냥터 가이드" },
    { id: "next-job", label: "다음 전직" },
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

            <div id="next-job" className="mt-12">
              <div className="card-bg p-8 border-l-4 border-blue-500">
                <h2 className="section-title mb-6">🎯 3차 전직: 나이트</h2>
                <div className="space-y-4">
                  <p className="description-text text-lg">
                    70레벨에 <strong>나이트</strong>로 3차 전직하면 차지드 블로우 등 강력한 스킬을 획듍합니다.
                  </p>
                  <div className="flex gap-4">
                    <Link 
                      href="/warrior/2nd/page/3rd" 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      나이트 가이드 보기 →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
