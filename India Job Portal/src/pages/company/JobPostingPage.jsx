import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCompany } from '../../components/layout/SidebarCompany';
import { PlusCircle, CheckCircle2 } from 'lucide-react';

export const JobPostingPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const [posted, setPosted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosted(true);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarCompany activePage="company-post-job" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Post New Verified Job Opening</h1>
          <p className="text-xs text-slate-500">Publish high-priority tech or executive positions to verified Indian talent pool</p>
        </div>

        <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-sm max-w-2xl text-xs space-y-6 w-full">
          {!posted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Job Title</label>
                <input required type="text" placeholder="e.g. Senior Full Stack Engineer (React + Node)" className="w-full p-3 rounded-xl border border-slate-200" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Location</label>
                  <input required type="text" placeholder="e.g. Bengaluru, Karnataka (Hybrid)" className="w-full p-3 rounded-xl border border-slate-200" />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Salary Range (CTC)</label>
                  <input required type="text" placeholder="e.g. ₹28,000,000 - ₹38,000,000 / yr" className="w-full p-3 rounded-xl border border-slate-200" />
                </div>
              </div>

              <button type="submit" className={`w-full py-3.5 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary}`}>
                Publish Job Opening Now →
              </button>
            </form>
          ) : (
            <div className="text-center p-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">Job Opening Published Successfully!</h3>
              <p className="text-xs text-slate-500">Recruiters will receive AI-matched candidate profiles within 2 hours.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
