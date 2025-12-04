import SearchBar from "@/components/ui/SearchBar";
import { jobCategories } from "@/lib/data/jobs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">직업 선택</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobCategories.map((category) => (
              <Link
                key={category.id}
                href={`/${category.id}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 관련 사이트 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">관련 사이트</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href="https://mapledb.kr/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow text-center"
            >
              <h3 className="text-xl font-bold mb-2">MapleDB</h3>
              <p className="text-gray-600">메이플스토리 아이템 데이터베이스</p>
            </a>

            <a
              href="https://mapleland.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow text-center"
            >
              <h3 className="text-xl font-bold mb-2">MapleLand.gg</h3>
              <p className="text-gray-600">메이플랜드 종합 정보 사이트</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
