export default function ThirdJobHuntingGrounds() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">3차 전직 추천 사냥터 (Lv.70-120)</h2>
      
      <div className="space-y-6">
        {/* 72-85레벨: 사이길 (최고 효율) */}
        <div className="card-bg p-6 border-l-4 border-red-500 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
          <div className="flex items-start justify-between mb-3">
            <h3 className="subsection-title text-red-700 dark:text-red-300">
              🔥 Lv.72-85 - 대만 야시장 사이길
            </h3>
            <span className="text-xs px-3 py-1 bg-red-600 text-white rounded-full font-bold">최고 효율</span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong>경험치:</strong> 시간당 70만~100만 | <strong>명중률:</strong> 60레벨 기준 총 73 (블레스 전 53)
              </p>
              <p className="text-sm description-text mb-2">
                <strong className="text-red-600 dark:text-red-400">3전사 모두 올 수 있는 70레벨 대체 불가능한 압도적 경험치 사냥터</strong>
              </p>
              <p className="text-sm description-text">
                마가티아가 나온 현시점에서도 현역입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 크루세이더/나이트 */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2 text-blue-700 dark:text-blue-300">크루세이더/나이트</h4>
                <p className="text-sm description-text mb-2">
                  <strong>진입 레벨:</strong> 74~75레벨
                </p>
                <p className="text-sm description-text">
                  슬래시 블래스트로 예티 인형 젠 컷이 가능해야 합니다. 슬블 한 방으로 인형 정리!
                </p>
              </div>

              {/* 용기사 */}
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-bold mb-2 text-purple-700 dark:text-purple-300">용기사 (스피어맨)</h4>
                <p className="text-sm description-text mb-2">
                  <strong>진입 레벨:</strong> 72레벨
                </p>
                <p className="text-sm description-text">
                  드래곤 스레셔 포람 7레벨 이상이면 수월하게 5일 자리 <strong>용기사 전용 자리</strong> 쟁취 가능
                </p>
              </div>

              {/* 드랍 */}
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2 text-green-700 dark:text-green-300">드랍 & 수익</h4>
                <p className="text-sm description-text mb-2">
                  예티 자판기: 장공 드랍
                </p>
                <p className="text-sm description-text">
                  인형 자판기: 스마 드랍
                </p>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <h4 className="font-bold mb-2">⚠️ 중요 사항</h4>
              <p className="text-sm description-text mb-2">
                <strong>젠 소화 필수:</strong> 한 명이라도 젠을 못 밀 경우 파티원 전체 경험치 손실이 극심합니다.
              </p>
              <p className="text-sm description-text mb-2">
                <strong>파티 구성:</strong> 좌일 5, 1, 2와 버블꾼을 구인. 프리스트가 대기하며 한 마리 잡고 전체 심을 돌리는 구조
              </p>
              <p className="text-sm description-text">
                <strong>용기사 특징:</strong> 몸박 횟수가 적어(자판기 고정) 적자를 별로 보지 않으므로 신비를 내고도 흑자 가능
              </p>
            </div>
          </div>
        </div>

        {/* 60-120레벨: 망둥이 쩔 (용기사 특화) */}
        <div className="card-bg p-6 border-l-4 border-purple-500">
          <div className="flex items-start justify-between mb-3">
            <h3 className="subsection-title text-purple-700 dark:text-purple-300">
              🌊 Lv.60-120 - 망둥이 쩔 (용기사/스피어맨 특화)
            </h3>
            <span className="text-xs px-3 py-1 bg-purple-600 text-white rounded-full">용기사 최적</span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong>명중률:</strong> 망둥이(85레벨) 기준 총 106 필요 (60레벨 기준 203)
              </p>
              <p className="text-sm description-text mb-2">
                <strong>경험치:</strong> 일반 사냥터보다 2.5~3배, 시간당 300만 가까이 가능
              </p>
              <p className="text-sm description-text">
                <strong className="text-purple-600 dark:text-purple-400">포람 용기사의 망둥이 쩔 효율이 거의 최고</strong>입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2 text-green-700 dark:text-green-300">✅ 용기사/스피어맨</h4>
                <p className="text-sm description-text mb-2">
                  물망둥이의 주인공!
                </p>
                <ul className="list-disc list-inside text-sm description-text space-y-1">
                  <li>스피어맨: 뻥 전형으로 적자 없이 수월</li>
                  <li>용기사: 압도적 1황, 엄청난 고점</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h4 className="font-bold mb-2 text-red-700 dark:text-red-300">❌ 크루세이더/나이트</h4>
                <p className="text-sm description-text">
                  슬래시 블래스트로 망둥이를 깔끔하게 잡기 어려워 선호되지 않습니다. 3차 이후 쩔기사에게 스펙을 물어보고 가야 합니다.
                </p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-bold mb-2">파티 구성 & 운영</h4>
              <p className="text-sm description-text mb-2">
                <strong>구성:</strong> 망둥이만 잡는 4인 파티. 폭망둥이 집을 깨서 몰아주면 파티가 잡고, 프리스트는 힐을 줌
              </p>
              <p className="text-sm description-text">
                프리스트가 붙어서 힐을 주므로 포션을 먹지 않아 고비용 지출에도 <strong>적자가 심하지 않습니다.</strong>
              </p>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm description-text">
                💡 <strong>추천 레벨:</strong> 70~100레벨 용기사 효율 최고. 100레벨 이상은 블루 와이번 자리를 사는 것이 더 나을 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 85-120레벨: 숲 관리 길 (순미골) */}
        <div className="card-bg p-6 border-l-4 border-green-500">
          <div className="flex items-start justify-between mb-3">
            <h3 className="subsection-title text-green-700 dark:text-green-300">
              🌲 Lv.85-120 - 숲 관리 길 6인 (순미골)
            </h3>
            <span className="text-xs px-3 py-1 bg-green-600 text-white rounded-full">권장</span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong>경험치:</strong> 시간당 150만~250만 | <strong>명중률:</strong> 85레벨 기준 총 99 (블레스 전 79)
              </p>
              <p className="text-sm description-text">
                듀얼 버크는 안 잡고 버크만 잡는 기준입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 크루세이더 */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">크루세이더</h4>
                <p className="text-sm description-text mb-2">
                  <strong>스킬:</strong> 85레벨부터 분노 전형
                </p>
                <p className="text-sm description-text">
                  2층 고정으로 안정적 사냥. 힐케어 파티라 적자 없음
                </p>
              </div>

              {/* 용기사 */}
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-bold mb-2">용기사</h4>
                <p className="text-sm description-text mb-2">
                  <strong>스킬:</strong> 버서크 30 필수
                </p>
                <p className="text-sm description-text">
                  90레벨부터 버서크 30, 로어 30 둘 다 선마스터 후 취업 추천
                </p>
              </div>

              {/* 나이트 */}
              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <h4 className="font-bold mb-2">나이트</h4>
                <p className="text-sm description-text mb-2">
                  <strong>스킬:</strong> 얼음 차지 마스터
                </p>
                <p className="text-sm description-text">
                  (스킬 초기화 필요)
                </p>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm description-text">
                85레벨 전사면 웬만하면 수월하게 2층 자리에 올 수 있으며, 밧줄에 매달린 프리스트에게 돈을 주고 힐을 받아 포션을 아끼는 <strong>힐케어 파티</strong>라 적자가 나지 않습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 83-120레벨: 브로아 전 */}
        <div className="card-bg p-6 border-l-4 border-red-500">
          <div className="flex items-start justify-between mb-3">
            <h3 className="subsection-title text-red-700 dark:text-red-300">
              🔥 Lv.83-120 - 브로아 전 제네절
            </h3>
            <span className="text-xs px-3 py-1 bg-red-600 text-white rounded-full">최고 효율</span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong>경험치:</strong> 시간당 300만~500만 (레벨과 파티 구성에 따라 편차 큼)
              </p>
              <p className="text-sm description-text mb-2">
                <strong>드랍:</strong> 불캔(귀행), 장공 10%로 드랍이 매우 맛있습니다.
              </p>
              <p className="text-sm description-text">
                <strong className="text-red-600 dark:text-red-400">대타 지옥</strong>으로 악명이 높습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">크루세이더</h4>
                <p className="text-sm description-text">
                  콤보 마스터 시 83레벨부터 6인 파티 가능
                </p>
              </div>

              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <h4 className="font-bold mb-2">나이트</h4>
                <p className="text-sm description-text">
                  얼음칼 마스터 시 83레벨부터 가능
                </p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-bold mb-2">용기사</h4>
                <p className="text-sm description-text">
                  창 버스터 마스터 시 83레벨부터 가능
                </p>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm description-text">
                💡 기존 제네 쩔팟 위주였으나, 망둥이 쩔 등장 후 자리가 저렴해져 낮이나 저녁에도 로어팟이 많이 보입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 87-120레벨: 듀얼 파이레츠 */}
        <div className="card-bg p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="subsection-title">
              ⚔️ Lv.87-120 - 듀얼 파이레츠 6인
            </h3>
            <span className="text-xs px-3 py-1 bg-gray-600 text-white rounded-full">대안</span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm description-text mb-2">
                <strong>명중률:</strong> 87레벨 기준 (블레스 전 83)
              </p>
              <p className="text-sm description-text">
                <strong>드랍:</strong> 뇌전, 레드 피터 부츠
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-bold mb-2">2층 (87레벨~)</h4>
                <p className="text-sm description-text">
                  87레벨 이상이면 수월
                </p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-bold mb-2">3층 (100레벨~)</h4>
                <p className="text-sm description-text mb-2">
                  크루: 100호 이상 멧돼지
                </p>
                <p className="text-sm description-text mb-2">
                  나이트: 불칼로 세네 방 컷
                </p>
                <p className="text-sm description-text">
                  용기사: 스공 3,400+ (3.5컷)
                </p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold mb-2">1층 (120레벨~)</h4>
                <p className="text-sm description-text">
                  4차 전직 이상 전사가 보통 옴. 파밍 목적
                </p>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm description-text">
                ⚠️ 현재는 순미골과 물망둥에 밀려 구인이 잘 되지 않습니다. 123레벨부터는 완전 흑자 사냥이 가능합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 용기사 전용 사냥터 */}
        <div className="card-bg p-6 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
          <h3 className="subsection-title mb-4 text-purple-700 dark:text-purple-300">
            🐉 용기사 전용 특화 사냥터
          </h3>
          
          <div className="space-y-4">
            {/* 하늘 둥지 입구 */}
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold mb-2">Lv.81-100 - 하늘 둥지 입구 (로어 사냥터)</h4>
              <p className="text-sm description-text mb-2">
                <strong>경험치:</strong> 시간당 120만~170만 | <strong>명중률:</strong> 81레벨 기준 총 113 (블레스 전 83)
              </p>
              <p className="text-sm description-text mb-2">
                <strong>스펙:</strong> 드래곤 로어 30 지키는 81레벨 이상. 자투 80제 무기와 명중컷만 맞추면 스공은 별로 중요하지 않음
              </p>
              <p className="text-sm description-text mb-2">
                <strong>드랍:</strong> 하프(요전 수리검, 귀민), 버크(주문서, 다이몬 블러드)
              </p>
              <p className="text-sm description-text mb-2">
                쉬는 시간이 없는 <strong>무흡 사냥터</strong>이며, 80, 90레벨대 하둥 저렙팟이 유행하여 정석 사냥터로 자리매김했습니다.
              </p>
              <p className="text-sm text-yellow-600 dark:text-yellow-400">
                ⚠️ 최근 프리스트와 나무꾼 구인이 어려워 바쁜 시간대 취업 어려움. 순미골 6인과 병행 추천
              </p>
            </div>

            {/* 브로아 전 로어 */}
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-bold mb-2">Lv.90-120 - 브로아 전 로어</h4>
              <p className="text-sm description-text mb-2">
                <strong>경험치:</strong> 180만~최대 250만 | <strong>명중률:</strong> 88레벨 기준 (블레스 전 83)
              </p>
              <p className="text-sm description-text mb-2">
                <strong>스공 요구치:</strong> 좌용 3명 합 11,000 / 우용 3명 합 12,000 (본인 스공 3,500 정도면 문의 가능)
              </p>
              <p className="text-sm description-text mb-2">
                <strong>드랍:</strong> 불캔(니스록, 블루마린, 귀행), 검캔(크리븐), 장공 10%
              </p>
              <p className="text-sm text-red-600 dark:text-red-400">
                ⚠️ 한 번 들어가면 대타 구할 때까지 못 나가는 <strong>대타 지옥</strong>으로 악명 높음
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
