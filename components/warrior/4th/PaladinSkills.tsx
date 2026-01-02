export default function PaladinSkills() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">팔라딘 4차 스킬 트리</h2>
      
      <div className="space-y-6">
        {/* 기본 정보 */}
        <div className="card-bg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3">📌 핵심 포인트</h3>
            <p className="description-text mb-2">
              <strong>4차 전직 레벨:</strong> 120레벨
            </p>
            <p className="description-text">
              <strong>핵심 전략:</strong> 블래스트와 헤븐즈 해머를 주력으로 사용하며, 속성 공격과 방어를 겸비합니다.
            </p>
          </div>
        </div>

        {/* 주력 스킬: 블래스트 */}
        <div className="card-bg p-6 border-l-4 border-blue-500">
          <h3 className="subsection-title mb-4 text-blue-700 dark:text-blue-300">
            ⚔️ 블래스트 (Blast)
          </h3>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm description-text">
                속성 공격을 강화한 팔라딘의 주력 공격 스킬입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 헤븐즈 해머 */}
        <div className="card-bg p-6 border-l-4 border-yellow-500">
          <h3 className="subsection-title mb-4 text-yellow-700 dark:text-yellow-300">
            🔨 헤븐즈 해머 (Heaven's Hammer)
          </h3>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <p className="text-sm description-text">
              하늘에서 거대한 망치를 떨어뜨려 광역 데미지를 주는 궁극기입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
