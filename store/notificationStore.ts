import { create } from 'zustand';
import type { Notification } from '@/types';
import { generateId } from '@/lib/utils/game';

interface NotificationStore {
  notifications: Notification[];
  addNotification: (
    type: Notification['type'],
    message: string,
    duration?: number
  ) => void;
  removeNotification: (id: string) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],

  addNotification: (type, message, duration) => {
    const notification: Notification = {
      id: generateId(),
      type,
      message,
      duration,
      createdAt: Date.now(),
    };

    set((state) => ({
      notifications: [...state.notifications, notification],
    }));
  },

  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter((n) => n.id !== id),
  })),
}));
