import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCompany } from '../../components/layout/SidebarCompany';
import { mockCompanyUser } from '../../data/companyData';
import { Calendar, Video, Clock } from 'lucide-react';

export const InterviewSchedule = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarCompany activePage="company-interviews" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Interview Schedule Calendar</h1>
          <p className="text-xs text-slate-500">Scheduled video interviews & Google Meet links</p>
        </div>

        <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-sm max-w-3xl space-y-4 w-full">
          {mockCompanyUser.interviewsList.map((int) => (
            <div key={int.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs">
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">{int.candidateName}</h4>
                <span className="text-slate-600 block">{int.role} • {int.round}</span>
                <span className="text-blue-600 font-bold block mt-0.5">{int.date} ({int.mode})</span>
              </div>
              <button onClick={() => alert(`Launching ${int.mode} link...`)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center gap-1.5">
                <Video className="w-4 h-4" /> Join Video Call
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
