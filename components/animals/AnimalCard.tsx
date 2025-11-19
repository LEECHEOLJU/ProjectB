"use client";

import type { Animal } from '@/types';
import { useAnimalStore } from '@/store/animalStore';
import { useGameStore } from '@/store/gameStore';
import { ANIMAL_SPECIES } from '@/data/animals';
import { getStatBarColor } from '@/lib/utils/format';
import { Utensils, Heart, Activity, Trash2, Pill } from 'lucide-react';

interface AnimalCardProps {
  animal: Animal;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
  const { feedAnimal, playWithAnimal, treatAnimal, removeAnimal } = useAnimalStore();
  const { spendMoney, addExperience } = useGameStore();

  const species = ANIMAL_SPECIES.find((s) => s.id === animal.speciesId);
  if (!species) return null;

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
    </div>
  );
}
