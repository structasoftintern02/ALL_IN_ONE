import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Lock, ArrowRight, GraduationCap, Award, Sparkles, BookOpen } from 'lucide-react';

export const TeacherLogin = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const [email, setEmail] = useState('shalini.sharma@earlyskills.edu');
  const [password, setPassword] = useState('••••••••••••');
  const [specialization, setSpecialization] = useState('Early STEM & Abacus Math');

  const handleSubmit = (e) => {
    e.preventDefault();
    setActivePortal('teacher');
    setActivePage('teacher-dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12 min-h-[75vh] flex items-center justify-center font-sans">
      <div className="w-full p-8 sm:p-10 bg-white/95 rounded-3xl border border-slate-200/90 shadow-2xl space-y-6 backdrop-blur-xl">
        
        {/* Header Icon & Title */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 text-white flex items-center justify-center mx-auto shadow-lg shadow-purple-500/25">
            <GraduationCap className="w-8 h-8 stroke-[2.2]" />
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Teacher Login</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Access Skill Diagnostic Evaluations & Educator Hub</p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div className="space-y-1.5">
            <label className="block font-bold text-slate-700">Teacher Email / Educator ID</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full py-3 pl-10 pr-3.5 bg-slate-50/90 rounded-2xl border border-slate-200 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all" 
                required 
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block font-bold text-slate-700">Skill Specialization Domain</label>
            <div className="relative">
              <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select 
                value={specialization} 
                onChange={(e) => setSpecialization(e.target.value)}
                className="w-full py-3 pl-10 pr-8 bg-slate-50/90 rounded-2xl border border-slate-200 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all appearance-none cursor-pointer"
              >
                <option value="Early STEM & Abacus Math">Early STEM & Abacus Math</option>
                <option value="Phonics & Language Skill">Phonics & Language Skill</option>
                <option value="Logic & Junior Coding">Logic & Junior Coding</option>
                <option value="Creative Art & Fine Motor">Creative Art & Fine Motor</option>
              </select>
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
                className="w-full py-3 pl-10 pr-3.5 bg-slate-50/90 rounded-2xl border border-slate-200 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all" 
                required 
              />
            </div>
          </div>

          <button 
            type="submit" 
            className={`w-full py-3.5 ${activeConfig.cardRadius} text-sm font-extrabold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] ${activeConfig.buttonPrimary}`}
          >
            <span>Access Teacher Hub</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center text-xs text-slate-500 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="font-medium text-slate-500">New Teacher Verification?</span>
          <button 
            onClick={() => {
              setActivePortal('teacher');
              setActivePage('teacher-cert-upload');
            }} 
            className="font-extrabold text-purple-600 hover:text-purple-700 hover:underline"
          >
            Upload Certificates →
          </button>
        </div>

      </div>
    </div>
  );
};
