"use client";

import Modal from './Modal';
import { useGameStore } from '@/store/gameStore';
import { useAnimalStore } from '@/store/animalStore';
import { useFacilityStore } from '@/store/facilityStore';
import { useVisitorStore } from '@/store/visitorStore';
import { formatMoney, formatNumber } from '@/lib/utils/format';
import { TrendingUp, Users, DollarSign, Star, PawPrint, Building2 } from 'lucide-react';

interface StatsModalProps {
  onClose: () => void;
}

export default function StatsModal({ onClose }: StatsModalProps) {
  const { money, level, experience, reputation } = useGameStore();
  const { animals } = useAnimalStore();
  const { facilities } = useFacilityStore();
  const { dailyVisitors, totalRevenue, averageSatisfaction } = useVisitorStore();

  const stats = [
    {
      icon: DollarSign,
      label: '현재 자금',
      value: formatMoney(money),
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: TrendingUp,
      label: '레벨',
      value: level.toString(),
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Star,
      label: '평판',
      value: reputation.toString(),
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: PawPrint,
      label: '동물 수',
      value: animals.length.toString(),
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Building2,
      label: '시설 수',
      value: facilities.length.toString(),
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      icon: Users,
      label: '오늘 방문객',
      value: formatNumber(dailyVisitors),
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
    },
  ];

  // 동물 통계
  const animalStats = {
    healthy: animals.filter((a) => a.health > 70).length,
    sick: animals.filter((a) => a.isSick).length,
    baby: animals.filter((a) => a.stage === 'baby').length,
    teen: animals.filter((a) => a.stage === 'teen').length,
    adult: animals.filter((a) => a.stage === 'adult').length,
  };

  // 시설 통계
  const facilityStats = {
    habitats: facilities.filter((f) => f.facilityType === 'habitat').length,
    visitor: facilities.filter((f) => f.facilityType === 'visitor').length,
    attraction: facilities.filter((f) => f.facilityType === 'attraction').length,
    staff: facilities.filter((f) => f.facilityType === 'staff').length,
  };

  return (
    <Modal title="📊 동물원 통계" onClose={onClose} size="xl">
      {/* Main Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {stats.map(({ icon: Icon, label, value, color, bgColor }) => (
          <div key={label} className="game-card p-4">
            <div className="flex items-center gap-3">
              <div className={`${bgColor} ${color} p-3 rounded-lg`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-600">{label}</div>
                <div className={`text-2xl font-bold ${color}`}>{value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Animal Stats */}
        <div className="game-card p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <PawPrint className="w-5 h-5" />
            동물 현황
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">건강한 동물</span>
              <span className="font-semibold text-green-600">
                {animalStats.healthy}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">아픈 동물</span>
              <span className="font-semibold text-red-600">
                {animalStats.sick}
              </span>
            </div>
            <div className="h-px bg-gray-200 my-2" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">새끼</span>
              <span className="font-semibold">{animalStats.baby}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">청소년</span>
              <span className="font-semibold">{animalStats.teen}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">성체</span>
              <span className="font-semibold">{animalStats.adult}</span>
            </div>
          </div>
        </div>

        {/* Facility Stats */}
        <div className="game-card p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            시설 현황
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">서식지</span>
              <span className="font-semibold text-green-600">
                {facilityStats.habitats}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">방문객 시설</span>
              <span className="font-semibold text-blue-600">
                {facilityStats.visitor}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">놀이기구</span>
              <span className="font-semibold text-purple-600">
                {facilityStats.attraction}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">직원 시설</span>
              <span className="font-semibold text-orange-600">
                {facilityStats.staff}
              </span>
            </div>
          </div>
        </div>

        {/* Visitor Stats */}
        <div className="game-card p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" />
            방문객 정보
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">오늘 방문객</span>
              <span className="font-semibold text-blue-600">
                {formatNumber(dailyVisitors)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">평균 만족도</span>
              <span className="font-semibold text-green-600">
                {averageSatisfaction.toFixed(1)}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">오늘 수익</span>
              <span className="font-semibold text-green-600">
                {formatMoney(totalRevenue)}
              </span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="game-card p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            진행 상황
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">레벨 진행도</span>
                <span className="font-semibold">
                  {experience}/{Math.floor(100 * Math.pow(1.5, level - 1))}
                </span>
              </div>
              <div className="stat-bar">
                <div
                  className="stat-bar-fill bg-blue-500"
                  style={{
                    width: `${
                      (experience / Math.floor(100 * Math.pow(1.5, level - 1))) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">평판</span>
                <span className="font-semibold">{reputation}/100</span>
              </div>
              <div className="stat-bar">
                <div
                  className="stat-bar-fill bg-yellow-500"
                  style={{ width: `${reputation}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
