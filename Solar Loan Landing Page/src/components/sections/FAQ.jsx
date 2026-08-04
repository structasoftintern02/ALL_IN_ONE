import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { faqs } from '../../data/solarData';
import { Plus, Minus } from 'lucide-react';

export const FAQ = ({ setActivePage, limit }) => {
  const [openId, setOpenId] = useState(null);
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <SectionHeader
          badge="❓ FAQ"
          title={<>Frequently Asked <span className="text-gradient-green">Questions</span></>}
          subtitle="Everything you need to know about solar loans. Can't find your answer? Contact our experts."
        />

        <div className="space-y-3">
          {displayFaqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border overflow-hidden transition-all ${
                openId === i
                  ? 'border-emerald-300 dark:border-emerald-700 shadow-md bg-white dark:bg-slate-800'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <button
                id={`faq-${i}`}
                onClick={() => setOpenId(openId === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-sm font-bold text-slate-900 dark:text-white leading-snug">{faq.question}</span>
                <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${
                  openId === i
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                }`}>
                  {openId === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openId === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0">
                      <div className="h-px bg-slate-100 dark:bg-slate-700 mb-4" />
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* View More Button (only when limited) */}
        {limit && faqs.length > limit && (
          <div className="text-center">
            <button
              onClick={() => setActivePage('faq')}
              className="px-8 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:border-emerald-300 dark:hover:border-emerald-700 transition-all"
            >
              View All {faqs.length} FAQs →
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 rounded-2xl p-6 text-center">
          <p className="text-slate-900 dark:text-white font-bold text-base mb-1">
            Still have questions? 🤔
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
            Our solar loan experts are available Mon–Sat, 9AM–6PM IST.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActivePage('contact')}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors"
            >
              📞 Call Us Free
            </button>
            <a
              href="mailto:support@solarloanpro.in"
              className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm hover:border-slate-300 transition-colors"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
