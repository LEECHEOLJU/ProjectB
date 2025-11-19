// ==================== 게임 상태 타입 ====================

export type GameSpeed = 0 | 1 | 2 | 3; // 0: 일시정지, 1: 1배속, 2: 2배속, 3: 3배속

export type Weather = 'sunny' | 'cloudy' | 'rainy' | 'snowy';

export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export interface GameState {
  zooId: string | null;
  zooName: string;
  money: number;
  level: number;
  experience: number;
  reputation: number;
  gameTime: number; // 게임 내 경과 시간 (분)
  gameSpeed: GameSpeed;
  weather: Weather;
  season: Season;
  isPaused: boolean;
}

// ==================== 동물 타입 ====================

export type AnimalRarity = 'common' | 'rare' | 'epic' | 'legendary';

export type AnimalType = 'mammal' | 'bird' | 'reptile' | 'aquatic';

export type AnimalStage = 'baby' | 'teen' | 'adult';

export type Gender = 'male' | 'female';

export interface AnimalSpecies {
  id: string;
  name: string;
  type: AnimalType;
  rarity: AnimalRarity;
  price: number;
  maintenanceCost: number; // 일일 유지비
  popularity: number; // 1-100
  unlockLevel: number;
  habitatType: string;
  emoji: string;
  description: string;
  specialAbility?: string;
  lifespan: number; // 게임 내 일수
}

export interface Animal {
  id: string;
  zooId: string;
  speciesId: string;
  name: string;
  age: number; // 게임 내 일수
  stage: AnimalStage;
  hunger: number; // 0-100
  happiness: number; // 0-100
  health: number; // 0-100
  gender: Gender;
  isSick: boolean;
  sicknessType?: string;
  canBreed: boolean;
  lastFedAt?: number;
  lastPlayedAt?: number;
  lastTreatedAt?: number;
  acquiredAt: number;
}

// ==================== 시설 타입 ====================

export type FacilityType = 'habitat' | 'visitor' | 'attraction' | 'staff';

export interface FacilityData {
  id: string;
  name: string;
  type: FacilityType;
  price: number;
  maintenanceCost: number; // 일일 유지비
  unlockLevel: number;
  emoji: string;
  description: string;
  effect: {
    visitorCapacity?: number;
    satisfactionBonus?: number;
    revenuePerDay?: number;
    reputationBonus?: number;
  };
}

export interface Facility {
  id: string;
  zooId: string;
  facilityType: FacilityType;
  facilityId: string;
  level: number;
  condition: number; // 0-100
  positionX?: number;
  positionY?: number;
  revenueGenerated: number;
  maintenanceCost: number;
  lastMaintainedAt?: number;
  builtAt: number;
}

// ==================== 방문객 타입 ====================

export interface Visitor {
  id: string;
  satisfaction: number; // 0-100
  moneySpent: number;
  visitDuration: number; // 분
  preferences: string[]; // 선호하는 동물 종류
}

export interface VisitorStats {
  currentVisitors: number;
  dailyVisitors: number;
  averageSatisfaction: number;
  totalRevenue: number;
}

// ==================== 거래 타입 ====================

export type TransactionType = 'income' | 'expense';

export type TransactionCategory =
  | 'ticket'
  | 'food'
  | 'shop'
  | 'animal'
  | 'facility'
  | 'maintenance'
  | 'salary'
  | 'attraction';

export interface Transaction {
  id: string;
  zooId: string;
  type: TransactionType;
  category: TransactionCategory;
  amount: number;
  description: string;
  createdAt: number;
}

// ==================== 업적 타입 ====================

export interface Achievement {
  id: string;
  name: string;
  description: string;
  emoji: string;
  requirement: {
    type: 'animals' | 'visitors' | 'money' | 'level' | 'facilities';
    target: number;
  };
  reward: {
    experience?: number;
    money?: number;
    unlocks?: string[];
  };
}

export interface UserAchievement {
  id: string;
  zooId: string;
  achievementId: string;
  progress: number;
  completed: boolean;
  unlockedAt?: number;
}

// ==================== 이벤트 타입 ====================

export interface GameEvent {
  id: string;
  name: string;
  description: string;
  type: 'discount' | 'special_animal' | 'visitor_surge' | 'epidemic';
  duration: number; // 게임 내 일수
  effect: any;
  startTime: number;
}

// ==================== UI 타입 ====================

export type ModalType =
  | 'shop'
  | 'animals'
  | 'facilities'
  | 'stats'
  | 'settings'
  | 'achievement'
  | 'placement'
  | null;

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  duration?: number;
  createdAt: number;
}

// ==================== 저장 데이터 타입 ====================

export interface SaveData {
  gameState: GameState;
  animals: Animal[];
  facilities: Facility[];
  transactions: Transaction[];
  achievements: UserAchievement[];
  lastSavedAt: number;
  version: string;
}
