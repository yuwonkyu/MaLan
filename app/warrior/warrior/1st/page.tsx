import Link from "next/link";

const WarriorFirstJobPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 헤더 */}
      <div className="mb-8">
        <Link
          href="/warrior"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
        >
          ← 전사 직업군으로 돌아가기
        </Link>
        <h1 className="page-title mb-4">
          전사 (Warrior) - 1차 전직 완벽 가이드
        </h1>
        <p className="description-text text-lg">
          스텟 분배부터 스킬 트리, 사냥터, 장비까지 전사 육성의 모든 것
        </p>
      </div>

      {/* 스탯 분배 */}
      <section className="mb-12">
        <h2 className="section-title mb-6">스탯 분배 전략</h2>
        <div className="space-y-6">
          <div className="card-bg p-6">
            <p className="description-text mb-4">
              전사의 스텟 분배는 캐릭터의 성장과 사냥 효율을 좌우하는
              핵심입니다. 전사는{" "}
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
                      <strong>3.5 STR당 1 공격력</strong>이 증가합니다. 또한,
                      전사 장비를 착용하려면 일정 수준의 힘 스텟이 필요합니다.
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
                      민첩은 <strong>1 DEX당 0.8 명중치</strong>를 올려주며,
                      최소 공격력을 약간 증가시킵니다. 명중치는 몬스터를 공격할
                      때 "Miss"가 뜨지 않도록 보장하는 중요한 요소입니다.
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
                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
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

      {/* 스킬 트리 */}
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
                    <strong>추천 대상:</strong> 물약값과 통증완화제 비용을
                    감당할 수 있는 플레이어
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
                        25레벨 전까지 평타 위주 사냥이라 다소 답답할 수
                        있습니다.
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
          <div className="card-bg p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
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

      {/* 추천 사냥터 */}
      <section className="mb-12">
        <h2 className="section-title mb-6">레벨별 추천 사냥터</h2>
        <div className="space-y-6">
          <div className="card-bg p-6">
            <p className="description-text mb-4">
              전사는 명중 요구치만 충족하면 어디서든 사냥이 가능합니다. 아래
              레벨별 추천 사냥터를 확인하세요.
            </p>
          </div>

          <div className="space-y-4">
            {/* 10~15레벨 */}
            <div className="card-bg p-6 border-l-4 border-green-500">
              <h3 className="tier-label text-green-700 dark:text-green-300 mb-3">
                Lv.10-15
              </h3>
              <div className="space-y-3 description-text">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-300 dark:border-green-700">
                  <p className="font-semibold mb-1">
                    헤네시스 서쪽 사냥터 1 (추천)
                  </p>
                  <p className="text-sm">
                    10~20레벨 유저들의 2~4인 파티 사냥이 주로 이뤄집니다.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="font-semibold mb-1">
                    <Link
                      href="/wolmyo-pq"
                      className="hover:underline text-blue-700 dark:text-blue-300"
                    >
                      월묘 파티 퀘스트 (3~6인) →
                    </Link>
                  </p>
                  <p className="text-sm">
                    10레벨 이상부터 참여 가능. 제한시간 10분, 보너스 맵 진입 시
                    추가 보상.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="font-semibold mb-1">
                    남쪽 숲 나무 던전 1 (슬라임 굴)
                  </p>
                  <p className="text-sm">
                    슬라임으로 빠르게 경험치를 쌓아보세요.
                  </p>
                </div>
              </div>
            </div>

            {/* 15~20레벨 */}
            <div className="card-bg p-6 border-l-4 border-blue-500">
              <h3 className="tier-label text-blue-700 dark:text-blue-300 mb-3">
                Lv.15-20
              </h3>
              <div className="space-y-3 description-text">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-300 dark:border-green-700">
                  <p className="font-semibold mb-1">
                    <Link
                      href="/party-quest/wolmyo"
                      className="hover:underline text-green-700 dark:text-green-300"
                    >
                      월묘 파티 퀘스트 (3~6인) →
                    </Link>
                  </p>
                  <p className="text-sm">
                    10레벨 이상부터 참여 가능. 제한시간 10분, 보너스 맵 진입 시
                    추가 보상.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="font-semibold mb-1">
                    헤네시스 서쪽 사냥터 1 (권장)
                  </p>
                  <p className="text-sm">
                    많은 유저들이 이곳에서 쭉 사냥합니다. 가장 안정적인 선택.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="font-semibold mb-1">
                    헤네시스 동쪽 풀숲 (솔플)
                  </p>
                  <p className="text-sm">
                    혼자 사냥하고 싶을 때 좋은 선택지입니다.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="font-semibold mb-1">돼지의 해안가 (1~2인)</p>
                  <p className="text-sm">리본돼지를 잡을 수 있습니다.</p>
                </div>
              </div>
            </div>

            {/* 21~25레벨 */}
            <div className="card-bg p-6 border-l-4 border-purple-500">
              <h3 className="tier-label text-purple-700 dark:text-purple-300 mb-3">
                Lv.21-25
              </h3>
              <div className="space-y-3 description-text">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-300 dark:border-green-700">
                  <p className="font-semibold mb-1">개미굴 (파티)</p>
                  <p className="text-sm">
                    21레벨부터 입장 가능하며, 파티 사냥으로 안정적인 경험치
                    확보.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="font-semibold mb-1">지하철 버블링 사냥</p>
                  <p className="text-sm">버블 몬스터를 조심하세요.</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="font-semibold mb-1">
                    남쪽 숲 나무 던전 2 (초록 버섯 굴)
                  </p>
                  <p className="text-sm">초록 버섯이 제법 강력합니다.</p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="font-semibold mb-1">
                    추락 주의 or 북쪽 공사장 꼭대기
                  </p>
                  <p className="text-sm">리스크가 있지만 보상이 큽니다.</p>
                </div>
              </div>
            </div>

            {/* 25~30레벨 */}
            <div className="card-bg p-6 border-l-4 border-orange-500">
              <h3 className="tier-label text-orange-700 dark:text-orange-300 mb-3">
                Lv.25-30
              </h3>
              <div className="space-y-3 description-text">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-300 dark:border-green-700">
                  <p className="font-semibold mb-1">개미굴 (6인 풀팟)</p>
                  <p className="text-sm">파티를 맺고 안전하게 사냥하세요.</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-300 dark:border-blue-700">
                  <p className="font-semibold mb-1">
                    <Link
                      href="/party-quest"
                      className="hover:underline text-blue-700 dark:text-blue-300"
                    >
                      커닝 파티 퀘스트 (4인) →
                    </Link>
                  </p>
                  <p className="text-sm">
                    전사는 비추하나 참여 가능합니다. 리게이터{" "}
                    <strong className="text-blue-600 dark:text-blue-400">
                      명중 요구치 45
                    </strong>
                    를 맞추는 것이 필수입니다.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="font-semibold mb-1">
                    중국 상해 북부 평원 (3~4인)
                  </p>
                  <p className="text-sm">이동은 멀지만 경험치가 쏠쏠합니다.</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-sm">
                  💚 <strong>꿀팁:</strong>{" "}
                  <Link
                    href="/party-quest"
                    className="hover:underline text-blue-600 dark:text-blue-400 font-semibold"
                  >
                    커닝 파티 퀘스트
                  </Link>
                  를 진행하려면
                  <strong> 돼지 도감</strong>이나 <strong>물고기 작살</strong>,
                  그리고 DEX 투자를 통해 <strong>명중률 45 이상</strong>을
                  확보하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 장비 추천 */}
      <section className="mb-12">
        <h2 className="section-title mb-6">장비 추천</h2>
        <div className="space-y-6">
          <div className="card-bg p-6">
            <p className="description-text mb-4">
              장비는 전사의 전투력을 크게 좌우합니다. 아래 추천 세팅을
              참고하세요.
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
                    <strong>돼지 도감</strong> 또는 <strong>물고기 작살</strong>
                    로 업그레이드하세요. 2차 전직 후에는 직업에 맞는 무기를
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
                    전신 갑옷에 <strong>민첩성 주문서 100% 10장</strong>을
                    작업한 아이템을 구매하세요.
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
                    <strong>빨간 삼각 방패</strong>와 함께 착용하면 시너지
                    효과가 좋습니다.
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

      {/* 2차 전직 준비 */}
      <section className="mb-12">
        <h2 className="section-title mb-6">2차 전직 준비</h2>
        <div className="card-bg p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
          <div className="space-y-4 description-text">
            <p>
              <strong className="text-lg">전직 레벨:</strong>{" "}
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                30
              </span>
            </p>
            <div>
              <p className="font-semibold text-lg mb-3">선택 가능한 2차 직업</p>
              <div className="space-y-3">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                  <Link href="/warrior/fighter/2nd" className="block">
                    <p className="font-bold text-blue-700 dark:text-blue-300 mb-1">
                      ⚔️ 파이터 (Fighter)
                    </p>
                    <p className="text-sm">
                      검과 도끼 사용 · 3차: 크루세이더 · 4차: 히어로
                    </p>
                  </Link>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                  <Link href="/warrior/page/2nd" className="block">
                    <p className="font-bold text-blue-700 dark:text-blue-300 mb-1">
                      🛡️ 페이지 (Page)
                    </p>
                    <p className="text-sm">
                      검과 둔기 사용 · 3차: 나이트 · 4차: 팔라딘
                    </p>
                  </Link>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                  <Link href="/warrior/spearman/2nd" className="block">
                    <p className="font-bold text-blue-700 dark:text-blue-300 mb-1">
                      🔱 스피어맨 (Spearman)
                    </p>
                    <p className="text-sm">
                      창과 폴암 사용 · 3차: 버서커 · 4차: 다크나이트
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WarriorFirstJobPage;
