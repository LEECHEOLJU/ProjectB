import type { AnimalSpecies } from '@/types';

// ==================== 남아메리카 대륙 ====================
export const SOUTH_AMERICA_ANIMALS: AnimalSpecies[] = [
  { id: 'jaguar', name: '재규어', type: 'mammal', rarity: 'epic', price: 11500, maintenanceCost: 108, popularity: 84, unlockLevel: 10, habitatType: 'jungle', emoji: '🐆', description: '아마존의 포식자', specialAbility: '밤 방문객 +20%', lifespan: 170 },
  { id: 'llama', name: '라마', type: 'mammal', rarity: 'common', price: 2800, maintenanceCost: 36, popularity: 65, unlockLevel: 3, habitatType: 'mountain', emoji: '🦙', description: '안데스의 라마', lifespan: 150 },
  { id: 'capybara', name: '카피바라', type: 'mammal', rarity: 'rare', price: 4500, maintenanceCost: 50, popularity: 78, unlockLevel: 5, habitatType: 'wetland', emoji: '🦫', description: '세계 최대의 설치류', specialAbility: '만족도 +5', lifespan: 120 },
  { id: 'sloth', name: '나무늘보', type: 'mammal', rarity: 'rare', price: 5500, maintenanceCost: 55, popularity: 71, unlockLevel: 8, habitatType: 'jungle', emoji: '🦥', description: '느린 나무늘보', lifespan: 200 },
  { id: 'toucan', name: '투칸', type: 'bird', rarity: 'rare', price: 3800, maintenanceCost: 44, popularity: 69, unlockLevel: 6, habitatType: 'jungle', emoji: '🦜', description: '큰 부리의 투칸', lifespan: 140 },
  { id: 'macaw', name: '마코앵무', type: 'bird', rarity: 'rare', price: 4200, maintenanceCost: 48, popularity: 72, unlockLevel: 6, habitatType: 'jungle', emoji: '🦜', description: '화려한 앵무새', lifespan: 250 },
  { id: 'tamarin', name: '타마린', type: 'mammal', rarity: 'rare', price: 5000, maintenanceCost: 54, popularity: 70, unlockLevel: 7, habitatType: 'jungle', emoji: '🐒', description: '작고 귀여운 원숭이', lifespan: 130 },
  { id: 'anaconda', name: '아나콘다', type: 'reptile', rarity: 'epic', price: 10200, maintenanceCost: 96, popularity: 81, unlockLevel: 11, habitatType: 'wetland', emoji: '🐍', description: '세계 최대의 뱀', specialAbility: '스릴 +22', lifespan: 200 },
  { id: 'spectacled_bear', name: '안경곰', type: 'mammal', rarity: 'epic', price: 9500, maintenanceCost: 92, popularity: 80, unlockLevel: 10, habitatType: 'mountain', emoji: '🐻', description: '남미 유일의 곰', lifespan: 160 },
  { id: 'giant_anteater', name: '왕개미핥기', type: 'mammal', rarity: 'rare', price: 6200, maintenanceCost: 64, popularity: 73, unlockLevel: 8, habitatType: 'grassland', emoji: '🐜', description: '개미를 먹는 동물', lifespan: 140 },
  { id: 'harpy_eagle', name: '하피독수리', type: 'bird', rarity: 'legendary', price: 24000, maintenanceCost: 172, popularity: 90, unlockLevel: 14, habitatType: 'jungle', emoji: '🦅', description: '아마존의 최강 맹금류', specialAbility: '평판 +3/일', lifespan: 220 },
  { id: 'pink_dolphin', name: '분홍돌고래', type: 'aquatic', rarity: 'legendary', price: 38000, maintenanceCost: 230, popularity: 97, unlockLevel: 17, habitatType: 'aquarium', emoji: '🐬', description: '아마존의 신비한 돌고래', specialAbility: '쇼 수익 +60%', lifespan: 180 },
  { id: 'poison_dart_frog', name: '독개구리', type: 'reptile', rarity: 'common', price: 1500, maintenanceCost: 22, popularity: 64, unlockLevel: 2, habitatType: 'jungle', emoji: '🐸', description: '화려한 색의 개구리', lifespan: 80 },
  { id: 'armadillo_giant', name: '자이언트아르마딜로', type: 'mammal', rarity: 'rare', price: 5800, maintenanceCost: 60, popularity: 71, unlockLevel: 8, habitatType: 'grassland', emoji: '🦔', description: '거대한 아르마딜로', lifespan: 130 },
  { id: 'ocelot', name: '오셀롯', type: 'mammal', rarity: 'rare', price: 7200, maintenanceCost: 75, popularity: 76, unlockLevel: 9, habitatType: 'jungle', emoji: '🐈', description: '작은 야생 고양이', lifespan: 140 },
  { id: 'howler_monkey', name: '울부짖는원숭이', type: 'mammal', rarity: 'common', price: 3500, maintenanceCost: 42, popularity: 62, unlockLevel: 5, habitatType: 'jungle', emoji: '🐵', description: '큰 소리로 우는 원숭이', lifespan: 120 },
  { id: 'puma', name: '퓨마', type: 'mammal', rarity: 'epic', price: 10800, maintenanceCost: 102, popularity: 83, unlockLevel: 10, habitatType: 'mountain', emoji: '🐈', description: '산악의 사냥꾼', lifespan: 160 },
  { id: 'chinchilla', name: '친칠라', type: 'mammal', rarity: 'rare', price: 4000, maintenanceCost: 46, popularity: 68, unlockLevel: 6, habitatType: 'mountain', emoji: '🐭', description: '부드러운 털의 동물', lifespan: 110 },
  { id: 'tapir', name: '테이퍼', type: 'mammal', rarity: 'rare', price: 6500, maintenanceCost: 68, popularity: 72, unlockLevel: 8, habitatType: 'jungle', emoji: '🐽', description: '코끼리를 닮은 동물', lifespan: 150 },
  { id: 'vampire_bat', name: '흡혈박쥐', type: 'mammal', rarity: 'common', price: 2200, maintenanceCost: 32, popularity: 60, unlockLevel: 4, habitatType: 'jungle', emoji: '🦇', description: '피를 먹는 박쥐', lifespan: 90 },
];

