import type { GameSpeed, Weather, Season } from '@/types';

/**
 * 게임 속도에 따른 틱 간격 (ms)
 */
export function getTickInterval(speed: GameSpeed): number {
  switch (speed) {
    case 0: return Infinity; // 일시정지
    case 1: return 1000; // 1초
    case 2: return 500;  // 0.5초
    case 3: return 250;  // 0.25초
    default: return 1000;
  }
}

/**
 * 날씨에 따른 방문객 수 조정
 */
export function getWeatherMultiplier(weather: Weather): number {
  switch (weather) {
    case 'sunny': return 1.2;
    case 'cloudy': return 1.0;
    case 'rainy': return 0.6;
    case 'snowy': return 0.8;
    default: return 1.0;
  }
}

/**
 * 계절에 따른 방문객 수 조정
 */
export function getSeasonMultiplier(season: Season): number {
  switch (season) {
    case 'spring': return 1.1;
    case 'summer': return 1.3;
    case 'autumn': return 1.0;
    case 'winter': return 0.8;
    default: return 1.0;
  }
}

/**
 * 랜덤 날씨 생성
 */
export function generateRandomWeather(): Weather {
  const rand = Math.random();
  if (rand < 0.5) return 'sunny';
  if (rand < 0.75) return 'cloudy';
  if (rand < 0.9) return 'rainy';
  return 'snowy';
}

/**
 * 게임 시간에서 계절 계산
 */
export function getSeason(gameTime: number): Season {
  const dayOfYear = Math.floor(gameTime / (24 * 60)) % 365;

  if (dayOfYear < 90) return 'spring';
  if (dayOfYear < 180) return 'summer';
  if (dayOfYear < 270) return 'autumn';
  return 'winter';
}

/**
 * 레벨업에 필요한 경험치
 */
export function getRequiredExperience(level: number): number {
  return Math.floor(100 * Math.pow(1.5, level - 1));
}

/**
 * 동물 성장 단계 계산
 */
export function getAnimalStage(age: number, lifespan: number): 'baby' | 'teen' | 'adult' {
  const ratio = age / lifespan;
  if (ratio < 0.2) return 'baby';
  if (ratio < 0.5) return 'teen';
  return 'adult';
}

/**
 * 랜덤 성별 생성
 */
export function getRandomGender(): 'male' | 'female' {
  return Math.random() < 0.5 ? 'male' : 'female';
}

/**
 * UUID 생성
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * 범위 내 랜덤 정수
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 확률 체크 (0-1)
 */
export function chance(probability: number): boolean {
  return Math.random() < probability;
}
