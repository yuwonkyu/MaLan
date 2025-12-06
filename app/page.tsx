import SearchBar from "@/components/ui/SearchBar";
import { jobCategories } from "@/lib/data/jobs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* 히어로 섹션 */}
      <section className="bg-linear-to-br from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">메랜육성</h1>
            <p className="text-xl text-blue-100">
              메이플랜드 캐릭터 육성의 모든 것
            </p>
          </div>

          {/* 검색창 */}
          <div className="flex justify-center">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* 직업 카테고리 */}
      <section className="flex-1 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
            직업 선택
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobCategories.map((category) => (
              <Link
                key={category.id}
                href={`/${category.id}`}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-6 hover:shadow-xl dark:hover:shadow-gray-900 transition-shadow cursor-pointer group"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>

                  {/* 2차 직업 */}
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      2차
                    </p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {category.jobs.second.map((job) => (
                        <span
                          key={job}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded"
                        >
                          {job}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3차 직업 */}
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      3차
                    </p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {category.jobs.third.map((job) => (
                        <span
                          key={job}
                          className="px-2 py-1 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs rounded"
                        >
                          {job}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 4차 직업 */}
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      4차
                    </p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {category.jobs.fourth.map((job) => (
                        <span
                          key={job}
                          className="px-2 py-1 bg-amber-50 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-xs rounded"
                        >
                          {job}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 무기 */}
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      전용 무기
                    </p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {category.weapons.map((weapon) => (
                        <span
                          key={weapon}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {weapon}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
