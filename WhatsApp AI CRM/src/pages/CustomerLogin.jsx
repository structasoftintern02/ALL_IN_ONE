import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme, VARIATIONS } from '../context/ThemeContext';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { MessageSquare, Lock, Mail, Phone, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';

export const CustomerLogin = ({ setActivePage }) => {
  const { variation, activeConfig } = useTheme();

  const [loginMethod, setLoginMethod] = useState('email'); // 'email' | 'mobile'
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [email, setEmail] = useState('alex.rivera@fintechsaas.com');
  const [mobile, setMobile] = useState('+1 555 019 2834');
  const [password, setPassword] = useState('••••••••••••');

  const handleSubmit = (e) => {
    e.preventDefault();
    setActivePage('dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      
      <ScrollReveal direction="scale" amount={0.1}>
        <div className={`p-8 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} shadow-2xl space-y-6`}>
          
          {/* Brand Header */}
          <div className="text-center space-y-2">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white mx-auto ${
              variation === VARIATIONS.DARK ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-emerald-600'
            }`}>
              <MessageSquare className="w-6 h-6 fill-current" />
            </div>
            <h2 className={`text-2xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
              Welcome Back to WhatsApp AI CRM
            </h2>
            <p className="text-xs text-slate-500">Sign in to your Meta Cloud API workspace</p>
          </div>

          {/* Tab Switcher: Email vs Mobile OTP */}
          <div className="flex items-center p-1 bg-slate-100 dark:bg-gray-800 rounded-xl">
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                loginMethod === 'email' 
                  ? 'bg-white dark:bg-gray-900 text-slate-900 dark:text-white shadow-xs' 
                  : 'text-slate-500'
              }`}
            >
              Email Login
            </button>

            <button
              onClick={() => setLoginMethod('mobile')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                loginMethod === 'mobile' 
                  ? 'bg-white dark:bg-gray-900 text-slate-900 dark:text-white shadow-xs' 
                  : 'text-slate-500'
              }`}
            >
              Mobile OTP Login
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {loginMethod === 'email' ? (
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Business Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-gray-800/80 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  WhatsApp Registered Mobile Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-gray-800/80 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setActivePage('forgot')}
                  className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-gray-800/80 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium focus:ring-2 focus:ring-emerald-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 text-slate-400 hover:text-slate-600 absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                />
                <span className="text-slate-600 dark:text-slate-400">Remember this browser</span>
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${activeConfig.buttonPrimary}`}
            >
              <span>Sign In to Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>

          <div className="text-center pt-2 border-t border-slate-100 dark:border-gray-800 text-xs text-slate-500">
            Don't have a CRM workspace yet?{' '}
            <button
              onClick={() => setActivePage('register')}
              className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Register Free Account
            </button>
          </div>

        </div>
      </ScrollReveal>

    </div>
  );
};
