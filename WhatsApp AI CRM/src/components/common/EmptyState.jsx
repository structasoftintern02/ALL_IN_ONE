import React from 'react';
import { Inbox, Plus } from 'lucide-react';

export const EmptyState = ({ title = 'No Items Found', description = 'There are no active records matching your filter.', actionText, onAction }) => (
  <div className="p-12 text-center bg-slate-50 dark:bg-gray-900/50 rounded-3xl border border-dashed border-slate-300 dark:border-gray-800 space-y-4">
    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto text-xl">
      <Inbox className="w-6 h-6" />
    </div>
    <div className="space-y-1 max-w-sm mx-auto">
      <h4 className="font-bold text-slate-900 dark:text-white text-base">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
    </div>
    {actionText && (
      <button
        onClick={onAction}
        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 shadow-md"
      >
        <Plus className="w-4 h-4" />
        <span>{actionText}</span>
      </button>
    )}
  </div>
);
