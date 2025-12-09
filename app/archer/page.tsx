import Link from "next/link";

const ArcherPage = () => {
  const secondJobs = [
    {
      id: "hunter",
      name: "헌터",
      description: "활을 사용하는 사냥꾼",
      thirdJobs: [{ id: "ranger", name: "레인저", fourthJob: "보우마스터" }],
    },
    {
      id: "crossbowman",
      name: "사수",
      description: "석궁을 사용하는 명사수",
      thirdJobs: [{ id: "sniper", name: "저격수", fourthJob: "신궁" }],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">궁수</h1>
        <p className="text-gray-600 text-lg">
          정확한 원거리 공격으로 적을 저격하는 명궁
        </p>
      </div>

      {/* 1차 전직 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">1차 전직</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-3">아처 (Archer)</h3>
          <p className="text-gray-600 mb-4">레벨 10에 전직 가능</p>
          <Link
            href="/archer/archer/1st"
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
                    href={`/archer/${job.id}/2nd`}
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
                      href={`/archer/${job.id}/${third.id}/3rd`}
                      className="text-blue-600 hover:underline block mb-3"
                    >
                      → {third.name} 육성 가이드
                    </Link>

                    <h4 className="font-semibold text-gray-700 mb-2">
                      4차 전직 (Lv.120)
                    </h4>
                    <Link
                      href={`/archer/${job.id}/${third.id}/4th`}
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
};

export default ArcherPage;
