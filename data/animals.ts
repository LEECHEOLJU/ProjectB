import type { AnimalSpecies } from '@/types';
import { ALL_EXTENDED_ANIMALS } from './animals_extended';
import { ALL_MORE_ANIMALS } from './animals_more';
import { ALL_OCEAN_MYTHICAL_ANIMALS } from './animals_ocean_mythical';

// 🎉 모든 동물 통합! 350+ 종!
export const ANIMAL_SPECIES: AnimalSpecies[] = [
  ...ALL_EXTENDED_ANIMALS,
  ...ALL_MORE_ANIMALS,
  ...ALL_OCEAN_MYTHICAL_ANIMALS,
].filter((animal, index, self) =>
  // 중복 제거 (ID 기준)
  index === self.findIndex((a) => a.id === animal.id)
);

// 🌍 대륙별 동물 분류
export const ANIMALS_BY_CONTINENT = {
  africa: ANIMAL_SPECIES.filter(a =>
    ['lion', 'elephant', 'giraffe', 'zebra', 'rhino', 'hippo', 'cheetah', 'leopard', 'hyena', 'wildebeest', 'gorilla', 'chimpanzee', 'orangutan', 'mandrill', 'lemur', 'ostrich', 'flamingo', 'african_grey_parrot', 'secretary_bird', 'hornbill', 'nile_crocodile', 'python', 'chameleon', 'tortoise', 'warthog', 'meerkat', 'african_wild_dog', 'aardvark', 'pangolin', 'okapi'].includes(a.id)
  ),
  asia: ANIMAL_SPECIES.filter(a =>
    ['panda', 'red_panda', 'tiger', 'snow_leopard', 'asian_elephant', 'orangutan_borneo', 'sun_bear', 'proboscis_monkey', 'komodo_dragon', 'gibbon', 'bengal_tiger', 'indian_rhinoceros', 'peacock', 'sloth_bear', 'king_cobra', 'snow_monkey', 'bactrian_camel', 'przewalski_horse', 'saiga_antelope', 'golden_eagle', 'clouded_leopard', 'binturong', 'asian_water_buffalo', 'fishing_cat', 'gaur'].includes(a.id)
  ),
  northAmerica: ANIMAL_SPECIES.filter(a =>
    ['grizzly_bear', 'american_bison', 'wolf', 'bald_eagle', 'moose', 'cougar', 'raccoon', 'beaver', 'caribou', 'lynx', 'pronghorn', 'armadillo', 'roadrunner', 'gila_monster', 'alligator', 'mountain_goat', 'black_bear', 'california_condor', 'bighorn_sheep', 'coyote'].includes(a.id)
  ),
  southAmerica: ANIMAL_SPECIES.filter(a =>
    ['jaguar', 'llama', 'capybara', 'sloth', 'toucan', 'macaw', 'tamarin', 'anaconda', 'spectacled_bear', 'giant_anteater', 'harpy_eagle', 'pink_dolphin', 'poison_dart_frog', 'armadillo_giant', 'ocelot', 'howler_monkey', 'puma', 'chinchilla', 'tapir', 'vampire_bat'].includes(a.id)
  ),
  europe: ANIMAL_SPECIES.filter(a =>
    ['european_brown_bear', 'red_deer', 'wild_boar', 'european_badger', 'red_fox', 'european_hedgehog', 'ibex', 'chamois', 'european_bison', 'lynx_european', 'wolf_european', 'otter', 'white_stork', 'golden_eagle_europe', 'marmot'].includes(a.id)
  ),
  australia: ANIMAL_SPECIES.filter(a =>
    ['kangaroo', 'koala', 'wombat', 'tasmanian_devil', 'platypus', 'echidna', 'dingo', 'kookaburra', 'cockatoo', 'emu', 'cassowary', 'sugar_glider', 'frilled_lizard', 'saltwater_crocodile', 'flying_fox'].includes(a.id)
  ),
  polar: ANIMAL_SPECIES.filter(a =>
    ['polar_bear', 'penguin', 'emperor_penguin', 'seal', 'walrus', 'arctic_fox', 'arctic_wolf', 'musk_ox', 'snowy_owl', 'reindeer', 'arctic_hare', 'beluga', 'narwhal', 'leopard_seal'].includes(a.id)
  ),
  ocean: ANIMAL_SPECIES.filter(a => a.type === 'aquatic'),
  mythical: ANIMAL_SPECIES.filter(a =>
    ['unicorn', 'dragon', 'phoenix', 'pegasus', 'griffin', 'white_tiger', 'golden_monkey', 'crystal_butterfly', 'rainbow_parrot', 'ice_wolf', 'thunder_eagle', 'shadow_panther', 'flame_fox', 'moon_rabbit', 'spirit_bear', 'sakura_deer'].includes(a.id)
  ),
  farm: ANIMAL_SPECIES.filter(a =>
    ['rabbit', 'chicken', 'sheep', 'pig', 'cow', 'horse', 'donkey', 'cat', 'dog', 'goat', 'hamster'].includes(a.id)
  ),
};

export function getAnimalsByRarity(rarity: string) {
  return ANIMAL_SPECIES.filter((animal) => animal.rarity === rarity);
}

export function getAnimalsByLevel(level: number) {
  return ANIMAL_SPECIES.filter((animal) => animal.unlockLevel <= level);
}

export function getAnimalsByContinent(continent: keyof typeof ANIMALS_BY_CONTINENT) {
  return ANIMALS_BY_CONTINENT[continent] || [];
}

export function getAnimalById(id: string) {
  return ANIMAL_SPECIES.find((animal) => animal.id === id);
}

export function getAnimalsByType(type: 'mammal' | 'bird' | 'reptile' | 'aquatic') {
  return ANIMAL_SPECIES.filter((animal) => animal.type === type);
}

// 📊 통계
export const ANIMAL_STATS = {
  total: ANIMAL_SPECIES.length,
  byRarity: {
    common: getAnimalsByRarity('common').length,
    rare: getAnimalsByRarity('rare').length,
    epic: getAnimalsByRarity('epic').length,
    legendary: getAnimalsByRarity('legendary').length,
  },
  byType: {
    mammal: ANIMAL_SPECIES.filter(a => a.type === 'mammal').length,
    bird: ANIMAL_SPECIES.filter(a => a.type === 'bird').length,
    reptile: ANIMAL_SPECIES.filter(a => a.type === 'reptile').length,
    aquatic: ANIMAL_SPECIES.filter(a => a.type === 'aquatic').length,
  },
  byContinent: {
    africa: ANIMALS_BY_CONTINENT.africa.length,
    asia: ANIMALS_BY_CONTINENT.asia.length,
    northAmerica: ANIMALS_BY_CONTINENT.northAmerica.length,
    southAmerica: ANIMALS_BY_CONTINENT.southAmerica.length,
    europe: ANIMALS_BY_CONTINENT.europe.length,
    australia: ANIMALS_BY_CONTINENT.australia.length,
    polar: ANIMALS_BY_CONTINENT.polar.length,
    ocean: ANIMALS_BY_CONTINENT.ocean.length,
    mythical: ANIMALS_BY_CONTINENT.mythical.length,
    farm: ANIMALS_BY_CONTINENT.farm.length,
  },
};

console.log(`🦁 Zoo Tycoon: ${ANIMAL_STATS.total}종의 동물이 로드되었습니다!`);
console.log('📍 대륙별:', ANIMAL_STATS.byContinent);
console.log('⭐ 등급별:', ANIMAL_STATS.byRarity);
console.log('🐾 타입별:', ANIMAL_STATS.byType);
