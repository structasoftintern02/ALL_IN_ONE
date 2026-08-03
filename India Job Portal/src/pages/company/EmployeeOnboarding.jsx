import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCompany } from '../../components/layout/SidebarCompany';
import { mockCompanyUser } from '../../data/companyData';
import { UserCheck, CheckCircle2, Clock } from 'lucide-react';

export const EmployeeOnboarding = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarCompany activePage="company-onboarding" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">New Hire Onboarding Tracker</h1>
          <p className="text-xs text-slate-500">Track offer acceptance, background checks, and document submission</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm w-full">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-xs border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 uppercase font-bold text-slate-500">
                  <th className="py-3.5 px-4">Candidate Name</th>
                  <th className="py-3.5 px-4">Hired Position</th>
                  <th className="py-3.5 px-4">Joining Date</th>
                  <th className="py-3.5 px-4 text-right">BG Check Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockCompanyUser.onboardingTracker.map((ob, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{ob.candidateName}</td>
                    <td className="py-3.5 px-4 text-slate-600">{ob.role}</td>
                    <td className="py-3.5 px-4 text-slate-500">{ob.joinedDate}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${ob.bgVerified ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                        {ob.bgVerified ? '✓ Verified' : 'In Progress'}
                      </span>
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
