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
      case 'info_center':
        this.drawInfoCenter(ctx, width, height);
        break;
      case 'restroom':
        this.drawRestroom(ctx, width, height);
        break;
      case 'bench':
        this.drawBench(ctx, width, height);
        break;
      case 'ice_cream':
        this.drawIceCream(ctx, width, height);
        break;
      case 'souvenir':
        this.drawSouvenir(ctx, width, height);
        break;
      case 'aquarium':
        this.drawAquarium(ctx, width, height);
        break;
      case 'reptile_house':
        this.drawReptileHouse(ctx, width, height);
        break;
      case 'aviary':
        this.drawAviary(ctx, width, height);
        break;
      case 'vet_clinic':
        this.drawVetClinic(ctx, width, height);
        break;
      case 'admin_office':
        this.drawAdminOffice(ctx, width, height);
        break;
      case 'ferris_wheel':
        this.drawFerrisWheel(ctx, width, height);
        break;
      case 'train_station':
        this.drawTrainStation(ctx, width, height);
        break;
      case 'playground':
        this.drawPlayground(ctx, width, height);
        break;
      case 'photo_booth':
        this.drawPhotoBooth(ctx, width, height);
        break;
      case 'fountain':
        this.drawFountain(ctx, width, height);
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
   * 안내소 그리기
   */
  private static drawInfoCenter(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 건물
    ctx.fillStyle = '#4ECDC4';
    ctx.fillRect(0, height * 0.3, width, height * 0.7);

    // 지붕
    ctx.fillStyle = '#2C7A7B';
    ctx.beginPath();
    ctx.moveTo(width * 0.5, 0);
    ctx.lineTo(0, height * 0.3);
    ctx.lineTo(width, height * 0.3);
    ctx.closePath();
    ctx.fill();

    // 대형 "i" 표시
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.5, width * 0.15, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#2C7A7B';
    ctx.font = 'bold 40px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('i', width * 0.5, height * 0.6);

    // 간판
    ctx.fillStyle = '#000';
    ctx.font = 'bold 10px Arial';
    ctx.fillText('INFO', width * 0.5, height * 0.25);
  }

  /**
   * 화장실 그리기
   */
  private static drawRestroom(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 건물
    ctx.fillStyle = '#95E1D3';
    ctx.fillRect(0, height * 0.3, width, height * 0.7);

    // 지붕
    ctx.fillStyle = '#38A169';
    ctx.fillRect(0, height * 0.2, width, height * 0.1);

    // 남녀 표시
    ctx.fillStyle = '#000';

    // 남성 (왼쪽)
    ctx.beginPath();
    ctx.arc(width * 0.3, height * 0.5, width * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(width * 0.28, height * 0.6, width * 0.04, height * 0.15);
    ctx.beginPath();
    ctx.moveTo(width * 0.3, height * 0.65);
    ctx.lineTo(width * 0.25, height * 0.8);
    ctx.lineTo(width * 0.35, height * 0.8);
    ctx.closePath();
    ctx.fill();

    // 여성 (오른쪽)
    ctx.beginPath();
    ctx.arc(width * 0.7, height * 0.5, width * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(width * 0.7, height * 0.6);
    ctx.lineTo(width * 0.6, height * 0.85);
    ctx.lineTo(width * 0.8, height * 0.85);
    ctx.closePath();
    ctx.fill();

    // 문
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(width * 0.15, height * 0.65, width * 0.15, height * 0.35);
    ctx.fillRect(width * 0.7, height * 0.65, width * 0.15, height * 0.35);
  }

  /**
   * 벤치 그리기
   */
  private static drawBench(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 벤치 좌석
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(width * 0.1, height * 0.5, width * 0.8, height * 0.15);

    // 벤치 등받이
    ctx.fillRect(width * 0.1, height * 0.3, width * 0.8, height * 0.1);

    // 지지대
    ctx.fillRect(width * 0.15, height * 0.4, width * 0.05, height * 0.25);
    ctx.fillRect(width * 0.75, height * 0.4, width * 0.05, height * 0.25);

    // 다리
    ctx.fillRect(width * 0.15, height * 0.65, width * 0.05, height * 0.2);
    ctx.fillRect(width * 0.75, height * 0.65, width * 0.05, height * 0.2);

    // 나무 질감
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(width * 0.1, height * 0.5 + i * (height * 0.03));
      ctx.lineTo(width * 0.9, height * 0.5 + i * (height * 0.03));
      ctx.stroke();
    }
  }

  /**
   * 아이스크림 가게 그리기
   */
  private static drawIceCream(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 카트 본체
    ctx.fillStyle = '#FFB6C1';
    ctx.fillRect(width * 0.2, height * 0.4, width * 0.6, height * 0.4);

    // 지붕 (파라솔 스타일)
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.1);
    ctx.lineTo(width * 0.1, height * 0.4);
    ctx.lineTo(width * 0.9, height * 0.4);
    ctx.closePath();
    ctx.fill();

    // 지붕 무늬
    for (let i = 0; i < 8; i++) {
      ctx.fillStyle = i % 2 === 0 ? '#FF69B4' : '#FFB6C1';
      ctx.beginPath();
      ctx.moveTo(width * 0.5, height * 0.1);
      ctx.lineTo(width * 0.1 + i * (width * 0.1), height * 0.4);
      ctx.lineTo(width * 0.1 + (i + 1) * (width * 0.1), height * 0.4);
      ctx.closePath();
      ctx.fill();
    }

    // 큰 아이스크림 콘 디스플레이
    ctx.fillStyle = '#D2691E';
    ctx.beginPath();
    ctx.moveTo(width * 0.45, height * 0.5);
    ctx.lineTo(width * 0.4, height * 0.7);
    ctx.lineTo(width * 0.6, height * 0.7);
    ctx.lineTo(width * 0.55, height * 0.5);
    ctx.closePath();
    ctx.fill();

    // 와플 무늬
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(width * 0.4 + i * 0.04 * width, height * 0.5);
      ctx.lineTo(width * 0.4 + i * 0.04 * width, height * 0.7);
      ctx.stroke();
    }

    // 아이스크림 스쿱
    ctx.fillStyle = '#FFE4E1';
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.45, width * 0.12, 0, Math.PI * 2);
    ctx.fill();

    // 체리
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.38, width * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // 바퀴
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(width * 0.3, height * 0.85, width * 0.08, 0, Math.PI * 2);
    ctx.arc(width * 0.7, height * 0.85, width * 0.08, 0, Math.PI * 2);
    ctx.stroke();

    // 간판
    ctx.fillStyle = '#000';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('ICE CREAM', width * 0.5, height * 0.35);
  }

  /**
   * 기념품 가게 그리기
   */
  private static drawSouvenir(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 건물
    ctx.fillStyle = '#9370DB';
    ctx.fillRect(0, height * 0.3, width, height * 0.7);

    // 지붕
    ctx.fillStyle = '#6A0DAD';
    ctx.beginPath();
    ctx.moveTo(width * 0.5, 0);
    ctx.lineTo(0, height * 0.3);
    ctx.lineTo(width, height * 0.3);
    ctx.closePath();
    ctx.fill();

    // 진열대 (봉제 인형들)
    const toys = [
      { x: 0.25, y: 0.5, color: '#FFD700' }, // 사자
      { x: 0.5, y: 0.5, color: '#FFB6C1' },  // 판다
      { x: 0.75, y: 0.5, color: '#87CEEB' }, // 코끼리
    ];

    toys.forEach(toy => {
      ctx.fillStyle = toy.color;
      ctx.beginPath();
      ctx.arc(width * toy.x, height * toy.y, width * 0.08, 0, Math.PI * 2);
      ctx.fill();

      // 눈
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(width * toy.x - width * 0.03, height * toy.y - height * 0.02, width * 0.015, 0, Math.PI * 2);
      ctx.arc(width * toy.x + width * 0.03, height * toy.y - height * 0.02, width * 0.015, 0, Math.PI * 2);
      ctx.fill();
    });

    // 쇼핑백
    ctx.fillStyle = '#FF6B6B';
    ctx.fillRect(width * 0.3, height * 0.7, width * 0.15, height * 0.2);
    ctx.strokeStyle = '#8B0000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.32, height * 0.7);
    ctx.quadraticCurveTo(width * 0.375, height * 0.65, width * 0.43, height * 0.7);
    ctx.stroke();

    // 간판
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(width * 0.1, height * 0.25, width * 0.8, height * 0.08);
    ctx.fillStyle = '#000';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('SOUVENIRS', width * 0.5, height * 0.3);
  }

  /**
   * 수족관 그리기 (대형 건물)
   */
  private static drawAquarium(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 건물 본체 (유리 느낌)
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#4DA6FF');
    gradient.addColorStop(1, '#0080FF');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, height * 0.2, width, height * 0.8);

    // 유리 반사 효과
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(width * 0.1, height * 0.3, width * 0.3, height * 0.6);

    // 물고기 실루엣들
    const fishes = [
      { x: 0.3, y: 0.4, size: 0.05 },
      { x: 0.6, y: 0.5, size: 0.07 },
      { x: 0.8, y: 0.6, size: 0.04 },
      { x: 0.4, y: 0.7, size: 0.06 },
    ];

    fishes.forEach(fish => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.beginPath();
      ctx.ellipse(width * fish.x, height * fish.y, width * fish.size, height * fish.size * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();

      // 꼬리
      ctx.beginPath();
      ctx.moveTo(width * fish.x - width * fish.size, height * fish.y);
      ctx.lineTo(width * fish.x - width * fish.size * 1.5, height * fish.y - height * fish.size * 0.5);
      ctx.lineTo(width * fish.x - width * fish.size * 1.5, height * fish.y + height * fish.size * 0.5);
      ctx.closePath();
      ctx.fill();
    });

    // 지붕 (돔 형태)
    ctx.fillStyle = '#003366';
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.2, width * 0.4, Math.PI, 0, true);
    ctx.closePath();
    ctx.fill();

    // 입구
    ctx.fillStyle = '#001a33';
    ctx.fillRect(width * 0.4, height * 0.7, width * 0.2, height * 0.3);

    // 간판
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🐠 AQUARIUM 🐠', width * 0.5, height * 0.15);
  }

  /**
   * 파충류관 그리기
   */
  private static drawReptileHouse(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 건물 (어두운 색)
    ctx.fillStyle = '#556B2F';
    ctx.fillRect(0, height * 0.3, width, height * 0.7);

    // 지붕
    ctx.fillStyle = '#3D5A25';
    ctx.fillRect(0, height * 0.2, width, height * 0.1);

    // 뱀 무늬 장식
    ctx.strokeStyle = '#9ACD32';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const y = height * 0.4 + i * (height * 0.1);
      ctx.moveTo(0, y);
      ctx.quadraticCurveTo(width * 0.25, y - height * 0.05, width * 0.5, y);
      ctx.quadraticCurveTo(width * 0.75, y + height * 0.05, width, y);
    }
    ctx.stroke();

    // 뱀 머리 장식
    ctx.fillStyle = '#9ACD32';
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.5, width * 0.15, 0, Math.PI * 2);
    ctx.fill();

    // 뱀 눈
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(width * 0.45, height * 0.48, width * 0.03, 0, Math.PI * 2);
    ctx.arc(width * 0.55, height * 0.48, width * 0.03, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(width * 0.45, height * 0.48, width * 0.01, 0, Math.PI * 2);
    ctx.arc(width * 0.55, height * 0.48, width * 0.01, 0, Math.PI * 2);
    ctx.fill();

    // 간판
    ctx.fillStyle = '#000';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🐍 REPTILE HOUSE', width * 0.5, height * 0.25);
  }

  /**
   * 조류관 그리기
   */
  private static drawAviary(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 철망 구조물
    ctx.strokeStyle = '#696969';
    ctx.lineWidth = 2;

    // 프레임
    ctx.strokeRect(0, 0, width, height);

    // 그물망 패턴
    const gridSize = 10;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // 나무 가지
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(width * 0.2, height * 0.7);
    ctx.lineTo(width * 0.4, height * 0.4);
    ctx.lineTo(width * 0.6, height * 0.5);
    ctx.stroke();

    // 새들
    const birds = [
      { x: 0.3, y: 0.3 },
      { x: 0.6, y: 0.4 },
      { x: 0.8, y: 0.6 },
    ];

    birds.forEach(bird => {
      // 몸통
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.ellipse(width * bird.x, height * bird.y, width * 0.04, height * 0.06, 0, 0, Math.PI * 2);
      ctx.fill();

      // 날개
      ctx.beginPath();
      ctx.ellipse(width * bird.x - width * 0.03, height * bird.y, width * 0.03, height * 0.02, -Math.PI / 4, 0, Math.PI * 2);
      ctx.ellipse(width * bird.x + width * 0.03, height * bird.y, width * 0.03, height * 0.02, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // 간판
    ctx.fillStyle = '#FFF';
    ctx.fillRect(width * 0.3, height * 0.05, width * 0.4, height * 0.1);
    ctx.fillStyle = '#000';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🦜 AVIARY', width * 0.5, height * 0.11);
  }

  /**
   * 동물 병원 그리기
   */
  private static drawVetClinic(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 건물
    ctx.fillStyle = '#FFF';
    ctx.fillRect(0, height * 0.3, width, height * 0.7);

    // 지붕 (빨간 십자)
    ctx.fillStyle = '#DC143C';
    ctx.fillRect(0, height * 0.2, width, height * 0.1);

    // 십자 표시 (대형)
    ctx.fillStyle = '#DC143C';
    ctx.fillRect(width * 0.45, height * 0.4, width * 0.1, height * 0.3);
    ctx.fillRect(width * 0.35, height * 0.5, width * 0.3, height * 0.1);

    // 창문들
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(width * 0.15, height * 0.45, width * 0.15, height * 0.15);
    ctx.fillRect(width * 0.7, height * 0.45, width * 0.15, height * 0.15);

    // 문
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(width * 0.4, height * 0.7, width * 0.2, height * 0.3);

    // 간판
    ctx.fillStyle = '#000';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🏥 VET CLINIC', width * 0.5, height * 0.25);
  }

  /**
   * 관리 사무소 그리기
   */
  private static drawAdminOffice(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 건물
    ctx.fillStyle = '#A9A9A9';
    ctx.fillRect(0, height * 0.25, width, height * 0.75);

    // 창문들 (여러 개)
    ctx.fillStyle = '#4169E1';
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        ctx.fillRect(
          width * (0.1 + col * 0.2),
          height * (0.35 + row * 0.15),
          width * 0.12,
          height * 0.1
        );
      }
    }

    // 지붕
    ctx.fillStyle = '#696969';
    ctx.fillRect(0, height * 0.2, width, height * 0.05);

    // 입구
    ctx.fillStyle = '#000';
    ctx.fillRect(width * 0.4, height * 0.8, width * 0.2, height * 0.2);

    // 간판
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(width * 0.2, height * 0.15, width * 0.6, height * 0.08);
    ctx.fillStyle = '#000';
    ctx.font = 'bold 9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('ADMIN OFFICE', width * 0.5, height * 0.2);
  }

  /**
   * 관람차 그리기
   */
  private static drawFerrisWheel(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    const time = Date.now() * 0.0005;
    const centerX = width * 0.5;
    const centerY = height * 0.5;
    const radius = Math.min(width, height) * 0.4;

    // 지지대
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(centerX - radius * 0.3, height);
    ctx.lineTo(centerX, centerY);
    ctx.lineTo(centerX + radius * 0.3, height);
    ctx.stroke();

    // 바퀴 외곽
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();

    // 살대
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      ctx.strokeStyle = '#4169E1';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius
      );
      ctx.stroke();

      // 곤돌라
      const gondolaAngle = angle + time;
      const gondolaX = centerX + Math.cos(gondolaAngle) * radius;
      const gondolaY = centerY + Math.sin(gondolaAngle) * radius;

      ctx.fillStyle = i % 2 === 0 ? '#FF6B6B' : '#4ECDC4';
      ctx.fillRect(gondolaX - 10, gondolaY - 8, 20, 16);

      // 곤돌라 창문
      ctx.fillStyle = '#87CEEB';
      ctx.fillRect(gondolaX - 6, gondolaY - 4, 12, 8);
    }

    // 중심 허브
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.1, 0, Math.PI * 2);
    ctx.fill();
  }

  /**
   * 기차역 그리기
   */
  private static drawTrainStation(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 플랫폼
    ctx.fillStyle = '#696969';
    ctx.fillRect(0, height * 0.6, width, height * 0.4);

    // 지붕
    ctx.fillStyle = '#DC143C';
    ctx.fillRect(0, height * 0.4, width, height * 0.05);

    // 기둥들
    ctx.fillStyle = '#8B4513';
    for (let i = 0; i < 4; i++) {
      ctx.fillRect(width * (0.2 + i * 0.2), height * 0.45, width * 0.05, height * 0.15);
    }

    // 기차
    const trainX = (Date.now() * 0.05) % (width + 100) - 100;

    // 기차 본체
    ctx.fillStyle = '#4169E1';
    ctx.fillRect(trainX, height * 0.65, 80, 30);

    // 기차 창문
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(trainX + 10, height * 0.7, 15, 15);
    ctx.fillRect(trainX + 35, height * 0.7, 15, 15);
    ctx.fillRect(trainX + 60, height * 0.7, 15, 15);

    // 기차 바퀴
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(trainX + 20, height * 0.95, 8, 0, Math.PI * 2);
    ctx.arc(trainX + 60, height * 0.95, 8, 0, Math.PI * 2);
    ctx.fill();

    // 간판
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🚂 TRAIN STATION', width * 0.5, height * 0.35);
  }

  /**
   * 놀이터 그리기
   */
  private static drawPlayground(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 모래 바닥
    ctx.fillStyle = '#F4A460';
    ctx.fillRect(0, height * 0.7, width, height * 0.3);

    // 미끄럼틀
    ctx.fillStyle = '#FF6347';
    ctx.beginPath();
    ctx.moveTo(width * 0.2, height * 0.4);
    ctx.lineTo(width * 0.3, height * 0.4);
    ctx.lineTo(width * 0.45, height * 0.7);
    ctx.lineTo(width * 0.35, height * 0.7);
    ctx.closePath();
    ctx.fill();

    // 사다리
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.2, height * 0.4);
    ctx.lineTo(width * 0.2, height * 0.7);
    ctx.moveTo(width * 0.25, height * 0.4);
    ctx.lineTo(width * 0.25, height * 0.7);
    ctx.stroke();

    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(width * 0.2, height * (0.45 + i * 0.05));
      ctx.lineTo(width * 0.25, height * (0.45 + i * 0.05));
      ctx.stroke();
    }

    // 그네
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(width * 0.6, height * 0.3);
    ctx.lineTo(width * 0.8, height * 0.3);
    ctx.stroke();

    // 그네 줄
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.65, height * 0.3);
    ctx.lineTo(width * 0.65, height * 0.6);
    ctx.moveTo(width * 0.75, height * 0.3);
    ctx.lineTo(width * 0.75, height * 0.6);
    ctx.stroke();

    // 그네 좌석
    ctx.fillStyle = '#4169E1';
    ctx.fillRect(width * 0.62, height * 0.6, width * 0.16, height * 0.05);

    // 시소
    ctx.fillStyle = '#32CD32';
    ctx.fillRect(width * 0.35, height * 0.6, width * 0.2, height * 0.05);

    // 시소 받침대
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.moveTo(width * 0.45, height * 0.6);
    ctx.lineTo(width * 0.4, height * 0.7);
    ctx.lineTo(width * 0.5, height * 0.7);
    ctx.closePath();
    ctx.fill();
  }

  /**
   * 포토 부스 그리기
   */
  private static drawPhotoBooth(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // 부스 본체
    ctx.fillStyle = '#FF69B4';
    ctx.fillRect(width * 0.2, height * 0.3, width * 0.6, height * 0.7);

    // 지붕
    ctx.fillStyle = '#FF1493';
    ctx.fillRect(width * 0.15, height * 0.25, width * 0.7, height * 0.05);

    // 커튼
    ctx.fillStyle = '#FFB6C1';
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const x = width * (0.25 + i * 0.1);
      ctx.moveTo(x, height * 0.4);
      ctx.quadraticCurveTo(x, height * 0.5, x + width * 0.05, height * 0.6);
      ctx.quadraticCurveTo(x + width * 0.05, height * 0.7, x, height * 0.8);
    }
    ctx.fill();

    // 카메라
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.45, width * 0.08, 0, Math.PI * 2);
    ctx.fill();

    // 렌즈
    ctx.fillStyle = '#4169E1';
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.45, width * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // 플래시
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(width * 0.45, height * 0.38, width * 0.1, height * 0.03);

    // 간판
    ctx.fillStyle = '#000';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('📸 PHOTO BOOTH', width * 0.5, height * 0.2);

    // 샘플 사진들
    const photos = [
      { x: 0.15, y: 0.5 },
      { x: 0.15, y: 0.7 },
      { x: 0.85, y: 0.5 },
      { x: 0.85, y: 0.7 },
    ];

    photos.forEach(photo => {
      ctx.fillStyle = '#FFF';
      ctx.fillRect(width * photo.x - 8, height * photo.y - 10, 16, 20);
      ctx.fillStyle = '#FFD700';
      ctx.fillRect(width * photo.x - 6, height * photo.y - 8, 12, 16);
    });
  }

  /**
   * 분수 그리기
   */
  private static drawFountain(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    const time = Date.now() * 0.003;

    // 분수대 (원형)
    ctx.fillStyle = '#4682B4';
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.6, width * 0.4, 0, Math.PI * 2);
    ctx.fill();

    // 테두리
    ctx.strokeStyle = '#2F4F4F';
    ctx.lineWidth = 4;
    ctx.stroke();

    // 중앙 기둥
    ctx.fillStyle = '#696969';
    ctx.fillRect(width * 0.45, height * 0.4, width * 0.1, height * 0.2);

    // 물줄기들
    const waterStreams = 12;
    for (let i = 0; i < waterStreams; i++) {
      const angle = (i / waterStreams) * Math.PI * 2 + time;
      const distance = width * 0.15;
      const x = width * 0.5 + Math.cos(angle) * distance;
      const y = height * 0.6 + Math.sin(angle) * distance * 0.5;

      // 물방울
      for (let j = 0; j < 5; j++) {
        const dropY = y - j * 10 + Math.sin(time + i + j) * 5;
        ctx.fillStyle = `rgba(135, 206, 250, ${1 - j * 0.2})`;
        ctx.beginPath();
        ctx.arc(x, dropY, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 중앙 분수
    for (let i = 0; i < 8; i++) {
      const y = height * 0.4 - i * 8 + Math.sin(time + i * 0.5) * 4;
      ctx.fillStyle = `rgba(135, 206, 250, ${1 - i * 0.12})`;
      ctx.beginPath();
      ctx.arc(width * 0.5, y, 4 - i * 0.3, 0, Math.PI * 2);
      ctx.fill();
    }

    // 간판
    ctx.fillStyle = '#000';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('⛲ FOUNTAIN', width * 0.5, height * 0.15);
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
