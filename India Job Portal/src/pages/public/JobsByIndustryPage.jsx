import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { industryCardsData } from '../../data/jobsData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const JobsByIndustryPage = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Industry Sectors
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.headingFont}`}>
          Jobs by Industry & Specialization
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Find career roles matching your domain expertise in Information Technology, Banking, Healthcare, and E-commerce.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industryCardsData.map((ind) => (
          <div
            key={ind.id}
            onClick={() => setActivePage('job-search')}
            className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-4xl">{ind.icon}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                  {ind.tag}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">{ind.name}</h3>
                <span className="text-xs font-bold text-emerald-600">{ind.jobsCount} Active Openings</span>
              </div>
            </div>

            <button className={`w-full py-2.5 ${activeConfig.cardRadius} text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${activeConfig.buttonPrimary}`}>
              <span>Browse Openings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
