import type { AnimalSpecies } from '@/types';

// ==================== 해양 동물 ====================
export const OCEAN_ANIMALS: AnimalSpecies[] = [
  { id: 'whale', name: '고래', type: 'aquatic', rarity: 'legendary', price: 50000, maintenanceCost: 300, popularity: 98, unlockLevel: 20, habitatType: 'ocean', emoji: '🐋', description: '거대한 고래', specialAbility: '입장료 +50%', lifespan: 300 },
  { id: 'dolphin', name: '돌고래', type: 'aquatic', rarity: 'legendary', price: 35000, maintenanceCost: 220, popularity: 96, unlockLevel: 16, habitatType: 'aquarium', emoji: '🐬', description: '영리한 돌고래', specialAbility: '쇼 수익 +50%', lifespan: 190 },
  { id: 'shark', name: '상어', type: 'aquatic', rarity: 'legendary', price: 32000, maintenanceCost: 210, popularity: 94, unlockLevel: 15, habitatType: 'aquarium', emoji: '🦈', description: '무서운 상어', specialAbility: '스릴 +20', lifespan: 230 },
  { id: 'orca', name: '범고래', type: 'aquatic', rarity: 'legendary', price: 48000, maintenanceCost: 290, popularity: 97, unlockLevel: 19, habitatType: 'ocean', emoji: '🐋', description: '바다의 늑대', specialAbility: '쇼 수익 +55%, 평판 +3/일', lifespan: 270 },
  { id: 'sea_otter', name: '해달', type: 'aquatic', rarity: 'rare', price: 7500, maintenanceCost: 78, popularity: 82, unlockLevel: 9, habitatType: 'aquarium', emoji: '🦦', description: '귀여운 해달', specialAbility: '만족도 +7', lifespan: 140 },
  { id: 'sea_lion', name: '바다사자', type: 'aquatic', rarity: 'epic', price: 12000, maintenanceCost: 112, popularity: 84, unlockLevel: 11, habitatType: 'aquarium', emoji: '🦭', description: '재주 많은 바다사자', specialAbility: '쇼 수익 +35%', lifespan: 180 },
  { id: 'manatee', name: '매너티', type: 'aquatic', rarity: 'epic', price: 15500, maintenanceCost: 138, popularity: 86, unlockLevel: 13, habitatType: 'aquarium', emoji: '🦭', description: '바다소', specialAbility: '만족도 +9', lifespan: 250 },
  { id: 'jellyfish', name: '해파리', type: 'aquatic', rarity: 'common', price: 1200, maintenanceCost: 20, popularity: 65, unlockLevel: 2, habitatType: 'aquarium', emoji: '🪼', description: '투명한 해파리', lifespan: 50 },
  { id: 'octopus', name: '문어', type: 'aquatic', rarity: 'rare', price: 6800, maintenanceCost: 72, popularity: 77, unlockLevel: 8, habitatType: 'aquarium', emoji: '🐙', description: '8개 다리의 영리한 문어', lifespan: 80 },
  { id: 'stingray', name: '가오리', type: 'aquatic', rarity: 'rare', price: 5500, maintenanceCost: 60, popularity: 72, unlockLevel: 7, habitatType: 'aquarium', emoji: '🐋', description: '우아하게 헤엄치는 가오리', lifespan: 150 },
  { id: 'hammerhead_shark', name: '귀상어', type: 'aquatic', rarity: 'epic', price: 18500, maintenanceCost: 155, popularity: 87, unlockLevel: 13, habitatType: 'aquarium', emoji: '🦈', description: '망치 머리 상어', specialAbility: '스릴 +24', lifespan: 210 },
  { id: 'great_white_shark', name: '백상아리', type: 'aquatic', rarity: 'legendary', price: 40000, maintenanceCost: 255, popularity: 96, unlockLevel: 18, habitatType: 'ocean', emoji: '🦈', description: '바다의 지배자', specialAbility: '스릴 +30, 입장료 +25%', lifespan: 240 },
  { id: 'whale_shark', name: '고래상어', type: 'aquatic', rarity: 'legendary', price: 38000, maintenanceCost: 240, popularity: 95, unlockLevel: 17, habitatType: 'ocean', emoji: '🦈', description: '가장 큰 물고기', specialAbility: '평판 +3/일', lifespan: 280 },
  { id: 'sea_turtle', name: '바다거북', type: 'reptile', rarity: 'epic', price: 11000, maintenanceCost: 102, popularity: 83, unlockLevel: 10, habitatType: 'aquarium', emoji: '🐢', description: '장수하는 거북', lifespan: 350 },
  { id: 'clownfish', name: '흰동가리', type: 'aquatic', rarity: 'common', price: 800, maintenanceCost: 15, popularity: 68, unlockLevel: 1, habitatType: 'aquarium', emoji: '🐠', description: '니모 물고기', lifespan: 60 },
  { id: 'blue_tang', name: '블루탱', type: 'aquatic', rarity: 'common', price: 1000, maintenanceCost: 18, popularity: 69, unlockLevel: 1, habitatType: 'aquarium', emoji: '🐟', description: '도리 물고기', lifespan: 70 },
  { id: 'seahorse', name: '해마', type: 'aquatic', rarity: 'rare', price: 3500, maintenanceCost: 42, popularity: 74, unlockLevel: 5, habitatType: 'aquarium', emoji: '🐴', description: '작은 해마', lifespan: 90 },
  { id: 'manta_ray', name: '만타가오리', type: 'aquatic', rarity: 'epic', price: 16500, maintenanceCost: 145, popularity: 88, unlockLevel: 14, habitatType: 'ocean', emoji: '🐋', description: '거대한 가오리', specialAbility: '만족도 +10', lifespan: 200 },
  { id: 'electric_eel', name: '전기뱀장어', type: 'aquatic', rarity: 'rare', price: 7200, maintenanceCost: 75, popularity: 76, unlockLevel: 9, habitatType: 'aquarium', emoji: '⚡', description: '전기를 내는 뱀장어', specialAbility: '스릴 +18', lifespan: 110 },
  { id: 'giant_squid', name: '대왕오징어', type: 'aquatic', rarity: 'legendary', price: 35000, maintenanceCost: 225, popularity: 94, unlockLevel: 17, habitatType: 'ocean', emoji: '🦑', description: '신비한 대왕오징어', specialAbility: '스릴 +26', lifespan: 150 },
  { id: 'lionfish', name: '쏠배감펭', type: 'aquatic', rarity: 'rare', price: 4800, maintenanceCost: 52, popularity: 73, unlockLevel: 7, habitatType: 'aquarium', emoji: '🐠', description: '화려하지만 독이 있는 물고기', lifespan: 100 },
  { id: 'pufferfish', name: '복어', type: 'aquatic', rarity: 'common', price: 2200, maintenanceCost: 32, popularity: 67, unlockLevel: 3, habitatType: 'aquarium', emoji: '🐡', description: '부풀어 오르는 물고기', lifespan: 80 },
  { id: 'cuttlefish', name: '갑오징어', type: 'aquatic', rarity: 'rare', price: 5800, maintenanceCost: 62, popularity: 74, unlockLevel: 8, habitatType: 'aquarium', emoji: '🦑', description: '색을 바꾸는 오징어', lifespan: 90 },
  { id: 'moray_eel', name: '곰치', type: 'aquatic', rarity: 'rare', price: 6200, maintenanceCost: 66, popularity: 72, unlockLevel: 8, habitatType: 'aquarium', emoji: '🐍', description: '길고 무서운 뱀장어', lifespan: 180 },
  { id: 'nautilus', name: '앵무조개', type: 'aquatic', rarity: 'epic', price: 12500, maintenanceCost: 115, popularity: 82, unlockLevel: 12, habitatType: 'aquarium', emoji: '🐚', description: '살아있는 화석', lifespan: 200 },
];

