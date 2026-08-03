import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCompany } from '../../components/layout/SidebarCompany';
import { mockCompanyUser } from '../../data/companyData';
import { UserCheck, CheckCircle2, XCircle, Calendar, Eye, Search } from 'lucide-react';

export const CandidateManagement = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const [candidates, setCandidates] = useState(mockCompanyUser.kanbanPipeline[0].candidates);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarCompany activePage="company-applicants" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Candidate Screening & Resume Inbox</h1>
          <p className="text-xs text-slate-500">Screen applicant resumes and trigger shortlist/reject workflows</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {candidates.map((cand) => (
            <div key={cand.id} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">{cand.name}</h4>
                  <span className="text-slate-500 text-xs">{cand.role}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  {cand.matchScore}% Match
                </span>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1">
                <div>Experience: <strong>{cand.exp}</strong></div>
                <div>Location: <strong>{cand.location}</strong></div>
                <div>Expected Salary: <strong className="text-emerald-700">{cand.salary}</strong></div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-xs">
                <button 
                  onClick={() => alert(`Candidate ${cand.name} shortlisted for interview round!`)}
                  className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-center"
                >
                  ✓ Shortlist
                </button>
                
                <button 
                  onClick={() => alert(`Candidate ${cand.name} moved to rejected pool.`)}
                  className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold"
                >
                  ✕ Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
