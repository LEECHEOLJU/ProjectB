import { create } from 'zustand';

export interface LevelReward {
  level: number;
  money?: number;
  experience?: number;
  unlockAnimals?: string[]; // 동물 ID
  unlockFacilities?: string[]; // 시설 ID
  specialReward?: string;
  description: string;
}

// 레벨별 보상 정의 (1-100레벨)
export const LEVEL_REWARDS: LevelReward[] = [
  // 초반 레벨 (1-10)
  { level: 1, money: 0, description: '게임 시작!' },
  { level: 2, money: 1000, description: '첫 레벨업! $1,000 보상' },
  { level: 3, money: 2000, unlockAnimals: ['fox'], description: '여우 해금! $2,000' },
  { level: 4, money: 3000, description: '$3,000 보상' },
  { level: 5, money: 5000, unlockAnimals: ['monkey', 'peacock'], description: '원숭이, 공작 해금! $5,000' },
  { level: 6, money: 7000, unlockFacilities: ['train_ride'], description: '미니 기차 해금! $7,000' },
  { level: 7, money: 10000, unlockAnimals: ['snake', 'camel'], description: '뱀, 낙타 해금! $10,000' },
  { level: 8, money: 15000, unlockAnimals: ['lion'], description: '🦁 사자 해금! $15,000' },
  { level: 9, money: 20000, unlockAnimals: ['tiger'], description: '🐯 호랑이 해금! $20,000' },
  { level: 10, money: 30000, unlockAnimals: ['elephant', 'giraffe'], specialReward: 'double_exp_1h', description: '🐘 코끼리, 기린 해금! 1시간 경험치 2배! $30,000' },

  // 중반 레벨 (11-30)
  { level: 11, money: 35000, description: '$35,000 보상' },
  { level: 12, money: 40000, unlockFacilities: ['aquarium'], description: '대형 수족관 해금! $40,000' },
  { level: 13, money: 45000, unlockAnimals: ['penguin'], description: '🐧 펭귄 해금! $45,000' },
  { level: 14, money: 50000, unlockAnimals: ['polar_bear', 'koala'], description: '북극곰, 코알라 해금! $50,000' },
  { level: 15, money: 60000, unlockAnimals: ['panda'], specialReward: 'free_food_24h', description: '🐼 판다 해금! 24시간 무료 먹이! $60,000' },
  { level: 16, money: 70000, unlockAnimals: ['dolphin'], description: '🐬 돌고래 해금! $70,000' },
  { level: 17, money: 80000, unlockAnimals: ['whale_shark', 'pink_dolphin'], description: '고래상어, 분홍돌고래 해금! $80,000' },
  { level: 18, money: 90000, unlockAnimals: ['great_white_shark'], description: '🦈 백상아리 해금! $90,000' },
  { level: 19, money: 100000, unlockAnimals: ['orca', 'narwhal'], description: '범고래, 일각고래 해금! $100,000' },
  { level: 20, money: 150000, unlockAnimals: ['whale'], specialReward: 'visitor_boost_2h', description: '🐋 고래 해금! 2시간 방문객 3배! $150,000' },

  // 중상 레벨 (21-40)
  { level: 25, money: 200000, unlockAnimals: ['snow_leopard'], specialReward: 'reputation_boost', description: '설표범 해금! 평판 +20! $200,000' },
  { level: 30, money: 300000, unlockAnimals: ['california_condor', 'harpy_eagle'], specialReward: 'triple_exp_1h', description: '전설 새들 해금! 1시간 경험치 3배! $300,000' },
  { level: 35, money: 500000, unlockAnimals: ['platypus', 'okapi'], description: '희귀 동물 해금! $500,000' },
  { level: 40, money: 800000, unlockAnimals: ['crystal_butterfly', 'sakura_deer'], specialReward: 'auto_care_24h', description: '환상 동물 해금! 24시간 자동 관리! $800,000' },

  // 고급 레벨 (41-60)
  { level: 45, money: 1000000, unlockAnimals: ['white_tiger', 'golden_monkey'], description: '백호, 황금원숭이 해금! $1,000,000' },
  { level: 50, money: 2000000, unlockAnimals: ['griffin', 'pegasus'], specialReward: 'unlimited_money_1h', description: '🦅🦁 그리핀, 페가수스 해금! 1시간 무한 자금! $2,000,000' },
  { level: 55, money: 3000000, unlockAnimals: ['phoenix'], description: '🔥 불사조 해금! $3,000,000' },
  { level: 60, money: 5000000, unlockAnimals: ['dragon'], specialReward: 'mega_boost_2h', description: '🐉 드래곤 해금! 2시간 메가 부스트! $5,000,000' },

  // 전문가 레벨 (61-80)
  { level: 65, money: 7000000, description: '$7,000,000 보상' },
  { level: 70, money: 10000000, specialReward: 'vip_visitors', description: 'VIP 방문객 시스템 해금! $10,000,000' },
  { level: 75, money: 15000000, specialReward: 'weather_control', description: '날씨 조작 능력 해금! $15,000,000' },
  { level: 80, money: 25000000, specialReward: 'time_control', description: '시간 조작 능력 해금! $25,000,000' },

  // 마스터 레벨 (81-100)
  { level: 85, money: 35000000, description: '$35,000,000 보상' },
  { level: 90, money: 50000000, specialReward: 'legendary_aura', description: '전설 오라 - 모든 동물 만족도 항상 100%! $50,000,000' },
  { level: 95, money: 75000000, specialReward: 'golden_touch', description: '황금 손길 - 모든 수익 5배! $75,000,000' },
  { level: 100, money: 100000000, unlockAnimals: ['unicorn'], specialReward: 'ultimate_power', description: '🦄 유니콘 해금! 궁극의 힘 - 모든 능력치 MAX! $100,000,000' },
];

