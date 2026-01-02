"use client";

import Link from "next/link";
import SideNavigation from "@/components/ui/SideNavigation";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import FighterSkills from "@/components/warrior/2nd/FighterSkills";
import HuntingGroundsGuide from "@/components/warrior/2nd/HuntingGrounds";

export default function FighterPage() {
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

            <div id="next-job" className="mt-12">
              <div className="card-bg p-8 border-l-4 border-purple-500">
                <h2 className="section-title mb-6">🎯 3차 전직: 크루세이더</h2>
                <div className="space-y-4">
                  <p className="description-text text-lg">
                    70레벨에 <strong>크루세이더</strong>로 3차 전직하면 콤보 어택, 패닉 등 강력한 스킬을 획득합니다.
                  </p>
                  <div className="flex gap-4">
                    <Link 
                      href="/warrior/2nd/fighter/3rd" 
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-colors font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      크루세이더 가이드 보기 →
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
