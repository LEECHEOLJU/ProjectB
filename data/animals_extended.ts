import type { AnimalSpecies } from '@/types';

// ==================== 아프리카 대륙 ====================
export const AFRICA_ANIMALS: AnimalSpecies[] = [
  // 사바나
  { id: 'lion', name: '사자', type: 'mammal', rarity: 'epic', price: 10000, maintenanceCost: 100, popularity: 85, unlockLevel: 8, habitatType: 'savanna', emoji: '🦁', description: '백수의 왕', specialAbility: '평판 +1/일', lifespan: 180 },
  { id: 'elephant', name: '코끼리', type: 'mammal', rarity: 'epic', price: 15000, maintenanceCost: 150, popularity: 90, unlockLevel: 10, habitatType: 'savanna', emoji: '🐘', description: '거대한 코끼리', specialAbility: '입장료 +20%', lifespan: 250 },
  { id: 'giraffe', name: '기린', type: 'mammal', rarity: 'epic', price: 13000, maintenanceCost: 120, popularity: 86, unlockLevel: 10, habitatType: 'savanna', emoji: '🦒', description: '목이 긴 기린', specialAbility: '어린이 방문객 +15%', lifespan: 220 },
  { id: 'zebra', name: '얼룩말', type: 'mammal', rarity: 'rare', price: 5000, maintenanceCost: 50, popularity: 68, unlockLevel: 6, habitatType: 'savanna', emoji: '🦓', description: '줄무늬 말', lifespan: 170 },
  { id: 'rhino', name: '코뿔소', type: 'mammal', rarity: 'epic', price: 14000, maintenanceCost: 130, popularity: 84, unlockLevel: 11, habitatType: 'savanna', emoji: '🦏', description: '강력한 코뿔소', specialAbility: '평판 +2/일', lifespan: 200 },
  { id: 'hippo', name: '하마', type: 'mammal', rarity: 'epic', price: 13500, maintenanceCost: 125, popularity: 82, unlockLevel: 11, habitatType: 'wetland', emoji: '🦛', description: '거대한 하마', lifespan: 210 },
  { id: 'cheetah', name: '치타', type: 'mammal', rarity: 'rare', price: 8000, maintenanceCost: 90, popularity: 78, unlockLevel: 9, habitatType: 'savanna', emoji: '🐆', description: '세상에서 가장 빠른 동물', specialAbility: '스피드 쇼 수익 +30%', lifespan: 150 },
  { id: 'leopard', name: '표범', type: 'mammal', rarity: 'rare', price: 7500, maintenanceCost: 85, popularity: 76, unlockLevel: 9, habitatType: 'jungle', emoji: '🐆', description: '나무를 잘 타는 표범', lifespan: 160 },
  { id: 'hyena', name: '하이에나', type: 'mammal', rarity: 'common', price: 3000, maintenanceCost: 40, popularity: 55, unlockLevel: 5, habitatType: 'savanna', emoji: '🐺', description: '울음소리가 독특한 하이에나', lifespan: 130 },
  { id: 'wildebeest', name: '누', type: 'mammal', rarity: 'common', price: 2500, maintenanceCost: 35, popularity: 50, unlockLevel: 4, habitatType: 'savanna', emoji: '🦌', description: '대이동하는 누', lifespan: 140 },

  // 정글/숲
  { id: 'gorilla', name: '고릴라', type: 'mammal', rarity: 'epic', price: 11000, maintenanceCost: 105, popularity: 83, unlockLevel: 9, habitatType: 'jungle', emoji: '🦍', description: '강인한 고릴라', specialAbility: '경험치 +5/일', lifespan: 180 },
  { id: 'chimpanzee', name: '침팬지', type: 'mammal', rarity: 'rare', price: 6000, maintenanceCost: 65, popularity: 72, unlockLevel: 7, habitatType: 'jungle', emoji: '🐵', description: '영리한 침팬지', lifespan: 150 },
  { id: 'orangutan', name: '오랑우탄', type: 'mammal', rarity: 'epic', price: 9500, maintenanceCost: 98, popularity: 80, unlockLevel: 10, habitatType: 'jungle', emoji: '🦧', description: '붉은 털의 오랑우탄', lifespan: 170 },
  { id: 'mandrill', name: '맨드릴', type: 'mammal', rarity: 'rare', price: 5500, maintenanceCost: 60, popularity: 70, unlockLevel: 8, habitatType: 'jungle', emoji: '🐵', description: '화려한 얼굴의 원숭이', lifespan: 130 },
  { id: 'lemur', name: '여우원숭이', type: 'mammal', rarity: 'rare', price: 4500, maintenanceCost: 50, popularity: 68, unlockLevel: 6, habitatType: 'jungle', emoji: '🐒', description: '마다가스카르의 여우원숭이', lifespan: 120 },

  // 조류
  { id: 'ostrich', name: '타조', type: 'bird', rarity: 'common', price: 2000, maintenanceCost: 30, popularity: 52, unlockLevel: 3, habitatType: 'savanna', emoji: '🦤', description: '날지 못하는 큰 새', lifespan: 140 },
  { id: 'flamingo', name: '플라밍고', type: 'bird', rarity: 'rare', price: 3500, maintenanceCost: 40, popularity: 65, unlockLevel: 5, habitatType: 'wetland', emoji: '🦩', description: '분홍색 플라밍고', lifespan: 180 },
  { id: 'african_grey_parrot', name: '아프리카 회색앵무', type: 'bird', rarity: 'rare', price: 4000, maintenanceCost: 45, popularity: 67, unlockLevel: 6, habitatType: 'jungle', emoji: '🦜', description: '말을 잘 따라하는 앵무새', lifespan: 250 },
  { id: 'secretary_bird', name: '뱀잡이새', type: 'bird', rarity: 'rare', price: 3800, maintenanceCost: 42, popularity: 64, unlockLevel: 7, habitatType: 'savanna', emoji: '🦅', description: '뱀을 사냥하는 새', lifespan: 130 },
  { id: 'hornbill', name: '코뿔새', type: 'bird', rarity: 'common', price: 2500, maintenanceCost: 32, popularity: 56, unlockLevel: 4, habitatType: 'jungle', emoji: '🦜', description: '큰 부리의 새', lifespan: 140 },

  // 파충류
  { id: 'nile_crocodile', name: '나일악어', type: 'reptile', rarity: 'epic', price: 10500, maintenanceCost: 95, popularity: 80, unlockLevel: 10, habitatType: 'wetland', emoji: '🐊', description: '위험한 나일 악어', lifespan: 240 },
  { id: 'python', name: '비단뱀', type: 'reptile', rarity: 'rare', price: 4500, maintenanceCost: 48, popularity: 66, unlockLevel: 7, habitatType: 'jungle', emoji: '🐍', description: '거대한 비단뱀', lifespan: 180 },
  { id: 'chameleon', name: '카멜레온', type: 'reptile', rarity: 'common', price: 1800, maintenanceCost: 25, popularity: 58, unlockLevel: 3, habitatType: 'jungle', emoji: '🦎', description: '색을 바꾸는 도마뱀', lifespan: 100 },
  { id: 'tortoise', name: '육지거북', type: 'reptile', rarity: 'rare', price: 3500, maintenanceCost: 35, popularity: 62, unlockLevel: 5, habitatType: 'desert', emoji: '🐢', description: '장수하는 거북이', lifespan: 350 },

  // 추가 아프리카 동물
  { id: 'warthog', name: '멧돼지', type: 'mammal', rarity: 'common', price: 1500, maintenanceCost: 28, popularity: 48, unlockLevel: 2, habitatType: 'savanna', emoji: '🐗', description: '뾰족한 엄니의 멧돼지', lifespan: 120 },
  { id: 'meerkat', name: '미어캣', type: 'mammal', rarity: 'rare', price: 3000, maintenanceCost: 38, popularity: 70, unlockLevel: 5, habitatType: 'desert', emoji: '🐿️', description: '귀여운 미어캣', lifespan: 110 },
  { id: 'african_wild_dog', name: '아프리카들개', type: 'mammal', rarity: 'rare', price: 6500, maintenanceCost: 70, popularity: 72, unlockLevel: 8, habitatType: 'savanna', emoji: '🐕', description: '무리지어 사냥하는 들개', lifespan: 130 },
  { id: 'aardvark', name: '땅돼지', type: 'mammal', rarity: 'common', price: 2200, maintenanceCost: 32, popularity: 54, unlockLevel: 4, habitatType: 'savanna', emoji: '🐽', description: '개미를 먹는 땅돼지', lifespan: 140 },
  { id: 'pangolin', name: '천산갑', type: 'mammal', rarity: 'epic', price: 12000, maintenanceCost: 110, popularity: 82, unlockLevel: 12, habitatType: 'jungle', emoji: '🦔', description: '비늘로 덮인 희귀 동물', lifespan: 150 },
  { id: 'okapi', name: '오카피', type: 'mammal', rarity: 'legendary', price: 28000, maintenanceCost: 180, popularity: 92, unlockLevel: 15, habitatType: 'jungle', emoji: '🦌', description: '기린과 얼룩말의 혼합', specialAbility: '평판 +3/일', lifespan: 200 },
];

