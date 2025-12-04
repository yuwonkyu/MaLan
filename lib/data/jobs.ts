import { Job, JobCategory } from "@/types";

// 직업 카테고리 데이터
export const jobCategories: {
  id: JobCategory;
  name: string;
  description: string;
}[] = [
  {
    id: "warrior",
    name: "전사",
    description: "높은 체력과 방어력을 가진 근접 전투의 달인",
  },
  {
    id: "magician",
    name: "마법사",
    description: "강력한 마법으로 적을 제압하는 지혜의 수호자",
  },
  {
    id: "thief",
    name: "도적",
    description: "빠른 속도와 회피로 적을 농락하는 암살자",
  },
  {
    id: "archer",
    name: "궁수",
    description: "정확한 원거리 공격으로 적을 저격하는 명궁",
  },
];

// 전사 직업군
export const warriorJobs: Job[] = [
  {
    id: "fighter",
    name: "파이터",
    category: "warrior",
    description: "검과 도끼를 다루는 전사",
  },
  {
    id: "page",
    name: "페이지",
    category: "warrior",
    description: "창과 둔기를 사용하는 기사",
  },
  {
    id: "spearman",
    name: "스피어맨",
    category: "warrior",
    description: "창을 주무기로 사용하는 창술사",
  },
];

// 마법사 직업군
export const magicianJobs: Job[] = [
  {
    id: "wizard-fire-poison",
    name: "불독 마법사",
    category: "magician",
    description: "화염과 독 속성 마법 사용",
  },
  {
    id: "wizard-ice-lightning",
    name: "썬콜 마법사",
    category: "magician",
    description: "얼음과 번개 속성 마법 사용",
  },
  {
    id: "cleric",
    name: "클레릭",
    category: "magician",
    description: "신성 마법과 회복 마법 사용",
  },
];

// 도적 직업군
export const thiefJobs: Job[] = [
  {
    id: "assassin",
    name: "어쌔신",
    category: "thief",
    description: "표창을 사용하는 암살자",
  },
  {
    id: "bandit",
    name: "시프",
    category: "thief",
    description: "단검을 사용하는 도적",
  },
];

// 궁수 직업군
export const archerJobs: Job[] = [
  {
    id: "hunter",
    name: "헌터",
    category: "archer",
    description: "활을 사용하는 사냥꾼",
  },
  {
    id: "crossbowman",
    name: "사수",
    category: "archer",
    description: "석궁을 사용하는 명사수",
  },
];

// 전체 직업 목록
export const allJobs: Job[] = [
  ...warriorJobs,
  ...magicianJobs,
  ...thiefJobs,
  ...archerJobs,
];
