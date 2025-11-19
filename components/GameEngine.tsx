"use client";

import { useEffect, useRef } from 'react';
import { useGameStore } from '@/store/gameStore';
import { useAnimalStore } from '@/store/animalStore';
import { useFacilityStore } from '@/store/facilityStore';
import { useVisitorStore } from '@/store/visitorStore';
import { getTickInterval } from '@/lib/utils/game';
import { ANIMAL_SPECIES } from '@/data/animals';
import { FACILITIES } from '@/data/facilities';

export default function GameEngine() {
  const gameStore = useGameStore();
  const animalStore = useAnimalStore();
  const facilityStore = useFacilityStore();
  const visitorStore = useVisitorStore();

  const tickCountRef = useRef(0);
  const dayTickRef = useRef(0);

  useEffect(() => {
    const tick = () => {
      if (gameStore.isPaused) return;

      tickCountRef.current += 1;
      const ticksPerMinute = 60; // 60틱 = 1게임 분
      const ticksPerDay = ticksPerMinute * 60 * 24; // 1게임 일

      // 매 틱마다 게임 시간 업데이트
      if (tickCountRef.current % ticksPerMinute === 0) {
        gameStore.updateGameTime();
      }

      // 매 5초마다 동물 상태 업데이트
      if (tickCountRef.current % 5 === 0) {
        animalStore.updateAnimalStats();
      }

      // 매 10초마다 시설 열화
      if (tickCountRef.current % 10 === 0) {
        facilityStore.degradeFacilities();
      }

      // 매 30초마다 방문객 업데이트 및 수익 계산
      if (tickCountRef.current % 30 === 0) {
        updateVisitorsAndRevenue();
      }

      // 매 게임 일마다
      dayTickRef.current += 1;
      if (dayTickRef.current >= ticksPerDay / gameStore.gameSpeed) {
        dayTickRef.current = 0;
        onDayPassed();
      }
    };

    const updateVisitorsAndRevenue = () => {
      const { animals } = animalStore;
      const { facilities } = facilityStore;
      const { weather, season, reputation } = gameStore;

      // 방문객 수 계산
      visitorStore.updateVisitors(
        animals.length,
        facilities.length,
        reputation,
        weather,
        season
      );

      // 입장료 수익 (방문객당 $10)
      const ticketRevenue = visitorStore.currentVisitors * 10;
      gameStore.addMoney(ticketRevenue);
      visitorStore.addRevenue(ticketRevenue);

      // 시설 수익
      facilities.forEach((facility) => {
        const facilityData = FACILITIES.find((f) => f.id === facility.facilityId);
        if (facilityData?.effect.revenuePerDay) {
          // 하루 수익을 30초마다 나눠서 지급
          const revenue = Math.floor(facilityData.effect.revenuePerDay / (24 * 2));
          gameStore.addMoney(revenue);
          visitorStore.addRevenue(revenue);
        }
      });
    };

    const onDayPassed = () => {
      const { animals } = animalStore;
      const { facilities } = facilityStore;

      // 동물 나이 증가
      animalStore.ageAnimals();

      // 동물 유지비 지출
      animals.forEach((animal) => {
        const species = ANIMAL_SPECIES.find((s) => s.id === animal.speciesId);
        if (species) {
          gameStore.spendMoney(species.maintenanceCost);
        }
      });

      // 시설 유지비 지출
      facilities.forEach((facility) => {
        const facilityData = FACILITIES.find((f) => f.id === facility.facilityId);
        if (facilityData) {
          gameStore.spendMoney(facilityData.maintenanceCost);
        }
      });

      // 날씨 변경 (30% 확률)
      if (Math.random() < 0.3) {
        gameStore.updateWeather();
      }

      // 특수 능력 효과 적용
      animals.forEach((animal) => {
        const species = ANIMAL_SPECIES.find((s) => s.id === animal.speciesId);
        if (species?.specialAbility) {
          if (species.specialAbility.includes('평판')) {
            const match = species.specialAbility.match(/\+(\d+)/);
            if (match) {
              gameStore.addReputation(parseInt(match[1]));
            }
          }
          if (species.specialAbility.includes('경험치')) {
            const match = species.specialAbility.match(/\+(\d+)/);
            if (match) {
              gameStore.addExperience(parseInt(match[1]));
            }
          }
        }
      });

      // 방문객 데일리 리셋 준비
      visitorStore.resetDaily();
    };

    const interval = setInterval(tick, getTickInterval(gameStore.gameSpeed));
    return () => clearInterval(interval);
  }, [gameStore.gameSpeed, gameStore.isPaused]);

  // 이 컴포넌트는 UI를 렌더링하지 않음
  return null;
}
