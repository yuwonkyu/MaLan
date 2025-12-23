export default function FirstJobAdvancement() {
  return (
    <section className="mb-12">
      <div className="card-bg p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-300 dark:border-blue-700">
        <h2 className="section-title mb-6 text-blue-700 dark:text-blue-300">
          ⚔️ 1차 전직 방법
        </h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div className="flex-1">
              <p className="description-text">
                <strong>레벨 10 달성</strong>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div className="flex-1">
              <p className="description-text">
                <strong>리스항구</strong>로 이동하여{" "}
                <strong className="text-blue-600 dark:text-blue-400">
                  NPC 필
                </strong>
                을 클릭
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div className="flex-1">
              <p className="description-text">
                <strong>페리온</strong>으로 이동{" "}
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  (120 메소 소모)
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <div className="flex-1">
              <p className="description-text">
                페리온 마을 <strong>꼭대기</strong>에 위치한{" "}
                <strong className="text-blue-600 dark:text-blue-400">
                  NPC 주먹펴고일어서
                </strong>
                를 통해 전사로 전직 가능
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-300 dark:border-yellow-700">
          <p className="text-sm description-text">
            💡 <strong>팁:</strong> 전직 후 스탯 분배와 스킬 트리를 신중하게
            선택하세요. 아래 가이드를 참고하면 도움이 됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
