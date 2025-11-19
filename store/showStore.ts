import { create } from 'zustand';
import type { AnimalShow } from '@/types/game';
import { useLevelStore, EXP_REWARDS } from './levelStore';

interface ActiveShow {
  showId: string;
  animalId: string;
  startTime: number;
  endTime: number;
}

interface ShowStore {
  activeShows: ActiveShow[];
  showCooldowns: Record<string, number>; // animalId -> cooldown end time

  // Actions
  startShow: (animalId: string, show: AnimalShow) => boolean;
  endShow: (showId: string) => void;
  isShowActive: (animalId: string) => boolean;
  isOnCooldown: (animalId: string) => boolean;
  getRemainingCooldown: (animalId: string) => number;
  cleanupExpiredShows: () => void;
}

// 동물별 쇼 정의
export const ANIMAL_SHOWS: Record<string, AnimalShow> = {
  lion: {
    id: 'lion_roar',
    animalId: 'lion',
    name: '사자의 포효',
    duration: 5, // 5분
    cooldown: 15, // 15분
    attractionRadius: 10,
    effects: {
      visitorMultiplier: 2.0,
      satisfactionBonus: 20,
      revenueMultiplier: 1.5,
    },
  },
  dolphin: {
    id: 'dolphin_jump',
    animalId: 'dolphin',
    name: '돌고래 점프쇼',
    duration: 10,
    cooldown: 20,
    attractionRadius: 15,
    effects: {
      visitorMultiplier: 3.0,
      satisfactionBonus: 30,
      revenueMultiplier: 2.0,
    },
  },
  elephant: {
    id: 'elephant_dance',
    animalId: 'elephant',
    name: '코끼리 춤',
    duration: 7,
    cooldown: 18,
    attractionRadius: 12,
    effects: {
      visitorMultiplier: 2.5,
      satisfactionBonus: 25,
      revenueMultiplier: 1.8,
    },
  },
  panda: {
    id: 'panda_play',
    animalId: 'panda',
    name: '판다 놀이쇼',
    duration: 8,
    cooldown: 15,
    attractionRadius: 10,
    effects: {
      visitorMultiplier: 2.2,
      satisfactionBonus: 28,
      revenueMultiplier: 1.7,
    },
  },
  penguin: {
    id: 'penguin_parade',
    animalId: 'penguin',
    name: '펭귄 퍼레이드',
    duration: 6,
    cooldown: 12,
    attractionRadius: 8,
    effects: {
      visitorMultiplier: 1.8,
      satisfactionBonus: 22,
      revenueMultiplier: 1.5,
    },
  },
  dragon: {
    id: 'dragon_fire',
    animalId: 'dragon',
    name: '드래곤 불꽃쇼',
    duration: 15,
    cooldown: 30,
    attractionRadius: 25,
    effects: {
      visitorMultiplier: 5.0,
      satisfactionBonus: 50,
      revenueMultiplier: 3.0,
    },
  },
  unicorn: {
    id: 'unicorn_magic',
    animalId: 'unicorn',
    name: '유니콘 마법쇼',
    duration: 12,
    cooldown: 25,
    attractionRadius: 20,
    effects: {
      visitorMultiplier: 4.0,
      satisfactionBonus: 45,
      revenueMultiplier: 2.5,
    },
  },
};

export const useShowStore = create<ShowStore>((set, get) => ({
  activeShows: [],
  showCooldowns: {},

  startShow: (animalId, show) => {
    const { isOnCooldown, isShowActive } = get();

    // 이미 쇼가 진행 중이거나 쿨다운이면 시작 불가
    if (isShowActive(animalId) || isOnCooldown(animalId)) {
      return false;
    }

    const now = Date.now();
    const newShow: ActiveShow = {
      showId: `show-${animalId}-${now}`,
      animalId,
      startTime: now,
      endTime: now + show.duration * 60 * 1000, // 분을 밀리초로 변환
    };

    set((state) => ({
      activeShows: [...state.activeShows, newShow],
    }));

    // 쇼가 끝나면 자동으로 쿨다운 설정
    setTimeout(() => {
      get().endShow(newShow.showId);
      set((state) => ({
        showCooldowns: {
          ...state.showCooldowns,
          [animalId]: now + (show.duration + show.cooldown) * 60 * 1000,
        },
      }));
    }, show.duration * 60 * 1000);

    // 경험치 보상
    useLevelStore.getState().addExp(EXP_REWARDS.showPerformed, `${show.name} 공연`);

    console.log(`🎭 ${show.name} 시작! ${show.duration}분간 진행`);
    return true;
  },

  endShow: (showId) => {
    set((state) => ({
      activeShows: state.activeShows.filter((show) => show.showId !== showId),
    }));
  },

  isShowActive: (animalId) => {
    const { activeShows } = get();
    return activeShows.some((show) => show.animalId === animalId);
  },

  isOnCooldown: (animalId) => {
    const { showCooldowns } = get();
    const cooldownEnd = showCooldowns[animalId];
    if (!cooldownEnd) return false;
    return Date.now() < cooldownEnd;
  },

  getRemainingCooldown: (animalId) => {
    const { showCooldowns } = get();
    const cooldownEnd = showCooldowns[animalId];
    if (!cooldownEnd) return 0;
    const remaining = cooldownEnd - Date.now();
    return Math.max(0, Math.ceil(remaining / 1000 / 60)); // 분 단위로 반환
  },

  cleanupExpiredShows: () => {
    const now = Date.now();
    set((state) => ({
      activeShows: state.activeShows.filter((show) => show.endTime > now),
    }));
  },
}));
