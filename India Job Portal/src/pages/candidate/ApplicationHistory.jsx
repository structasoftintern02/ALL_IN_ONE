import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCandidate } from '../../components/layout/SidebarCandidate';
import { mockCandidateUser } from '../../data/candidatesData';
import { Briefcase, Eye, Clock } from 'lucide-react';

export const ApplicationHistory = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarCandidate activePage="candidate-history" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Application History</h1>
          <p className="text-xs text-slate-500">Track all job applications sent to employers</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm w-full">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-xs border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 uppercase font-bold text-slate-500">
                  <th className="py-3.5 px-4">Job Title</th>
                  <th className="py-3.5 px-4">Employer Company</th>
                  <th className="py-3.5 px-4">Applied Date</th>
                  <th className="py-3.5 px-4">Current Status</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockCandidateUser.appliedJobs.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{app.title}</td>
                    <td className="py-3.5 px-4 text-slate-700">{app.company}</td>
                    <td className="py-3.5 px-4 text-slate-500">{app.appliedDate}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px]">
                        {app.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button 
                        onClick={() => setActivePage('candidate-tracking')}
                        className="px-3 py-1 bg-slate-900 text-white font-bold rounded-lg text-[10px]"
                      >
                        Track Timeline
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