// ==================== 아시아 대륙 ====================
export const ASIA_ANIMALS: AnimalSpecies[] = [
  // 동아시아
  { id: 'panda', name: '판다', type: 'mammal', rarity: 'legendary', price: 30000, maintenanceCost: 200, popularity: 95, unlockLevel: 15, habitatType: 'bamboo_forest', emoji: '🐼', description: '귀여운 판다', specialAbility: '방문객 2배', lifespan: 200 },
  { id: 'red_panda', name: '레서판다', type: 'mammal', rarity: 'epic', price: 9000, maintenanceCost: 92, popularity: 85, unlockLevel: 10, habitatType: 'forest', emoji: '🐾', description: '귀여운 레서판다', specialAbility: '만족도 +8', lifespan: 140 },
  { id: 'tiger', name: '호랑이', type: 'mammal', rarity: 'epic', price: 12000, maintenanceCost: 110, popularity: 88, unlockLevel: 9, habitatType: 'jungle', emoji: '🐯', description: '위풍당당한 호랑이', specialAbility: '방문객 +10%', lifespan: 190 },
  { id: 'snow_leopard', name: '설표범', type: 'mammal', rarity: 'legendary', price: 25000, maintenanceCost: 175, popularity: 90, unlockLevel: 14, habitatType: 'mountain', emoji: '🐆', description: '눈 덮인 산의 표범', specialAbility: '겨울 방문객 +20%', lifespan: 160 },
  { id: 'asian_elephant', name: '아시아코끼리', type: 'mammal', rarity: 'epic', price: 14000, maintenanceCost: 135, popularity: 87, unlockLevel: 11, habitatType: 'jungle', emoji: '🐘', description: '일하는 코끼리', lifespan: 240 },

  // 동남아시아
  { id: 'orangutan_borneo', name: '보르네오오랑우탄', type: 'mammal', rarity: 'epic', price: 10000, maintenanceCost: 100, popularity: 81, unlockLevel: 10, habitatType: 'jungle', emoji: '🦧', description: '숲의 사람', lifespan: 170 },
  { id: 'sun_bear', name: '말레이곰', type: 'mammal', rarity: 'rare', price: 6500, maintenanceCost: 68, popularity: 73, unlockLevel: 8, habitatType: 'jungle', emoji: '🐻', description: '가장 작은 곰', lifespan: 140 },
  { id: 'proboscis_monkey', name: '코주부원숭이', type: 'mammal', rarity: 'rare', price: 5800, maintenanceCost: 62, popularity: 71, unlockLevel: 7, habitatType: 'wetland', emoji: '🐵', description: '큰 코의 원숭이', lifespan: 120 },
  { id: 'komodo_dragon', name: '코모도왕도마뱀', type: 'reptile', rarity: 'epic', price: 11500, maintenanceCost: 105, popularity: 83, unlockLevel: 11, habitatType: 'desert', emoji: '🦎', description: '세상에서 가장 큰 도마뱀', specialAbility: '스릴 +25', lifespan: 200 },
  { id: 'gibbon', name: '긴팔원숭이', type: 'mammal', rarity: 'rare', price: 4800, maintenanceCost: 52, popularity: 69, unlockLevel: 6, habitatType: 'jungle', emoji: '🐒', description: '나무를 잘 타는 원숭이', lifespan: 130 },

  // 남아시아
  { id: 'bengal_tiger', name: '벵골호랑이', type: 'mammal', rarity: 'epic', price: 13000, maintenanceCost: 115, popularity: 89, unlockLevel: 10, habitatType: 'jungle', emoji: '🐅', description: '인도의 호랑이', specialAbility: '방문객 +12%', lifespan: 185 },
  { id: 'indian_rhinoceros', name: '인도코뿔소', type: 'mammal', rarity: 'epic', price: 14500, maintenanceCost: 132, popularity: 85, unlockLevel: 12, habitatType: 'wetland', emoji: '🦏', description: '갑옷 같은 피부', lifespan: 210 },
  { id: 'peacock', name: '공작', type: 'bird', rarity: 'rare', price: 4000, maintenanceCost: 45, popularity: 70, unlockLevel: 5, habitatType: 'grassland', emoji: '🦚', description: '화려한 깃털', lifespan: 200 },
  { id: 'sloth_bear', name: '게으름곰', type: 'mammal', rarity: 'rare', price: 7000, maintenanceCost: 75, popularity: 74, unlockLevel: 9, habitatType: 'jungle', emoji: '🐻', description: '개미를 좋아하는 곰', lifespan: 150 },
  { id: 'king_cobra', name: '킹코브라', type: 'reptile', rarity: 'epic', price: 9500, maintenanceCost: 88, popularity: 79, unlockLevel: 10, habitatType: 'jungle', emoji: '🐍', description: '독사의 왕', specialAbility: '스릴 +20', lifespan: 180 },

  // 중앙아시아
  { id: 'snow_monkey', name: '일본원숭이', type: 'mammal', rarity: 'rare', price: 5500, maintenanceCost: 58, popularity: 76, unlockLevel: 7, habitatType: 'mountain', emoji: '🐵', description: '온천을 좋아하는 원숭이', lifespan: 130 },
  { id: 'bactrian_camel', name: '쌍봉낙타', type: 'mammal', rarity: 'rare', price: 4800, maintenanceCost: 52, popularity: 67, unlockLevel: 6, habitatType: 'desert', emoji: '🐫', description: '두 혹의 낙타', lifespan: 200 },
  { id: 'przewalski_horse', name: '프르제발스키말', type: 'mammal', rarity: 'epic', price: 10500, maintenanceCost: 98, popularity: 80, unlockLevel: 11, habitatType: 'grassland', emoji: '🐴', description: '야생마의 마지막', lifespan: 180 },
  { id: 'saiga_antelope', name: '사이가영양', type: 'mammal', rarity: 'rare', price: 6200, maintenanceCost: 64, popularity: 72, unlockLevel: 8, habitatType: 'grassland', emoji: '🦌', description: '독특한 코의 영양', lifespan: 140 },
  { id: 'golden_eagle', name: '검독수리', type: 'bird', rarity: 'epic', price: 8500, maintenanceCost: 82, popularity: 78, unlockLevel: 9, habitatType: 'mountain', emoji: '🦅', description: '강력한 독수리', specialAbility: '평판 +2/일', lifespan: 190 },

  // 추가 아시아 동물
  { id: 'clouded_leopard', name: '구름표범', type: 'mammal', rarity: 'epic', price: 11000, maintenanceCost: 103, popularity: 82, unlockLevel: 11, habitatType: 'jungle', emoji: '🐆', description: '나무에 사는 표범', lifespan: 150 },
  { id: 'binturong', name: '비어캣', type: 'mammal', rarity: 'rare', price: 5200, maintenanceCost: 56, popularity: 70, unlockLevel: 7, habitatType: 'jungle', emoji: '🐻', description: '팝콘 냄새 나는 동물', lifespan: 130 },
  { id: 'asian_water_buffalo', name: '물소', type: 'mammal', rarity: 'common', price: 2800, maintenanceCost: 38, popularity: 58, unlockLevel: 4, habitatType: 'wetland', emoji: '🐃', description: '논에서 일하는 소', lifespan: 160 },
  { id: 'fishing_cat', name: '어린표범', type: 'mammal', rarity: 'rare', price: 6800, maintenanceCost: 72, popularity: 74, unlockLevel: 8, habitatType: 'wetland', emoji: '🐆', description: '물고기를 잡는 고양이', lifespan: 130 },
  { id: 'gaur', name: '인도들소', type: 'mammal', rarity: 'epic', price: 9800, maintenanceCost: 95, popularity: 79, unlockLevel: 10, habitatType: 'jungle', emoji: '🐃', description: '세계 최대의 소', lifespan: 180 },
];

