'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastContextType {
  showToast: (title: string, message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ title: string; message: string } | null>(null);

  const showToast = (title: string, message: string) => {
    setToast({ title, message });
    setTimeout(() => {
      setToast(null);
    }, 6000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className="fixed top-24 right-6 z-50 max-w-md w-full bg-[#1b2024] border border-[#e9c176]/40 p-4 rounded shadow-2xl backdrop-blur-md transition-all animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#e9c176] shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-white tracking-wide">{toast.title}</h4>
              <p className="text-xs text-[#d1c5b4] font-light mt-1 leading-relaxed">{toast.message}</p>
            </div>
            <button
              onClick={() => setToast(null)}
              className="text-[#9a8f80] hover:text-white transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