// ==================== 신화/환상 동물 (특별 이벤트용) ====================
export const MYTHICAL_ANIMALS: AnimalSpecies[] = [
  { id: 'unicorn', name: '유니콘', type: 'mammal', rarity: 'legendary', price: 99999, maintenanceCost: 500, popularity: 100, unlockLevel: 50, habitatType: 'fantasy_forest', emoji: '🦄', description: '전설의 유니콘', specialAbility: '모든 수익 2배, 평판 +10/일', lifespan: 999 },
  { id: 'dragon', name: '드래곤', type: 'reptile', rarity: 'legendary', price: 150000, maintenanceCost: 800, popularity: 100, unlockLevel: 50, habitatType: 'volcano', emoji: '🐉', description: '불을 뿜는 드래곤', specialAbility: '모든 수익 3배, 방문객 3배', lifespan: 999 },
  { id: 'phoenix', name: '불사조', type: 'bird', rarity: 'legendary', price: 120000, maintenanceCost: 650, popularity: 100, unlockLevel: 50, habitatType: 'sky', emoji: '🔥🦅', description: '부활하는 새', specialAbility: '동물 사망 시 부활, 평판 +15/일', lifespan: 999 },
  { id: 'pegasus', name: '페가수스', type: 'mammal', rarity: 'legendary', price: 110000, maintenanceCost: 600, popularity: 100, unlockLevel: 50, habitatType: 'sky', emoji: '🦄🦅', description: '날개 달린 말', specialAbility: '방문객 2배, 만족도 항상 100', lifespan: 999 },
  { id: 'griffin', name: '그리핀', type: 'mammal', rarity: 'legendary', price: 105000, maintenanceCost: 580, popularity: 99, unlockLevel: 48, habitatType: 'mountain', emoji: '🦅🦁', description: '독수리와 사자의 혼합', specialAbility: '평판 +8/일, 보안 +100%', lifespan: 999 },
  { id: 'white_tiger', name: '백호', type: 'mammal', rarity: 'legendary', price: 80000, maintenanceCost: 450, popularity: 98, unlockLevel: 45, habitatType: 'snow_forest', emoji: '🐯⚪', description: '신비한 흰 호랑이', specialAbility: '방문객 +50%, 평판 +5/일', lifespan: 250 },
  { id: 'golden_monkey', name: '황금원숭이', type: 'mammal', rarity: 'legendary', price: 75000, maintenanceCost: 420, popularity: 97, unlockLevel: 43, habitatType: 'jungle', emoji: '🐒💛', description: '황금빛 원숭이', specialAbility: '모든 수익 +80%', lifespan: 200 },
  { id: 'crystal_butterfly', name: '크리스탈나비', type: 'bird', rarity: 'legendary', price: 65000, maintenanceCost: 380, popularity: 96, unlockLevel: 40, habitatType: 'fantasy_garden', emoji: '🦋💎', description: '수정으로 된 나비', specialAbility: '만족도 +20, 평판 +6/일', lifespan: 150 },
  { id: 'rainbow_parrot', name: '무지개앵무', type: 'bird', rarity: 'legendary', price: 58000, maintenanceCost: 350, popularity: 95, unlockLevel: 38, habitatType: 'jungle', emoji: '🦜🌈', description: '7색 깃털의 앵무새', specialAbility: '어린이 방문객 +100%', lifespan: 280 },
  { id: 'ice_wolf', name: '얼음늑대', type: 'mammal', rarity: 'legendary', price: 70000, maintenanceCost: 400, popularity: 96, unlockLevel: 42, habitatType: 'arctic', emoji: '🐺❄️', description: '얼음을 다루는 늑대', specialAbility: '겨울 수익 +100%', lifespan: 200 },
  { id: 'thunder_eagle', name: '천둥독수리', type: 'bird', rarity: 'legendary', price: 85000, maintenanceCost: 470, popularity: 97, unlockLevel: 44, habitatType: 'sky', emoji: '🦅⚡', description: '번개를 부리는 독수리', specialAbility: '평판 +7/일, 스릴 +40', lifespan: 250 },
  { id: 'shadow_panther', name: '그림자표범', type: 'mammal', rarity: 'legendary', price: 90000, maintenanceCost: 490, popularity: 98, unlockLevel: 46, habitatType: 'night_jungle', emoji: '🐆🌙', description: '어둠 속의 표범', specialAbility: '밤 방문객 +200%', lifespan: 180 },
  { id: 'flame_fox', name: '화염여우', type: 'mammal', rarity: 'legendary', price: 72000, maintenanceCost: 410, popularity: 96, unlockLevel: 41, habitatType: 'volcano', emoji: '🦊🔥', description: '불을 다루는 여우', specialAbility: '여름 수익 +120%', lifespan: 170 },
  { id: 'moon_rabbit', name: '달토끼', type: 'mammal', rarity: 'legendary', price: 55000, maintenanceCost: 330, popularity: 94, unlockLevel: 37, habitatType: 'moon_garden', emoji: '🐰🌙', description: '달에서 온 토끼', specialAbility: '밤 만족도 +25', lifespan: 160 },
  { id: 'spirit_bear', name: '영혼곰', type: 'mammal', rarity: 'legendary', price: 95000, maintenanceCost: 520, popularity: 98, unlockLevel: 47, habitatType: 'spirit_forest', emoji: '🐻👻', description: '유령 같은 하얀 곰', specialAbility: '평판 +9/일, 만족도 +15', lifespan: 220 },
  { id: 'sakura_deer', name: '벚꽃사슴', type: 'mammal', rarity: 'legendary', price: 68000, maintenanceCost: 390, popularity: 96, unlockLevel: 39, habitatType: 'cherry_forest', emoji: '🦌🌸', description: '벚꽃을 피우는 사슴', specialAbility: '봄 방문객 +150%', lifespan: 190 },
];

