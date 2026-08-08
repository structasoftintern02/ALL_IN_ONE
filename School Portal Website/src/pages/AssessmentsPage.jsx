import React from 'react';
import { BarChart3, Lock, Award, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const AssessmentsPage = () => {
  const { assessments } = useSchool();

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-purple-400" />
            <h1 className="text-xl sm:text-2xl font-black text-white">CSF Assessment Summaries</h1>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
              <Lock className="w-3 h-3" /> Evaluated by CSF Faculty
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Child Skill Foundation teachers grade session milestone Rubrics and publish 12-page Talent Profile reports directly to parents.
          </p>
        </div>
      </div>

      {/* Assessments Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assessments.map((a, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
              <span className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400">Program Assessment Overview</span>
              <h3 className="text-base font-black text-slate-900 dark:text-white leading-tight mt-0.5">{a.programTitle}</h3>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60">
                <span className="text-slate-400 font-bold block text-[10px]">Evaluated Students</span>
                <span className="text-lg font-black text-slate-900 dark:text-white">{a.evaluatedStudents} Students</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-500/10">
                <span className="text-slate-400 font-bold block text-[10px]">Average Cohort Score</span>
                <span className="text-lg font-black text-purple-600 dark:text-purple-400">{a.averageScore}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs flex items-center justify-between">
              <span className="text-slate-500 font-bold">Top Performing Student:</span>
              <span className="font-black text-amber-500 flex items-center gap-1">
                <Award className="w-4 h-4" /> {a.topPerformer}
              </span>
            </div>

            <div className="text-xs text-slate-400 pt-1 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
              <span>{a.status}</span>
              <span className="font-bold text-slate-500">{a.lastEvaluationDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
