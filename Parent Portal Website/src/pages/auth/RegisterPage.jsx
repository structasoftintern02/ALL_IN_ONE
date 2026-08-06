import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Lock, Eye, EyeOff, UserPlus, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const RegisterPage = ({ setAuthPage }) => {
  const { register } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (form.password.length < 4) { setError('Password must be at least 4 characters.'); return; }
    if (form.password !== form.confirmPassword) { setError('Passwords do not match.'); return; }
    if (!agreed) { setError('Please accept the Terms & Conditions.'); return; }
    setLoading(true);
    const result = await register(form);
    if (!result.success) setError(result.error || 'Registration failed.');
    setLoading(false);
  };

  const fields = [
    { key: 'name', label: 'Full Name', icon: User, type: 'text', placeholder: 'e.g. Priya Sharma' },
    { key: 'email', label: 'Email Address', icon: Mail, type: 'email', placeholder: 'e.g. priya@email.com' },
    { key: 'phone', label: 'Phone Number', icon: Phone, type: 'tel', placeholder: 'e.g. +91 98765 43210' },
  ];

  return (
    <div className="auth-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card w-full max-w-md relative z-10"
      >
        <div className="p-8 pb-2 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mx-auto shadow-xl shadow-purple-500/25 mb-6">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-black text-white mb-1">Create Account</h1>
          <p className="text-sm text-slate-400 font-medium">Join the Parent Portal to track your child's growth</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 pt-4 space-y-4">
          {error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold text-center"
            >{error}</motion.div>
          )}

          {fields.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.key}>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">{f.label}</label>
                <div className="relative flex items-center">
                  <Icon className="absolute left-4 w-4 h-4 text-purple-400 pointer-events-none z-10" />
                  <input
                    type={f.type} value={form[f.key]} onChange={(e) => handleChange(f.key, e.target.value)}
                    placeholder={f.placeholder} required={f.key !== 'phone'}
                    className="auth-input"
                  />
                </div>
              </div>
            );
          })}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">Password</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 w-4 h-4 text-purple-400 pointer-events-none z-10" />
                <input type={showPassword ? 'text' : 'password'} value={form.password} onChange={(e) => handleChange('password', e.target.value)}
                  placeholder="••••••" required
                  className="auth-input"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">Confirm</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 w-4 h-4 text-purple-400 pointer-events-none z-10" />
                <input type={showPassword ? 'text' : 'password'} value={form.confirmPassword} onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  placeholder="••••••" required
                  className="auth-input auth-input-suffix"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-slate-400 hover:text-slate-200 z-10">
                  {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          <label className="flex items-start gap-2.5 cursor-pointer py-1">
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-slate-600 bg-white/5 text-purple-500 focus:ring-purple-500" />
            <span className="text-xs font-medium text-slate-400 leading-relaxed">
              I agree to the <span className="text-purple-400 font-bold">Terms & Conditions</span> and <span className="text-purple-400 font-bold">Privacy Policy</span>
            </span>
          </label>

          <button type="submit" disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-extrabold text-sm shadow-lg shadow-purple-500/25 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><CheckCircle2 className="w-4 h-4" /><span>Create My Account</span></>}
          </button>
        </form>

        <div className="px-8 pb-8 text-center">
          <button onClick={() => setAuthPage('login')} className="text-sm text-slate-500 font-medium hover:text-slate-300 transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
          </button>
        </div>
      </motion.div>
    </div>
  );
};
