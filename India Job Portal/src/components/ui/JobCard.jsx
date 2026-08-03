import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { MapPin, Briefcase, DollarSign, Clock, Bookmark, ArrowRight } from 'lucide-react';

export const JobCard = ({ job, onApply }) => {
  const { activeConfig } = useTheme();
  const [saved, setSaved] = useState(false);

  return (
    <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 space-y-5 relative flex flex-col justify-between group job-card-hover animate-stagger-card">
      
      <div className="space-y-4">
        {/* Card Header: Logo, Title, Company */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-slate-200">
              {job.logo}
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-emerald-600 transition-colors line-clamp-1">
                {job.title}
              </h3>
              <div className="flex items-center gap-2 mt-1 text-xs font-extrabold text-slate-700">
                <span className="text-slate-800 font-extrabold">{job.company}</span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-800 font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-xs">
                  {job.mode}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setSaved(!saved)}
            className={`p-2.5 rounded-xl border transition-all btn-recruitment ${
              saved 
                ? 'bg-amber-100 text-amber-800 border-amber-300 font-bold shadow-xs' 
                : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-50'
            }`}
            title={saved ? 'Job Saved' : 'Save Job'}
          >
            <Bookmark className={`w-4 h-4 ${saved ? 'fill-amber-500 text-amber-700' : ''}`} />
          </button>
        </div>

        {/* Location & Key Specs Grid (Super High Contrast Layout) */}
        <div className="grid grid-cols-2 gap-3 py-2.5 border-y border-slate-200 text-xs">
          
          <div className="flex items-center gap-1.5 text-slate-900 font-extrabold">
            <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span className="truncate">{job.city}, {job.state}</span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-800 font-extrabold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 w-fit">
            <DollarSign className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="truncate">{job.salaryText}</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-900 font-extrabold">
            <Briefcase className="w-4 h-4 text-indigo-600 flex-shrink-0" />
            <span>{job.experience}</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-700 font-bold">
            <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
            <span>{job.postedDate}</span>
          </div>

        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-1.5">
          {job.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-900 text-xs font-extrabold border border-slate-200 shadow-2xs">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Apply CTA */}
      <div className="pt-4 border-t border-slate-200 flex items-center justify-between mt-2">
        <span className="text-xs text-slate-700 font-extrabold uppercase tracking-wider">
          {job.type}
        </span>

        <button
          onClick={() => onApply && onApply(job)}
          className={`px-5 py-2.5 ${activeConfig.cardRadius} text-xs font-extrabold transition-all btn-recruitment flex items-center gap-1.5 ${activeConfig.buttonPrimary}`}
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
