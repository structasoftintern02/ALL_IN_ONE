import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sidebar } from '../components/layout/Sidebar';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { UserCheck, CheckCircle2, FileCheck, Clock, Send, ShieldCheck } from 'lucide-react';

export const CandidateOnboarding = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  const onboardingCandidates = [
    { name: 'Kavita Menon', role: 'Enterprise Account Executive', ctc: '₹21,00,000 P.A.', status: 'Offer Letter Signed', joiningDate: '15-Aug-2026', docsUploaded: '4 / 4 Complete' },
    { name: 'Siddharth Roy', role: 'Senior Full Stack React Developer', ctc: '₹24,00,000 P.A.', status: 'Joined Workspace', joiningDate: '01-Aug-2026', docsUploaded: '4 / 4 Complete' }
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <Sidebar activePage="onboarding" setActivePage={setActivePage} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <ScrollReveal direction="down" amount={0.1} className="border-b border-slate-200 dark:border-gray-800 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Digital Candidate Onboarding & Offer Vault
          </h1>
          <p className="text-xs text-slate-500">Automated offer letter generation, e-signatures, and KYC document checklists</p>
        </ScrollReveal>

        <div className="space-y-4 max-w-4xl">
          {onboardingCandidates.map((cand, idx) => (
            <div key={idx} className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4 shadow-xs">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white">{cand.name}</h3>
                  <p className="text-xs text-slate-500">{cand.role} • CTC: {cand.ctc}</p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 font-extrabold text-xs rounded-full">
                  {cand.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 dark:bg-gray-800 rounded-2xl text-xs">
                <div><span className="text-slate-400">Target Joining Date:</span> <strong className="text-slate-900 dark:text-white block">{cand.joiningDate}</strong></div>
                <div><span className="text-slate-400">KYC Verification Documents:</span> <strong className="text-emerald-500 block font-bold">{cand.docsUploaded}</strong></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
