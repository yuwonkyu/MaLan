import Link from "next/link";

export default function WarriorPage() {
  const secondJobs = [
    {
      id: "fighter",
      name: "파이터",
      description: "검과 도끼를 다루는 전사",
      thirdJobs: [{ id: "crusader", name: "크루세이더", fourthJob: "히어로" }],
    },
    {
      id: "page",
      name: "페이지",
      description: "검과 둔기를 사용하는 기사",
      thirdJobs: [{ id: "knight", name: "나이트", fourthJob: "팔라딘" }],
    },
    {
      id: "spearman",
      name: "스피어맨",
      description: "창과 폴암을 주무기로 사용",
      thirdJobs: [
        { id: "berserker", name: "버서커(용기사)", fourthJob: "다크나이트" },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">전사</h1>
        <p className="text-gray-600 text-lg">
          높은 체력과 방어력을 가진 근접 전투의 달인
        </p>
      </div>

      {/* 1차 전직 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">1차 전직</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-3">소드맨 (Swordman)</h3>
          <p className="text-gray-600 mb-4">레벨 10에 전직 가능</p>
          <Link
            href="/warrior/swordman/1st"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            1차 육성 가이드 보기
          </Link>
        </div>
      </section>

      {/* 2차 전직 이후 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">2차 전직 이후</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-3">{job.name}</h3>
              <p className="text-gray-600 mb-4">{job.description}</p>

              <div className="space-y-3">
                {/* 2차 전직 */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    2차 전직 (Lv.30)
                  </h4>
                  <Link
                    href={`/warrior/${job.id}/2nd`}
                    className="text-blue-600 hover:underline block"
                  >
                    → {job.name} 육성 가이드
                  </Link>
                </div>

                {/* 3차, 4차 전직 */}
                {job.thirdJobs.map((third) => (
                  <div key={third.id}>
                    <h4 className="font-semibold text-gray-700 mb-2">
                      3차 전직 (Lv.70)
                    </h4>
                    <Link
                      href={`/warrior/${job.id}/${third.id}/3rd`}
                      className="text-blue-600 hover:underline block mb-3"
                    >
                      → {third.name} 육성 가이드
                    </Link>

                    <h4 className="font-semibold text-gray-700 mb-2">
                      4차 전직 (Lv.120)
                    </h4>
                    <Link
                      href={`/warrior/${job.id}/${third.id}/4th`}
                      className="text-blue-600 hover:underline block"
                    >
                      → {third.fourthJob} 육성 가이드
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
