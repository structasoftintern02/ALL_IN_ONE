import React from 'react';
import { HowItWorks } from '../components/sections/HowItWorks';
import { AssessmentPreview } from '../components/sections/AssessmentPreview';

export const HowItWorksPage = ({ setActivePage }) => {
  return (
    <div>
      <div className="py-14 bg-gradient-to-br from-teal-950 via-slate-900 to-indigo-950 text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-extrabold border border-white/20">
            🛣️ Simple Parent Guide
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold">How Talent Assessment <span className="text-emerald-400">Works</span></h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A step-by-step walkthrough of registration, play-based task activities, instant report generation, and personalized learning guidance.
          </p>
        </div>
      </div>
      <HowItWorks setActivePage={setActivePage} />
      <AssessmentPreview setActivePage={setActivePage} />
    </div>
  );
};
