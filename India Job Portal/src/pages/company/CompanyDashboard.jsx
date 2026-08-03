import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCompany } from '../../components/layout/SidebarCompany';
import { mockCompanyUser } from '../../data/companyData';
import { 
  Building, Users, Briefcase, PlusCircle, Layers, CheckCircle2 
} from 'lucide-react';

export const CompanyDashboard = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const employer = mockCompanyUser;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarCompany activePage="company-dashboard" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className={`p-5 sm:p-8 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.gradientBg} text-white space-y-4 shadow-xl`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="px-3 py-0.5 rounded-full bg-white/10 text-xs font-bold border border-white/20">
                GST Verified Employer
              </span>
              <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight mt-1">
                {employer.name} ATS Portal
              </h1>
              <p className="text-xs sm:text-sm text-slate-200">{employer.industry} • {employer.city}</p>
            </div>

            <button onClick={() => setActivePage('company-post-job')} className="w-full sm:w-auto px-4 py-2.5 bg-white text-slate-950 font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5">
              <PlusCircle className="w-4 h-4 text-blue-600" />
              <span>Post New Job</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-slate-400 font-bold uppercase">Active Openings</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{employer.activeJobsCount} Jobs</div>
            <span className="text-emerald-600 font-bold">142 Applicants Screening</span>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-slate-400 font-bold uppercase">Interviews Conducted</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">28 Candidates</div>
            <span className="text-slate-500">2 Scheduled Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};
