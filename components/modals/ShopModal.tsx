"use client";

import { useState } from 'react';
import Modal from './Modal';
import { useGameStore } from '@/store/gameStore';
import { useAnimalStore } from '@/store/animalStore';
import { useFacilityStore } from '@/store/facilityStore';
import { useNotificationStore } from '@/store/notificationStore';
import { ANIMAL_SPECIES, getAnimalsByLevel } from '@/data/animals';
import { FACILITIES, getFacilitiesByLevel } from '@/data/facilities';
import { formatMoney } from '@/lib/utils/format';
import { Lock, ShoppingCart } from 'lucide-react';

interface ShopModalProps {
  onClose: () => void;
}

export default function ShopModal({ onClose }: ShopModalProps) {
  const [activeTab, setActiveTab] = useState<'animals' | 'facilities'>('animals');
  const { money, level, spendMoney, addExperience } = useGameStore();
  const { addAnimal } = useAnimalStore();
  const { addFacility } = useFacilityStore();
  const { addNotification } = useNotificationStore();

  const availableAnimals = getAnimalsByLevel(level);
  const availableFacilities = getFacilitiesByLevel(level);

  const handleBuyAnimal = (speciesId: string, price: number) => {
    const species = ANIMAL_SPECIES.find((s) => s.id === speciesId);
    if (spendMoney(price)) {
      addAnimal(speciesId);
      addExperience(10);
      addNotification('success', `${species?.emoji} ${species?.name}을(를) 구매했습니다!`);
    } else {
      addNotification('error', '돈이 부족합니다!');
    }
  };

  const handleBuyFacility = (facilityId: string, price: number, type: string) => {
    const facility = FACILITIES.find((f) => f.id === facilityId);
    if (spendMoney(price)) {
      addFacility(facilityId, type);
      addExperience(15);
      addNotification('success', `${facility?.emoji} ${facility?.name}을(를) 건설했습니다!`);
    } else {
      addNotification('error', '돈이 부족합니다!');
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-600 bg-gray-100';
      case 'rare': return 'text-blue-600 bg-blue-100';
      case 'epic': return 'text-purple-600 bg-purple-100';
      case 'legendary': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <Modal title="🛒 상점" onClose={onClose} size="xl">
      {/* Tabs */}
      <div className="flex gap-2 mb-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('animals')}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === 'animals'
              ? 'text-green-600 border-b-2 border-green-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          🦁 동물
        </button>
        <button
          onClick={() => setActiveTab('facilities')}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === 'facilities'
              ? 'text-green-600 border-b-2 border-green-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          🏗️ 시설
        </button>
      </div>

      {/* Animals Tab */}
      {activeTab === 'animals' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableAnimals.map((species) => {
            const canAfford = money >= species.price;
            const isUnlocked = level >= species.unlockLevel;

            return (
              <div
                key={species.id}
                className={`game-card p-4 ${
                  !isUnlocked ? 'opacity-50' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="text-5xl">{species.emoji}</div>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded ${getRarityColor(
                      species.rarity
                    )}`}
                  >
                    {species.rarity.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {species.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {species.description}
                </p>

                <div className="space-y-1 text-sm mb-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">인기도:</span>
                    <span className="font-semibold">{species.popularity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">유지비/일:</span>
                    <span className="font-semibold">
                      {formatMoney(species.maintenanceCost)}
                    </span>
                  </div>
                  {species.specialAbility && (
                    <div className="text-xs text-purple-600 bg-purple-50 p-2 rounded mt-2">
                      ⭐ {species.specialAbility}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">
                    {formatMoney(species.price)}
                  </span>
                  <button
                    onClick={() => handleBuyAnimal(species.id, species.price)}
                    disabled={!canAfford || !isUnlocked}
                    className="game-button-primary text-sm disabled:opacity-50"
                  >
                    {!isUnlocked ? (
                      <>
                        <Lock className="w-4 h-4 inline mr-1" />
                        Lv.{species.unlockLevel}
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 inline mr-1" />
                        구매
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Facilities Tab */}
      {activeTab === 'facilities' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableFacilities.map((facility) => {
            const canAfford = money >= facility.price;
            const isUnlocked = level >= facility.unlockLevel;

            return (
              <div
                key={facility.id}
                className={`game-card p-4 ${
                  !isUnlocked ? 'opacity-50' : ''
                }`}
              >
                <div className="text-center mb-3">
                  <div className="text-6xl mb-2">{facility.emoji}</div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {facility.name}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-3 text-center">
                  {facility.description}
                </p>

                <div className="space-y-1 text-sm mb-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">유지비/일:</span>
                    <span className="font-semibold">
                      {formatMoney(facility.maintenanceCost)}
                    </span>
                  </div>
                  {facility.effect.revenuePerDay && (
                    <div className="flex justify-between text-green-600">
                      <span>수익/일:</span>
                      <span className="font-semibold">
                        {formatMoney(facility.effect.revenuePerDay)}
                      </span>
                    </div>
                  )}
                  {facility.effect.satisfactionBonus && (
                    <div className="flex justify-between text-blue-600">
                      <span>만족도:</span>
                      <span className="font-semibold">
                        +{facility.effect.satisfactionBonus}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">
                    {formatMoney(facility.price)}
                  </span>
                  <button
                    onClick={() =>
                      handleBuyFacility(facility.id, facility.price, facility.type)
                    }
                    disabled={!canAfford || !isUnlocked}
                    className="game-button-primary text-sm disabled:opacity-50"
                  >
                    {!isUnlocked ? (
                      <>
                        <Lock className="w-4 h-4 inline mr-1" />
                        Lv.{facility.unlockLevel}
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 inline mr-1" />
                        구매
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Modal>
  );
}
