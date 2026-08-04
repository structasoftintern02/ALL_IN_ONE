import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sidebar } from '../components/layout/Sidebar';
import { mockJobs } from '../data/employerData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Briefcase, Plus, Search, Trash2, Edit, CheckCircle2, Eye, Users } from 'lucide-react';

export const JobManagement = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const [jobs, setJobs] = useState(mockJobs);
  const [filterStatus, setFilterStatus] = useState('All');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [newJob, setNewJob] = useState({
    title: '',
    department: 'Engineering',
    location: 'Bengaluru / Hybrid',
    experience: '3 - 6 Years',
    ctc: '₹15,00,000 - ₹22,00,000 P.A.'
  });

  const handleCreateJob = (e) => {
    e.preventDefault();
    const created = {
      id: `JOB-${Math.floor(100 + Math.random() * 900)}`,
      ...newJob,
      type: 'Full-time',
      status: 'Active',
      applicantsCount: 0,
      shortlistedCount: 0,
      interviewedCount: 0,
      postedDate: 'Just Now',
      skills: ['React', 'TypeScript', 'Node.js']
    };
    setJobs([created, ...jobs]);
    setShowCreateModal(false);
  };

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter(j => j.id !== id));
  };

  const filtered = jobs.filter(j => filterStatus === 'All' || j.status === filterStatus);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <Sidebar activePage="jobs" setActivePage={setActivePage} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <ScrollReveal direction="down" amount={0.1} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              Job Postings & Requisitions
            </h1>
            <p className="text-xs text-slate-400">Manage active openings and syndicate to partner job boards</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowCreateModal(true)}
            className={`px-5 py-2.5 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary} flex items-center gap-2 shadow-md`}
          >
            <Plus className="w-4 h-4" />
            <span>Post New Requirement</span>
          </motion.button>
        </ScrollReveal>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          {['All', 'Active', 'Closed'].map(st => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                filterStatus === st ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
              }`}
            >
              {st} Jobs ({st === 'All' ? jobs.length : jobs.filter(j => j.status === st).length})
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filtered.map(job => (
            <motion.div key={job.id} whileHover={{ y: -2 }} className="p-6 bg-slate-900/90 rounded-3xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-slate-400 font-bold">{job.id}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                    job.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}>
                    {job.status}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-white">{job.title}</h3>
                <p className="text-xs text-slate-400">{job.department} • {job.location} • <span className="text-amber-400 font-bold">CTC: {job.ctc}</span></p>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <div className="text-right text-xs">
                  <span className="font-extrabold text-blue-400 block text-sm">{job.applicantsCount} Applicants</span>
                  <span className="text-[10px] text-slate-400">Posted {job.postedDate}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  {/* High Contrast View Applicants Button */}
                  <button 
                    onClick={() => setActivePage('candidates')} 
                    className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-200" />
                    <span>View Applicants</span>
                  </button>

                  <button 
                    onClick={() => handleDeleteJob(job.id)} 
                    className="p-2.5 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-950/60 border border-slate-800 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Create Job Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-slate-900 rounded-3xl max-w-lg w-full p-6 space-y-4 border border-slate-800 shadow-2xl text-white">
              <h3 className="text-lg font-bold text-white">Post New Job Requirement</h3>
              <form onSubmit={handleCreateJob} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold mb-1 text-slate-300">Job Designation Title</label>
                  <input type="text" required placeholder="e.g. Senior Frontend React Engineer" value={newJob.title} onChange={e => setNewJob({...newJob, title: e.target.value})} className="w-full p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-white" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold mb-1 text-slate-300">Department</label>
                    <input type="text" value={newJob.department} onChange={e => setNewJob({...newJob, department: e.target.value})} className="w-full p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-white" />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 text-slate-300">Location</label>
                    <input type="text" value={newJob.location} onChange={e => setNewJob({...newJob, location: e.target.value})} className="w-full p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-white" />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-slate-300">Offered CTC Range (Annual)</label>
                  <input type="text" value={newJob.ctc} onChange={e => setNewJob({...newJob, ctc: e.target.value})} className="w-full p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-white" />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button type="button" onClick={() => setShowCreateModal(false)} className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold">Cancel</button>
                  <button type="submit" className={`px-5 py-2 ${activeConfig.cardRadius} font-bold ${activeConfig.buttonPrimary}`}>Publish Requirement</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
