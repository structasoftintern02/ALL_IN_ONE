import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { comparisonMatrix } from '../data/pricingData';
import { Check, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const PlanComparison = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Detailed Feature Breakdown
        </span>
        <h1 className={`text-3xl sm:text-4xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
          Compare All CRM Plans & Capabilities
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Find the exact plan matching your customer conversation volume and AI automation needs.
        </p>
      </div>

      {/* Comparison Table */}
      <div className={`bg-white dark:bg-gray-900 ${activeConfig.cardRadius} border border-slate-200 dark:border-gray-800 shadow-xl overflow-x-auto`}>
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 dark:bg-gray-800/80 border-b border-slate-200 dark:border-gray-800 text-xs uppercase font-bold text-slate-500 dark:text-slate-400">
              <th className="py-4 px-6">Feature Parameter</th>
              <th className="py-4 px-4 text-center">Free Trial</th>
              <th className="py-4 px-4 text-center">Starter AI</th>
              <th className="py-4 px-4 text-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">Professional</th>
              <th className="py-4 px-4 text-center">Enterprise</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-gray-800 text-xs sm:text-sm">
            {comparisonMatrix.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900 dark:text-white">
                  {row.feature}
                </td>

                <td className="py-4 px-4 text-center text-slate-600 dark:text-slate-400">
                  {row.free}
                </td>

                <td className="py-4 px-4 text-center text-slate-700 dark:text-slate-300 font-medium">
                  {row.starter}
                </td>

                <td className="py-4 px-4 text-center font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/5">
                  {row.professional}
                </td>

                <td className="py-4 px-4 text-center font-extrabold text-slate-900 dark:text-white">
                  {row.enterprise}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Footer */}
      <div className="flex justify-center pt-4">
        <button
          onClick={() => setActivePage('pricing')}
          className={`px-8 py-3.5 ${activeConfig.cardRadius} text-xs font-bold transition-all shadow-lg flex items-center gap-2 ${activeConfig.buttonPrimary}`}
        >
          <span>Choose Your Plan & Get Started</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
