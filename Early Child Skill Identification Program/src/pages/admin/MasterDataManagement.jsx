import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarAdmin } from '../../components/layout/SidebarAdmin';
import { skillCategoriesData } from '../../data/programsData';
import { Database, Plus } from 'lucide-react';

export const MasterDataManagement = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarAdmin activePage="admin-master" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Age Group & Skill Category Masters</h1>
          <p className="text-xs text-slate-500">Configure milestone frameworks for 3-5 yrs, 5-7 yrs, and 7-10 yrs</p>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 max-w-2xl text-xs w-full">
          <div className="flex justify-between items-center font-bold text-slate-900 border-b border-slate-100 pb-3">
            <span>Skill Categories ({skillCategoriesData.length})</span>
            <button onClick={() => alert('Add Skill Category Modal')} className="text-teal-600 flex items-center gap-1 font-bold"><Plus className="w-3.5 h-3.5" /> Add Category</button>
          </div>
          <div className="divide-y divide-slate-100">
            {skillCategoriesData.map((cat) => (
              <div key={cat.id} className="py-2.5 flex justify-between items-center text-slate-800">
                <span className="font-bold">{cat.icon} {cat.name}</span>
                <span className="text-slate-500 font-semibold">{cat.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
