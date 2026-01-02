"use client";

import { useState } from "react";

export default function FighterSkillTree() {
  const [activeJob, setActiveJob] = useState<"fighter" | "page" | "spearman">("fighter");

  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">2차 전직 스킬 트리 (직업별)</h2>
      
      {/* 직업 선택 탭 */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        <button
          onClick={() => setActiveJob("fighter")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap ${
            activeJob === "fighter"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          ⚔️ 파이터 (Fighter)
        </button>
        <button
          onClick={() => setActiveJob("page")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap ${
            activeJob === "page"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          🛡️ 페이지 (Page)
        </button>
        <button
          onClick={() => setActiveJob("spearman")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap ${
            activeJob === "spearman"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          🔱 스피어맨 (Spearman)
        </button>
      </div>
      
      <div className="space-y-6">
        {/* 파이터 */}
        {activeJob === "fighter" && (
          <>
            {/* 기본 정보 */}
            <div className="card-bg p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-3">📌 파이터 기본 정보</h3>
                <p className="description-text mb-2">
                  <strong>총 스킬 포인트:</strong> 121포인트
                </p>
                <p className="description-text mb-2">
                  <strong>무기:</strong> 검 (두손검 추천), 도끼
                </p>
                <p className="description-text">
                  <strong>핵심 전략:</strong> 분노 선트리를 기본으로 하며, 파이널 어택 투자 여부에 따라 빌드가 갈립니다.
                </p>
              </div>
            </div>

        {/* 공통 필수 스킬 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">🎯 공통 필수 스킬</h3>
          
          <div className="space-y-4">
            {/* 무기 마스터리 */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold mb-2">무기 마스터리 (검/도끼) ⭐⭐⭐</h4>
              <p className="text-sm description-text mb-2">
                <strong>마스터 레벨:</strong> 20
              </p>
              <p className="text-sm description-text mb-2">
                19레벨 달성 시 <strong className="text-blue-600 dark:text-blue-400">숙련도 60%</strong>가 되어 최종 데미지 상승 효과가 매우 큽니다.
              </p>
              <p className="text-sm description-text font-semibold">
                💡 보통 19레벨 선투자 후 포인트가 남으면 20레벨을 마스터합니다.
              </p>
            </div>

            {/* 부스터 */}
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold mb-2">부스터 (검/도끼) ⭐⭐⭐</h4>
              <p className="text-sm description-text mb-2">
                <strong>마스터 레벨:</strong> 20
              </p>
              <p className="text-sm description-text mb-2">
                무기 공격 속도 1단계 상승 효과가 있으며, 1레벨당 지속 시간이 10초씩 늘어나 <strong>20레벨 기준 200초간 지속</strong>됩니다.
              </p>
              <p className="text-sm description-text">
                <span className="text-red-600 dark:text-red-400">⚠️ 주의:</span> 마법 스킬(로어, 샤우트 등)에는 적용되지 않습니다.
              </p>
            </div>

            {/* 파워 가드 */}
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold mb-2">파워 가드 ⭐⭐⭐</h4>
              <p className="text-sm description-text mb-2">
                <strong>마스터 레벨:</strong> 30
              </p>
              <p className="text-sm description-text mb-2">
                90초간 피격 데미지 40%를 적에게 되돌려 줍니다.
              </p>
              <p className="text-sm description-text mb-2">
                예시: 1,000 데미지 피격 시 600만 감소, 몬스터에게 400 데미지 반사
              </p>
              <p className="text-sm description-text">
                파이터/페이지의 물약 소비를 아껴주는 <strong>효자 스킬</strong>입니다.
              </p>
              <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-2">
                ⚠️ 라이딩 탑승 시 꺼지므로 계속 눌러줘야 하는 불편함이 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 분노 (파이터 전용) */}
        <div className="card-bg p-6 border-l-4 border-red-500">
          <h3 className="subsection-title mb-4 text-red-700 dark:text-red-300">
            🔥 분노 (파이터 전용 - G.O.A.T)
          </h3>
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <p className="text-sm description-text mb-2">
              <strong>효과:</strong> 일정 시간 동안 파티원 전체 물리 공격력을 12 증가시키고 물리 방어력을 하락시킵니다.
            </p>
            <p className="text-sm description-text mb-3">
              <strong className="text-red-600 dark:text-red-400">현시점 전사 파티 버프 스킬 중 최고 성능(G.O.A.T)</strong>이며, 
              카니발 진입 시 부스터 마스터 후 먼저 선마하는 추세입니다.
            </p>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded mt-2">
              <p className="text-sm description-text">
                💡 <strong>꿀팁:</strong> 물방 감소 디버프는 프리스트 블래스 등으로 지워지므로 사실상 없는 디버프 취급됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* 파이널 어택 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">⚡ 파이널 어택 (선택)</h3>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-bold mb-2">효과</h4>
              <p className="text-sm description-text mb-2">
                파워 스트라이크/슬래시 블러스트 사용 시 일정 확률로 <strong>250% 데미지의 추가 타격 1타</strong>가 발동합니다.
              </p>
              <p className="text-sm description-text">
                슬래시 블러스트에서 발동 시 여러 마리를 타격하나 데미지는 절반으로 줄어듭니다.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-bold mb-2 text-green-700 dark:text-green-300">투자 시점</h4>
              <p className="text-sm description-text">
                나이트/크루세이더는 <strong className="text-green-600 dark:text-green-400">5레벨 사냥터 진입 시 파택 투자 시 평균 DPS가 약 30% 증가</strong>하므로 필수입니다.
              </p>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-bold mb-2 text-red-700 dark:text-red-300">3차 사이길 진입 시 주의</h4>
              <p className="text-sm description-text">
                <strong>사이길 진입 시 파택 제거 필수!</strong> 자판기 인형을 슬블 한 방으로 정리하는 빌드를 사용하는데, 파택은 젠 컷에 방해가 됩니다.
              </p>
              <p className="text-sm description-text mt-2">
                85레벨 정도에 크루세이더 콤보 어택을 빠르게 모으기 위해 파택 재투자가 필수가 됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* 빌드 1: 파택 투자 */}
        <div className="card-bg p-6 border-l-4 border-blue-500">
          <h3 className="subsection-title mb-4 text-blue-700 dark:text-blue-300">
            빌드 1: 파이널 어택 투자형 (카니발 활용)
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="font-semibold mb-3">📋 투자 순서</p>
              <ol className="list-decimal list-inside space-y-2 text-sm description-text">
                <li><strong>마스터리:</strong> 19레벨</li>
                <li><strong>부스터:</strong> 6레벨</li>
                <li><strong>분노:</strong> 19레벨 (카니발 활용)</li>
                <li><strong>파이널 어택:</strong> 30포인트 모아서 투자</li>
                <li><strong>파워가드/부스터/마스터리:</strong> 마스터</li>
                <li><strong>남는 포인트:</strong> 1차 아이언 바디 추천</li>
              </ol>
            </div>

            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm">
                <strong>추천 대상:</strong> 카니발을 적극 활용하며 DPS를 극대화하고 싶은 플레이어
              </p>
            </div>
          </div>
        </div>

        {/* 빌드 2: 파택 미투자 */}
        <div className="card-bg p-6 border-l-4 border-purple-500">
          <h3 className="subsection-title mb-4 text-purple-700 dark:text-purple-300">
            빌드 2: 파이널 어택 미투자형 (3차에서 뺄 예정)
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="font-semibold mb-3">📋 투자 순서</p>
              <ol className="list-decimal list-inside space-y-2 text-sm description-text">
                <li><strong>마스터리:</strong> 19레벨</li>
                <li><strong>부스터:</strong> 6레벨</li>
                <li><strong>분노:</strong> 19레벨</li>
                <li><strong>파택 제외:</strong> 파워가드/부스터/마스터리를 취향대로 마스터</li>
                <li><strong>아이언 바디:</strong> 20레벨 투자</li>
                <li><strong>HP 회복력 향상:</strong> 16레벨</li>
                <li><strong>인듀어:</strong> 6레벨로 마무리</li>
              </ol>
            </div>

            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-sm">
                <strong>추천 대상:</strong> 스킬 초기화 부담을 줄이고 싶은 플레이어
              </p>
            </div>
          </div>
        </div>

        {/* 4차 전직 이후 제투자 */}
        <div className="card-bg p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
          <h3 className="subsection-title mb-4 text-amber-700 dark:text-amber-300">
            🔄 4차 전직 후 제투자 (히어로)
          </h3>
          <div className="space-y-3">
            <p className="description-text">
              4차 전직 시 <strong>브랜드를 사용</strong>하면서부터 파워 스트라이크, 슬래시 블러스트, 파이널 어택이 필요 없어지므로 이때 제투자합니다.
            </p>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="font-semibold mb-2">제투자 후 포인트 분배</p>
              <ul className="list-disc list-inside space-y-1 text-sm description-text">
                <li><strong>1차:</strong> 파스/슬블을 다 빼고 남는 7포인트를 파워 스트라이크에 투자</li>
                <li><strong>2차:</strong> 마스터리, 부스터, 분노, 파워가드를 만땅 찍었을 때 31포인트가 남습니다</li>
                <li>남는 포인트는 X마스터/X부스터(다른 무기용)에 주거나, 3차 스킬을 위해 아껴둡니다</li>
              </ul>
            </div>
          </div>
        </div>
          </>
        )}

        {/* 페이지 */}
        {activeJob === "page" && (
          <>
            {/* 기본 정보 */}
            <div className="card-bg p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-3">📌 페이지 기본 정보</h3>
                <p className="description-text mb-2">
                  <strong>총 스킬 포인트:</strong> 121포인트
                </p>
                <p className="description-text mb-2">
                  <strong>무기:</strong> 검 (두손검 추천), 둔기 (비추천)
                </p>
                <p className="description-text">
                  <strong>핵심 전략:</strong> 파이터와 거의 동일하나, <strong>쓰레테닝</strong>이 페이지 전용 스킬로 제공됩니다.
                </p>
              </div>
            </div>

            {/* 공통 필수 스킬 */}
            <div className="card-bg p-6">
              <h3 className="subsection-title mb-4">🎯 필수 스킬 (파이터와 동일)</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold mb-2">무기 마스터리 (검/둔기) ⭐⭐⭐</h4>
                  <p className="text-sm description-text mb-2">
                    19레벨 달성 시 <strong className="text-blue-600 dark:text-blue-400">숙련도 60%</strong>가 되어 최종 데미지 상승 효과가 매우 큽니다.
                  </p>
                  <p className="text-sm text-red-600 dark:text-red-400">
                    ⚠️ 둔기는 사거리가 짧아 비추천! 두손검을 사용하세요.
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold mb-2">부스터 (검/둔기) ⭐⭐⭐</h4>
                  <p className="text-sm description-text">
                    파이터와 동일한 효과. 20레벨 기준 200초간 지속됩니다.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold mb-2">파워 가드 ⭐⭐⭐</h4>
                  <p className="text-sm description-text">
                    파이터와 동일한 효과. 물약 소비를 아껴주는 효자 스킬입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 쓰레테닝 (페이지 전용) */}
            <div className="card-bg p-6 border-l-4 border-indigo-500">
              <h3 className="subsection-title mb-4 text-indigo-700 dark:text-indigo-300">
                🛡️ 쓰레테닝 (페이지 전용)
              </h3>
              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <p className="text-sm description-text mb-2">
                  <strong>효과:</strong> 몬스터의 방어력을 감소시킵니다.
                </p>
                <p className="text-sm description-text mb-2">
                  파이터의 <strong>분노</strong>와 대비되는 페이지 전용 스킬입니다.
                </p>
                <p className="text-sm description-text font-semibold">
                  💡 분노에 비해 효율이 떨어지는 편이지만, 파티 플레이 시 유용합니다.
                </p>
              </div>
            </div>

            {/* 빌드 가이드 */}
            <div className="card-bg p-6">
              <h3 className="subsection-title mb-4">📋 추천 빌드</h3>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="description-text mb-3">
                  페이지는 파이터와 거의 동일한 스킬 트리를 사용합니다.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm description-text">
                  <li><strong>마스터리:</strong> 19레벨</li>
                  <li><strong>부스터:</strong> 6레벨</li>
                  <li><strong>쓰레테닝:</strong> 19레벨 (분노 대신)</li>
                  <li><strong>파이널 어택:</strong> 30포인트 (선택사항)</li>
                  <li><strong>파워가드/부스터/마스터리:</strong> 마스터</li>
                </ol>
              </div>
            </div>

            {/* 4차 전직 */}
            <div className="card-bg p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
              <h3 className="subsection-title mb-4">🔄 3차 나이트 → 4차 팔라딘</h3>
              <div className="space-y-3">
                <p className="description-text">
                  4차 팔라딘은 <strong>차지드 블로우</strong>를 주력 스킬로 사용하며, 불/얼음/번개 속성 공격이 특징입니다.
                </p>
                <p className="text-sm description-text">
                  파이터와 마찬가지로 4차 전직 시 1차/2차 스킬 제투자가 필요합니다.
                </p>
              </div>
            </div>
          </>
        )}

        {/* 스피어맨 */}
        {activeJob === "spearman" && (
          <>
            {/* 기본 정보 */}
            <div className="card-bg p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-3">📌 스피어맨 기본 정보</h3>
                <p className="description-text mb-2">
                  <strong>총 스킬 포인트:</strong> 121포인트
                </p>
                <p className="description-text mb-2">
                  <strong>무기:</strong> 창 (Spear), 폴암 (Polearm) - <strong>폴암 강력 추천!</strong>
                </p>
                <p className="description-text">
                  <strong>핵심 전략:</strong> 하이퍼 바디로 HP를 극대화하고, 아이언 윌로 생존력을 높입니다.
                </p>
              </div>
            </div>

            {/* 공통 필수 스킬 */}
            <div className="card-bg p-6">
              <h3 className="subsection-title mb-4">🎯 필수 스킬</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold mb-2">무기 마스터리 (창/폴암) ⭐⭐⭐</h4>
                  <p className="text-sm description-text mb-2">
                    19레벨 달성 시 <strong className="text-blue-600 dark:text-blue-400">숙련도 60%</strong>
                  </p>
                  <p className="text-sm text-red-600 dark:text-red-400">
                    ⚠️ 창보다 <strong>폴암</strong>을 사용하세요! 파워 스트라이크/슬래시 블러스트 기대값이 더 높습니다.
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold mb-2">부스터 (창/폴암) ⭐⭐⭐</h4>
                  <p className="text-sm description-text">
                    파이터와 동일한 효과. 20레벨 기준 200초간 지속됩니다.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold mb-2">하이퍼 바디 ⭐⭐⭐</h4>
                  <p className="text-sm description-text mb-2">
                    <strong>스피어맨 전용:</strong> 자신과 파티원의 최대 HP/MP를 증가시킵니다.
                  </p>
                  <p className="text-sm description-text">
                    4차 다크나이트의 <strong>버서크</strong> 스킬과 시너지가 매우 좋습니다.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold mb-2">아이언 윌 ⭐⭐⭐</h4>
                  <p className="text-sm description-text">
                    물리/마법 방어력을 증가시켜 생존력을 높입니다. 스피어맨의 핵심 생존 스킬입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 빌드 가이드 */}
            <div className="card-bg p-6 border-l-4 border-purple-500">
              <h3 className="subsection-title mb-4">📋 추천 빌드</h3>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="font-semibold mb-3">투자 순서</p>
                <ol className="list-decimal list-inside space-y-2 text-sm description-text">
                  <li><strong>마스터리:</strong> 19레벨</li>
                  <li><strong>부스터:</strong> 6레벨</li>
                  <li><strong>하이퍼 바디:</strong> 19레벨</li>
                  <li><strong>아이언 윌:</strong> 20레벨 (생존력 극대화)</li>
                  <li><strong>파이널 어택:</strong> 30포인트 (선택사항)</li>
                  <li><strong>남는 포인트:</strong> 마스터리/부스터/하이퍼 바디 마스터</li>
                </ol>
              </div>

              <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="text-sm">
                  <strong>특징:</strong> 파이터/페이지에 비해 생존력이 뛰어나며, 파티 플레이 시 하이퍼 바디로 큰 도움이 됩니다.
                </p>
              </div>
            </div>

            {/* 3차 스킬 연계 */}
            <div className="card-bg p-6">
              <h3 className="subsection-title mb-4">🔄 3차 버서커 (용기사)</h3>
              <div className="space-y-3">
                <p className="description-text">
                  3차 전직 시 <strong>폴암(쓰레셔)</strong>와 <strong>창(스피어 버스터)</strong>를 상황에 맞게 사용하게 됩니다.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm description-text ml-4">
                  <li><strong>80레벨 이후 로어 사냥:</strong> 스공만 중요하므로 저렴한 폴람/창 사용</li>
                  <li><strong>85레벨 이후 스피어 버스터:</strong> 반드시 창 사용</li>
                  <li><strong>가성비:</strong> 로어용 폴암 + 버스터용 창 따로 구비</li>
                </ul>
              </div>
            </div>

            {/* 4차 전직 */}
            <div className="card-bg p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <h3 className="subsection-title mb-4">🔄 4차 다크나이트</h3>
              <div className="space-y-3">
                <p className="description-text">
                  4차 다크나이트는 <strong>버서크</strong> 스킬로 HP가 낮을수록 공격력이 증가하는 하이리스크 하이리턴 스타일입니다.
                </p>
                <p className="text-sm description-text">
                  하이퍼 바디와 버서크의 조합이 핵심이며, 파이터/페이지와는 다른 독특한 플레이 스타일을 제공합니다.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
