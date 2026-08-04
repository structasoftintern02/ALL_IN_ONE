import React from 'react';
import { AgePrograms } from '../components/sections/AgePrograms';
import { SkillCategories } from '../components/sections/SkillCategories';

export const ProgramsPage = ({ setActivePage }) => {
  return (
    <div>
      <div className="py-14 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-extrabold border border-white/20">
            🌱 Age-Tailored Modules
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold">Age-wise Development <span className="text-cyan-400">Programs</span></h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore dedicated skill evaluation programs tailored for 3–5 years, 5–7 years, and 7–10 years milestone groups.
          </p>
        </div>
      </div>
      <AgePrograms setActivePage={setActivePage} />
      <SkillCategories setActivePage={setActivePage} />
    </div>
  );
};
