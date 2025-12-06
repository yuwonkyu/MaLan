// 직업 카테고리
export type JobCategory = "warrior" | "magician" | "archer" | "thief";

// 직업 카테고리 정보
export interface JobCategoryInfo {
  id: JobCategory;
  name: string;
  weapons: string[];
  jobs: {
    second: string[]; // 2차 직업명
    third: string[]; // 3차 직업명
    fourth: string[]; // 4차 직업명
  };
}

// 직업 정보
export interface Job {
  id: string;
  name: string;
  category: JobCategory;
  description: string;
  icon?: string;
}

// 직업 차수
export interface JobAdvancement {
  level: 1 | 2 | 3 | 4;
  name: string;
  description: string;
  requiredLevel: number;
}

// 스탯 정보
export interface Stats {
  str: number; // 힘
  dex: number; // 민첩
  int: number; // 지력
  luk: number; // 행운
  hp: number;
  mp: number;
}

// 스킬 정보
export interface Skill {
  id: string;
  name: string;
  description: string;
  maxLevel: number;
  requiredLevel: number;
  type: "active" | "passive";
  icon?: string;
}

// 아이템 정보
export interface Item {
  id: string;
  name: string;
  type: "weapon" | "armor" | "accessory";
  description: string;
  requiredLevel: number;
  stats?: Partial<Stats>;
  icon?: string;
}

// 사냥터 정보
export interface HuntingGround {
  id: string;
  name: string;
  location: string;
  recommendedLevel: {
    min: number;
    max: number;
  };
  monsters: string[];
  exp: number;
}

// 육성 가이드
export interface Guide {
  jobId: string;
  advancement: number;
  statBuild: {
    priority: string[];
    description: string;
  };
  skillBuild: {
    skills: Array<{
      skillId: string;
      priority: number;
      notes?: string;
    }>;
  };
  equipment: {
    recommended: string[];
    optimal: string[];
  };
  huntingGrounds: string[];
}
