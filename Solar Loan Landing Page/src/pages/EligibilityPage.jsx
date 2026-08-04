import React from 'react';
import { Eligibility } from '../components/sections/Eligibility';

export const EligibilityPage = ({ setActivePage }) => (
  <div>
    <div className="py-12 bg-gradient-to-br from-slate-900 to-teal-950 text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-4">
          ✅ Eligibility Check
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Solar Loan <span className="text-gradient-green">Eligibility</span></h1>
        <p className="text-slate-300 text-lg">Find out if you qualify for a solar loan in 2 minutes.</p>
      </div>
    </div>
    <Eligibility setActivePage={setActivePage} />
  </div>
);
