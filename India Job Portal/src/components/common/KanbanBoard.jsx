import React, { useState } from 'react';
import { mockCompanyUser } from '../../data/companyData';
import { CheckCircle2, UserCheck, Calendar, XCircle, ChevronRight, Star, Eye } from 'lucide-react';

export const KanbanBoard = () => {
  const [pipeline, setPipeline] = useState(mockCompanyUser.kanbanPipeline);

  const moveCandidate = (candidateId, fromColId, toColId) => {
    let candidateToMove = null;
    
    // Remove from source
    const updatedPipeline = pipeline.map(col => {
      if (col.id === fromColId) {
        candidateToMove = col.candidates.find(c => c.id === candidateId);
        return {
          ...col,
          candidates: col.candidates.filter(c => c.id !== candidateId),
          count: col.candidates.length - 1
        };
      }
      return col;
    });

    // Add to target
    if (candidateToMove) {
      setPipeline(updatedPipeline.map(col => {
        if (col.id === toColId) {
          return {
            ...col,
            candidates: [...col.candidates, candidateToMove],
            count: col.candidates.length + 1
          };
        }
        return col;
      }));
    }
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
          ATS Hiring Pipeline (Kanban Workflow)
        </h3>
        <span className="text-xs text-slate-500 font-semibold">
          Interactive candidate stage advancement workflow
        </span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-thin">
        {pipeline.map((col) => (
          <div 
            key={col.id}
            className={`w-72 flex-shrink-0 bg-slate-100 dark:bg-gray-900 rounded-2xl p-4 space-y-3 border-t-4 ${col.color} transition-all duration-300`}
          >
            {/* Column Header */}
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200">
                {col.title}
              </h4>
              <span className="px-2 py-0.5 rounded-full bg-white dark:bg-gray-800 text-slate-800 dark:text-white font-extrabold text-xs shadow-xs">
                {col.candidates.length}
              </span>
            </div>

            {/* Candidate Cards in Column */}
            <div className="space-y-3 min-h-[300px]">
              {col.candidates.map((cand) => (
                <div 
                  key={cand.id}
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-xs border border-slate-200 dark:border-gray-700 space-y-3 text-xs job-card-hover animate-stagger-card"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="font-extrabold text-slate-900 dark:text-white text-sm">{cand.name}</h5>
                      <span className="text-slate-500 block">{cand.role}</span>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-bold text-[10px]">
                      {cand.matchScore}% Match
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-gray-700">
                    <div>Exp: <strong className="text-slate-800 dark:text-slate-200">{cand.exp}</strong></div>
                    <div>Location: <strong className="text-slate-800 dark:text-slate-200">{cand.location}</strong></div>
                    <div className="col-span-2">Expected: <strong className="text-emerald-600 font-bold">{cand.salary}</strong></div>
                  </div>

                  {/* Stage Advance Buttons */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-gray-700 text-[10px]">
                    <button 
                      onClick={() => alert(`Viewing full resume of ${cand.name}`)}
                      className="text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 font-bold btn-recruitment"
                    >
                      <Eye className="w-3 h-3" /> Resume
                    </button>

                    {col.id !== 'joined' && (
                      <button
                        onClick={() => {
                          const stages = ['applied', 'reviewed', 'shortlisted', 'interview', 'selected', 'joined'];
                          const nextIndex = stages.indexOf(col.id) + 1;
                          if (nextIndex < stages.length) {
                            moveCandidate(cand.id, col.id, stages[nextIndex]);
                          }
                        }}
                        className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-white rounded-md font-bold flex items-center gap-0.5 btn-recruitment shadow-xs"
                      >
                        <span>Move Next</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {col.candidates.length === 0 && (
                <div className="h-32 rounded-xl border border-dashed border-slate-300 dark:border-gray-800 flex items-center justify-center text-slate-400 text-xs">
                  No candidates in this stage
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
