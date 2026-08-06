import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { School, Mail, Lock, Eye, EyeOff, LogIn, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const LoginPage = ({ setAuthPage }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('admin@littlestars.edu.in');
  const [password, setPassword] = useState('school1234');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await login(email, password);
    if (!res.success) {
      setError(res.error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10"
      >
        {/* Brand Badge */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-teal-500/30">
            <School className="w-8 h-8" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>School Administration Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Welcome Back</h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">Sign in to manage students, faculty, and skill programs</p>
        </div>

        {/* Demo Credentials Pill */}
        <div className="mb-6 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
          <div className="font-extrabold text-teal-400 flex items-center gap-1.5 mb-1">
            <CheckCircle2 className="w-4 h-4" />
            <span>Quick Demo Credentials</span>
          </div>
          <div className="flex justify-between items-center text-slate-400 font-mono text-[11px] mt-1">
            <span>Email: <strong className="text-white">admin@littlestars.edu.in</strong></span>
            <span>Pass: <strong className="text-white">school1234</strong></span>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-bold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-extrabold text-slate-300 mb-1.5 uppercase tracking-wider">School Admin Email</label>
            <div className="relative">
              <Mail className="w-5 h-5 text-slate-500 absolute left-3.5 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@school.edu.in"
                required
                className="w-full h-11 pl-11 pr-4 bg-slate-800/90 border border-slate-700 rounded-xl text-sm font-semibold text-white outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider">Password</label>
              <button
                type="button"
                onClick={() => setAuthPage('forgot')}
                className="text-xs font-extrabold text-teal-400 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <Lock className="w-5 h-5 text-slate-500 absolute left-3.5 top-3" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full h-11 pl-11 pr-11 bg-slate-800/90 border border-slate-700 rounded-xl text-sm font-semibold text-white outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3 text-slate-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 mt-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-teal-500/25 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <LogIn className="w-5 h-5" />
                <span>Sign In to School Portal</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-slate-400 font-semibold border-t border-slate-800 pt-5">
          New School?{' '}
          <button
            type="button"
            onClick={() => setAuthPage('register')}
            className="font-extrabold text-teal-400 hover:underline inline-flex items-center gap-1"
          >
            <span>Register Your School</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
