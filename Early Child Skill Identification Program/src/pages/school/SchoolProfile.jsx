import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarSchool } from '../../components/layout/SidebarSchool';
import { schoolsData } from '../../data/schoolsData';
import { Building2, CheckCircle2 } from 'lucide-react';

export const SchoolProfile = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const school = schoolsData[0];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarSchool activePage="school-profile" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">School Infrastructure & Playrooms</h1>
          <p className="text-xs text-slate-500">Empaneled sensory observation facilities at {school.name}</p>
        </div>

        <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 max-w-3xl text-xs w-full">
          <h3 className="font-extrabold text-slate-900 text-sm">Empaneled Infrastructure Highlights</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {school.infrastructure.map((fac, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{fac.name}</span>
                </div>
                <p className="text-slate-500 text-[11px]">{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
