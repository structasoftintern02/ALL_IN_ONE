import React from 'react';

export const SkeletonCard = () => (
  <div className="p-6 bg-slate-100 dark:bg-gray-800 rounded-2xl animate-pulse space-y-4">
    <div className="h-4 bg-slate-200 dark:bg-gray-700 rounded w-1/3" />
    <div className="h-8 bg-slate-200 dark:bg-gray-700 rounded w-2/3" />
    <div className="h-3 bg-slate-200 dark:bg-gray-700 rounded w-full" />
  </div>
);

export const SkeletonTable = () => (
  <div className="space-y-3 animate-pulse">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="h-12 bg-slate-100 dark:bg-gray-800 rounded-xl w-full" />
    ))}
  </div>
);
