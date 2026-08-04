import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { mockPricingPlans } from '../data/employerData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/common/StaggerContainer';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const HiringPlans = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header Banner */}
      <ScrollReveal direction="down" amount={0.1} className="text-center max-w-3xl mx-auto space-y-4">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Transparent Enterprise Plans
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
          Hiring Plans Tailored for Your Org Size
        </h1>
        <p className="text-slate-500 text-sm sm:text-base">
          Unlimited candidate applications with automated AI matching & GST-compliant billing.
        </p>

        {/* Monthly / Annual Toggle */}
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
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <span>Annual Billing</span>
            <span className="px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-extrabold">
              SAVE 20%
            </span>
          </button>
        </div>
      </ScrollReveal>

      {/* Pricing Cards Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mockPricingPlans.map((plan) => {
          const displayPrice = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;

          return (
            <StaggerItem key={plan.id} direction="scale">
              <motion.div
                whileHover={{ y: -6 }}
                className={`p-8 bg-white dark:bg-gray-900 rounded-3xl ${
                  plan.highlighted
                    ? 'border-2 border-blue-600 shadow-2xl relative scale-105'
                    : 'border border-slate-200 dark:border-gray-800'
                } flex flex-col justify-between space-y-6 transition-all h-full`}
              >
                <div>
                  {plan.highlighted && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white font-extrabold text-[10px] uppercase rounded-full shadow-md">
                      {plan.badge}
                    </span>
                  )}

                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">{plan.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{plan.subtitle}</p>

                  <div className="py-4 border-y border-slate-100 dark:border-gray-800 my-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">{displayPrice}</span>
                      <span className="text-xs text-slate-500 font-semibold">{plan.unit}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Included Software Modules</span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActivePage('register')}
                  className={`w-full py-3.5 ${activeConfig.cardRadius} text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
                    plan.highlighted ? activeConfig.buttonPrimary : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>Get Started with {plan.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

    </div>
  );
};
