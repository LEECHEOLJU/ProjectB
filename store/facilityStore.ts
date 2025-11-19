import { create } from 'zustand';
import type { Facility } from '@/types';
import { generateId } from '@/lib/utils/game';

interface FacilityStore {
  facilities: Facility[];

  // Actions
  addFacility: (facilityId: string, facilityType: string) => Facility;
  removeFacility: (facilityId: string) => void;
  updateFacility: (facilityId: string, updates: Partial<Facility>) => void;
  maintainFacility: (facilityId: string) => void;
  degradeFacilities: () => void;
}

export const useFacilityStore = create<FacilityStore>((set, get) => ({
  facilities: [],

  addFacility: (facilityId, facilityType) => {
    const facility: Facility = {
      id: generateId(),
      zooId: 'local',
      facilityType: facilityType as any,
      facilityId,
      level: 1,
      condition: 100,
      revenueGenerated: 0,
      maintenanceCost: 0,
      builtAt: Date.now(),
    };

    set((state) => ({
      facilities: [...state.facilities, facility],
    }));

    return facility;
  },

  removeFacility: (facilityId) => set((state) => ({
    facilities: state.facilities.filter((f) => f.id !== facilityId),
  })),

  updateFacility: (facilityId, updates) => set((state) => ({
    facilities: state.facilities.map((f) =>
      f.id === facilityId ? { ...f, ...updates } : f
    ),
  })),

  maintainFacility: (facilityId) => {
    const { updateFacility } = get();
    updateFacility(facilityId, {
      condition: 100,
      lastMaintainedAt: Date.now(),
    });
  },

  degradeFacilities: () => set((state) => ({
    facilities: state.facilities.map((facility) => ({
      ...facility,
      condition: Math.max(0, facility.condition - 0.5),
    })),
  })),
}));
