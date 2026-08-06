import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, KeyRound, CheckCircle2, Send } from 'lucide-react';

export const ForgotPasswordPage = ({ setAuthPage }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  return (
    <div className="auth-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card w-full max-w-md relative z-10"
      >
        <div className="p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto shadow-xl shadow-amber-500/25 mb-6">
            <KeyRound className="w-8 h-8 text-white" />
          </div>

          {!sent ? (
            <>
              <h1 className="text-2xl font-black text-white mb-1">Forgot Password?</h1>
              <p className="text-sm text-slate-400 font-medium mb-6">Enter your email and we'll send you a reset link</p>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">Email Address</label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-4 w-4 h-4 text-amber-400 pointer-events-none z-10" />
                    <input
                      type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your registered email" required
                      className="auth-input"
                    />
                  </div>
                </div>

                <button type="submit" disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm shadow-lg shadow-amber-500/25 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Send className="w-4 h-4" /><span>Send Reset Link</span></>}
                </button>
              </form>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
              <div className="w-20 h-20 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>
              <h2 className="text-xl font-black text-white">Check Your Email!</h2>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                We've sent a password reset link to <span className="text-teal-400 font-bold">{email}</span>. Please check your inbox and follow the instructions.
              </p>
              <p className="text-xs text-slate-500">Didn't receive it? Check your spam folder or try again.</p>
            </motion.div>
          )}

          <div className="mt-6">
            <button onClick={() => setAuthPage('login')} className="text-sm text-slate-500 font-medium hover:text-slate-300 transition-colors inline-flex items-center gap-2">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
