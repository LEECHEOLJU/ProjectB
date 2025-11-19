"use client";

import { useLevelStore, getRequiredExpForLevel } from '@/store/levelStore';
import { Star, Sparkles } from 'lucide-react';

export default function LevelDisplay() {
  const { currentLevel, currentExp, totalExp } = useLevelStore();

  const requiredExp = getRequiredExpForLevel(currentLevel + 1);
  const progress = currentLevel >= 100 ? 100 : (currentExp / requiredExp) * 100;

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3 shadow-lg text-white min-w-[280px]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 rounded-full p-1.5">
            <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
          </div>
          <span className="font-bold text-lg">레벨 {currentLevel}</span>
        </div>

        <div className="flex items-center gap-1 text-xs bg-white/20 rounded-full px-2 py-1">
          <Sparkles className="w-3 h-3" />
          <span>{totalExp.toLocaleString()} XP</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="h-3 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-300 to-orange-300 transition-all duration-500 ease-out"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>

        {currentLevel < 100 && (
          <div className="flex items-center justify-between mt-1 text-xs">
            <span>{currentExp} / {requiredExp} XP</span>
            <span>{Math.floor(progress)}%</span>
          </div>
        )}

        {currentLevel >= 100 && (
          <div className="mt-1 text-center text-xs font-bold">
            🏆 최고 레벨 달성! 🏆
          </div>
        )}
      </div>
    </div>
  );
}
