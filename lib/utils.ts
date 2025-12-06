/**
 * 영어 키보드를 한글 초성으로 변환하는 매핑
 */
const ENG_TO_CHOSUNG: { [key: string]: string } = {
  r: "ㄱ",
  R: "ㄲ",
  s: "ㄴ",
  e: "ㄷ",
  E: "ㄸ",
  f: "ㄹ",
  a: "ㅁ",
  q: "ㅂ",
  Q: "ㅃ",
  t: "ㅅ",
  T: "ㅆ",
  d: "ㅇ",
  w: "ㅈ",
  W: "ㅉ",
  c: "ㅊ",
  z: "ㅋ",
  x: "ㅌ",
  v: "ㅍ",
  g: "ㅎ",
};

/**
 * 영어를 한글 초성으로 변환
 */
export function engToChosung(text: string): string {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    result += ENG_TO_CHOSUNG[char] || char;
  }
  return result;
}

/**
 * 한글 초성 추출 함수
 */
export function getChosung(text: string): string {
  const CHOSUNG = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];

  let result = "";
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i) - 0xac00;
    if (code > -1 && code < 11172) {
      result += CHOSUNG[Math.floor(code / 588)];
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}

/**
 * 검색어와 텍스트 매칭 (초성 검색 지원)
 */
export function matchSearch(text: string, query: string): boolean {
  if (!query) return true;

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();

  // 일반 검색
  if (lowerText.includes(lowerQuery)) return true;

  // 초성 검색 (한글 초성)
  const chosung = getChosung(text);
  if (chosung.includes(lowerQuery)) return true;

  // 영어 키보드 입력을 한글 초성으로 변환하여 검색
  const engConverted = engToChosung(query);
  if (chosung.includes(engConverted)) return true;

  return false;
}

/**
 * CSS 클래스 병합
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
