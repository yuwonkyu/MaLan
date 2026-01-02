import Link from "next/link";

export default function PageSkills() {
  return (
    <>
      {/* 기본 정보 */}
      <div className="card-bg p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-3">📌 페이지 기본 정보</h3>
          <p className="description-text mb-2">
            <strong>총 스킬 포인트:</strong> 121포인트
          </p>
          <p className="description-text mb-2">
            <strong>무기:</strong> 검 (두손검 추천), 둔기 (비추천)
          </p>
          <p className="description-text">
            <strong>핵심 전략:</strong> 파이터와 거의 동일하나, <strong>쓰레테닝</strong>이 페이지 전용 스킬로 제공됩니다.
          </p>
        </div>
      </div>

      {/* 공통 필수 스킬 */}
      <div className="card-bg p-6">
        <h3 className="subsection-title mb-4">🎯 필수 스킬 (파이터와 동일)</h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold mb-2">무기 마스터리 (검/둔기) ⭐⭐⭐</h4>
            <p className="text-sm description-text mb-2">
              19레벨 달성 시 <strong className="text-blue-600 dark:text-blue-400">숙련도 60%</strong>가 되어 최종 데미지 상승 효과가 매우 큽니다.
            </p>
            <p className="text-sm text-red-600 dark:text-red-400">
              ⚠️ 둔기는 사거리가 짧아 비추천! 두손검을 사용하세요.
            </p>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold mb-2">부스터 (검/둔기) ⭐⭐⭐</h4>
            <p className="text-sm description-text">
              파이터와 동일한 효과. 20레벨 기준 200초간 지속됩니다.
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold mb-2">파워 가드 ⭐⭐⭐</h4>
            <p className="text-sm description-text">
              파이터와 동일한 효과. 물약 소비를 아껴주는 효자 스킬입니다.
            </p>
          </div>
        </div>
      </div>

      {/* 쓰레테닝 (페이지 전용) */}
      <div className="card-bg p-6 border-l-4 border-indigo-500">
        <h3 className="subsection-title mb-4 text-indigo-700 dark:text-indigo-300">
          🛡️ 쓰레테닝 (페이지 전용)
        </h3>
        <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
          <p className="text-sm description-text mb-2">
            <strong>효과:</strong> 몬스터의 방어력을 감소시킵니다.
          </p>
          <p className="text-sm description-text mb-2">
            파이터의 <strong>분노</strong>와 대비되는 페이지 전용 스킬입니다.
          </p>
          <p className="text-sm description-text font-semibold">
            💡 분노에 비해 효율이 떨어지는 편이지만, 파티 플레이 시 유용합니다.
          </p>
        </div>
      </div>

      {/* 빌드 가이드 */}
      <div className="card-bg p-6">
        <h3 className="subsection-title mb-4">📋 추천 빌드</h3>
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="description-text mb-3">
            페이지는 파이터와 거의 동일한 스킬 트리를 사용합니다.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm description-text">
            <li><strong>마스터리:</strong> 19레벨</li>
            <li><strong>부스터:</strong> 6레벨</li>
            <li><strong>쓰레테닝:</strong> 19레벨 (분노 대신)</li>
            <li><strong>파이널 어택:</strong> 30포인트 (선택사항)</li>
            <li><strong>파워가드/부스터/마스터리:</strong> 마스터</li>
          </ol>
        </div>
      </div>

      {/* 4차 전직 */}
      <div className="card-bg p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <h3 className="subsection-title mb-4">🔄 3차 나이트 → 4차 팔라딘</h3>
        <div className="space-y-3">
          <p className="description-text">
            4차 팔라딘은 <strong>차지드 블로우</strong>를 주력 스킬로 사용하며, 불/얼음/번개 속성 공격이 특징입니다.
          </p>
          <p className="text-sm description-text">
            파이터와 마찬가지로 4차 전직 시 1차/2차 스킬 제투자가 필요합니다.
          </p>
        </div>
      </div>
    </>
  );
}
