import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const ParentRegister = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const [parentName, setParentName] = useState('Priya Verma');
  const [childName, setChildName] = useState('Aarav Verma');
  const [childAge, setChildAge] = useState('5.5 Years');

  const handleSubmit = (e) => {
    e.preventDefault();
    setActivePortal('parent');
    setActivePage('assessment-quiz');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className={`p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} shadow-2xl space-y-6`}>
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mx-auto text-xl font-bold">
            👶
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Child Registration</h2>
          <p className="text-xs text-slate-500">Free skill assessment onboarding</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Parent Full Name</label>
            <input type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Child's Name</label>
            <input type="text" value={childName} onChange={(e) => setChildName(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Child's Exact Age</label>
            <input type="text" value={childAge} onChange={(e) => setChildAge(e.target.value)} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
          </div>

          <button type="submit" className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary}`}>
            Start Interactive Skill Assessment →
          </button>
        </form>
      </div>
    </div>
  );
};
