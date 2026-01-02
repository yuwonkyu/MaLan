export default function HeroSkills() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">히어로 4차 스킬 트리 & 사냥터 진입 가이드</h2>
      
      <div className="space-y-6">
        {/* 기본 정보 */}
        <div className="card-bg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3">📌 핵심 포인트</h3>
            <p className="description-text mb-2">
              <strong>4차 전직 레벨:</strong> 120레벨
            </p>
            <p className="description-text">
              <strong>핵심 전략:</strong> 브랜디시(브랜드)를 주력으로 사용하며, 돌진/스탠스로 사냥터 효율을 극대화합니다.
            </p>
          </div>
        </div>

        {/* 주력 스킬: 브랜디시 */}
        <div className="card-bg p-6 border-l-4 border-blue-500">
          <h3 className="subsection-title mb-4 text-blue-700 dark:text-blue-300">
            ⚔️ 브랜디시 (Brandish) - 히어로 주력기
          </h3>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong>효과:</strong> 액티브 스킬. 최대 세 명을 두 번 공격 (260% * 2회)
              </p>
              <p className="text-sm description-text mb-2">
                <strong className="text-blue-600 dark:text-blue-400">매우 넓은 사거리와 빠른 공속</strong>으로 히어로를 1티어로 만든 주력기입니다.
              </p>
              <p className="text-sm description-text font-semibold">
                💡 마스터리북 가격도 비싸지 않아 주력으로 사용됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* 인레이지 */}
        <div className="card-bg p-6 border-l-4 border-red-500">
          <h3 className="subsection-title mb-4 text-red-700 dark:text-red-300">
            🔥 인레이지 (Enrage)
          </h3>
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <p className="text-sm description-text">
              분노를 극대화하여 공격력을 크게 증가시킵니다. 히어로의 최종 버프 스킬입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
