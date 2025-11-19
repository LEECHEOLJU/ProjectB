// Canvas 게임용 타입 정의

export interface Vector2D {
  x: number;
  y: number;
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Camera {
  x: number;
  y: number;
  zoom: number;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

export interface CanvasAnimal {
  id: string;
  speciesId: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  speed: number;
  direction: number; // 0-360도
  animationFrame: number;
  animationSpeed: number;
  enclosureId: string;
  isPerformingShow: boolean;
}

export interface CanvasBuilding {
  id: string;
  type: 'enclosure' | 'shop' | 'restaurant' | 'attraction' | 'entrance'
    | 'info_center' | 'restroom' | 'bench' | 'ice_cream' | 'souvenir'
    | 'aquarium' | 'reptile_house' | 'aviary' | 'vet_clinic' | 'admin_office'
    | 'ferris_wheel' | 'train_station' | 'playground' | 'photo_booth' | 'fountain';
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  name: string;
  animals?: string[]; // 동물 우리의 경우
}

export interface CanvasVisitor {
  id: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  speed: number;
  color: string;
  state: 'walking' | 'watching' | 'eating';
  stateTimer: number;
}

export interface ShowEffect {
  x: number;
  y: number;
  type: 'fireworks' | 'hearts' | 'stars' | 'sparkles';
  startTime: number;
  duration: number;
  particles: Particle[];
}
