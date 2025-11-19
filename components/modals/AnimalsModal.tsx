"use client";

import Modal from './Modal';
import { useAnimalStore } from '@/store/animalStore';
import AnimalCard from '../animals/AnimalCard';
import { ANIMAL_SPECIES } from '@/data/animals';

interface AnimalsModalProps {
  onClose: () => void;
}

export default function AnimalsModal({ onClose }: AnimalsModalProps) {
  const { animals } = useAnimalStore();

  const animalsByRarity = {
    legendary: animals.filter((a) => {
      const species = ANIMAL_SPECIES.find((s) => s.id === a.speciesId);
      return species?.rarity === 'legendary';
    }),
    epic: animals.filter((a) => {
      const species = ANIMAL_SPECIES.find((s) => s.id === a.speciesId);
      return species?.rarity === 'epic';
    }),
    rare: animals.filter((a) => {
      const species = ANIMAL_SPECIES.find((s) => s.id === a.speciesId);
      return species?.rarity === 'rare';
    }),
    common: animals.filter((a) => {
      const species = ANIMAL_SPECIES.find((s) => s.id === a.speciesId);
      return species?.rarity === 'common';
    }),
  };

  const stats = {
    total: animals.length,
    healthy: animals.filter((a) => a.health > 70).length,
    sick: animals.filter((a) => a.isSick).length,
    hungry: animals.filter((a) => a.hunger < 30).length,
    happy: animals.filter((a) => a.happiness > 70).length,
  };

  return (
    <Modal title="🦁 내 동물들" onClose={onClose} size="xl">
      {/* Stats Summary */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        <div className="game-card p-4 text-center">
          <div className="text-2xl font-bold text-gray-800">{stats.total}</div>
          <div className="text-xs text-gray-600">전체</div>
        </div>
        <div className="game-card p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{stats.healthy}</div>
          <div className="text-xs text-gray-600">건강함</div>
        </div>
        <div className="game-card p-4 text-center">
          <div className="text-2xl font-bold text-red-600">{stats.sick}</div>
          <div className="text-xs text-gray-600">아픔</div>
        </div>
        <div className="game-card p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600">{stats.hungry}</div>
          <div className="text-xs text-gray-600">배고픔</div>
        </div>
        <div className="game-card p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.happy}</div>
          <div className="text-xs text-gray-600">행복함</div>
        </div>
      </div>

      {animals.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🐾</div>
          <p className="text-gray-600">아직 동물이 없습니다.</p>
          <p className="text-sm text-gray-500">상점에서 첫 번째 동물을 구매하세요!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Legendary */}
          {animalsByRarity.legendary.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-yellow-600 mb-3 flex items-center gap-2">
                <span>⭐</span>
                <span>전설 ({animalsByRarity.legendary.length})</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {animalsByRarity.legendary.map((animal) => (
                  <AnimalCard key={animal.id} animal={animal} />
                ))}
              </div>
            </div>
          )}

          {/* Epic */}
          {animalsByRarity.epic.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-purple-600 mb-3 flex items-center gap-2">
                <span>💜</span>
                <span>에픽 ({animalsByRarity.epic.length})</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {animalsByRarity.epic.map((animal) => (
                  <AnimalCard key={animal.id} animal={animal} />
                ))}
              </div>
            </div>
          )}

          {/* Rare */}
          {animalsByRarity.rare.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-3 flex items-center gap-2">
                <span>💙</span>
                <span>희귀 ({animalsByRarity.rare.length})</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {animalsByRarity.rare.map((animal) => (
                  <AnimalCard key={animal.id} animal={animal} />
                ))}
              </div>
            </div>
          )}

          {/* Common */}
          {animalsByRarity.common.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-600 mb-3 flex items-center gap-2">
                <span>🤍</span>
                <span>일반 ({animalsByRarity.common.length})</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {animalsByRarity.common.map((animal) => (
                  <AnimalCard key={animal.id} animal={animal} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}
