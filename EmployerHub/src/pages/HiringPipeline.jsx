import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sidebar } from '../components/layout/Sidebar';
import { KanbanBoard } from '../components/ui/KanbanBoard';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { GitMerge, Sparkles } from 'lucide-react';

export const HiringPipeline = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <Sidebar activePage="pipeline" setActivePage={setActivePage} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <ScrollReveal direction="down" amount={0.1} className="border-b border-slate-800 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-white">
            Interactive Visual Kanban ATS Pipeline
          </h1>
          <p className="text-xs text-slate-400">Track candidates across Applied, Reviewed, Shortlisted, Interview, Selected, and Joined</p>
        </ScrollReveal>

        <KanbanBoard />
      </div>
    </div>
  );
};
