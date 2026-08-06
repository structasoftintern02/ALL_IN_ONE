import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Plus, Users, Calendar, Clock, UserCheck, CheckCircle2, DollarSign, X } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const ProgramManagementPage = () => {
  const { programs, teachers, addProgram, addSession } = useSchool();
  const [showProgModal, setShowProgModal] = useState(false);
  const [showSesModal, setShowSesModal] = useState(false);

  const [progForm, setProgForm] = useState({
    name: '',
    category: 'Cognitive & Motor',
    ageGroup: '5-7 Years',
    maxCapacity: 30,
    assignedTeacher: teachers[0]?.name || 'Mrs. Rajeshwari Nair',
    schedule: 'Mon & Wed (10:00 AM)',
    fee: '₹4,500'
  });

  const [sesForm, setSesForm] = useState({
    programName: programs[0]?.name || 'Creative & Cognitive Growth',
    teacherName: teachers[0]?.name || 'Mrs. Rajeshwari Nair',
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM',
    room: 'Smart Lab 1',
    enrolled: 25
  });

  const handleCreateProgram = (e) => {
    e.preventDefault();
    addProgram(progForm);
    setShowProgModal(false);
  };

  const handleCreateSession = (e) => {
    e.preventDefault();
    addSession(sesForm);
    setShowSesModal(false);
  };

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Program Management</h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
            Manage skill learning programs, create session schedules, and assign expert faculty
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowSesModal(true)}
            className="px-4 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-extrabold text-xs border border-slate-200 dark:border-slate-700 hover:bg-slate-200"
          >
            + Create Session
          </button>

          <button
            type="button"
            onClick={() => setShowProgModal(true)}
            className="px-5 h-11 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold text-xs shadow-md flex items-center gap-2 hover:scale-105 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Skill Program</span>
          </button>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((prog) => {
          const capPct = Math.round((prog.enrolledCount / prog.maxCapacity) * 100);
          return (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-[11px] font-black uppercase tracking-wider">
                      {prog.category}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight mt-2">{prog.name}</h3>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-300 text-xs font-black flex-shrink-0">
                    {prog.fee}
                  </span>
                </div>

                <div className="space-y-2 mt-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-teal-500" />
                    <span>Faculty: <strong className="text-slate-900 dark:text-white">{prog.assignedTeacher}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>Schedule: <strong className="text-slate-900 dark:text-white">{prog.schedule}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-500" />
                    <span>Target Age: <strong className="text-slate-900 dark:text-white">{prog.ageGroup}</strong></span>
                  </div>
                </div>

                {/* Capacity Meter Bar */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                    <span className="text-slate-500 dark:text-slate-400">Enrollment Capacity ({capPct}%)</span>
                    <span className="text-slate-900 dark:text-white font-black">{prog.enrolledCount} / {prog.maxCapacity} Enrolled</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(capPct, 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{prog.status}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setShowSesModal(true)}
                  className="font-black text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Schedule Session →
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Add Program Modal */}
      <AnimatePresence>
        {showProgModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowProgModal(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="glass-card w-full max-w-lg rounded-3xl p-6 sm:p-8 relative z-10 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Create Skill Program</h3>
                <button type="button" onClick={() => setShowProgModal(false)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
              </div>

              <form onSubmit={handleCreateProgram} className="space-y-4 text-xs font-bold">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 mb-1">Program Name</label>
                  <input type="text" value={progForm.name} onChange={(e)=>setProgForm({...progForm, name: e.target.value})} required placeholder="e.g. Junior Chess & Strategy" className="form-input" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1">Category</label>
                    <input type="text" value={progForm.category} onChange={(e)=>setProgForm({...progForm, category: e.target.value})} required className="form-input" />
                  </div>
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1">Age Group</label>
                    <input type="text" value={progForm.ageGroup} onChange={(e)=>setProgForm({...progForm, ageGroup: e.target.value})} required className="form-input" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1">Max Capacity</label>
                    <input type="number" value={progForm.maxCapacity} onChange={(e)=>setProgForm({...progForm, maxCapacity: parseInt(e.target.value)||20})} required className="form-input" />
                  </div>
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1">Program Fee</label>
                    <input type="text" value={progForm.fee} onChange={(e)=>setProgForm({...progForm, fee: e.target.value})} required className="form-input" />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 mb-1">Assigned Teacher</label>
                  <select value={progForm.assignedTeacher} onChange={(e)=>setProgForm({...progForm, assignedTeacher: e.target.value})} className="form-input">
                    {teachers.map(t=><option key={t.id} value={t.name}>{t.name}</option>)}
                  </select>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button type="button" onClick={() => setShowProgModal(false)} className="px-4 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Cancel</button>
                  <button type="submit" className="px-5 h-10 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold">Save Program</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Schedule Session Modal */}
      <AnimatePresence>
        {showSesModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowSesModal(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="glass-card w-full max-w-lg rounded-3xl p-6 sm:p-8 relative z-10 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Schedule Class Session</h3>
                <button type="button" onClick={() => setShowSesModal(false)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
              </div>

              <form onSubmit={handleCreateSession} className="space-y-4 text-xs font-bold">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 mb-1">Select Program</label>
                  <select value={sesForm.programName} onChange={(e)=>setSesForm({...sesForm, programName: e.target.value})} className="form-input">
                    {programs.map(p=><option key={p.id} value={p.name}>{p.name}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1">Session Date</label>
                    <input type="date" value={sesForm.date} onChange={(e)=>setSesForm({...sesForm, date: e.target.value})} required className="form-input" />
                  </div>
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1">Time</label>
                    <input type="text" value={sesForm.time} onChange={(e)=>setSesForm({...sesForm, time: e.target.value})} required placeholder="10:00 AM" className="form-input" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1">Assigned Teacher</label>
                    <select value={sesForm.teacherName} onChange={(e)=>setSesForm({...sesForm, teacherName: e.target.value})} className="form-input">
                      {teachers.map(t=><option key={t.id} value={t.name}>{t.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1">Lab / Room</label>
                    <input type="text" value={sesForm.room} onChange={(e)=>setSesForm({...sesForm, room: e.target.value})} required placeholder="Smart Lab 1" className="form-input" />
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button type="button" onClick={() => setShowSesModal(false)} className="px-4 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Cancel</button>
                  <button type="submit" className="px-5 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-extrabold">Schedule Session</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
