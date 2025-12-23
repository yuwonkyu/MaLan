import Link from "next/link";
import FirstJobAdvancement from "@/components/warrior/1st/FirstJobAdvancement";
import StatDistribution from "@/components/warrior/1st/StatDistribution";
import SkillTree from "@/components/warrior/1st/SkillTree";
import HuntingGrounds from "@/components/warrior/1st/HuntingGrounds";
import Equipment from "@/components/warrior/1st/Equipment";
import SecondJobPreparation from "@/components/warrior/1st/SecondJobPreparation";

const WarriorFirstJobPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 헤더 */}
      <div className="mb-8">
        <Link
          href="/warrior"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
        >
          ← 전사 직업군으로 돌아가기
        </Link>
        <h1 className="page-title mb-4">
          전사 (Warrior) - 1차 전직 완벽 가이드
        </h1>
        <p className="description-text text-lg">
          스텟 분배부터 스킬 트리, 사냥터, 장비까지 전사 육성의 모든 것
        </p>
      </div>

      <FirstJobAdvancement />
      <StatDistribution />
      <SkillTree />
      <HuntingGrounds />
      <Equipment />
      <SecondJobPreparation />
    </div>
  );
};

export default WarriorFirstJobPage;
