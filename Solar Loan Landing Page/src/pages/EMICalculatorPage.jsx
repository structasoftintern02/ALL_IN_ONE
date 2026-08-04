import React from 'react';
import { EMICalculator } from '../components/sections/EMICalculator';

export const EMICalculatorPage = ({ setActivePage }) => (
  <div>
    <div className="py-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-4">
          🧮 EMI Calculator
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Solar Loan <span className="text-gradient-green">EMI Calculator</span></h1>
        <p className="text-slate-300 text-lg">Instantly calculate your monthly EMI and see how much you save on electricity.</p>
      </div>
    </div>
    <EMICalculator setActivePage={setActivePage} />
  </div>
);
