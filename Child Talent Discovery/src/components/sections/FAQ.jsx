import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { faqs } from '../../data/talentData';
import { useTheme } from '../../context/ThemeContext';
import { Plus, Minus, HelpCircle, Phone, Mail } from 'lucide-react';

export const FAQ = ({ setActivePage, limit }) => {
  const { activeConfig } = useTheme();
  const [openIdx, setOpenIdx] = useState(null);
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <SectionHeader
          badge="❓ Frequently Asked Questions"
          title={<>Everything Parents Need to <span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>Know</span></>}
          subtitle="Clear answers to common questions about early skill discovery, scientific validation, and play assessment."
        />

        {/* Animated Accordion List */}
        <div className="space-y-3">
          {displayFaqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className={`rounded-2xl border transition-all ${
                openIdx === idx
                  ? 'border-purple-300 dark:border-purple-800 shadow-md bg-white dark:bg-slate-800'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <button
                id={`faq-btn-${idx}`}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug">{faq.q}</span>
                <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${
                  openIdx === idx
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                }`}>
                  {openIdx === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0">
                      <div className="h-px bg-slate-100 dark:bg-slate-700 mb-3" />
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {limit && faqs.length > limit && (
          <div className="text-center">
            <button
              onClick={() => setActivePage('faq')}
              className={`px-6 py-3 ${activeConfig.cardRadius} ${activeConfig.buttonSecondary} text-xs font-extrabold`}
            >
              View All {faqs.length} FAQs →
            </button>
          </div>
        )}

        {/* Parent Support Panel */}
        <div className={`p-6 ${activeConfig.cardRadius} bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 text-center space-y-3`}>
          <h4 className="text-base font-extrabold text-slate-900 dark:text-white">Have a specific question about your child?</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300">Our child development advisors are available for free parent guidance.</p>
          <div className="flex flex-wrap gap-3 justify-center pt-1">
            <button
              onClick={() => setActivePage('contact')}
              className={`px-5 py-2.5 ${activeConfig.cardRadius} text-white font-extrabold text-xs flex items-center gap-2 ${activeConfig.buttonPrimary}`}
            >
              <Phone className="w-3.5 h-3.5" /> Call Advisor Free
            </button>
            <a
              href="mailto:support@childtalentdiscovery.org"
              className={`px-5 py-2.5 ${activeConfig.cardRadius} ${activeConfig.buttonSecondary} text-xs font-bold flex items-center gap-2`}
            >
              <Mail className="w-3.5 h-3.5" /> Email Support
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
