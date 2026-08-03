import React, { useState } from 'react';
import { useTheme, VARIATIONS } from '../context/ThemeContext';
import { basePlans, countriesData } from '../data/pricingData';
import { CheckCircle2, ArrowRight, Globe, Sparkles } from 'lucide-react';

export const CountryPricing = ({ setActivePage, selectedCountry, setSelectedCountry, setSelectedPlan }) => {
  const { variation, activeConfig } = useTheme();

  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  const country = selectedCountry || countriesData[0]; // Default US

  const handleBuy = (plan) => {
    setSelectedPlan({ ...plan, billingCycle });
    setActivePage('purchase');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
          <Globe className="w-4 h-4" />
          <span>Active Location: {country.flag} {country.name} ({country.currency})</span>
          <button
            onClick={() => setActivePage('country')}
            className="underline ml-1 font-extrabold hover:text-emerald-900"
          >
            Change
          </button>
        </div>

        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
          Transparent Pricing for Every Scale
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
          No hidden setup fees. Upgrade or cancel your subscription at any time.
        </p>

        {/* Billing Cycle Toggle */}
        <div className="inline-flex items-center p-1 bg-slate-200 dark:bg-gray-800 rounded-2xl border border-slate-300 dark:border-gray-700">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-white dark:bg-gray-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Monthly Billing
          </button>
          
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              billingCycle === 'annual'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <span>Annual Billing</span>
            <span className="px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-extrabold">
              SAVE 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {basePlans.map((plan) => {
          const rawPrice = billingCycle === 'monthly' ? plan.basePriceMonthly : plan.basePriceAnnual;
          const convertedPrice = Math.round(rawPrice * country.rateMultiplier);

          return (
            <div
              key={plan.id}
              className={`p-6 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${
                plan.highlighted
                  ? 'border-2 border-emerald-500 shadow-2xl relative scale-105'
                  : `${activeConfig.cardBorder}`
              } flex flex-col justify-between space-y-6 transition-all duration-200`}
            >
              <div>
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-slate-950 font-extrabold text-[10px] uppercase rounded-full shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{plan.name}</h3>
                  <p className="text-[11px] text-slate-500">{plan.badge}</p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-slate-100 dark:border-gray-800 my-4 space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      {country.symbol}{convertedPrice.toLocaleString('en-US')}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">/ month</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block">
                    {billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}
                  </span>
                </div>

                {/* Limits */}
                <div className="space-y-1 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  <div>📩 {plan.contactsLimit}</div>
                  <div>⚡ {plan.messagesLimit}</div>
                  <div>🤖 {plan.aiBotResponses}</div>
                </div>

                {/* Feature Bullet List */}
                <div className="space-y-2 text-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Included Features</span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buy CTA */}
              <button
                onClick={() => handleBuy(plan)}
                className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
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
