import React from 'react';
import { Benefits } from '../components/sections/Benefits';
import { Testimonials } from '../components/sections/Testimonials';

export const BenefitsPage = ({ setActivePage }) => {
  return (
    <div>
      <div className="py-14 bg-gradient-to-br from-rose-950 via-slate-900 to-purple-950 text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-extrabold border border-white/20">
            ⭐ Why Choose Talent Mapping
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold">Key Benefits for <span className="text-rose-400">Child & Parent</span></h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Discover how early skill identification boosts confidence, reduces academic stress, and shapes a personalized learning path.
          </p>
        </div>
      </div>
      <Benefits setActivePage={setActivePage} />
      <Testimonials />
    </div>
  );
};
