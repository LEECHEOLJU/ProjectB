import type { FacilityData } from '@/types';

export const FACILITIES: FacilityData[] = [
  // ========== HABITATS (서식지) ==========
  {
    id: 'grassland_habitat',
    name: '초원 서식지',
    type: 'habitat',
    price: 2000,
    maintenanceCost: 50,
    unlockLevel: 1,
    emoji: '🌾',
    description: '초원 동물들을 위한 서식지',
    effect: {
      visitorCapacity: 50,
    },
  },
  {
    id: 'jungle_habitat',
    name: '정글 서식지',
    type: 'habitat',
    price: 3500,
    maintenanceCost: 80,
    unlockLevel: 5,
    emoji: '🌴',
    description: '정글 동물들을 위한 서식지',
    effect: {
      visitorCapacity: 60,
    },
  },
  {
    id: 'arctic_habitat',
    name: '북극 서식지',
    type: 'habitat',
    price: 5000,
    maintenanceCost: 120,
    unlockLevel: 10,
    emoji: '❄️',
    description: '북극 동물들을 위한 특수 서식지',
    effect: {
      visitorCapacity: 80,
    },
  },
  {
    id: 'desert_habitat',
    name: '사막 서식지',
    type: 'habitat',
    price: 4000,
    maintenanceCost: 90,
    unlockLevel: 7,
    emoji: '🏜️',
    description: '사막 동물들을 위한 서식지',
    effect: {
      visitorCapacity: 55,
    },
  },
  {
    id: 'aquarium',
    name: '대형 수족관',
    type: 'habitat',
    price: 10000,
    maintenanceCost: 200,
    unlockLevel: 12,
    emoji: '🐠',
    description: '해양 동물들을 위한 대형 수족관',
    effect: {
      visitorCapacity: 150,
    },
  },

  // ========== VISITOR FACILITIES (방문객 시설) ==========
  {
    id: 'restaurant',
    name: '레스토랑',
    type: 'visitor',
    price: 5000,
    maintenanceCost: 100,
    unlockLevel: 3,
    emoji: '🍔',
    description: '방문객들이 식사할 수 있는 레스토랑',
    effect: {
      satisfactionBonus: 5,
      revenuePerDay: 500,
    },
  },
  {
    id: 'gift_shop',
    name: '기념품 가게',
    type: 'visitor',
    price: 3000,
    maintenanceCost: 60,
    unlockLevel: 2,
    emoji: '🎁',
    description: '기념품을 판매하는 가게',
    effect: {
      satisfactionBonus: 3,
      revenuePerDay: 300,
    },
  },
  {
    id: 'restroom',
    name: '화장실',
    type: 'visitor',
    price: 1500,
    maintenanceCost: 30,
    unlockLevel: 1,
    emoji: '🚻',
    description: '방문객들을 위한 화장실',
    effect: {
      satisfactionBonus: 8,
    },
  },
  {
    id: 'bench',
    name: '벤치',
    type: 'visitor',
    price: 500,
    maintenanceCost: 5,
    unlockLevel: 1,
    emoji: '🪑',
    description: '휴식을 위한 벤치',
    effect: {
      satisfactionBonus: 2,
    },
  },
  {
    id: 'info_center',
    name: '안내소',
    type: 'visitor',
    price: 2500,
    maintenanceCost: 50,
    unlockLevel: 4,
    emoji: 'ℹ️',
    description: '동물원 정보를 제공하는 안내소',
    effect: {
      satisfactionBonus: 4,
      visitorCapacity: 20,
    },
  },

  // ========== ATTRACTIONS (놀이기구/어트랙션) ==========
  {
    id: 'ferris_wheel',
    name: '관람차',
    type: 'attraction',
    price: 15000,
    maintenanceCost: 200,
    unlockLevel: 8,
    emoji: '🎡',
    description: '동물원을 한눈에 볼 수 있는 관람차',
    effect: {
      satisfactionBonus: 15,
      revenuePerDay: 800,
      reputationBonus: 5,
    },
  },
  {
    id: 'safari_tour',
    name: '사파리 투어',
    type: 'attraction',
    price: 20000,
    maintenanceCost: 250,
    unlockLevel: 12,
    emoji: '🚙',
    description: '동물들을 가까이서 볼 수 있는 투어',
    effect: {
      satisfactionBonus: 20,
      revenuePerDay: 1200,
      reputationBonus: 8,
    },
  },
  {
    id: 'train_ride',
    name: '미니 기차',
    type: 'attraction',
    price: 12000,
    maintenanceCost: 150,
    unlockLevel: 6,
    emoji: '🚂',
    description: '동물원을 도는 미니 기차',
    effect: {
      satisfactionBonus: 12,
      revenuePerDay: 600,
      reputationBonus: 3,
    },
  },
  {
    id: 'animal_show',
    name: '동물 쇼 무대',
    type: 'attraction',
    price: 18000,
    maintenanceCost: 220,
    unlockLevel: 10,
    emoji: '🎭',
    description: '동물 쇼를 진행하는 무대',
    effect: {
      satisfactionBonus: 18,
      revenuePerDay: 1000,
      reputationBonus: 7,
    },
  },
  {
    id: 'playground',
    name: '어린이 놀이터',
    type: 'attraction',
    price: 8000,
    maintenanceCost: 100,
    unlockLevel: 5,
    emoji: '🎠',
    description: '어린이들을 위한 놀이터',
    effect: {
      satisfactionBonus: 10,
      visitorCapacity: 30,
    },
  },

  // ========== STAFF FACILITIES (직원 시설) ==========
  {
    id: 'staff_room',
    name: '직원 휴게실',
    type: 'staff',
    price: 3000,
    maintenanceCost: 40,
    unlockLevel: 4,
    emoji: '🏢',
    description: '직원들을 위한 휴게실',
    effect: {},
  },
  {
    id: 'vet_clinic',
    name: '수의사실',
    type: 'staff',
    price: 7000,
    maintenanceCost: 80,
    unlockLevel: 6,
    emoji: '🏥',
    description: '동물들을 치료하는 수의사실',
    effect: {},
  },
  {
    id: 'storage',
    name: '창고',
    type: 'staff',
    price: 4000,
    maintenanceCost: 50,
    unlockLevel: 5,
    emoji: '📦',
    description: '물품을 보관하는 창고',
    effect: {},
  },
];

export function getFacilitiesByType(type: string) {
  return FACILITIES.filter((facility) => facility.type === type);
}

export function getFacilitiesByLevel(level: number) {
  return FACILITIES.filter((facility) => facility.unlockLevel <= level);
}

export function getFacilityById(id: string) {
  return FACILITIES.find((facility) => facility.id === id);
}
