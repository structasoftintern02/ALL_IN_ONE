import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Building2, ArrowRight } from 'lucide-react';

export const CompanyLogin = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const [email, setEmail] = useState('hr@razorpay.com');
  const [password, setPassword] = useState('••••••••••••');

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
          <h2 className="text-2xl font-extrabold text-slate-900">Employer ATS Login</h2>
          <p className="text-xs text-slate-500">Sign in to your hiring manager dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" required />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" required />
          </div>

          <button type="submit" className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}>
            Access Employer ATS Portal →
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
          New Employer?{' '}
          <button onClick={() => setActivePage('company-register')} className="font-bold text-blue-600 hover:underline">
            Register Company Workspace
          </button>
        </div>
      </div>
    </div>
  );
};
