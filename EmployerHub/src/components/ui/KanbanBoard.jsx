import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { mockCandidates } from '../../data/employerData';
import { 
  User, CheckCircle2, ChevronRight, Star, Clock, Mail, Phone, MapPin, 
  ArrowRight, ArrowLeft, Filter, Building2 
} from 'lucide-react';

export const KanbanBoard = () => {
  const [candidates, setCandidates] = useState(mockCandidates);
  const [activeMobileStage, setActiveMobileStage] = useState('All');

  const stages = [
    { id: 'Applied', title: 'Applied', color: 'bg-blue-500', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    { id: 'Reviewed', title: 'Reviewed', color: 'bg-amber-500', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
    { id: 'Shortlisted', title: 'Shortlisted', color: 'bg-indigo-500', badgeBg: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
    { id: 'Interview', title: 'Interview Round', color: 'bg-purple-500', badgeBg: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    { id: 'Selected', title: 'Offer Letter Released', color: 'bg-emerald-500', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    { id: 'Joined', title: 'Joined & Onboarded', color: 'bg-teal-400', badgeBg: 'bg-teal-500/20 text-teal-400 border-teal-500/30' }
  ];

  const handleMoveStage = (candidateId, newStage) => {
    setCandidates(prev => prev.map(c => c.id === candidateId ? { ...c, stage: newStage } : c));
  };

  const displayedStages = activeMobileStage === 'All' 
    ? stages 
    : stages.filter(s => s.id === activeMobileStage);

  return (
    <div className="space-y-6 w-full">
      
      {/* Stage Filter Tabs (Flex Wrap so ALL options are fully visible on screen) */}
      <div className="flex flex-wrap items-center gap-2 pb-1 w-full">
        <button
          onClick={() => setActiveMobileStage('All')}
          className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
            activeMobileStage === 'All'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
          }`}
        >
          <span>All Stages</span>
          <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-mono">{candidates.length}</span>
        </button>

        {stages.map(stage => {
          const count = candidates.filter(c => c.stage === stage.id).length;
          const isSelected = activeMobileStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveMobileStage(stage.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${stage.color}`} />
              <span>{stage.title}</span>
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-mono">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Divided into 2 lines / rows on desktop (3 columns in Row 1, 3 columns in Row 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start">
        {displayedStages.map((stage) => {
          const stageCandidates = candidates.filter(c => c.stage === stage.id);

          return (
            <div 
              key={stage.id} 
              className="w-full bg-slate-900/90 rounded-3xl p-5 space-y-5 border border-slate-800/80 shadow-2xl"
            >
              
              {/* Stage Column Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <span className={`w-3.5 h-3.5 rounded-full ${stage.color} shadow-xs`} />
                  <h4 className="font-extrabold text-sm text-white tracking-wide">
                    {stage.title}
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-extrabold text-xs border border-slate-700">
                  {stageCandidates.length} {stageCandidates.length === 1 ? 'Candidate' : 'Candidates'}
                </span>
              </div>

              {/* Spacious Big Candidate Cards in Stage Column */}
              <div className="space-y-4 min-h-[220px]">
                {stageCandidates.map((candidate) => (
                  <motion.div
                    key={candidate.id}
                    whileHover={{ y: -3 }}
                    className="p-5 bg-slate-950/95 rounded-2xl border border-slate-800 space-y-4 shadow-lg w-full"
                  >
                    {/* Name & Match Score */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <h5 className="font-extrabold text-sm text-white leading-snug">{candidate.name}</h5>
                        <span className="text-xs text-slate-400 font-medium block">
                          💼 {candidate.experience} • 📍 {candidate.location}
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-extrabold text-xs whitespace-nowrap flex-shrink-0 shadow-xs">
                        {candidate.matchScore}% AI Match
                      </span>
                    </div>

                    {/* Current Company */}
                    <div className="text-xs text-slate-200 font-semibold bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="truncate">{candidate.currentCompany}</span>
                    </div>

                    {/* Card Footer ID & Spacious Move Stage Selector */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3 text-xs">
                      <span className="text-slate-400 font-mono font-bold flex-shrink-0">{candidate.id}</span>
                      
                      {/* Spacious Non-Truncated Select Dropdown */}
                      <div className="relative max-w-[170px] w-full">
                        <select
                          value={candidate.stage}
                          onChange={(e) => handleMoveStage(candidate.id, e.target.value)}
                          className="w-full py-2 px-3 bg-slate-900 rounded-xl border border-slate-700 text-xs font-bold text-blue-400 focus:ring-1 focus:ring-blue-500 cursor-pointer shadow-xs"
                        >
                          {stages.map(s => (
                            <option key={s.id} value={s.id} className="bg-slate-900 text-white text-xs py-1">
                              Move: {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                  </motion.div>
                ))}

                {stageCandidates.length === 0 && (
                  <div className="h-36 border-2 border-dashed border-slate-800/80 rounded-2xl flex flex-col items-center justify-center text-slate-500 text-xs font-semibold space-y-1">
                    <span>No candidates in stage</span>
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
