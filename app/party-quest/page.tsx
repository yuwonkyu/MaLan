"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

const PartyQuestListPage = () => {
  const router = useRouter();

  const partyQuests = [
    {
      id: "wolmyo",
      name: "월묘 파티 퀘스트",
      level: "10+",
      players: "3~6인",
      time: "10분",
      location: "헤네시스 공원",
      npc: "NPC 토리",
      icon: "🌙",
      color: "purple",
      description: "달빛꽃 씨앗을 수집하고 월묘를 보호하는 파티 퀘스트",
      href: "/party-quest/wolmyo",
    },
    {
      id: "kerning",
      name: "커닝시티 파티 퀘스트",
      level: "21~30",
      players: "4인",
      time: "제한 없음",
      location: "커닝시티 중앙",
      npc: "NPC 라케리스",
      icon: "🏙️",
      color: "blue",
      description: "5단계 미션을 협력하여 클리어하는 던전형 파티 퀘스트",
      href: "/party-quest/kerning",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      { bg: string; border: string; text: string; hover: string }
    > = {
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-300 dark:border-purple-700",
        text: "text-purple-700 dark:text-purple-300",
        hover: "hover:border-purple-500 dark:hover:border-purple-500",
      },
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-300 dark:border-blue-700",
        text: "text-blue-700 dark:text-blue-300",
        hover: "hover:border-blue-500 dark:hover:border-blue-500",
      },
      green: {
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-300 dark:border-green-700",
        text: "text-green-700 dark:text-green-300",
        hover: "hover:border-green-500 dark:hover:border-green-500",
      },
      orange: {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-300 dark:border-orange-700",
        text: "text-orange-700 dark:text-orange-300",
        hover: "hover:border-orange-500 dark:hover:border-orange-500",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="mb-12">
          <button
            onClick={() => router.back()}
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block cursor-pointer"
          >
            ← 이전으로 가기
          </button>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            파티 퀘스트 가이드
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            메이플랜드의 모든 파티 퀘스트 정보를 한눈에 확인하세요
          </p>
        </div>

        {/* 파티 퀘스트 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partyQuests.map((pq) => {
            const colors = getColorClasses(pq.color);
            return (
              <Link
                key={pq.id}
                href={pq.href}
                className={`card-bg p-6 rounded-lg border-2 transition-all ${colors.border} ${colors.hover} hover:shadow-lg cursor-pointer`}
              >
                <div className="mb-4">
                  <div className="text-5xl mb-3">{pq.icon}</div>
                  <h2 className="text-2xl font-bold mb-2">{pq.name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {pq.description}
                  </p>
                </div>

                {/* 기본 정보 */}
                <div className="space-y-3 mb-4">
                  <div className={`p-3 rounded ${colors.bg}`}>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">
                          레벨
                        </p>
                        <p className={`font-semibold ${colors.text}`}>
                          {pq.level}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">
                          인원
                        </p>
                        <p className={`font-semibold ${colors.text}`}>
                          {pq.players}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">
                          제한시간
                        </p>
                        <p className={`font-semibold ${colors.text}`}>
                          {pq.time}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">
                          입장 위치
                        </p>
                        <p className={`font-semibold ${colors.text} text-xs`}>
                          {pq.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* NPC 정보 */}
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <span className="mr-2">📍</span>
                    <span>{pq.npc}</span>
                  </div>
                </div>

                {/* 더보기 버튼 */}
                <div className={`text-center pt-3 border-t ${colors.border}`}>
                  <span className={`font-semibold ${colors.text}`}>
                    자세히 보기 →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* 준비 중 안내 */}
        <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">
            💡 더 많은 파티 퀘스트 가이드가 곧 추가될 예정입니다!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartyQuestListPage;
