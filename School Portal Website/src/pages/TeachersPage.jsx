import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Plus, Star, Mail, Phone, BookOpen, Award, CheckCircle2, X } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const TeachersPage = () => {
  const { teachers, addTeacher } = useSchool();
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '5 Years',
    skills: 'Cognitive Skills, Early Ed',
    programs: 'Creative & Cognitive Growth'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTeacher({
      ...form,
      skills: form.skills.split(',').map(s => s.trim()),
      programs: form.programs.split(',').map(p => p.trim())
    });
    setShowModal(false);
  };

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Teachers & Faculty Directory</h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
            Manage skill instructors, specialized educators, ratings, and program assignments
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="px-5 h-11 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold text-xs shadow-md flex items-center gap-2 self-start sm:self-auto hover:scale-105 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Teacher</span>
        </button>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((tch) => (
          <motion.div
            key={tch.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-500 text-white font-black text-base flex items-center justify-center flex-shrink-0 shadow-md">
                    {tch.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white leading-tight">{tch.name}</h3>
                    <div className="text-xs font-bold text-slate-400">ID: {tch.empId} • {tch.experience} Exp</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 text-xs font-black flex-shrink-0">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{tch.rating}</span>
                </div>
              </div>

              {/* Skill Category Badges */}
              <div className="space-y-1.5 mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Expertise & Skills</div>
                <div className="flex flex-wrap gap-1.5">
                  {tch.skills.map((sk) => (
                    <span key={sk} className="px-2.5 py-0.5 rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Assigned Programs */}
              <div className="space-y-1.5 mt-3">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Assigned Programs</div>
                <div className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
                  {tch.programs.join(', ') || 'No active program assigned'}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className={`px-2.5 py-1 rounded-full font-black ${
                tch.status === 'Available' ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' : 'bg-purple-500/15 text-purple-600 dark:text-purple-400'
              }`}>
                {tch.status}
              </span>
              <div className="flex items-center gap-2">
                <a href={`mailto:${tch.email}`} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-teal-500">
                  <Mail className="w-4 h-4" />
                </a>
                <a href={`tel:${tch.phone}`} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-teal-500">
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Teacher Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="glass-card w-full max-w-lg rounded-3xl p-6 sm:p-8 relative z-10 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Add Faculty / Teacher</h3>
                <button type="button" onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-bold">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 mb-1">Teacher Full Name</label>
                  <input type="text" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} required placeholder="Mrs. Rajeshwari Nair" className="form-input" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1">Email</label>
                    <input type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} required placeholder="teacher@school.edu" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} required placeholder="+91 98200 00000" className="form-input" />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 mb-1">Skill Expertise (Comma Separated)</label>
                  <input type="text" value={form.skills} onChange={(e)=>setForm({...form, skills: e.target.value})} required placeholder="STEM, Robotics, Early Ed" className="form-input" />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 mb-1">Assigned Programs</label>
                  <input type="text" value={form.programs} onChange={(e)=>setForm({...form, programs: e.target.value})} required placeholder="Creative & Cognitive Growth" className="form-input" />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button type="button" onClick={() => setShowModal(false)} className="px-4 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Cancel</button>
                  <button type="submit" className="px-5 h-10 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold">Save Teacher</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
