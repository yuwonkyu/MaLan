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
        <h1 className="page-title mb-4">전사 (Warrior) - 1차 전직</h1>
        <p className="description-text text-lg">
          레벨 10부터 시작하는 전사의 기초 육성 가이드
        </p>
      </div>

      {/* 개요 */}
      <section className="mb-12">
        <div className="card-bg p-6">
          <h2 className="section-title mb-4">직업 개요</h2>
          <div className="space-y-3 description-text">
            <p>
              <strong>전직 레벨:</strong> 10
            </p>
            <p>
              <strong>전직 장소:</strong> 페리온 전사의 전당
            </p>
            <p>
              <strong>전직 NPC:</strong> 무공
            </p>
            <p>
              <strong>특징:</strong> 높은 HP와 방어력을 바탕으로 근접 전투에
              특화된 직업군
            </p>
          </div>
        </div>
      </section>

      {/* 스킬 트리 */}
      <section className="mb-12">
        <h2 className="section-title mb-6">추천 스킬 트리</h2>
        <div className="card-bg p-6">
          <div className="space-y-6">
            {/* 필수 스킬 */}
            <div>
              <h3 className="subsection-title mb-3">필수 스킬</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="tier-label mb-2">임프로브 HP 리커버리</h4>
                  <p className="description-text text-sm">
                    HP 회복량을 증가시켜 생존력을 크게 향상시킵니다.
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                    추천: 마스터 (10/10)
                  </p>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="tier-label mb-2">아이언 바디</h4>
                  <p className="description-text text-sm">
                    물리 방어력을 증가시켜 받는 피해를 줄입니다.
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                    추천: 10~20 레벨
                  </p>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="tier-label mb-2">파워 스트라이크</h4>
                  <p className="description-text text-sm">
                    기본 공격 스킬로 초반 사냥에 필수입니다.
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                    추천: 마스터 (20/20)
                  </p>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="tier-label mb-2">슬래시 블래스트</h4>
                  <p className="description-text text-sm">
                    범위 공격 스킬로 다수의 몬스터 사냥에 유용합니다.
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                    추천: 마스터 (20/20)
                  </p>
                </div>
              </div>
            </div>

            {/* 스킬 순서 */}
            <div>
              <h3 className="subsection-title mb-3">스킬 찍는 순서</h3>
              <ol className="list-decimal list-inside space-y-2 description-text">
                <li>파워 스트라이크 1 (공격 스킬 확보)</li>
                <li>임프로브 HP 리커버리 마스터 (생존력 확보)</li>
                <li>파워 스트라이크 마스터 (주력 공격 스킬)</li>
                <li>슬래시 블래스트 마스터 (범위 공격)</li>
                <li>아이언 바디 10~20 (방어력 확보)</li>
                <li>남은 SP로 원하는 스킬 투자</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 스탯 분배 */}
      <section className="mb-12">
        <h2 className="section-title mb-6">스탯 분배</h2>
        <div className="card-bg p-6">
          <div className="space-y-4">
            <div>
              <h3 className="subsection-title mb-3">추천 스탯</h3>
              <div className="space-y-3 description-text">
                <p>
                  <strong>STR (힘):</strong> 주력 스탯, 모든 SP를 투자
                </p>
                <p>
                  <strong>DEX (민첩):</strong> 장비 착용 최소치만 확보
                </p>
                <p>
                  <strong>INT (지능):</strong> 투자 불필요
                </p>
                <p>
                  <strong>LUK (운):</strong> 투자 불필요
                </p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-sm description-text">
                💡 <strong>팁:</strong> 2차 전직 이후 무기 착용 요구치를 미리
                확인하여 DEX를 준비하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 추천 사냥터 */}
      <section className="mb-12">
        <h2 className="section-title mb-6">레벨별 추천 사냥터</h2>
        <div className="space-y-4">
          <div className="card-bg p-6">
            <h3 className="tier-label text-blue-700 dark:text-blue-300 mb-3">
              Lv.10-15: 페리온 북쪽 평원
            </h3>
            <p className="description-text">
              <strong>몬스터:</strong> 스텀프, 슬라임
              <br />
              <strong>특징:</strong> 전직 직후 안정적인 사냥터
            </p>
          </div>

          <div className="card-bg p-6">
            <h3 className="tier-label text-blue-700 dark:text-blue-300 mb-3">
              Lv.15-20: 커닝시티 지하철
            </h3>
            <p className="description-text">
              <strong>몬스터:</strong> 슬라임, 리본 돼지
              <br />
              <strong>특징:</strong> 경험치 효율이 좋은 사냥터
            </p>
          </div>

          <div className="card-bg p-6">
            <h3 className="tier-label text-blue-700 dark:text-blue-300 mb-3">
              Lv.20-25: 페리온 워리어 그라운드
            </h3>
            <p className="description-text">
              <strong>몬스터:</strong> 스톤 골렘, 다크 스톤 골렘
              <br />
              <strong>특징:</strong> 전사에게 최적화된 사냥터
            </p>
          </div>

          <div className="card-bg p-6">
            <h3 className="tier-label text-blue-700 dark:text-blue-300 mb-3">
              Lv.25-30: 개미굴
            </h3>
            <p className="description-text">
              <strong>몬스터:</strong> 뿔버섯, 좀비 버섯
              <br />
              <strong>특징:</strong> 2차 전직 전까지 추천하는 사냥터
            </p>
          </div>
        </div>
      </section>

      {/* 장비 추천 */}
      <section className="mb-12">
        <h2 className="section-title mb-6">추천 장비</h2>
        <div className="card-bg p-6">
          <div className="space-y-4">
            <div>
              <h3 className="subsection-title mb-3">무기</h3>
              <ul className="list-disc list-inside space-y-2 description-text">
                <li>한손검: 사파이어 메이스, 글라디우스</li>
                <li>양손검: 바스타드 소드, 투핸디드 소드</li>
                <li>창: 트라이던트, 스피어</li>
                <li>도끼: 배틀 액스, 투핸디드 액스</li>
              </ul>
            </div>

            <div>
              <h3 className="subsection-title mb-3">방어구</h3>
              <ul className="list-disc list-inside space-y-2 description-text">
                <li>모자: 브론즈 바이킹 헬름</li>
                <li>상의: 블루 하드레더 아머</li>
                <li>하의: 블루 하드레더 팬츠</li>
                <li>장갑: 레더 장갑</li>
                <li>신발: 워리어 부츠</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2차 전직 준비 */}
      <section className="mb-12">
        <h2 className="section-title mb-6">2차 전직 준비</h2>
        <div className="card-bg p-6">
          <div className="space-y-4 description-text">
            <p>
              <strong>전직 레벨:</strong> 30
            </p>
            <p>
              <strong>선택 가능한 2차 직업:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <Link href="/warrior/fighter/2nd">
                  <strong className="text-blue-700 dark:text-blue-300">
                    파이터:
                  </strong>{" "}
                </Link>
                검과 도끼 사용 (3차: 크루세이더, 4차: 히어로)
              </li>
              <li>
                <Link href="/warrior/page/2nd">
                  <strong className="text-blue-700 dark:text-blue-300">
                    페이지:
                  </strong>{" "}
                </Link>
                검과 둔기 사용 (3차: 나이트, 4차: 팔라딘)
              </li>
              <li>
                <Link href="/warrior/spearman/2nd">
                  <strong className="text-blue-700 dark:text-blue-300">
                    스피어맨:
                  </strong>{" "}
                </Link>
                창과 폴암 사용 (3차: 버서커, 4차: 다크나이트)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WarriorFirstJobPage;
