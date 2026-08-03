import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export const CompanyRegister = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const [companyName, setCompanyName] = useState('Razorpay Software Pvt Ltd');
  const [gstin, setGstin] = useState('29ABCDE1234F1ZH');
  const [city, setCity] = useState('Bengaluru');

  const handleSubmit = (e) => {
    e.preventDefault();
    setActivePortal('company');
    setActivePage('company-dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className={`p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} shadow-2xl space-y-6`}>
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto text-xl font-bold">
            🏢
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Employer Registration</h2>
          <p className="text-xs text-slate-500">GST verified business onboarding</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Company / Brand Name</label>
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">GSTIN Number (Verification)</label>
            <input type="text" value={gstin} onChange={(e) => setGstin(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 uppercase font-mono" required />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Headquarters City</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
          </div>

          <button type="submit" className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}>
            Create Verified Employer Workspace →
          </button>
        </form>
      </div>
    </div>
  );
};
