import React from 'react';
import { FAQ } from '../components/sections/FAQ';

export const FAQPage = ({ setActivePage }) => {
  return (
    <div>
      <div className="py-14 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-extrabold border border-white/20">
            ❓ FAQ & Parent Support
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold">Frequently Asked <span className="text-amber-400">Questions</span></h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive information regarding scientific methodology, age suitability, play-based tasks, and talent report metrics.
          </p>
        </div>
      </div>
      <FAQ setActivePage={setActivePage} />
    </div>
  );
};
