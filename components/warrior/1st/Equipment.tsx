export default function Equipment() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">장비 추천</h2>
      
      {/* 개요 */}
      <div className="card-bg p-6 mb-6">
        <div className="mb-4">
          <h3 className="subsection-title mb-3">📌 2025년 9월 전사 템셋팅 핵심 원칙</h3>
          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg mb-4">
            <p className="description-text font-semibold mb-2">
              전사는 레벨링이 깡패이며, 아이템 스탯이나 공격력의 영향력이 상대적으로 덜합니다.
            </p>
            <p className="description-text text-sm">
              스킬 레벨 투자를 우선하고, 진출 사냥터 요구사항에 맞춰 스펙업하는 것이 핵심입니다.
            </p>
          </div>
          
          <div className="space-y-2 description-text text-sm">
            <p>• <strong>힘 효율</strong>: 50레벨 기준 힘 2~3당 공격력 0.1 / 100레벨 기준 힘 1당 공격력 0.1 / 150레벨 기준 힘 8당 공격력 0.1</p>
            <p>• <strong>럭과 명중</strong>: 럭 2 = 명중 1 (럭 1은 0.5 스탯 가치)</p>
            <p>• <strong>명중률 버프</strong>: 블레스, 명중 물약, 비홀더스 버프는 중첩되지 않으며 마지막 버프만 적용됨</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* 레벨 1~10 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">🌱 레벨 1~10: 무관심 단계</h3>
          <div className="description-text">
            <p className="mb-2">있어도 그만, 없어도 그만인 단계입니다.</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              길 가다 줍거나 퀘스트로 나오는 아이템을 아무거나 사용하면 됩니다.
            </p>
          </div>
        </div>

        {/* 레벨 10~20 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">⚔️ 레벨 10~20: 전직 및 기본 장비</h3>
          <div className="space-y-4 description-text">
            <div>
              <p className="font-semibold mb-2">✅ 무기: 국밥카 (전직 보상)</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                전직 시 무료로 지급받는 국밥카를 사용하세요. 냉동 참치 같은 비싼 아이템과 큰 차이 없습니다.
              </p>
            </div>
            
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <p className="font-semibold mb-2">💰 과금 시 고려: 노목류</p>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li><strong>0.5 노목</strong>: 가성비 아이템 (약 290만 메소)</li>
                <li><strong>0.9 목</strong>: 약 2,400만 메소 (부캐 육성 시 고려)</li>
                <li><strong>덱목 vs 공노목</strong>: 저레벨에서는 덱목도 효율적이나, 50대에 자투로 금방 넘어가므로 처음부터 공노목 추천</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 레벨 20~30 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">🏃 레벨 20~30: 이동 속도 확보</h3>
          <div className="space-y-4 description-text">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-3">
              <p className="font-semibold text-red-600 dark:text-red-400 mb-2">
                ⚠️ 전사에게 이동 속도는 곧 사냥 성능입니다!
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">필수 아이템</p>
              <ul className="text-sm space-y-2 ml-4">
                <li>
                  <strong>• 목욕 타월</strong> (이속 +10): 버섯 신사 쇼아마을 히카리 자파상점 모모 (3만 메소)
                </li>
                <li>
                  <strong>• 검정 고무신</strong> (이속 +5): 헤네시스 방어구 상점 또는 떡작 13만 메소
                </li>
                <li>
                  <strong>• 분홍색 가죽구두</strong>: 헤네시스에서 판매
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">무기 선택</p>
              <ul className="text-sm space-y-2 ml-4">
                <li>
                  <strong>• 죽창</strong> (교환 불가): 리치가 길고 공속이 빨라 추락주의 몰이 사냥에 최고. 버섯 신사 일본에서 직접 구매 필수
                </li>
                <li>
                  <strong>• 물고기 작살</strong>: 죽창과 비슷하나 공속은 한 단계 느림. 명중+이속 제공, 메렌지에서 4~5만 메소
                </li>
              </ul>
            </div>

            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
              <p className="text-sm">
                <strong>자본 여유 시</strong>: 루디브리엄 자파상점 이속 향상 알약 지속 사용 추천
              </p>
            </div>
          </div>
        </div>

        {/* 레벨 30~50 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">🔥 레벨 30~50: 본격 장비 세팅</h3>
          <div className="space-y-5 description-text">
            
            {/* 무기 */}
            <div>
              <h4 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-300">⚔️ 무기 (직업별 추천)</h4>
              
              <div className="space-y-3">
                {/* 파이터 */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    ⚔️ 파이터 (Fighter) - 검과 도끼 사용
                  </p>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">
                      두손검 강력 추천!
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• 무기 배율이 찌르기/베기 동일하여 안정적인 데미지</li>
                      <li>• 사거리가 도끼보다 김</li>
                      <li>• <strong>하이랜더(35제, 빠른 공속)</strong>를 50레벨까지 사용 가능</li>
                      <li>• 카니발에서는 무기 공속이 중요하므로 40제 자로 넘어가지 말 것!</li>
                      <li>• 3차(크루세이더) → 4차(히어로)로 이어짐</li>
                    </ul>
                    <p className="text-sm mt-2">
                      💡 가격 부담 시: 노작 또는 정업 떡작 저렴하게 구매 추천
                    </p>
                  </div>
                </div>

                {/* 페이지 */}
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <p className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                    🛡️ 페이지 (Page) - 검과 둔기 사용
                  </p>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">
                      두손검 강력 추천! (둔기 비추천)
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• 파이터와 동일하게 두손검 사용 권장</li>
                      <li>• 둔기는 사거리가 짧고 효율이 떨어짐</li>
                      <li>• <strong>하이랜더(35제, 빠른 공속)</strong>를 50레벨까지 사용</li>
                      <li>• 카니발 효율을 위해 빠른 공속 무기 유지</li>
                      <li>• 3차(나이트) → 4차(팔라딘)로 이어짐</li>
                    </ul>
                    <p className="text-sm mt-2">
                      💡 파이터와 무기 세팅이 동일하므로 위 가이드 참고
                    </p>
                  </div>
                </div>

                {/* 스피어맨 */}
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                    🔱 스피어맨 (Spearman) - 창과 폴암 사용
                  </p>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">
                      폴암(포람) 필수!
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>스노우보드류 떡작</strong>이 국민 세팅이나 현재 가격 급등 (200~320만 메소)</li>
                      <li>• 보드 부담 시: 일반 느림 포람 사용 (성능 떨어짐)</li>
                      <li>• 대안: 미스릴 도끼 크레센트 100만 원 이하로 구하는 것도 고려</li>
                      <li>• 다크 스노우보드는 구룡도 대비 공격력 낮아 비추천</li>
                      <li>• <strong>포람 사용 이유</strong>: 평타 모션 5개 중 3개가 베기 모션이라 파워 스트라이크/슬래시 기대값 높음</li>
                      <li>• 3차(버서커/용기사) → 4차(다크나이트)로 이어짐</li>
                    </ul>
                    <p className="text-sm mt-2 font-semibold">
                      ⚡ 결론: 스피어맨 구간에서는 무조건 포람 사용!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 방어구 */}
            <div>
              <h4 className="font-bold text-lg mb-3 text-purple-700 dark:text-purple-300">🛡️ 방어구</h4>
              <div className="space-y-3">
                <p className="text-sm">
                  <strong>방향</strong>: 이동 속도와 스탯 위주로 세팅
                </p>
                
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <p className="text-sm mb-2"><strong>파란색 사슬 갑옷 → 보내려(이속 8, 점프 5)</strong></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    요즘은 자투로 금방 넘어가므로 보내려는 스킵해도 무방
                  </p>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <p className="text-sm mb-2"><strong>35제 방어구</strong></p>
                  <p className="text-sm">
                    남/여 공통 떡작 기준 총합 14 정도 챙길 수 있는 아무 35제 떡작 또는 전민 떡작 구매
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    💡 색깔 신경 쓰지 말고 저렴한 것 선택 (예: 불체이 45만 vs 화크이 40만 → 화크이 선택)
                  </p>
                </div>
              </div>
            </div>

            {/* 망토 */}
            <div>
              <h4 className="font-bold text-lg mb-3">🎽 망토</h4>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="font-semibold mb-2">35제 짭 카디널 (알짜 아이템!)</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• 마가티아 퀘스트 조금만 깨면 바로 획득</li>
                  <li>• 이속과 점프량 깨알같이 제공</li>
                  <li>• 80제 정품 카디널은 80렙대에 얻을 수 있음</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>이카르투스 망토</strong>: 이카만 퀘스트로 1분 확률로 이속/점프/회피 중 하나. 퀘스트가 번거로우므로 짭 카디널도 충분
                </p>
              </div>
            </div>

            {/* 신발 */}
            <div>
              <h4 className="font-bold text-lg mb-3">👟 신발</h4>
              <p className="text-sm mb-2">
                60레벨부터 엘나스에서 사냥하게 되므로, 업 7짜리 <strong>아이젠</strong>에 이속 떡작 사용
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                자본 여유 시 이속 60% 작된 아이템(이속 10, 12) 사용 가능
              </p>
            </div>

            {/* 장신구 */}
            <div>
              <h4 className="font-bold text-lg mb-3">💍 장신구</h4>
              
              <div className="space-y-3">
                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded">
                  <p className="font-semibold mb-1">캐시 장비</p>
                  <p className="text-sm">
                    작을 한 번 해 놓으면 굉장히 오래 씀. 교환 불가하므로 직접 주문서 작업 필요.
                  </p>
                  <p className="text-sm mt-1">
                    💡 이속 6~8 정도로 타협해도 충분 (필자는 이속 6을 150까지 사용 중)
                  </p>
                </div>

                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded">
                  <p className="font-semibold mb-1 text-red-600 dark:text-red-400">귀걸이 (30~50레벨): 비추천</p>
                  <p className="text-sm">
                    귀걸이 민첩 주문서가 초고가. 가성비 작(덱스 3~4)도 1천만 메소 이상.
                  </p>
                  <p className="text-sm mt-1">
                    👉 그 돈으로 자투부터 사세요! 레벨 올라갈 때마다 저렴한 노작 귀걸이(야축고리 등) 사용 추천
                  </p>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <p className="font-semibold mb-1">목걸이</p>
                  <p className="text-sm">
                    <strong>슈피겔만의 목걸이 6업</strong> 구매 또는 카니발로 직접 획득
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    직접 얻기 어렵지 않으므로 노작 6업 목걸이(45만 메소) 구매해서 쭉 쓰기 추천
                  </p>
                </div>
              </div>
            </div>

            {/* 장갑 */}
            <div>
              <h4 className="font-bold text-lg mb-3">🧤 장갑 (50레벨 기준)</h4>
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
                <p className="font-semibold mb-2">공로목 구매 강력 추천!</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• 50레벨 좌표 구매 시 명중률을 많이 얻게 되므로 덱목의 효율 하락</li>
                  <li>• <strong>가성비 라인</strong>: 0.6~0.7 공로목 (0.8부터 1천만 원 이상)</li>
                  <li>• 되팔기 쉽고 가격 하락 없음</li>
                  <li>• 해적/신규 직업 업데이트 시 수요 증가로 회수율 매우 좋음</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 레벨 50~70 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">⭐ 레벨 50~70: 자쿰 투구 도입</h3>
          <div className="space-y-5 description-text">
            
            <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-orange-700 dark:text-orange-300">
                👑 자쿰 투구 (자투) - 메이플랜드 가성비 고트!
              </h4>
              <ul className="text-sm space-y-2 ml-4">
                <li>• 전직업 필수 아이템, 캐릭터의 기본 체급을 바꿔주는 아이템</li>
                <li>• <strong>구매 가격</strong>: 700만~900만 메소 (확투 2개까지 확정)</li>
                <li>• <strong>3순번 도박</strong>: 300~400만 메소 (실패 시 다음 트라이 공짜)</li>
                <li>• 이전보다 가격 저렴해졌으므로 장공캐 등으로 2~3천만 메소 마련하여 구매 추천</li>
                <li>• 1~2하옵은 그냥 써도 무방 (나중에 자쿰 직접 잡을 기회 많음)</li>
              </ul>
              <p className="text-sm mt-3 font-semibold text-red-600 dark:text-red-400">
                ⚠️ 자쿰 입장 퀘스트가 매우 어려우니 참고!
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3">⚔️ 무기 (50~70레벨, 직업별)</h4>
              
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">파이터 (Fighter) - 두손검</p>
                  <p className="text-sm mb-2">심플하게 레벨에 맞춰 쭉 올라가면 됩니다.</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• 81제 호검 → 88제 그리스 → 93제 구룡도</li>
                    <li>• 자본 여유 시 공격력이 높은 것 선택 가능</li>
                    <li>• 3차 크루세이더 → 4차 히어로</li>
                  </ul>
                </div>

                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <p className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">페이지 (Page) - 두손검</p>
                  <p className="text-sm mb-2">파이터와 동일한 무기 라인을 사용합니다.</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• 81제 호검 → 88제 그리스 → 93제 구룡도</li>
                    <li>• 둔기보다 두손검이 훨씬 효율적</li>
                    <li>• 3차 나이트 → 4차 팔라딘</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="font-semibold text-purple-600 dark:text-purple-400 mb-2">스피어맨 (Spearman) - 포람</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• <strong>50제 구룡도</strong> 마련 필수</li>
                    <li>• 메이플 스노우보드 가격 문제: 망둥이 사냥꾼들 때문에 가격 급등</li>
                    <li>• 저자본 대안: 구룡도나 공격력 높은 구룡도로 80레벨까지 버티기</li>
                    <li>• 전사는 공격력보다 스킬 레벨로 딜하는 직업이므로 절대적이지 않음</li>
                    <li className="text-red-600 dark:text-red-400 font-semibold">
                      • 방천극 확도 비추천: 공속이 실제보다 한 단계 더 느려 답답함
                    </li>
                    <li>• 3차 버서커(용기사) → 4차 다크나이트</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
              <p className="text-sm">
                <strong>변동 없는 장비</strong>: 한벌옷, 망토, 신발, 패장비, 귀장식, 목걸이, 장갑은 30~50대 세팅과 거의 동일
              </p>
            </div>
          </div>
        </div>

        {/* 레벨 70~120 우선순위 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">📊 레벨 70~120: 자본에 따른 업그레이드 우선순위</h3>
          
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-4">
            <p className="font-semibold mb-2">⚠️ 우선순위 결정 원칙</p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• 자본에 따라 우선순위를 고려하여 결정 (절대적이지 않음)</li>
              <li>• 돈이 있으면 이 순서대로 사라는 의미 (반드시는 아님)</li>
              <li>• 무기/장갑이 가성비 라인에 도달했는데 더 올리기 비싸다면 멧돼지부터</li>
            </ul>
          </div>

          <div className="space-y-4 description-text">
            
            {/* 1순위: 자투 */}
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-2 border-yellow-300 dark:border-yellow-700">
              <h4 className="font-bold mb-2">1순위: 자쿰 투구 (자투)</h4>
              <p className="text-sm">
                캐릭터의 기본 체급을 바꿔주는 아이템. 무조건 사야 함. 장공캐 두 개만 깨도 구매 가능.
              </p>
            </div>

            {/* 2순위: 무기 */}
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold mb-3">2순위: 무기 (직업별 가이드)</h4>
              
              <div className="space-y-4">
                {/* 파이터 */}
                <div>
                  <p className="font-semibold mb-2 text-blue-600 dark:text-blue-400">⚔️ 파이터 (Fighter) - 두손검</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• 80제 총검 → <strong>90제 라투 엔더</strong>로 넘어감</li>
                    <li>• 라투 엔더는 뉴트 주니어 드랍으로 물량 많아 비싸지 않음</li>
                    <li>• <strong>가성비 라인</strong>: 110제까지 (이후 가격 급격 상승)</li>
                    <li>• 참마도(백제) 비추천: 공속 느림, 기대값 낮음</li>
                    <li className="text-blue-600 dark:text-blue-400 font-semibold">
                      • 라투 엔더 = 140~150까지 쓰는 종결급 무기!
                    </li>
                  </ul>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                    💡 공 낮은 것부터 시작하여 돈 모이는 대로 천천히 바꿔나가세요
                  </p>
                </div>

                {/* 페이지 */}
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="font-semibold mb-2 text-indigo-600 dark:text-indigo-400">🛡️ 페이지 (Page) - 두손검</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• 파이터와 동일한 무기 라인 사용</li>
                    <li>• 80제 총검 → <strong>90제 라투 엔더</strong> (110제까지 가성비)</li>
                    <li>• 둔기는 절대 비추천 (공속 느림, 사거리 짧음)</li>
                    <li>• 팔라딘으로 전직 후에도 두손검 계속 사용</li>
                  </ul>
                </div>

                {/* 용기사 (다크나이트) */}
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="font-semibold mb-2 text-purple-600 dark:text-purple-400">🔱 용기사/다크나이트 (Dragon Knight) - 창/포람</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• 3차 초반: 포람(쓰레셔) 사용 시 구룡도/보드류</li>
                    <li>• 80레벨 이후 로어 사냥: 스공만 중요하므로 저렴한 포람/창</li>
                    <li>• 85레벨 이후 스피어 버스터: 반드시 창 사용</li>
                    <li>• <strong>가성비 조합</strong>: 로어용 포람 + 버스터용 창 따로 구비</li>
                    <li>• 창 종류: 호진, 페프, 피나카, 8티잔 등 (공속 동일, 레벨 제한만 차이)</li>
                  </ul>
                  <p className="text-sm mt-2">
                    예시: 헬버드 108(140만) vs 워프산 106(370만) → 헬버드가 훨씬 저렴
                  </p>
                  <p className="text-sm mt-1 text-blue-600 dark:text-blue-400">
                    💡 버스터용 창 가성비 공격력: 108~111 라인 / 페프가 더 쌀 때도 있으므로 저렴한 것 구매
                  </p>
                </div>
              </div>
            </div>

            {/* 2순위: 직업 장갑 */}
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold mb-3">2순위: 직업 장갑 (공장갑)</h4>
              <ul className="text-sm space-y-1 ml-4">
                <li>• 100레벨 이전: 3~4스탯이 공격력 0.1이므로, 80레벨부터는 공로목보다 직업 장갑(떡작)이 수공 훨씬 많이 올려줌</li>
                <li>• 색상 무관: 다크 엠페러, 블러드 엠페러 등 스탯 탑 동일하므로 싼 것 선택</li>
                <li>• 업그레이드 단계: 80제 엠페러 → 90제 페로치 → 100제 코르벤</li>
                <li>• <strong>가성비</strong>: 0.8 라인까지만 올리고, 이후에는 마스터리북/알목 구매 후 고려</li>
              </ul>
            </div>

            {/* 3순위: 멧돼지 */}
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold mb-3">3순위: 멧돼지 (라이딩)</h4>
              <ul className="text-sm space-y-1 ml-4">
                <li>• <strong>가격</strong>: 약 2천만 메소 (개인적으로 전혀 아깝지 않음)</li>
                <li>• <strong>효과</strong>: 이속 150, 점프 120 제공</li>
                <li>• 71레벨부터 로미오 파티 퀘스트로 전사들에게 우선순위 증가</li>
                <li>• 단점: 나이트/크루세이더는 탑승/하차 시 파워가드 풀림</li>
                <li className="text-blue-600 dark:text-blue-400 font-semibold">
                  • 뚜벅이 전사에게 라이딩 효율은 절대적! 최대한 빨리 구매 추천
                </li>
              </ul>
            </div>

            {/* 4순위: 배틀로드 */}
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <h4 className="font-bold mb-3">4순위: 80제 전사 한벌옷 (배틀로드)</h4>
              <ul className="text-sm space-y-1 ml-4">
                <li>• 35제 한 벌옷 → 80제 배틀로드로 교체</li>
                <li>• 저자본: 합작 1상 떡작부터 시작 → 가성비 라인 26~32 스탯으로</li>
                <li>• 명중률 확보: 100레벨대부터 순명중 119 필요</li>
                <li>• 색깔 상관없이 합스탯 동일하면 저렴한 것 선택</li>
                <li>• 가격: 20짜리 90~100만 / 26짜리 1,800만 (여자 옷이 조금 더 비쌈)</li>
                <li>• 30~32짜리가 너무 비싸면 과감하게 직작 고려</li>
              </ul>
            </div>

            {/* 5순위: 직업 신발 */}
            <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
              <h4 className="font-bold mb-3">5순위: 직업 신발</h4>
              <ul className="text-sm space-y-1 ml-4">
                <li>• 귀민투민(귀장식 민첩 주문서 신발) 출시로 가성비 하락</li>
                <li>• 알목과 좋은 배틀로드로 명중률 충분</li>
                <li>• 80제 합구신발: 민첩 60% 3작, 덱 1상</li>
                <li>• 덱스 15 신발은 약 5천만 메소로 가성비 매우 안 좋음</li>
                <li>• 명중 부족하지 않을 때: 그린 크린 세트 등 이속 10 신발(신이속 60% 5작)로 교체</li>
              </ul>
            </div>

            {/* 7순위: 망토 */}
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
              <h4 className="font-bold mb-3">7순위: 망토</h4>
              <ul className="text-sm space-y-1 ml-4">
                <li>• 수공(스탯 공격력)을 조금이라도 더 올리기 위해 도깨비 망토 망임작 사용</li>
                <li>• <strong>추천</strong>: 이속 수단과 수공 수단을 교차 사용 (이속은 타임/앵벌 시)</li>
                <li>• 도깨비 망토: 65레벨대 획득, 직작 후 100% 5작 시 이속 10</li>
                <li>• 80제 알카드노 망토: 이속 7, 점프 3상, ATP 제공, 물마방 포션 소비 감소</li>
                <li>• 이카망: 퀘스트로 획득 가능, 도깨비 망토와 택1</li>
              </ul>
              <p className="text-sm mt-2 text-blue-600 dark:text-blue-400">
                💡 개인 추천: 도깨비 망토에 100% 작업 (필자는 100% 다섯 장 발랐음)
              </p>
            </div>

            {/* 8순위: 귀민투민 */}
            <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
              <h4 className="font-bold mb-3">8순위: 귀민투민 (귀장식/민첩 주문서)</h4>
              <ul className="text-sm space-y-1 ml-4">
                <li>• 주문서 시세 매우 비쌈 (100%도 2천만 메소대)</li>
                <li>• 전사는 혼테일 알목, 배틀로드, 직업 장갑/신발로도 총 명중 139 가능</li>
                <li>• 필요 시점: 혼테일 격수로서 명중률을 높여야 할 때</li>
                <li className="text-red-600 dark:text-red-400 font-semibold">
                  • 자투 민첩작/귀정식 민첩작은 절대로 가성비 아님!
                </li>
                <li>• 그나마 가성비: 덱스 4짜리 장갑 귀걸이 (1세트당 약 480만 가치)</li>
              </ul>
            </div>

            {/* 9순위: 패장비 */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-bold mb-3">9순위: 패장비</h4>
              <p className="text-sm">
                돈 여유 있으면 이속 10 노리기. 웬만하면 이속 6~8로 타협해도 충분
              </p>
            </div>
          </div>
        </div>

        {/* 120레벨 이후 */}
        <div className="card-bg p-6">
          <h3 className="subsection-title mb-4">💎 120레벨 이후: 하이엔드 템셋팅</h3>
          
          <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg mb-4">
            <p className="font-semibold mb-2">⚠️ 투자 시점</p>
            <p className="text-sm">
              120레벨 이후에는 자본이 모이는 대로 선택하며, 반드시 사야 하는 것은 없습니다.
            </p>
          </div>

          <div className="space-y-5 description-text">
            
            {/* 혼테일 목걸이 */}
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-400 dark:border-red-600">
              <h4 className="font-bold text-lg mb-3 text-red-700 dark:text-red-300">
                🔥 혼테일 목걸이 (홈목, 알목) - 최우선!
              </h4>
              <ul className="text-sm space-y-2 ml-4">
                <li>
                  <strong>3전사 모든 전직 시 깡무(노작)를 가장 1순위로 추천!</strong>
                </li>
                <li>• 올스탯 가성비 + 방어력/회피를 통한 포션 소비 감소</li>
                <li>• 물방/물마방과 회피 때문에 착용 (스탯은 부가적)</li>
                <li>• <strong>깡목 1순번</strong>: 2천만 메소</li>
                <li>• <strong>알플러스 목걸이</strong>: 1억 5천만 메소 (입장 재료 50만~1천만 메소)</li>
                <li>• 추천: 자본 투자할 거라면 두 개(깡목/알플) 한 번에 끝내기</li>
                <li>• 2순번부터 드랍율 70%로 하락 (재료 수급 피곤)</li>
              </ul>
            </div>

            {/* 은빛 갈기 */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-400 dark:border-blue-600">
              <h4 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-300">
                🐴 은빛 갈기 (은갈)
              </h4>
              <ul className="text-sm space-y-2 ml-4">
                <li>• 투자 논쟁이 있으나, 필자의 경험상 이속 증가 = 앵벌/돈벌이 증가</li>
                <li>• <strong>효과</strong>: 이속 150, 점프 120 (멧돼지와 차원이 다름)</li>
                <li className="text-blue-600 dark:text-blue-400 font-semibold">
                  • 기왕이면 빠른 시일 내에 마련하는 것이 돈을 빨리 모으는 길!
                </li>
                <li>• 순위: 은갈/알목은 취향 차이 (깡무 다음 우선순위)</li>
              </ul>
            </div>

            {/* 마스터리북 */}
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-bold text-lg mb-3">📚 마스터리북 및 스킬 투자 우선순위</h4>
              
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-2">히어로</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• 브랜디시, 어컴까지 고정 레벨 투자 필요</li>
                    <li>• 마스터리북(스탠, 돌진) 투자는 후순위</li>
                    <li>• 순서: 알목, 은갈 → 가련한 사냥터에 맞게 스탠/돌진</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">팔라딘</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• 4차 전직 이후: 불라 바닥 진입 위해 알목, 은갈, 스탠, 돌진</li>
                    <li>• 솔플 위주: 스탠보다 돌진 우선순위 높을 수 있음</li>
                    <li>• 보스(브라동, 파플라투스, 피아누스): 스탠스 투자</li>
                    <li>• 결론: 어떤 것 먼저 해도 취향 차이</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">다크나이트</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• 깡무, 은갈 맞춘 후 혼테일 알바 시 스탠부터</li>
                    <li>• 고민: 뻥알바로 돈 모아 알목 or 매미 가서 버서크 30</li>
                    <li>• 경험치 고점 먹고 레벨업 하려면 버서크 30 고려</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 하이엔드 템셋팅 철학 */}
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg">
              <h4 className="font-bold text-lg mb-3">💭 하이엔드 템셋팅에 대한 철학</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-blue-600 dark:text-blue-400">전사의 핵심</strong>: 
                  전사는 궁수/도적 대비 아이템 스탯이나 무기 공격력 증가 영향력이 덜함
                </p>
                <p>
                  <strong className="text-purple-600 dark:text-purple-400">딜 메커니즘</strong>: 
                  전사의 데미지는 스킬 레벨에 매우 크게 좌우되며, 레벨링이 깡패
                </p>
                <p>
                  <strong className="text-green-600 dark:text-green-400">4차 전직 이후 핵심</strong>: 
                  진출할 사냥터 요구 사항에 맞추는 것이 핵심
                </p>
                <p className="mt-3 font-semibold text-amber-700 dark:text-amber-300">
                  💡 최종 추천 순서: 은빛 갈기, 알목, 마스터리북 → 무기/장갑 하이엔드
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  하이엔드 무기/장갑은 레벨이 매우 높아지고 은갈/알목/마이 투자가 어느 정도 뚫리고 스킬 레벨이 다 투자된 다음에 고려하세요.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
