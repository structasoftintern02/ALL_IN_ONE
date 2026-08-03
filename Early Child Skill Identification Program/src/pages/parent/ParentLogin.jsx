import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export const ParentLogin = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const [email, setEmail] = useState('priya.verma@example.com');
  const [password, setPassword] = useState('••••••••••••');

  const handleSubmit = (e) => {
    e.preventDefault();
    setActivePortal('parent');
    setActivePage('parent-dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className={`p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} shadow-2xl space-y-6`}>
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mx-auto text-xl font-bold">
            👨‍👩‍👧
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Parent Login</h2>
          <p className="text-xs text-slate-500">Access your child's skill diagnostic reports</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Parent Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
          </div>

          <button type="submit" className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary}`}>
            Access Parent Dashboard →
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
          New Parent?{' '}
          <button onClick={() => setActivePage('parent-register')} className="font-bold text-pink-600 hover:underline">
            Enroll Child Free
          </button>
        </div>
      </div>
    </div>
  );
};
