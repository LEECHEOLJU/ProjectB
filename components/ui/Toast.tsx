"use client";

import { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import type { Notification } from '@/types';

interface ToastProps {
  notification: Notification;
  onClose: () => void;
}

export default function Toast({ notification, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, notification.duration || 3000);

    return () => clearTimeout(timer);
  }, [notification, onClose]);

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  };

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  const Icon = icons[notification.type];

  return (
    <div
      className={`${colors[notification.type]} text-white px-4 py-3 rounded-lg shadow-lg
                  flex items-center gap-3 min-w-[300px] animate-slideIn`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <p className="flex-1 text-sm font-medium">{notification.message}</p>
      <button
        onClick={onClose}
        className="flex-shrink-0 hover:bg-white/20 p-1 rounded transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
