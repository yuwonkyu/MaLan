export const footerLinks = [
  {
    name: "MapleDB",
    url: "https://mapledb.kr/index.php",
    description: "메이플랜드 데이터베이스",
  },
  {
    name: "MapleLand.gg",
    url: "https://mapleland.gg/",
    description: "메이플랜드 거래",
  },
  {
    name: "메랜인",
    url: "https://maplelandin.com/",
    description: "파티모집/사냥팁",
  },
  {
    name: "메이플팁",
    url: "https://matip.kr/",
    description: "계산기/타이머",
  },
  {
    name: "고확 다시보기",
    url: "https://rhghkr.net/",
    description: "고확 확인",
  },
  {
    name: "메랜 퀘스트 정리",
    url: "https://docs.google.com/spreadsheets/d/1jR8N2LFZaToXqb48Om0l9xc0dBzAfjksBlMvUACQ6m4/edit?usp=sharing",
    description: "구글 스프레드시트",
  },
  {
    name: "로켓아이템떙스",
    url: "https://itemthankyou.com/main/main.asp",
    description: "아이템 거래",
  },
  {
    name: "오픈카카오톡",
    url: "https://open.kakao.com/o/goksMcTh",
    description: "메랜 망둥이 빅뱅파사 띱손님",
  },
  {
    name: "오픈카카오톡2",
    url: "https://open.kakao.com/o/gyDs7sSh",
    description: "메랜 물망둥 구인구직",
  },
];

interface FooterLinkItemProps {
  name: string;
  url: string;
  description?: string;
}

export const FooterLinkItem = ({
  name,
  url,
  description,
}: FooterLinkItemProps) => {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 text-sm transition-colors"
      >
        {name}
        {description && <span className="text-xs"> ({description})</span>}
      </a>
    </li>
  );
};
