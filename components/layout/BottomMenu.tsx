"use client";

import {
  ShoppingCart,
  PawPrint,
  Building2,
  BarChart3,
  Settings,
  Grid3x3
} from 'lucide-react';
import type { ModalType } from '@/types';

interface BottomMenuProps {
  onMenuClick: (modal: ModalType) => void;
}

export default function BottomMenu({ onMenuClick }: BottomMenuProps) {
  const menuItems = [
    { id: 'shop', icon: ShoppingCart, label: '상점', color: 'bg-blue-500' },
    { id: 'animals', icon: PawPrint, label: '동물', color: 'bg-green-500' },
    { id: 'placement', icon: Grid3x3, label: '배치', color: 'bg-teal-500' },
    { id: 'stats', icon: BarChart3, label: '통계', color: 'bg-orange-500' },
    { id: 'settings', icon: Settings, label: '설정', color: 'bg-gray-500' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-around py-2">
          {menuItems.map(({ id, icon: Icon, label, color }) => (
            <button
              key={id}
              onClick={() => onMenuClick(id as ModalType)}
              className="flex flex-col items-center gap-1 px-6 py-3 rounded-lg
                       hover:bg-gray-100 active:scale-95 transition-all duration-200"
            >
              <div className={`${color} p-2 rounded-lg text-white`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-gray-700">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
