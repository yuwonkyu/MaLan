export default function HeroSkillTree() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">히어로 4차 스킬 트리 & 사냥터 진입 가이드</h2>
      
      <div className="space-y-6">
        {/* 기본 정보 */}
        <div className="card-bg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3">📌 핵심 포인트</h3>
            <p className="description-text mb-2">
              <strong>4차 전직 레벨:</strong> 120레벨
            </p>
            <p className="description-text">
              <strong>핵심 전략:</strong> 브랜디시(브랜드)를 주력으로 사용하며, 돌진/스탠스로 사냥터 효율을 극대화합니다.
            </p>
          </div>
        </div>

        {/* 4차 전직 후 제투자 */}
        <div className="card-bg p-6 border-l-4 border-red-500">
          <h3 className="subsection-title mb-4 text-red-700 dark:text-red-300">
            🔄 4차 전직 후 제투자 (필수!)
          </h3>
          <div className="space-y-4">
            <p className="description-text">
              브랜드 사용 시작 후 <strong className="text-red-600 dark:text-red-400">1차의 파스/슬블/파택을 빼고 재투자</strong>합니다.
            </p>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="font-semibold mb-3">📋 제투자 후 포인트 분배</p>
              <div className="space-y-3 text-sm description-text">
                <div>
                  <p className="font-semibold mb-1">1차:</p>
                  <p>파스/슬블을 다 빼고 남는 <strong>7포인트를 파워 스트라이크</strong>에 투자</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">2차:</p>
                  <p>마스터리/부스터/분노/파워가드 만땅 시 <strong>31포인트</strong>가 남습니다</p>
                  <p className="text-gray-600 dark:text-gray-400">→ X마스터/X부스터(다른 무기용)에 투자하거나 비워둡니다</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">3차:</p>
                  <p>콤보 어택/패닉/코마 마스터 후 남는 <strong>61포인트</strong>는:</p>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>샤우트 30</li>
                    <li>MP 회복력 20</li>
                    <li>아머래시 11에 투자</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 주력 스킬: 브랜디시 */}
        <div className="card-bg p-6 border-l-4 border-blue-500">
          <h3 className="subsection-title mb-4 text-blue-700 dark:text-blue-300">
            ⚔️ 브랜디시 (Brandish) - 히어로 주력기
          </h3>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong>효과:</strong> 액티브 스킬. 최대 세 명을 두 번 공격 (260% * 2회)
              </p>
              <p className="text-sm description-text mb-2">
                <strong className="text-blue-600 dark:text-blue-400">매우 넓은 사거리와 빠른 공속</strong>으로 히어로를 1티어로 만든 주력기입니다.
              </p>
              <p className="text-sm description-text font-semibold">
                💡 마스터리북 가격도 비싸지 않아 주력으로 사용되며, 1레벨만 찍어도 파워 스트라이크/슬래시 블러스트 대체 가능합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 사냥터 진입 시점 & 스킬 레벨 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">🎯 사냥터 진입 시점 & 필요 스킬 레벨</h3>
          
          <div className="space-y-4">
            {/* 120레벨 전직 직후 */}
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold mb-2">120레벨 (전직 직후)</h4>
              <p className="text-sm description-text mb-2">
                <strong>스킬:</strong> 돌진 1, 브랜드 2
              </p>
              <p className="text-sm description-text">
                <strong>가능 사냥터:</strong> 브라둥 5인 우이 띠자리 가능
              </p>
            </div>

            {/* 123레벨 */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold mb-2">123레벨</h4>
              <p className="text-sm description-text mb-2">
                <strong>스킬:</strong> 브랜드 11 (2타겟 달성)
              </p>
              <p className="text-sm description-text">
                <strong>가능 사냥터:</strong> 브라둥 5인 좌위 (두 마리 젠) 혹은 위용둥 좌위 띠자리 가능
              </p>
            </div>

            {/* 127레벨 */}
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold mb-2">127레벨</h4>
              <p className="text-sm description-text">
                위용둥 좌위 / 브라둥 5인 좌위 졸업
              </p>
            </div>

            {/* 브랜드 22레벨 */}
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
              <h4 className="font-bold mb-2">브랜드 22레벨 달성 시</h4>
              <p className="text-sm description-text mb-2">
                <strong>효과:</strong> 세 마리 타겟 가능
              </p>
              <p className="text-sm description-text">
                <strong>가능 사냥터:</strong> 브라등 5인 사인 옥상이나 중앙 세 마리 젠 컷 가능
              </p>
            </div>

            {/* 139레벨 */}
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold mb-2">139레벨</h4>
              <p className="text-sm description-text mb-2">
                <strong>스킬:</strong> 돌진 30, 어콤 20, 스탠스 10
              </p>
              <p className="text-sm description-text">
                <strong>가능 사냥터:</strong> 브라등 5인 4인 바닥 다섯 마리 젠 수월 가능
              </p>
            </div>

            {/* 150레벨 */}
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-bold mb-2">150레벨</h4>
              <p className="text-sm description-text mb-2">
                <strong>스킬:</strong> 브랜드 30, 어콤 20, 돌진 14, 스탠스 19
              </p>
              <p className="text-sm description-text">
                <strong>가능 사냥터:</strong> 협곡 길 3인 1플 2층 가능 (최소 컷)
              </p>
            </div>
          </div>
        </div>

        {/* 핵심 스킬 투자 방향 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">💎 핵심 스킬 투자 방향</h3>
          
          <div className="space-y-4">
            {/* 어드밴스 콤보 */}
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-bold mb-2">어드밴스 콤보 (Advance Combo) ⭐⭐⭐</h4>
              <p className="text-sm description-text mb-2">
                콤보 어택 강화 스킬. <strong>최대 콤보 카운트를 10개</strong>까지 늘려주고, 
                60% 확률로 콤보 2개 충전 가능합니다.
              </p>
              <p className="text-sm description-text mb-2">
                마스터 시 콤보 카운터 10개일 때 <strong className="text-purple-600 dark:text-purple-400">최대 190% 뎀증 효과</strong>
              </p>
              <p className="text-sm text-yellow-600 dark:text-yellow-400">
                ⚠️ 자쿰에서 스킬북을 직접 먹어야 합니다.
              </p>
            </div>

            {/* 돌진 & 스탠스 */}
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-bold mb-2">돌진 & 스탠스 ⭐⭐⭐</h4>
              <p className="text-sm description-text mb-2">
                레벨이 올라갈수록 사냥 경험치 고점이 계속 올라가므로 <strong>매우 중요</strong>합니다.
              </p>
              <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded">
                <p className="text-sm description-text font-semibold mb-1">최종 투자 권장:</p>
                <ul className="list-disc list-inside text-sm description-text">
                  <li><strong>돌진 28</strong> (최대 사거리)</li>
                  <li><strong>스탠스 30</strong> (마스터)</li>
                  <li><strong>매용 20</strong> → 사냥 효율 극대화</li>
                </ul>
              </div>
              <p className="text-sm description-text mt-2">
                이후 인레이지와 메이플 용사에 투자하여 데미지 고점을 노립니다.
              </p>
            </div>

            {/* 메이플 용사 */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-bold mb-2">메이플 용사 (Maple Warrior)</h4>
              <p className="text-sm description-text">
                3전사 공용. 파티원 모든 스탯 1% 향상 (20레벨 기준). 
                사냥터 스공 맞추기 위한 수단으로 투자되며, <strong>매용 20레벨은 고가</strong>에 거래됩니다.
              </p>
            </div>

            {/* 돌진 */}
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-bold mb-2">돌진 (Rush)</h4>
              <p className="text-sm description-text">
                전방 열 마리 적을 밀고 나감. <strong>일자 지형 사냥터에서 고점을 책임</strong>지는 핵심 스킬이며, 
                20/30북이 고가에 거래됩니다.
              </p>
            </div>

            {/* 스탠스 */}
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <h4 className="font-bold mb-2">스탠스 (Stance)</h4>
              <p className="text-sm description-text">
                맞아도 밀려나지 않음. 30레벨 시 300초간 90% 확률로 넉백 방지. 
                <strong>젠 컷 여부가 중요한 사냥터에서 필수 투자 스킬</strong>입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 선택 투자 스킬 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">🎨 선택 투자 스킬</h3>
          
          <div className="space-y-4">
            {/* 인레이지 */}
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <h4 className="font-bold mb-2">인레이지 (Enrage)</h4>
              <p className="text-sm description-text mb-2">
                10콤보 사용, 240초간 <strong>공격력 26 증가</strong>시키는 댐 스킬
              </p>
              <p className="text-sm description-text mb-2">
                히어로 초월적 데미지를 책임지는 상위 버프이나, 찍을 스킬이 많아 우선순위는 밀립니다.
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                💡 보통 150레벨 이상에서 고려합니다.
              </p>
            </div>

            {/* 아킬레스 */}
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
              <h4 className="font-bold mb-2">아킬레스 (Achilles)</h4>
              <p className="text-sm description-text mb-2">
                갑옷을 경화하여 받는 데미지를 줄여줌
              </p>
              <p className="text-sm description-text mb-2">
                보스 1패턴 HP/MP 1로 만드는 공격에 저항 가능하게 하여 생존에 도움이 됩니다.
              </p>
              <p className="text-sm description-text font-semibold">
                <strong className="text-indigo-600 dark:text-indigo-400">혼테일에서 빛을 발하는 스킬</strong> - 격수 참여 시 1레벨 투자
              </p>
            </div>

            {/* 용사의 의지 */}
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-bold mb-2">용사의 의지 (Hero's Will)</h4>
              <p className="text-sm description-text mb-2">
                모든 상태 이상 해제 공용 스킬 (3초간 면역)
              </p>
              <p className="text-sm description-text">
                <strong>혼테일 유혹 해제 시 주력 사용</strong> - 격수 참여 시 1레벨 투자
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                마스터 시 쿨타임 6분
              </p>
            </div>

            {/* 블로킹 */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-bold mb-2">블로킹 (Blocking)</h4>
              <p className="text-sm description-text">
                방패를 사용하여 일정 확률로 공격을 막음 (마스터 시 15% 확률). 블록 성공 시 몬스터 스턴.
              </p>
              <p className="text-sm text-yellow-600 dark:text-yellow-400">
                ⚠️ 히어로는 찍을 스킬이 너무 많아 여유가 없습니다.
              </p>
            </div>

            {/* 몬스터 마그넷 */}
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-bold mb-2">몬스터 마그넷 (Monster Magnet)</h4>
              <p className="text-sm description-text">
                최대 여섯 마리 적을 끌어당김. 성공률이 100%가 아니며 게이지 스킬이라 
                <strong className="text-red-600 dark:text-red-400"> 실용성 제로인 쓰레기 스킬</strong>입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 최종 빌드 요약 */}
        <div className="card-bg p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <h3 className="subsection-title mb-4">📊 히어로 최종 빌드 요약</h3>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <th className="text-left py-2">스킬</th>
                  <th className="text-center py-2">권장 레벨</th>
                  <th className="text-center py-2">우선순위</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-2">브랜디시</td>
                  <td className="text-center">30</td>
                  <td className="text-center text-red-600 dark:text-red-400 font-bold">최우선</td>
                </tr>
                <tr>
                  <td className="py-2">어드밴스 콤보</td>
                  <td className="text-center">20</td>
                  <td className="text-center text-red-600 dark:text-red-400 font-bold">필수</td>
                </tr>
                <tr>
                  <td className="py-2">돌진</td>
                  <td className="text-center">28~30</td>
                  <td className="text-center text-red-600 dark:text-red-400 font-bold">필수</td>
                </tr>
                <tr>
                  <td className="py-2">스탠스</td>
                  <td className="text-center">30</td>
                  <td className="text-center text-red-600 dark:text-red-400 font-bold">필수</td>
                </tr>
                <tr>
                  <td className="py-2">메이플 용사</td>
                  <td className="text-center">20</td>
                  <td className="text-center text-blue-600 dark:text-blue-400">권장</td>
                </tr>
                <tr>
                  <td className="py-2">인레이지</td>
                  <td className="text-center">20</td>
                  <td className="text-center text-purple-600 dark:text-purple-400">선택</td>
                </tr>
                <tr>
                  <td className="py-2">아킬레스</td>
                  <td className="text-center">1</td>
                  <td className="text-center text-yellow-600 dark:text-yellow-400">보스전</td>
                </tr>
                <tr>
                  <td className="py-2">용사의 의지</td>
                  <td className="text-center">1</td>
                  <td className="text-center text-yellow-600 dark:text-yellow-400">보스전</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
