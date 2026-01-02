import Link from "next/link";

export default function BerserkerSkills() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">버서커/용기사 3차 스킬 트리</h2>
      
      <div className="space-y-6">
        {/* 기본 정보 */}
        <div className="card-bg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3">📌 핵심 포인트</h3>
            <p className="description-text mb-2">
              <strong>총 스킬 포인트:</strong> 151포인트
            </p>
            <p className="description-text">
              <strong>핵심 전략:</strong> 스피어 버스터와 봉으로 강력한 공격을 펼칩니다.
            </p>
          </div>
        </div>

        {/* 필수 스킬 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">🎯 필수 스킬</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold mb-2">스피어 버스터 ⭐⭐⭐</h4>
              <p className="text-sm description-text mb-2">
                <strong>마스터 레벨:</strong> 30
              </p>
              <p className="text-sm description-text">
                창을 사용한 강력한 단일 공격 스킬입니다. 85레벨 이후 주력 스킬입니다.
              </p>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold mb-2">봉 (Fury) ⭐⭐⭐</h4>
              <p className="text-sm description-text">
                광역 공격 스킬. 폴암 사용 시 다수의 적을 동시에 공격합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 무기 선택 */}
        <div className="card-bg p-6 border-l-4 border-yellow-500">
          <h3 className="subsection-title mb-4 text-yellow-700 dark:text-yellow-300">
            ⚔️ 무기 선택 전략
          </h3>
          <div className="space-y-3">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong>80레벨 이후 로어 사냥:</strong> 스공만 중요하므로 저렴한 폴람/창 사용
              </p>
              <p className="text-sm description-text mb-2">
                <strong>85레벨 이후 스피어 버스터:</strong> 반드시 창 사용
              </p>
              <p className="text-sm description-text">
                <strong>가성비:</strong> 로어용 폴암 + 버스터용 창 따로 구비
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
