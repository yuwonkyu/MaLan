"use client";

import Link from "next/link";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import SideNavigation from "@/components/ui/SideNavigation";
import BerserkerSkills from "@/components/warrior/3rd/BerserkerSkills";
import HuntingGrounds from "@/components/warrior/3rd/HuntingGrounds";

export default function BerserkerPage() {
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
                href="/warrior/2nd/spearman"
                className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
              >
                ← 스피어맨으로 돌아가기
              </Link>
              <h1 className="page-title mb-4">
                🔱 버서커/용기사 (Berserker) 육성 가이드
              </h1>
              <p className="description-text text-lg mb-4">
                스피어 버스터와 봉으로 강력한 공격을 펼치는 스피어맨의 3차 전직 | 2025년 9월 최신 메타 반영
              </p>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="text-sm description-text">
                  <strong>전직 레벨:</strong> 70레벨 | <strong>4차 전직:</strong> 다크나이트 (120레벨)
                </p>
              </div>
            </div>

            <div id="skill-tree">
              <BerserkerSkills />
            </div>

            <div id="hunting-grounds">
              <HuntingGrounds />
            </div>

            <div id="next-job" className="mt-12">
              <div className="card-bg p-8 border-l-4 border-green-500">
                <h2 className="section-title mb-6">🏆 4차 전직: 다크나이트</h2>
                <div className="space-y-4">
                  <p className="description-text text-lg">
                    120레벨에 <strong>다크나이트</strong>로 4차 전직하면 버서크로 극한의 공격력을 발휘합니다.
                  </p>
                  <div className="flex gap-4">
                    <Link 
                      href="/warrior/2nd/spearman/3rd/4th" 
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-colors font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      다크나이트 가이드 보기 →
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
