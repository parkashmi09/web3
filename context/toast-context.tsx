"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { 
  Toast, 
  ToastProvider as RadixToastProvider,
  ToastTitle, 
  ToastDescription, 
  ToastClose, 
  ToastViewport 
} from "@radix-ui/react-toast";
import { X } from "lucide-react";

interface ToastOptions {
  title: string;
  description: string;
  variant?: "default" | "success" | "destructive";
  duration?: number;
}

interface ToastContextType {
  toast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<(ToastOptions & { id: string })[]>([]);

  const toast = (options: ToastOptions) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...options, id, duration: options.duration || 5000 }]);
    
    // Auto-remove toast after duration
    if (options.duration !== 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, options.duration || 5000);
    }
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      <RadixToastProvider swipeDirection="right">
        {children}
        
        {toasts.map((t) => (
          <Toast
            key={t.id}
            className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border flex flex-col gap-1 ${
              t.variant === "success"
                ? "bg-green-500/20 border-green-500/50 text-green-300"
                : t.variant === "destructive"
                ? "bg-red-500/20 border-red-500/50 text-red-300"
                : "bg-gray-800 border-gray-700 text-white"
            }`}
            duration={t.duration}
            onSwipeEnd={() => setToasts((prev) => prev.filter((toast) => toast.id !== t.id))}
          >
            <div className="flex items-start justify-between">
              <div>
                <ToastTitle className="font-medium">{t.title}</ToastTitle>
                <ToastDescription className="mt-1 text-sm opacity-90">{t.description}</ToastDescription>
              </div>
              <ToastClose 
                className="p-1 rounded-full hover:bg-gray-700/50"
                onClick={() => setToasts((prev) => prev.filter((toast) => toast.id !== t.id))}
              >
                <X className="h-4 w-4" />
              </ToastClose>
            </div>
          </Toast>
        ))}
        
        <ToastViewport className="fixed top-0 right-0 flex flex-col p-6 gap-2 w-full max-w-sm z-50" />
      </RadixToastProvider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}