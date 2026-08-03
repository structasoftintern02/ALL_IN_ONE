import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCompany } from '../../components/layout/SidebarCompany';
import { Users, Filter } from 'lucide-react';

export const ApplicantATSPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarCompany activePage="company-applicants" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Candidate Screening & ATS Pipeline</h1>
          <p className="text-xs text-slate-500">142 Applicants screened with AI Resume Parsing & Match Scores</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm w-full">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-xs border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 uppercase font-bold text-slate-500">
                  <th className="py-3.5 px-4">Candidate Name</th>
                  <th className="py-3.5 px-4">Role Title</th>
                  <th className="py-3.5 px-4">Notice Period</th>
                  <th className="py-3.5 px-4">AI Match Score</th>
                  <th className="py-3.5 px-4 text-right">ATS Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Vikramaditya Verma</td>
                  <td className="py-3.5 px-4 text-slate-600">Senior React Engineer</td>
                  <td className="py-3.5 px-4 text-slate-700">Immediate (15 Days)</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600">96% High Match</td>
                  <td className="py-3.5 px-4 text-right">
                    <button onClick={() => alert('Interview Scheduled!')} className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-lg text-xs">
                      Schedule Interview
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
