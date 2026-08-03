import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { schoolsData } from '../../data/schoolsData';
import { Search, MapPin, Star, ArrowRight } from 'lucide-react';

export const NearbySchoolsPage = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Empaneled Partners
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.headingFont}`}>
          Discover Nearby Skill Partner Schools
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Schools equipped with sensory observation playrooms, tinkering robotics labs, and certified staff.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {schoolsData.map((sch) => (
          <div key={sch.id} className={`bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} overflow-hidden shadow-sm space-y-4`}>
            <div className="relative h-48 overflow-hidden">
              <img src={sch.image} alt={sch.name} className="w-full h-full object-cover" />
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-amber-400 text-slate-950">
                ⭐ {sch.rating} ({sch.reviewsCount})
              </span>
            </div>
            <div className="p-6 pt-0 space-y-3 text-xs">
              <h3 className="font-extrabold text-slate-900 text-base">{sch.name}</h3>
              <p className="text-slate-500 flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-pink-500" /> {sch.area}, {sch.city}</p>
              <span className="text-[10px] text-pink-600 font-bold block">{sch.accreditation} • {sch.programsAvailable} Programs</span>
              <button onClick={() => alert(`Viewing details of ${sch.name}`)} className={`w-full py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonSecondary}`}>
                View Infrastructure & Labs →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
