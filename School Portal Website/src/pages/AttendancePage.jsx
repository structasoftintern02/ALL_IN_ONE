import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Clock, Calendar, Users, Save, Sparkles, Filter } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const AttendancePage = () => {
  const { students, sessions, updateSessionAttendance, showToast } = useSchool();
  const [selectedSession, setSelectedSession] = useState(sessions[0]?.id || 'ses-1');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const currentSession = sessions.find(s => s.id === selectedSession) || sessions[0];

  const [attendanceMap, setAttendanceMap] = useState(() => {
    const map = {};
    students.forEach(st => {
      map[st.id] = 'Present'; // Default Present
    });
    return map;
  });

  const handleStatusToggle = (studentId, status) => {
    setAttendanceMap(prev => ({ ...prev, [studentId]: status }));
  };

  const handleSaveAttendance = () => {
    const presentCount = Object.values(attendanceMap).filter(s => s === 'Present').length;
    updateSessionAttendance(selectedSession, presentCount);
    showToast(`Attendance saved! ${presentCount}/${students.length} marked Present.`);
  };

  const presentCount = Object.values(attendanceMap).filter(s => s === 'Present').length;
  const absentCount = Object.values(attendanceMap).filter(s => s === 'Absent').length;
  const lateCount = Object.values(attendanceMap).filter(s => s === 'Late').length;

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Session Attendance Marker</h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
            Mark daily class session attendance for enrolled skill discovery students
          </p>
        </div>

        <button
          type="button"
          onClick={handleSaveAttendance}
          className="px-6 h-11 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold text-xs shadow-md flex items-center gap-2 self-start sm:self-auto hover:scale-105 transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save Attendance</span>
        </button>
      </div>

      {/* Session Filter Bar */}
      <div className="glass-card rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        <div>
          <label className="block text-[11px] font-extrabold text-slate-400 uppercase mb-1">Select Program Session</label>
          <select
            value={selectedSession}
            onChange={(e) => setSelectedSession(e.target.value)}
            className="form-input text-xs"
          >
            {sessions.map(s => (
              <option key={s.id} value={s.id}>
                {s.programName} ({s.room})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-extrabold text-slate-400 uppercase mb-1">Session Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="form-input text-xs"
          />
        </div>

        <div className="flex items-center gap-3 pt-4 sm:pt-0">
          <div className="flex-1 p-2.5 rounded-xl bg-emerald-500/10 text-center">
            <div className="text-sm font-black text-emerald-600 dark:text-emerald-400">{presentCount}</div>
            <div className="text-[10px] font-extrabold text-slate-400 uppercase">Present</div>
          </div>
          <div className="flex-1 p-2.5 rounded-xl bg-rose-500/10 text-center">
            <div className="text-sm font-black text-rose-600 dark:text-rose-400">{absentCount}</div>
            <div className="text-[10px] font-extrabold text-slate-400 uppercase">Absent</div>
          </div>
          <div className="flex-1 p-2.5 rounded-xl bg-amber-500/10 text-center">
            <div className="text-sm font-black text-amber-600 dark:text-amber-400">{lateCount}</div>
            <div className="text-[10px] font-extrabold text-slate-400 uppercase">Late</div>
          </div>
        </div>
      </div>

      {/* Student List Attendance Table */}
      <div className="glass-card rounded-3xl overflow-hidden">
        <div className="p-4 sm:p-6 bg-slate-100/60 dark:bg-slate-800/40 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white">{currentSession?.programName}</h3>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
              Instructor: {currentSession?.teacherName} • Room: {currentSession?.room}
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-teal-500/15 text-teal-600 dark:text-teal-400 text-xs font-black">
            {students.length} Enrolled Students
          </span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {students.map((st) => {
            const status = attendanceMap[st.id] || 'Present';
            return (
              <div key={st.id} className="p-4 sm:px-6 flex items-center justify-between gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 font-black text-xs flex items-center justify-center flex-shrink-0">
                    {st.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-black text-slate-900 dark:text-white truncate">{st.name}</div>
                    <div className="text-xs font-semibold text-slate-400">{st.grade} • Roll #{st.rollNo}</div>
                  </div>
                </div>

                {/* Status Pills Selector */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleStatusToggle(st.id, 'Present')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                      status === 'Present'
                        ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Present</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleStatusToggle(st.id, 'Absent')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                      status === 'Absent'
                        ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Absent</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleStatusToggle(st.id, 'Late')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                      status === 'Late'
                        ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>Late</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
