"use client";

import type { Animal } from '@/types';
import { useAnimalStore } from '@/store/animalStore';
import { useGameStore } from '@/store/gameStore';
import { useShowStore, ANIMAL_SHOWS } from '@/store/showStore';
import { ANIMAL_SPECIES } from '@/data/animals';
import { getStatBarColor } from '@/lib/utils/format';
import { Utensils, Heart, Activity, Trash2, Pill, Sparkles } from 'lucide-react';

interface AnimalCardProps {
  animal: Animal;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
  const { feedAnimal, playWithAnimal, treatAnimal, removeAnimal } = useAnimalStore();
  const { spendMoney, addExperience } = useGameStore();
  const { startShow, isShowActive, isOnCooldown, getRemainingCooldown } = useShowStore();

  const species = ANIMAL_SPECIES.find((s) => s.id === animal.speciesId);
  if (!species) return null;

  const animalShow = ANIMAL_SHOWS[species.id];
  const showActive = animalShow && isShowActive(species.id);
  const showOnCooldown = animalShow && isOnCooldown(species.id);
  const cooldownMinutes = animalShow ? getRemainingCooldown(species.id) : 0;

  const feedCost = 50;
  const treatCost = 200;

  const handleFeed = () => {
    if (spendMoney(feedCost)) {
      feedAnimal(animal.id);
      addExperience(1);
    }
  };

  const handlePlay = () => {
    playWithAnimal(animal.id);
    addExperience(1);
  };

  const handleTreat = () => {
    if (spendMoney(treatCost)) {
      treatAnimal(animal.id);
      addExperience(5);
    }
  };

  const handleSell = () => {
    if (confirm(`${animal.name}을(를) 판매하시겠습니까?`)) {
      removeAnimal(animal.id);
      // 판매 가격은 구매 가격의 50%
      useGameStore.getState().addMoney(Math.floor(species.price * 0.5));
    }
  };

  const handleStartShow = () => {
    if (animalShow && animal.health > 50 && animal.happiness > 50) {
      const success = startShow(species.id, animalShow);
      if (!success) {
        alert('쇼를 시작할 수 없습니다. 쿨다운 중이거나 이미 진행 중입니다.');
      }
    } else {
      alert('쇼를 하려면 동물의 건강과 행복도가 50% 이상이어야 합니다!');
    }
  };

  const getStageEmoji = (stage: string) => {
    switch (stage) {
      case 'baby': return '🍼';
      case 'teen': return '🧒';
      case 'adult': return '👤';
      default: return '';
    }
  };

  return (
    <div className="game-card p-4 hover:shadow-xl transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-4xl">{species.emoji}</span>
          <div>
            <h3 className="font-bold text-gray-800">{animal.name}</h3>
            <p className="text-xs text-gray-500">
              {species.name} · {animal.age}일 {getStageEmoji(animal.stage)}
            </p>
          </div>
        </div>
        <button
          onClick={handleSell}
          className="p-1 text-gray-400 hover:text-red-600 transition-colors"
          title="판매"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Status Bars */}
      <div className="space-y-2 mb-4">
        {/* 배고픔 */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="flex items-center gap-1 text-gray-600">
              <Utensils className="w-3 h-3" />
              배고픔
            </span>
            <span className="font-semibold">{animal.hunger}%</span>
          </div>
          <div className="stat-bar">
            <div
              className={`stat-bar-fill ${getStatBarColor(animal.hunger)}`}
              style={{ width: `${animal.hunger}%` }}
            />
          </div>
        </div>

        {/* 행복도 */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="flex items-center gap-1 text-gray-600">
              <Heart className="w-3 h-3" />
              행복도
            </span>
            <span className="font-semibold">{animal.happiness}%</span>
          </div>
          <div className="stat-bar">
            <div
              className={`stat-bar-fill ${getStatBarColor(animal.happiness)}`}
              style={{ width: `${animal.happiness}%` }}
            />
          </div>
        </div>

        {/* 건강 */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="flex items-center gap-1 text-gray-600">
              <Activity className="w-3 h-3" />
              건강
            </span>
            <span className="font-semibold">{animal.health}%</span>
          </div>
          <div className="stat-bar">
            <div
              className={`stat-bar-fill ${getStatBarColor(animal.health)}`}
              style={{ width: `${animal.health}%` }}
            />
          </div>
        </div>
      </div>

      {/* Alerts */}
      {animal.isSick && (
        <div className="bg-red-50 text-red-700 text-xs p-2 rounded mb-3">
          🤒 이 동물은 아픕니다! 치료가 필요합니다.
        </div>
      )}
      {animal.hunger < 30 && (
        <div className="bg-yellow-50 text-yellow-700 text-xs p-2 rounded mb-3">
          🍽️ 배가 고픕니다!
        </div>
      )}

      {/* Actions */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={handleFeed}
          disabled={animal.hunger >= 100}
          className="game-button-primary text-xs py-2"
        >
          <Utensils className="w-3 h-3 inline mr-1" />
          먹이 ($50)
        </button>
        <button
          onClick={handlePlay}
          disabled={animal.happiness >= 100}
          className="game-button-primary text-xs py-2"
        >
          <Heart className="w-3 h-3 inline mr-1" />
          놀아주기
        </button>
        {animal.isSick && (
          <button
            onClick={handleTreat}
            className="game-button-primary text-xs py-2 col-span-2 bg-red-500 hover:bg-red-600"
          >
            <Pill className="w-3 h-3 inline mr-1" />
            치료 ($200)
          </button>
        )}
      </div>

      {/* Show Button */}
      {animalShow && (
        <div className="mt-2">
          {showActive ? (
            <div className="bg-purple-100 text-purple-700 text-xs p-2 rounded text-center font-semibold animate-pulse">
              🎭 {animalShow.name} 공연 중!
            </div>
          ) : showOnCooldown ? (
            <button
              disabled
              className="w-full bg-gray-300 text-gray-500 text-xs py-2 rounded cursor-not-allowed"
            >
              <Sparkles className="w-3 h-3 inline mr-1" />
              쿨다운 {cooldownMinutes}분
            </button>
          ) : (
            <button
              onClick={handleStartShow}
              disabled={animal.health < 50 || animal.happiness < 50}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-400 text-white text-xs py-2 rounded font-semibold transition-all"
            >
              <Sparkles className="w-3 h-3 inline mr-1" />
              {animalShow.name} 시작
            </button>
          )}
        </div>
      )}
    </div>
  );
}
