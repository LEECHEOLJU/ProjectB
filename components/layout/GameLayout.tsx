"use client";

import { useState } from 'react';
import TopBar from './TopBar';
import BottomMenu from './BottomMenu';
import ZooCanvas from '../canvas/ZooCanvas';
import GameEngine from '../GameEngine';
import ToastContainer from '../ui/ToastContainer';
import ShopModal from '../modals/ShopModal';
import AnimalsModal from '../modals/AnimalsModal';
import StatsModal from '../modals/StatsModal';
import LevelUpModal from '../game/LevelUpModal';
import GridPlacementSystem from '../game/GridPlacementSystem';
import type { ModalType } from '@/types';

export default function GameLayout() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <>
      {/* Game Engine - 백그라운드에서 게임 로직 처리 */}
      <GameEngine />

      {/* Toast Notifications */}
      <ToastContainer />

      {/* Level Up Modal */}
      <LevelUpModal />

      <div className="game-container">
        {/* 상단 상태바 */}
        <TopBar />

        {/* 메인 게임 화면 - Canvas 2D */}
        <div className="flex items-center justify-center p-4 bg-gray-100">
          <ZooCanvas />
        </div>

        {/* 하단 메뉴 */}
        <BottomMenu onMenuClick={setActiveModal} />

        {/* 모달들 */}
        {activeModal === 'shop' && <ShopModal onClose={closeModal} />}
        {activeModal === 'animals' && <AnimalsModal onClose={closeModal} />}
        {activeModal === 'stats' && <StatsModal onClose={closeModal} />}
        {activeModal === 'placement' && <GridPlacementSystem onClose={closeModal} />}
      </div>
    </>
  );
}
