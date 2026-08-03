import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Phone, Lock, ArrowRight, Briefcase } from 'lucide-react';

export const CandidateLogin = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const [method, setMethod] = useState('email'); // 'email' | 'mobile'
  const [email, setEmail] = useState('vikram.verma@example.com');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [password, setPassword] = useState('••••••••••••');

  const handleSubmit = (e) => {
    e.preventDefault();
    setActivePortal('candidate');
    setActivePage('candidate-dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className={`p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} shadow-2xl space-y-6`}>
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
            👨‍🎓
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Candidate Login</h2>
          <p className="text-xs text-slate-500">Access your job applications and resume profile</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email or Mobile Number</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" required />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" required />
          </div>

          <button type="submit" className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}>
            Sign In to Candidate Portal →
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
          New to India Jobs?{' '}
          <button onClick={() => setActivePage('candidate-register')} className="font-bold text-emerald-600 hover:underline">
            Register Free Profile
          </button>
        </div>
      </div>
    </div>
  );
};
