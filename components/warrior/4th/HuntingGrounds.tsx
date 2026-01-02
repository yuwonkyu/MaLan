export default function FourthJobHuntingGrounds() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">4차 전직 추천 사냥터 (Lv.100+)</h2>
      
      <div className="space-y-6">
        {/* 100레벨~ 위험한 바다 협곡 */}
        <div className="card-bg p-6 border-l-4 border-blue-500">
          <div className="flex items-start justify-between mb-3">
            <h3 className="subsection-title text-blue-700 dark:text-blue-300">
              🌊 Lv.100+ - 위험한 바다 협곡 2호 (오징어팟)
            </h3>
            <span className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full">권장</span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong>경험치:</strong> 4층 300~330만 / 1층 350~400만
              </p>
              <p className="text-sm description-text mb-2">
                <strong>명중률:</strong> 97레벨 기준 총 136 (블레스 전 기준 필요)
              </p>
              <p className="text-sm description-text">
                이때부터 명중률 컷이 확 올라갑니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold mb-2">취업 & 드랍</h4>
                <p className="text-sm description-text mb-2">
                  3전사 모두 100레벨 이상이면 수월하게 취업 가능
                </p>
                <p className="text-sm description-text">
                  <strong>드랍:</strong> 97레벨 리스틀 스피퀴드(장공), 최근 귀민 10% 추가
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold mb-2">파티 구성 (오징어팟)</h4>
                <p className="text-sm description-text mb-2">
                  5층에 고레벨 샤프 아이즈 궁수가 옴
                </p>
                <p className="text-sm description-text">
                  샤프에게 샵비, 프리스트에게 신비를 내고 참여 (대략 30~40만 메소)
                </p>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-bold mb-2 text-green-700 dark:text-green-300">크루세이더 선호</h4>
              <p className="text-sm description-text">
                분노 전형이라 몸박 데미지가 아파 지원금을 내면 적자를 보지만, <strong>불라동보다 구인이 훨씬 쉽기 때문</strong>에 선호됩니다.
              </p>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm description-text">
                💡 개인적으로 전사가 오징어팟을 그렇게 선호하지 않으며, 브라동을 못 갈 경우 브러전 제네절이나 망둥이 쩔로 많이 갑니다.
              </p>
            </div>
          </div>
        </div>

        {/* 100레벨~ 블루 와이번 둥지 */}
        <div className="card-bg p-6 border-l-4 border-red-500 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
          <div className="flex items-start justify-between mb-3">
            <h3 className="subsection-title text-red-700 dark:text-red-300">
              🔥 Lv.100+ - 블루 와이번 둥지 (브라둥)
            </h3>
            <span className="text-xs px-3 py-1 bg-red-600 text-white rounded-full font-bold">최고 효율</span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong>경험치:</strong> 400만~1,000만 (편차 매우 큼)
              </p>
              <p className="text-sm description-text mb-2">
                <strong>명중률:</strong> 101레벨 기준 총 139 (블레스 전 119)
              </p>
              <p className="text-sm description-text mb-2">
                <strong>드랍:</strong> 다이몬의 완드, 비늘, 드래곤의 비늘, 드래곤의 용원
              </p>
              <p className="text-sm description-text font-semibold">
                <strong className="text-red-600 dark:text-red-400">차벌, 듀파와 함께 고레벨 전사들이 모이는 성지</strong>이며, 자릿세가 매우 비쌉니다.
              </p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-bold mb-2">파티 구성 (5인 바닥)</h4>
              <p className="text-sm description-text mb-2">
                가장 대중적인 형태: 5인 바닥 1명, 좌1, 우1, 옥상
              </p>
              <p className="text-sm description-text">
                <strong>120레벨 이하 전사:</strong> 우1 자리 가능 (자리 구매 필요)
              </p>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm description-text">
                ⚠️ 120레벨 이하 전사 자리는 자리 주인이 대부분이며, 자릿세가 매우 고가입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 120레벨~ 협곡의 동쪽길 (다크 와이번) */}
        <div className="card-bg p-6 border-l-4 border-purple-500">
          <div className="flex items-start justify-between mb-3">
            <h3 className="subsection-title text-purple-700 dark:text-purple-300">
              🌙 Lv.120+ - 협곡의 동쪽길 (다크 와이번)
            </h3>
            <span className="text-xs px-3 py-1 bg-purple-600 text-white rounded-full">4차 전직</span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong>경험치:</strong> 시간당 500만 이상
              </p>
              <p className="text-sm description-text mb-2">
                <strong>명중률:</strong> 103레벨 기준 총 139
              </p>
              <p className="text-sm description-text mb-2">
                <strong>드랍:</strong> 다크 와이번(비늘 영웅, 다크 아데브, 귀지) - 잔발이 매우 맛있음
              </p>
              <p className="text-sm description-text">
                <strong className="text-purple-600 dark:text-purple-400">히어로/다크나이트</strong>가 많이 옵니다. 팔라딘/나이트는 많이 오지 않음
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 다크나이트 */}
              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <h4 className="font-bold mb-2">다크나이트</h4>
                <p className="text-sm description-text mb-2">
                  <strong>스펙:</strong> 버서크 20, 스공 4,950 → 옥상 가능
                </p>
                <p className="text-sm description-text">
                  돌진을 먼저 찍어 돌진 8레벨이면 한 번에 세 마리를 돌진으로 밀 수 있음
                </p>
              </div>

              {/* 히어로 */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">히어로</h4>
                <p className="text-sm description-text mb-2">
                  <strong>스펙:</strong> 브랜 5레벨이면 됨
                </p>
                <p className="text-sm description-text">
                  브랜디시의 넓은 사거리로 효율적인 사냥 가능
                </p>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-bold mb-2">파티 형태</h4>
              <p className="text-sm description-text mb-2">
                <strong>5인 전사팟 무흡:</strong> 가장 흔한 일반적인 형태. 신비나 지원금 없이 5명 구해서 대타 구하고 나가는 방식
              </p>
              <p className="text-sm description-text mb-2">
                <strong>협동 3인팟:</strong> 초고레벨 전사 2인 + 프리스트 1명. 경험치 매우 높지만 140 후반은 되어야 함
              </p>
              <p className="text-sm description-text">
                다양한 조합: 5인 1, 2층 전사팟 / 옥상 가거나 3인으로 옥상 3층, 1, 2층으로 나뉨
              </p>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm description-text">
                💡 브라동을 대체할 수 있는 사냥터로, 파티 구성과 방식에 따라 조합이 다양합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 142레벨 후반~ 둥지 시리즈 */}
        <div className="card-bg p-6 border-l-4 border-amber-500">
          <div className="flex items-start justify-between mb-3">
            <h3 className="subsection-title text-amber-700 dark:text-amber-300">
              🏔️ Lv.142+ - 둥지 시리즈 (큰둥, 위용둥, 죽둥, 남둥)
            </h3>
            <span className="text-xs px-3 py-1 bg-amber-600 text-white rounded-full">고레벨</span>
          </div>
          
          <div className="space-y-4">
            {/* 스펙 요구치 */}
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <h4 className="font-bold mb-2">직업별 스펙 요구치</h4>
              <div className="space-y-2 text-sm description-text">
                <p>
                  <strong>다크나이트:</strong> 네골과 맛이들의 몸박/마공이 강력. 버서크 30 필요, 스공 5,600~5,800
                </p>
                <p>
                  <strong>히어로:</strong> 브랜 30만 찍히면 140레벨 때 세 방 컷으로 수월. 두 방 컷은 170~180레벨 이상
                </p>
                <p>
                  <strong>팔라딘:</strong> 속성 불가능 (네골, 맛이 안 잡음). 스켈레곤/스켈로스는 홀리 차지로 낚시 가능하나 느림
                </p>
              </div>
            </div>

            {/* 죽둥 (큰둥 솔플) */}
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold mb-2 text-green-700 dark:text-green-300">죽둥 (큰둥 솔플 혹은 파사)</h4>
              <p className="text-sm description-text mb-2">
                <strong>목적:</strong> 스켈로스가 드랍하는 샤프하이드 30 (현 시점 3억 이상) 파밍
              </p>
              <p className="text-sm description-text mb-2">
                젠이 많지 않아 파티 사냥이 애매. 보통 자리를 사서 솔로 플레이
              </p>
              <p className="text-sm description-text">
                맛이들이 방어업 시 다크나이트는 두 방 컷 어려움. 네스트 골렘과 맛이의 몸박/마공이 강력하여 버서크 30 필요
              </p>
              <p className="text-sm font-semibold mt-2">
                상대적으로 <strong className="text-green-600 dark:text-green-400">브랜 마스터만 되어도 수월한 히어로가 강세</strong>
              </p>
            </div>

            {/* 위용둥 4인 바닥 */}
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold mb-2 text-blue-700 dark:text-blue-300">위용둥 (4인 바닥)</h4>
              <p className="text-sm description-text mb-2">
                <strong>구성:</strong> 1층 전사, 2층/3층 원격 격수, 프리스트
              </p>
              <p className="text-sm description-text mb-2">
                <strong>히어로:</strong> 버서크 30 + 브랜디 워콤 마스터 시 시간당 900만 이상 먹을 수 있는 초보 레벨터
              </p>
              <p className="text-sm description-text">
                바닥은 레벨과 스펙이 좋아야 하며, 지원금을 받고 가는 편
              </p>
            </div>

            {/* 남둥 */}
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold mb-2 text-purple-700 dark:text-purple-300">남둥 (다양한 파티 구성)</h4>
              <div className="space-y-2 text-sm description-text">
                <p>
                  <strong>전사 4인:</strong> 1층 또는 3층 전사 자리. 비숍이 격수(150레벨)로 파티에 껴서 4층 가능
                </p>
                <p>
                  <strong>제네절:</strong> 2, 3, 4층을 비숍이 제네로 밀고 1층 좌우, 2층 대비 (원거리 격수 사냥터)
                </p>
                <p>
                  <strong>전사 비숍 1대1:</strong> 3, 4층 전사 / 1, 2층 비숍. 전사가 비숍에게 지원금 지급
                </p>
              </div>
              <p className="text-sm font-semibold mt-2">
                히어로 기준 시간당 <strong className="text-purple-600 dark:text-purple-400">900만 이상 먹을 수 있는 초 9레벨 사냥터</strong>
              </p>
            </div>

            {/* 히어로 전용: 위용둥 6인 2층 낚시 */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border-2 border-blue-500">
              <h4 className="font-bold mb-2 text-blue-700 dark:text-blue-300">🎣 히어로 전용: 위용둥 6인 2층 낚시 자리</h4>
              <p className="text-sm description-text mb-2">
                발판에 히어로가 서서 브랜디를 사용하면 위에 있는 두 마리를 <strong>한 대도 안 맞고 잡을 수 있습니다.</strong>
              </p>
              <p className="text-sm description-text mb-2">
                <strong>구성:</strong> 1층, 2층 후, 3층은 원거리 격수 / 2층 좌측 낚시 자리가 히어로/섀도우 전용
              </p>
              <p className="text-sm description-text mb-2">
                <strong>진입:</strong> 123레벨부터 브랜디 시 2타겟 이상 가능하면 낚시 가능
              </p>
              <p className="text-sm font-semibold">
                포션을 하나도 먹지 않으며, 불라둥 좌와 비교하여 <strong className="text-blue-600 dark:text-blue-400">피로도가 낮아 히어로만의 특권 사냥터</strong>
              </p>
            </div>
          </div>
        </div>

        {/* 나이트 특화: 레화둥 옥상 */}
        <div className="card-bg p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20">
          <div className="flex items-start justify-between mb-3">
            <h3 className="subsection-title text-indigo-700 dark:text-indigo-300">
              ❄️ 나이트 특화 사냥터: 레화둥 옥상
            </h3>
            <span className="text-xs px-3 py-1 bg-indigo-600 text-white rounded-full">나이트 전용</span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong>경험치:</strong> 시간당 300만 정도
              </p>
              <p className="text-sm description-text mb-2">
                <strong>명중률:</strong> 97레벨 기준 총 136
              </p>
              <p className="text-sm description-text mb-2">
                <strong>드랍:</strong> 전행 60%
              </p>
            </div>

            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
              <h4 className="font-bold mb-2 text-indigo-700 dark:text-indigo-300">나이트 장점</h4>
              <p className="text-sm description-text mb-2">
                얼음칼 마스터 시 몬스터를 얼리면서 잡아 <strong>와이번의 마공을 맞지 않아 적자를 덜 봅니다.</strong>
              </p>
              <p className="text-sm description-text">
                크루세이더나 용기사는 적자를 심하게 보는 반면, 나이트는 적자를 보지 않는 선에서 사냥 가능
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm description-text">
                💡 불라동 협동에 비해 경험치는 적지만, 옥상 자리 전사 공급이 적어 <strong className="text-green-600 dark:text-green-400">취업이 쉽습니다.</strong> 
                브라동 자리 사기가 부담될 때 들르기 좋은 곳입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 레벨업 가이드 요약 */}
        <div className="card-bg p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <h3 className="subsection-title mb-4">📊 4차 전직 레벨업 로드맵</h3>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <th className="text-left py-2">레벨</th>
                  <th className="text-left py-2">추천 사냥터</th>
                  <th className="text-center py-2">시급</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-2">100-120</td>
                  <td>협곡 2호 / 블루 와이번 둥지 우1</td>
                  <td className="text-center">300~400만</td>
                </tr>
                <tr>
                  <td className="py-2">120-140</td>
                  <td>다크 와이번 5인 / 블루 와이번</td>
                  <td className="text-center">500~800만</td>
                </tr>
                <tr>
                  <td className="py-2">142-150</td>
                  <td>죽둥 솔플 / 위용둥 4인 바닥</td>
                  <td className="text-center">700~900만</td>
                </tr>
                <tr>
                  <td className="py-2">150+</td>
                  <td>남둥 / 위용둥 6인 (히어로 낚시)</td>
                  <td className="text-center">900만+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
