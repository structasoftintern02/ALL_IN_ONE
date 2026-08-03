import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCompany } from '../../components/layout/SidebarCompany';
import { KanbanBoard } from '../../components/common/KanbanBoard';

export const HiringPipelinePage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarCompany activePage="company-kanban" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Interactive Kanban Hiring Pipeline</h1>
          <p className="text-xs text-slate-500">Manage candidate progression across recruitment stages</p>
        </div>

        <KanbanBoard />
      </div>
    </div>
  );
};
