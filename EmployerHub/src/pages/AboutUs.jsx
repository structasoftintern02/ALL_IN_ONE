import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Building2, Award, Users, ShieldCheck, Globe, CheckCircle2 } from 'lucide-react';

export const AboutUs = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <ScrollReveal direction="down" amount={0.1} className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Empowering Indian Enterprises Since 2018
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
          About EmployerHub Technologies
        </h1>
        <p className="text-slate-500 text-sm sm:text-base">
          Building India's most intelligent recruitment platform connecting top talent with high-growth companies.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" amount={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-2 text-center">
          <div className="text-3xl font-extrabold text-blue-600">12,500+</div>
          <div className="text-xs text-slate-500 font-bold uppercase">Active Hiring Employers</div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-2 text-center">
          <div className="text-3xl font-extrabold text-emerald-500">4.8 Million+</div>
          <div className="text-xs text-slate-500 font-bold uppercase">Verified Candidate Resumes</div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-2 text-center">
          <div className="text-3xl font-extrabold text-purple-600">185,000+</div>
          <div className="text-xs text-slate-500 font-bold uppercase">Successful Hires Completed</div>
        </div>
      </ScrollReveal>

    </div>
  );
};
