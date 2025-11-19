// 동물 2D 스프라이트 렌더러
import type { CanvasAnimal } from './types';
import { ANIMAL_SPECIES } from '@/data/animals';

export class AnimalRenderer {
  /**
   * 동물을 캔버스에 그립니다
   */
  static drawAnimal(
    ctx: CanvasRenderingContext2D,
    animal: CanvasAnimal,
    cameraX: number,
    cameraY: number,
    zoom: number
  ): void {
    const species = ANIMAL_SPECIES.find(s => s.id === animal.speciesId);
    if (!species) return;

    const screenX = (animal.x - cameraX) * zoom;
    const screenY = (animal.y - cameraY) * zoom;
    const size = 40 * zoom;

    ctx.save();
    ctx.translate(screenX, screenY);

    // 동물 타입별 렌더링
    switch (species.type) {
      case 'mammal':
        this.drawMammal(ctx, species.id, size, animal.animationFrame, animal.isPerformingShow);
        break;
      case 'bird':
        this.drawBird(ctx, species.id, size, animal.animationFrame, animal.isPerformingShow);
        break;
      case 'reptile':
        this.drawReptile(ctx, species.id, size, animal.animationFrame);
        break;
      case 'aquatic':
        this.drawAquatic(ctx, species.id, size, animal.animationFrame, animal.isPerformingShow);
        break;
    }

    // 이름 표시
    ctx.fillStyle = '#000';
    ctx.font = `${10 * zoom}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(species.name, 0, size + 15 * zoom);

    ctx.restore();
  }

  /**
   * 포유류 그리기
   */
  private static drawMammal(
    ctx: CanvasRenderingContext2D,
    speciesId: string,
    size: number,
    frame: number,
    isPerforming: boolean
  ): void {
    const bounce = Math.sin(frame * 0.2) * 2;

    switch (speciesId) {
      // Africa
      case 'lion':
        this.drawLion(ctx, size, bounce, isPerforming);
        break;
      case 'elephant':
      case 'asian_elephant':
        this.drawElephant(ctx, size, bounce, isPerforming);
        break;
      case 'giraffe':
        this.drawGiraffe(ctx, size, bounce);
        break;
      case 'zebra':
        this.drawZebra(ctx, size, bounce);
        break;
      case 'rhino':
      case 'indian_rhinoceros':
        this.drawRhino(ctx, size, bounce);
        break;
      case 'hippo':
        this.drawHippo(ctx, size, bounce);
        break;
      case 'cheetah':
      case 'leopard':
      case 'snow_leopard':
      case 'clouded_leopard':
        this.drawCheetah(ctx, size, bounce, speciesId);
        break;
      case 'gorilla':
      case 'chimpanzee':
        this.drawGorilla(ctx, size, bounce);
        break;
      case 'orangutan':
      case 'orangutan_borneo':
        this.drawOrangutan(ctx, size, bounce);
        break;
      case 'flamingo':
        this.drawFlamingo(ctx, size, bounce);
        break;

      // Asia
      case 'panda':
        this.drawPanda(ctx, size, bounce, isPerforming);
        break;
      case 'red_panda':
        this.drawRedPanda(ctx, size, bounce);
        break;
      case 'tiger':
      case 'bengal_tiger':
      case 'white_tiger':
        this.drawTiger(ctx, size, bounce, speciesId);
        break;
      case 'komodo_dragon':
        this.drawKomodoDragon(ctx, size, bounce);
        break;
      case 'sun_bear':
      case 'sloth_bear':
        this.drawSunBear(ctx, size, bounce);
        break;

      // North America
      case 'grizzly_bear':
      case 'black_bear':
      case 'polar_bear':
      case 'european_brown_bear':
        this.drawBear(ctx, size, bounce, speciesId);
        break;
      case 'american_bison':
      case 'european_bison':
        this.drawBison(ctx, size, bounce);
        break;
      case 'wolf':
      case 'arctic_wolf':
      case 'wolf_european':
      case 'ice_wolf':
        this.drawWolf(ctx, size, bounce, speciesId);
        break;
      case 'moose':
      case 'caribou':
      case 'reindeer':
        this.drawMoose(ctx, size, bounce);
        break;
      case 'cougar':
      case 'puma':
        this.drawCougar(ctx, size, bounce);
        break;
      case 'raccoon':
        this.drawRaccoon(ctx, size, bounce);
        break;
      case 'beaver':
        this.drawBeaver(ctx, size, bounce);
        break;

      // South America
      case 'jaguar':
      case 'ocelot':
      case 'shadow_panther':
        this.drawJaguar(ctx, size, bounce, speciesId);
        break;
      case 'llama':
        this.drawLlama(ctx, size, bounce);
        break;
      case 'capybara':
        this.drawCapybara(ctx, size, bounce);
        break;
      case 'sloth':
        this.drawSloth(ctx, size, bounce);
        break;
      case 'giant_anteater':
        this.drawAnteater(ctx, size, bounce);
        break;

      // Australia
      case 'kangaroo':
        this.drawKangaroo(ctx, size, bounce);
        break;
      case 'koala':
        this.drawKoala(ctx, size, bounce);
        break;
      case 'wombat':
        this.drawWombat(ctx, size, bounce);
        break;
      case 'tasmanian_devil':
        this.drawTasmanianDevil(ctx, size, bounce);
        break;
      case 'platypus':
        this.drawPlatypus(ctx, size, bounce);
        break;
      case 'dingo':
        this.drawDingo(ctx, size, bounce);
        break;

      // Polar
      case 'seal':
      case 'leopard_seal':
        this.drawSeal(ctx, size, bounce);
        break;
      case 'walrus':
        this.drawWalrus(ctx, size, bounce);
        break;
      case 'arctic_fox':
      case 'red_fox':
      case 'flame_fox':
        this.drawFox(ctx, size, bounce, speciesId);
        break;

      // Mythical
      case 'unicorn':
        this.drawUnicorn(ctx, size, bounce, isPerforming);
        break;
      case 'dragon':
        this.drawDragon(ctx, size, bounce, isPerforming);
        break;
      case 'pegasus':
        this.drawPegasus(ctx, size, bounce, isPerforming);
        break;
      case 'griffin':
        this.drawGriffin(ctx, size, bounce, isPerforming);
        break;

      // Farm animals
      case 'horse':
      case 'przewalski_horse':
        this.drawHorse(ctx, size, bounce);
        break;
      case 'cow':
        this.drawCow(ctx, size, bounce);
        break;
      case 'pig':
        this.drawPig(ctx, size, bounce);
        break;
      case 'sheep':
        this.drawSheep(ctx, size, bounce);
        break;
      case 'goat':
      case 'mountain_goat':
      case 'ibex':
        this.drawGoat(ctx, size, bounce);
        break;
      case 'rabbit':
      case 'moon_rabbit':
      case 'arctic_hare':
        this.drawRabbit(ctx, size, bounce, speciesId);
        break;

      default:
        this.drawGenericMammal(ctx, size, bounce);
    }
  }

  private static drawLion(ctx: CanvasRenderingContext2D, size: number, bounce: number, isPerforming: boolean): void {
    // 몸통
    ctx.fillStyle = isPerforming ? '#FFA500' : '#DAA520';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.4, size * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // 갈기
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const distance = size * 0.35;
      ctx.ellipse(
        Math.cos(angle) * distance * 0.3,
        bounce - size * 0.15 + Math.sin(angle) * distance * 0.3,
        size * 0.15,
        size * 0.15,
        angle,
        0,
        Math.PI * 2
      );
    }
    ctx.fill();

    // 얼굴
    ctx.fillStyle = '#DAA520';
    ctx.beginPath();
    ctx.arc(0, bounce - size * 0.15, size * 0.25, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.1, bounce - size * 0.2, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.1, bounce - size * 0.2, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.arc(0, bounce - size * 0.1, size * 0.06, 0, Math.PI * 2);
    ctx.fill();

    // 쇼 중일 때 포효 이펙트
    if (isPerforming) {
      ctx.strokeStyle = 'rgba(255, 165, 0, 0.5)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, bounce - size * 0.1, size * 0.6 + Math.sin(Date.now() * 0.01) * 10, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  private static drawElephant(ctx: CanvasRenderingContext2D, size: number, bounce: number, isPerforming: boolean): void {
    // 몸통
    ctx.fillStyle = '#708090';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.45, size * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.arc(size * 0.3, bounce - size * 0.2, size * 0.28, 0, Math.PI * 2);
    ctx.fill();

    // 코 (트럼펫)
    const trunkCurve = isPerforming ? Math.sin(Date.now() * 0.005) * 20 : 0;
    ctx.strokeStyle = '#708090';
    ctx.lineWidth = size * 0.12;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(size * 0.35, bounce - size * 0.1);
    ctx.quadraticCurveTo(
      size * 0.5 + trunkCurve,
      bounce + size * 0.2,
      size * 0.4,
      bounce + size * 0.5
    );
    ctx.stroke();

    // 귀
    ctx.fillStyle = '#708090';
    ctx.beginPath();
    ctx.ellipse(-size * 0.15, bounce - size * 0.3, size * 0.25, size * 0.3, -0.3, 0, Math.PI * 2);
    ctx.ellipse(size * 0.45, bounce - size * 0.3, size * 0.25, size * 0.3, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.25, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 공 들고 있으면 (쇼 중)
    if (isPerforming) {
      ctx.fillStyle = '#FF6347';
      ctx.beginPath();
      ctx.arc(size * 0.4, bounce + size * 0.55, size * 0.15, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private static drawPanda(ctx: CanvasRenderingContext2D, size: number, bounce: number, isPerforming: boolean): void {
    // 몸통
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.35, size * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.arc(0, bounce - size * 0.25, size * 0.3, 0, Math.PI * 2);
    ctx.fill();

    // 눈 주변 (검은 부분)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.ellipse(-size * 0.12, bounce - size * 0.28, size * 0.12, size * 0.15, 0, 0, Math.PI * 2);
    ctx.ellipse(size * 0.12, bounce - size * 0.28, size * 0.12, size * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(-size * 0.12, bounce - size * 0.28, size * 0.06, 0, Math.PI * 2);
    ctx.arc(size * 0.12, bounce - size * 0.28, size * 0.06, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.12, bounce - size * 0.28, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.12, bounce - size * 0.28, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 귀
    ctx.beginPath();
    ctx.arc(-size * 0.2, bounce - size * 0.45, size * 0.1, 0, Math.PI * 2);
    ctx.arc(size * 0.2, bounce - size * 0.45, size * 0.1, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.beginPath();
    ctx.arc(0, bounce - size * 0.15, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 팔 (검은색)
    ctx.beginPath();
    ctx.arc(-size * 0.3, bounce + size * 0.1, size * 0.12, 0, Math.PI * 2);
    ctx.arc(size * 0.3, bounce + size * 0.1, size * 0.12, 0, Math.PI * 2);
    ctx.fill();

    // 대나무 들고 있으면 (쇼 중)
    if (isPerforming) {
      ctx.strokeStyle = '#228B22';
      ctx.lineWidth = size * 0.08;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-size * 0.4, bounce - size * 0.1);
      ctx.lineTo(-size * 0.4, bounce + size * 0.4);
      ctx.stroke();

      // 대나무 잎
      ctx.fillStyle = '#32CD32';
      ctx.beginPath();
      ctx.moveTo(-size * 0.4, bounce - size * 0.15);
      ctx.lineTo(-size * 0.5, bounce - size * 0.2);
      ctx.lineTo(-size * 0.4, bounce - size * 0.1);
      ctx.fill();
    }
  }

  private static drawGiraffe(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통
    ctx.fillStyle = '#DAA520';
    ctx.beginPath();
    ctx.ellipse(0, bounce + size * 0.2, size * 0.3, size * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();

    // 목
    ctx.fillRect(-size * 0.08, bounce - size * 0.5, size * 0.16, size * 0.7);

    // 머리
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.6, size * 0.15, size * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();

    // 뿔
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.arc(-size * 0.08, bounce - size * 0.75, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.08, bounce - size * 0.75, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 무늬
    ctx.fillStyle = '#8B4513';
    for (let i = 0; i < 5; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * size * 0.2;
      ctx.beginPath();
      ctx.arc(
        Math.cos(angle) * distance,
        bounce + size * 0.2 + Math.sin(angle) * distance,
        size * 0.06,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.06, bounce - size * 0.62, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.06, bounce - size * 0.62, size * 0.03, 0, Math.PI * 2);
    ctx.fill();
  }

  private static drawGenericMammal(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 기본 포유류 (갈색 원형)
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.35, size * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.arc(size * 0.2, bounce - size * 0.15, size * 0.2, 0, Math.PI * 2);
    ctx.fill();

    // 귀
    ctx.beginPath();
    ctx.arc(size * 0.1, bounce - size * 0.3, size * 0.1, 0, Math.PI * 2);
    ctx.arc(size * 0.3, bounce - size * 0.3, size * 0.1, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.15, bounce - size * 0.18, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.25, bounce - size * 0.18, size * 0.04, 0, Math.PI * 2);
    ctx.fill();
  }

  // ===== AFRICAN ANIMALS =====

  private static drawZebra(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (흰색 베이스)
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.4, size * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // 목
    ctx.fillRect(-size * 0.1, bounce - size * 0.4, size * 0.2, size * 0.4);

    // 머리
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.5, size * 0.18, size * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();

    // 검은 줄무늬
    ctx.fillStyle = '#000';
    for (let i = 0; i < 6; i++) {
      const y = bounce - size * 0.2 + i * size * 0.12;
      ctx.fillRect(-size * 0.35, y, size * 0.7, size * 0.05);
    }

    // 목 줄무늬
    for (let i = 0; i < 4; i++) {
      const y = bounce - size * 0.35 + i * size * 0.1;
      ctx.fillRect(-size * 0.1, y, size * 0.2, size * 0.04);
    }

    // 갈기
    for (let i = 0; i < 5; i++) {
      const y = bounce - size * 0.5 + i * size * 0.08;
      ctx.fillRect(-size * 0.05, y, size * 0.1, size * 0.06);
    }

    // 다리
    ctx.fillStyle = '#FFF';
    ctx.fillRect(-size * 0.25, bounce + size * 0.2, size * 0.08, size * 0.25);
    ctx.fillRect(size * 0.17, bounce + size * 0.2, size * 0.08, size * 0.25);

    // 다리 줄무늬
    ctx.fillStyle = '#000';
    for (let i = 0; i < 3; i++) {
      ctx.fillRect(-size * 0.25, bounce + size * 0.25 + i * size * 0.08, size * 0.08, size * 0.03);
      ctx.fillRect(size * 0.17, bounce + size * 0.25 + i * size * 0.08, size * 0.08, size * 0.03);
    }

    // 눈
    ctx.beginPath();
    ctx.arc(-size * 0.08, bounce - size * 0.52, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.08, bounce - size * 0.52, size * 0.04, 0, Math.PI * 2);
    ctx.fill();
  }

  private static drawRhino(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통
    ctx.fillStyle = '#808080';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.5, size * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.ellipse(size * 0.35, bounce - size * 0.1, size * 0.3, size * 0.25, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // 뿔 (큰 뿔)
    ctx.fillStyle = '#696969';
    ctx.beginPath();
    ctx.moveTo(size * 0.45, bounce - size * 0.25);
    ctx.lineTo(size * 0.5, bounce - size * 0.5);
    ctx.lineTo(size * 0.55, bounce - size * 0.25);
    ctx.closePath();
    ctx.fill();

    // 작은 뿔
    ctx.beginPath();
    ctx.moveTo(size * 0.4, bounce - size * 0.2);
    ctx.lineTo(size * 0.42, bounce - size * 0.35);
    ctx.lineTo(size * 0.44, bounce - size * 0.2);
    ctx.closePath();
    ctx.fill();

    // 다리 (굵은 기둥)
    ctx.fillStyle = '#808080';
    ctx.fillRect(-size * 0.35, bounce + size * 0.25, size * 0.15, size * 0.3);
    ctx.fillRect(-size * 0.1, bounce + size * 0.25, size * 0.15, size * 0.3);
    ctx.fillRect(size * 0.15, bounce + size * 0.25, size * 0.15, size * 0.3);
    ctx.fillRect(size * 0.4, bounce + size * 0.25, size * 0.15, size * 0.3);

    // 귀
    ctx.beginPath();
    ctx.ellipse(size * 0.15, bounce - size * 0.3, size * 0.12, size * 0.08, -0.5, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.3, bounce - size * 0.18, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 주름
    ctx.strokeStyle = '#696969';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-size * 0.2, bounce);
    ctx.lineTo(size * 0.2, bounce);
    ctx.moveTo(-size * 0.15, bounce + size * 0.15);
    ctx.lineTo(size * 0.25, bounce + size * 0.15);
    ctx.stroke();
  }

  private static drawHippo(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (크고 둥글게)
    ctx.fillStyle = '#8B7D6B';
    ctx.beginPath();
    ctx.ellipse(0, bounce + size * 0.1, size * 0.5, size * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리 (큰 사각형 느낌)
    ctx.beginPath();
    ctx.ellipse(size * 0.3, bounce - size * 0.15, size * 0.35, size * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // 주둥이
    ctx.fillStyle = '#B8A99A';
    ctx.beginPath();
    ctx.ellipse(size * 0.5, bounce - size * 0.1, size * 0.2, size * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();

    // 콧구멍
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.52, bounce - size * 0.15, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.58, bounce - size * 0.15, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 눈 (위로 툭 튀어나온)
    ctx.fillStyle = '#8B7D6B';
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.35, size * 0.08, 0, Math.PI * 2);
    ctx.arc(size * 0.4, bounce - size * 0.35, size * 0.08, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.35, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.4, bounce - size * 0.35, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 귀
    ctx.fillStyle = '#8B7D6B';
    ctx.beginPath();
    ctx.arc(size * 0.15, bounce - size * 0.35, size * 0.06, 0, Math.PI * 2);
    ctx.fill();

    // 다리 (굵고 짧게)
    ctx.fillRect(-size * 0.35, bounce + size * 0.35, size * 0.12, size * 0.2);
    ctx.fillRect(-size * 0.15, bounce + size * 0.35, size * 0.12, size * 0.2);
    ctx.fillRect(size * 0.1, bounce + size * 0.35, size * 0.12, size * 0.2);
    ctx.fillRect(size * 0.3, bounce + size * 0.35, size * 0.12, size * 0.2);
  }

  private static drawCheetah(ctx: CanvasRenderingContext2D, size: number, bounce: number, speciesId: string): void {
    // 색상 선택
    let bodyColor = '#F5DEB3';
    let spotColor = '#000';

    if (speciesId === 'leopard') {
      bodyColor = '#DAA520';
    } else if (speciesId === 'snow_leopard') {
      bodyColor = '#E0E0E0';
      spotColor = '#808080';
    } else if (speciesId === 'clouded_leopard') {
      bodyColor = '#D2B48C';
    }

    // 몸통 (길쭉하게)
    ctx.fillStyle = bodyColor;
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.45, size * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.arc(size * 0.35, bounce - size * 0.15, size * 0.22, 0, Math.PI * 2);
    ctx.fill();

    // 귀
    ctx.beginPath();
    ctx.moveTo(size * 0.25, bounce - size * 0.35);
    ctx.lineTo(size * 0.2, bounce - size * 0.45);
    ctx.lineTo(size * 0.3, bounce - size * 0.35);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(size * 0.45, bounce - size * 0.35);
    ctx.lineTo(size * 0.5, bounce - size * 0.45);
    ctx.lineTo(size * 0.4, bounce - size * 0.35);
    ctx.closePath();
    ctx.fill();

    // 점무늬
    ctx.fillStyle = spotColor;
    for (let i = 0; i < 12; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * size * 0.35;
      ctx.beginPath();
      ctx.arc(
        Math.cos(angle) * distance,
        bounce + Math.sin(angle) * distance * 0.6,
        size * 0.04,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // 눈
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(size * 0.3, bounce - size * 0.18, size * 0.06, 0, Math.PI * 2);
    ctx.arc(size * 0.42, bounce - size * 0.18, size * 0.06, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.3, bounce - size * 0.18, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.42, bounce - size * 0.18, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 꼬리
    ctx.strokeStyle = bodyColor;
    ctx.lineWidth = size * 0.08;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.35, bounce + size * 0.1);
    ctx.quadraticCurveTo(-size * 0.6, bounce + size * 0.3, -size * 0.7, bounce);
    ctx.stroke();
  }

  private static drawGorilla(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (크고 검은색)
    ctx.fillStyle = '#2F2F2F';
    ctx.beginPath();
    ctx.ellipse(0, bounce + size * 0.1, size * 0.4, size * 0.45, 0, 0, Math.PI * 2);
    ctx.fill();

    // 가슴 (은백색)
    ctx.fillStyle = '#A9A9A9';
    ctx.beginPath();
    ctx.ellipse(0, bounce + size * 0.15, size * 0.25, size * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.fillStyle = '#2F2F2F';
    ctx.beginPath();
    ctx.arc(0, bounce - size * 0.3, size * 0.3, 0, Math.PI * 2);
    ctx.fill();

    // 얼굴
    ctx.fillStyle = '#1C1C1C';
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.25, size * 0.2, size * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();

    // 눈썹뼈 (돌출)
    ctx.fillStyle = '#2F2F2F';
    ctx.fillRect(-size * 0.2, bounce - size * 0.4, size * 0.4, size * 0.1);

    // 눈
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.arc(-size * 0.1, bounce - size * 0.32, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.1, bounce - size * 0.32, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.1, bounce - size * 0.32, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.1, bounce - size * 0.32, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.2, size * 0.08, size * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();

    // 콧구멍
    ctx.fillStyle = '#1C1C1C';
    ctx.beginPath();
    ctx.arc(-size * 0.04, bounce - size * 0.2, size * 0.02, 0, Math.PI * 2);
    ctx.arc(size * 0.04, bounce - size * 0.2, size * 0.02, 0, Math.PI * 2);
    ctx.fill();

    // 팔 (길게)
    ctx.fillStyle = '#2F2F2F';
    ctx.beginPath();
    ctx.ellipse(-size * 0.35, bounce + size * 0.3, size * 0.12, size * 0.35, 0.3, 0, Math.PI * 2);
    ctx.ellipse(size * 0.35, bounce + size * 0.3, size * 0.12, size * 0.35, -0.3, 0, Math.PI * 2);
    ctx.fill();
  }

  private static drawOrangutan(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통
    ctx.fillStyle = '#CD5C5C';
    ctx.beginPath();
    ctx.ellipse(0, bounce + size * 0.1, size * 0.35, size * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.arc(0, bounce - size * 0.25, size * 0.28, 0, Math.PI * 2);
    ctx.fill();

    // 볼 (수컷의 뺨 패드)
    ctx.fillStyle = '#A0522D';
    ctx.beginPath();
    ctx.arc(-size * 0.28, bounce - size * 0.25, size * 0.15, 0, Math.PI * 2);
    ctx.arc(size * 0.28, bounce - size * 0.25, size * 0.15, 0, Math.PI * 2);
    ctx.fill();

    // 얼굴
    ctx.fillStyle = '#D2691E';
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.22, size * 0.18, size * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.arc(-size * 0.08, bounce - size * 0.26, size * 0.06, 0, Math.PI * 2);
    ctx.arc(size * 0.08, bounce - size * 0.26, size * 0.06, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.08, bounce - size * 0.26, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.08, bounce - size * 0.26, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.18, size * 0.05, size * 0.04, 0, 0, Math.PI * 2);
    ctx.fill();

    // 입
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, bounce - size * 0.15, size * 0.08, 0.2, Math.PI - 0.2);
    ctx.stroke();

    // 긴 팔
    ctx.fillStyle = '#CD5C5C';
    ctx.beginPath();
    ctx.ellipse(-size * 0.4, bounce + size * 0.35, size * 0.1, size * 0.4, 0.4, 0, Math.PI * 2);
    ctx.ellipse(size * 0.4, bounce + size * 0.35, size * 0.1, size * 0.4, -0.4, 0, Math.PI * 2);
    ctx.fill();
  }

  private static drawFlamingo(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.25, size * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // 긴 목
    ctx.strokeStyle = '#FF69B4';
    ctx.lineWidth = size * 0.08;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(0, bounce - size * 0.2);
    ctx.quadraticCurveTo(size * 0.15, bounce - size * 0.5, size * 0.25, bounce - size * 0.6);
    ctx.stroke();

    // 머리
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.65, size * 0.12, 0, Math.PI * 2);
    ctx.fill();

    // 부리 (구부러진)
    ctx.strokeStyle = '#000';
    ctx.lineWidth = size * 0.06;
    ctx.beginPath();
    ctx.moveTo(size * 0.3, bounce - size * 0.65);
    ctx.quadraticCurveTo(size * 0.42, bounce - size * 0.67, size * 0.4, bounce - size * 0.6);
    ctx.stroke();

    // 부리 끝 (검은색)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.4, bounce - size * 0.6, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.27, bounce - size * 0.68, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 다리 (긴 핑크색)
    ctx.strokeStyle = '#FFB6C1';
    ctx.lineWidth = size * 0.04;
    ctx.beginPath();
    ctx.moveTo(-size * 0.05, bounce + size * 0.25);
    ctx.lineTo(-size * 0.05, bounce + size * 0.7);
    ctx.moveTo(size * 0.05, bounce + size * 0.25);
    ctx.lineTo(size * 0.05, bounce + size * 0.7);
    ctx.stroke();

    // 발
    ctx.strokeStyle = '#FF69B4';
    ctx.lineWidth = size * 0.03;
    ctx.beginPath();
    ctx.moveTo(-size * 0.05, bounce + size * 0.7);
    ctx.lineTo(-size * 0.15, bounce + size * 0.75);
    ctx.moveTo(-size * 0.05, bounce + size * 0.7);
    ctx.lineTo(size * 0.05, bounce + size * 0.75);
    ctx.stroke();

    // 날개
    ctx.fillStyle = '#FF1493';
    ctx.beginPath();
    ctx.ellipse(-size * 0.2, bounce, size * 0.25, size * 0.15, -0.3, 0, Math.PI * 2);
    ctx.fill();
  }

  // ===== ASIAN ANIMALS =====

  private static drawRedPanda(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (적갈색)
    ctx.fillStyle = '#CD5C5C';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.3, size * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.arc(size * 0.2, bounce - size * 0.2, size * 0.2, 0, Math.PI * 2);
    ctx.fill();

    // 얼굴 (흰색 무늬)
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.ellipse(size * 0.2, bounce - size * 0.18, size * 0.15, size * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();

    // 눈 주변 (검은 마스크)
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.ellipse(size * 0.12, bounce - size * 0.22, size * 0.08, size * 0.1, 0, 0, Math.PI * 2);
    ctx.ellipse(size * 0.28, bounce - size * 0.22, size * 0.08, size * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.12, bounce - size * 0.22, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.28, bounce - size * 0.22, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 귀
    ctx.fillStyle = '#CD5C5C';
    ctx.beginPath();
    ctx.arc(size * 0.08, bounce - size * 0.35, size * 0.08, 0, Math.PI * 2);
    ctx.arc(size * 0.32, bounce - size * 0.35, size * 0.08, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.2, bounce - size * 0.12, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 꼬리 (줄무늬)
    ctx.strokeStyle = '#CD5C5C';
    ctx.lineWidth = size * 0.12;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.2, bounce + size * 0.1);
    ctx.quadraticCurveTo(-size * 0.4, bounce + size * 0.3, -size * 0.5, bounce + size * 0.15);
    ctx.stroke();

    // 꼬리 줄무늬
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = size * 0.08;
    for (let i = 0; i < 4; i++) {
      const t = i * 0.25;
      const x = -size * 0.2 - t * 0.3;
      const y = bounce + size * 0.1 + Math.sin(t * Math.PI) * size * 0.2;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.06, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private static drawTiger(ctx: CanvasRenderingContext2D, size: number, bounce: number, speciesId: string): void {
    // 색상
    let bodyColor = '#FFA500';
    if (speciesId === 'white_tiger') {
      bodyColor = '#F0F0F0';
    }

    // 몸통
    ctx.fillStyle = bodyColor;
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.45, size * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.arc(size * 0.35, bounce - size * 0.2, size * 0.25, 0, Math.PI * 2);
    ctx.fill();

    // 검은 줄무늬 (몸통)
    ctx.fillStyle = '#000';
    for (let i = 0; i < 8; i++) {
      const x = -size * 0.3 + i * size * 0.08;
      ctx.fillRect(x, bounce - size * 0.1, size * 0.04, size * 0.3);
    }

    // 머리 줄무늬
    for (let i = 0; i < 3; i++) {
      const angle = -Math.PI / 4 + i * Math.PI / 6;
      ctx.save();
      ctx.translate(size * 0.35, bounce - size * 0.2);
      ctx.rotate(angle);
      ctx.fillRect(-size * 0.15, -size * 0.02, size * 0.2, size * 0.04);
      ctx.restore();
    }

    // 귀
    ctx.fillStyle = bodyColor;
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.42, size * 0.1, 0, Math.PI * 2);
    ctx.arc(size * 0.45, bounce - size * 0.42, size * 0.1, 0, Math.PI * 2);
    ctx.fill();

    // 귀 검은 부분
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.42, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.45, bounce - size * 0.42, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(size * 0.28, bounce - size * 0.24, size * 0.07, 0, Math.PI * 2);
    ctx.arc(size * 0.42, bounce - size * 0.24, size * 0.07, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.28, bounce - size * 0.24, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.42, bounce - size * 0.24, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.moveTo(size * 0.35, bounce - size * 0.12);
    ctx.lineTo(size * 0.32, bounce - size * 0.08);
    ctx.lineTo(size * 0.38, bounce - size * 0.08);
    ctx.closePath();
    ctx.fill();

    // 수염
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath();
      ctx.moveTo(size * 0.35, bounce - size * 0.1 + i * size * 0.03);
      ctx.lineTo(size * 0.6, bounce - size * 0.1 + i * size * 0.05);
      ctx.stroke();
    }
  }

  private static drawKomodoDragon(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (회갈색)
    ctx.fillStyle = '#8B7355';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.5, size * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리 (길쭉한)
    ctx.beginPath();
    ctx.ellipse(size * 0.4, bounce - size * 0.05, size * 0.25, size * 0.15, 0.1, 0, Math.PI * 2);
    ctx.fill();

    // 비늘 무늬
    ctx.fillStyle = '#696969';
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 3; j++) {
        const x = -size * 0.35 + i * size * 0.08;
        const y = bounce - size * 0.08 + j * size * 0.08;
        ctx.beginPath();
        ctx.arc(x, y, size * 0.03, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 다리 (짧고 튼튼)
    ctx.fillStyle = '#8B7355';
    ctx.fillRect(-size * 0.3, bounce + size * 0.12, size * 0.1, size * 0.15);
    ctx.fillRect(size * 0.2, bounce + size * 0.12, size * 0.1, size * 0.15);

    // 발톱
    ctx.fillStyle = '#000';
    for (let i = 0; i < 3; i++) {
      ctx.fillRect(-size * 0.3 + i * size * 0.03, bounce + size * 0.24, size * 0.02, size * 0.05);
      ctx.fillRect(size * 0.2 + i * size * 0.03, bounce + size * 0.24, size * 0.02, size * 0.05);
    }

    // 눈
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(size * 0.45, bounce - size * 0.08, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.45, bounce - size * 0.08, size * 0.02, 0, Math.PI * 2);
    ctx.fill();

    // 긴 혀
    ctx.strokeStyle = '#FF0000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(size * 0.55, bounce - size * 0.05);
    ctx.lineTo(size * 0.7, bounce - size * 0.05);
    ctx.stroke();

    // 꼬리
    ctx.strokeStyle = '#8B7355';
    ctx.lineWidth = size * 0.1;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.4, bounce);
    ctx.quadraticCurveTo(-size * 0.7, bounce + size * 0.2, -size * 0.8, bounce);
    ctx.stroke();
  }

  private static drawSunBear(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (검은색)
    ctx.fillStyle = '#1C1C1C';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.35, size * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // 가슴 노란색 V자 무늬
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.moveTo(-size * 0.15, bounce - size * 0.1);
    ctx.lineTo(0, bounce + size * 0.2);
    ctx.lineTo(size * 0.15, bounce - size * 0.1);
    ctx.lineTo(0, bounce);
    ctx.closePath();
    ctx.fill();

    // 머리
    ctx.fillStyle = '#1C1C1C';
    ctx.beginPath();
    ctx.arc(0, bounce - size * 0.35, size * 0.25, 0, Math.PI * 2);
    ctx.fill();

    // 주둥이 (연한 갈색)
    ctx.fillStyle = '#D2691E';
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.3, size * 0.15, size * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (둥글고 작게)
    ctx.fillStyle = '#1C1C1C';
    ctx.beginPath();
    ctx.arc(-size * 0.18, bounce - size * 0.52, size * 0.1, 0, Math.PI * 2);
    ctx.arc(size * 0.18, bounce - size * 0.52, size * 0.1, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.08, bounce - size * 0.38, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.08, bounce - size * 0.38, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(0, bounce - size * 0.25, size * 0.06, 0, Math.PI * 2);
    ctx.fill();
  }

  // ===== NORTH AMERICAN ANIMALS =====

  private static drawBear(ctx: CanvasRenderingContext2D, size: number, bounce: number, speciesId: string): void {
    // 색상 결정
    let bearColor = '#8B4513';
    if (speciesId === 'grizzly_bear') {
      bearColor = '#A0522D';
    } else if (speciesId === 'black_bear') {
      bearColor = '#2F2F2F';
    } else if (speciesId === 'polar_bear') {
      bearColor = '#FFFAFA';
    }

    // 몸통
    ctx.fillStyle = bearColor;
    ctx.beginPath();
    ctx.ellipse(0, bounce + size * 0.05, size * 0.4, size * 0.45, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.arc(0, bounce - size * 0.35, size * 0.28, 0, Math.PI * 2);
    ctx.fill();

    // 주둥이
    const snoutColor = speciesId === 'polar_bear' ? '#FFFAF0' : '#D2B48C';
    ctx.fillStyle = snoutColor;
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.28, size * 0.18, size * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (둥글게)
    ctx.fillStyle = bearColor;
    ctx.beginPath();
    ctx.arc(-size * 0.2, bounce - size * 0.55, size * 0.12, 0, Math.PI * 2);
    ctx.arc(size * 0.2, bounce - size * 0.55, size * 0.12, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.1, bounce - size * 0.4, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.1, bounce - size * 0.4, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(0, bounce - size * 0.22, size * 0.07, 0, Math.PI * 2);
    ctx.fill();

    // 등 융기 (Grizzly)
    if (speciesId === 'grizzly_bear') {
      ctx.fillStyle = '#8B7355';
      ctx.beginPath();
      ctx.ellipse(-size * 0.1, bounce - size * 0.1, size * 0.2, size * 0.15, -0.3, 0, Math.PI * 2);
      ctx.fill();
    }

    // 다리
    ctx.fillStyle = bearColor;
    ctx.fillRect(-size * 0.25, bounce + size * 0.35, size * 0.15, size * 0.25);
    ctx.fillRect(size * 0.1, bounce + size * 0.35, size * 0.15, size * 0.25);
  }

  private static drawBison(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    ctx.ellipse(0, bounce + size * 0.05, size * 0.45, size * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    // 등 혹 (어깨)
    ctx.beginPath();
    ctx.ellipse(-size * 0.15, bounce - size * 0.2, size * 0.3, size * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리 (작고 낮게)
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.ellipse(size * 0.3, bounce - size * 0.05, size * 0.25, size * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();

    // 털 (머리와 목)
    ctx.fillStyle = '#A0522D';
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI;
      ctx.beginPath();
      ctx.ellipse(
        -size * 0.15 + Math.cos(angle - Math.PI / 2) * size * 0.25,
        bounce - size * 0.3 + Math.sin(angle - Math.PI / 2) * size * 0.25,
        size * 0.08,
        size * 0.12,
        angle,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // 뿔
    ctx.strokeStyle = '#2F2F2F';
    ctx.lineWidth = size * 0.06;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(size * 0.2, bounce - size * 0.18);
    ctx.quadraticCurveTo(size * 0.18, bounce - size * 0.3, size * 0.25, bounce - size * 0.35);
    ctx.moveTo(size * 0.4, bounce - size * 0.18);
    ctx.quadraticCurveTo(size * 0.42, bounce - size * 0.3, size * 0.35, bounce - size * 0.35);
    ctx.stroke();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.28, bounce - size * 0.12, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 수염
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    ctx.ellipse(size * 0.3, bounce + size * 0.08, size * 0.15, size * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();

    // 다리
    ctx.fillStyle = '#654321';
    ctx.fillRect(-size * 0.35, bounce + size * 0.3, size * 0.12, size * 0.3);
    ctx.fillRect(-size * 0.15, bounce + size * 0.3, size * 0.12, size * 0.3);
    ctx.fillRect(size * 0.05, bounce + size * 0.3, size * 0.12, size * 0.3);
    ctx.fillRect(size * 0.25, bounce + size * 0.3, size * 0.12, size * 0.3);
  }

  private static drawWolf(ctx: CanvasRenderingContext2D, size: number, bounce: number, speciesId: string): void {
    // 색상
    let wolfColor = '#808080';
    if (speciesId === 'arctic_wolf' || speciesId === 'ice_wolf') {
      wolfColor = '#F0F0F0';
    }

    // 몸통
    ctx.fillStyle = wolfColor;
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.4, size * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();

    // 목
    ctx.fillRect(-size * 0.08, bounce - size * 0.3, size * 0.16, size * 0.3);

    // 머리
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.4, size * 0.22, size * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();

    // 주둥이
    ctx.fillStyle = wolfColor;
    ctx.beginPath();
    ctx.ellipse(size * 0.15, bounce - size * 0.38, size * 0.15, size * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (뾰족하게)
    ctx.beginPath();
    ctx.moveTo(-size * 0.15, bounce - size * 0.5);
    ctx.lineTo(-size * 0.22, bounce - size * 0.68);
    ctx.lineTo(-size * 0.08, bounce - size * 0.55);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(size * 0.15, bounce - size * 0.5);
    ctx.lineTo(size * 0.22, bounce - size * 0.68);
    ctx.lineTo(size * 0.08, bounce - size * 0.55);
    ctx.closePath();
    ctx.fill();

    // 눈 (날카로운)
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.ellipse(-size * 0.08, bounce - size * 0.45, size * 0.06, size * 0.04, 0, 0, Math.PI * 2);
    ctx.ellipse(size * 0.08, bounce - size * 0.45, size * 0.06, size * 0.04, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.08, bounce - size * 0.45, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.08, bounce - size * 0.45, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.2, bounce - size * 0.35, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 꼬리
    ctx.strokeStyle = wolfColor;
    ctx.lineWidth = size * 0.12;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.35, bounce + size * 0.1);
    ctx.quadraticCurveTo(-size * 0.5, bounce + size * 0.35, -size * 0.55, bounce + size * 0.5);
    ctx.stroke();

    // 얼음 이펙트 (ice_wolf)
    if (speciesId === 'ice_wolf') {
      ctx.fillStyle = 'rgba(173, 216, 230, 0.5)';
      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * size * 0.3;
        ctx.beginPath();
        ctx.arc(
          Math.cos(angle) * distance,
          bounce + Math.sin(angle) * distance * 0.7,
          size * 0.05,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
  }

  private static drawMoose(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.45, size * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    // 목
    ctx.fillRect(-size * 0.1, bounce - size * 0.5, size * 0.2, size * 0.5);

    // 머리
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.6, size * 0.2, size * 0.22, 0, 0, Math.PI * 2);
    ctx.fill();

    // 주둥이 (긴)
    ctx.fillRect(-size * 0.08, bounce - size * 0.55, size * 0.16, size * 0.25);

    // 뿔 (큰 팔메이트)
    ctx.fillStyle = '#8B7355';
    // 왼쪽 뿔
    ctx.beginPath();
    ctx.ellipse(-size * 0.3, bounce - size * 0.7, size * 0.25, size * 0.15, -0.5, 0, Math.PI * 2);
    ctx.fill();

    // 왼쪽 뿔 가지
    for (let i = 0; i < 3; i++) {
      ctx.fillRect(-size * 0.45 + i * size * 0.08, bounce - size * 0.75 - i * size * 0.05, size * 0.04, size * 0.12);
    }

    // 오른쪽 뿔
    ctx.beginPath();
    ctx.ellipse(size * 0.3, bounce - size * 0.7, size * 0.25, size * 0.15, 0.5, 0, Math.PI * 2);
    ctx.fill();

    // 오른쪽 뿔 가지
    for (let i = 0; i < 3; i++) {
      ctx.fillRect(size * 0.3 + i * size * 0.08, bounce - size * 0.75 - i * 0.05, size * 0.04, size * 0.12);
    }

    // 귀
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    ctx.ellipse(-size * 0.18, bounce - size * 0.72, size * 0.1, size * 0.12, -0.3, 0, Math.PI * 2);
    ctx.ellipse(size * 0.18, bounce - size * 0.72, size * 0.1, size * 0.12, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.08, bounce - size * 0.62, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.08, bounce - size * 0.62, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.beginPath();
    ctx.arc(0, bounce - size * 0.45, size * 0.06, 0, Math.PI * 2);
    ctx.fill();

    // 다리 (길고 가늘게)
    ctx.fillStyle = '#654321';
    ctx.fillRect(-size * 0.3, bounce + size * 0.25, size * 0.08, size * 0.4);
    ctx.fillRect(-size * 0.1, bounce + size * 0.25, size * 0.08, size * 0.4);
    ctx.fillRect(size * 0.02, bounce + size * 0.25, size * 0.08, size * 0.4);
    ctx.fillRect(size * 0.22, bounce + size * 0.25, size * 0.08, size * 0.4);
  }

  private static drawCougar(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (황갈색)
    ctx.fillStyle = '#D2B48C';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.42, size * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.arc(size * 0.32, bounce - size * 0.18, size * 0.22, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (둥근 삼각형)
    ctx.beginPath();
    ctx.moveTo(size * 0.22, bounce - size * 0.38);
    ctx.lineTo(size * 0.18, bounce - size * 0.48);
    ctx.lineTo(size * 0.28, bounce - size * 0.38);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(size * 0.42, bounce - size * 0.38);
    ctx.lineTo(size * 0.46, bounce - size * 0.48);
    ctx.lineTo(size * 0.36, bounce - size * 0.38);
    ctx.closePath();
    ctx.fill();

    // 얼굴 (밝은 부분)
    ctx.fillStyle = '#F5DEB3';
    ctx.beginPath();
    ctx.ellipse(size * 0.32, bounce - size * 0.15, size * 0.15, size * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#90EE90';
    ctx.beginPath();
    ctx.arc(size * 0.26, bounce - size * 0.2, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.38, bounce - size * 0.2, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.26, bounce - size * 0.2, size * 0.025, 0, Math.PI * 2);
    ctx.arc(size * 0.38, bounce - size * 0.2, size * 0.025, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.moveTo(size * 0.32, bounce - size * 0.1);
    ctx.lineTo(size * 0.29, bounce - size * 0.07);
    ctx.lineTo(size * 0.35, bounce - size * 0.07);
    ctx.closePath();
    ctx.fill();

    // 꼬리 (길고 두꺼운)
    ctx.strokeStyle = '#D2B48C';
    ctx.lineWidth = size * 0.1;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.35, bounce);
    ctx.quadraticCurveTo(-size * 0.6, bounce + size * 0.2, -size * 0.7, bounce + size * 0.4);
    ctx.stroke();
  }

  private static drawRaccoon(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통
    ctx.fillStyle = '#808080';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.3, size * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.arc(size * 0.22, bounce - size * 0.2, size * 0.18, 0, Math.PI * 2);
    ctx.fill();

    // 눈 주변 마스크 (검은색)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.ellipse(size * 0.15, bounce - size * 0.22, size * 0.09, size * 0.08, 0, 0, Math.PI * 2);
    ctx.ellipse(size * 0.29, bounce - size * 0.22, size * 0.09, size * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(size * 0.15, bounce - size * 0.22, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.29, bounce - size * 0.22, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.15, bounce - size * 0.22, size * 0.025, 0, Math.PI * 2);
    ctx.arc(size * 0.29, bounce - size * 0.22, size * 0.025, 0, Math.PI * 2);
    ctx.fill();

    // 주둥이
    ctx.fillStyle = '#D3D3D3';
    ctx.beginPath();
    ctx.ellipse(size * 0.3, bounce - size * 0.15, size * 0.12, size * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.32, bounce - size * 0.13, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 귀
    ctx.fillStyle = '#808080';
    ctx.beginPath();
    ctx.arc(size * 0.12, bounce - size * 0.35, size * 0.08, 0, Math.PI * 2);
    ctx.arc(size * 0.32, bounce - size * 0.35, size * 0.08, 0, Math.PI * 2);
    ctx.fill();

    // 귀 안쪽
    ctx.fillStyle = '#FFE4E1';
    ctx.beginPath();
    ctx.arc(size * 0.12, bounce - size * 0.35, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.32, bounce - size * 0.35, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 꼬리 (줄무늬)
    ctx.strokeStyle = '#808080';
    ctx.lineWidth = size * 0.12;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.25, bounce);
    ctx.quadraticCurveTo(-size * 0.5, bounce + size * 0.15, -size * 0.6, bounce - size * 0.05);
    ctx.stroke();

    // 꼬리 검은 띠
    ctx.strokeStyle = '#000';
    ctx.lineWidth = size * 0.08;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(-size * 0.35 - i * size * 0.12, bounce + (i % 2) * size * 0.08, size * 0.06, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private static drawBeaver(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (갈색)
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.35, size * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.ellipse(size * 0.25, bounce - size * 0.15, size * 0.2, size * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (작고 둥글게)
    ctx.beginPath();
    ctx.arc(size * 0.15, bounce - size * 0.3, size * 0.06, 0, Math.PI * 2);
    ctx.arc(size * 0.35, bounce - size * 0.3, size * 0.06, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.2, bounce - size * 0.18, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.3, bounce - size * 0.18, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 앞니 (큰)
    ctx.fillStyle = '#FFF';
    ctx.fillRect(size * 0.35, bounce - size * 0.12, size * 0.04, size * 0.08);
    ctx.fillRect(size * 0.41, bounce - size * 0.12, size * 0.04, size * 0.08);

    // 코
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.4, bounce - size * 0.15, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 꼬리 (납작하고 비늘 무늬)
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    ctx.ellipse(-size * 0.5, bounce + size * 0.15, size * 0.25, size * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();

    // 꼬리 비늘 무늬
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(-size * 0.65 + i * size * 0.08, bounce + size * 0.05);
      ctx.lineTo(-size * 0.65 + i * size * 0.08, bounce + size * 0.25);
      ctx.stroke();
    }

    // 나뭇가지 들고 있기
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = size * 0.04;
    ctx.beginPath();
    ctx.moveTo(-size * 0.15, bounce + size * 0.15);
    ctx.lineTo(-size * 0.25, bounce + size * 0.35);
    ctx.stroke();
  }

  // ===== SOUTH AMERICAN ANIMALS =====

  private static drawJaguar(ctx: CanvasRenderingContext2D, size: number, bounce: number, speciesId: string): void {
    // 색상
    let bodyColor = '#DAA520';
    if (speciesId === 'shadow_panther') {
      bodyColor = '#2F2F2F';
    } else if (speciesId === 'ocelot') {
      bodyColor = '#D2B48C';
    }

    // 몸통
    ctx.fillStyle = bodyColor;
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.45, size * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.arc(size * 0.35, bounce - size * 0.18, size * 0.24, 0, Math.PI * 2);
    ctx.fill();

    // 로제트 무늬 (jaguar pattern)
    if (speciesId !== 'shadow_panther') {
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const distance = size * 0.25;
        ctx.beginPath();
        ctx.arc(
          Math.cos(angle) * distance,
          bounce + Math.sin(angle) * distance * 0.6,
          size * 0.06,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }
    }

    // 귀
    ctx.fillStyle = bodyColor;
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.38, size * 0.1, 0, Math.PI * 2);
    ctx.arc(size * 0.45, bounce - size * 0.38, size * 0.1, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#90EE90';
    ctx.beginPath();
    ctx.arc(size * 0.28, bounce - size * 0.22, size * 0.06, 0, Math.PI * 2);
    ctx.arc(size * 0.42, bounce - size * 0.22, size * 0.06, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.28, bounce - size * 0.22, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.42, bounce - size * 0.22, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.moveTo(size * 0.35, bounce - size * 0.12);
    ctx.lineTo(size * 0.32, bounce - size * 0.08);
    ctx.lineTo(size * 0.38, bounce - size * 0.08);
    ctx.closePath();
    ctx.fill();

    // 꼬리
    ctx.strokeStyle = bodyColor;
    ctx.lineWidth = size * 0.1;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.38, bounce);
    ctx.quadraticCurveTo(-size * 0.65, bounce + size * 0.25, -size * 0.75, bounce + size * 0.1);
    ctx.stroke();
  }

  private static drawLlama(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통
    ctx.fillStyle = '#F5DEB3';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.4, size * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    // 긴 목
    ctx.fillRect(-size * 0.12, bounce - size * 0.6, size * 0.24, size * 0.6);

    // 머리 (긴)
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.7, size * 0.18, size * 0.22, 0, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (길쭉한)
    ctx.beginPath();
    ctx.ellipse(-size * 0.15, bounce - size * 0.88, size * 0.08, size * 0.15, -0.3, 0, Math.PI * 2);
    ctx.ellipse(size * 0.15, bounce - size * 0.88, size * 0.08, size * 0.15, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // 털 (목 부분)
    ctx.fillStyle = '#FFE4B5';
    for (let i = 0; i < 5; i++) {
      const y = bounce - size * 0.5 + i * size * 0.12;
      ctx.fillRect(-size * 0.18, y, size * 0.36, size * 0.08);
    }

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.08, bounce - size * 0.72, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.08, bounce - size * 0.72, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.beginPath();
    ctx.arc(0, bounce - size * 0.62, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 다리 (길고 가늘게)
    ctx.fillStyle = '#F5DEB3';
    ctx.fillRect(-size * 0.25, bounce + size * 0.25, size * 0.08, size * 0.4);
    ctx.fillRect(-size * 0.08, bounce + size * 0.25, size * 0.08, size * 0.4);
    ctx.fillRect(0, bounce + size * 0.25, size * 0.08, size * 0.4);
    ctx.fillRect(size * 0.17, bounce + size * 0.25, size * 0.08, size * 0.4);
  }

  private static drawCapybara(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (크고 둥글게)
    ctx.fillStyle = '#8B7355';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.45, size * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리 (사각형 느낌)
    ctx.beginPath();
    ctx.ellipse(size * 0.35, bounce - size * 0.1, size * 0.28, size * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (작고 둥글게)
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.32, size * 0.08, 0, Math.PI * 2);
    ctx.arc(size * 0.45, bounce - size * 0.32, size * 0.08, 0, Math.PI * 2);
    ctx.fill();

    // 눈 (작고 위쪽)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.3, bounce - size * 0.22, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.4, bounce - size * 0.22, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 코 (큰)
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    ctx.ellipse(size * 0.5, bounce - size * 0.08, size * 0.12, size * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();

    // 콧구멍
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.48, bounce - size * 0.08, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.52, bounce - size * 0.08, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 다리 (짧고 굵게)
    ctx.fillStyle = '#8B7355';
    ctx.fillRect(-size * 0.3, bounce + size * 0.25, size * 0.12, size * 0.2);
    ctx.fillRect(-size * 0.08, bounce + size * 0.25, size * 0.12, size * 0.2);
    ctx.fillRect(size * 0.08, bounce + size * 0.25, size * 0.12, size * 0.2);
    ctx.fillRect(size * 0.3, bounce + size * 0.25, size * 0.12, size * 0.2);
  }

  private static drawSloth(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (회갈색)
    ctx.fillStyle = '#A0826D';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.35, size * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.25, size * 0.22, 0, Math.PI * 2);
    ctx.fill();

    // 얼굴 마스크 (밝은 부분)
    ctx.fillStyle = '#D2B48C';
    ctx.beginPath();
    ctx.ellipse(size * 0.25, bounce - size * 0.22, size * 0.15, size * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();

    // 눈 주변 (검은 마스크)
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    ctx.ellipse(size * 0.18, bounce - size * 0.26, size * 0.1, size * 0.08, -0.2, 0, Math.PI * 2);
    ctx.ellipse(size * 0.32, bounce - size * 0.26, size * 0.1, size * 0.08, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // 눈 (작게 - 졸린 표정)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.ellipse(size * 0.18, bounce - size * 0.26, size * 0.04, size * 0.02, 0, 0, Math.PI * 2);
    ctx.ellipse(size * 0.32, bounce - size * 0.26, size * 0.04, size * 0.02, 0, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.18, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 미소
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.15, size * 0.08, 0.3, Math.PI - 0.3);
    ctx.stroke();

    // 긴 팔 (매달린 모습)
    ctx.strokeStyle = '#A0826D';
    ctx.lineWidth = size * 0.08;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.25, bounce - size * 0.1);
    ctx.lineTo(-size * 0.25, bounce - size * 0.5);
    ctx.moveTo(size * 0.1, bounce - size * 0.1);
    ctx.lineTo(size * 0.1, bounce - size * 0.5);
    ctx.stroke();

    // 발톱
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = size * 0.03;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(-size * 0.25 + i * size * 0.04, bounce - size * 0.5);
      ctx.lineTo(-size * 0.25 + i * size * 0.04, bounce - size * 0.6);
      ctx.stroke();
    }
  }

  private static drawAnteater(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통
    ctx.fillStyle = '#8B7355';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.4, size * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // 줄무늬 (검은색과 흰색)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(-size * 0.3, bounce - size * 0.15);
    ctx.lineTo(size * 0.2, bounce - size * 0.25);
    ctx.lineTo(size * 0.3, bounce + size * 0.1);
    ctx.lineTo(-size * 0.2, bounce + size * 0.2);
    ctx.closePath();
    ctx.fill();

    // 머리 (길쭉한 주둥이)
    ctx.fillStyle = '#8B7355';
    ctx.beginPath();
    ctx.ellipse(size * 0.3, bounce - size * 0.15, size * 0.15, size * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();

    // 주둥이 (매우 긴)
    ctx.fillRect(size * 0.35, bounce - size * 0.18, size * 0.4, size * 0.08);

    // 주둥이 끝
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    ctx.arc(size * 0.75, bounce - size * 0.14, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 눈 (작은)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.32, bounce - size * 0.2, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (작고 둥글게)
    ctx.fillStyle = '#8B7355';
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.25, size * 0.06, 0, Math.PI * 2);
    ctx.fill();

    // 큰 꼬리 (부채 모양)
    ctx.fillStyle = '#A0826D';
    ctx.beginPath();
    ctx.ellipse(-size * 0.5, bounce + size * 0.1, size * 0.3, size * 0.35, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // 다리 (짧고 강한)
    ctx.fillStyle = '#8B7355';
    ctx.fillRect(-size * 0.25, bounce + size * 0.2, size * 0.1, size * 0.25);
    ctx.fillRect(size * 0.15, bounce + size * 0.2, size * 0.1, size * 0.25);

    // 발톱 (긴)
    ctx.fillStyle = '#FFF';
    for (let i = 0; i < 3; i++) {
      ctx.fillRect(-size * 0.25 + i * size * 0.03, bounce + size * 0.42, size * 0.02, size * 0.08);
      ctx.fillRect(size * 0.15 + i * size * 0.03, bounce + size * 0.42, size * 0.02, size * 0.08);
    }
  }

  // ===== AUSTRALIAN ANIMALS =====

  private static drawKangaroo(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통
    ctx.fillStyle = '#BC8F8F';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.35, size * 0.4, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // 머리 (작게)
    ctx.beginPath();
    ctx.ellipse(size * 0.25, bounce - size * 0.35, size * 0.18, size * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (긴)
    ctx.beginPath();
    ctx.ellipse(size * 0.18, bounce - size * 0.52, size * 0.08, size * 0.18, -0.2, 0, Math.PI * 2);
    ctx.ellipse(size * 0.32, bounce - size * 0.52, size * 0.08, size * 0.18, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.2, bounce - size * 0.38, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.3, bounce - size * 0.38, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.beginPath();
    ctx.arc(size * 0.28, bounce - size * 0.28, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 짧은 앞발
    ctx.fillStyle = '#BC8F8F';
    ctx.fillRect(-size * 0.15, bounce + size * 0.1, size * 0.08, size * 0.2);

    // 큰 뒷발
    ctx.fillStyle = '#A0826D';
    ctx.beginPath();
    ctx.ellipse(-size * 0.25, bounce + size * 0.45, size * 0.18, size * 0.12, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // 뒷다리
    ctx.fillStyle = '#BC8F8F';
    ctx.fillRect(-size * 0.28, bounce + size * 0.2, size * 0.12, size * 0.25);

    // 큰 꼬리
    ctx.strokeStyle = '#BC8F8F';
    ctx.lineWidth = size * 0.15;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.25, bounce + size * 0.25);
    ctx.quadraticCurveTo(-size * 0.5, bounce + size * 0.45, -size * 0.6, bounce + size * 0.6);
    ctx.stroke();

    // 주머니 (배)
    ctx.strokeStyle = '#A0826D';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, bounce + size * 0.15, size * 0.15, 0.5, Math.PI - 0.5);
    ctx.stroke();
  }

  private static drawKoala(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통
    ctx.fillStyle = '#A9A9A9';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.35, size * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // 배 (흰색)
    ctx.fillStyle = '#F5F5F5';
    ctx.beginPath();
    ctx.ellipse(0, bounce + size * 0.1, size * 0.25, size * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리 (큰)
    ctx.fillStyle = '#A9A9A9';
    ctx.beginPath();
    ctx.arc(0, bounce - size * 0.35, size * 0.3, 0, Math.PI * 2);
    ctx.fill();

    // 큰 귀 (솜털)
    ctx.beginPath();
    ctx.arc(-size * 0.25, bounce - size * 0.55, size * 0.18, 0, Math.PI * 2);
    ctx.arc(size * 0.25, bounce - size * 0.55, size * 0.18, 0, Math.PI * 2);
    ctx.fill();

    // 귀 안쪽 (흰색)
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(-size * 0.25, bounce - size * 0.55, size * 0.1, 0, Math.PI * 2);
    ctx.arc(size * 0.25, bounce - size * 0.55, size * 0.1, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.1, bounce - size * 0.38, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.1, bounce - size * 0.38, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 큰 코
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.28, size * 0.1, size * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();

    // 팔 (나무 껴안는 자세)
    ctx.strokeStyle = '#A9A9A9';
    ctx.lineWidth = size * 0.12;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(0, bounce, size * 0.45, -Math.PI / 3, -Math.PI / 6);
    ctx.stroke();
  }

  private static drawWombat(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (땅딸막한)
    ctx.fillStyle = '#8B7355';
    ctx.beginPath();
    ctx.ellipse(0, bounce + size * 0.1, size * 0.4, size * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리 (큰 사각형 느낌)
    ctx.beginPath();
    ctx.ellipse(size * 0.3, bounce - size * 0.1, size * 0.25, size * 0.22, 0, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (작고 둥글게)
    ctx.beginPath();
    ctx.arc(size * 0.2, bounce - size * 0.28, size * 0.08, 0, Math.PI * 2);
    ctx.arc(size * 0.4, bounce - size * 0.28, size * 0.08, 0, Math.PI * 2);
    ctx.fill();

    // 눈 (작은)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.15, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.35, bounce - size * 0.15, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 코 (크고 분홍색)
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.arc(size * 0.42, bounce - size * 0.08, size * 0.08, 0, Math.PI * 2);
    ctx.fill();

    // 콧구멍
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.4, bounce - size * 0.08, size * 0.02, 0, Math.PI * 2);
    ctx.arc(size * 0.44, bounce - size * 0.08, size * 0.02, 0, Math.PI * 2);
    ctx.fill();

    // 다리 (짧고 굵게)
    ctx.fillStyle = '#8B7355';
    ctx.fillRect(-size * 0.3, bounce + size * 0.35, size * 0.12, size * 0.15);
    ctx.fillRect(-size * 0.1, bounce + size * 0.35, size * 0.12, size * 0.15);
    ctx.fillRect(size * 0.1, bounce + size * 0.35, size * 0.12, size * 0.15);
    ctx.fillRect(size * 0.3, bounce + size * 0.35, size * 0.12, size * 0.15);
  }

  private static drawTasmanianDevil(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (검은색)
    ctx.fillStyle = '#1C1C1C';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.38, size * 0.32, 0, 0, Math.PI * 2);
    ctx.fill();

    // 흰색 가슴 무늬
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.moveTo(-size * 0.1, bounce + size * 0.05);
    ctx.lineTo(0, bounce + size * 0.25);
    ctx.lineTo(size * 0.1, bounce + size * 0.05);
    ctx.lineTo(0, bounce + size * 0.1);
    ctx.closePath();
    ctx.fill();

    // 머리
    ctx.fillStyle = '#1C1C1C';
    ctx.beginPath();
    ctx.arc(size * 0.28, bounce - size * 0.2, size * 0.24, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (분홍색 안쪽)
    ctx.fillStyle = '#1C1C1C';
    ctx.beginPath();
    ctx.arc(size * 0.18, bounce - size * 0.4, size * 0.1, 0, Math.PI * 2);
    ctx.arc(size * 0.38, bounce - size * 0.4, size * 0.1, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#FFB6C1';
    ctx.beginPath();
    ctx.arc(size * 0.18, bounce - size * 0.4, size * 0.06, 0, Math.PI * 2);
    ctx.arc(size * 0.38, bounce - size * 0.4, size * 0.06, 0, Math.PI * 2);
    ctx.fill();

    // 눈 (빨간색 - 사나운)
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(size * 0.22, bounce - size * 0.24, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.34, bounce - size * 0.24, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.22, bounce - size * 0.24, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.34, bounce - size * 0.24, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.arc(size * 0.35, bounce - size * 0.14, size * 0.06, 0, Math.PI * 2);
    ctx.fill();

    // 이빨 (날카로운)
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.moveTo(size * 0.3, bounce - size * 0.08);
    ctx.lineTo(size * 0.28, bounce - size * 0.02);
    ctx.lineTo(size * 0.32, bounce - size * 0.05);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(size * 0.4, bounce - size * 0.08);
    ctx.lineTo(size * 0.38, bounce - size * 0.02);
    ctx.lineTo(size * 0.42, bounce - size * 0.05);
    ctx.closePath();
    ctx.fill();
  }

  private static drawPlatypus(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통
    ctx.fillStyle = '#8B7355';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.4, size * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.ellipse(size * 0.3, bounce - size * 0.12, size * 0.22, size * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();

    // 오리 부리 (특징적인)
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    ctx.ellipse(size * 0.55, bounce - size * 0.12, size * 0.2, size * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();

    // 부리 라인
    ctx.strokeStyle = '#8B7355';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(size * 0.4, bounce - size * 0.18);
    ctx.lineTo(size * 0.7, bounce - size * 0.18);
    ctx.moveTo(size * 0.4, bounce - size * 0.06);
    ctx.lineTo(size * 0.7, bounce - size * 0.06);
    ctx.stroke();

    // 눈 (작은)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.32, bounce - size * 0.18, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 비버 꼬리 (납작한)
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    ctx.ellipse(-size * 0.5, bounce + size * 0.08, size * 0.25, size * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();

    // 물갈퀴 발
    ctx.fillStyle = '#8B7355';
    // 앞발
    ctx.beginPath();
    ctx.moveTo(size * 0.15, bounce + size * 0.2);
    ctx.lineTo(size * 0.25, bounce + size * 0.3);
    ctx.lineTo(size * 0.15, bounce + size * 0.28);
    ctx.lineTo(size * 0.05, bounce + size * 0.3);
    ctx.closePath();
    ctx.fill();

    // 뒷발
    ctx.beginPath();
    ctx.moveTo(-size * 0.25, bounce + size * 0.2);
    ctx.lineTo(-size * 0.35, bounce + size * 0.3);
    ctx.lineTo(-size * 0.25, bounce + size * 0.28);
    ctx.lineTo(-size * 0.15, bounce + size * 0.3);
    ctx.closePath();
    ctx.fill();
  }

  private static drawDingo(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (황갈색)
    ctx.fillStyle = '#DAA520';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.38, size * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();

    // 목
    ctx.fillRect(-size * 0.08, bounce - size * 0.28, size * 0.16, size * 0.28);

    // 머리
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.38, size * 0.2, size * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();

    // 주둥이
    ctx.beginPath();
    ctx.ellipse(size * 0.15, bounce - size * 0.36, size * 0.14, size * 0.11, 0, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (뾰족하게)
    ctx.beginPath();
    ctx.moveTo(-size * 0.14, bounce - size * 0.48);
    ctx.lineTo(-size * 0.2, bounce - size * 0.62);
    ctx.lineTo(-size * 0.08, bounce - size * 0.52);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(size * 0.14, bounce - size * 0.48);
    ctx.lineTo(size * 0.2, bounce - size * 0.62);
    ctx.lineTo(size * 0.08, bounce - size * 0.52);
    ctx.closePath();
    ctx.fill();

    // 눈
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.arc(-size * 0.07, bounce - size * 0.42, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.07, bounce - size * 0.42, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.07, bounce - size * 0.42, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.07, bounce - size * 0.42, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.2, bounce - size * 0.33, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 꼬리
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = size * 0.1;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.32, bounce + size * 0.08);
    ctx.quadraticCurveTo(-size * 0.48, bounce + size * 0.3, -size * 0.52, bounce + size * 0.45);
    ctx.stroke();
  }

  // ===== POLAR ANIMALS =====

  private static drawSeal(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (유선형)
    ctx.fillStyle = '#708090';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.5, size * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.ellipse(size * 0.38, bounce - size * 0.12, size * 0.22, size * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();

    // 주둥이
    ctx.fillStyle = '#A9A9A9';
    ctx.beginPath();
    ctx.ellipse(size * 0.52, bounce - size * 0.08, size * 0.15, size * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();

    // 눈 (큰)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.35, bounce - size * 0.18, size * 0.06, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.beginPath();
    ctx.arc(size * 0.58, bounce - size * 0.08, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 수염
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath();
      ctx.moveTo(size * 0.52, bounce - size * 0.08 + i * size * 0.03);
      ctx.lineTo(size * 0.7, bounce - size * 0.08 + i * size * 0.05);
      ctx.stroke();
    }

    // 지느러미
    ctx.fillStyle = '#708090';
    ctx.beginPath();
    ctx.ellipse(-size * 0.35, bounce + size * 0.15, size * 0.18, size * 0.12, -0.3, 0, Math.PI * 2);
    ctx.fill();

    // 꼬리 지느러미
    ctx.beginPath();
    ctx.moveTo(-size * 0.45, bounce);
    ctx.lineTo(-size * 0.65, bounce - size * 0.12);
    ctx.lineTo(-size * 0.65, bounce + size * 0.12);
    ctx.closePath();
    ctx.fill();
  }

  private static drawWalrus(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (크고 둥글게)
    ctx.fillStyle = '#8B7D6B';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.5, size * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리 (큰)
    ctx.beginPath();
    ctx.ellipse(size * 0.38, bounce - size * 0.15, size * 0.28, size * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();

    // 주둥이 (넓은)
    ctx.fillStyle = '#A0826D';
    ctx.beginPath();
    ctx.ellipse(size * 0.55, bounce - size * 0.08, size * 0.2, size * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();

    // 엄니 (긴 상아)
    ctx.fillStyle = '#FFF';
    ctx.fillRect(size * 0.48, bounce, size * 0.06, size * 0.35);
    ctx.fillRect(size * 0.62, bounce, size * 0.06, size * 0.35);

    // 엄니 끝 둥글게
    ctx.beginPath();
    ctx.arc(size * 0.51, bounce + size * 0.35, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.65, bounce + size * 0.35, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 눈 (작은)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.32, bounce - size * 0.22, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 수염 (많은)
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    for (let i = -3; i <= 3; i++) {
      ctx.beginPath();
      ctx.moveTo(size * 0.55, bounce - size * 0.08 + i * size * 0.03);
      ctx.lineTo(size * 0.75, bounce - size * 0.05 + i * size * 0.04);
      ctx.stroke();
    }

    // 지느러미
    ctx.fillStyle = '#8B7D6B';
    ctx.beginPath();
    ctx.ellipse(-size * 0.4, bounce + size * 0.2, size * 0.2, size * 0.15, -0.3, 0, Math.PI * 2);
    ctx.fill();
  }

  private static drawFox(ctx: CanvasRenderingContext2D, size: number, bounce: number, speciesId: string): void {
    // 색상
    let foxColor = '#FF6347';
    if (speciesId === 'arctic_fox') {
      foxColor = '#FFFAFA';
    } else if (speciesId === 'flame_fox') {
      foxColor = '#FF4500';
    }

    // 몸통
    ctx.fillStyle = foxColor;
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.35, size * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();

    // 목
    ctx.fillRect(-size * 0.08, bounce - size * 0.28, size * 0.16, size * 0.28);

    // 머리
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.35, size * 0.2, size * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();

    // 주둥이 (뾰족한)
    ctx.beginPath();
    ctx.ellipse(size * 0.15, bounce - size * 0.33, size * 0.14, size * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (큰 삼각형)
    ctx.beginPath();
    ctx.moveTo(-size * 0.14, bounce - size * 0.45);
    ctx.lineTo(-size * 0.22, bounce - size * 0.65);
    ctx.lineTo(-size * 0.06, bounce - size * 0.5);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(size * 0.14, bounce - size * 0.45);
    ctx.lineTo(size * 0.22, bounce - size * 0.65);
    ctx.lineTo(size * 0.06, bounce - size * 0.5);
    ctx.closePath();
    ctx.fill();

    // 귀 안쪽 (흰색 또는 밝은색)
    const earInside = speciesId === 'arctic_fox' ? '#FFF' : '#FFE4B5';
    ctx.fillStyle = earInside;
    ctx.beginPath();
    ctx.moveTo(-size * 0.14, bounce - size * 0.5);
    ctx.lineTo(-size * 0.18, bounce - size * 0.6);
    ctx.lineTo(-size * 0.1, bounce - size * 0.52);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(size * 0.14, bounce - size * 0.5);
    ctx.lineTo(size * 0.18, bounce - size * 0.6);
    ctx.lineTo(size * 0.1, bounce - size * 0.52);
    ctx.closePath();
    ctx.fill();

    // 눈
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(-size * 0.07, bounce - size * 0.38, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.07, bounce - size * 0.38, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.07, bounce - size * 0.38, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.07, bounce - size * 0.38, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.2, bounce - size * 0.3, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 큰 꼬리 (부채 모양)
    ctx.strokeStyle = foxColor;
    ctx.lineWidth = size * 0.18;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.3, bounce + size * 0.05);
    ctx.quadraticCurveTo(-size * 0.55, bounce + size * 0.3, -size * 0.65, bounce + size * 0.15);
    ctx.stroke();

    // 꼬리 끝 (흰색)
    const tailTipColor = speciesId === 'flame_fox' ? '#FFD700' : '#FFF';
    ctx.fillStyle = tailTipColor;
    ctx.beginPath();
    ctx.arc(-size * 0.65, bounce + size * 0.15, size * 0.12, 0, Math.PI * 2);
    ctx.fill();

    // 불 이펙트 (flame_fox)
    if (speciesId === 'flame_fox') {
      ctx.fillStyle = 'rgba(255, 140, 0, 0.5)';
      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * size * 0.3;
        ctx.beginPath();
        ctx.arc(
          Math.cos(angle) * distance,
          bounce + Math.sin(angle) * distance * 0.7,
          size * 0.05,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
  }

  // ===== MYTHICAL ANIMALS =====

  private static drawUnicorn(ctx: CanvasRenderingContext2D, size: number, bounce: number, isPerforming: boolean): void {
    // 몸통 (흰색)
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.4, size * 0.32, 0, 0, Math.PI * 2);
    ctx.fill();

    // 목
    ctx.fillRect(-size * 0.1, bounce - size * 0.45, size * 0.2, size * 0.45);

    // 머리
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.55, size * 0.22, size * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();

    // 뿔 (나선형 무지개)
    const gradient = ctx.createLinearGradient(0, bounce - size * 0.95, 0, bounce - size * 0.7);
    gradient.addColorStop(0, '#FFD700');
    gradient.addColorStop(0.5, '#FF69B4');
    gradient.addColorStop(1, '#87CEEB');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(-size * 0.05, bounce - size * 0.7);
    ctx.lineTo(0, bounce - size * 0.95);
    ctx.lineTo(size * 0.05, bounce - size * 0.7);
    ctx.closePath();
    ctx.fill();

    // 나선 패턴
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
      const y = bounce - size * 0.75 - i * size * 0.04;
      ctx.beginPath();
      ctx.moveTo(-size * 0.03, y);
      ctx.lineTo(size * 0.03, y);
      ctx.stroke();
    }

    // 귀 (뾰족한)
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.moveTo(-size * 0.15, bounce - size * 0.65);
    ctx.lineTo(-size * 0.2, bounce - size * 0.78);
    ctx.lineTo(-size * 0.1, bounce - size * 0.68);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(size * 0.15, bounce - size * 0.65);
    ctx.lineTo(size * 0.2, bounce - size * 0.78);
    ctx.lineTo(size * 0.1, bounce - size * 0.68);
    ctx.closePath();
    ctx.fill();

    // 눈 (큰 반짝이는)
    ctx.fillStyle = '#87CEEB';
    ctx.beginPath();
    ctx.arc(-size * 0.08, bounce - size * 0.58, size * 0.06, 0, Math.PI * 2);
    ctx.arc(size * 0.08, bounce - size * 0.58, size * 0.06, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.08, bounce - size * 0.58, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.08, bounce - size * 0.58, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 반짝임
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(-size * 0.09, bounce - size * 0.6, size * 0.015, 0, Math.PI * 2);
    ctx.arc(size * 0.07, bounce - size * 0.6, size * 0.015, 0, Math.PI * 2);
    ctx.fill();

    // 갈기 (무지개색)
    const maneColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
    for (let i = 0; i < 7; i++) {
      ctx.fillStyle = maneColors[i];
      ctx.beginPath();
      ctx.ellipse(
        -size * 0.15 + Math.sin(i * 0.5) * size * 0.08,
        bounce - size * 0.6 + i * size * 0.08,
        size * 0.12,
        size * 0.08,
        i * 0.3,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // 다리
    ctx.fillStyle = '#FFF';
    ctx.fillRect(-size * 0.25, bounce + size * 0.22, size * 0.08, size * 0.35);
    ctx.fillRect(-size * 0.08, bounce + size * 0.22, size * 0.08, size * 0.35);
    ctx.fillRect(size * 0, bounce + size * 0.22, size * 0.08, size * 0.35);
    ctx.fillRect(size * 0.17, bounce + size * 0.22, size * 0.08, size * 0.35);

    // 반짝이 효과 (performing)
    if (isPerforming) {
      ctx.fillStyle = 'rgba(255, 215, 0, 0.5)';
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const distance = size * 0.5 + Math.sin(Date.now() * 0.005 + i) * size * 0.1;
        ctx.beginPath();
        ctx.arc(
          Math.cos(angle) * distance,
          bounce + Math.sin(angle) * distance * 0.6,
          size * 0.05,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
  }

  private static drawDragon(ctx: CanvasRenderingContext2D, size: number, bounce: number, isPerforming: boolean): void {
    // 몸통 (비늘)
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.5, size * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    // 비늘 패턴
    ctx.fillStyle = '#DC143C';
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const distance = size * 0.3;
      ctx.beginPath();
      ctx.arc(
        Math.cos(angle) * distance,
        bounce + Math.sin(angle) * distance * 0.7,
        size * 0.06,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // 긴 목
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.moveTo(-size * 0.12, bounce - size * 0.2);
    ctx.quadraticCurveTo(size * 0.1, bounce - size * 0.5, size * 0.25, bounce - size * 0.6);
    ctx.lineTo(size * 0.35, bounce - size * 0.55);
    ctx.quadraticCurveTo(size * 0.15, bounce - size * 0.45, size * 0, bounce - size * 0.2);
    ctx.closePath();
    ctx.fill();

    // 머리 (뾰족한)
    ctx.beginPath();
    ctx.moveTo(size * 0.25, bounce - size * 0.65);
    ctx.lineTo(size * 0.55, bounce - size * 0.65);
    ctx.lineTo(size * 0.4, bounce - size * 0.5);
    ctx.closePath();
    ctx.fill();

    // 뿔 (2개)
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.moveTo(size * 0.28, bounce - size * 0.7);
    ctx.lineTo(size * 0.25, bounce - size * 0.85);
    ctx.lineTo(size * 0.32, bounce - size * 0.72);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(size * 0.42, bounce - size * 0.7);
    ctx.lineTo(size * 0.45, bounce - size * 0.85);
    ctx.lineTo(size * 0.38, bounce - size * 0.72);
    ctx.closePath();
    ctx.fill();

    // 눈 (날카로운)
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(size * 0.32, bounce - size * 0.62, size * 0.07, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.ellipse(size * 0.34, bounce - size * 0.62, size * 0.04, size * 0.02, 0, 0, Math.PI * 2);
    ctx.fill();

    // 날개 (박쥐 형태)
    ctx.fillStyle = '#4B0000';
    ctx.beginPath();
    ctx.moveTo(-size * 0.35, bounce - size * 0.1);
    ctx.lineTo(-size * 0.7, bounce - size * 0.4);
    ctx.lineTo(-size * 0.5, bounce - size * 0.05);
    ctx.lineTo(-size * 0.75, bounce + size * 0.15);
    ctx.lineTo(-size * 0.4, bounce + size * 0.1);
    ctx.closePath();
    ctx.fill();

    // 꼬리 (가시가 있는)
    ctx.strokeStyle = '#8B0000';
    ctx.lineWidth = size * 0.12;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.4, bounce + size * 0.1);
    ctx.quadraticCurveTo(-size * 0.7, bounce + size * 0.35, -size * 0.8, bounce + size * 0.5);
    ctx.stroke();

    // 꼬리 가시
    ctx.fillStyle = '#DC143C';
    for (let i = 0; i < 4; i++) {
      const t = i * 0.25;
      const x = -size * 0.4 - t * 0.4;
      const y = bounce + size * 0.1 + Math.sin(t * Math.PI) * size * 0.35;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - size * 0.08, y - size * 0.15);
      ctx.lineTo(x + size * 0.05, y);
      ctx.closePath();
      ctx.fill();
    }

    // 불꽃 효과 (performing)
    if (isPerforming) {
      ctx.fillStyle = 'rgba(255, 69, 0, 0.7)';
      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(
          size * 0.55 + Math.random() * size * 0.3,
          bounce - size * 0.65 + Math.random() * size * 0.2,
          Math.random() * size * 0.08 + size * 0.03,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
  }

  private static drawPegasus(ctx: CanvasRenderingContext2D, size: number, bounce: number, isPerforming: boolean): void {
    const flyHeight = isPerforming ? Math.sin(Date.now() * 0.003) * size * 0.3 : 0;

    // 몸통
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.ellipse(0, bounce + flyHeight, size * 0.4, size * 0.32, 0, 0, Math.PI * 2);
    ctx.fill();

    // 목
    ctx.fillRect(-size * 0.1, bounce - size * 0.45 + flyHeight, size * 0.2, size * 0.45);

    // 머리
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.55 + flyHeight, size * 0.22, size * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();

    // 귀
    ctx.beginPath();
    ctx.moveTo(-size * 0.15, bounce - size * 0.65 + flyHeight);
    ctx.lineTo(-size * 0.2, bounce - size * 0.75 + flyHeight);
    ctx.lineTo(-size * 0.1, bounce - size * 0.68 + flyHeight);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(size * 0.15, bounce - size * 0.65 + flyHeight);
    ctx.lineTo(size * 0.2, bounce - size * 0.75 + flyHeight);
    ctx.lineTo(size * 0.1, bounce - size * 0.68 + flyHeight);
    ctx.closePath();
    ctx.fill();

    // 눈
    ctx.fillStyle = '#4169E1';
    ctx.beginPath();
    ctx.arc(-size * 0.08, bounce - size * 0.58 + flyHeight, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.08, bounce - size * 0.58 + flyHeight, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.08, bounce - size * 0.58 + flyHeight, size * 0.025, 0, Math.PI * 2);
    ctx.arc(size * 0.08, bounce - size * 0.58 + flyHeight, size * 0.025, 0, Math.PI * 2);
    ctx.fill();

    // 갈기 (흰색 우아한)
    ctx.fillStyle = '#F0F8FF';
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.ellipse(
        -size * 0.15 + Math.sin(i * 0.5) * size * 0.08,
        bounce - size * 0.6 + i * size * 0.08 + flyHeight,
        size * 0.12,
        size * 0.08,
        i * 0.3,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // 날개 (천사 날개)
    const wingFlap = isPerforming ? Math.sin(Date.now() * 0.01) * 0.3 : 0;
    ctx.fillStyle = '#FFF';

    // 왼쪽 날개
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = -Math.PI / 3 - i * 0.15 + wingFlap;
      const length = size * (0.5 - i * 0.08);
      ctx.ellipse(
        Math.cos(angle) * length * 0.3,
        bounce - size * 0.1 + flyHeight + Math.sin(angle) * length,
        size * 0.15,
        length * 0.4,
        angle + Math.PI / 2,
        0,
        Math.PI * 2
      );
    }
    ctx.fill();

    // 오른쪽 날개
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = -Math.PI * 2 / 3 + i * 0.15 - wingFlap;
      const length = size * (0.5 - i * 0.08);
      ctx.ellipse(
        Math.cos(angle) * length * 0.3,
        bounce - size * 0.1 + flyHeight + Math.sin(angle) * length,
        size * 0.15,
        length * 0.4,
        angle - Math.PI / 2,
        0,
        Math.PI * 2
      );
    }
    ctx.fill();

    // 다리
    ctx.fillRect(-size * 0.25, bounce + size * 0.22 + flyHeight, size * 0.08, size * 0.3);
    ctx.fillRect(-size * 0.08, bounce + size * 0.22 + flyHeight, size * 0.08, size * 0.3);
    ctx.fillRect(size * 0, bounce + size * 0.22 + flyHeight, size * 0.08, size * 0.3);
    ctx.fillRect(size * 0.17, bounce + size * 0.22 + flyHeight, size * 0.08, size * 0.3);

    // 깃털 효과 (performing)
    if (isPerforming) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(
          (Math.random() - 0.5) * size * 0.8,
          bounce + flyHeight + (Math.random() - 0.5) * size * 0.8,
          Math.random() * size * 0.06 + size * 0.02,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
  }

  private static drawGriffin(ctx: CanvasRenderingContext2D, size: number, bounce: number, isPerforming: boolean): void {
    // 사자 뒷몸통
    ctx.fillStyle = '#DAA520';
    ctx.beginPath();
    ctx.ellipse(-size * 0.15, bounce + size * 0.05, size * 0.35, size * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // 독수리 앞몸통
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.ellipse(size * 0.2, bounce - size * 0.05, size * 0.3, size * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();

    // 목
    ctx.fillRect(size * 0.05, bounce - size * 0.35, size * 0.15, size * 0.3);

    // 독수리 머리
    ctx.beginPath();
    ctx.ellipse(size * 0.28, bounce - size * 0.42, size * 0.2, size * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();

    // 부리 (독수리)
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.moveTo(size * 0.38, bounce - size * 0.42);
    ctx.lineTo(size * 0.52, bounce - size * 0.45);
    ctx.lineTo(size * 0.48, bounce - size * 0.38);
    ctx.closePath();
    ctx.fill();

    // 눈 (날카로운)
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.46, size * 0.06, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.26, bounce - size * 0.46, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (뾰족한)
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.moveTo(size * 0.18, bounce - size * 0.55);
    ctx.lineTo(size * 0.15, bounce - size * 0.68);
    ctx.lineTo(size * 0.22, bounce - size * 0.58);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(size * 0.35, bounce - size * 0.55);
    ctx.lineTo(size * 0.38, bounce - size * 0.68);
    ctx.lineTo(size * 0.32, bounce - size * 0.58);
    ctx.closePath();
    ctx.fill();

    // 날개 (독수리 날개)
    const wingFlap = isPerforming ? Math.sin(Date.now() * 0.01) * 0.2 : 0;
    ctx.fillStyle = '#654321';

    // 왼쪽 날개
    ctx.beginPath();
    ctx.ellipse(
      -size * 0.1,
      bounce - size * 0.15,
      size * 0.45,
      size * 0.25,
      -0.5 + wingFlap,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // 깃털 디테일
    ctx.fillStyle = '#8B6914';
    for (let i = 0; i < 5; i++) {
      const angle = -0.7 + i * 0.15 + wingFlap;
      ctx.beginPath();
      ctx.ellipse(
        Math.cos(angle) * size * 0.4,
        bounce - size * 0.15 + Math.sin(angle) * size * 0.4,
        size * 0.08,
        size * 0.2,
        angle,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // 독수리 다리 (앞)
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(size * 0.15, bounce + size * 0.15, size * 0.06, size * 0.25);
    ctx.fillRect(size * 0.28, bounce + size * 0.15, size * 0.06, size * 0.25);

    // 발톱
    for (let i = 0; i < 3; i++) {
      ctx.fillRect(size * 0.15 + i * size * 0.02, bounce + size * 0.38, size * 0.015, size * 0.08);
      ctx.fillRect(size * 0.28 + i * size * 0.02, bounce + size * 0.38, size * 0.015, size * 0.08);
    }

    // 사자 다리 (뒤)
    ctx.fillStyle = '#DAA520';
    ctx.fillRect(-size * 0.35, bounce + size * 0.25, size * 0.1, size * 0.25);
    ctx.fillRect(-size * 0.18, bounce + size * 0.25, size * 0.1, size * 0.25);

    // 사자 꼬리
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = size * 0.08;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.45, bounce + size * 0.1);
    ctx.quadraticCurveTo(-size * 0.65, bounce + size * 0.35, -size * 0.7, bounce + size * 0.5);
    ctx.stroke();

    // 꼬리 술
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.arc(-size * 0.7, bounce + size * 0.5, size * 0.1, 0, Math.PI * 2);
    ctx.fill();
  }

  // ===== FARM ANIMALS =====

  private static drawHorse(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.45, size * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    // 목
    ctx.fillRect(-size * 0.12, bounce - size * 0.5, size * 0.24, size * 0.5);

    // 머리
    ctx.beginPath();
    ctx.ellipse(0, bounce - size * 0.6, size * 0.2, size * 0.22, 0, 0, Math.PI * 2);
    ctx.fill();

    // 주둥이
    ctx.fillStyle = '#A0522D';
    ctx.beginPath();
    ctx.ellipse(size * 0.12, bounce - size * 0.55, size * 0.15, size * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();

    // 귀
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.ellipse(-size * 0.15, bounce - size * 0.75, size * 0.08, size * 0.12, -0.3, 0, Math.PI * 2);
    ctx.ellipse(size * 0.15, bounce - size * 0.75, size * 0.08, size * 0.12, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.08, bounce - size * 0.62, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.08, bounce - size * 0.62, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 갈기
    ctx.fillStyle = '#654321';
    for (let i = 0; i < 6; i++) {
      const y = bounce - size * 0.65 + i * size * 0.08;
      ctx.beginPath();
      ctx.ellipse(-size * 0.18, y, size * 0.08, size * 0.1, -0.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // 다리
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(-size * 0.3, bounce + size * 0.25, size * 0.08, size * 0.4);
    ctx.fillRect(-size * 0.1, bounce + size * 0.25, size * 0.08, size * 0.4);
    ctx.fillRect(size * 0.02, bounce + size * 0.25, size * 0.08, size * 0.4);
    ctx.fillRect(size * 0.22, bounce + size * 0.25, size * 0.08, size * 0.4);

    // 꼬리
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = size * 0.12;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.4, bounce);
    ctx.quadraticCurveTo(-size * 0.55, bounce + size * 0.25, -size * 0.6, bounce + size * 0.5);
    ctx.stroke();
  }

  private static drawCow(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (흰색과 검은 점)
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.45, size * 0.38, 0, 0, Math.PI * 2);
    ctx.fill();

    // 검은 점무늬
    ctx.fillStyle = '#000';
    const spots = [
      { x: -size * 0.2, y: bounce - size * 0.1, r: size * 0.12 },
      { x: size * 0.15, y: bounce + size * 0.05, r: size * 0.15 },
      { x: -size * 0.1, y: bounce + size * 0.2, r: size * 0.1 },
      { x: size * 0.25, y: bounce - size * 0.15, r: size * 0.08 }
    ];
    for (const spot of spots) {
      ctx.beginPath();
      ctx.ellipse(spot.x, spot.y, spot.r, spot.r * 0.8, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // 머리
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.ellipse(size * 0.35, bounce - size * 0.15, size * 0.25, size * 0.22, 0, 0, Math.PI * 2);
    ctx.fill();

    // 귀
    ctx.beginPath();
    ctx.ellipse(size * 0.22, bounce - size * 0.32, size * 0.12, size * 0.08, -0.5, 0, Math.PI * 2);
    ctx.ellipse(size * 0.48, bounce - size * 0.32, size * 0.12, size * 0.08, 0.5, 0, Math.PI * 2);
    ctx.fill();

    // 뿔
    ctx.fillStyle = '#F5DEB3';
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.38, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.45, bounce - size * 0.38, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.3, bounce - size * 0.2, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.4, bounce - size * 0.2, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.ellipse(size * 0.48, bounce - size * 0.08, size * 0.12, size * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();

    // 콧구멍
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.45, bounce - size * 0.08, size * 0.03, 0, Math.PI * 2);
    ctx.arc(size * 0.51, bounce - size * 0.08, size * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 다리
    ctx.fillStyle = '#FFF';
    ctx.fillRect(-size * 0.32, bounce + size * 0.28, size * 0.1, size * 0.3);
    ctx.fillRect(-size * 0.1, bounce + size * 0.28, size * 0.1, size * 0.3);
    ctx.fillRect(size * 0.08, bounce + size * 0.28, size * 0.1, size * 0.3);
    ctx.fillRect(size * 0.3, bounce + size * 0.28, size * 0.1, size * 0.3);

    // 꼬리
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = size * 0.05;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-size * 0.4, bounce);
    ctx.quadraticCurveTo(-size * 0.5, bounce + size * 0.25, -size * 0.52, bounce + size * 0.45);
    ctx.stroke();

    // 꼬리 술
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.52, bounce + size * 0.45, size * 0.06, 0, Math.PI * 2);
    ctx.fill();
  }

  private static drawPig(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통 (분홍색)
    ctx.fillStyle = '#FFB6C1';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.42, size * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.ellipse(size * 0.32, bounce - size * 0.12, size * 0.28, size * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();

    // 코 (크고 평평한)
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.ellipse(size * 0.52, bounce - size * 0.08, size * 0.15, size * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();

    // 콧구멍
    ctx.fillStyle = '#C71585';
    ctx.beginPath();
    ctx.arc(size * 0.48, bounce - size * 0.08, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.56, bounce - size * 0.08, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 귀 (삼각형)
    ctx.fillStyle = '#FFB6C1';
    ctx.beginPath();
    ctx.moveTo(size * 0.22, bounce - size * 0.32);
    ctx.lineTo(size * 0.18, bounce - size * 0.42);
    ctx.lineTo(size * 0.28, bounce - size * 0.35);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(size * 0.42, bounce - size * 0.32);
    ctx.lineTo(size * 0.46, bounce - size * 0.42);
    ctx.lineTo(size * 0.36, bounce - size * 0.35);
    ctx.closePath();
    ctx.fill();

    // 눈 (작은)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.28, bounce - size * 0.18, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.38, bounce - size * 0.18, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 다리 (짧고 통통한)
    ctx.fillStyle = '#FFB6C1';
    ctx.fillRect(-size * 0.28, bounce + size * 0.25, size * 0.1, size * 0.22);
    ctx.fillRect(-size * 0.08, bounce + size * 0.25, size * 0.1, size * 0.22);
    ctx.fillRect(size * 0.08, bounce + size * 0.25, size * 0.1, size * 0.22);
    ctx.fillRect(size * 0.28, bounce + size * 0.25, size * 0.1, size * 0.22);

    // 꼬리 (말린)
    ctx.strokeStyle = '#FFB6C1';
    ctx.lineWidth = size * 0.06;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(-size * 0.42, bounce + size * 0.05, size * 0.08, 0, Math.PI * 1.5);
    ctx.stroke();
  }

  private static drawSheep(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 양털 (동그란 뭉치들)
    ctx.fillStyle = '#F5F5F5';
    const woolClusters = [
      { x: -size * 0.25, y: bounce - size * 0.1 },
      { x: -size * 0.1, y: bounce - size * 0.15 },
      { x: size * 0.05, y: bounce - size * 0.12 },
      { x: size * 0.2, y: bounce - size * 0.08 },
      { x: -size * 0.18, y: bounce + size * 0.08 },
      { x: 0, y: bounce + size * 0.05 },
      { x: size * 0.15, y: bounce + size * 0.1 }
    ];

    for (const cluster of woolClusters) {
      ctx.beginPath();
      ctx.arc(cluster.x, cluster.y, size * 0.15, 0, Math.PI * 2);
      ctx.fill();
    }

    // 머리 (검은색)
    ctx.fillStyle = '#2F2F2F';
    ctx.beginPath();
    ctx.ellipse(size * 0.35, bounce - size * 0.18, size * 0.2, size * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();

    // 귀
    ctx.beginPath();
    ctx.ellipse(size * 0.25, bounce - size * 0.32, size * 0.08, size * 0.12, -0.3, 0, Math.PI * 2);
    ctx.ellipse(size * 0.45, bounce - size * 0.32, size * 0.08, size * 0.12, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // 눈 (흰색 원에 검은 점)
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(size * 0.3, bounce - size * 0.22, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.4, bounce - size * 0.22, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.3, bounce - size * 0.22, size * 0.025, 0, Math.PI * 2);
    ctx.arc(size * 0.4, bounce - size * 0.22, size * 0.025, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.42, bounce - size * 0.14, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 다리 (검은색)
    ctx.fillRect(-size * 0.22, bounce + size * 0.25, size * 0.08, size * 0.25);
    ctx.fillRect(-size * 0.05, bounce + size * 0.25, size * 0.08, size * 0.25);
    ctx.fillRect(size * 0.05, bounce + size * 0.25, size * 0.08, size * 0.25);
    ctx.fillRect(size * 0.22, bounce + size * 0.25, size * 0.08, size * 0.25);
  }

  private static drawGoat(ctx: CanvasRenderingContext2D, size: number, bounce: number): void {
    // 몸통
    ctx.fillStyle = '#F5F5DC';
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.38, size * 0.32, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.ellipse(size * 0.3, bounce - size * 0.2, size * 0.22, size * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();

    // 뿔 (곡선)
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = size * 0.05;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(size * 0.2, bounce - size * 0.35);
    ctx.quadraticCurveTo(size * 0.15, bounce - size * 0.5, size * 0.22, bounce - size * 0.55);
    ctx.moveTo(size * 0.4, bounce - size * 0.35);
    ctx.quadraticCurveTo(size * 0.45, bounce - size * 0.5, size * 0.38, bounce - size * 0.55);
    ctx.stroke();

    // 귀 (뾰족한)
    ctx.fillStyle = '#F5F5DC';
    ctx.beginPath();
    ctx.moveTo(size * 0.18, bounce - size * 0.35);
    ctx.lineTo(size * 0.14, bounce - size * 0.45);
    ctx.lineTo(size * 0.22, bounce - size * 0.38);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(size * 0.42, bounce - size * 0.35);
    ctx.lineTo(size * 0.46, bounce - size * 0.45);
    ctx.lineTo(size * 0.38, bounce - size * 0.38);
    ctx.closePath();
    ctx.fill();

    // 눈 (황금색)
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(size * 0.25, bounce - size * 0.24, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.35, bounce - size * 0.24, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 동공 (사각형 - 염소 특징)
    ctx.fillStyle = '#000';
    ctx.fillRect(size * 0.23, bounce - size * 0.26, size * 0.04, size * 0.04);
    ctx.fillRect(size * 0.33, bounce - size * 0.26, size * 0.04, size * 0.04);

    // 코
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.38, bounce - size * 0.16, size * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // 턱수염
    ctx.fillStyle = '#D2B48C';
    ctx.beginPath();
    ctx.ellipse(size * 0.32, bounce - size * 0.08, size * 0.08, size * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();

    // 다리
    ctx.fillStyle = '#F5F5DC';
    ctx.fillRect(-size * 0.25, bounce + size * 0.22, size * 0.08, size * 0.3);
    ctx.fillRect(-size * 0.08, bounce + size * 0.22, size * 0.08, size * 0.3);
    ctx.fillRect(size * 0.05, bounce + size * 0.22, size * 0.08, size * 0.3);
    ctx.fillRect(size * 0.22, bounce + size * 0.22, size * 0.08, size * 0.3);

    // 꼬리
    ctx.strokeStyle = '#F5F5DC';
    ctx.lineWidth = size * 0.04;
    ctx.beginPath();
    ctx.moveTo(-size * 0.32, bounce + size * 0.05);
    ctx.lineTo(-size * 0.42, bounce + size * 0.25);
    ctx.stroke();
  }

  private static drawRabbit(ctx: CanvasRenderingContext2D, size: number, bounce: number, speciesId: string): void {
    // 색상
    let rabbitColor = '#F5F5F5';
    if (speciesId === 'moon_rabbit') {
      rabbitColor = '#E6E6FA';
    } else if (speciesId === 'arctic_hare') {
      rabbitColor = '#FFFAFA';
    }

    // 몸통
    ctx.fillStyle = rabbitColor;
    ctx.beginPath();
    ctx.ellipse(0, bounce, size * 0.35, size * 0.38, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.ellipse(size * 0.22, bounce - size * 0.25, size * 0.22, size * 0.24, 0, 0, Math.PI * 2);
    ctx.fill();

    // 긴 귀
    ctx.beginPath();
    ctx.ellipse(size * 0.12, bounce - size * 0.52, size * 0.1, size * 0.3, -0.2, 0, Math.PI * 2);
    ctx.ellipse(size * 0.32, bounce - size * 0.52, size * 0.1, size * 0.3, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // 귀 안쪽 (분홍색)
    ctx.fillStyle = '#FFB6C1';
    ctx.beginPath();
    ctx.ellipse(size * 0.12, bounce - size * 0.52, size * 0.05, size * 0.2, -0.2, 0, Math.PI * 2);
    ctx.ellipse(size * 0.32, bounce - size * 0.52, size * 0.05, size * 0.2, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // 눈 (큰)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(size * 0.16, bounce - size * 0.28, size * 0.05, 0, Math.PI * 2);
    ctx.arc(size * 0.28, bounce - size * 0.28, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 코 (삼각형)
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.moveTo(size * 0.24, bounce - size * 0.18);
    ctx.lineTo(size * 0.21, bounce - size * 0.15);
    ctx.lineTo(size * 0.27, bounce - size * 0.15);
    ctx.closePath();
    ctx.fill();

    // 수염
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    for (let i = -1; i <= 1; i++) {
      ctx.beginPath();
      ctx.moveTo(size * 0.24, bounce - size * 0.15 + i * size * 0.02);
      ctx.lineTo(size * 0.4, bounce - size * 0.15 + i * size * 0.03);
      ctx.stroke();
    }

    // 앞발
    ctx.fillStyle = rabbitColor;
    ctx.beginPath();
    ctx.arc(-size * 0.1, bounce + size * 0.25, size * 0.08, 0, Math.PI * 2);
    ctx.arc(size * 0.08, bounce + size * 0.25, size * 0.08, 0, Math.PI * 2);
    ctx.fill();

    // 뒷발 (큰)
    ctx.beginPath();
    ctx.ellipse(-size * 0.22, bounce + size * 0.35, size * 0.18, size * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();

    // 꼬리 (솜털)
    ctx.beginPath();
    ctx.arc(-size * 0.3, bounce + size * 0.15, size * 0.08, 0, Math.PI * 2);
    ctx.fill();

    // 달 효과 (moon_rabbit)
    if (speciesId === 'moon_rabbit') {
      ctx.fillStyle = 'rgba(230, 230, 250, 0.5)';
      ctx.beginPath();
      ctx.arc(size * 0.22, bounce - size * 0.6, size * 0.15, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(
          size * 0.22 + Math.cos(angle) * size * 0.25,
          bounce - size * 0.6 + Math.sin(angle) * size * 0.25,
          size * 0.03,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
  }

  /**
   * 새 그리기
   */
  private static drawBird(
    ctx: CanvasRenderingContext2D,
    speciesId: string,
    size: number,
    frame: number,
    isPerforming: boolean
  ): void {
    const wingFlap = Math.sin(frame * 0.3) * 10;
    const flyHeight = isPerforming ? Math.sin(frame * 0.1) * 20 : 0;

    // 몸통
    ctx.fillStyle = speciesId === 'peacock' ? '#4169E1' : '#FFD700';
    ctx.beginPath();
    ctx.ellipse(0, flyHeight, size * 0.25, size * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.arc(0, flyHeight - size * 0.25, size * 0.18, 0, Math.PI * 2);
    ctx.fill();

    // 부리
    ctx.fillStyle = '#FF6347';
    ctx.beginPath();
    ctx.moveTo(size * 0.12, flyHeight - size * 0.25);
    ctx.lineTo(size * 0.25, flyHeight - size * 0.25);
    ctx.lineTo(size * 0.12, flyHeight - size * 0.22);
    ctx.closePath();
    ctx.fill();

    // 날개
    ctx.fillStyle = speciesId === 'peacock' ? '#1E90FF' : '#FFD700';
    ctx.beginPath();
    ctx.ellipse(-size * 0.3, flyHeight + wingFlap * 0.5, size * 0.3, size * 0.15, -Math.PI / 4, 0, Math.PI * 2);
    ctx.ellipse(size * 0.3, flyHeight + wingFlap * 0.5, size * 0.3, size * 0.15, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();

    // 공작 깃털 (peacock)
    if (speciesId === 'peacock' && isPerforming) {
      for (let i = -3; i <= 3; i++) {
        const angle = i * 0.3;
        const distance = size * 0.6;

        ctx.fillStyle = `hsl(${200 + i * 20}, 70%, 50%)`;
        ctx.beginPath();
        ctx.ellipse(
          Math.sin(angle) * distance,
          flyHeight + size * 0.2 - Math.cos(angle) * distance,
          size * 0.15,
          size * 0.3,
          angle,
          0,
          Math.PI * 2
        );
        ctx.fill();

        // 눈 무늬
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(
          Math.sin(angle) * distance,
          flyHeight + size * 0.2 - Math.cos(angle) * distance - size * 0.2,
          size * 0.08,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }

    // 눈
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(-size * 0.05, flyHeight - size * 0.28, size * 0.04, 0, Math.PI * 2);
    ctx.arc(size * 0.05, flyHeight - size * 0.28, size * 0.04, 0, Math.PI * 2);
    ctx.fill();
  }

  /**
   * 파충류 그리기
   */
  private static drawReptile(
    ctx: CanvasRenderingContext2D,
    speciesId: string,
    size: number,
    frame: number
  ): void {
    const wiggle = Math.sin(frame * 0.15) * 5;

    ctx.fillStyle = speciesId === 'snake' ? '#228B22' : '#8B4513';

    // 뱀 또는 도마뱀
    ctx.beginPath();
    ctx.ellipse(wiggle, 0, size * 0.4, size * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();

    // 머리
    ctx.beginPath();
    ctx.arc(size * 0.3 + wiggle, 0, size * 0.12, 0, Math.PI * 2);
    ctx.fill();

    // 무늬
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.arc(-size * 0.2 + i * size * 0.15 + wiggle, 0, size * 0.08, 0, Math.PI * 2);
      ctx.fill();
    }

    // 혀 (뱀)
    if (speciesId === 'snake' && frame % 60 < 30) {
      ctx.strokeStyle = '#FF0000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(size * 0.35 + wiggle, 0);
      ctx.lineTo(size * 0.45 + wiggle, -size * 0.05);
      ctx.lineTo(size * 0.5 + wiggle, 0);
      ctx.stroke();
    }
  }

  /**
   * 수생 동물 그리기
   */
  private static drawAquatic(
    ctx: CanvasRenderingContext2D,
    speciesId: string,
    size: number,
    frame: number,
    isPerforming: boolean
  ): void {
    const swim = Math.sin(frame * 0.2) * 3;
    const jumpHeight = isPerforming ? -Math.abs(Math.sin(frame * 0.05)) * 40 : 0;

    if (speciesId === 'dolphin') {
      // 돌고래
      ctx.fillStyle = '#4682B4';

      // 몸통
      ctx.beginPath();
      ctx.ellipse(swim, jumpHeight, size * 0.5, size * 0.25, 0.3, 0, Math.PI * 2);
      ctx.fill();

      // 등 지느러미
      ctx.beginPath();
      ctx.moveTo(swim - size * 0.1, jumpHeight - size * 0.2);
      ctx.lineTo(swim - size * 0.15, jumpHeight - size * 0.4);
      ctx.lineTo(swim, jumpHeight - size * 0.15);
      ctx.closePath();
      ctx.fill();

      // 꼬리 지느러미
      ctx.beginPath();
      ctx.moveTo(swim - size * 0.4, jumpHeight);
      ctx.lineTo(swim - size * 0.6, jumpHeight - size * 0.15);
      ctx.lineTo(swim - size * 0.6, jumpHeight + size * 0.15);
      ctx.closePath();
      ctx.fill();

      // 눈
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(swim + size * 0.3, jumpHeight - size * 0.05, size * 0.05, 0, Math.PI * 2);
      ctx.fill();

      // 물보라 효과 (점프 중)
      if (isPerforming && jumpHeight < -10) {
        ctx.fillStyle = 'rgba(173, 216, 230, 0.6)';
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.arc(
            swim + (Math.random() - 0.5) * size,
            jumpHeight + size * 0.3 + Math.random() * 20,
            Math.random() * 5 + 2,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      }
    } else {
      // 기본 물고기
      ctx.fillStyle = '#FF6347';

      // 몸통
      ctx.beginPath();
      ctx.ellipse(swim, 0, size * 0.3, size * 0.15, 0, 0, Math.PI * 2);
      ctx.fill();

      // 꼬리
      ctx.beginPath();
      ctx.moveTo(swim - size * 0.25, 0);
      ctx.lineTo(swim - size * 0.45, -size * 0.15);
      ctx.lineTo(swim - size * 0.45, size * 0.15);
      ctx.closePath();
      ctx.fill();

      // 눈
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(swim + size * 0.2, -size * 0.05, size * 0.04, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