// ==================== 유럽 대륙 ====================
export const EUROPE_ANIMALS: AnimalSpecies[] = [
  { id: 'european_brown_bear', name: '유럽불곰', type: 'mammal', rarity: 'epic', price: 11000, maintenanceCost: 105, popularity: 82, unlockLevel: 10, habitatType: 'forest', emoji: '🐻', description: '유럽의 곰', lifespan: 190 },
  { id: 'red_deer', name: '붉은사슴', type: 'mammal', rarity: 'rare', price: 4800, maintenanceCost: 52, popularity: 68, unlockLevel: 6, habitatType: 'forest', emoji: '🦌', description: '유럽의 사슴', lifespan: 150 },
  { id: 'wild_boar', name: '멧돼지', type: 'mammal', rarity: 'common', price: 2500, maintenanceCost: 35, popularity: 58, unlockLevel: 3, habitatType: 'forest', emoji: '🐗', description: '숲의 멧돼지', lifespan: 130 },
  { id: 'european_badger', name: '유럽오소리', type: 'mammal', rarity: 'common', price: 2800, maintenanceCost: 38, popularity: 60, unlockLevel: 4, habitatType: 'forest', emoji: '🦡', description: '밤에 활동하는 오소리', lifespan: 120 },
  { id: 'red_fox', name: '붉은여우', type: 'mammal', rarity: 'rare', price: 3500, maintenanceCost: 42, popularity: 66, unlockLevel: 5, habitatType: 'forest', emoji: '🦊', description: '영리한 여우', lifespan: 110 },
  { id: 'european_hedgehog', name: '유럽고슴도치', type: 'mammal', rarity: 'common', price: 1500, maintenanceCost: 25, popularity: 62, unlockLevel: 2, habitatType: 'forest', emoji: '🦔', description: '가시 많은 고슴도치', lifespan: 90 },
  { id: 'ibex', name: '아이벡스', type: 'mammal', rarity: 'rare', price: 5200, maintenanceCost: 56, popularity: 70, unlockLevel: 7, habitatType: 'mountain', emoji: '🐐', description: '알프스의 염소', lifespan: 160 },
  { id: 'chamois', name: '샤무아', type: 'mammal', rarity: 'rare', price: 4500, maintenanceCost: 50, popularity: 67, unlockLevel: 6, habitatType: 'mountain', emoji: '🐐', description: '산양류 동물', lifespan: 140 },
  { id: 'european_bison', name: '유럽들소', type: 'mammal', rarity: 'epic', price: 10500, maintenanceCost: 98, popularity: 81, unlockLevel: 11, habitatType: 'forest', emoji: '🦬', description: '유럽 최대의 육상동물', lifespan: 180 },
  { id: 'lynx_european', name: '유라시아스라소니', type: 'mammal', rarity: 'rare', price: 7000, maintenanceCost: 72, popularity: 74, unlockLevel: 8, habitatType: 'forest', emoji: '🐈', description: '유럽의 야생 고양이', lifespan: 140 },
  { id: 'wolf_european', name: '유럽늑대', type: 'mammal', rarity: 'rare', price: 7500, maintenanceCost: 76, popularity: 76, unlockLevel: 9, habitatType: 'forest', emoji: '🐺', description: '숲의 늑대', lifespan: 150 },
  { id: 'otter', name: '수달', type: 'mammal', rarity: 'rare', price: 4200, maintenanceCost: 48, popularity: 72, unlockLevel: 6, habitatType: 'wetland', emoji: '🦦', description: '물놀이하는 수달', lifespan: 120 },
  { id: 'white_stork', name: '흰황새', type: 'bird', rarity: 'common', price: 2200, maintenanceCost: 32, popularity: 63, unlockLevel: 3, habitatType: 'wetland', emoji: '🦢', description: '아기를 배달하는 새', lifespan: 150 },
  { id: 'golden_eagle_europe', name: '황금독수리', type: 'bird', rarity: 'epic', price: 8800, maintenanceCost: 84, popularity: 79, unlockLevel: 9, habitatType: 'mountain', emoji: '🦅', description: '유럽의 맹금류', specialAbility: '평판 +2/일', lifespan: 200 },
  { id: 'marmot', name: '마못', type: 'mammal', rarity: 'common', price: 2000, maintenanceCost: 30, popularity: 61, unlockLevel: 3, habitatType: 'mountain', emoji: '🦫', description: '알프스의 마못', lifespan: 110 },
];

