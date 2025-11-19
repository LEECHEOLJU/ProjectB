import { create } from 'zustand';
import type { GameState, GameSpeed, Weather, Season } from '@/types';
import { getSeason, generateRandomWeather, getRequiredExperience } from '@/lib/utils/game';

interface GameStore extends GameState {
  // Actions
  setMoney: (amount: number) => void;
  addMoney: (amount: number) => void;
  spendMoney: (amount: number) => boolean;
  addExperience: (amount: number) => void;
  setReputation: (amount: number) => void;
  addReputation: (amount: number) => void;
  setLevel: (level: number) => void;
  setGameSpeed: (speed: GameSpeed) => void;
  togglePause: () => void;
  updateGameTime: () => void;
  updateWeather: () => void;
  resetGame: () => void;
}

const initialState: GameState = {
  zooId: null,
  zooName: 'My Zoo',
  money: 50000,
  level: 1,
  experience: 0,
  reputation: 50,
  gameTime: 0,
  gameSpeed: 1,
  weather: 'sunny',
  season: 'spring',
  isPaused: false,
};

export const useGameStore = create<GameStore>((set, get) => ({
  ...initialState,

  setMoney: (amount) => set({ money: Math.max(0, amount) }),

  addMoney: (amount) => set((state) => ({
    money: state.money + amount,
  })),

  spendMoney: (amount) => {
    const { money } = get();
    if (money >= amount) {
      set({ money: money - amount });
      return true;
    }
    return false;
  },

  addExperience: (amount) => set((state) => {
    const newExp = state.experience + amount;
    const requiredExp = getRequiredExperience(state.level);

    if (newExp >= requiredExp) {
      // 레벨업!
      return {
        experience: newExp - requiredExp,
        level: state.level + 1,
        reputation: Math.min(100, state.reputation + 5),
      };
    }

    return { experience: newExp };
  }),

  setReputation: (amount) => set({
    reputation: Math.max(0, Math.min(100, amount)),
  }),

  addReputation: (amount) => set((state) => ({
    reputation: Math.max(0, Math.min(100, state.reputation + amount)),
  })),

  setLevel: (level) => set({
    level: Math.max(1, level),
    experience: 0,
  }),

  setGameSpeed: (speed) => set({
    gameSpeed: speed,
    isPaused: false,
  }),

  togglePause: () => set((state) => ({
    isPaused: !state.isPaused,
    gameSpeed: state.isPaused ? 1 : state.gameSpeed,
  })),

  updateGameTime: () => set((state) => {
    const newTime = state.gameTime + 1;
    const newSeason = getSeason(newTime);

    return {
      gameTime: newTime,
      season: newSeason,
    };
  }),

  updateWeather: () => set({
    weather: generateRandomWeather(),
  }),

  resetGame: () => set(initialState),
}));
