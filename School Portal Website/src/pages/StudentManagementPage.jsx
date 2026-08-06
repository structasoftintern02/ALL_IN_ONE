import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Search, Plus, Filter, Edit3, Trash2, Phone, Mail, Award, X, CheckCircle2 } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const StudentManagementPage = () => {
  const { students, addStudent, updateStudent, deleteStudent } = useSchool();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const [form, setForm] = useState({
    name: '',
    age: 6,
    grade: 'Grade 1-A',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    enrolledPrograms: ['Creative & Cognitive Growth']
  });

  const grades = ['All', 'Pre-K B', 'KG-A', 'Grade 1-A', 'Grade 1-B', 'Grade 2-B', 'Grade 3-A'];

  const filteredStudents = students.filter(st => {
    const matchesSearch = st.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          st.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          st.parentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = selectedGrade === 'All' || st.grade === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  const handleOpenAdd = () => {
    setEditingStudent(null);
    setForm({
      name: '',
      age: 6,
      grade: 'Grade 1-A',
      parentName: '',
      parentPhone: '',
      parentEmail: '',
      enrolledPrograms: ['Creative & Cognitive Growth']
    });
    setShowModal(true);
  };

  const handleOpenEdit = (st) => {
    setEditingStudent(st);
    setForm({
      name: st.name,
      age: st.age,
      grade: st.grade,
      parentName: st.parentName,
      parentPhone: st.parentPhone,
      parentEmail: st.parentEmail,
      enrolledPrograms: st.enrolledPrograms || ['Creative & Cognitive Growth']
    });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) {
      updateStudent(editingStudent.id, form);
    } else {
      addStudent(form);
    }
    setShowModal(false);
  };

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Student Management</h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
            Manage student profiles, parent details, skill progress scores, and enrollment
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenAdd}
          className="px-5 h-11 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold text-xs shadow-md flex items-center gap-2 self-start sm:self-auto hover:scale-105 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Student</span>
        </button>
      </div>

      {/* Search & Filter Controls */}
      <div className="glass-card rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search by student or parent name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input pl-10 h-10 text-xs"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <span className="text-xs font-extrabold text-slate-500 dark:text-slate-400 whitespace-nowrap">Grade:</span>
          {grades.map(g => (
            <button
              key={g}
              type="button"
              onClick={() => setSelectedGrade(g)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap ${
                selectedGrade === g
                  ? 'bg-teal-500 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Data Table */}
      <div className="glass-card rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-extrabold uppercase text-[11px] tracking-wider border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-4 px-6">Roll & Student</th>
                <th className="py-4 px-6">Grade / Age</th>
                <th className="py-4 px-6">Parent Info</th>
                <th className="py-4 px-6">Enrolled Programs</th>
                <th className="py-4 px-6 text-center">Skill Score</th>
                <th className="py-4 px-6 text-center">Attendance</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-semibold text-slate-900 dark:text-slate-100">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-slate-400 font-bold">
                    No students found matching search filters.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((st) => (
                  <tr key={st.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white font-black text-xs flex items-center justify-center flex-shrink-0">
                          {st.name.split(' ').map(n=>n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-black text-slate-900 dark:text-white">{st.name}</div>
                          <div className="text-[11px] text-teal-600 dark:text-teal-400 font-bold">{st.rollNo}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-6">
                      <div className="font-extrabold">{st.grade}</div>
                      <div className="text-xs text-slate-400">{st.age} Years Old</div>
                    </td>

                    <td className="py-4 px-6">
                      <div className="font-extrabold">{st.parentName}</div>
                      <div className="text-xs text-slate-400">{st.parentPhone}</div>
                    </td>

                    <td className="py-4 px-6 max-w-xs">
                      <div className="flex flex-wrap gap-1">
                        {st.enrolledPrograms.map(p => (
                          <span key={p} className="px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-[10px] font-bold">
                            {p}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="py-4 px-6 text-center">
                      <span className="px-2.5 py-1 rounded-lg bg-teal-500/15 text-teal-600 dark:text-teal-400 font-black">
                        {st.progressScore}/100
                      </span>
                    </td>

                    <td className="py-4 px-6 text-center">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-black">
                        {st.attendancePct}%
                      </span>
                    </td>

                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(st)}
                          title="Edit Student"
                          className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 flex items-center justify-center"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (confirm(`Delete student record for ${st.name}?`)) deleteStudent(st.id);
                          }}
                          title="Delete Record"
                          className="w-8 h-8 rounded-lg bg-rose-500/15 text-rose-500 hover:bg-rose-500/25 flex items-center justify-center"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Student Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card w-full max-w-lg rounded-3xl p-6 sm:p-8 relative z-10 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  {editingStudent ? 'Edit Student Details' : 'Add New Student'}
                </h3>
                <button type="button" onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-bold">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 mb-1">Student Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="e.g. Aarav Sharma"
                    className="form-input"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1">Grade / Class</label>
                    <input
                      type="text"
                      value={form.grade}
                      onChange={(e) => setForm({ ...form, grade: e.target.value })}
                      required
                      placeholder="Grade 1-A"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1">Age (Years)</label>
                    <input
                      type="number"
                      value={form.age}
                      onChange={(e) => setForm({ ...form, age: parseInt(e.target.value) || 5 })}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 mb-1">Parent Name</label>
                  <input
                    type="text"
                    value={form.parentName}
                    onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                    required
                    placeholder="Parent Full Name"
                    className="form-input"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1">Parent Phone</label>
                    <input
                      type="tel"
                      value={form.parentPhone}
                      onChange={(e) => setForm({ ...form, parentPhone: e.target.value })}
                      required
                      placeholder="+91 98201 11223"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-1">Parent Email</label>
                    <input
                      type="email"
                      value={form.parentEmail}
                      onChange={(e) => setForm({ ...form, parentEmail: e.target.value })}
                      required
                      placeholder="parent@demo.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 h-10 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold"
                  >
                    {editingStudent ? 'Save Student' : 'Enroll Student'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
