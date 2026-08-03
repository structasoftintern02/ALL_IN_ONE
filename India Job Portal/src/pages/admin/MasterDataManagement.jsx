import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarAdmin } from '../../components/layout/SidebarAdmin';
import { mockAdminData } from '../../data/adminData';
import { Database, Plus } from 'lucide-react';

export const MasterDataManagement = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex min-h-screen">
      <SidebarAdmin activePage="admin-master" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-6 sm:p-8 space-y-8 overflow-y-auto">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-extrabold text-slate-900">Master Data & Platform Settings</h1>
          <p className="text-xs text-slate-500">Configure Indian Cities, States, Industries, and Skill categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-center font-bold text-slate-900">
              <span>Master Industry Categories ({mockAdminData.masterIndustries.length})</span>
              <button onClick={() => alert('Add industry popup')} className="text-emerald-600 flex items-center gap-1"><Plus className="w-3.5 h-3.5" /> Add Industry</button>
            </div>
            <div className="divide-y divide-slate-100">
              {mockAdminData.masterIndustries.map((ind, idx) => (
                <div key={idx} className="py-2 flex justify-between text-slate-700">
                  <span>{ind}</span>
                  <span className="text-slate-400">Active</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-center font-bold text-slate-900">
              <span>Master Indian Cities & Hubs ({mockAdminData.masterCities.length})</span>
              <button onClick={() => alert('Add city popup')} className="text-emerald-600 flex items-center gap-1"><Plus className="w-3.5 h-3.5" /> Add City</button>
            </div>
            <div className="divide-y divide-slate-100">
              {mockAdminData.masterCities.map((city, idx) => (
                <div key={idx} className="py-2 flex justify-between text-slate-700">
                  <span className="font-bold text-slate-900">{city.name}</span>
                  <span className="text-slate-500">{city.state}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
