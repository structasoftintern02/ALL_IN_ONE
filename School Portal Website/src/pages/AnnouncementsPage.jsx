import React from 'react';
import { Bell, ShieldCheck, AlertCircle, Info, CheckCircle2 } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const AnnouncementsPage = () => {
  const { announcements } = useSchool();

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <Bell className="w-6 h-6 text-blue-400" />
            <h1 className="text-xl sm:text-2xl font-black text-white">Announcements & Priority Alerts</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Child Skill Foundation broadcasts & internal school partner notices regarding new programs, classroom approvals, and payout releases.
          </p>
        </div>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {announcements.map((anc) => (
          <div 
            key={anc.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 relative overflow-hidden"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                  anc.priority === 'High' ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30' : 'bg-blue-500/15 text-blue-600 dark:text-blue-400'
                }`}>
                  {anc.priority} Priority
                </span>
                <span className="text-xs font-black text-slate-900 dark:text-white">{anc.sender}</span>
              </div>
              <span className="text-xs text-slate-400 font-bold">{anc.date}</span>
            </div>

            <h3 className="text-base font-black text-slate-900 dark:text-white pt-1">{anc.title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{anc.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
