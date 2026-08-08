import React from 'react';
import { CalendarCheck, Lock, CheckCircle2, UserCheck, Clock } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const AttendancePage = () => {
  const { attendanceRecords } = useSchool();

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <CalendarCheck className="w-6 h-6 text-emerald-400" />
            <h1 className="text-xl sm:text-2xl font-black text-white">Session Attendance Tracking</h1>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
              <Lock className="w-3 h-3" /> Managed by CSF Faculty
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Attendance is marked during live weekly sessions by assigned Child Skill Foundation instructors. Partner schools view real-time session completion rates.
          </p>
        </div>
      </div>

      {/* Attendance Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {attendanceRecords.map((rec, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400">Session #{rec.sessionNumber} • {rec.sessionDate}</span>
                <h3 className="text-base font-black text-slate-900 dark:text-white leading-tight mt-0.5">{rec.programTitle}</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-black">
                {rec.sessionStatus}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60">
                <span className="text-[10px] font-bold text-slate-400 block">Total Students</span>
                <span className="text-lg font-black text-slate-900 dark:text-white">{rec.totalStudents}</span>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-500/10">
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block">Present</span>
                <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">{rec.presentStudents}</span>
              </div>
              <div className="p-3 rounded-2xl bg-rose-500/10">
                <span className="text-[10px] font-bold text-rose-500 block">Absent</span>
                <span className="text-lg font-black text-rose-500">{rec.absentStudents}</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400 font-bold">Attendance Ratio:</span>
                <span className="font-black text-emerald-500">{rec.attendancePercentage}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${rec.attendancePercentage}%` }} />
              </div>
            </div>

            <div className="text-xs text-slate-400 pt-1 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
              <span>Verified Instructor: <strong className="text-slate-700 dark:text-slate-200">{rec.teacherName}</strong></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
