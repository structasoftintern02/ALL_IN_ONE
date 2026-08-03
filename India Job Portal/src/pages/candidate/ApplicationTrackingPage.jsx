import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCandidate } from '../../components/layout/SidebarCandidate';
import { Clock, CheckCircle2, Circle } from 'lucide-react';

export const ApplicationTrackingPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const stages = [
    { name: 'Application Received', status: 'completed', date: '28 Jul 2026' },
    { name: 'ATS Resume Screening', status: 'completed', date: '29 Jul 2026' },
    { name: 'Technical System Design Round', status: 'active', date: '04 Aug 2026' },
    { name: 'Executive HR & Offer Discussion', status: 'upcoming', date: 'Pending' }
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarCandidate activePage="candidate-tracking" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Application Tracking Timeline</h1>
          <p className="text-xs text-slate-500">Live recruitment pipeline status for Senior Full Stack React Engineer @ Razorpay</p>
        </div>

        <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-sm max-w-2xl space-y-6 w-full">
          <h3 className="font-extrabold text-slate-900 text-sm border-b border-slate-100 pb-3">Recruitment Milestone Pipeline</h3>

          <div className="space-y-4 text-xs">
            {stages.map((st, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-0.5">
                  {st.status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : st.status === 'active' ? (
                    <Clock className="w-5 h-5 text-amber-500 animate-pulse" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-300" />
                  )}
                </div>
                <div className="flex-1 pb-3 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900">{st.name}</h4>
                  <span className="text-[11px] text-slate-500">{st.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
