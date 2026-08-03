import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ageGroupPlansData, skillCategoriesData } from '../../data/programsData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProgramsPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allPrograms = ageGroupPlansData.flatMap(plan => plan.programs);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Skill Identification Catalog
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.headingFont}`}>
          All Skill Programs & Assessment Tracks
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Filter by developmental category: Motor, Cognitive, Language, STEM, or Visual Arts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPrograms.map((prog) => (
          <div key={prog.id} className={`bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-6 space-y-4 shadow-sm flex flex-col justify-between`}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{prog.icon}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-900 font-bold text-[10px]">
                  {prog.duration}
                </span>
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">{prog.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{prog.description}</p>
              <div className="space-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
                {prog.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setActivePortal('parent');
                setActivePage('parent-register');
              }}
              className={`w-full py-2.5 ${activeConfig.cardRadius} text-xs font-extrabold transition-all ${activeConfig.buttonPrimary}`}
            >
              Enroll Child in Program
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
