"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import SunIcon from "@/components/icons/SunIcon";
import MoonIcon from "@/components/icons/MoonIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 초기 다크모드 상태 확인
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    // DOM에서 현재 상태 직접 확인
    const currentMode = document.documentElement.classList.contains("dark");
    const newMode = !currentMode;

    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));

    console.log("Toggle Dark Mode:", newMode);
    console.log(
      "HTML Classes Before:",
      document.documentElement.classList.toString()
    );

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    console.log(
      "HTML Classes After:",
      document.documentElement.classList.toString()
    );
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            메랜육성
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/warrior"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              전사
            </Link>
            <Link
              href="/magician"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              마법사
            </Link>
            <Link
              href="/archer"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              궁수
            </Link>
            <Link
              href="/thief"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              도적
            </Link>
          </div>

          {/* 다크모드 토글 */}
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="다크모드 토글"
            >
              {isDarkMode ? (
                <SunIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              ) : (
                <MoonIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-white dark:bg-gray-800">
            <Link
              href="/warrior"
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              전사
            </Link>
            <Link
              href="/magician"
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              마법사
            </Link>
            <Link
              href="/archer"
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              궁수
            </Link>
            <Link
              href="/thief"
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              도적
            </Link>
            <hr className="my-2 border-gray-300 dark:border-gray-600" />
            <button
              onClick={toggleDarkMode}
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
            >
              {isDarkMode ? (
                <>
                  <SunIcon className="w-5 h-5 mr-2" />
                  라이트 모드
                </>
              ) : (
                <>
                  <MoonIcon className="w-5 h-5 mr-2" />
                  다크 모드
                </>
              )}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
