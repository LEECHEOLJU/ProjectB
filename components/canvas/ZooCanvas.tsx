"use client";

import { useRef, useEffect, useState } from 'react';
import { useAnimalStore } from '@/store/animalStore';
import { useFacilityStore } from '@/store/facilityStore';
import { useVisitorStore } from '@/store/visitorStore';
import { useShowStore } from '@/store/showStore';
import { AnimalRenderer } from '@/lib/canvas/AnimalRenderer';
import { BuildingRenderer } from '@/lib/canvas/BuildingRenderer';
import { ParticleSystem } from '@/lib/canvas/ParticleSystem';
import type { CanvasAnimal, CanvasBuilding, CanvasVisitor, Camera } from '@/lib/canvas/types';
import { ANIMAL_SPECIES } from '@/data/animals';

export default function ZooCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0, zoom: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const { animals } = useAnimalStore();
  const { facilities } = useFacilityStore();
  const { currentVisitors } = useVisitorStore();
  const { activeShows } = useShowStore();

  const particleSystemRef = useRef(new ParticleSystem());
  const canvasAnimalsRef = useRef<Map<string, CanvasAnimal>>(new Map());
  const canvasBuildingsRef = useRef<Map<string, CanvasBuilding>>(new Map());
  const canvasVisitorsRef = useRef<CanvasVisitor[]>([]);
  const animationFrameRef = useRef<number>(0);

  // 초기화: 기본 건물들 생성
  useEffect(() => {
    if (canvasBuildingsRef.current.size === 0) {
      // 입구
      canvasBuildingsRef.current.set('entrance', {
        id: 'entrance',
        type: 'entrance',
        x: 50,
        y: 50,
        width: 150,
        height: 100,
        color: '#DAA520',
        name: 'Entrance',
      });

      // 상점
      canvasBuildingsRef.current.set('shop-1', {
        id: 'shop-1',
        type: 'shop',
        x: 250,
        y: 50,
        width: 120,
        height: 100,
        color: '#FF6B6B',
        name: 'Gift Shop',
      });

      // 레스토랑
      canvasBuildingsRef.current.set('restaurant-1', {
        id: 'restaurant-1',
        type: 'restaurant',
        x: 400,
        y: 50,
        width: 130,
        height: 100,
        color: '#FFA07A',
        name: 'Restaurant',
      });

      // 놀이기구
      canvasBuildingsRef.current.set('attraction-1', {
        id: 'attraction-1',
        type: 'attraction',
        x: 50,
        y: 200,
        width: 140,
        height: 120,
        color: '#FF69B4',
        name: 'Carousel',
      });
    }
  }, []);

  // 동물을 Canvas 동물로 변환
  useEffect(() => {
    const newCanvasAnimals = new Map<string, CanvasAnimal>();

    animals.forEach((animal, index) => {
      const existing = canvasAnimalsRef.current.get(animal.id);
      const species = ANIMAL_SPECIES.find(s => s.id === animal.speciesId);

      if (!species) return;

      // 동물 우리 배정 (간단하게 4마리씩 묶음)
      const enclosureIndex = Math.floor(index / 4);
      const positionInEnclosure = index % 4;
      const enclosureId = `enclosure-${enclosureIndex}`;

      // 우리가 없으면 생성
      if (!canvasBuildingsRef.current.has(enclosureId)) {
        const row = Math.floor(enclosureIndex / 3);
        const col = enclosureIndex % 3;

        canvasBuildingsRef.current.set(enclosureId, {
          id: enclosureId,
          type: 'enclosure',
          x: 50 + col * 250,
          y: 350 + row * 250,
          width: 200,
          height: 200,
          color: getEnclosureColor(species.type),
          name: `${species.name} Habitat`,
          animals: [],
        });
      }

      const enclosure = canvasBuildingsRef.current.get(enclosureId)!;

      // 우리 안에서의 위치
      const offsetX = (positionInEnclosure % 2) * 80 + 40;
      const offsetY = Math.floor(positionInEnclosure / 2) * 80 + 40;

      if (existing) {
        // 기존 동물 업데이트
        newCanvasAnimals.set(animal.id, {
          ...existing,
          speciesId: animal.speciesId,
          enclosureId,
        });
      } else {
        // 새 동물 생성
        newCanvasAnimals.set(animal.id, {
          id: animal.id,
          speciesId: animal.speciesId,
          x: enclosure.x + offsetX,
          y: enclosure.y + offsetY,
          targetX: enclosure.x + offsetX,
          targetY: enclosure.y + offsetY,
          speed: 0.5,
          direction: 0,
          animationFrame: 0,
          animationSpeed: 1,
          enclosureId,
          isPerformingShow: false,
        });
      }
    });

    canvasAnimalsRef.current = newCanvasAnimals;
  }, [animals]);

  // 방문객 생성
  useEffect(() => {
    const targetCount = Math.min(currentVisitors, 30);
    const visitors: CanvasVisitor[] = [];

    for (let i = 0; i < targetCount; i++) {
      const existing = canvasVisitorsRef.current[i];

      if (existing) {
        visitors.push(existing);
      } else {
        visitors.push({
          id: `visitor-${i}`,
          x: 100 + Math.random() * 400,
          y: 100 + Math.random() * 400,
          targetX: 100 + Math.random() * 400,
          targetY: 100 + Math.random() * 400,
          speed: 0.5 + Math.random() * 0.5,
          color: getRandomVisitorColor(),
          state: 'walking',
          stateTimer: 0,
        });
      }
    }

    canvasVisitorsRef.current = visitors;
  }, [currentVisitors]);

  // 쇼 이펙트 감지
  useEffect(() => {
    activeShows.forEach((show) => {
      // 해당 동물 찾기
      const canvasAnimal = Array.from(canvasAnimalsRef.current.values()).find(
        (a) => a.id === show.animalId || a.speciesId === show.animalId
      );

      if (canvasAnimal && !canvasAnimal.isPerformingShow) {
        canvasAnimal.isPerformingShow = true;

        // 이펙트 시작
        particleSystemRef.current.startShowEffect(
          canvasAnimal.x,
          canvasAnimal.y,
          'fireworks'
        );
      }
    });

    // 끝난 쇼의 동물 상태 업데이트
    canvasAnimalsRef.current.forEach((animal) => {
      const isActive = activeShows.some(
        (show) => show.animalId === animal.id || show.animalId === animal.speciesId
      );
      if (!isActive) {
        animal.isPerformingShow = false;
      }
    });
  }, [activeShows]);

  // 게임 루프
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameCount = 0;

    const gameLoop = () => {
      frameCount++;

      // 캔버스 클리어
      ctx.fillStyle = '#87CEEB'; // 하늘색 배경
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 바닥 그리기
      BuildingRenderer.drawGround(ctx, canvas.width, canvas.height, camera.x, camera.y, camera.zoom);

      // 건물 그리기
      canvasBuildingsRef.current.forEach((building) => {
        BuildingRenderer.drawBuilding(ctx, building, camera.x, camera.y, camera.zoom);
      });

      // 동물 업데이트 & 렌더링
      canvasAnimalsRef.current.forEach((animal) => {
        // 동물 움직임 (우리 안에서 랜덤 이동)
        if (frameCount % 120 === 0) {
          const enclosure = canvasBuildingsRef.current.get(animal.enclosureId);
          if (enclosure) {
            animal.targetX = enclosure.x + 20 + Math.random() * (enclosure.width - 40);
            animal.targetY = enclosure.y + 20 + Math.random() * (enclosure.height - 40);
          }
        }

        // 목표 위치로 이동
        const dx = animal.targetX - animal.x;
        const dy = animal.targetY - animal.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 1) {
          animal.x += (dx / distance) * animal.speed;
          animal.y += (dy / distance) * animal.speed;
          animal.direction = Math.atan2(dy, dx);
        }

        // 애니메이션 프레임 업데이트
        animal.animationFrame += animal.animationSpeed;

        // 렌더링
        AnimalRenderer.drawAnimal(ctx, animal, camera.x, camera.y, camera.zoom);
      });

      // 방문객 업데이트 & 렌더링
      canvasVisitorsRef.current.forEach((visitor) => {
        // 새 목표 설정
        if (frameCount % 180 === 0 || Math.abs(visitor.x - visitor.targetX) < 5) {
          visitor.targetX = 100 + Math.random() * 600;
          visitor.targetY = 100 + Math.random() * 600;
          visitor.state = Math.random() > 0.7 ? 'watching' : 'walking';
        }

        // 이동
        if (visitor.state === 'walking') {
          const dx = visitor.targetX - visitor.x;
          const dy = visitor.targetY - visitor.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 1) {
            visitor.x += (dx / distance) * visitor.speed;
            visitor.y += (dy / distance) * visitor.speed;
          }
        }

        // 렌더링
        const screenX = (visitor.x - camera.x) * camera.zoom;
        const screenY = (visitor.y - camera.y) * camera.zoom;

        ctx.fillStyle = visitor.color;
        ctx.beginPath();
        ctx.arc(screenX, screenY, 8 * camera.zoom, 0, Math.PI * 2);
        ctx.fill();

        // 머리
        ctx.fillStyle = '#FFD1B0';
        ctx.beginPath();
        ctx.arc(screenX, screenY - 6 * camera.zoom, 5 * camera.zoom, 0, Math.PI * 2);
        ctx.fill();

        // 상태 표시
        if (visitor.state === 'watching') {
          ctx.fillStyle = '#000';
          ctx.font = `${12 * camera.zoom}px Arial`;
          ctx.fillText('👀', screenX - 6, screenY - 15 * camera.zoom);
        }
      });

      // 파티클 업데이트 & 렌더링
      particleSystemRef.current.update();
      particleSystemRef.current.render(ctx, camera.x, camera.y, camera.zoom);

      // UI 오버레이
      drawUI(ctx, canvas.width, canvas.height);

      animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [camera, animals.length, currentVisitors, activeShows.length]);

  // UI 그리기
  const drawUI = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // 미니맵 (우측 하단)
    const miniMapSize = 150;
    const miniMapX = width - miniMapSize - 20;
    const miniMapY = height - miniMapSize - 20;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(miniMapX, miniMapY, miniMapSize, miniMapSize);

    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    ctx.strokeRect(miniMapX, miniMapY, miniMapSize, miniMapSize);

    // 건물 표시
    canvasBuildingsRef.current.forEach((building) => {
      const x = miniMapX + (building.x / 10);
      const y = miniMapY + (building.y / 10);
      ctx.fillStyle = building.color;
      ctx.fillRect(x, y, building.width / 10, building.height / 10);
    });

    // 카메라 뷰포트 표시
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    ctx.strokeRect(
      miniMapX + (camera.x / 10),
      miniMapY + (camera.y / 10),
      (width / camera.zoom) / 10,
      (height / camera.zoom) / 10
    );

    // 조작 안내
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(10, height - 80, 200, 70);
    ctx.fillStyle = '#FFF';
    ctx.font = '12px Arial';
    ctx.fillText('🖱️ 드래그: 카메라 이동', 20, height - 55);
    ctx.fillText('🔍 마우스휠: 줌', 20, height - 35);
    ctx.fillText('📊 동물: ' + animals.length, 20, height - 15);
  };

  // 마우스 이벤트 핸들러
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      const dx = e.clientX - lastMousePos.x;
      const dy = e.clientY - lastMousePos.y;

      setCamera((prev) => ({
        ...prev,
        x: prev.x - dx / prev.zoom,
        y: prev.y - dy / prev.zoom,
      }));

      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setCamera((prev) => ({
      ...prev,
      zoom: Math.max(0.5, Math.min(2, prev.zoom * delta)),
    }));
  };

  return (
    <canvas
      ref={canvasRef}
      width={1200}
      height={700}
      className="w-full h-full border-2 border-gray-300 rounded-lg cursor-move"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    />
  );
}

// 헬퍼 함수들
function getEnclosureColor(animalType: string): string {
  switch (animalType) {
    case 'mammal':
      return '#8B4513';
    case 'bird':
      return '#4169E1';
    case 'reptile':
      return '#228B22';
    case 'aquatic':
      return '#1E90FF';
    default:
      return '#808080';
  }
}

function getRandomVisitorColor(): string {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];
  return colors[Math.floor(Math.random() * colors.length)];
}
