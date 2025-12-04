export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 사이트 정보 */}
          <div>
            <h3 className="text-lg font-bold mb-4">메랜육성</h3>
            <p className="text-gray-400 text-sm">
              메이플랜드 캐릭터 육성 가이드
            </p>
          </div>

          {/* 관련 사이트 */}
          <div>
            <h3 className="text-lg font-bold mb-4">관련 사이트</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://mapledb.kr/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  MapleDB
                </a>
              </li>
              <li>
                <a
                  href="https://mapleland.gg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  MapleLand.gg
                </a>
              </li>
            </ul>
          </div>

          {/* 카테고리 */}
          <div>
            <h3 className="text-lg font-bold mb-4">직업 카테고리</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/warrior"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  전사
                </a>
              </li>
              <li>
                <a
                  href="/magician"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  마법사
                </a>
              </li>
              <li>
                <a
                  href="/thief"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  도적
                </a>
              </li>
              <li>
                <a
                  href="/archer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  궁수
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 메랜육성. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
