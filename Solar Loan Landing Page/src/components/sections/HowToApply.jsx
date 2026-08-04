import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { applicationSteps } from '../../data/solarData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const HowToApply = ({ setActivePage }) => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        <SectionHeader
          badge="📝 Application Process"
          title={<>How to Apply in <span className="text-gradient-green">6 Simple Steps</span></>}
          subtitle="Our end-to-end digital process is designed to be fast, transparent, and hassle-free. Apply in under 15 minutes, get approved in 6 hours."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-400 via-teal-400 to-lime-400 hidden sm:block" />

          <div className="space-y-6">
            {applicationSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-5 sm:gap-8">
                  {/* Step number circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex flex-col items-center justify-center shadow-xl text-white`}>
                      <span className="text-xl">{step.icon}</span>
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border-2 border-emerald-400 flex items-center justify-center text-[10px] font-extrabold text-emerald-600 shadow-sm">
                      {step.step}
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ x: 6 }}
                    className="flex-1 bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${step.color} shadow-sm`}>
                          ✨ {step.highlight}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                          ⏱ {step.duration}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Arrow between steps */}
                {i < applicationSteps.length - 1 && (
                  <div className="flex items-center justify-center h-4 ml-8 sm:hidden">
                    <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-700" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Total Time Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white text-center shadow-2xl shadow-emerald-600/25"
        >
          <p className="text-emerald-100 text-sm font-semibold mb-2 uppercase tracking-widest">Total Time</p>
          <h3 className="text-4xl font-extrabold mb-3">15 Min to Apply + 6 Hours to Approve</h3>
          <p className="text-emerald-100 max-w-xl mx-auto text-sm">
            From document upload to sanction letter, our AI-powered process is the fastest in India. Start today and go solar this month!
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <button
              onClick={() => setActivePage('eligibility')}
              className="px-8 py-3 rounded-xl bg-white text-emerald-700 font-extrabold text-sm hover:bg-emerald-50 transition-colors flex items-center gap-2 shadow-lg"
            >
              Start Now — It's Free <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActivePage('documents')}
              className="px-8 py-3 rounded-xl bg-emerald-700/60 text-white font-bold text-sm border border-emerald-400/30 hover:bg-emerald-700 transition-colors"
            >
              📋 View Document Checklist
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
