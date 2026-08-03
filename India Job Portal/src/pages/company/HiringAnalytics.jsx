import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCompany } from '../../components/layout/SidebarCompany';
import { BarChart3, TrendingUp } from 'lucide-react';

export const HiringAnalytics = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarCompany activePage="company-analytics" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Hiring & Conversion Analytics</h1>
          <p className="text-xs text-slate-500">Applicant funnel conversion, time-to-hire, and cost per hire metrics</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-xs">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-slate-400 font-bold uppercase">Average Time-to-Hire</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">14.2 Days</div>
            <span className="text-emerald-600 font-bold">35% faster than industry benchmark</span>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-slate-400 font-bold uppercase">Offer Acceptance Rate</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">88.4%</div>
            <span className="text-slate-500">12 Offers Accepted This Month</span>
          </div>
        </div>
      </div>
    </div>
  );
};
