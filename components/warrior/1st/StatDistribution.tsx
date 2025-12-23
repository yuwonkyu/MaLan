export default function StatDistribution() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">스탯 분배 전략</h2>
      <div className="space-y-6">
        <div className="card-bg p-6">
          <p className="description-text mb-4">
            전사의 스텟 분배는 캐릭터의 성장과 사냥 효율을 좌우하는 핵심입니다.
            전사는{" "}
            <strong className="text-red-600 dark:text-red-400">
              주스텟 힘(STR)
            </strong>
            과{" "}
            <strong className="text-blue-600 dark:text-blue-400">
              부스텟 민첩(DEX)
            </strong>
            을 기반으로 성장합니다.
          </p>

          <div className="space-y-6">
            {/* 주스텟: 힘 */}
            <div>
              <h3 className="subsection-title mb-3 text-red-700 dark:text-red-300">
                주스텟: 힘 (STR)
              </h3>
              <div className="space-y-3 description-text">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="font-semibold mb-2">왜 중요할까?</p>
                  <p>
                    힘은 전사의 데미지와 직결되며, 대략{" "}
                    <strong>3.5 STR당 1 공격력</strong>이 증가합니다. 또한, 전사
                    장비를 착용하려면 일정 수준의 힘 스텟이 필요합니다.
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="font-semibold mb-2">💡 투자 팁</p>
                  <p>최대한 힘에 집중 투자하여 데미지를 극대화하세요.</p>
                </div>
              </div>
            </div>

            {/* 부스텟: 민첩 */}
            <div>
              <h3 className="subsection-title mb-3 text-blue-700 dark:text-blue-300">
                부스텟: 민첩 (DEX)
              </h3>
              <div className="space-y-3 description-text">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="font-semibold mb-2">어떤 효과가 있나?</p>
                  <p>
                    민첩은 <strong>1 DEX당 0.8 명중치</strong>를 올려주며, 최소
                    공격력을 약간 증가시킵니다. 명중치는 몬스터를 공격할 때
                    "Miss"가 뜨지 않도록 보장하는 중요한 요소입니다.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                  <p className="font-semibold mb-2">⚠️ 주의점</p>
                  <p>
                    메이플랜드의 각 몬스터는 고유의 명중 요구치를 가지고
                    있습니다. 이를 충족하지 못하면 공격이 빗나가니 주의하세요.
                  </p>
                </div>
              </div>
            </div>

            {/* 효율적인 분배법 */}
            <div>
              <h3 className="subsection-title mb-3">효율적인 분배법</h3>
              <div className="p-4 bg-linear-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
                <p className="font-semibold mb-3 text-purple-700 dark:text-purple-300">
                  🎯 핵심 전략
                </p>
                <p className="description-text mb-3">
                  현재 사냥 중인 몬스터의 명중 요구치를{" "}
                  <strong>최소한의 DEX 투자</strong>로 충족시키고, 나머지 스텟
                  포인트를 <strong>STR에 몰아주는 것</strong>이 이상적입니다.
                </p>
                <p className="description-text text-sm">
                  예를 들어, 커닝 파티 퀘스트의 리게이터(명중 요구치 45)를
                  상대하려면 DEX를 조정해 45 이상의 명중치를 확보해야 합니다.
                </p>
              </div>

              <div className="mt-3 p-5 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-2 border-indigo-300 dark:border-indigo-700">
                <p className="font-bold mb-3 text-indigo-700 dark:text-indigo-300 text-lg">
                  📊 구체적인 스텟 분배 공식
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded">
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      30레벨 이전
                    </p>
                    <p className="description-text text-sm">
                      <strong className="text-blue-600 dark:text-blue-400">
                        DEX = 레벨 × 2
                      </strong>
                      <br />
                      <strong className="text-red-600 dark:text-red-400">
                        나머지 스텟 포인트 = 힘(STR)
                      </strong>
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      예: 20레벨 → DEX 40, 나머지 모두 STR
                    </p>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded">
                    <p className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                      30레벨 이후 (2차 전직 후)
                    </p>
                    <p className="description-text text-sm">
                      레벨업 시{" "}
                      <strong className="text-blue-600 dark:text-blue-400">
                        DEX 1
                      </strong>{" "}
                      +
                      <strong className="text-red-600 dark:text-red-400">
                        {" "}
                        STR 4
                      </strong>{" "}
                      비율로 분배
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      꾸준히 명중률을 확보하면서 화력을 극대화
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-sm description-text">
                  💚 <strong>꿀팁:</strong> 사냥터 이동 시마다 명중 요구치를
                  확인하고 DEX를 조율하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
