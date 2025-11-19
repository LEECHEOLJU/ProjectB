import type { Achievement } from '@/types';

export const ACHIEVEMENTS: Achievement[] = [
  // 동물 수집 업적
  {
    id: 'first_animal',
    name: '첫 번째 동물',
    description: '첫 번째 동물을 구매하세요',
    emoji: '🐾',
    requirement: { type: 'animals', target: 1 },
    reward: { experience: 50, money: 1000 },
  },
  {
    id: 'animal_collector_5',
    name: '동물 애호가',
    description: '5마리의 동물을 보유하세요',
    emoji: '🦁',
    requirement: { type: 'animals', target: 5 },
    reward: { experience: 100, money: 2000 },
  },
  {
    id: 'animal_collector_10',
    name: '동물원 관리자',
    description: '10마리의 동물을 보유하세요',
    emoji: '🐘',
    requirement: { type: 'animals', target: 10 },
    reward: { experience: 200, money: 5000 },
  },
  {
    id: 'animal_collector_25',
    name: '동물원 전문가',
    description: '25마리의 동물을 보유하세요',
    emoji: '🦒',
    requirement: { type: 'animals', target: 25 },
    reward: { experience: 500, money: 10000 },
  },

  // 방문객 업적
  {
    id: 'visitor_100',
    name: '인기 급상승',
    description: '하루에 100명의 방문객을 유치하세요',
    emoji: '👥',
    requirement: { type: 'visitors', target: 100 },
    reward: { experience: 100, money: 2000 },
  },
  {
    id: 'visitor_500',
    name: '핫플레이스',
    description: '하루에 500명의 방문객을 유치하세요',
    emoji: '🎉',
    requirement: { type: 'visitors', target: 500 },
    reward: { experience: 250, money: 5000 },
  },
  {
    id: 'visitor_1000',
    name: '메가 동물원',
    description: '하루에 1000명의 방문객을 유치하세요',
    emoji: '🏆',
    requirement: { type: 'visitors', target: 1000 },
    reward: { experience: 500, money: 15000 },
  },

  // 돈 업적
  {
    id: 'money_10k',
    name: '사업 시작',
    description: '$10,000를 모으세요',
    emoji: '💵',
    requirement: { type: 'money', target: 10000 },
    reward: { experience: 50 },
  },
  {
    id: 'money_50k',
    name: '부유한 사업가',
    description: '$50,000를 모으세요',
    emoji: '💰',
    requirement: { type: 'money', target: 50000 },
    reward: { experience: 150 },
  },
  {
    id: 'money_100k',
    name: '동물원 재벌',
    description: '$100,000를 모으세요',
    emoji: '🤑',
    requirement: { type: 'money', target: 100000 },
    reward: { experience: 300 },
  },

  // 레벨 업적
  {
    id: 'level_5',
    name: '초보 탈출',
    description: '레벨 5에 도달하세요',
    emoji: '⭐',
    requirement: { type: 'level', target: 5 },
    reward: { money: 5000 },
  },
  {
    id: 'level_10',
    name: '중급 관리자',
    description: '레벨 10에 도달하세요',
    emoji: '🌟',
    requirement: { type: 'level', target: 10 },
    reward: { money: 10000 },
  },
  {
    id: 'level_20',
    name: '마스터 타이쿤',
    description: '레벨 20에 도달하세요',
    emoji: '✨',
    requirement: { type: 'level', target: 20 },
    reward: { money: 25000 },
  },

  // 시설 업적
  {
    id: 'facility_5',
    name: '시설 건설가',
    description: '5개의 시설을 건설하세요',
    emoji: '🏗️',
    requirement: { type: 'facilities', target: 5 },
    reward: { experience: 100, money: 3000 },
  },
  {
    id: 'facility_10',
    name: '건축 전문가',
    description: '10개의 시설을 건설하세요',
    emoji: '🏛️',
    requirement: { type: 'facilities', target: 10 },
    reward: { experience: 200, money: 7000 },
  },
];

export function getAchievementById(id: string) {
  return ACHIEVEMENTS.find((achievement) => achievement.id === id);
}
