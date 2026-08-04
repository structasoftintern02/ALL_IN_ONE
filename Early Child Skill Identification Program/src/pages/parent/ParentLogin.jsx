import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Lock, ArrowRight, HeartHandshake, Users } from 'lucide-react';

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
    <div className="max-w-md mx-auto px-4 py-12 min-h-[75vh] flex items-center justify-center font-sans">
      <div className="w-full p-8 sm:p-10 bg-white/95 rounded-3xl border border-slate-200/90 shadow-2xl space-y-6 backdrop-blur-xl">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-amber-400 text-white flex items-center justify-center mx-auto shadow-lg shadow-pink-500/25">
            <HeartHandshake className="w-8 h-8 stroke-[2.2]" />
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Parent Login</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Access your child's skill diagnostic reports</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div className="space-y-1.5">
            <label className="block font-bold text-slate-700">Parent Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full py-3 pl-10 pr-3.5 bg-slate-50/90 rounded-2xl border border-slate-200 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all" 
                required 
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block font-bold text-slate-700">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full py-3 pl-10 pr-3.5 bg-slate-50/90 rounded-2xl border border-slate-200 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all" 
                required 
              />
            </div>
          </div>

          <button 
            type="submit" 
            className={`w-full py-3.5 ${activeConfig.cardRadius} text-sm font-extrabold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] ${activeConfig.buttonPrimary}`}
          >
            <span>Access Parent Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="font-medium text-slate-500">New Parent?</span>
          <button 
            onClick={() => setActivePage('parent-register')} 
            className="font-extrabold text-pink-600 hover:text-pink-700 hover:underline"
          >
            Enroll Child Free →
          </button>
        </div>
      </div>
    </div>
  );
};
