import { create } from 'zustand';
import type { Animal } from '@/types';
import { generateId, getRandomGender, getAnimalStage } from '@/lib/utils/game';
import { ANIMAL_SPECIES } from '@/data/animals';

interface AnimalStore {
  animals: Animal[];

  // Actions
  addAnimal: (speciesId: string, name?: string) => Animal;
  removeAnimal: (animalId: string) => void;
  updateAnimal: (animalId: string, updates: Partial<Animal>) => void;
  feedAnimal: (animalId: string) => void;
  playWithAnimal: (animalId: string) => void;
  treatAnimal: (animalId: string) => void;
  ageAnimals: () => void;
  updateAnimalStats: () => void;
  breedAnimals: (parent1Id: string, parent2Id: string) => Animal | null;
}

export const useAnimalStore = create<AnimalStore>((set, get) => ({
  animals: [],

  addAnimal: (speciesId, name) => {
    const species = ANIMAL_SPECIES.find((s) => s.id === speciesId);
    if (!species) throw new Error('Unknown species');

    const animal: Animal = {
      id: generateId(),
      zooId: 'local', // 나중에 Supabase 연동 시 업데이트
      speciesId,
      name: name || `${species.name} #${get().animals.length + 1}`,
      age: 0,
      stage: 'baby',
      hunger: 100,
      happiness: 100,
      health: 100,
      gender: getRandomGender(),
      isSick: false,
      canBreed: false,
      acquiredAt: Date.now(),
    };

    set((state) => ({
      animals: [...state.animals, animal],
    }));

    return animal;
  },

  removeAnimal: (animalId) => set((state) => ({
    animals: state.animals.filter((a) => a.id !== animalId),
  })),

  updateAnimal: (animalId, updates) => set((state) => ({
    animals: state.animals.map((a) =>
      a.id === animalId ? { ...a, ...updates } : a
    ),
  })),

  feedAnimal: (animalId) => {
    const { updateAnimal } = get();
    updateAnimal(animalId, {
      hunger: 100,
      lastFedAt: Date.now(),
    });
  },

  playWithAnimal: (animalId) => {
    const { updateAnimal } = get();
    updateAnimal(animalId, {
      happiness: Math.min(100, get().animals.find((a) => a.id === animalId)!.happiness + 20),
      lastPlayedAt: Date.now(),
    });
  },

  treatAnimal: (animalId) => {
    const { updateAnimal } = get();
    updateAnimal(animalId, {
      health: 100,
      isSick: false,
      sicknessType: undefined,
      lastTreatedAt: Date.now(),
    });
  },

  ageAnimals: () => set((state) => ({
    animals: state.animals.map((animal) => {
      const species = ANIMAL_SPECIES.find((s) => s.id === animal.speciesId);
      if (!species) return animal;

      const newAge = animal.age + 1;
      const newStage = getAnimalStage(newAge, species.lifespan);
      const canBreed = newStage === 'adult' && animal.health > 50 && animal.happiness > 50;

      // 수명 체크
      if (newAge > species.lifespan) {
        return { ...animal, health: 0 }; // 사망 처리는 별도로
      }

      return {
        ...animal,
        age: newAge,
        stage: newStage,
        canBreed,
      };
    }),
  })),

  updateAnimalStats: () => set((state) => ({
    animals: state.animals.map((animal) => {
      let newHunger = Math.max(0, animal.hunger - 2);
      let newHappiness = Math.max(0, animal.happiness - 1);
      let newHealth = animal.health;
      let isSick = animal.isSick;

      // 배고픔이 0이면 건강 감소
      if (newHunger === 0) {
        newHealth = Math.max(0, newHealth - 5);
      }

      // 행복도가 낮으면 건강 감소
      if (newHappiness < 30) {
        newHealth = Math.max(0, newHealth - 2);
      }

      // 질병 발생 (낮은 확률)
      if (!isSick && newHealth < 50 && Math.random() < 0.01) {
        isSick = true;
      }

      // 질병 시 건강 감소
      if (isSick) {
        newHealth = Math.max(0, newHealth - 3);
      }

      return {
        ...animal,
        hunger: newHunger,
        happiness: newHappiness,
        health: newHealth,
        isSick,
      };
    }),
  })),

  breedAnimals: (parent1Id, parent2Id) => {
    const { animals, addAnimal } = get();
    const parent1 = animals.find((a) => a.id === parent1Id);
    const parent2 = animals.find((a) => a.id === parent2Id);

    if (
      !parent1 ||
      !parent2 ||
      parent1.speciesId !== parent2.speciesId ||
      parent1.gender === parent2.gender ||
      !parent1.canBreed ||
      !parent2.canBreed
    ) {
      return null;
    }

    const species = ANIMAL_SPECIES.find((s) => s.id === parent1.speciesId);
    if (!species) return null;

    const baby = addAnimal(parent1.speciesId, `Baby ${species.name}`);
    return baby;
  },
}));