// ==================== 북아메리카 대륙 ====================
export const NORTH_AMERICA_ANIMALS: AnimalSpecies[] = [
  { id: 'grizzly_bear', name: '그리즐리곰', type: 'mammal', rarity: 'epic', price: 12500, maintenanceCost: 115, popularity: 86, unlockLevel: 10, habitatType: 'forest', emoji: '🐻', description: '북미의 거대한 곰', specialAbility: '겨울 수익 +15%', lifespan: 200 },
  { id: 'american_bison', name: '아메리카들소', type: 'mammal', rarity: 'rare', price: 6000, maintenanceCost: 65, popularity: 73, unlockLevel: 7, habitatType: 'grassland', emoji: '🦬', description: '대평원의 들소', lifespan: 170 },
  { id: 'wolf', name: '회색늑대', type: 'mammal', rarity: 'rare', price: 7500, maintenanceCost: 78, popularity: 77, unlockLevel: 8, habitatType: 'forest', emoji: '🐺', description: '무리 지어 사는 늑대', lifespan: 140 },
  { id: 'bald_eagle', name: '흰머리수리', type: 'bird', rarity: 'epic', price: 9000, maintenanceCost: 85, popularity: 80, unlockLevel: 9, habitatType: 'mountain', emoji: '🦅', description: '미국의 상징', specialAbility: '평판 +2/일', lifespan: 200 },
  { id: 'moose', name: '말코손바닥사슴', type: 'mammal', rarity: 'rare', price: 5800, maintenanceCost: 62, popularity: 71, unlockLevel: 7, habitatType: 'forest', emoji: '🫎', description: '거대한 뿔의 사슴', lifespan: 150 },
  { id: 'cougar', name: '퓨마', type: 'mammal', rarity: 'epic', price: 10500, maintenanceCost: 98, popularity: 82, unlockLevel: 10, habitatType: 'mountain', emoji: '🐈', description: '산속의 사냥꾼', lifespan: 160 },
  { id: 'raccoon', name: '너구리', type: 'mammal', rarity: 'common', price: 1800, maintenanceCost: 28, popularity: 62, unlockLevel: 2, habitatType: 'forest', emoji: '🦝', description: '귀여운 도둑', lifespan: 110 },
  { id: 'beaver', name: '비버', type: 'mammal', rarity: 'common', price: 2200, maintenanceCost: 32, popularity: 64, unlockLevel: 3, habitatType: 'wetland', emoji: '🦫', description: '댐을 만드는 비버', lifespan: 120 },
  { id: 'caribou', name: '순록', type: 'mammal', rarity: 'rare', price: 4500, maintenanceCost: 50, popularity: 68, unlockLevel: 6, habitatType: 'arctic', emoji: '🦌', description: '북극의 순록', lifespan: 140 },
  { id: 'lynx', name: '스라소니', type: 'mammal', rarity: 'rare', price: 6800, maintenanceCost: 70, popularity: 74, unlockLevel: 8, habitatType: 'forest', emoji: '🐈', description: '귀가 튀어나온 고양이', lifespan: 130 },
  { id: 'pronghorn', name: '가지뿔영양', type: 'mammal', rarity: 'common', price: 3200, maintenanceCost: 40, popularity: 60, unlockLevel: 4, habitatType: 'grassland', emoji: '🦌', description: '빠른 영양', lifespan: 130 },
  { id: 'armadillo', name: '아르마딜로', type: 'mammal', rarity: 'common', price: 2500, maintenanceCost: 35, popularity: 63, unlockLevel: 4, habitatType: 'desert', emoji: '🦔', description: '갑옷을 입은 동물', lifespan: 110 },
  { id: 'roadrunner', name: '로드러너', type: 'bird', rarity: 'common', price: 2000, maintenanceCost: 30, popularity: 58, unlockLevel: 3, habitatType: 'desert', emoji: '🐦', description: '빠르게 달리는 새', lifespan: 100 },
  { id: 'gila_monster', name: '힐라몬스터', type: 'reptile', rarity: 'rare', price: 4800, maintenanceCost: 52, popularity: 66, unlockLevel: 7, habitatType: 'desert', emoji: '🦎', description: '독을 가진 도마뱀', lifespan: 150 },
  { id: 'alligator', name: '앨리게이터', type: 'reptile', rarity: 'epic', price: 10000, maintenanceCost: 92, popularity: 79, unlockLevel: 10, habitatType: 'wetland', emoji: '🐊', description: '미시시피의 악어', lifespan: 230 },
  { id: 'mountain_goat', name: '산양', type: 'mammal', rarity: 'rare', price: 4200, maintenanceCost: 48, popularity: 67, unlockLevel: 6, habitatType: 'mountain', emoji: '🐐', description: '절벽을 오르는 양', lifespan: 140 },
  { id: 'black_bear', name: '흑곰', type: 'mammal', rarity: 'rare', price: 7200, maintenanceCost: 74, popularity: 75, unlockLevel: 8, habitatType: 'forest', emoji: '🐻', description: '나무를 잘 타는 곰', lifespan: 180 },
  { id: 'california_condor', name: '캘리포니아콘도르', type: 'bird', rarity: 'legendary', price: 26000, maintenanceCost: 178, popularity: 91, unlockLevel: 15, habitatType: 'mountain', emoji: '🦅', description: '북미 최대의 새', specialAbility: '평판 +3/일', lifespan: 250 },
  { id: 'bighorn_sheep', name: '큰뿔양', type: 'mammal', rarity: 'rare', price: 5500, maintenanceCost: 58, popularity: 70, unlockLevel: 7, habitatType: 'mountain', emoji: '🐏', description: '거대한 뿔의 양', lifespan: 150 },
  { id: 'coyote', name: '코요테', type: 'mammal', rarity: 'common', price: 3500, maintenanceCost: 42, popularity: 61, unlockLevel: 5, habitatType: 'desert', emoji: '🐺', description: '사막의 늑대', lifespan: 120 },
];

// 계속 더 추가...
export const ALL_EXTENDED_ANIMALS: AnimalSpecies[] = [
  ...AFRICA_ANIMALS,
  ...ASIA_ANIMALS,
  ...NORTH_AMERICA_ANIMALS,
];
