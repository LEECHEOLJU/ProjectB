// 건물 및 시설 2D 렌더러
import type { CanvasBuilding } from './types';

export class BuildingRenderer {
  /**
   * 건물을 캔버스에 그립니다
   */
  static drawBuilding(
    ctx: CanvasRenderingContext2D,
    building: CanvasBuilding,
    cameraX: number,
    cameraY: number,
    zoom: number
  ): void {
    const screenX = (building.x - cameraX) * zoom;
    const screenY = (building.y - cameraY) * zoom;
    const width = building.width * zoom;
    const height = building.height * zoom;

    ctx.save();
    ctx.translate(screenX, screenY);

    switch (building.type) {
      case 'enclosure':
        this.drawEnclosure(ctx, width, height, building.color, building.name);
        break;
      case 'shop':
        this.drawShop(ctx, width, height);
        break;
      case 'restaurant':
        this.drawRestaurant(ctx, width, height);
        break;
      case 'attraction':
        this.drawAttraction(ctx, width, height);
        break;
      case 'entrance':
        this.drawEntrance(ctx, width, height);
        break;
    }

    ctx.restore();
  }

  /**
   * 동물 우리 그리기
   */
  private static drawEnclosure(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    color: string,
    name: string
  ): void {
    // 잔디 배경
    const grassGradient = ctx.createLinearGradient(0, 0, 0, height);
    grassGradient.addColorStop(0, '#90EE90');
    grassGradient.addColorStop(1, '#228B22');
    ctx.fillStyle = grassGradient;
    ctx.fillRect(0, 0, width, height);

    // 잔디 디테일
    ctx.strokeStyle = '#2E8B57';
    ctx.lineWidth = 1;
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.random() * 3 - 1.5, y - 5);
      ctx.stroke();
    }

    // 울타리
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.setLineDash([]);
    ctx.strokeRect(0, 0, width, height);

    // 울타리 기둥
    const posts = 8;
    for (let i = 0; i <= posts; i++) {
      const x = (i / posts) * width;
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(x - 2, -5, 4, 10);
      ctx.fillRect(x - 2, height - 5, 4, 10);
    }

    for (let i = 0; i <= posts; i++) {
      const y = (i / posts) * height;
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(-5, y - 2, 10, 4);
      ctx.fillRect(width - 5, y - 2, 10, 4);
    }

    // 이름 표시
    ctx.fillStyle = '#FFF';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.strokeText(name, width / 2, -10);
    ctx.fillText(name, width / 2, -10);

    // 물웅덩이 (랜덤)
    if (Math.random() > 0.5) {
      ctx.fillStyle = '#87CEEB';
      ctx.beginPath();
      ctx.ellipse(width * 0.7, height * 0.7, width * 0.15, height * 0.1, 0, 0, Math.PI * 2);
      ctx.fill();

      // 물결
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(width * 0.7, height * 0.7, width * 0.08, 0, Math.PI * 2);
      ctx.stroke();
    }

    // 나무 (랜덤)
    if (Math.random() > 0.6) {
      const treeX = width * 0.3;
      const treeY = height * 0.4;

      // 나무 줄기
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(treeX - 3, treeY - 15, 6, 30);

      // 나뭇잎
      ctx.fillStyle = '#228B22';
      ctx.beginPath();
      ctx.arc(treeX, treeY - 20, 15, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#2E8B57';
      ctx.beginPath();
      ctx.arc(treeX - 10, treeY - 15, 12, 0, Math.PI * 2);
      ctx.arc(treeX + 10, treeY - 15, 12, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /**
   * 상점 그리기
   */
  private static drawShop(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 건물 본체
    const buildingGradient = ctx.createLinearGradient(0, 0, width, 0);
    buildingGradient.addColorStop(0, '#FF6B6B');
    buildingGradient.addColorStop(1, '#FF8E8E');
    ctx.fillStyle = buildingGradient;
    ctx.fillRect(0, height * 0.3, width, height * 0.7);

    // 지붕
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.moveTo(width * 0.5, 0);
    ctx.lineTo(0, height * 0.3);
    ctx.lineTo(width, height * 0.3);
    ctx.closePath();
    ctx.fill();

    // 지붕 디테일
    ctx.strokeStyle = '#600000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, height * 0.3);
    ctx.lineTo(width, height * 0.3);
    ctx.stroke();

    // 문
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(width * 0.4, height * 0.6, width * 0.2, height * 0.4);

    // 문 손잡이
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(width * 0.55, height * 0.8, 3, 0, Math.PI * 2);
    ctx.fill();

    // 창문
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(width * 0.15, height * 0.45, width * 0.2, height * 0.2);
    ctx.fillRect(width * 0.65, height * 0.45, width * 0.2, height * 0.2);

    // 창문 프레임
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.25, height * 0.45);
    ctx.lineTo(width * 0.25, height * 0.65);
    ctx.moveTo(width * 0.15, height * 0.55);
    ctx.lineTo(width * 0.35, height * 0.55);
    ctx.moveTo(width * 0.75, height * 0.45);
    ctx.lineTo(width * 0.75, height * 0.65);
    ctx.moveTo(width * 0.65, height * 0.55);
    ctx.lineTo(width * 0.85, height * 0.55);
    ctx.stroke();

    // 간판
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(width * 0.2, height * 0.25, width * 0.6, height * 0.08);
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('SHOP', width * 0.5, height * 0.3);

    // 굴뚝
    ctx.fillStyle = '#8B0000';
    ctx.fillRect(width * 0.7, height * 0.05, width * 0.15, height * 0.25);

    // 연기
    ctx.fillStyle = 'rgba(200, 200, 200, 0.5)';
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(
        width * 0.775 + (Math.random() - 0.5) * 10,
        height * 0.05 - i * 10 + (Math.random() - 0.5) * 5,
        5 + i * 2,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  }

  /**
   * 레스토랑 그리기
   */
  private static drawRestaurant(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 건물
    ctx.fillStyle = '#FFA07A';
    ctx.fillRect(0, height * 0.3, width, height * 0.7);

    // 지붕
    ctx.fillStyle = '#FF4500';
    ctx.beginPath();
    ctx.moveTo(width * 0.5, 0);
    ctx.lineTo(0, height * 0.3);
    ctx.lineTo(width, height * 0.3);
    ctx.closePath();
    ctx.fill();

    // 파라솔 테이블
    for (let i = 0; i < 2; i++) {
      const x = width * (0.25 + i * 0.5);
      const y = height * 0.7;

      // 테이블
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(x - 15, y, 30, 5);

      // 파라솔 기둥
      ctx.fillRect(x - 2, y - 30, 4, 30);

      // 파라솔
      ctx.fillStyle = i === 0 ? '#FF6B6B' : '#FFD700';
      ctx.beginPath();
      ctx.moveTo(x, y - 30);
      ctx.lineTo(x - 20, y - 20);
      ctx.lineTo(x + 20, y - 20);
      ctx.closePath();
      ctx.fill();
    }

    // 간판
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(width * 0.15, height * 0.35, width * 0.7, height * 0.1);
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🍔 RESTAURANT', width * 0.5, height * 0.42);
  }

  /**
   * 놀이기구 그리기
   */
  private static drawAttraction(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    const time = Date.now() * 0.001;

    // 회전목마 플랫폼
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.7, width * 0.4, height * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();

    // 지붕
    ctx.strokeStyle = '#FF69B4';
    ctx.fillStyle = '#FF69B4';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.1);
    ctx.lineTo(width * 0.1, height * 0.4);
    ctx.lineTo(width * 0.9, height * 0.4);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // 지붕 무늬
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(width * 0.5, height * 0.1);
      ctx.lineTo(
        width * 0.5 + Math.cos(angle) * width * 0.35,
        height * 0.4 + Math.sin(angle) * height * 0.1
      );
      ctx.stroke();
    }

    // 회전하는 기둥들
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2 + time;
      const x = width * 0.5 + Math.cos(angle) * width * 0.25;
      const y = height * 0.55 + Math.sin(angle) * height * 0.1;

      // 기둥
      ctx.strokeStyle = '#FFF';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, height * 0.4);
      ctx.lineTo(x, y);
      ctx.stroke();

      // 말 (간단한 형태)
      ctx.fillStyle = i % 2 === 0 ? '#87CEEB' : '#FFB6C1';
      ctx.beginPath();
      ctx.ellipse(x, y, 8, 12, 0, 0, Math.PI * 2);
      ctx.fill();

      // 말 머리
      ctx.beginPath();
      ctx.ellipse(x + 5, y - 8, 5, 6, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // 중앙 기둥
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(width * 0.5 - 8, height * 0.4, 16, height * 0.3);
  }

  /**
   * 입구 그리기
   */
  private static drawEntrance(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 아치형 입구
    ctx.fillStyle = '#DAA520';
    ctx.fillRect(0, height * 0.3, width * 0.2, height * 0.7);
    ctx.fillRect(width * 0.8, height * 0.3, width * 0.2, height * 0.7);

    // 아치
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.3, width * 0.3, Math.PI, 0, true);
    ctx.closePath();
    ctx.fill();

    // 간판
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(width * 0.2, height * 0.15, width * 0.6, height * 0.1);
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🦁 ZOO ENTRANCE 🦁', width * 0.5, height * 0.22);

    // 장식 깃발
    for (let i = 0; i < 5; i++) {
      const x = width * 0.2 + i * (width * 0.15);
      const colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6BCB77', '#95E1D3'];

      ctx.fillStyle = colors[i % colors.length];
      ctx.beginPath();
      ctx.moveTo(x, height * 0.05);
      ctx.lineTo(x, height * 0.15);
      ctx.lineTo(x + 10, height * 0.1);
      ctx.closePath();
      ctx.fill();

      // 깃발 줄
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height * 0.15);
      ctx.stroke();
    }

    // 티켓 부스
    ctx.fillStyle = '#FF6B6B';
    ctx.fillRect(width * 0.35, height * 0.5, width * 0.3, height * 0.25);

    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(width * 0.4, height * 0.55, width * 0.2, height * 0.15);

    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.fillText('TICKETS', width * 0.5, height * 0.48);
  }

  /**
   * 바닥 타일 그리기
   */
  static drawGround(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    cameraX: number,
    cameraY: number,
    zoom: number
  ): void {
    const tileSize = 50 * zoom;
    const startX = Math.floor(cameraX / 50) * 50;
    const startY = Math.floor(cameraY / 50) * 50;
    const endX = startX + (width / zoom) + 50;
    const endY = startY + (height / zoom) + 50;

    for (let x = startX; x < endX; x += 50) {
      for (let y = startY; y < endY; y += 50) {
        const screenX = (x - cameraX) * zoom;
        const screenY = (y - cameraY) * zoom;

        // 교차 타일 패턴
        const isEven = ((x / 50) + (y / 50)) % 2 === 0;
        ctx.fillStyle = isEven ? '#90EE90' : '#7CCD7C';
        ctx.fillRect(screenX, screenY, tileSize, tileSize);

        // 격자선
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.lineWidth = 1;
        ctx.strokeRect(screenX, screenY, tileSize, tileSize);
      }
    }
  }
}
