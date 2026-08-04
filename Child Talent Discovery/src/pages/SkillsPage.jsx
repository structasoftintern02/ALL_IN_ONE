import React from 'react';
import { SkillCategories } from '../components/sections/SkillCategories';
import { AssessmentPreview } from '../components/sections/AssessmentPreview';

export const SkillsPage = ({ setActivePage }) => {
  return (
    <div>
      <div className="py-14 bg-gradient-to-br from-purple-950 via-slate-900 to-rose-950 text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-extrabold border border-white/20">
            🎨 12 Core Domains
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold">12 Skill Development <span className="text-rose-400">Categories</span></h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            From cognitive memory and STEM logic to divergent creativity, leadership, and motor dexterity — explore all 12 mapped domains.
          </p>
        </div>
      </div>
      <SkillCategories setActivePage={setActivePage} />
      <AssessmentPreview setActivePage={setActivePage} />
    </div>
  );
};
