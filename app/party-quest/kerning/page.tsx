"use client";

import { useRouter } from "next/navigation";

const PartyQuestPage = () => {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 헤더 */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block cursor-pointer"
        >
          ← 이전으로 가기
        </button>
        <h1 className="page-title mb-4">커닝시티 파티퀘스트 가이드</h1>
        <p className="description-text text-lg">
          메이플랜드 커닝 파티퀘스트 완벽 공략
        </p>
      </div>

      {/* 개요 */}
      <section className="mb-12">
        <div className="card-bg p-6">
          <h2 className="section-title mb-4">파티퀘스트 개요</h2>
          <div className="description-text">
            <p>
              커닝 파티퀘스트는 4명의 파티원이 협력하여 5단계의 미션을
              클리어하는 던전형 콘텐츠입니다. 각 단계마다 특정 조건을 충족해야
              다음 단계로 진행할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 참여 조건 */}
      <section className="mb-12">
        <h2 className="section-title mb-6">참여 조건</h2>

        <div className="card-bg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 description-text">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="font-semibold mb-2">🎚️ 레벨 제한</p>
              <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                21 ~ 30
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="font-semibold mb-2">👥 파티 인원</p>
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                4명 필수
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                솔플 불가
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="font-semibold mb-2">⚔️ 직업 제한</p>
              <p className="text-lg font-bold text-green-600 dark:text-green-400">
                없음
              </p>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <p className="font-semibold mb-2">📍 입장 위치</p>
              <p className="text-sm">커닝시티 마을 중앙 아래</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                NPC 라케리스
              </p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="font-semibold mb-2">⏱️ 제한 시간</p>
              <p className="text-lg font-bold text-red-600 dark:text-red-400">
                30분
              </p>
            </div>
            <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
              <p className="font-semibold mb-2">⏳ 평균 소요 시간</p>
              <p className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                10~15분
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
              <p className="font-semibold mb-2">🔄 일일 횟수 제한</p>
              <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                없음 (무제한)
              </p>
            </div>
            <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
              <p className="font-semibold mb-2">🎁 아이템 보상</p>
              <p className="text-sm font-bold text-pink-600 dark:text-pink-400">
                일일 20회까지
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 미션 단계 */}
      <section className="mb-12">
        <h2 className="section-title mb-6">미션 단계</h2>

        <div className="space-y-4">
          {/* 1단계 */}
          <div className="card-bg p-6 border-l-4 border-blue-500">
            <h3 className="subsection-title mb-3 text-blue-700 dark:text-blue-300">
              1단계 미션 - 쿠폰 모으기
            </h3>
            <div className="space-y-3 description-text">
              <p>
                <strong>NPC 클로토</strong>에게 퀘스트를 받고, 리게이터를
                사냥하여 정답 수만큼 쿠폰을 모아야 합니다.
              </p>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-2">
                  퀴즈 문제 예시 (유저마다 다름)
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    마법사 1차 전직 최소 레벨: <strong>8</strong>
                  </li>
                  <li>
                    전사, 궁수, 도적 1차 전직 최소 레벨: <strong>10</strong>
                  </li>
                  <li>
                    레벨 1→2가 되기 위한 경험치량: <strong>15</strong>
                  </li>
                  <li>
                    마법사 1차 전직 최소 지력: <strong>20</strong>
                  </li>
                  <li>
                    궁수, 도적 1차 전직 최소 민첩성: <strong>25</strong>
                  </li>
                  <li>
                    전사 1차 전직 최소 힘: <strong>35</strong>
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
                <strong>진행 방법:</strong> NPC에게 정답 수만큼 쿠폰 제출 →
                획득한 통행증 3개를 파티장이 모아서 NPC에게 전달 → 2단계로 이동
              </div>
            </div>
          </div>

          {/* 2단계 */}
          <div className="card-bg p-6 border-l-4 border-purple-500">
            <h3 className="subsection-title mb-3 text-purple-700 dark:text-purple-300">
              2단계 미션 - 밧줄 정답 맞히기
            </h3>
            <div className="space-y-3 description-text">
              <p>4개의 밧줄 중 정답 조합을 찾는 단계입니다.</p>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="font-semibold mb-2">공략법</p>
                <p className="text-sm mb-2">
                  파티장을 제외한 3명이 각각 밧줄에 올라가서 경우의 수를
                  시도합니다.
                </p>
                <p className="text-sm">
                  <strong>가능한 조합:</strong> [123] / [124] / [234] / [134]
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  한 명씩 위치를 옮기면서 모든 경우의 수를 시도하면 됩니다.
                </p>
              </div>
            </div>
          </div>

          {/* 3단계 */}
          <div className="card-bg p-6 border-l-4 border-green-500">
            <h3 className="subsection-title mb-3 text-green-700 dark:text-green-300">
              3단계 미션 - 발판 정답 맞히기
            </h3>
            <div className="space-y-3 description-text">
              <p>5개의 발판 중 정답 조합을 찾는 단계입니다.</p>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="font-semibold mb-2">공략법</p>
                <p className="text-sm mb-2">
                  2단계와 유사한 방식으로 진행합니다.
                  <br /> 3명이 발판에 올라가 경우의 수를 시도합니다.
                </p>
                <p className="text-sm">
                  <strong>가능한 조합:</strong> [123] [124] [125] [134] [135]
                  [145] [234] [235] [245] [345]
                </p>
              </div>

              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded text-sm">
                <strong>주의:</strong> 혼자 함부로 발판을 밟으면 실패합니다.
                파티장 지시에 따르세요.
              </div>
            </div>
          </div>

          {/* 4단계 */}
          <div className="card-bg p-6 border-l-4 border-yellow-500">
            <h3 className="subsection-title mb-3 text-yellow-700 dark:text-yellow-300">
              4단계 미션 - 통 정답 맞히기
            </h3>
            <div className="space-y-3 description-text">
              <p>6개의 통 중 정답 조합을 찾는 단계입니다.</p>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <p className="font-semibold mb-2">공략법</p>
                <p className="text-sm">
                  2단계, 3단계와 동일한 방식으로 3명이 통에 올라가 경우의 수를
                  시도하여 정답을 맞힙니다.
                </p>
              </div>
            </div>
          </div>

          {/* 5단계 */}
          <div className="card-bg p-6 border-l-4 border-red-500">
            <h3 className="subsection-title mb-3 text-red-700 dark:text-red-300">
              5단계 미션 - 몬스터 처치 및 통행증 모으기
            </h3>
            <div className="space-y-3 description-text">
              <p>
                맵 내 몬스터를 모두 처치하여 <strong>통행증 10개</strong>를
                모으는 관문입니다.
              </p>

              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold mb-2">출현 몬스터</p>
                <p className="text-sm">
                  커즈아이, 주니어네키, 킹슬라임 등을 모두 처치해야 합니다.
                </p>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                <p className="font-bold mb-2 text-orange-700 dark:text-orange-300">
                  ⚠️ 명중률 45 이상 필수
                </p>
                <p className="text-sm mb-3">
                  몬스터를 효율적으로 처치하려면 <strong>명중률 45 이상</strong>
                  이 필요합니다.
                </p>
                <div className="text-sm">
                  <p className="font-semibold mb-1">명중률 확보 방법:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>DEX 투자: 1 DEX = 0.8 명중치</li>
                    <li>돼지 도감 (+10 명중)</li>
                    <li>물고기 작살 (+5 명중)</li>
                    <li>명중 주문서 작업</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-2">진행 순서</p>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>모든 몬스터 처치 후 통행증 10개 수집</li>
                  <li>
                    파티장이 <strong>NPC 클로토</strong>에게 통행증 전달
                  </li>
                  <li>보너스 맵 입장 (추가 사냥 가능)</li>
                  <li>
                    <strong>NPC 네일리아</strong>를 통해 퇴장
                  </li>
                </ol>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded text-sm">
                <strong>보너스:</strong> 보너스 맵에서 운이 좋으면 희귀 장비를
                획득할 수 있습니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 보상 */}
      <section className="mb-12">
        <h2 className="section-title mb-6">보상</h2>

        <div className="card-bg p-6">
          <div className="space-y-4 description-text">
            <div className="p-4 bg-linear-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg">
              <p className="font-bold mb-3">주요 보상</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>경험치 (레벨업 효율 우수)</li>
                <li>메소</li>
                <li>장갑 공격력 주문서</li>
                <li>망토 주문서</li>
                <li>커닝 전용 장비 (귀걸이, 목걸이 등)</li>
                <li>각종 물약 및 소비 아이템</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="font-semibold mb-2">보상 횟수 제한</p>
              <p className="text-sm">
                파티퀘스트는 무제한 입장 가능하나,{" "}
                <strong>아이템 보상은 일일 20회까지</strong> 지급됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 다른 파티 퀘스트 (추후 추가 가능) */}
      <section className="mb-12">
        <h2 className="section-title mb-6">기타 파티 퀘스트</h2>
        <div className="card-bg p-6">
          <p className="description-text text-center text-gray-500 dark:text-gray-400">
            준비 중입니다...
          </p>
          <p className="text-sm text-center text-gray-400 dark:text-gray-500 mt-2">
            루디브리엄 파티 퀘스트, 오르비스 파티 퀘스트 등이 추가될 예정입니다.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PartyQuestPage;
