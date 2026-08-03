import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from 'lucide-react';

export const Toast = ({ type = 'success', message, onClose }) => {
  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    error: <XCircle className="w-5 h-5 text-red-400" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-400" />,
    info: <Info className="w-5 h-5 text-cyan-400" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-800 flex items-center gap-3 max-w-sm animate-in slide-in-from-bottom-5">
      {icons[type]}
      <span className="text-xs font-semibold">{message}</span>
      {onClose && (
        <button onClick={onClose} className="p-1 text-slate-400 hover:text-white ml-auto">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
