import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const ForgotPasswordPage = ({ setAuthPage }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10"
      >
        <button
          type="button"
          onClick={() => setAuthPage('login')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-extrabold hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Sign In</span>
        </button>

        <h1 className="text-2xl font-black text-white mb-2">Reset Password</h1>
        <p className="text-xs text-slate-400 font-semibold mb-6">Enter your registered school email address to receive password reset instructions.</p>

        {sent ? (
          <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold space-y-2">
            <div className="flex items-center gap-2 font-black text-sm text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
              <span>Reset Email Sent!</span>
            </div>
            <p>We have sent password reset instructions to <strong>{email}</strong>. Please check your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-extrabold text-slate-300 mb-1 uppercase tracking-wider">School Email</label>
              <input
                type="email"
                placeholder="admin@school.edu.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-11 px-4 bg-slate-800/90 border border-slate-700 rounded-xl text-sm font-semibold text-white outline-none focus:border-teal-500"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-teal-500/25"
            >
              Send Reset Link
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
