import Link from "next/link";

export default function SpearmanSkills() {
  return (
    <>
      {/* 기본 정보 */}
      <div className="card-bg p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-3">📌 스피어맨 기본 정보</h3>
          <p className="description-text mb-2">
            <strong>총 스킬 포인트:</strong> 121포인트
          </p>
          <p className="description-text mb-2">
            <strong>무기:</strong> 창 (Spear), 폴암 (Polearm) - <strong>폴암 강력 추천!</strong>
          </p>
          <p className="description-text">
            <strong>핵심 전략:</strong> 하이퍼 바디로 HP를 극대화하고, 아이언 윌로 생존력을 높입니다.
          </p>
        </div>
      </div>

      {/* 공통 필수 스킬 */}
      <div className="card-bg p-6">
        <h3 className="subsection-title mb-4">🎯 필수 스킬</h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold mb-2">무기 마스터리 (창/폴암) ⭐⭐⭐</h4>
            <p className="text-sm description-text mb-2">
              19레벨 달성 시 <strong className="text-blue-600 dark:text-blue-400">숙련도 60%</strong>
            </p>
            <p className="text-sm text-red-600 dark:text-red-400">
              ⚠️ 창보다 <strong>폴암</strong>을 사용하세요! 파워 스트라이크/슬래시 블러스트 기대값이 더 높습니다.
            </p>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold mb-2">부스터 (창/폴암) ⭐⭐⭐</h4>
            <p className="text-sm description-text">
              파이터와 동일한 효과. 20레벨 기준 200초간 지속됩니다.
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-bold mb-2">하이퍼 바디 ⭐⭐⭐</h4>
            <p className="text-sm description-text mb-2">
              <strong>스피어맨 전용:</strong> 자신과 파티원의 최대 HP/MP를 증가시킵니다.
            </p>
            <p className="text-sm description-text">
              4차 다크나이트의 <strong>버서크</strong> 스킬과 시너지가 매우 좋습니다.
            </p>
          </div>

          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold mb-2">아이언 윌 ⭐⭐⭐</h4>
            <p className="text-sm description-text">
              물리/마법 방어력을 증가시켜 생존력을 높입니다. 스피어맨의 핵심 생존 스킬입니다.
            </p>
          </div>
        </div>
      </div>

      {/* 빌드 가이드 */}
      <div className="card-bg p-6 border-l-4 border-purple-500">
        <h3 className="subsection-title mb-4">📋 추천 빌드</h3>
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-semibold mb-3">투자 순서</p>
          <ol className="list-decimal list-inside space-y-2 text-sm description-text">
            <li><strong>마스터리:</strong> 19레벨</li>
            <li><strong>부스터:</strong> 6레벨</li>
            <li><strong>하이퍼 바디:</strong> 19레벨</li>
            <li><strong>아이언 윌:</strong> 20레벨 (생존력 극대화)</li>
            <li><strong>파이널 어택:</strong> 30포인트 (선택사항)</li>
            <li><strong>남는 포인트:</strong> 마스터리/부스터/하이퍼 바디 마스터</li>
          </ol>
        </div>

        <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <p className="text-sm">
            <strong>특징:</strong> 파이터/페이지에 비해 생존력이 뛰어나며, 파티 플레이 시 하이퍼 바디로 큰 도움이 됩니다.
          </p>
        </div>
      </div>

      {/* 3차 스킬 연계 */}
      <div className="card-bg p-6">
        <h3 className="subsection-title mb-4">🔄 3차 버서커 (용기사)</h3>
        <div className="space-y-3">
          <p className="description-text">
            3차 전직 시 <strong>폴암(쓰레셔)</strong>와 <strong>창(스피어 버스터)</strong>를 상황에 맞게 사용하게 됩니다.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm description-text ml-4">
            <li><strong>80레벨 이후 로어 사냥:</strong> 스공만 중요하므로 저렴한 폴람/창 사용</li>
            <li><strong>85레벨 이후 스피어 버스터:</strong> 반드시 창 사용</li>
            <li><strong>가성비:</strong> 로어용 폴암 + 버스터용 창 따로 구비</li>
          </ul>
        </div>
      </div>

      {/* 4차 전직 */}
      <div className="card-bg p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
        <h3 className="subsection-title mb-4">🔄 4차 다크나이트</h3>
        <div className="space-y-3">
          <p className="description-text">
            4차 다크나이트는 <strong>버서크</strong> 스킬로 HP가 낮을수록 공격력이 증가하는 하이리스크 하이리턴 스타일입니다.
          </p>
          <p className="text-sm description-text">
            하이퍼 바디와 버서크의 조합이 핵심이며, 파이터/페이지와는 다른 독특한 플레이 스타일을 제공합니다.
          </p>
        </div>
      </div>

      {/* 3차 전직 안내 */}
      <div className="card-bg p-6 border-l-4 border-purple-500">
        <h3 className="subsection-title mb-4">🎯 3차 전직: 버서커/용기사 (Lv.70)</h3>
        <div className="space-y-3">
          <p className="description-text">
            70레벨에 <strong>버서커(용기사)</strong>로 3차 전직하면 스피어 버스터, 봉 같은 강력한 공격 스킬을 획등합니다.
          </p>
          <Link 
            href="/warrior/2nd/spearman/3rd" 
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
          >
            → 버서커 육성 가이드 보기
          </Link>
        </div>
      </div>
    </>
  );
}
