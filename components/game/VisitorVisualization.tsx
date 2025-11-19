"use client";

import { useEffect, useState } from 'react';
import { useVisitorStore } from '@/store/visitorStore';
import type { VisitorEntity } from '@/types/game';

const VISITOR_EMOJIS = ['🚶', '🚶‍♀️', '🚶‍♂️', '👨‍👩‍👧', '👨‍👩‍👦', '👨‍👩‍👧‍👦', '🧑‍🤝‍🧑', '👨‍👨‍👦', '👩‍👩‍👧'];

export default function VisitorVisualization() {
  const { currentVisitors } = useVisitorStore();
  const [visitors, setVisitors] = useState<VisitorEntity[]>([]);

  // 방문객 생성 및 관리
  useEffect(() => {
    const targetCount = Math.min(currentVisitors, 30); // 최대 30명까지만 시각화

    if (visitors.length < targetCount) {
      // 새 방문객 추가
      const newVisitors: VisitorEntity[] = [];
      for (let i = visitors.length; i < targetCount; i++) {
        newVisitors.push(createNewVisitor());
      }
      setVisitors([...visitors, ...newVisitors]);
    } else if (visitors.length > targetCount) {
      // 방문객 감소
      setVisitors(visitors.slice(0, targetCount));
    }
  }, [currentVisitors]);

  // 방문객 움직임 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors((prevVisitors) =>
        prevVisitors.map((visitor) => {
          // 목표 지점 도착 시 새 목표 생성
          if (!visitor.targetPosition || hasReachedTarget(visitor)) {
            return {
              ...visitor,
              targetPosition: getRandomPosition(),
              state: 'walking' as const,
            };
          }

          // 목표 지점으로 이동
          const newPosition = moveTowards(visitor.position, visitor.targetPosition);
          const newState = Math.random() < 0.05 ? getRandomState() : visitor.state;

          return {
            ...visitor,
            position: newPosition,
            state: newState,
            timeInZoo: visitor.timeInZoo + 1,
          };
        })
      );
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(interval);
  }, [visitors.length]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {visitors.map((visitor) => (
        <div
          key={visitor.id}
          className="absolute transition-all duration-1000 ease-linear"
          style={{
            left: `${visitor.position.x}%`,
            top: `${visitor.position.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative">
            {/* 방문객 이모지 */}
            <div className="text-2xl animate-bounce-slow">
              {visitor.emoji}
            </div>

            {/* 상태 표시 */}
            {visitor.state === 'watching' && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs">
                👀
              </div>
            )}
            {visitor.state === 'eating' && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs">
                🍔
              </div>
            )}
            {visitor.state === 'resting' && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs">
                💤
              </div>
            )}

            {/* 만족도 표시 (호버 시) */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
              만족도: {visitor.satisfaction}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// 헬퍼 함수들
function createNewVisitor(): VisitorEntity {
  return {
    id: `visitor-${Date.now()}-${Math.random()}`,
    position: { x: Math.random() * 100, y: Math.random() * 100 },
    targetPosition: getRandomPosition(),
    state: 'walking',
    satisfaction: 50 + Math.floor(Math.random() * 50),
    moneySpent: 0,
    timeInZoo: 0,
    visitedAnimals: [],
    emoji: VISITOR_EMOJIS[Math.floor(Math.random() * VISITOR_EMOJIS.length)],
  };
}

function getRandomPosition(): { x: number; y: number } {
  return {
    x: 10 + Math.random() * 80, // 10-90% 범위 내
    y: 10 + Math.random() * 80,
  };
}

function moveTowards(
  current: { x: number; y: number },
  target: { x: number; y: number }
): { x: number; y: number } {
  const speed = 2; // 이동 속도 (%)
  const dx = target.x - current.x;
  const dy = target.y - current.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < speed) {
    return target;
  }

  return {
    x: current.x + (dx / distance) * speed,
    y: current.y + (dy / distance) * speed,
  };
}

function hasReachedTarget(visitor: VisitorEntity): boolean {
  if (!visitor.targetPosition) return true;
  const dx = visitor.targetPosition.x - visitor.position.x;
  const dy = visitor.targetPosition.y - visitor.position.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < 3;
}

function getRandomState(): VisitorEntity['state'] {
  const states: VisitorEntity['state'][] = ['walking', 'watching', 'eating', 'resting'];
  return states[Math.floor(Math.random() * states.length)];
}
