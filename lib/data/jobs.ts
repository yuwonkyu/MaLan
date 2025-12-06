import { Job, JobCategory, JobCategoryInfo } from "@/types";

// 직업 카테고리 데이터
export const jobCategories: JobCategoryInfo[] = [
  {
    id: "warrior",
    name: "전사",
    weapons: ["검", "둔기", "도끼", "창", "폴암"],
    jobs: {
      second: ["파이터", "페이지", "스피어맨"],
      third: ["크루세이더", "나이트", "용기사"],
      fourth: ["히어로", "팔라딘", "다크나이트"],
    },
  },
  {
    id: "magician",
    name: "마법사",
    weapons: ["스태프", "완드"],
    jobs: {
      second: ["위자드(불독)", "위자드(썬콜)", "클레릭"],
      third: ["메이지(불독)", "메이지(썬콜)", "프리스트"],
      fourth: ["아크메이지(불독)", "아크메이지(썬콜)", "비숍"],
    },
  },
  {
    id: "archer",
    name: "궁수",
    weapons: ["활", "석궁"],
    jobs: {
      second: ["헌터", "사수"],
      third: ["레인저", "저격수"],
      fourth: ["보우마스터", "신궁"],
    },
  },
  {
    id: "thief",
    name: "도적",
    weapons: ["아대", "단검"],
    jobs: {
      second: ["어쌔신", "시프"],
      third: ["허밋", "시프마스터"],
      fourth: ["나이트로드", "섀도어"],
    },
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
    description: "검과 둔기를 사용하는 기사",
  },
  {
    id: "spearman",
    name: "스피어맨",
    category: "warrior",
    description: "창과 폴암을 사용하는 창술사",
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

// 전체 직업 목록 (모든 차수 포함)
export const allJobs: Job[] = [
  ...warriorJobs,
  ...magicianJobs,
  ...thiefJobs,
  ...archerJobs,
];

// 모든 직업명 목록 (검색용 - 2차, 3차, 4차 포함)
export const allJobNames: Array<{
  name: string;
  category: JobCategory;
  tier: string;
}> = [];

// jobCategories에서 모든 직업명 추출
jobCategories.forEach((category) => {
  category.jobs.second.forEach((name) => {
    allJobNames.push({ name, category: category.id, tier: "2차" });
  });
  category.jobs.third.forEach((name) => {
    allJobNames.push({ name, category: category.id, tier: "3차" });
  });
  category.jobs.fourth.forEach((name) => {
    allJobNames.push({ name, category: category.id, tier: "4차" });
  });
});
