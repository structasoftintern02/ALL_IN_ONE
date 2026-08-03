import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { candidatePricingPlans } from '../../data/candidatesData';
import { companyPricingPlans } from '../../data/companyData';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, User } from 'lucide-react';

export const PricingPlansPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const [portalTab, setPortalTab] = useState('company'); // 'company' | 'candidate'
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  const activePlans = portalTab === 'company' ? companyPricingPlans : candidatePricingPlans;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Transparent Pricing Plans
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.headingFont}`}>
          Subscription Plans for Employers & Candidates
        </h1>

        {/* Portal Switcher Tabs */}
        <div className="flex justify-center gap-2 pt-2">
          <button
            onClick={() => setPortalTab('company')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              portalTab === 'company' ? `${activeConfig.buttonPrimary}` : 'bg-white border border-slate-200 text-slate-700'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Employer Hiring Plans</span>
          </button>

          <button
            onClick={() => setPortalTab('candidate')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              portalTab === 'candidate' ? `${activeConfig.buttonPrimary}` : 'bg-white border border-slate-200 text-slate-700'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Candidate Booster Plans</span>
          </button>
        </div>
      </div>

      {/* Plans Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activePlans.map((plan) => {
          const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;

          return (
            <div
              key={plan.id}
              className={`p-8 bg-white ${activeConfig.cardRadius} ${
                plan.highlighted ? 'border-2 border-emerald-500 shadow-2xl relative scale-105' : `${activeConfig.cardBorder}`
              } space-y-6 flex flex-col justify-between`}
            >
              <div>
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-slate-950 font-extrabold text-[10px] uppercase rounded-full">
                    {plan.badge}
                  </span>
                )}

                <h3 className="text-xl font-extrabold text-slate-900">{plan.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{plan.badge}</p>

                <div className="py-4 border-y border-slate-100 my-4 space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-slate-900">₹{price.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-slate-500 font-semibold">/ month</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Included Privileges</span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  if (portalTab === 'company') {
                    setActivePortal('company');
                    setActivePage('company-login');
                  } else {
                    setActivePortal('candidate');
                    setActivePage('candidate-register');
                  }
                }}
                className={`w-full py-3.5 ${activeConfig.cardRadius} text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  plan.highlighted ? activeConfig.buttonPrimary : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <span>{plan.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

    </div>
  );
};
