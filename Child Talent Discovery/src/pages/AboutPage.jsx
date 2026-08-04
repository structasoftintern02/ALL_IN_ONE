import React from 'react';
import { AboutSection } from '../components/sections/AboutSection';
import { WhyEarlyDiscovery } from '../components/sections/WhyEarlyDiscovery';

export const AboutPage = ({ setActivePage }) => {
  return (
    <div>
      <div className="py-14 bg-gradient-to-br from-purple-950 via-slate-900 to-rose-950 text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-extrabold border border-white/20">
            🔬 Scientific Methodology
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold">About Child <span className="text-purple-400">Talent Discovery</span></h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Learn why early skill identification matters, how multiple intelligences are mapped, and how play-based evaluation supports your child's natural journey.
          </p>
        </div>
      </div>
      <AboutSection setActivePage={setActivePage} />
      <WhyEarlyDiscovery setActivePage={setActivePage} />
    </div>
  );
};
