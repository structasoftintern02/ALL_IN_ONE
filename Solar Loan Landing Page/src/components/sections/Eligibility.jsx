import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { eligibilityCriteria } from '../../data/solarData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Eligibility = ({ setActivePage }) => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <SectionHeader
          badge="✅ Eligibility"
          title={<>Who Can Apply for a <span className="text-gradient-green">Solar Loan?</span></>}
          subtitle="Solar loans are designed to be inclusive and accessible. Check if you meet these simple criteria to start your application today."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {eligibilityCriteria.map((criteria, i) => (
            <StaggerItem key={i} direction="up">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all p-6 overflow-hidden group"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${criteria.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                {/* Emoji Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${criteria.color} flex items-center justify-center text-3xl mb-4 shadow-md`}>
                  {criteria.icon}
                </div>

                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{criteria.title}</h3>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{criteria.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Not Eligible? Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 rounded-2xl p-6">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-400 text-base mb-3">
              ✅ You Are Likely Eligible If...
            </h4>
            <ul className="space-y-2">
              {[
                'You receive a regular salary or business income',
                'Your CIBIL score is 650 or above',
                'You own or rent a property for solar installation',
                'You are between 21 and 65 years of age',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-emerald-700 dark:text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/50 rounded-2xl p-6">
            <h4 className="font-bold text-amber-800 dark:text-amber-400 text-base mb-3">
              💡 Special Schemes Available For...
            </h4>
            <ul className="space-y-2">
              {[
                'Farmers with PM-KUSUM scheme (90% subsidy)',
                'Self-employed with informal income documentation',
                'New businesses (less than 1 year old)',
                'Individuals with CIBIL score below 700',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-amber-700 dark:text-amber-300">
                  <span className="text-amber-500 flex-shrink-0 mt-0.5">💰</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="text-center flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setActivePage('eligibility')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold shadow-lg inline-flex items-center gap-2"
          >
            Check My Eligibility <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActivePage('contact')}
            className="px-8 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold"
          >
            Talk to an Advisor
          </button>
        </div>
      </div>
    </section>
  );
};
