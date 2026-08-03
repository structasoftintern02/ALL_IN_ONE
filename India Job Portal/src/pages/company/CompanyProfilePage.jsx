import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCompany } from '../../components/layout/SidebarCompany';
import { mockCompanyUser } from '../../data/companyData';
import { Building, ShieldCheck } from 'lucide-react';

export const CompanyProfilePage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const employer = mockCompanyUser;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarCompany activePage="company-profile" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Employer Profile & Verification Status</h1>
          <p className="text-xs text-slate-500">Corporate brand page for {employer.name}</p>
        </div>

        <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 max-w-2xl text-xs w-full">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-xl">
              🏢
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">{employer.name}</h2>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> GST Verified Corporate Employer
              </span>
            </div>
          </div>

          <div className="space-y-2 text-slate-700">
            <p><strong>Industry:</strong> {employer.industry}</p>
            <p><strong>HQ Location:</strong> {employer.city}</p>
            <p><strong>Active Jobs:</strong> {employer.activeJobsCount} Open Positions</p>
          </div>
        </div>
      </div>
    </div>
  );
};
