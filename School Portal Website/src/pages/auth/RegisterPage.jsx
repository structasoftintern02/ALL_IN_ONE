import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { School, User, Mail, Lock, Phone, MapPin, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const RegisterPage = ({ setAuthPage }) => {
  const { registerSchool } = useAuth();
  const [form, setForm] = useState({
    name: '',
    principal: '',
    email: '',
    phone: '',
    address: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await registerSchool(form);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10"
      >
        <button
          type="button"
          onClick={() => setAuthPage('login')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-extrabold hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Sign In</span>
        </button>

        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-black text-white">Register School</h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">Enroll your institution into the Child Skill Discovery Network</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-extrabold text-slate-300 mb-1 uppercase tracking-wider">School Name</label>
            <input
              type="text"
              placeholder="e.g. St. Xavier International School"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full h-11 px-4 bg-slate-800/90 border border-slate-700 rounded-xl text-sm font-semibold text-white outline-none focus:border-teal-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-extrabold text-slate-300 mb-1 uppercase tracking-wider">Principal Name</label>
              <input
                type="text"
                placeholder="Dr. R. K. Sharma"
                value={form.principal}
                onChange={(e) => setForm({ ...form, principal: e.target.value })}
                required
                className="w-full h-11 px-4 bg-slate-800/90 border border-slate-700 rounded-xl text-sm font-semibold text-white outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block text-xs font-extrabold text-slate-300 mb-1 uppercase tracking-wider">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="w-full h-11 px-4 bg-slate-800/90 border border-slate-700 rounded-xl text-sm font-semibold text-white outline-none focus:border-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold text-slate-300 mb-1 uppercase tracking-wider">Official Email</label>
            <input
              type="email"
              placeholder="admin@school.edu.in"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full h-11 px-4 bg-slate-800/90 border border-slate-700 rounded-xl text-sm font-semibold text-white outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-xs font-extrabold text-slate-300 mb-1 uppercase tracking-wider">Campus Address</label>
            <input
              type="text"
              placeholder="City, State, Pincode"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              required
              className="w-full h-11 px-4 bg-slate-800/90 border border-slate-700 rounded-xl text-sm font-semibold text-white outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-xs font-extrabold text-slate-300 mb-1 uppercase tracking-wider">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className="w-full h-11 px-4 bg-slate-800/90 border border-slate-700 rounded-xl text-sm font-semibold text-white outline-none focus:border-teal-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 mt-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-teal-500/25 hover:brightness-110 active:scale-[0.99] transition-all"
          >
            {loading ? 'Registering School...' : 'Complete School Registration'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};
