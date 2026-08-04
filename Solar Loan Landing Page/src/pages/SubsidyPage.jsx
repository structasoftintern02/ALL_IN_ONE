import React from 'react';
import { GovernmentSubsidy } from '../components/sections/GovernmentSubsidy';

export const SubsidyPage = ({ setActivePage }) => (
  <div>
    <div className="py-12 bg-gradient-to-br from-amber-950 to-orange-950 text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-4">
          🏛️ Government Schemes
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Government <span className="text-gradient-solar">Solar Subsidies</span></h1>
        <p className="text-slate-300 text-lg">PM Surya Ghar, PM-KUSUM, state subsidies and net metering benefits explained.</p>
      </div>
    </div>
    <GovernmentSubsidy setActivePage={setActivePage} />
  </div>
);
