import Link from "next/link";

export default function KnightSkills() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">나이트 3차 스킬 트리</h2>
      
      <div className="space-y-6">
        {/* 기본 정보 */}
        <div className="card-bg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3">📌 핵심 포인트</h3>
            <p className="description-text mb-2">
              <strong>총 스킬 포인트:</strong> 151포인트
            </p>
            <p className="description-text">
              <strong>핵심 전략:</strong> 차지드 블로우와 속성 공격을 활용한 균형잡힌 전투 스타일입니다.
            </p>
          </div>
        </div>

        {/* 필수 스킬 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">🎯 필수 스킬</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold mb-2">차지드 블로우 ⭐⭐⭐</h4>
              <p className="text-sm description-text mb-2">
                <strong>마스터 레벨:</strong> 30
              </p>
              <p className="text-sm description-text">
                속성 공격을 가하는 주력 스킬입니다. 페이지 계열의 밥줄 스킬입니다.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold mb-2">블리스 (Bless) ⭐⭐⭐</h4>
              <p className="text-sm description-text">
                파티원의 명중률, 회피율, 방어력을 증가시키는 버프 스킬입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 4차 전직 안내 */}
        <div className="card-bg p-6 border-l-4 border-blue-500">
          <h3 className="subsection-title mb-4">🎯 4차 전직: 팔라딘 (Lv.120)</h3>
          <div className="space-y-3">
            <p className="description-text">
              120레벨에 <strong>팔라딘</strong>으로 4차 전직하면 블래스트, 헤븐즈 해머 등 최종 스킬을 획득합니다.
            </p>
            <Link 
              href="4th" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              → 팔라딘 육성 가이드 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
