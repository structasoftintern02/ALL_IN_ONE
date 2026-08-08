import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, Search, Filter, Download, Plus, 
  CheckCircle2, Clock, AlertCircle, ShieldCheck, X 
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const StudentEnrollmentPage = () => {
  const { enrollments, csfPrograms, enrollStudent } = useSchool();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    studentName: '',
    age: 7,
    gender: 'Male',
    grade: 'Grade 2-A',
    programId: csfPrograms[0]?.id || '',
    parentName: '',
    parentPhone: '',
    parentEmail: ''
  });

  const filteredEnrollments = enrollments.filter(e => {
    const matchesSearch = e.studentName.toLowerCase().includes(searchQuery.toLowerCase()) || e.parentName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || e.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName.trim() || !formData.parentPhone.trim()) return;

    const prog = csfPrograms.find(p => p.id === formData.programId) || csfPrograms[0];

    const newEnrollment = {
      id: `ENR-${Date.now()}`,
      ...formData,
      programTitle: prog.title,
      enrollmentDate: new Date().toISOString().split('T')[0],
      status: 'Confirmed',
      feeAmount: prog.fee,
      paymentStatus: 'Paid'
    };

    enrollStudent(newEnrollment);
    setShowAddModal(false);
    setFormData({
      studentName: '',
      age: 7,
      gender: 'Male',
      grade: 'Grade 2-A',
      programId: csfPrograms[0]?.id || '',
      parentName: '',
      parentPhone: '',
      parentEmail: ''
    });
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Student Enrollments</h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Enroll school students into active Child Skill Foundation weekly programs & automatically generate parent portal access logins.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-md self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Enroll New Student</span>
        </button>
      </div>

      {/* Workflow Diagram Card */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
        <div className="text-xs font-black uppercase text-blue-400 tracking-wider">Automated CSF Partner Enrollment Journey</div>
        <div className="flex flex-wrap items-center justify-between gap-3 text-center text-xs">
          <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700 font-extrabold flex-1 min-w-[120px]">
            1. School Selects Program
          </div>
          <span className="text-slate-500 font-black">→</span>
          <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700 font-extrabold flex-1 min-w-[120px]">
            2. Age & Seat Validation
          </div>
          <span className="text-slate-500 font-black">→</span>
          <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700 font-extrabold flex-1 min-w-[120px]">
            3. Enrollment Submitted
          </div>
          <span className="text-slate-500 font-black">→</span>
          <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-black flex-1 min-w-[120px]">
            4. Parent Portal Login Sent
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto flex-1">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search student name or parent phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-xs font-semibold text-slate-800 dark:text-slate-100 w-full"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto custom-scrollbar">
            {['All', 'Confirmed', 'Payment Pending', 'Pending Parent', 'Draft'].map(status => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-colors flex-shrink-0 ${
                  selectedStatus === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <button className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-extrabold text-xs flex items-center gap-2 self-start sm:self-auto">
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      {/* Enrollments Table */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-extrabold uppercase text-[10px]">
                <th className="py-4 px-6">Student Details</th>
                <th className="py-4 px-4">Age Validation</th>
                <th className="py-4 px-4">Enrolled Program</th>
                <th className="py-4 px-4">Parent Details</th>
                <th className="py-4 px-4">Fee Amount</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-6 text-right">Parent Access</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredEnrollments.map((e) => (
                <tr key={e.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-6 font-black text-slate-900 dark:text-white">
                    <div>{e.studentName}</div>
                    <div className="text-[10px] text-slate-400 font-normal">{e.grade} • {e.gender}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      ✓ Age {e.age} Verified
                    </span>
                  </td>
                  <td className="py-4 px-4 font-bold text-slate-800 dark:text-slate-200 max-w-xs truncate">{e.programTitle}</td>
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-800 dark:text-slate-200">{e.parentName}</div>
                    <div className="text-[10px] text-slate-400">{e.parentPhone}</div>
                  </td>
                  <td className="py-4 px-4 font-black text-amber-500">₹{e.feeAmount}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black ${
                      e.status === 'Confirmed' ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' :
                      e.status === 'Payment Pending' ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400' :
                      'bg-blue-500/15 text-blue-600'
                    }`}>
                      {e.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">
                      Portal Access Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Enroll Student Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 relative"
            >
              <button
                onClick={() => setShowAddModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-black text-slate-900 dark:text-white">Enroll Student into Program</h3>

              <form onSubmit={handleEnrollSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Student Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Student Age</label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                      className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Class / Grade</label>
                    <input
                      type="text"
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select CSF Program</label>
                  <select
                    value={formData.programId}
                    onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
                  >
                    {csfPrograms.map(p => (
                      <option key={p.id} value={p.id}>{p.title} (₹{p.fee})</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Parent Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sanjay Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Parent Mobile Phone</label>
                    <input
                      type="text"
                      required
                      placeholder="+91 98112 33445"
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-lg mt-2"
                >
                  Submit Enrollment & Create Parent Account
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
