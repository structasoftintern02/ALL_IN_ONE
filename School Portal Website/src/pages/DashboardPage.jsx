import React from 'react';
import { motion } from 'framer-motion';
import {
  Users, BookOpen, UserCheck, CheckCircle2, DollarSign, Calendar,
  Plus, Sparkles, ArrowRight, TrendingUp, Clock, MapPin, Award, Bell
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { useAuth } from '../context/AuthContext';

export const DashboardPage = () => {
  const { students, teachers, programs, sessions, setActivePage } = useSchool();
  const { user } = useAuth();

  const totalStudents = students.length;
  const activePrograms = programs.length;
  const totalTeachers = teachers.length;
  const avgAttendance = 95.4;
  const estRevenue = '₹1,24,500';

  const quickActions = [
    { label: 'Enroll Student', page: 'students', color: 'from-teal-500 to-emerald-600', icon: Users },
    { label: 'Schedule Session', page: 'calendar', color: 'from-purple-500 to-indigo-600', icon: Calendar },
    { label: 'Add Faculty', page: 'teachers', color: 'from-amber-500 to-rose-500', icon: UserCheck },
    { label: 'Broadcast Alert', page: 'notifications', color: 'from-blue-500 to-cyan-600', icon: Bell }
  ];

  const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto w-full">
      
      {/* 1. Hero Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl"
      >
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus Overview</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Welcome, <span className="text-teal-400">{user?.principal || 'Principal'}</span>! 🏫
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">
            {user?.name} • {today}
          </p>

          {/* KPI Stat Cards inside Hero */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-6">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-black text-teal-400">{totalStudents}</div>
              <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-1">Students</div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-black text-purple-400">{activePrograms}</div>
              <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-1">Active Programs</div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-400">{totalTeachers}</div>
              <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-1">Teachers</div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">{avgAttendance}%</div>
              <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-1">Avg Attendance</div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-center col-span-2 sm:col-span-1">
              <div className="text-xl sm:text-2xl font-black text-blue-400">{estRevenue}</div>
              <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-1">Program Revenue</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Quick Actions Bar */}
      <div>
        <div className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Quick Actions</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {quickActions.map((act) => {
            const Icon = act.icon;
            return (
              <button
                key={act.label}
                type="button"
                onClick={() => setActivePage(act.page)}
                className="glass-card glass-card-hover p-4 rounded-2xl flex items-center gap-3 text-left group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${act.color} text-white flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-slate-900 dark:text-white truncate">{act.label}</div>
                  <div className="text-[11px] font-semibold text-slate-400 flex items-center gap-1 mt-0.5">
                    <span>Manage →</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Student Enrolments & Upcoming Sessions Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Enrolled Students List */}
        <div className="lg:col-span-2 glass-card rounded-3xl p-5 sm:p-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-4">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-teal-500" />
              <span>Enrolled Students & Progress</span>
            </h3>
            <button
              type="button"
              onClick={() => setActivePage('students')}
              className="text-xs font-extrabold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
            >
              <span>View All ({totalStudents})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {students.slice(0, 4).map((st) => (
              <div key={st.id} className="py-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 font-black text-sm flex items-center justify-center flex-shrink-0">
                    {st.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-black text-slate-900 dark:text-white truncate">{st.name}</div>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{st.grade} • Roll #{st.rollNo}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right flex-shrink-0">
                  <div>
                    <div className="text-sm font-black text-teal-600 dark:text-teal-400">{st.progressScore}/100</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Skill Score</div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-sm font-black text-emerald-600 dark:text-emerald-400">{st.attendancePct}%</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Attendance</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Upcoming Sessions Schedule */}
        <div className="glass-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-4">
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500" />
                <span>Upcoming Sessions</span>
              </h3>
              <button
                type="button"
                onClick={() => setActivePage('calendar')}
                className="text-xs font-extrabold text-purple-600 dark:text-purple-400 hover:underline"
              >
                Calendar →
              </button>
            </div>

            <div className="space-y-3">
              {sessions.slice(0, 3).map((ses) => (
                <div key={ses.id} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                  <div className="text-sm font-black text-slate-900 dark:text-white leading-tight">{ses.programName}</div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
                    <span>{ses.teacherName}</span>
                    <span>•</span>
                    <span className="text-teal-600 dark:text-teal-400 font-bold">{ses.room}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <span className="font-extrabold text-slate-700 dark:text-slate-300">{ses.date} ({ses.time})</span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-black text-[10px]">
                      {ses.enrolled} Enrolled
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setActivePage('attendance')}
            className="w-full mt-4 h-11 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Mark Session Attendance</span>
          </button>
        </div>
      </div>

    </div>
  );
};
