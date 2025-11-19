"use client";

import { useState, useRef, useEffect } from 'react';
import { X, RotateCw, Trash2, Check } from 'lucide-react';
import type { GridPosition, PlacedItem } from '@/types/game';

const GRID_SIZE = 30; // 30x30 그리드
const CELL_SIZE = 40; // 각 셀 40px

interface GridPlacementSystemProps {
  onClose: () => void;
}

interface PlacementMode {
  type: 'animal' | 'facility' | null;
  itemId: string | null;
  size: { width: number; height: number };
  emoji: string;
  name: string;
}

export default function GridPlacementSystem({ onClose }: GridPlacementSystemProps) {
  const [placedItems, setPlacedItems] = useState<PlacedItem[]>([]);
  const [selectedCell, setSelectedCell] = useState<GridPosition | null>(null);
  const [placementMode, setPlacementMode] = useState<PlacementMode>({
    type: null,
    itemId: null,
    size: { width: 1, height: 1 },
    emoji: '',
    name: '',
  });
  const [hoveredCell, setHoveredCell] = useState<GridPosition | null>(null);
  const [dragStart, setDragStart] = useState<GridPosition | null>(null);

  const canPlace = (pos: GridPosition, size: { width: number; height: number }): boolean => {
    // 그리드 범위 체크
    if (pos.x + size.width > GRID_SIZE || pos.y + size.height > GRID_SIZE) {
      return false;
    }
    if (pos.x < 0 || pos.y < 0) return false;

    // 다른 아이템과 겹치는지 체크
    for (const item of placedItems) {
      const itemEndX = item.position.x + item.size.width;
      const itemEndY = item.position.y + item.size.height;
      const newEndX = pos.x + size.width;
      const newEndY = pos.y + size.height;

      if (
        pos.x < itemEndX &&
        newEndX > item.position.x &&
        pos.y < itemEndY &&
        newEndY > item.position.y
      ) {
        return false; // 겹침
      }
    }

    return true;
  };

  const handleCellClick = (x: number, y: number) => {
    if (!placementMode.type || !placementMode.itemId) {
      // 선택 모드
      const item = placedItems.find(
        (item) =>
          x >= item.position.x &&
          x < item.position.x + item.size.width &&
          y >= item.position.y &&
          y < item.position.y + item.size.height
      );
      if (item) {
        setSelectedCell(item.position);
      }
      return;
    }

    // 배치 모드
    const pos = { x, y };
    if (canPlace(pos, placementMode.size)) {
      const newItem: PlacedItem = {
        id: `item-${Date.now()}`,
        type: placementMode.type,
        itemId: placementMode.itemId,
        position: pos,
        size: placementMode.size,
        rotation: 0,
      };
      setPlacedItems([...placedItems, newItem]);
    }
  };

  const handleDragStart = (x: number, y: number) => {
    if (placementMode.type) {
      setDragStart({ x, y });
    }
  };

  const handleDragEnd = (x: number, y: number) => {
    if (!dragStart || !placementMode.type || !placementMode.itemId) {
      setDragStart(null);
      return;
    }

    const startX = Math.min(dragStart.x, x);
    const startY = Math.min(dragStart.y, y);
    const endX = Math.max(dragStart.x, x);
    const endY = Math.max(dragStart.y, y);

    // 드래그 영역에 여러 개 배치
    for (let cy = startY; cy <= endY; cy += placementMode.size.height) {
      for (let cx = startX; cx <= endX; cx += placementMode.size.width) {
        const pos = { x: cx, y: cy };
        if (canPlace(pos, placementMode.size)) {
          const newItem: PlacedItem = {
            id: `item-${Date.now()}-${cx}-${cy}`,
            type: placementMode.type,
            itemId: placementMode.itemId,
            position: pos,
            size: placementMode.size,
            rotation: 0,
          };
          setPlacedItems((prev) => [...prev, newItem]);
        }
      }
    }

    setDragStart(null);
  };

  const handleDeleteSelected = () => {
    if (selectedCell) {
      setPlacedItems(
        placedItems.filter(
          (item) =>
            item.position.x !== selectedCell.x || item.position.y !== selectedCell.y
        )
      );
      setSelectedCell(null);
    }
  };

  // 빠른 배치 아이템들
  const quickPlaceItems = [
    { type: 'animal' as const, itemId: 'lion', emoji: '🦁', name: '사자', size: { width: 2, height: 2 } },
    { type: 'animal' as const, itemId: 'elephant', emoji: '🐘', name: '코끼리', size: { width: 3, height: 3 } },
    { type: 'animal' as const, itemId: 'penguin', emoji: '🐧', name: '펭귄', size: { width: 2, height: 2 } },
    { type: 'facility' as const, itemId: 'restaurant', emoji: '🍔', name: '레스토랑', size: { width: 2, height: 2 } },
    { type: 'facility' as const, itemId: 'gift_shop', emoji: '🎁', name: '기념품점', size: { width: 2, height: 2 } },
    { type: 'facility' as const, itemId: 'restroom', emoji: '🚻', name: '화장실', size: { width: 1, height: 1 } },
    { type: 'facility' as const, itemId: 'bench', emoji: '🪑', name: '벤치', size: { width: 1, height: 1 } },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">🏗️ 동물원 배치 시스템</h2>
            <p className="text-sm text-gray-600">클릭 또는 드래그로 동물우리와 시설을 배치하세요</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden flex">
          {/* Sidebar - 배치 아이템 */}
          <div className="w-64 border-r p-4 overflow-y-auto">
            <h3 className="font-bold mb-3">배치할 아이템</h3>
            <div className="space-y-2">
              {quickPlaceItems.map((item) => (
                <button
                  key={item.itemId}
                  onClick={() => setPlacementMode(item)}
                  className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                    placementMode.itemId === item.itemId
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{item.emoji}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{item.name}</div>
                      <div className="text-xs text-gray-500">
                        {item.size.width}x{item.size.height} 칸
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t">
              <button
                onClick={() =>
                  setPlacementMode({
                    type: null,
                    itemId: null,
                    size: { width: 1, height: 1 },
                    emoji: '',
                    name: '',
                  })
                }
                className="w-full p-3 rounded-lg border-2 border-gray-200 hover:bg-gray-100"
              >
                ✋ 선택 모드
              </button>
            </div>

            {selectedCell && (
              <div className="mt-4 p-3 bg-red-50 rounded-lg">
                <button
                  onClick={handleDeleteSelected}
                  className="w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center justify-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  선택 항목 삭제
                </button>
              </div>
            )}
          </div>

          {/* Grid */}
          <div className="flex-1 p-4 overflow-auto">
            <div className="inline-block border-4 border-green-600 rounded-lg overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
                  gridTemplateRows: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
                  gap: '1px',
                  backgroundColor: '#d1d5db',
                }}
              >
                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
                  const x = index % GRID_SIZE;
                  const y = Math.floor(index / GRID_SIZE);

                  const placedItem = placedItems.find(
                    (item) =>
                      x >= item.position.x &&
                      x < item.position.x + item.size.width &&
                      y >= item.position.y &&
                      y < item.position.y + item.size.height
                  );

                  const isHovered =
                    hoveredCell && placementMode.type
                      ? x >= hoveredCell.x &&
                        x < hoveredCell.x + placementMode.size.width &&
                        y >= hoveredCell.y &&
                        y < hoveredCell.y + placementMode.size.height
                      : false;

                  const canPlaceHere =
                    isHovered && canPlace(hoveredCell!, placementMode.size);

                  const isSelected =
                    selectedCell &&
                    x === selectedCell.x &&
                    y === selectedCell.y;

                  return (
                    <div
                      key={`${x}-${y}`}
                      style={{
                        width: `${CELL_SIZE}px`,
                        height: `${CELL_SIZE}px`,
                      }}
                      className={`
                        transition-colors cursor-pointer relative
                        ${placedItem ? 'bg-blue-400' : 'bg-white hover:bg-green-50'}
                        ${isHovered && canPlaceHere ? 'bg-green-300' : ''}
                        ${isHovered && !canPlaceHere ? 'bg-red-300' : ''}
                        ${isSelected ? 'ring-4 ring-yellow-400' : ''}
                      `}
                      onClick={() => handleCellClick(x, y)}
                      onMouseEnter={() => setHoveredCell({ x, y })}
                      onMouseDown={() => handleDragStart(x, y)}
                      onMouseUp={() => handleDragEnd(x, y)}
                    >
                      {placedItem && x === placedItem.position.x && y === placedItem.position.y && (
                        <div
                          className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
                          style={{
                            gridColumn: `span ${placedItem.size.width}`,
                            gridRow: `span ${placedItem.size.height}`,
                          }}
                        >
                          {quickPlaceItems.find(
                            (item) => item.itemId === placedItem.itemId
                          )?.emoji || '📦'}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer - 통계 */}
        <div className="p-4 border-t bg-gray-50 flex items-center justify-between">
          <div className="flex gap-6 text-sm">
            <div>
              <span className="text-gray-600">배치된 아이템:</span>
              <span className="ml-2 font-bold">{placedItems.length}개</span>
            </div>
            <div>
              <span className="text-gray-600">사용된 공간:</span>
              <span className="ml-2 font-bold">
                {placedItems.reduce((sum, item) => sum + item.size.width * item.size.height, 0)} / {GRID_SIZE * GRID_SIZE} 칸
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setPlacedItems([])}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              전체 삭제
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
            >
              <Check className="w-5 h-5" />
              배치 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
