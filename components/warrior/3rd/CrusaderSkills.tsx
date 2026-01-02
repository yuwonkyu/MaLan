import Link from "next/link";

export default function CrusaderSkills() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">크루세이더 3차 스킬 트리</h2>
      
      <div className="space-y-6">
        {/* 기본 정보 */}
        <div className="card-bg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3">📌 핵심 포인트</h3>
            <p className="description-text mb-2">
              <strong>총 스킬 포인트:</strong> 151포인트 (약 61포인트 남음)
            </p>
            <p className="description-text">
              <strong>핵심 전략:</strong> 콤보 어택(코마) 30레벨과 사용하는 무기(검/도끼)에 따라 패닉(파닉) 30레벨을 찍으면 거의 끝입니다.
            </p>
          </div>
        </div>

        {/* 필수 스킬 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">🎯 필수 스킬</h3>
          
          <div className="space-y-4">
            {/* 콤보 어택 */}
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold mb-2">콤보 어택 ⭐⭐⭐</h4>
              <p className="text-sm description-text mb-2">
                <strong>마스터 레벨:</strong> 30 | <strong>효과:</strong> 밥줄 스킬
              </p>
              <p className="text-sm description-text mb-2">
                마스터 시 <strong className="text-red-600 dark:text-red-400">데미지 220% 증가</strong>, 최대 콤보 카운터 5회
              </p>
              <p className="text-sm description-text font-semibold">
                파스 사용 시 총 380% 데미지를 자랑합니다.
              </p>
            </div>

            {/* 패닉 */}
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold mb-2">패닉 (Panic) ⭐⭐⭐</h4>
              <p className="text-sm description-text mb-2">
                <strong>마스터 레벨:</strong> 30
              </p>
              <p className="text-sm description-text mb-2">
                콤보 소모, 적 하나에게 강력한 공격 및 암흑을 겁니다.
              </p>
              <p className="text-sm description-text font-semibold mb-2">
                5콤보일 때 <strong className="text-purple-600 dark:text-purple-400">875%의 한방 데미지</strong>(350% * 250%)를 자랑하며 3차 밥줄 스킬입니다.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                ※ 암흑은 메이플랜드에서 구현 안 됨
              </p>
            </div>

            {/* 코마 */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold mb-2">코마 (Coma)</h4>
              <p className="text-sm description-text mb-2">
                <strong>마스터 레벨:</strong> 30
              </p>
              <p className="text-sm description-text mb-2">
                콤보 소모, 여섯 마리 적에게 기절 공격 (90% 확률)
              </p>
              <p className="text-sm text-yellow-600 dark:text-yellow-400">
                ⚠️ 4차 이후 버려집니다.
              </p>
            </div>
          </div>
        </div>

        {/* 콤보/패닉 선마 순서 */}
        <div className="card-bg p-6 border-l-4 border-yellow-500">
          <h3 className="subsection-title mb-4 text-yellow-700 dark:text-yellow-300">
            🤔 콤보 어택 vs 패닉, 무엇을 먼저?
          </h3>
          <div className="space-y-3">
            <p className="description-text">
              1인 공격인 패닉과 다수기인 코마 중 어느 것을 먼저 마스터해도 큰 차이는 없습니다.
            </p>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm description-text">
                <strong className="text-green-600 dark:text-green-400">선호도:</strong> 저레벨 수페(수련의 숲) 갈림길 2층 진입 시에는 
                한 마리씩 빠르게 잡는 <strong>패닉이 더 낫다</strong>는 의견이 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 남는 포인트 활용 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">💎 남는 포인트 활용 (약 61포인트)</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="font-semibold mb-3">📋 권장 투자 순서</p>
              <ol className="list-decimal list-inside space-y-2 text-sm description-text">
                <li><strong>MP 회복력 향상:</strong> 20레벨 (미미한 마나 회복)</li>
                <li><strong>샤우트:</strong> 히어로와 맞출 경우 인사용도로 1포인트 투자</li>
                <li><strong>나머지 11포인트:</strong> 아이언 바디나 아머래시 등에 자유 투자</li>
              </ol>
            </div>

            {/* MP 회복력 향상 */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-bold mb-2">MP 회복력 향상</h4>
              <p className="text-sm description-text">
                10초마다 마나 회복 증가. 크루/나이트가 포인트가 남아 찍는 스킬이나, 
                혼테일 레이드 시 유혹 패턴에서 용사의 의지 마나 확보에 희박하게 쓸모가 있습니다.
              </p>
            </div>

            {/* 샤우트 */}
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-bold mb-2">샤우트 (Shout)</h4>
              <p className="text-sm description-text mb-2">
                주위 적 최대 여섯 마리 기절 및 데미지 부여 (데미지 30%로 매우 낮음)
              </p>
              <p className="text-sm description-text">
                95% 확률로 스턴이나 <strong className="text-yellow-600 dark:text-yellow-400">폐기물 스킬</strong>이며, 
                드래곤 로어 성능에 비교됩니다.
              </p>
            </div>

            {/* 아머 크래시 */}
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-bold mb-2">아머 크래시 (Armor Crash)</h4>
              <p className="text-sm description-text">
                다수 적의 물리 가드업 무효화 (100% 확률). 
                프리스트 디스펠 하위 호환이며, <strong className="text-red-600 dark:text-red-400">사실상 실용성 제로의 스킬칸 낭비 스킬</strong>입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 파이널 어택 관련 */}
        <div className="card-bg p-6 border-l-4 border-red-500">
          <h3 className="subsection-title mb-4 text-red-700 dark:text-red-300">
            ⚠️ 파이널 어택 관련 중요 사항
          </h3>
          <div className="space-y-3">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-bold mb-2">사이길 진입 시 파택 제거 필수</h4>
              <p className="text-sm description-text mb-2">
                사이길 진입 시 자판기 인형을 <strong>슬블 한 방</strong>으로 정리하는 빌드를 사용하는데, 
                파택은 <strong className="text-red-600 dark:text-red-400">젠 컷에 방해</strong>가 됩니다.
              </p>
              <p className="text-sm description-text mb-2">
                2차 구간에서는 카니발 존재로 인해 분노 마스터가 메타입니다.
              </p>
              <p className="text-sm description-text font-semibold">
                3차 진입 전까지는 파택을 먼저 마스터할 필요성이 줄었으나, 
                <strong className="text-green-600 dark:text-green-400"> 크루세이더 콤보 어택을 빠르게 모으기 위해 85레벨 정도에 파택 재투자가 필수</strong>가 됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
