import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { expertTeachersData } from '../../data/teachersData';
import { Star, Award, Calendar } from 'lucide-react';

export const ExpertTeachersPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Diagnostic Consultants
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.headingFont}`}>
          Expert Child Psychologists & OT Specialists
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Book 1-on-1 diagnostic evaluation sessions for gifted talent mapping or developmental guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {expertTeachersData.map((exp) => (
          <div key={exp.id} className={`p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 shadow-md`}>
            <div className="flex items-center gap-4">
              <img src={exp.photo} alt={exp.name} className="w-20 h-20 rounded-2xl object-cover flex-shrink-0" />
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">{exp.name}</h3>
                <p className="text-xs font-bold text-pink-600">{exp.role}</p>
                <span className="text-[11px] text-slate-500">{exp.experience}</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1">
              <div>Specialization: <strong className="text-slate-900">{exp.expertise}</strong></div>
              <span className="text-[10px] text-slate-400 block">{exp.certifications}</span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <span className="font-extrabold text-emerald-600">{exp.consultationFee}</span>
              <button
                onClick={() => {
                  setActivePortal('parent');
                  setActivePage('enrollment-wizard');
                }}
                className={`px-5 py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}
              >
                Book Diagnostic Session →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
