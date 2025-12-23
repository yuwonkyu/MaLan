"use client";

import { useRouter } from "next/navigation";

export default function WolmyoPartyQuestPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        {/* 헤더 */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block cursor-pointer"
          >
            ← 이전으로 가기
          </button>
          <h1 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            월묘 파티 퀘스트
          </h1>
          <p className="description-text text-lg">
            헤네시스 공원의 NPC 토리를 통해 입장할 수 있는 월묘 파티
            퀘스트입니다.
          </p>
        </div>

        {/* 입장 조건 */}
        <div className="card-bg p-6 mb-8">
          <h2 className="section-title mb-4">입장 조건</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-300 dark:border-blue-700">
              <p className="font-semibold text-blue-700 dark:text-blue-300 mb-1">
                레벨 제한
              </p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                10+
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-300 dark:border-green-700">
              <p className="font-semibold text-green-700 dark:text-green-300 mb-1">
                인원 수
              </p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                3~6인
              </p>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded border border-orange-300 dark:border-orange-700">
              <p className="font-semibold text-orange-700 dark:text-orange-300 mb-1">
                제한 시간
              </p>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                10분
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded">
            <p className="description-text">
              <strong>입장 위치:</strong> 헤네시스 공원 - NPC 토리
            </p>
          </div>
        </div>

        {/* 퀘스트 진행 */}
        <div className="card-bg p-6 mb-8">
          <h2 className="section-title mb-6">퀘스트 진행</h2>

          {/* 1단계: 달빛꽃 씨앗 수집 */}
          <div className="mb-8">
            <h3 className="tier-label text-purple-700 dark:text-purple-300 mb-4">
              1단계: 달빛꽃 씨앗 수집
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
                <p className="description-text mb-3">
                  입장 후 맵에 떨어진 달빛꽃 씨앗을 수집합니다. 씨앗은 총 6가지
                  색상이 있으며, 각 색상별로 1개씩 수집해야 합니다.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded text-center">
                    <span className="font-semibold text-blue-700 dark:text-blue-300">
                      파란색
                    </span>
                  </div>
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded text-center">
                    <span className="font-semibold text-green-700 dark:text-green-300">
                      연두색
                    </span>
                  </div>
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded text-center">
                    <span className="font-semibold text-purple-700 dark:text-purple-300">
                      보라색
                    </span>
                  </div>
                  <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded text-center">
                    <span className="font-semibold text-pink-700 dark:text-pink-300">
                      자홍색
                    </span>
                  </div>
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded text-center">
                    <span className="font-semibold text-yellow-700 dark:text-yellow-300">
                      황갈색
                    </span>
                  </div>
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded text-center">
                    <span className="font-semibold text-amber-700 dark:text-amber-300">
                      노란색
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-300 dark:border-purple-700">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                  💡 씨앗 배치 순서
                </p>
                <p className="description-text">
                  수집한 씨앗은 시계 방향으로 11시 방향부터 배치합니다:
                </p>
                <p className="description-text mt-2 font-mono text-sm">
                  11시(파란색) → 1시(연두색) → 3시(보라색) → 5시(자홍색) →
                  7시(황갈색) → 9시(노란색)
                </p>
              </div>
            </div>
          </div>

          {/* 2단계: 월묘 보호 */}
          <div className="mb-8">
            <h3 className="tier-label text-blue-700 dark:text-blue-300 mb-4">
              2단계: 월묘 보호하기
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
                <p className="description-text mb-3">
                  씨앗을 모두 배치하면 월묘가 등장하여 떡을 만들기 시작합니다.
                  떡을 만드는 동안 날아오는 몬스터들로부터 월묘를 보호해야
                  합니다.
                </p>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-300 dark:border-red-700 mt-3">
                  <p className="font-semibold text-red-700 dark:text-red-300">
                    ⚠️ 주의사항
                  </p>
                  <p className="description-text text-sm mt-1">
                    월묘가 공격당하면 떡 생산이 느려지므로, 몬스터를 빠르게
                    처치해야 합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3단계: 떡 수집 및 완료 */}
          <div className="mb-8">
            <h3 className="tier-label text-green-700 dark:text-green-300 mb-4">
              3단계: 떡 수집 및 완료
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
                <p className="description-text mb-3">
                  월묘가 만든 떡을 총 <strong>10개</strong> 수집합니다. 수집한
                  떡을 NPC 어흥에게 전달하면 퀘스트가 완료됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 보너스 맵 */}
        <div className="card-bg p-6 mb-8">
          <h2 className="section-title mb-4">보너스 맵</h2>
          <div className="space-y-4">
            <div className="p-4 bg-linear-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded border border-yellow-300 dark:border-yellow-700">
              <p className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                🎁 보너스 맵 입장 조건
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <div className="p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="text-sm font-semibold mb-1">레벨 조건</p>
                  <p className="description-text">20~25레벨 파티원 포함</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded">
                  <p className="text-sm font-semibold mb-1">인원 조건</p>
                  <p className="description-text">3인 이상</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <p className="font-semibold mb-2">보너스 맵 정보</p>
              <p className="description-text">
                조건을 만족하면 돼지 마을에서 <strong>5분간 추가 사냥</strong>이
                가능합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 보상 */}
        <div className="card-bg p-6">
          <h2 className="section-title mb-4">보상</h2>
          <div className="space-y-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-300 dark:border-green-700">
              <p className="description-text">• 경험치 및 아이템 보상</p>
              <p className="description-text">
                • 보너스 맵 진입 시 추가 경험치와 메소 획득 가능
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
