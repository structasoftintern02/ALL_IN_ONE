import React from 'react';
import { motion } from 'framer-motion';
import { Award, Download, TrendingUp, Users, BookOpen, CheckCircle2, BarChart3 } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const ReportsPage = () => {
  const { students, programs, showToast } = useSchool();

  const handleExport = (type) => {
    showToast(`Generating ${type} report download...`);
  };

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Reports & Performance Analytics</h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
            Analyze overall student skill discovery, program completion rates, and attendance distribution
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleExport('Excel')}
            className="px-4 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-extrabold text-xs border border-slate-200 dark:border-slate-700 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Export Excel</span>
          </button>

          <button
            type="button"
            onClick={() => handleExport('PDF')}
            className="px-5 h-11 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold text-xs shadow-md flex items-center gap-2 hover:scale-105 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Export PDF Report</span>
          </button>
        </div>
      </div>

      {/* Analytics Metric Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-3xl space-y-1">
          <div className="text-slate-400 font-bold uppercase text-[10px]">Average Skill Score</div>
          <div className="text-2xl font-black text-teal-600 dark:text-teal-400">89.8 / 100</div>
          <div className="text-xs text-emerald-500 font-bold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+4.2% Growth this month</span>
          </div>
        </div>

        <div className="glass-card p-5 rounded-3xl space-y-1">
          <div className="text-slate-400 font-bold uppercase text-[10px]">Overall Attendance</div>
          <div className="text-2xl font-black text-purple-600 dark:text-purple-400">95.4%</div>
          <div className="text-xs text-slate-400 font-semibold">Consistent Attendance</div>
        </div>

        <div className="glass-card p-5 rounded-3xl space-y-1">
          <div className="text-slate-400 font-bold uppercase text-[10px]">Program Completion</div>
          <div className="text-2xl font-black text-amber-600 dark:text-amber-400">92%</div>
          <div className="text-xs text-amber-500 font-bold">142 Certificates Issued</div>
        </div>

        <div className="glass-card p-5 rounded-3xl space-y-1">
          <div className="text-slate-400 font-bold uppercase text-[10px]">Active Enrollments</div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">93 Enrolled</div>
          <div className="text-xs text-slate-400 font-semibold">Across 4 Skill Domains</div>
        </div>
      </div>

      {/* Visual Progress Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Student Progress Breakdown Bars */}
        <div className="glass-card rounded-3xl p-6 space-y-4">
          <h3 className="text-base font-black text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-teal-500" />
            <span>Student Skill Domain Mastery</span>
          </h3>

          <div className="space-y-4 text-xs font-bold">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-700 dark:text-slate-300">Cognitive & Logical Reasoning</span>
                <span className="text-teal-600 dark:text-teal-400 font-black">94% Mastery</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-teal-500 rounded-full w-[94%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-700 dark:text-slate-300">STEM & Robotics Innovation</span>
                <span className="text-purple-600 dark:text-purple-400 font-black">88% Mastery</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full w-[88%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-700 dark:text-slate-300">Sensory & Motor Coordination</span>
                <span className="text-amber-600 dark:text-amber-400 font-black">92% Mastery</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full w-[92%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-700 dark:text-slate-300">Phonics & Verbal Communication</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-black">86% Mastery</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[86%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Program Attendance Performance Table */}
        <div className="glass-card rounded-3xl p-6 space-y-4">
          <h3 className="text-base font-black text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-500" />
            <span>Program Attendance & Performance</span>
          </h3>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {programs.map(prog => (
              <div key={prog.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-black text-slate-900 dark:text-white">{prog.name}</div>
                  <div className="text-[11px] font-semibold text-slate-400">{prog.assignedTeacher}</div>
                </div>
                <div className="text-right">
                  <div className="font-black text-teal-600 dark:text-teal-400">{prog.enrolledCount} Enrolled</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">96% Avg Attendance</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
