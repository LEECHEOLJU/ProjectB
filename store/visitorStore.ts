import { create } from 'zustand';
import type { VisitorStats } from '@/types';
import { useLevelStore, EXP_REWARDS } from './levelStore';

interface VisitorStore extends VisitorStats {
  // Actions
  updateVisitors: (
    animalCount: number,
    facilityCount: number,
    reputation: number,
    weather: string,
    season: string
  ) => void;
  addRevenue: (amount: number) => void;
  resetDaily: () => void;
}

const initialState: VisitorStats = {
  currentVisitors: 0,
  dailyVisitors: 0,
  averageSatisfaction: 0,
  totalRevenue: 0,
};

export const useVisitorStore = create<VisitorStore>((set, get) => ({
  ...initialState,

  updateVisitors: (animalCount, facilityCount, reputation, weather, season) => {
    // 기본 방문객 수 계산
    let baseVisitors = 50;

    // 동물 수에 따른 보너스
    baseVisitors += animalCount * 10;

    // 시설 수에 따른 보너스
    baseVisitors += facilityCount * 5;

    // 평판에 따른 배수
    const reputationMultiplier = 0.5 + (reputation / 100);
    baseVisitors *= reputationMultiplier;

    // 날씨 영향
    const weatherMultiplier = weather === 'sunny' ? 1.2 :
                             weather === 'cloudy' ? 1.0 :
                             weather === 'rainy' ? 0.6 : 0.8;
    baseVisitors *= weatherMultiplier;

    // 계절 영향
    const seasonMultiplier = season === 'summer' ? 1.3 :
                            season === 'spring' ? 1.1 :
                            season === 'autumn' ? 1.0 : 0.8;
    baseVisitors *= seasonMultiplier;

    const visitors = Math.floor(baseVisitors);

    // 만족도 계산
    const baseSatisfaction = 50;
    const animalBonus = Math.min(30, animalCount * 2);
    const facilityBonus = Math.min(20, facilityCount);
    const satisfaction = Math.min(100, baseSatisfaction + animalBonus + facilityBonus);

    set((state) => ({
      currentVisitors: visitors,
      dailyVisitors: state.dailyVisitors + visitors,
      averageSatisfaction: satisfaction,
    }));

    // 방문객이 들어올 때 경험치 보상
    if (visitors > 0) {
      useLevelStore.getState().addExp(visitors * EXP_REWARDS.visitorEnter, '방문객 입장');
    }
  },

  addRevenue: (amount) => set((state) => ({
    totalRevenue: state.totalRevenue + amount,
  })),

  resetDaily: () => set({
    dailyVisitors: 0,
    totalRevenue: 0,
  }),
}));
