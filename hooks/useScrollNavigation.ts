import { useEffect, useState } from "react";

/**
 * 스크롤 기반 네비게이션을 위한 커스텀 훅
 *
 * @description
 * 이 훅은 두 가지 주요 기능을 제공합니다:
 * 1. IntersectionObserver를 사용하여 현재 뷰포트에 보이는 섹션을 자동으로 추적
 * 2. requestAnimationFrame을 사용한 부드럽고 빠른(300ms) 스크롤 애니메이션
 *
 * @features
 * - 자동 활성 섹션 감지: 화면 중앙 영역(상단 20%, 하단 70% 제외)에 섹션이 들어오면 활성화
 * - 고속 스크롤: 브라우저 기본값보다 2배 빠른 300ms 애니메이션
 * - easeInOutQuad 이징: 시작과 끝은 천천히, 중간은 빠르게 이동하는 자연스러운 효과
 * - 60fps 부드러운 애니메이션: requestAnimationFrame으로 최적화
 *
 * @param sections - 네비게이션할 섹션들의 배열 (id와 label 포함)
 * @returns { activeSection, scrollToSection } - 현재 활성 섹션과 스크롤 함수
 *
 * @example
 * ```tsx
 * const sections = [
 *   { id: "intro", label: "소개" },
 *   { id: "features", label: "특징" }
 * ];
 *
 * const { activeSection, scrollToSection } = useScrollNavigation(sections);
 *
 * <button onClick={() => scrollToSection("intro")}>
 *   소개로 이동
 * </button>
 * ```
 */

interface Section {
  id: string;
  label: string;
}

export function useScrollNavigation(sections: Section[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      const startY = window.scrollY;
      const distance = y - startY;
      const duration = 300;
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        const ease =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, startY + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return { activeSection, scrollToSection };
}
