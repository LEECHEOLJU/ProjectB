// 그리드 배치 시스템 타입
export interface GridPosition {
  x: number;
  y: number;
}

export interface PlacedItem {
  id: string;
  type: 'animal' | 'facility';
  itemId: string; // animal ID or facility ID
  position: GridPosition;
  size: { width: number; height: number };
  rotation: 0 | 90 | 180 | 270;
}

export interface VisitorEntity {
  id: string;
  position: GridPosition;
  targetPosition: GridPosition | null;
  state: 'walking' | 'watching' | 'eating' | 'resting' | 'leaving';
  satisfaction: number;
  moneySpent: number;
  timeInZoo: number; // 분
  visitedAnimals: string[];
  emoji: string;
}

export interface AnimalShow {
  id: string;
  animalId: string;
  name: string;
  duration: number; // 분
  cooldown: number; // 분
  attractionRadius: number; // 격자 단위
  effects: {
    visitorMultiplier: number;
    satisfactionBonus: number;
    revenueMultiplier: number;
  };
}

// 레벨 보상 타입
export interface LevelReward {
  level: number;
  money?: number;
  experience?: number;
  unlockAnimals?: string[];
  unlockFacilities?: string[];
  specialReward?: string;
  description: string;
}
