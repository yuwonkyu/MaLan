export default function SkillTree() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">스킬 트리 가이드 (2025년 9월 최신)</h2>
      <div className="space-y-6">
        <div className="card-bg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3">📌 핵심 포인트</h3>
            <p className="description-text mb-2">
              <strong>총 스킬 포인트:</strong> 1차 전직 시 사용 가능한 포인트는 61포인트입니다.
            </p>
            <p className="description-text">
              2025년 9월 메타에서는 25레벨부터 아리안트 사지대 진입이 잦아지므로, 
              <strong className="text-blue-600 dark:text-blue-400"> 슬래시 블러스트를 먼저 마스터(20레벨)</strong>하는 것이 더 유리합니다.
            </p>
          </div>
        </div>

        {/* 필수 시작 스킬 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4 text-red-700 dark:text-red-300">
            ⚠️ 필수 투자 순서
          </h3>
          <div className="p-5 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700 mb-4">
            <h4 className="font-bold mb-3 text-lg">
              1. HP 증가량 향상 (최우선!)
            </h4>
            <p className="description-text mb-2">
              <strong>HP 회복력 향상 5레벨</strong> 투자 후, <strong className="text-red-600 dark:text-red-400">HP 증가량 향상을 가장 먼저 마스터</strong>해야 합니다.
            </p>
            <p className="text-sm description-text text-red-600 dark:text-red-400 font-semibold">
              ⚠️ 중요: 증가량(Max HP 향상)을 가장 먼저 찍어야 하며, 이를 먼저 찍지 않으면 게임을 접어야 할 정도입니다.
            </p>
            <p className="text-sm description-text mt-2">
              특히 <strong>다크나이트</strong>는 반드시 우선적으로 선마해야 합니다. 히어로/팔라딘은 조금 늦어도 괜찮습니다.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-semibold mb-3">📋 2025년 9월 최신 투자 순서</p>
            <ol className="list-decimal list-inside space-y-2 text-sm description-text">
              <li><strong>HP 회복력 향상:</strong> 5레벨</li>
              <li><strong>HP 증가량 향상:</strong> 마스터 (최우선!)</li>
              <li><strong>파워 스트라이크:</strong> 10레벨</li>
              <li><strong>슬래시 블러스트:</strong> 20레벨 (선마 우선)</li>
              <li><strong>파워 스트라이크:</strong> 20레벨까지 추가 투자</li>
              <li><strong>인듀어:</strong> 3레벨</li>
              <li><strong>아이언 바디:</strong> 3레벨만 투자 (남는 포인트 분배)</li>
            </ol>
          </div>
        </div>

        {/* 아이언 바디 주의사항 */}
        <div className="card-bg p-6 border-l-4 border-yellow-500">
          <h3 className="subsection-title mb-3 text-yellow-700 dark:text-yellow-300">
            ⚠️ 아이언 바디 관련 중요 주의사항
          </h3>
          <div className="space-y-3">
            <p className="description-text">
              <strong className="text-red-600 dark:text-red-400">옛날 공략대로 아이언 바디를 20레벨 먼저 찍으면 안 됩니다!</strong>
            </p>
            <p className="description-text">
              1차에서는 <strong>3레벨만 투자</strong>하고, 아이언 바디는 2차, 3차 전직 후 스킬 포인트가 남을 때 투자해도 늦지 않습니다.
            </p>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm description-text">
                💡 <strong>대체 방법:</strong> 지구방위본부에서 파는 <strong>통증 완화제</strong>로 대체 가능합니다.
              </p>
              <p className="text-sm description-text mt-1">
                (1200 메소, 물방 30 증가 - 단, 아이언 바디나 다른 버프와 중첩되지 않음)
              </p>
            </div>
          </div>
        </div>

        {/* 스킬 상세 설명 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">📚 1차 스킬 상세 설명</h3>
          <div className="space-y-4">
            {/* HP 회복력 향상 */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-bold mb-2">HP 회복력 향상</h4>
              <p className="text-sm description-text">
                패시브 스킬로, 가만히 있으면 HP가 빨리 차는 효과가 있습니다.
                <strong className="text-yellow-600 dark:text-yellow-400"> HP 증가량 향상을 찍기 위한 선행 스킬 역할만</strong> 하며, 투자 가치는 없습니다.
              </p>
            </div>

            {/* HP 증가량 향상 */}
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold mb-2 text-red-700 dark:text-red-300">HP 증가량 향상 ⭐⭐⭐</h4>
              <p className="text-sm description-text mb-2">
                레벨에 상관없이 <strong>최대 HP의 증가량을 향상</strong>시킵니다.
              </p>
              <p className="text-sm description-text mb-2">
                레벨업 시 HP 최대량이 더 많이 늘어나며, <strong>스킬 초기화를 해도 이미 늘어난 HP는 초기화되지 않습니다.</strong>
              </p>
              <p className="text-sm description-text font-semibold">
                전사라면 <span className="text-red-600 dark:text-red-400">반드시 가장 먼저 찍어야 할 스킬</span>이며, 
                특히 다크나이트는 반드시 우선적으로 선마해야 합니다.
              </p>
            </div>

            {/* 인듀어 */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-bold mb-2">인듀어</h4>
              <p className="text-sm description-text">
                사다리에 매달려 있어도 HP 회복이 가능하게 합니다.
                <strong> 아이언 바디의 선행 스킬 그 이상의 의미는 없습니다.</strong>
              </p>
            </div>

            {/* 아이언 바디 */}
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-bold mb-2">아이언 바디</h4>
              <p className="text-sm description-text mb-2">
                일정 시간 동안 <strong>물리 방어력(물방) 40을 300초간</strong> 상승시킵니다.
              </p>
              <p className="text-sm description-text mb-2">
                프리스트의 블래스를 받을 때마다 꺼져서 다시 켜야 하며, 통증 완화제와 중첩되지 않아 <strong>1차에서는 투자 우선순위가 떨어집니다.</strong>
              </p>
              <p className="text-sm description-text">
                2차/3차 스킬 포인트가 남는 크루세이더, 나이트가 투자하며, 3전사 모두 4차 전직 후 파스/슬블을 안 쓰게 되면 남는 포인트 대부분을 마스터하게 됩니다.
              </p>
            </div>

            {/* 파워 스트라이크 */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-bold mb-2">파워 스트라이크 (파스) ⭐⭐⭐</h4>
              <p className="text-sm description-text mb-2">
                <strong>MP 12 소비, 데미지 260%</strong>의 1타 기술입니다. (기본 100% + 추가 160%)
              </p>
              <p className="text-sm description-text mb-2">
                한 마리씩 밀어 잡아야 하는 <strong>전사의 초주력 밥줄 스킬</strong>입니다.
              </p>
              <p className="text-sm description-text font-semibold">
                사용 시점: 히어로(120레벨), 팔라딘(123레벨), 다크나이트(약 72~73레벨)까지 사용합니다.
              </p>
            </div>

            {/* 슬래시 블러스트 */}
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-bold mb-2">슬래시 블러스트 (슬블) ⭐⭐⭐</h4>
              <p className="text-sm description-text mb-2">
                <strong>HP/MP 소모, 데미지 130%</strong>로 여섯 마리를 동시 타격하는 기술입니다.
              </p>
              <p className="text-sm description-text mb-2">
                파워 스트라이크 데미지의 절반 수준이며, 최초 타격 몬스터 옆으로 전이되는 방식으로 <strong>범위가 넓습니다.</strong>
              </p>
              <p className="text-sm description-text font-semibold">
                2025년 9월 메타: 25레벨부터 아리안트 사지대 진입이 잦아 <span className="text-purple-600 dark:text-purple-400">슬블 선마가 추천</span>됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