// ==================== 호주/오세아니아 대륙 ====================
export const AUSTRALIA_ANIMALS: AnimalSpecies[] = [
  { id: 'kangaroo', name: '캥거루', type: 'mammal', rarity: 'rare', price: 4500, maintenanceCost: 48, popularity: 66, unlockLevel: 6, habitatType: 'grassland', emoji: '🦘', description: '뛰어다니는 캥거루', lifespan: 150 },
  { id: 'koala', name: '코알라', type: 'mammal', rarity: 'legendary', price: 27000, maintenanceCost: 185, popularity: 93, unlockLevel: 14, habitatType: 'eucalyptus_forest', emoji: '🐨', description: '유칼립투스를 먹는 코알라', specialAbility: '만족도 +8', lifespan: 150 },
  { id: 'wombat', name: '웜뱃', type: 'mammal', rarity: 'rare', price: 5200, maintenanceCost: 55, popularity: 70, unlockLevel: 7, habitatType: 'grassland', emoji: '🦫', description: '굴을 파는 웜뱃', lifespan: 140 },
  { id: 'tasmanian_devil', name: '태즈메이니아데빌', type: 'mammal', rarity: 'epic', price: 9500, maintenanceCost: 92, popularity: 80, unlockLevel: 10, habitatType: 'forest', emoji: '😈', description: '강력한 턱의 유대류', lifespan: 130 },
  { id: 'platypus', name: '오리너구리', type: 'mammal', rarity: 'legendary', price: 32000, maintenanceCost: 205, popularity: 95, unlockLevel: 16, habitatType: 'wetland', emoji: '🦫', description: '알을 낳는 포유류', specialAbility: '과학자 방문객 +30%', lifespan: 140 },
  { id: 'echidna', name: '가시두더지', type: 'mammal', rarity: 'rare', price: 6800, maintenanceCost: 70, popularity: 73, unlockLevel: 8, habitatType: 'forest', emoji: '🦔', description: '알을 낳는 가시동물', lifespan: 150 },
  { id: 'dingo', name: '딩고', type: 'mammal', rarity: 'rare', price: 5500, maintenanceCost: 58, popularity: 69, unlockLevel: 7, habitatType: 'desert', emoji: '🐕', description: '야생 개', lifespan: 130 },
  { id: 'kookaburra', name: '쿠카부라', type: 'bird', rarity: 'common', price: 2500, maintenanceCost: 34, popularity: 64, unlockLevel: 4, habitatType: 'forest', emoji: '🐦', description: '웃는 새', lifespan: 120 },
  { id: 'cockatoo', name: '앵무새코카투', type: 'bird', rarity: 'rare', price: 3800, maintenanceCost: 44, popularity: 68, unlockLevel: 5, habitatType: 'forest', emoji: '🦜', description: '장난기 많은 앵무새', lifespan: 200 },
  { id: 'emu', name: '에뮤', type: 'bird', rarity: 'common', price: 2800, maintenanceCost: 36, popularity: 60, unlockLevel: 4, habitatType: 'grassland', emoji: '🦤', description: '날지 못하는 큰 새', lifespan: 140 },
  { id: 'cassowary', name: '화식조', type: 'bird', rarity: 'epic', price: 11000, maintenanceCost: 102, popularity: 82, unlockLevel: 11, habitatType: 'jungle', emoji: '🦤', description: '위험한 새', specialAbility: '스릴 +20', lifespan: 150 },
  { id: 'sugar_glider', name: '슈가글라이더', type: 'mammal', rarity: 'rare', price: 3500, maintenanceCost: 42, popularity: 71, unlockLevel: 5, habitatType: 'forest', emoji: '🐿️', description: '날아다니는 다람쥐', lifespan: 100 },
  { id: 'frilled_lizard', name: '프릴도마뱀', type: 'reptile', rarity: 'rare', price: 4200, maintenanceCost: 48, popularity: 67, unlockLevel: 6, habitatType: 'desert', emoji: '🦎', description: '목덜미를 펼치는 도마뱀', lifespan: 120 },
  { id: 'saltwater_crocodile', name: '바다악어', type: 'reptile', rarity: 'epic', price: 13500, maintenanceCost: 125, popularity: 84, unlockLevel: 12, habitatType: 'wetland', emoji: '🐊', description: '세계 최대의 악어', specialAbility: '스릴 +28', lifespan: 250 },
  { id: 'flying_fox', name: '날여우박쥐', type: 'mammal', rarity: 'common', price: 1800, maintenanceCost: 28, popularity: 59, unlockLevel: 3, habitatType: 'jungle', emoji: '🦇', description: '큰 박쥐', lifespan: 110 },
];

