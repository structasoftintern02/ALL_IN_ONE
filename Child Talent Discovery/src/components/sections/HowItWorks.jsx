import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { howItWorksSteps } from '../../data/talentData';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

export const HowItWorks = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900" id="how-it-works">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        <SectionHeader
          badge="🛣️ 5-Step Learning Journey"
          title={<>How Child Talent Discovery <span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>Works</span></>}
          subtitle="Simple, non-stressful, and parent-guided. Discover your child's innate strengths in 5 simple steps."
        />

        {/* Step-by-Step Vertical Timeline */}
        <div className="relative">
          {/* Vertical connecting gradient line */}
          <div className="absolute left-8 top-10 bottom-10 w-1 bg-gradient-to-b from-rose-500 via-purple-500 to-emerald-500 hidden sm:block rounded-full" />

          <div className="space-y-6">
            {howItWorksSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-5 sm:gap-8">

                  {/* Step Number Avatar */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-16 h-16 ${activeConfig.cardRadius} bg-gradient-to-br ${step.color} flex flex-col items-center justify-center text-white shadow-xl`}>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border-2 border-purple-500 flex items-center justify-center text-[10px] font-extrabold text-purple-600 dark:text-purple-300 shadow-xs">
                      {step.step}
                    </div>
                  </div>

                  {/* Content Box */}
                  <motion.div
                    whileHover={{ x: 6 }}
                    className={`flex-1 p-6 ${activeConfig.cardRadius} bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all space-y-2`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-xs font-extrabold border border-purple-200 dark:border-purple-800">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium pt-1">
                      💡 <span className="font-semibold text-slate-700 dark:text-slate-300">{step.details}</span>
                    </p>
                  </motion.div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`bg-gradient-to-r from-purple-800 via-rose-700 to-indigo-900 text-white ${activeConfig.cardRadius} p-8 text-center shadow-2xl space-y-4`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-extrabold text-amber-300 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" /> 100% Home Play-Based Assessment
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Discover Your Child's Core Potential?</h3>
          <p className="text-purple-100 text-sm max-w-xl mx-auto leading-relaxed">
            Takes less than 20 minutes of guided observational play. Get your 12-page Talent Profile immediately.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActivePage('report-preview')}
              className={`px-8 py-4 ${activeConfig.cardRadius} bg-white text-purple-900 font-extrabold text-sm hover:bg-rose-50 transition-all inline-flex items-center gap-2 shadow-lg hover:scale-105`}
            >
              <span>Explore Sample Assessment Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
