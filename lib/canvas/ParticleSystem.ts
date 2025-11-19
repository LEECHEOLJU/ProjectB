// 파티클 시스템 - 쇼 이펙트용
import type { Particle, ShowEffect } from './types';

export class ParticleSystem {
  private particles: Particle[] = [];
  private showEffects: ShowEffect[] = [];

  /**
   * 쇼 이펙트 시작
   */
  startShowEffect(x: number, y: number, type: ShowEffect['type']): void {
    const effect: ShowEffect = {
      x,
      y,
      type,
      startTime: Date.now(),
      duration: 5000, // 5초
      particles: [],
    };

    // 타입별로 다른 파티클 생성
    switch (type) {
      case 'fireworks':
        this.createFireworks(effect);
        break;
      case 'hearts':
        this.createHearts(effect);
        break;
      case 'stars':
        this.createStars(effect);
        break;
      case 'sparkles':
        this.createSparkles(effect);
        break;
    }

    this.showEffects.push(effect);
  }

  /**
   * 불꽃놀이 파티클
   */
  private createFireworks(effect: ShowEffect): void {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#95E1D3', '#FF6347'];

    for (let i = 0; i < 50; i++) {
      const angle = (Math.PI * 2 * i) / 50;
      const speed = 2 + Math.random() * 3;

      effect.particles.push({
        x: effect.x,
        y: effect.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        life: 100,
        maxLife: 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 3 + Math.random() * 3,
      });
    }
  }

  /**
   * 하트 파티클
   */
  private createHearts(effect: ShowEffect): void {
    for (let i = 0; i < 20; i++) {
      effect.particles.push({
        x: effect.x + (Math.random() - 0.5) * 100,
        y: effect.y + Math.random() * 50,
        vx: (Math.random() - 0.5) * 1,
        vy: -1 - Math.random() * 2,
        life: 120,
        maxLife: 120,
        color: '#FF69B4',
        size: 10 + Math.random() * 10,
      });
    }
  }

  /**
   * 별 파티클
   */
  private createStars(effect: ShowEffect): void {
    for (let i = 0; i < 30; i++) {
      effect.particles.push({
        x: effect.x + (Math.random() - 0.5) * 80,
        y: effect.y + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 100,
        maxLife: 100,
        color: '#FFD700',
        size: 5 + Math.random() * 5,
      });
    }
  }

  /**
   * 반짝임 파티클
   */
  private createSparkles(effect: ShowEffect): void {
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 60;

      effect.particles.push({
        x: effect.x + Math.cos(angle) * distance,
        y: effect.y + Math.sin(angle) * distance,
        vx: Math.cos(angle) * 0.5,
        vy: Math.sin(angle) * 0.5,
        life: 80,
        maxLife: 80,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
        size: 2 + Math.random() * 4,
      });
    }
  }

  /**
   * 모든 파티클 업데이트
   */
  update(): void {
    // 쇼 이펙트 업데이트
    this.showEffects = this.showEffects.filter((effect) => {
      const elapsed = Date.now() - effect.startTime;
      if (elapsed > effect.duration) return false;

      // 파티클 업데이트
      effect.particles = effect.particles.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // 중력
        particle.life -= 1;

        return particle.life > 0;
      });

      // 주기적으로 새 파티클 추가
      if (elapsed % 200 < 50) {
        if (effect.type === 'fireworks') {
          this.createFireworks(effect);
        }
      }

      return true;
    });
  }

  /**
   * 모든 파티클 렌더링
   */
  render(
    ctx: CanvasRenderingContext2D,
    cameraX: number,
    cameraY: number,
    zoom: number
  ): void {
    this.showEffects.forEach((effect) => {
      effect.particles.forEach((particle) => {
        const screenX = (particle.x - cameraX) * zoom;
        const screenY = (particle.y - cameraY) * zoom;
        const alpha = particle.life / particle.maxLife;

        ctx.save();
        ctx.globalAlpha = alpha;

        if (effect.type === 'hearts') {
          // 하트 모양 그리기
          this.drawHeart(ctx, screenX, screenY, particle.size * zoom, particle.color);
        } else if (effect.type === 'stars') {
          // 별 모양 그리기
          this.drawStar(ctx, screenX, screenY, particle.size * zoom, particle.color);
        } else {
          // 원형 파티클
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(screenX, screenY, particle.size * zoom, 0, Math.PI * 2);
          ctx.fill();

          // 빛나는 효과
          if (effect.type === 'sparkles') {
            ctx.strokeStyle = '#FFF';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(screenX - particle.size * zoom * 2, screenY);
            ctx.lineTo(screenX + particle.size * zoom * 2, screenY);
            ctx.moveTo(screenX, screenY - particle.size * zoom * 2);
            ctx.lineTo(screenX, screenY + particle.size * zoom * 2);
            ctx.stroke();
          }
        }

        ctx.restore();
      });
    });
  }

  /**
   * 하트 모양 그리기
   */
  private drawHeart(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    color: string
  ): void {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y + size * 0.3);
    ctx.bezierCurveTo(x, y, x - size * 0.5, y - size * 0.5, x - size * 0.5, y + size * 0.1);
    ctx.bezierCurveTo(x - size * 0.5, y + size * 0.5, x, y + size * 0.7, x, y + size);
    ctx.bezierCurveTo(x, y + size * 0.7, x + size * 0.5, y + size * 0.5, x + size * 0.5, y + size * 0.1);
    ctx.bezierCurveTo(x + size * 0.5, y - size * 0.5, x, y, x, y + size * 0.3);
    ctx.closePath();
    ctx.fill();
  }

  /**
   * 별 모양 그리기
   */
  private drawStar(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    color: string
  ): void {
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
      const radius = i % 2 === 0 ? size : size * 0.4;
      const px = x + Math.cos(angle) * radius;
      const py = y + Math.sin(angle) * radius;
      if (i === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.closePath();
    ctx.fill();
  }

  /**
   * 일반 파티클 추가 (범용)
   */
  addParticle(particle: Particle): void {
    this.particles.push(particle);
  }

  /**
   * 모든 파티클 클리어
   */
  clear(): void {
    this.particles = [];
    this.showEffects = [];
  }
}
