import React from 'react';
import { LoanTypes } from '../components/sections/LoanTypes';
import { BankingPartners } from '../components/sections/BankingPartners';

export const LoanTypesPage = ({ setActivePage }) => (
  <div>
    <div className="py-12 bg-gradient-to-br from-slate-900 to-emerald-950 text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-4">
          🏦 Loan Categories
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">All Solar <span className="text-gradient-green">Loan Types</span></h1>
        <p className="text-slate-300 text-lg">Compare residential, commercial, agriculture, and MSME solar loans side by side.</p>
      </div>
    </div>
    <LoanTypes setActivePage={setActivePage} />
    <BankingPartners />
  </div>
);
