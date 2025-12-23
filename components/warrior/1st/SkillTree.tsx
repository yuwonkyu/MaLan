export default function SkillTree() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">스킬 트리 가이드</h2>
      <div className="space-y-6">
        <div className="card-bg p-6">
          <p className="description-text mb-4">
            전사의 스킬 트리는 초반 선택에 따라 사냥 스타일과 메소 소모가 크게
            달라집니다. 아래 필수 스킬과 두 가지 주요 빌드를 소개합니다.
          </p>
        </div>

        {/* 필수 시작 스킬 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4 text-red-700 dark:text-red-300">
            ⚠️ 필수 시작 스킬
          </h3>
          <div className="p-5 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
            <h4 className="font-bold mb-2 text-lg">
              HP 회복력 향상 (5) + HP 증가량 향상 (M)
            </h4>
            <p className="description-text mb-2">
              전사의 생존을 책임지는 <strong>필수 스킬</strong>입니다.
              <span className="text-red-600 dark:text-red-400 font-bold">
                {" "}
                절대 먼저 찍어야 합니다.
              </span>
            </p>
            <p className="text-sm description-text text-red-600 dark:text-red-400 font-semibold">
              실수로 파워 스트라이크(파스)를 먼저 찍었다면, 후에 증가한 체력이
              적을 수 있습니다.
            </p>
          </div>
        </div>

        {/* 두 가지 스킬 트리 경로 */}
        <div className="space-y-6">
          <h3 className="subsection-title mb-4">두 가지 스킬 트리 경로</h3>

          {/* 1) 파스 & 슬블 선마 트리 */}
          <div className="card-bg p-6 border-l-4 border-blue-500">
            <h4 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-300">
              1) 파스 & 슬블 선마 트리
            </h4>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold mb-2">스킬 순서</p>
                <ol className="list-decimal list-inside space-y-1 text-sm description-text">
                  <li>회복력 5</li>
                  <li>증가량 10</li>
                  <li>파스 M (마스터)</li>
                  <li>슬블 M (마스터)</li>
                  <li>인듀어 3</li>
                  <li>아바 3</li>
                </ol>
              </div>

              <div>
                <p className="font-semibold mb-2 description-text">특징</p>
                <p className="text-sm description-text mb-3">
                  파워 스트라이크와 슬래시 블래스트를 조기에 활용해 화려한
                  사냥이 가능합니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                    <p className="font-semibold text-sm text-green-700 dark:text-green-300 mb-1">
                      ✅ 장점
                    </p>
                    <p className="text-sm description-text">
                      몬스터를 빠르게 처리하며 "잡는 재미"를 느낄 수 있습니다.
                    </p>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded">
                    <p className="font-semibold text-sm text-red-700 dark:text-red-300 mb-1">
                      ❌ 단점
                    </p>
                    <p className="text-sm description-text">
                      MP 소모가 크며, 물약 비용이 많이 듭니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <p className="font-semibold text-sm mb-2">💡 보완 방법</p>
                <p className="text-sm description-text">
                  루디브리엄의 <strong>통증완화제</strong> (1200 메소, 물방 30
                  증가)로 어느 정도 보완 가능하지만, 아이언 바디나 다른 버프와
                  중첩되지 않으니 주의하세요.
                </p>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm">
                  <strong>추천 대상:</strong> 물약값과 통증완화제 비용을 감당할
                  수 있는 플레이어
                </p>
              </div>
            </div>
          </div>

          {/* 2) 아바 선마 트리 */}
          <div className="card-bg p-6 border-l-4 border-purple-500">
            <h4 className="font-bold text-lg mb-3 text-purple-700 dark:text-purple-300">
              2) 아바 (아이언 바디) 선마 트리
            </h4>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold mb-2">스킬 순서</p>
                <ol className="list-decimal list-inside space-y-1 text-sm description-text">
                  <li>회복력 5</li>
                  <li>증가량 10</li>
                  <li>인듀어 3</li>
                  <li>아바 M (마스터)</li>
                  <li>파스 M (마스터)</li>
                  <li>슬블 3</li>
                </ol>
              </div>

              <div>
                <p className="font-semibold mb-2 description-text">특징</p>
                <p className="text-sm description-text mb-3">
                  아이언 바디로 물리 방어력을 높여 피해를 최소화합니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                    <p className="font-semibold text-sm text-green-700 dark:text-green-300 mb-1">
                      ✅ 장점
                    </p>
                    <p className="text-sm description-text">
                      물약 소모가 적어 무자본 유저나 첫 캐릭터로 전사를 키우는
                      분들에게 최적입니다.
                    </p>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded">
                    <p className="font-semibold text-sm text-red-700 dark:text-red-300 mb-1">
                      ❌ 단점
                    </p>
                    <p className="text-sm description-text">
                      25레벨 전까지 평타 위주 사냥이라 다소 답답할 수 있습니다.
                      <br />
                      <span className="text-xs">
                        (초반 파스는 평타보다 효율이 낮을 때도 많습니다.)
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="font-semibold text-sm mb-2">🔄 변형 빌드</p>
                <p className="text-sm description-text">
                  평타가 너무 지루하다면{" "}
                  <strong>"파스 M → 인듀어 3 → 아바 M → 슬블 3"</strong>으로
                  조정 가능.
                </p>
              </div>

              <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="text-sm">
                  <strong>추천 대상:</strong> 메소 절약을 우선시하는 플레이어
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 오르비스 시대의 변화 */}
        <div className="card-bg p-6 bg-linear-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
          <h3 className="subsection-title mb-3 text-orange-700 dark:text-orange-300">
            🌟 오르비스 시대의 변화
          </h3>
          <p className="description-text">
            오르비스 사냥터는 몹 젠량이 많아{" "}
            <strong>슬래시 블래스트(슬블)의 중요성</strong>이 커졌습니다. 기존
            빅토리아 아일랜드에서는 슬블 없이도 사냥이 가능했지만,
            오르비스에서는{" "}
            <strong className="text-orange-600 dark:text-orange-400">
              스킬 초기화권을 사용해 아바를 내리고 슬블을 찍는 것이 추천
            </strong>
            됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
