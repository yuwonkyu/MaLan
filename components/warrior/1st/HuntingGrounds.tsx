import Link from "next/link";

export default function HuntingGrounds() {
  return (
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
                    href="/party-quest/wolmyo"
                    className="hover:underline text-gray-700 dark:text-gray-300"
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
                  21레벨부터 입장 가능하며, 파티 사냥으로 안정적인 경험치 확보.
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
                    href="/party-quest/kerning"
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
                  href="/party-quest/kerning"
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

          {/* 30~50레벨 */}
          <div className="card-bg p-6 border-l-4 border-red-500">
            <h3 className="tier-label text-red-700 dark:text-red-300 mb-3">
              Lv.30-50
            </h3>
            <div className="space-y-3 description-text">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-2 border-yellow-500">
                <p className="font-semibold mb-2 text-lg">⚠️ 2차 전직 시점</p>
                <p className="text-sm mb-2">
                  30레벨에 페리온에서 2차 전직을 하세요. <strong>파이터/페이지/스피어맨</strong> 중 선택 가능합니다.
                </p>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border-2 border-green-500">
                <p className="font-semibold mb-1 text-green-700 dark:text-green-300">
                  🎪 몬스터 카니발 (Lv.35-50, 최우선 추천!)
                </p>
                <p className="text-sm mb-2">
                  <strong className="text-red-600 dark:text-red-400">전사에게 카니발은 1티어 콘텐츠</strong> - 무조건 카니발을 해야 합니다!
                </p>
                <ul className="text-sm space-y-1 ml-4 list-disc">
                  <li>하루 16판 가능 (1판당 10분)</li>
                  <li>물약 소모 없이 안정적인 경험치 획득</li>
                  <li>파이널 어택 투자 시 효율 극대화</li>
                  <li><strong>슈피겔만의 목걸이</strong> 획득 가능</li>
                </ul>
              </div>

              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <p className="font-semibold mb-1">개미굴 (6인 파티)</p>
                <p className="text-sm">카니발 쿨타임에 진행</p>
              </div>

              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <p className="font-semibold mb-1">루디브리엄 장난감 공장 (시계탑)</p>
                <p className="text-sm">솔로 사냥 가능</p>
              </div>
            </div>
          </div>

          {/* 50~70레벨 */}
          <div className="card-bg p-6 border-l-4 border-indigo-500">
            <h3 className="tier-label text-indigo-700 dark:text-indigo-300 mb-3">
              Lv.50-70
            </h3>
            <div className="space-y-3 description-text">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-500">
                <p className="font-semibold mb-2 text-lg">💎 자쿰 투구 구매 시점</p>
                <p className="text-sm">
                  50레벨부터 자쿰 투구(자투) 구매를 목표로 돈을 모으세요. 장공캐 2개면 구매 가능합니다.
                </p>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-500">
                <p className="font-semibold mb-1 text-green-700 dark:text-green-300">
                  🎪 몬스터 카니발 (Lv.35-50, 계속 추천!)
                </p>
                <p className="text-sm">50레벨까지 계속 진행 가능</p>
              </div>

              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-500">
                <p className="font-semibold mb-1">마가티아 연구소 C (Lv.51-70)</p>
                <p className="text-sm mb-2">
                  <strong>심쩔</strong> - 중국 나이트 마켓 전 최고의 사냥터
                </p>
                <ul className="text-sm space-y-1 ml-4 list-disc">
                  <li>3~4인 파티 사냥</li>
                  <li>안정적인 경험치</li>
                </ul>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                <p className="font-semibold mb-1">중국 타이완 나이트 마켓 (Lv.60-75)</p>
                <p className="text-sm">60레벨부터 진입 가능한 좋은 사냥터</p>
              </div>

              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <p className="font-semibold mb-1">엘나스 고렘 숲 / 얼음 골짜기 (Lv.60-75)</p>
                <p className="text-sm">
                  아이젠 신발 필수. 전사에게 적합한 사냥터
                </p>
              </div>

              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <p className="font-semibold mb-1">마가티아 C2 (Lv.51-70)</p>
                <p className="text-sm">연구소 C와 비슷한 효율</p>
              </div>
            </div>
          </div>

          {/* 추가 팁 */}
          <div className="card-bg p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <h3 className="subsection-title mb-4">💡 사냥터 선택 팁</h3>
            <div className="space-y-3 description-text text-sm">
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold mb-1">명중률 체크</p>
                <p>각 사냥터의 몬스터 명중 요구치를 반드시 확인하고 DEX를 맞추세요.</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold mb-1">파티 vs 솔로</p>
                <p>전사는 파티 사냥이 유리합니다. 특히 카니발은 필수!</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <p className="font-semibold mb-1">무기 공속</p>
                <p>카니발에서는 무기 공속이 중요하므로 35제 하이랜더를 50레벨까지 사용하세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
