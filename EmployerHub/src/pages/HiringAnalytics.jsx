import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sidebar } from '../components/layout/Sidebar';
import { ChartWidgets } from '../components/ui/ChartWidgets';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const HiringAnalytics = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <Sidebar activePage="analytics" setActivePage={setActivePage} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <ScrollReveal direction="down" amount={0.1} className="border-b border-slate-200 dark:border-gray-800 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Recruitment Funnel & Sourcing Analytics
          </h1>
          <p className="text-xs text-slate-500">Real-time metrics on candidate conversion velocity and cost-per-hire</p>
        </ScrollReveal>

        <ChartWidgets />
      </div>
    </div>
  );
};
