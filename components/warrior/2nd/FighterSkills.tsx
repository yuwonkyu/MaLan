import Link from "next/link";

export default function FighterSkills() {
  return (
    <>
      {/* 기본 정보 */}
      <div className="card-bg p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-3">📌 파이터 기본 정보</h3>
          <p className="description-text mb-2">
            <strong>총 스킬 포인트:</strong> 121포인트
          </p>
          <p className="description-text mb-2">
            <strong>무기:</strong> 검 (두손검 추천), 도끼
          </p>
          <p className="description-text">
            <strong>핵심 전략:</strong> 분노 선트리를 기본으로 하며, 파이널 어택 투자 여부에 따라 빌드가 갈립니다.
          </p>
        </div>
      </div>

      {/* 공통 필수 스킬 */}
      <div className="card-bg p-6">
        <h3 className="subsection-title mb-4">🎯 공통 필수 스킬</h3>
        
        <div className="space-y-4">
          {/* 무기 마스터리 */}
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold mb-2">무기 마스터리 (검/도끼) ⭐⭐⭐</h4>
            <p className="text-sm description-text mb-2">
              <strong>마스터 레벨:</strong> 20
            </p>
            <p className="text-sm description-text mb-2">
              19레벨 달성 시 <strong className="text-blue-600 dark:text-blue-400">숙련도 60%</strong>가 되어 최종 데미지 상승 효과가 매우 큽니다.
            </p>
            <p className="text-sm description-text font-semibold">
              💡 보통 19레벨 선투자 후 포인트가 남으면 20레벨을 마스터합니다.
            </p>
          </div>

          {/* 부스터 */}
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold mb-2">부스터 (검/도끼) ⭐⭐⭐</h4>
            <p className="text-sm description-text mb-2">
              <strong>마스터 레벨:</strong> 20
            </p>
            <p className="text-sm description-text mb-2">
              무기 공격 속도 1단계 상승 효과가 있으며, 1레벨당 지속 시간이 10초씩 늘어나 <strong>20레벨 기준 200초간 지속</strong>됩니다.
            </p>
            <p className="text-sm description-text">
              <span className="text-red-600 dark:text-red-400">⚠️ 주의:</span> 마법 스킬(로어, 샤우트 등)에는 적용되지 않습니다.
            </p>
          </div>

          {/* 파워 가드 */}
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold mb-2">파워 가드 ⭐⭐⭐</h4>
            <p className="text-sm description-text mb-2">
              <strong>마스터 레벨:</strong> 30
            </p>
            <p className="text-sm description-text mb-2">
              몬스터의 물리 공격을 받았을 때 <strong>받은 데미지의 일정 부분을 반사</strong>합니다.
            </p>
            <p className="text-sm description-text">
              💡 물약 소비를 크게 줄여주는 효자 스킬입니다. 반드시 마스터해야 합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 분노 (파이터 전용) */}
      <div className="card-bg p-6 border-l-4 border-red-500">
        <h3 className="subsection-title mb-4 text-red-700 dark:text-red-300">
          🔥 분노 (파이터 전용 핵심 스킬)
        </h3>
        <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <p className="text-sm description-text mb-2">
            <strong>마스터 레벨:</strong> 20
          </p>
          <p className="text-sm description-text mb-3">
            무기 공격력과 명중률을 일정 시간 동안 증가시킵니다.
          </p>
          <div className="p-3 bg-white dark:bg-gray-800 rounded mb-3">
            <p className="text-sm font-bold mb-2">⭐ 왜 분노가 G.O.A.T인가?</p>
            <ul className="list-disc list-inside space-y-1 text-sm description-text ml-2">
              <li>19레벨 기준: <strong className="text-red-600 dark:text-red-400">무공 +20, 명중 +30</strong></li>
              <li>3차 전직 크루세이더의 <strong>채스 오브 인큐버스</strong>와 조합 시 최강의 딜러</li>
              <li>보스전, PvP, 사냥 등 모든 콘텐츠에서 유용</li>
            </ul>
          </div>
          <p className="text-sm description-text font-semibold">
            💡 19레벨 투자를 권장하며, 마지막 1포인트는 남은 포인트로 조절합니다.
          </p>
        </div>
      </div>

      {/* 파이널 어택 논의 */}
      <div className="card-bg p-6">
        <h3 className="subsection-title mb-4">💭 파이널 어택 (Final Attack) - 논란의 스킬</h3>
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg mb-4">
          <p className="text-sm description-text mb-2">
            <strong>마스터 레벨:</strong> 30
          </p>
          <p className="text-sm description-text mb-3">
            일반 공격 시 일정 확률로 추가 공격이 발동됩니다.
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              <p className="text-sm description-text">
                <strong>장점:</strong> 사냥 효율 증가, DPS 상승
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
              <p className="text-sm description-text">
                <strong>단점:</strong> 4차 전직 시 <strong>브랜디쉬</strong> 사용 시 파이널 어택이 불필요 (리셋 필요)
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-sm font-bold mb-2">📋 결론: 두 가지 빌드 중 선택</p>
          <ul className="list-disc list-inside space-y-2 text-sm description-text ml-2">
            <li>
              <strong>빌드 1 (파이널 어택 투자):</strong> 2차~3차 사냥 효율 극대화, 4차 때 리셋
            </li>
            <li>
              <strong>빌드 2 (파이널 어택 미투자):</strong> 리셋 비용 절약, 초반 사냥 효율 포기
            </li>
          </ul>
        </div>
      </div>

      {/* 빌드 1: 파이널 어택 투자형 */}
      <div className="card-bg p-6 border-l-4 border-green-500">
        <h3 className="subsection-title mb-4">📊 빌드 1: 파이널 어택 투자형 (사냥 특화)</h3>
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm description-text mb-3">
            2~3차 구간 사냥 효율을 극대화하는 빌드입니다.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="description-text">무기 마스터리</span>
              <span className="font-bold">19레벨</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="description-text">부스터</span>
              <span className="font-bold">6레벨 → 20레벨</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="description-text">분노</span>
              <span className="font-bold text-red-600 dark:text-red-400">19레벨</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="description-text">파이널 어택</span>
              <span className="font-bold text-green-600 dark:text-green-400">30레벨</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="description-text">파워 가드</span>
              <span className="font-bold">30레벨</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="description-text">나머지 포인트</span>
              <span className="font-bold">마스터리/분노 마스터</span>
            </div>
          </div>
        </div>
      </div>

      {/* 빌드 2: 파이널 어택 미투자형 */}
      <div className="card-bg p-6 border-l-4 border-blue-500">
        <h3 className="subsection-title mb-4">📊 빌드 2: 파이널 어택 미투자형 (리셋 비용 절약)</h3>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm description-text mb-3">
            4차 전직을 고려하여 리셋 비용을 절약하는 빌드입니다.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="description-text">무기 마스터리</span>
              <span className="font-bold">20레벨</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="description-text">부스터</span>
              <span className="font-bold">20레벨</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="description-text">분노</span>
              <span className="font-bold text-red-600 dark:text-red-400">20레벨</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="description-text">파이널 어택</span>
              <span className="font-bold text-gray-400">0레벨 (미투자)</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="description-text">파워 가드</span>
              <span className="font-bold">30레벨</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="description-text">나머지 포인트</span>
              <span className="font-bold">레이지 or 샤우트</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4차 전직 시 제투자 */}
      <div className="card-bg p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
        <h3 className="subsection-title mb-4">🔄 4차 히어로 전직 시 제투자 (리셋) 가이드</h3>
        <div className="space-y-3">
          <p className="description-text">
            4차 전직 후 <strong>브랜디쉬</strong>를 주력 스킬로 사용하게 되면, 기존 스킬 중 일부를 제거하고 4차 스킬에 투자해야 합니다.
          </p>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <p className="text-sm font-bold mb-2">제거할 스킬</p>
            <ul className="list-disc list-inside space-y-1 text-sm description-text ml-2">
              <li><strong>파워 스트라이크:</strong> 브랜디쉬로 대체</li>
              <li><strong>슬래시 블러스트:</strong> 브랜디쉬로 대체</li>
              <li><strong>파이널 어택:</strong> 브랜디쉬에는 적용 안됨</li>
            </ul>
          </div>
          <p className="text-sm text-red-600 dark:text-red-400">
            ⚠️ 리셋 비용이 상당하므로, 4차 전직 전에 미리 메소를 준비해두세요.
          </p>
        </div>
      </div>
    </>
  );
}
