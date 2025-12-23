export default function Equipment() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">장비 추천</h2>
      <div className="space-y-6">
        <div className="card-bg p-6">
          <p className="description-text mb-4">
            장비는 전사의 전투력을 크게 좌우합니다. 아래 추천 세팅을 참고하세요.
          </p>
        </div>

        <div className="space-y-4">
          {/* 무기 */}
          <div className="card-bg p-6">
            <h3 className="subsection-title mb-4">⚔️ 무기</h3>
            <div className="space-y-3 description-text">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold mb-2">25레벨까지</p>
                <p className="text-sm">
                  상점 무기로 충분합니다. 추락 주의에서 사냥 시
                  <strong> 슬라임 드롭 포크 창 (15레벨)</strong> 추천.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-2">25레벨 이후</p>
                <p className="text-sm">
                  <strong>돼지 도감</strong> 또는 <strong>물고기 작살</strong>로
                  업그레이드하세요. 2차 전직 후에는 직업에 맞는 무기를
                  선택합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 방어구 */}
          <div className="card-bg p-6">
            <h3 className="subsection-title mb-4">🛡️ 방어구</h3>
            <div className="space-y-3 description-text">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold mb-2">25레벨까지</p>
                <p className="text-sm">상점 방어구로 버팁니다.</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="font-semibold mb-2">35레벨</p>
                <p className="text-sm">
                  전신 갑옷에 <strong>민첩성 주문서 100% 10장</strong>을 작업한
                  아이템을 구매하세요.
                </p>
              </div>
            </div>
          </div>

          {/* 신발 */}
          <div className="card-bg p-6">
            <h3 className="subsection-title mb-4">👟 신발</h3>
            <div className="space-y-3 description-text">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="font-semibold mb-2">11레벨</p>
                  <p className="text-sm">
                    커닝시티의 <strong>고무신</strong> (이속 +2)
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="font-semibold mb-2">26레벨</p>
                  <p className="text-sm">
                    헤네시스의 <strong>신발</strong> (이속 +3)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 기타 장비 */}
          <div className="card-bg p-6">
            <h3 className="subsection-title mb-4">✨ 기타 장비</h3>
            <div className="space-y-3 description-text">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <p className="font-semibold mb-2">돼지 도감 사용 시</p>
                <p className="text-sm">
                  <strong>빨간 삼각 방패</strong>와 함께 착용하면 시너지 효과가
                  좋습니다.
                  <br />
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    (아바 선마라면 방패 효과가 미미할 수 있음)
                  </span>
                </p>
              </div>
              <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                <p className="font-semibold mb-2">여성 캐릭터</p>
                <p className="text-sm">
                  <strong>스카이 세트 (25레벨)</strong>로 이동 속도를 대폭
                  향상시켜 쾌적한 사냥 가능.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
