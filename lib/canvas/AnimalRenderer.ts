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
      case 'lion':
        this.drawLion(ctx, size, bounce, isPerforming);
        break;
      case 'elephant':
        this.drawElephant(ctx, size, bounce, isPerforming);
        break;
      case 'panda':
        this.drawPanda(ctx, size, bounce, isPerforming);
        break;
      case 'giraffe':
        this.drawGiraffe(ctx, size, bounce);
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