// 레벨별 필요 경험치 계산 (지수 증가)
export function getRequiredExpForLevel(level: number): number {
  if (level <= 1) return 0;
  // 레벨 1-20: 빠른 성장
  if (level <= 20) return Math.floor(100 * Math.pow(1.3, level - 1));
  // 레벨 21-50: 중간 성장
  if (level <= 50) return Math.floor(500 * Math.pow(1.25, level - 20));
  // 레벨 51-80: 느린 성장
  if (level <= 80) return Math.floor(5000 * Math.pow(1.2, level - 50));
  // 레벨 81-100: 매우 느린 성장
  return Math.floor(50000 * Math.pow(1.15, level - 80));
}

// 행동별 경험치 보상
export const EXP_REWARDS = {
  // 동물 관련
  buyAnimal: {
    common: 10,
    rare: 25,
    epic: 50,
    legendary: 150,
  },
  feedAnimal: 2,
  playWithAnimal: 3,
  treatAnimal: 5,
  breedAnimal: 30,

  // 시설 관련
  buildFacility: {
    habitat: 20,
    visitor: 15,
    attraction: 30,
    staff: 10,
  },

  // 방문객 관련
  visitorEnter: 1, // 방문객 1명당
  visitorSatisfied: 5, // 만족한 방문객

  // 특수
  achievementComplete: 100,
  showPerformed: 50,
  dailyBonus: 20,
};

interface LevelStore {
  currentLevel: number;
  currentExp: number;
  totalExp: number;
  claimedRewards: number[]; // 받은 보상 레벨들
  activeBuffs: {
    id: string;
    name: string;
    endTime: number;
  }[];

  addExp: (amount: number, source?: string) => void;
  claimReward: (level: number) => LevelReward | null;
  getNextLevelReward: () => LevelReward | null;
  canLevelUp: () => boolean;
  levelUp: () => boolean;
}

export const useLevelStore = create<LevelStore>((set, get) => ({
  currentLevel: 1,
  currentExp: 0,
  totalExp: 0,
  claimedRewards: [],
  activeBuffs: [],

  addExp: (amount, source) => {
    const { currentLevel, currentExp } = get();
    const newExp = currentExp + amount;
    const requiredExp = getRequiredExpForLevel(currentLevel + 1);

    console.log(`💫 경험치 +${amount} (${source || '기타'}) | ${newExp}/${requiredExp}`);

    set({
      currentExp: newExp,
      totalExp: get().totalExp + amount,
    });

    // 자동 레벨업 체크
    if (newExp >= requiredExp && currentLevel < 100) {
      get().levelUp();
    }
  },

  canLevelUp: () => {
    const { currentLevel, currentExp } = get();
    if (currentLevel >= 100) return false;
    const requiredExp = getRequiredExpForLevel(currentLevel + 1);
    return currentExp >= requiredExp;
  },

  levelUp: () => {
    const { currentLevel, currentExp, canLevelUp } = get();

    if (!canLevelUp()) return false;

    const requiredExp = getRequiredExpForLevel(currentLevel + 1);
    const newLevel = currentLevel + 1;
    const remainingExp = currentExp - requiredExp;

    set({
      currentLevel: newLevel,
      currentExp: remainingExp,
    });

    console.log(`🎉 레벨업! ${currentLevel} → ${newLevel}`);
    return true;
  },

  claimReward: (level) => {
    const { claimedRewards, currentLevel } = get();

    if (level > currentLevel) return null;
    if (claimedRewards.includes(level)) return null;

    const reward = LEVEL_REWARDS.find(r => r.level === level);
    if (!reward) return null;

    set({
      claimedRewards: [...claimedRewards, level],
    });

    return reward;
  },

  getNextLevelReward: () => {
    const { currentLevel } = get();
    return LEVEL_REWARDS.find(r => r.level === currentLevel + 1) || null;
  },
}));
