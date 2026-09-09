import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-900/90 text-white border border-indigo-500/40 shadow-2xl backdrop-blur-xl animate-fade-in-up">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <p className="text-sm font-medium text-slate-200">{message}</p>
    </div>
  );
};
