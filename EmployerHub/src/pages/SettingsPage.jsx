import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sidebar } from '../components/layout/Sidebar';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Settings, ShieldCheck, Users, Bell } from 'lucide-react';

export const SettingsPage = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <Sidebar activePage="settings" setActivePage={setActivePage} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <ScrollReveal direction="down" amount={0.1} className="border-b border-slate-200 dark:border-gray-800 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Employer Workspace & Team Permissions
          </h1>
          <p className="text-xs text-slate-500">Configure team roles, API keys, and notification triggers</p>
        </ScrollReveal>

        <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 max-w-2xl space-y-4 text-xs shadow-xs">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Team Collaboration Roles</h3>
          <div className="space-y-2">
            <div className="flex justify-between p-3 bg-slate-50 dark:bg-gray-800 rounded-xl">
              <span>Neha Gupta (Admin)</span>
              <span className="font-bold text-blue-600">Super Admin</span>
            </div>
            <div className="flex justify-between p-3 bg-slate-50 dark:bg-gray-800 rounded-xl">
              <span>Aakash Verma (VP Engg)</span>
              <span className="font-bold text-emerald-500">Hiring Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
