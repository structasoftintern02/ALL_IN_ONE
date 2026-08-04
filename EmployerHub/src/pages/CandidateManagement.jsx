import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sidebar } from '../components/layout/Sidebar';
import { mockCandidates } from '../data/employerData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Search, Filter, Star, FileText, CheckCircle2, XCircle, Calendar, User, Phone, Mail } from 'lucide-react';

export const CandidateManagement = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const [candidates, setCandidates] = useState(mockCandidates);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleUpdateStatus = (id, newStage) => {
    setCandidates(candidates.map(c => c.id === id ? { ...c, stage: newStage } : c));
  };

  const filtered = candidates.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <Sidebar activePage="candidates" setActivePage={setActivePage} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <ScrollReveal direction="down" amount={0.1} className="border-b border-slate-200 dark:border-gray-800 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            AI Candidate Search & Resume Matching
          </h1>
          <p className="text-xs text-slate-500">Ranked applicants with match scoring & instant resume preview</p>
        </ScrollReveal>

        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search candidates by skill, name, or role..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-900 rounded-xl border border-slate-200 dark:border-gray-800 text-xs font-medium"
          />
        </div>

        {/* Candidates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(cand => (
            <motion.div key={cand.id} whileHover={{ y: -3 }} className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4 shadow-xs">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white">{cand.name}</h3>
                  <p className="text-xs text-slate-500">{cand.role}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 font-extrabold text-xs">
                  {cand.matchScore}% AI Match
                </span>
              </div>

              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p><strong>Current:</strong> {cand.currentCompany} ({cand.experience})</p>
                <p><strong>Notice Period:</strong> <span className="text-emerald-500 font-bold">{cand.noticePeriod}</span></p>
                <p><strong>Expected CTC:</strong> {cand.expectedSalary}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {cand.skills.map((sk, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-slate-100 dark:bg-gray-800 rounded-md text-[10px] font-bold text-slate-700 dark:text-slate-300">
                    {sk}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-gray-800 text-xs">
                <button onClick={() => setSelectedCandidate(cand)} className="flex items-center gap-1 font-bold text-blue-600 hover:underline">
                  <FileText className="w-4 h-4" /> View Resume
                </button>

                <div className="flex items-center gap-2">
                  <button onClick={() => handleUpdateStatus(cand.id, 'Shortlisted')} className="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-600 font-bold text-xs hover:bg-indigo-100">
                    Shortlist
                  </button>
                  <button onClick={() => handleUpdateStatus(cand.id, 'Interview')} className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700">
                    Schedule Interview
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {selectedCandidate && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-white dark:bg-gray-900 rounded-3xl max-w-xl w-full p-6 space-y-4 border border-slate-200 dark:border-gray-800 shadow-2xl">
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-gray-800 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{selectedCandidate.name}</h3>
                  <span className="text-xs text-slate-400">{selectedCandidate.role}</span>
                </div>
                <button onClick={() => setSelectedCandidate(null)} className="text-slate-400 hover:text-white">✕</button>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-gray-800 rounded-2xl space-y-3 text-xs">
                <p><strong>Email:</strong> {selectedCandidate.email}</p>
                <p><strong>Mobile:</strong> {selectedCandidate.phone}</p>
                <p><strong>Experience:</strong> {selectedCandidate.experience}</p>
                <p><strong>Current Salary / Expected:</strong> {selectedCandidate.expectedSalary}</p>
                <p><strong>Location:</strong> {selectedCandidate.location}</p>
                <div className="pt-2 border-t border-slate-200 dark:border-gray-700">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">Resume Highlights & Summary:</span>
                  <p className="text-slate-500 leading-relaxed">
                    Proven track record in high-velocity tech environments. Specialized in modern cloud architectures, scalable frontend designs, and CI/CD pipelines.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button onClick={() => setSelectedCandidate(null)} className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
