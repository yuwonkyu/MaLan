export default function HuntingGroundsGuide() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">레벨별 추천 사냥터 (2025년 8월 최신)</h2>
      
      <div className="space-y-6">
        {/* 기본 정보 */}
        <div className="card-bg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3">📌 사냥터 가이드 개요</h3>
            <p className="description-text mb-2">
              아리안트, 마가티아 지역 출시(2025년 7월 25일)를 반영한 최신 사냥터 가이드입니다.
            </p>
            <p className="description-text">
              <strong>구성:</strong> 최고 효율 사냥터, 대안 사냥터, 돈벌이 사냥터로 구분하여 제시합니다.
            </p>
          </div>
        </div>

        {/* 명중률 계산 */}
        <div className="card-bg p-6 border-l-4 border-purple-500">
          <h3 className="subsection-title mb-4 text-purple-700 dark:text-purple-300">
            🎯 전사 명중률 계산법
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-bold mb-2">명중률 추가 수단</h4>
              <p className="text-sm description-text mb-2">
                <strong className="text-red-600 dark:text-red-400">중요:</strong> 알약, 물약, 블레스, 버프는 서로 <strong>상호 중첩되지 않습니다.</strong>
              </p>
              <p className="text-sm description-text">
                블레스를 받으면 이전 버프(알약 등)는 모두 사라지며, 블레스 20이 최대치입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2 text-sm">총 명중률</h4>
                <p className="text-sm description-text">
                  모든 버프를 사용한 상태에서 스탯창에 표시되는 최종 명중률 (블레스 포함)
                </p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2 text-sm">순 명중률</h4>
                <p className="text-sm description-text">
                  아무런 버프를 받지 않고 현재 스탯창에 표시되는 명중률
                </p>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-bold mb-2">명중률 계산 예시</h4>
              <p className="text-sm description-text mb-2">
                46레벨 전사가 마스터 크로노스(46레벨 몬스터) 사냥 시: <strong>총 명중률 89</strong> 필요
              </p>
              <p className="text-sm description-text mb-2">
                블레스(20) 적용 시: <strong>순 명중률 69</strong>면 충분
              </p>
              <p className="text-sm description-text">
                41레벨이 46레벨 몬스터 사냥 시: 89 + (3.20 × 5) = <strong>총 명중률 105</strong> 필요 (블레스 적용 시 85)
              </p>
            </div>
          </div>
        </div>

        {/* 30-35레벨 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">📍 Lv.30-35 (2차 전직 초기)</h3>
          
          <div className="space-y-4">
            {/* 에오스탑 */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold">에오스탑 100층</h4>
                <span className="text-xs px-2 py-1 bg-blue-600 text-white rounded">권장</span>
              </div>
              <p className="text-sm description-text mb-2">
                <strong>진입 레벨:</strong> 32레벨 | <strong>명중률:</strong> 총 48 (알약 전 38)
              </p>
              <p className="text-sm description-text mb-2">
                6층의 전통 사냥터로, 1, 2, 3층을 나눠 3인 파티 사냥을 합니다.
              </p>
              <p className="text-sm description-text">
                💡 <strong>팁:</strong> 2층 전사 자리는 낚시 자리가 있어 전사의 사거리를 이용한 낚시가 가능합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 35-50레벨 - 카니발 */}
        <div className="card-bg p-6 border-l-4 border-red-500 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
          <h3 className="subsection-title mb-4 text-red-700 dark:text-red-300">
            🔥 Lv.35-50 - 몬스터 카니발 (압도적 필수!)
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong className="text-red-600 dark:text-red-400 text-lg">전사에게 카니발 1티어 콘텐츠 - 무조건 카니발을 해야 합니다!</strong>
              </p>
              <p className="text-sm description-text mb-2">
                <strong>명중률:</strong> 36레벨 기준 총 75 필요 (35레벨 기준 70)
              </p>
              <p className="text-sm description-text">
                <strong>스탯 분배:</strong> 보통 순 덱스를 35~40 정도 찍게 됩니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2 text-green-700 dark:text-green-300">✅ 압도적 장점</h4>
                <ul className="list-disc list-inside text-sm description-text space-y-1">
                  <li>도핑 포션 외 HP 포션 불필요</li>
                  <li>물약 적자 제로</li>
                  <li>메이플 코인 파밍 가능</li>
                  <li>슈피겔만의 목걸이 획득</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2 text-blue-700 dark:text-blue-300">📅 운영</h4>
                <p className="text-sm description-text mb-2">
                  <strong>하루 최대 16판</strong>까지 가능
                </p>
                <p className="text-sm description-text">
                  2차 전사라면 카니발 16판을 하고 시작하는 것이 공룰입니다.
                </p>
              </div>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
              <p className="text-sm font-bold text-center">
                ⚠️ 그 어떤 쩔 파티 사냥도 카니발을 이길 수 없습니다!
              </p>
            </div>
          </div>
        </div>

        {/* 40-50레벨 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">📍 Lv.40-50 (카니발 보조 사냥터)</h3>
          
          <div className="space-y-4">
            {/* 에오스탑 10층 */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-gray-500">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold">에오스탑 10층 (블로커스)</h4>
                <span className="text-xs px-2 py-1 bg-gray-600 text-white rounded">대안</span>
              </div>
              <p className="text-sm description-text mb-2">
                <strong>명중률:</strong> 40레벨 기준 총 49 필요
              </p>
              <p className="text-sm description-text">
                블로커스의 몸박 데미지가 낮아 2차 전직 전사가 <strong>적자 없이 사냥</strong>할 수 있는 유일한 곳 중 하나입니다.
              </p>
            </div>

            {/* 비추천 사냥터 */}
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-bold mb-2 text-red-700 dark:text-red-300">⚠️ 비추천 사냥터</h4>
              <ul className="space-y-2 text-sm description-text">
                <li>
                  <strong>시간의 길 (크로노스 쩔터):</strong> 카니발과 마가티아 등장으로 포지션 애매. 전사는 걸러지는 편
                </li>
                <li>
                  <strong>루디브리엄 파티퀘스트:</strong> 돈벌이 목적 주문서 득템용. 레벨업은 카니발이 우위
                </li>
                <li>
                  <strong>오르비스 파티퀘스트:</strong> 카니발과 마가티아의 상위 호환으로 더 이상 갈 이유 없음
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 51-70레벨 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">📍 Lv.51-70 (2차 전직 후기)</h3>
          
          <div className="space-y-4">
            {/* 마가티아 연구소 C */}
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold">마가티아 연구소 C (시원)</h4>
                <span className="text-xs px-2 py-1 bg-purple-600 text-white rounded">최고 효율</span>
              </div>
              <p className="text-sm description-text mb-2">
                <strong>진입 레벨:</strong> 51레벨 | <strong>명중률:</strong> 54레벨 기준 총 66 (51레벨은 74)
              </p>
              <p className="text-sm description-text mb-2">
                <strong>드랍:</strong> 54레벨 로이드가 귀행 10% 드랍 (꽤 돈이 됨)
              </p>
              <p className="text-sm description-text mb-2">
                맵이 넓고 전사가 모리 사냥하기 좋아 <strong>전사에게 안성맞춤인 솔플 사냥터</strong>입니다.
              </p>
              <p className="text-sm text-yellow-600 dark:text-yellow-400">
                💡 인기가 많아 자리가 없다면 마가티아 A1이나 빈 곳 아무 곳이나 가도 괜찮습니다.
              </p>
            </div>

            {/* 대만 야시장 */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold">대만 야시장 거리 3</h4>
                <span className="text-xs px-2 py-1 bg-blue-600 text-white rounded">대안</span>
              </div>
              <p className="text-sm description-text mb-2">
                <strong>명중률:</strong> 50레벨 기준 총 73 (인형 자판기 제외)
              </p>
              <p className="text-sm description-text">
                시원 자리 없을 때 가면 좋으며, 자판기를 깨면 인형이 쏟아져 나옵니다. 1인 또는 2인 파티 사냥 가능.
              </p>
            </div>

            {/* 마가티아 C2 심쩔 */}
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold">마가티아 C2 심쩔</h4>
                <span className="text-xs px-2 py-1 bg-green-600 text-white rounded">최고 효율</span>
              </div>
              <p className="text-sm description-text mb-2">
                <strong>진입 레벨:</strong> 53레벨 | <strong>명중률:</strong> 58레벨 기준 총 74 (53레벨은 83, 블레스 전 63)
              </p>
              <p className="text-sm description-text mb-2">
                <strong>파티 구성:</strong> 맵을 좌우, 가운데로 세 등분. 프리스트 1명, 좌우 2명씩 신비 쩔비를 프리에게 제공
              </p>
              <p className="text-sm description-text mb-2">
                <strong>드랍:</strong> 네오 로이드(장공), 로이드(귀행)
              </p>
              <p className="text-sm description-text font-semibold">
                카니발에서 차디찬 벌판 골 넘어가기 중간 애매한 구간을 메꿔주는 <strong className="text-green-600 dark:text-green-400">최고의 쩔터</strong>입니다.
              </p>
            </div>

            {/* 골렘의 숲 */}
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold">슬리피우드 골렘의 숲</h4>
                <span className="text-xs px-2 py-1 bg-amber-600 text-white rounded">권장</span>
              </div>
              <p className="text-sm description-text mb-2">
                <strong>진입 레벨:</strong> 60레벨 | <strong>명중률:</strong> 59레벨 기준 총 74 (블레스 전 54)
              </p>
              <p className="text-sm description-text mb-2">
                <strong>경험치:</strong> 시간당 40만~60만 | <strong>드랍:</strong> 믹스 골렘(장공)
              </p>
              <p className="text-sm description-text">
                차디찬 벌판과 함께 60~70레벨 전붕이들의 고향. 시트에서 스무스하게 넘어오기 좋습니다.
              </p>
            </div>

            {/* 차디찬 벌판 */}
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-500">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold">엘나스 차디찬 벌판</h4>
                <span className="text-xs px-2 py-1 bg-indigo-600 text-white rounded">최고 효율</span>
              </div>
              <p className="text-sm description-text mb-2">
                <strong>진입 레벨:</strong> 60레벨 | <strong>명중률:</strong> 59레벨 기준 총 92
              </p>
              <p className="text-sm description-text mb-2">
                <strong>경험치:</strong> 시간당 40만~70만
              </p>
              <p className="text-sm description-text mb-2">
                <strong>드랍:</strong> 화이트팽(투지 100% - 280만), 헥터(막민, 귀체 100%)
              </p>
              <p className="text-sm description-text font-semibold">
                <strong className="text-indigo-600 dark:text-indigo-400">전이에게 제2의 페리온</strong>이며, 3차 전직까지 푹 썩는 곳 중 하나입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 레벨업 팁 */}
        <div className="card-bg p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <h3 className="subsection-title mb-4">💡 레벨업 효율 팁</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm description-text">
                <strong>1. 카니발 16판 필수:</strong> 35~50레벨 구간에서 카니발 16판을 먼저 소화하는 것이 기본입니다.
              </p>
            </div>
            <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm description-text">
                <strong>2. 명중률 관리:</strong> 덱스를 35~40 정도 찍어두면 대부분의 사냥터 진입이 가능합니다.
              </p>
            </div>
            <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm description-text">
                <strong>3. 적자 최소화:</strong> 마가티아 시리즈와 카니발은 적자가 거의 없어 물약값 부담이 적습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
