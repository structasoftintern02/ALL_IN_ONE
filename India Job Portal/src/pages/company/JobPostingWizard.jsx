import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCompany } from '../../components/layout/SidebarCompany';
import { CheckCircle2, ArrowRight, PlusCircle } from 'lucide-react';

export const JobPostingWizard = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const [submitted, setSubmitted] = useState(false);
  const [jobTitle, setJobTitle] = useState('Senior Full Stack React Developer');
  const [salaryMin, setSalaryMin] = useState('24');
  const [salaryMax, setSalaryMax] = useState('36');
  const [city, setCity] = useState('Bengaluru');
  const [experience, setExperience] = useState('4 - 7 Yrs');
  const [mode, setMode] = useState('Hybrid');

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarCompany activePage="company-post-job" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Post a New Job Opening</h1>
          <p className="text-xs text-slate-500">Reach 4.8 Million+ verified candidates across India</p>
        </div>

        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 max-w-3xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">Job Designation Title</label>
                <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Min CTC Salary (₹ LPA)</label>
                <input type="number" value={salaryMin} onChange={(e) => setSalaryMin(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Max CTC Salary (₹ LPA)</label>
                <input type="number" value={salaryMax} onChange={(e) => setSalaryMax(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Job Location City</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Work Mode</label>
                <select value={mode} onChange={(e) => setMode(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200">
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                  <option value="Onsite">Onsite</option>
                </select>
              </div>
            </div>

            <button type="submit" className={`w-full py-3.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}>
              Publish Job Opening to India Jobs Network →
            </button>
          </form>
        ) : (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 text-center space-y-4 max-w-xl w-full">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h2 className="text-xl font-bold text-slate-900">Job Posted Successfully!</h2>
            <p className="text-xs text-slate-500">Your job post for "{jobTitle}" is live for candidate applications.</p>
            <button onClick={() => setActivePage('company-dashboard')} className={`w-full py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}>
              Return to ATS Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
