import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCompany } from '../../components/layout/SidebarCompany';
import { mockCompanyUser } from '../../data/companyData';
import { Building, ShieldCheck, Save, CheckCircle2 } from 'lucide-react';

export const CompanyProfile = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const [saved, setSaved] = useState(false);
  const [comp, setComp] = useState(mockCompanyUser);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarCompany activePage="company-profile" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Employer Company Profile</h1>
            <p className="text-xs text-slate-500">Manage business details, GSTIN, and branding hub</p>
          </div>
          {saved && <span className="text-xs font-bold text-emerald-600">✓ Profile updated!</span>}
        </div>

        <form onSubmit={handleSave} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4 max-w-2xl text-xs shadow-sm w-full">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Company Name</label>
            <input type="text" value={comp.name} onChange={(e) => setComp({ ...comp, name: e.target.value })} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">GSTIN Verification Number</label>
            <input type="text" value={comp.gstin} onChange={(e) => setComp({ ...comp, gstin: e.target.value })} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 uppercase font-mono font-bold" />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Company Website</label>
            <input type="text" value={comp.website} onChange={(e) => setComp({ ...comp, website: e.target.value })} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" />
          </div>

          <button type="submit" className={`w-full sm:w-auto px-6 py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}>
            Save Company Details
          </button>
        </form>
      </div>
    </div>
  );
};
