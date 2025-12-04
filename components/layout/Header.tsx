"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            메랜육성
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/warrior"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              전사
            </Link>
            <Link
              href="/magician"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              마법사
            </Link>
            <Link
              href="/thief"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              도적
            </Link>
            <Link
              href="/archer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              궁수
            </Link>
          </div>

          {/* 외부 링크 */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://mapledb.kr/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              MapleDB
            </a>
            <a
              href="https://mapleland.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              MapleLand.gg
            </a>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/warrior"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              전사
            </Link>
            <Link
              href="/magician"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              마법사
            </Link>
            <Link
              href="/thief"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              도적
            </Link>
            <Link
              href="/archer"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              궁수
            </Link>
            <hr className="my-2" />
            <a
              href="https://mapledb.kr/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-600"
            >
              MapleDB
            </a>
            <a
              href="https://mapleland.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-600"
            >
              MapleLand.gg
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
