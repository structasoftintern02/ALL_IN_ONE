import React from 'react';
import { mockInterviews } from '../../data/employerData';
import { Calendar, Clock, Video, User, CheckCircle2, Plus, Sparkles } from 'lucide-react';

export const CalendarView = () => {
  const days = [
    { title: 'Mon (Aug 04)', fullDate: 'Monday, August 04, 2026', interview: mockInterviews[0], color: 'border-blue-500/40 text-blue-400 bg-blue-950/80 border-blue-800' },
    { title: 'Tue (Aug 05)', fullDate: 'Tuesday, August 05, 2026', interview: mockInterviews[1], color: 'border-indigo-500/40 text-indigo-400 bg-indigo-950/80 border-indigo-800' },
    { title: 'Wed (Aug 06)', fullDate: 'Wednesday, August 06, 2026', interview: mockInterviews[2], color: 'border-purple-500/40 text-purple-400 bg-purple-950/80 border-purple-800' },
    { title: 'Thu (Aug 07)', fullDate: 'Thursday, August 07, 2026', interview: mockInterviews[3], color: 'border-amber-500/40 text-amber-400 bg-amber-950/80 border-amber-800' },
    { title: 'Fri (Aug 08)', fullDate: 'Friday, August 08, 2026', interview: mockInterviews[4], color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/80 border-emerald-800' },
    { title: 'Sat (Aug 09)', fullDate: 'Saturday, August 09, 2026', interview: mockInterviews[5], color: 'border-teal-500/40 text-teal-400 bg-teal-950/80 border-teal-800' }
  ];

  return (
    <div className="space-y-6 w-full">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-slate-900/90 rounded-3xl border border-slate-800 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">August 2026 Interview Schedule</h3>
            <p className="text-xs text-slate-400">Automated Google Meet Video Sync & Panel Scheduling</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-extrabold rounded-2xl shadow-xs self-start sm:self-auto">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>Google Meet Sync Active</span>
        </div>
      </div>

      {/* Balanced 2-Row Grid Layout (3 columns in Row 1, 3 columns in Row 2) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start">
        {days.map((day, idx) => {
          const item = day.interview;
          return (
            <div key={idx} className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800/90 space-y-5 shadow-2xl">
              
              {/* Day Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3.5">
                <div className="font-extrabold text-sm sm:text-base text-white">
                  {day.title}
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-xl border border-slate-800">
                  2026
                </span>
              </div>

              {/* Scheduled Slot Card inside Day */}
              <div className="space-y-4">
                <div className={`p-5 bg-slate-950/95 rounded-2xl border space-y-3 shadow-lg ${day.color.split(' ')[0]}`}>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-extrabold px-3 py-1 rounded-xl border ${day.color.split(' ').slice(1).join(' ')}`}>
                      ⏰ {item.time.split('•')[1] || item.time}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <strong className="text-base sm:text-lg font-extrabold text-white block">{item.candidateName}</strong>
                    <span className="text-xs text-slate-300 font-medium block">👤 Interviewer: {item.interviewer}</span>
                    <span className="text-[11px] text-blue-400 font-semibold block">🎯 {item.type}</span>
                  </div>

                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-blue-600/30 transition-all"
                  >
                    <Video className="w-4 h-4 text-blue-200" />
                    <span>Join Google Meet Link</span>
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
