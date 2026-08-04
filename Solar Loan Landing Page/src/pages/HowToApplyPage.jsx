import React from 'react';
import { HowToApply } from '../components/sections/HowToApply';
import { Documents } from '../components/sections/Documents';

export const HowToApplyPage = ({ setActivePage }) => (
  <div>
    <div className="py-12 bg-gradient-to-br from-emerald-950 to-teal-950 text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-4">
          📝 Application Process
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">How to Apply for a <span className="text-gradient-solar">Solar Loan</span></h1>
        <p className="text-slate-300 text-lg">Follow our 6-step process to get your solar loan approved in 6 hours.</p>
      </div>
    </div>
    <HowToApply setActivePage={setActivePage} />
    <Documents setActivePage={setActivePage} />
  </div>
);
