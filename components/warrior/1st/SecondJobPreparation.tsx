import Link from "next/link";

export default function SecondJobPreparation() {
  return (
    <section className="mb-12">
      <h2 className="section-title mb-6">2차 전직 준비</h2>
      <div className="card-bg p-6 bg-linear-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
        <div className="space-y-4 description-text">
          <p>
            <strong className="text-lg">전직 레벨:</strong>{" "}
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              30
            </span>
          </p>
          <div>
            <p className="font-semibold text-lg mb-3">선택 가능한 2차 직업</p>
            <div className="space-y-3">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                <Link href="/warrior/2nd/fighter" className="block">
                  <p className="font-bold text-blue-700 dark:text-blue-300 mb-1">
                    ⚔️ 파이터 (Fighter)
                  </p>
                  <p className="text-sm">
                    검과 도끼 사용 · 3차: 크루세이더 · 4차: 히어로
                  </p>
                </Link>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                <Link href="/warrior/2nd/page" className="block">
                  <p className="font-bold text-blue-700 dark:text-blue-300 mb-1">
                    🛡️ 페이지 (Page)
                  </p>
                  <p className="text-sm">
                    검과 둔기 사용 · 3차: 나이트 · 4차: 팔라딘
                  </p>
                </Link>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                <Link href="/warrior/2nd/spearman" className="block">
                  <p className="font-bold text-blue-700 dark:text-blue-300 mb-1">
                    🔱 스피어맨 (Spearman)
                  </p>
                  <p className="text-sm">
                    창과 폴암 사용 · 3차: 버서커 · 4차: 다크나이트
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
