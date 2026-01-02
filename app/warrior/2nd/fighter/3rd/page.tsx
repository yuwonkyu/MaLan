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

            <div id="next-job" className="mt-12">
              <div className="card-bg p-8 border-l-4 border-orange-500">
                <h2 className="section-title mb-6">🏆 4차 전직: 히어로</h2>
                <div className="space-y-4">
                  <p className="description-text text-lg">
                    120레벨에 <strong>히어로</strong>로 4차 전직하면 브랜디시로 최강의 딜러가 됩니다.
                  </p>
                  <div className="flex gap-4">
                    <Link 
                      href="/warrior/2nd/fighter/3rd/4th" 
                      className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition-colors font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      히어로 가이드 보기 →
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
