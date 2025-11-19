"use client";

import { useGameStore } from '@/store/gameStore';
import { formatMoney, formatGameTime } from '@/lib/utils/format';
import {
  DollarSign,
  TrendingUp,
  Star,
  Users,
  Play,
  Pause,
  FastForward
} from 'lucide-react';

export default function TopBar() {
  const {
    money,
    level,
    experience,
    reputation,
    gameTime,
    gameSpeed,
    isPaused,
    setGameSpeed,
    togglePause,
  } = useGameStore();

  const requiredExp = Math.floor(100 * Math.pow(1.5, level - 1));
  const expProgress = (experience / requiredExp) * 100;

  const speedButtons = [
    { speed: 1, icon: Play, label: '1x' },
    { speed: 2, icon: FastForward, label: '2x' },
    { speed: 3, icon: FastForward, label: '3x' },
  ];

  return (
    <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* 왼쪽: 로고 및 동물원 이름 */}
          <div className="flex items-center gap-3">
            <div className="text-3xl">🦁</div>
            <div>
              <h1 className="text-xl font-bold">Zoo Tycoon</h1>
              <p className="text-xs text-white/80">{formatGameTime(gameTime)}</p>
            </div>
          </div>

          {/* 중앙: 상태 정보 */}
          <div className="flex items-center gap-6">
            {/* 돈 */}
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
              <DollarSign className="w-5 h-5" />
              <span className="font-mono font-bold text-lg">
                {formatMoney(money)}
              </span>
            </div>

            {/* 레벨 & 경험치 */}
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <div>
                <div className="text-sm font-semibold">Level {level}</div>
                <div className="w-32 h-2 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 transition-all duration-300"
                    style={{ width: `${expProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* 평판 */}
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">{reputation}</span>
            </div>

            {/* 방문객 (임시) */}
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
              <Users className="w-5 h-5" />
              <span className="font-semibold">0</span>
            </div>
          </div>

          {/* 오른쪽: 게임 속도 조절 */}
          <div className="flex items-center gap-2">
            <button
              onClick={togglePause}
              className={`p-2 rounded-lg transition-all ${
                isPaused
                  ? 'bg-yellow-500 hover:bg-yellow-600'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
              title={isPaused ? '재생' : '일시정지'}
            >
              {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
            </button>

            {speedButtons.map(({ speed, icon: Icon, label }) => (
              <button
                key={speed}
                onClick={() => setGameSpeed(speed as 1 | 2 | 3)}
                className={`px-3 py-2 rounded-lg transition-all ${
                  gameSpeed === speed && !isPaused
                    ? 'bg-white text-green-600 font-bold'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
                title={`${label} 속도`}
              >
                <div className="flex items-center gap-1">
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
