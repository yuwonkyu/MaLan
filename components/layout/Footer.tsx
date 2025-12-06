export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 제작자 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Maker</h3>
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              나는용사다
            </p>
          </div>

          {/* 출처 사이트 */}
          <div>
            <h3 className="text-lg font-bold mb-4">출처 사이트</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://mapledb.kr/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 text-sm transition-colors"
                >
                  MapleDB
                </a>
              </li>
              <li>
                <a
                  href="https://mapleland.gg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 text-sm transition-colors"
                >
                  MapleLand.gg
                </a>
              </li>
            </ul>
          </div>

          {/* 업데이트 날짜 */}
          <div>
            <h3 className="text-lg font-bold mb-4">업데이트</h3>
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              최종 업데이트: 2025년 12월 6일
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-800 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © 2025 메랜육성. Made by 나는용사다
          </p>
        </div>
      </div>
    </footer>
  );
}