// ==================== 추가 일반 동물 (빠진 동물들) ====================
export const ADDITIONAL_ANIMALS: AnimalSpecies[] = [
  // 더 많은 일반 동물들
  { id: 'rabbit', name: '토끼', type: 'mammal', rarity: 'common', price: 500, maintenanceCost: 10, popularity: 40, unlockLevel: 1, habitatType: 'grassland', emoji: '🐰', description: '귀여운 토끼', lifespan: 120 },
  { id: 'chicken', name: '닭', type: 'bird', rarity: 'common', price: 300, maintenanceCost: 5, popularity: 30, unlockLevel: 1, habitatType: 'farm', emoji: '🐔', description: '평범한 닭', lifespan: 100 },
  { id: 'sheep', name: '양', type: 'mammal', rarity: 'common', price: 800, maintenanceCost: 15, popularity: 35, unlockLevel: 1, habitatType: 'grassland', emoji: '🐑', description: '순한 양', lifespan: 150 },
  { id: 'pig', name: '돼지', type: 'mammal', rarity: 'common', price: 700, maintenanceCost: 20, popularity: 38, unlockLevel: 1, habitatType: 'farm', emoji: '🐷', description: '통통한 돼지', lifespan: 130 },
  { id: 'turtle', name: '거북이', type: 'reptile', rarity: 'common', price: 1000, maintenanceCost: 8, popularity: 42, unlockLevel: 2, habitatType: 'aquatic', emoji: '🐢', description: '느린 거북이', lifespan: 300 },
  { id: 'fox', name: '여우', type: 'mammal', rarity: 'rare', price: 2500, maintenanceCost: 30, popularity: 55, unlockLevel: 3, habitatType: 'forest', emoji: '🦊', description: '영리한 여우', lifespan: 140 },
  { id: 'deer', name: '사슴', type: 'mammal', rarity: 'rare', price: 3000, maintenanceCost: 35, popularity: 60, unlockLevel: 3, habitatType: 'forest', emoji: '🦌', description: '우아한 사슴', lifespan: 160 },
  { id: 'owl', name: '올빼미', type: 'bird', rarity: 'rare', price: 2000, maintenanceCost: 25, popularity: 52, unlockLevel: 4, habitatType: 'forest', emoji: '🦉', description: '지혜의 올빼미', lifespan: 130 },
  { id: 'monkey', name: '원숭이', type: 'mammal', rarity: 'rare', price: 3200, maintenanceCost: 38, popularity: 62, unlockLevel: 5, habitatType: 'jungle', emoji: '🐒', description: '장난꾸러기 원숭이', lifespan: 140 },
  { id: 'parrot', name: '앵무새', type: 'bird', rarity: 'rare', price: 2800, maintenanceCost: 32, popularity: 58, unlockLevel: 4, habitatType: 'jungle', emoji: '🦜', description: '화려한 앵무새', lifespan: 250 },
  { id: 'eagle', name: '독수리', type: 'bird', rarity: 'epic', price: 12500, maintenanceCost: 115, popularity: 87, unlockLevel: 12, habitatType: 'mountain', emoji: '🦅', description: '위엄있는 독수리', specialAbility: '평판 +2/일', lifespan: 200 },
  { id: 'snake', name: '뱀', type: 'reptile', rarity: 'rare', price: 3800, maintenanceCost: 42, popularity: 64, unlockLevel: 7, habitatType: 'desert', emoji: '🐍', description: '긴 뱀', lifespan: 160 },
  { id: 'camel', name: '낙타', type: 'mammal', rarity: 'rare', price: 4200, maintenanceCost: 46, popularity: 63, unlockLevel: 7, habitatType: 'desert', emoji: '🐪', description: '사막의 낙타', lifespan: 190 },
  { id: 'cow', name: '소', type: 'mammal', rarity: 'common', price: 1200, maintenanceCost: 22, popularity: 45, unlockLevel: 1, habitatType: 'farm', emoji: '🐄', description: '젖을 주는 소', lifespan: 140 },
  { id: 'horse', name: '말', type: 'mammal', rarity: 'common', price: 1800, maintenanceCost: 28, popularity: 50, unlockLevel: 2, habitatType: 'grassland', emoji: '🐴', description: '달리는 말', lifespan: 160 },
  { id: 'donkey', name: '당나귀', type: 'mammal', rarity: 'common', price: 1000, maintenanceCost: 20, popularity: 42, unlockLevel: 1, habitatType: 'farm', emoji: '🫏', description: '일하는 당나귀', lifespan: 150 },
  { id: 'cat', name: '고양이', type: 'mammal', rarity: 'common', price: 600, maintenanceCost: 12, popularity: 55, unlockLevel: 1, habitatType: 'farm', emoji: '🐱', description: '귀여운 고양이', lifespan: 120 },
  { id: 'dog', name: '개', type: 'mammal', rarity: 'common', price: 700, maintenanceCost: 15, popularity: 58, unlockLevel: 1, habitatType: 'farm', emoji: '🐕', description: '충실한 개', lifespan: 130 },
  { id: 'goat', name: '염소', type: 'mammal', rarity: 'common', price: 900, maintenanceCost: 18, popularity: 44, unlockLevel: 1, habitatType: 'mountain', emoji: '🐐', description: '산을 잘 타는 염소', lifespan: 140 },
  { id: 'hamster', name: '햄스터', type: 'mammal', rarity: 'common', price: 400, maintenanceCost: 8, popularity: 52, unlockLevel: 1, habitatType: 'farm', emoji: '🐹', description: '작고 귀여운 햄스터', lifespan: 70 },
];

export const ALL_OCEAN_MYTHICAL_ANIMALS: AnimalSpecies[] = [
  ...OCEAN_ANIMALS,
  ...MYTHICAL_ANIMALS,
  ...ADDITIONAL_ANIMALS,
];