// ==================== 극지방 (북극/남극) ====================
export const POLAR_ANIMALS: AnimalSpecies[] = [
  { id: 'polar_bear', name: '북극곰', type: 'mammal', rarity: 'legendary', price: 28000, maintenanceCost: 190, popularity: 93, unlockLevel: 14, habitatType: 'arctic', emoji: '🐻‍❄️', description: '하얀 북극곰', specialAbility: '평판 +3/일', lifespan: 220 },
  { id: 'penguin', name: '펭귄', type: 'bird', rarity: 'legendary', price: 25000, maintenanceCost: 180, popularity: 92, unlockLevel: 13, habitatType: 'arctic', emoji: '🐧', description: '귀여운 펭귄', specialAbility: '만족도 +10', lifespan: 180 },
  { id: 'emperor_penguin', name: '황제펭귄', type: 'bird', rarity: 'legendary', price: 30000, maintenanceCost: 195, popularity: 94, unlockLevel: 15, habitatType: 'arctic', emoji: '🐧', description: '가장 큰 펭귄', specialAbility: '겨울 방문객 +25%', lifespan: 200 },
  { id: 'seal', name: '물개', type: 'aquatic', rarity: 'epic', price: 11500, maintenanceCost: 108, popularity: 84, unlockLevel: 11, habitatType: 'arctic', emoji: '🦭', description: '귀여운 물개', specialAbility: '쇼 수익 +30%', lifespan: 170 },
  { id: 'walrus', name: '바다코끼리', type: 'aquatic', rarity: 'epic', price: 12500, maintenanceCost: 115, popularity: 85, unlockLevel: 12, habitatType: 'arctic', emoji: '🦭', description: '거대한 엄니', lifespan: 190 },
  { id: 'arctic_fox', name: '북극여우', type: 'mammal', rarity: 'rare', price: 6500, maintenanceCost: 68, popularity: 74, unlockLevel: 8, habitatType: 'arctic', emoji: '🦊', description: '하얀 여우', lifespan: 120 },
  { id: 'arctic_wolf', name: '북극늑대', type: 'mammal', rarity: 'epic', price: 10200, maintenanceCost: 98, popularity: 81, unlockLevel: 10, habitatType: 'arctic', emoji: '🐺', description: '북극의 늑대', lifespan: 150 },
  { id: 'musk_ox', name: '사향소', type: 'mammal', rarity: 'rare', price: 7200, maintenanceCost: 74, popularity: 72, unlockLevel: 9, habitatType: 'arctic', emoji: '🐂', description: '긴 털의 소', lifespan: 170 },
  { id: 'snowy_owl', name: '눈올빼미', type: 'bird', rarity: 'rare', price: 5800, maintenanceCost: 62, popularity: 73, unlockLevel: 8, habitatType: 'arctic', emoji: '🦉', description: '하얀 올빼미', lifespan: 140 },
  { id: 'reindeer', name: '순록', type: 'mammal', rarity: 'rare', price: 4800, maintenanceCost: 52, popularity: 70, unlockLevel: 7, habitatType: 'arctic', emoji: '🦌', description: '산타의 순록', lifespan: 150 },
  { id: 'arctic_hare', name: '북극토끼', type: 'mammal', rarity: 'common', price: 2200, maintenanceCost: 32, popularity: 62, unlockLevel: 4, habitatType: 'arctic', emoji: '🐰', description: '하얀 토끼', lifespan: 100 },
  { id: 'beluga', name: '벨루가고래', type: 'aquatic', rarity: 'legendary', price: 42000, maintenanceCost: 260, popularity: 96, unlockLevel: 18, habitatType: 'ocean', emoji: '🐋', description: '하얀 고래', specialAbility: '쇼 수익 +55%', lifespan: 280 },
  { id: 'narwhal', name: '일각고래', type: 'aquatic', rarity: 'legendary', price: 45000, maintenanceCost: 275, popularity: 97, unlockLevel: 19, habitatType: 'ocean', emoji: '🦄', description: '바다의 유니콘', specialAbility: '평판 +4/일', lifespan: 250 },
  { id: 'leopard_seal', name: '표범물범', type: 'aquatic', rarity: 'epic', price: 13000, maintenanceCost: 118, popularity: 83, unlockLevel: 12, habitatType: 'arctic', emoji: '🦭', description: '사냥꾼 물범', lifespan: 180 },
];

export const ALL_MORE_ANIMALS: AnimalSpecies[] = [
  ...SOUTH_AMERICA_ANIMALS,
  ...EUROPE_ANIMALS,
  ...AUSTRALIA_ANIMALS,
  ...POLAR_ANIMALS,
];
