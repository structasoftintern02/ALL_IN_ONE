import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Building2, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export const EmployerLogin = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  const [email, setEmail] = useState('hr@techcorp.in');
  const [password, setPassword] = useState('••••••••••••');

  const handleSubmit = (e) => {
    e.preventDefault();
    setActivePage('dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <ScrollReveal direction="scale" amount={0.1}>
        <div className={`p-8 bg-white dark:bg-gray-900 ${activeConfig.cardRadius} border border-slate-200 dark:border-gray-800 shadow-2xl space-y-6`}>
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-extrabold flex items-center justify-center mx-auto text-xl">
              <Building2 className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Employer Portal Login</h2>
            <p className="text-xs text-slate-500">Access ATS candidate pipeline & employee HRMS console</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Corporate Work Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                  required
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={`w-full py-3.5 ${activeConfig.cardRadius} text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${activeConfig.buttonPrimary}`}
            >
              <span>Login to Employer Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>

          <div className="text-center pt-2 border-t border-slate-100 dark:border-gray-800 text-xs text-slate-500">
            Don't have an employer account?{' '}
            <button onClick={() => setActivePage('register')} className="font-bold text-blue-600 hover:underline">
              Register Free Company Profile
            </button>
          </div>

        </div>
      </ScrollReveal>
    </div>
  );
};
