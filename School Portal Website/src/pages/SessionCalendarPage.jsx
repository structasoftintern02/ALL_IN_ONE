import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, Plus, MapPin, UserCheck, Sparkles } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const SessionCalendarPage = () => {
  const { sessions, showToast } = useSchool();
  const [currentMonth, setCurrentMonth] = useState('August 2026');

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Calendar dates for August 2026 (Starts Saturday August 1)
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const holidays = [
    { date: '15 Aug 2026', title: 'Independence Day', type: 'National Holiday' },
    { date: '26 Aug 2026', title: 'Janmashtami Skill Festival', type: 'School Event' }
  ];

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Academic & Session Calendar</h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
            View monthly skill program schedules, upcoming lab sessions, and school holidays
          </p>
        </div>

        <button
          type="button"
          onClick={() => showToast('Event creation modal triggered!')}
          className="px-5 h-11 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold text-xs shadow-md flex items-center gap-2 self-start sm:self-auto hover:scale-105 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Calendar Event</span>
        </button>
      </div>

      {/* Main Grid: Calendar + Timeline Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Monthly Calendar View */}
        <div className="lg:col-span-2 glass-card rounded-3xl p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <CalendarIcon className="w-5 h-5 text-teal-500" />
              <h3 className="text-lg font-black text-slate-900 dark:text-white">{currentMonth}</h3>
            </div>

            <div className="flex items-center gap-2">
              <button type="button" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button type="button" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-black text-slate-400 uppercase tracking-wider">
            {daysOfWeek.map(d => (
              <div key={d} className="py-2">{d}</div>
            ))}
          </div>

          {/* Calendar Date Boxes */}
          <div className="grid grid-cols-7 gap-2">
            {/* Empty offset for Aug 2026 (Starts Sat) */}
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={`empty-${idx}`} className="h-20 sm:h-24 rounded-2xl bg-slate-50/40 dark:bg-slate-900/40" />
            ))}

            {daysInMonth.map((day) => {
              const hasSession = [8, 9, 10, 15, 26].includes(day);
              const isHoliday = [15, 26].includes(day);

              return (
                <div
                  key={day}
                  className={`h-20 sm:h-24 rounded-2xl p-2 flex flex-col justify-between border transition-all ${
                    day === 8
                      ? 'bg-teal-500/15 border-teal-500/40 text-teal-600 dark:text-teal-400 font-black'
                      : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="text-xs font-extrabold flex justify-between items-center">
                    <span>{day}</span>
                    {day === 8 && <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />}
                  </div>

                  {hasSession && (
                    <div className={`px-1.5 py-0.5 rounded-md text-[9px] font-black truncate ${
                      isHoliday
                        ? 'bg-rose-500/20 text-rose-600 dark:text-rose-400'
                        : 'bg-purple-500/20 text-purple-600 dark:text-purple-300'
                    }`}>
                      {isHoliday ? (day===15?'Independence Day':'Skill Fest') : '2 Sessions'}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 1 Col: Session Timeline & Holidays */}
        <div className="space-y-6">
          
          {/* Scheduled Sessions Timeline */}
          <div className="glass-card rounded-3xl p-5 sm:p-6 space-y-4">
            <h3 className="text-base font-black text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <span>Upcoming Session Timeline</span>
            </h3>

            <div className="space-y-3">
              {sessions.map((ses) => (
                <div key={ses.id} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold text-teal-600 dark:text-teal-400">{ses.date}</span>
                    <span className="font-bold text-slate-400">{ses.time}</span>
                  </div>
                  <div className="text-sm font-black text-slate-900 dark:text-white leading-tight">{ses.programName}</div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between pt-1">
                    <span>{ses.teacherName}</span>
                    <span className="font-bold text-purple-500">{ses.room}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* School Holidays Card */}
          <div className="glass-card rounded-3xl p-5 sm:p-6 space-y-3">
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">School Holidays</h3>
            {holidays.map(h => (
              <div key={h.title} className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs">
                <div className="font-black text-rose-600 dark:text-rose-400">{h.title}</div>
                <div className="text-slate-500 dark:text-slate-400 font-semibold mt-0.5">{h.date} • {h.type}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};
