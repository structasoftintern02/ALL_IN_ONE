import React from 'react';
import { AssessmentPreview } from '../components/sections/AssessmentPreview';

export const ReportPreviewPage = ({ setActivePage }) => {
  return (
    <div>
      <div className="py-14 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-extrabold border border-white/20">
            📊 Sample Report Interactive Demo
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold">Talent Assessment <span className="text-amber-400">Report Preview</span></h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Interact with a full sample report dashboard. See how scores, radar charts, strengths, growth areas, and curated roadmaps are delivered to parents.
          </p>
        </div>
      </div>
      <AssessmentPreview setActivePage={setActivePage} />
    </div>
  );
};
