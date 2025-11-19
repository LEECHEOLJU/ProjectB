"use client";

import { useAnimalStore } from '@/store/animalStore';
import { useFacilityStore } from '@/store/facilityStore';
import AnimalCard from '../animals/AnimalCard';

export default function GameCanvas() {
  const { animals } = useAnimalStore();
  const { facilities } = useFacilityStore();

  return (
    <div className="min-h-[calc(100vh-140px)] p-6">
      <div className="max-w-7xl mx-auto">
        {/* 환영 메시지 */}
        {animals.length === 0 && facilities.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🎪</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              동물원에 오신 것을 환영합니다!
            </h2>
            <p className="text-gray-600 mb-8">
              하단 메뉴에서 &apos;상점&apos;을 클릭하여 첫 번째 동물을 구매하세요.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🦁</span>
                <span>동물 구매</span>
              </div>
              <span>→</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏗️</span>
                <span>시설 건설</span>
              </div>
              <span>→</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <span>방문객 유치</span>
              </div>
              <span>→</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span>수익 창출</span>
              </div>
            </div>
          </div>
        )}

        {/* 동물 목록 */}
        {animals.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>🦁</span>
              <span>내 동물들</span>
              <span className="text-sm text-gray-500">({animals.length})</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {animals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
          </div>
        )}

        {/* 시설 목록 (간단하게) */}
        {facilities.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>🏗️</span>
              <span>시설</span>
              <span className="text-sm text-gray-500">({facilities.length})</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {facilities.map((facility) => (
                <div
                  key={facility.id}
                  className="game-card p-4 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-2">🏢</div>
                  <div className="text-sm font-semibold text-gray-700">
                    {facility.facilityId}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    상태: {facility.condition}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
