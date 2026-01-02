export default function DarkKnightSkills() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">다크나이트 4차 스킬 트리</h2>
      
      <div className="space-y-6">
        {/* 기본 정보 */}
        <div className="card-bg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3">📌 핵심 포인트</h3>
            <p className="description-text mb-2">
              <strong>4차 전직 레벨:</strong> 120레벨
            </p>
            <p className="description-text">
              <strong>핵심 전략:</strong> 버서크로 HP가 낮을수록 공격력이 증가하는 하이리스크 하이리턴 스타일입니다.
            </p>
          </div>
        </div>

        {/* 주력 스킬: 버서크 */}
        <div className="card-bg p-6 border-l-4 border-red-500">
          <h3 className="subsection-title mb-4 text-red-700 dark:text-red-300">
            🔥 버서크 (Berserk)
          </h3>
          <div className="space-y-3">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong>효과:</strong> HP가 낮을수록 공격력이 증가합니다.
              </p>
              <p className="text-sm description-text">
                하이퍼 바디와 조합하여 극한의 공격력을 발휘하는 다크나이트의 핵심 스킬입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 스피어 버스터 */}
        <div className="card-bg p-6 border-l-4 border-purple-500">
          <h3 className="subsection-title mb-4 text-purple-700 dark:text-purple-300">
            🔱 스피어 버스터
          </h3>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <p className="text-sm description-text">
              3차에서 이어지는 주력 공격 스킬로, 창 사용 시 강력한 단일 공격을 펼칩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
