import React from 'react';
import { BarChart3, TrendingUp, Users, Target } from 'lucide-react';

export const ChartWidgets = () => {
  const funnelData = [
    { stage: 'Job Impressions', count: 45000, color: 'bg-blue-600', width: '100%' },
    { stage: 'Applications Received', count: 1240, color: 'bg-indigo-600', width: '75%' },
    { stage: 'AI Match > 85%', count: 320, color: 'bg-purple-600', width: '50%' },
    { stage: 'Interviews Conducted', count: 68, color: 'bg-amber-500', width: '35%' },
    { stage: 'Offers Extended', count: 18, color: 'bg-emerald-500', width: '20%' },
    { stage: 'Candidates Joined', count: 14, color: 'bg-teal-600', width: '15%' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Recruitment Funnel Bar Chart */}
      <div className="lg:col-span-7 bg-white dark:bg-gray-900 p-6 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-gray-800 pb-3">
          <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span>Candidate Conversion Funnel</span>
          </h4>
          <span className="text-xs text-emerald-500 font-bold">+18.5% YoY Velocity</span>
        </div>

        <div className="space-y-3">
          {funnelData.map((item, idx) => (
            <div key={idx} className="space-y-1 text-xs">
              <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300">
                <span>{item.stage}</span>
                <span>{item.count.toLocaleString('en-IN')}</span>
              </div>
              <div className="w-full h-3 bg-slate-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full transition-all duration-500`} style={{ width: item.width }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sourcing Channel Performance Breakdown */}
      <div className="lg:col-span-5 bg-white dark:bg-gray-900 p-6 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-gray-800 pb-3">
          <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
            <Target className="w-4 h-4 text-indigo-600" />
            <span>Applicant Sourcing Channels</span>
          </h4>
          <span className="text-xs text-slate-400">August 2026</span>
        </div>

        <div className="space-y-3 text-xs">
          <div className="p-3 bg-slate-50 dark:bg-gray-800 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              <span className="font-bold text-slate-800 dark:text-slate-200">EmployerHub Direct AI Search</span>
            </div>
            <span className="font-extrabold text-slate-900 dark:text-white">54% (670 Hires)</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-gray-800 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="font-bold text-slate-800 dark:text-slate-200">Employee Internal Referrals</span>
            </div>
            <span className="font-extrabold text-slate-900 dark:text-white">26% (320 Hires)</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-gray-800 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="font-bold text-slate-800 dark:text-slate-200">LinkedIn & Organic Job Board</span>
            </div>
            <span className="font-extrabold text-slate-900 dark:text-white">20% (250 Hires)</span>
          </div>
        </div>
      </div>

    </div>
  );
};
