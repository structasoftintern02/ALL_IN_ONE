import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCandidate } from '../../components/layout/SidebarCandidate';
import { mockCandidateUser } from '../../data/candidatesData';
import { Upload, CheckCircle2, User, FileText } from 'lucide-react';

export const CandidateProfile = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const [candidate, setCandidate] = useState(mockCandidateUser);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarCandidate activePage="candidate-profile" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">My Resume & Professional Profile</h1>
            <p className="text-xs text-slate-500">Update verified candidate credentials to boost recruiter views by 3.4x</p>
          </div>
          {saved && <span className="text-xs font-bold text-emerald-600">✓ Resume profile saved!</span>}
        </div>

        <form onSubmit={handleSave} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4 max-w-3xl text-xs shadow-sm w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
              <input type="text" value={candidate.name} onChange={(e) => setCandidate({ ...candidate, name: e.target.value })} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Current Role / Title</label>
              <input type="text" value={candidate.currentRole} onChange={(e) => setCandidate({ ...candidate, currentRole: e.target.value })} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Preferred Location</label>
              <input type="text" value={candidate.currentLocation} onChange={(e) => setCandidate({ ...candidate, currentLocation: e.target.value })} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Expected CTC</label>
              <input type="text" value={candidate.expectedSalary} onChange={(e) => setCandidate({ ...candidate, expectedSalary: e.target.value })} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" />
            </div>
          </div>

          <button type="submit" className={`w-full sm:w-auto px-6 py-2.5 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary}`}>
            Save Resume Profile
          </button>
        </form>
      </div>
    </div>
  );
};
