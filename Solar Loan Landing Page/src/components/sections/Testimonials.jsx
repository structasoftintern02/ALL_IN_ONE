import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { testimonials } from '../../data/solarData';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <SectionHeader
          badge="⭐ Customer Stories"
          title={<>Real People, <span className="text-gradient-green">Real Savings</span></>}
          subtitle="Over 15,000 Indian families, farmers, and businesses trust SolarLoan Pro for their solar financing needs. Hear from our customers."
        />

        {/* Featured Testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-slate-900 to-emerald-950 rounded-3xl p-8 lg:p-12 shadow-2xl text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Author Info */}
              <div className="text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${testimonials[active].avatarBg} flex items-center justify-center text-2xl font-extrabold text-white mx-auto mb-4 shadow-xl ring-4 ring-white/10`}>
                  {testimonials[active].avatar}
                </div>
                <h4 className="font-extrabold text-white text-lg">{testimonials[active].name}</h4>
                <p className="text-emerald-400 text-sm font-semibold">{testimonials[active].role}</p>
                <p className="text-slate-500 text-xs mt-0.5">📍 {testimonials[active].city}</p>
                <div className="flex gap-1 justify-center mt-3">
                  {Array(testimonials[active].rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                {testimonials[active].verified && (
                  <div className="flex items-center gap-1 justify-center mt-2 text-xs text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Customer
                  </div>
                )}
              </div>

              {/* Quote */}
              <div className="lg:col-span-2">
                <div className="text-5xl text-emerald-500/30 font-serif leading-none mb-3">"</div>
                <p className="text-slate-300 text-base lg:text-lg leading-relaxed italic mb-6">
                  {testimonials[active].quote}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-2xl p-3 text-center border border-white/10">
                    <p className="text-xs text-slate-400">Loan Type</p>
                    <p className="text-xs font-bold text-white mt-0.5">{testimonials[active].loanType}</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-3 text-center border border-white/10">
                    <p className="text-xs text-slate-400">Amount</p>
                    <p className="text-sm font-extrabold text-emerald-400 mt-0.5">{testimonials[active].amount}</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-3 text-center border border-white/10">
                    <p className="text-xs text-slate-400">Annual Savings</p>
                    <p className="text-sm font-extrabold text-amber-400 mt-0.5">{testimonials[active].savings}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all ${
                  i === active
                    ? 'w-6 h-3 bg-emerald-500'
                    : 'w-3 h-3 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          </button>
        </div>

        {/* Mini Cards Row */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.04 }}
              onClick={() => setActive(i)}
              className={`p-3 rounded-xl border text-center transition-all ${
                i === active
                  ? 'border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 shadow-md'
                  : 'border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-sm font-extrabold text-white mx-auto mb-1`}>
                {t.avatar}
              </div>
              <p className="text-[10px] font-bold text-slate-900 dark:text-white truncate">{t.name.split(' ')[0]}</p>
              <p className="text-[9px] text-slate-500 truncate">{t.city.split(',')[1]?.trim()}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
