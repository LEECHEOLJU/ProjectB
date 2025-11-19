"use client";

import { useEffect, useState } from 'react';
import { X, Gift, Star, TrendingUp } from 'lucide-react';
import { useLevelStore, LEVEL_REWARDS } from '@/store/levelStore';
import { useGameStore } from '@/store/gameStore';

export default function LevelUpModal() {
  const { currentLevel, claimReward } = useLevelStore();
  const { addMoney } = useGameStore();
  const [showModal, setShowModal] = useState(false);
  const [pendingReward, setPendingReward] = useState<any>(null);

  useEffect(() => {
    // 레벨업 감지
    const reward = LEVEL_REWARDS.find(r => r.level === currentLevel);
    if (reward && currentLevel > 1) {
      setPendingReward(reward);
      setShowModal(true);
    }
  }, [currentLevel]);

  const handleClaimReward = () => {
    if (!pendingReward) return;

    const reward = claimReward(pendingReward.level);
    if (reward) {
      // 보상 지급
      if (reward.money) {
        addMoney(reward.money);
      }

      // 특수 보상은 나중에 구현
      console.log('🎁 보상 획득:', reward);
    }

    setShowModal(false);
    setPendingReward(null);
  };

  if (!showModal || !pendingReward) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl shadow-2xl w-full max-w-md border-4 border-yellow-400 animate-bounce-slow">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-t-lg text-white text-center relative">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex justify-center mb-3">
            <div className="bg-white/20 rounded-full p-4">
              <Star className="w-16 h-16 text-yellow-200 fill-yellow-200" />
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-2">레벨업! 🎉</h2>
          <p className="text-xl font-semibold">
            레벨 {currentLevel - 1} → {currentLevel}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Gift className="w-5 h-5 text-orange-500" />
              보상
            </h3>

            <div className="space-y-2 text-sm">
              {pendingReward.money && (
                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                  <span className="font-semibold">💰 자금</span>
                  <span className="text-green-600 font-bold">
                    +${pendingReward.money.toLocaleString()}
                  </span>
                </div>
              )}

              {pendingReward.unlockAnimals && pendingReward.unlockAnimals.length > 0 && (
                <div className="p-2 bg-blue-50 rounded">
                  <span className="font-semibold">🦁 동물 해금</span>
                  <div className="mt-1 text-blue-600">
                    {pendingReward.unlockAnimals.map((animal: string) => (
                      <span key={animal} className="inline-block mr-2">• {animal}</span>
                    ))}
                  </div>
                </div>
              )}

              {pendingReward.unlockFacilities && pendingReward.unlockFacilities.length > 0 && (
                <div className="p-2 bg-purple-50 rounded">
                  <span className="font-semibold">🏗️ 시설 해금</span>
                  <div className="mt-1 text-purple-600">
                    {pendingReward.unlockFacilities.map((facility: string) => (
                      <span key={facility} className="inline-block mr-2">• {facility}</span>
                    ))}
                  </div>
                </div>
              )}

              {pendingReward.specialReward && (
                <div className="p-2 bg-yellow-50 rounded">
                  <span className="font-semibold">✨ 특수 보상</span>
                  <div className="mt-1 text-yellow-600 font-medium">
                    {pendingReward.specialReward}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-gray-600 text-sm">{pendingReward.description}</p>
            </div>
          </div>

          <button
            onClick={handleClaimReward}
            className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <TrendingUp className="w-5 h-5" />
            보상 받기
          </button>
        </div>
      </div>
    </div>
  );
}
