import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { testimonials } from '../../data/talentData';
import { useTheme } from '../../context/ThemeContext';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Heart } from 'lucide-react';

export const Testimonials = () => {
  const { activeConfig } = useTheme();
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <SectionHeader
          badge="❤️ Parent Testimonials"
          title={<>Loved by <span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>25,000+ Indian Parents</span></>}
          subtitle="Real stories from parents who discovered their child's natural talents and transformed their learning experience."
        />

        {/* Featured Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className={`bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 text-white ${activeConfig.cardRadius} p-8 lg:p-12 shadow-2xl relative overflow-hidden`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Author Column */}
              <div className="lg:col-span-4 text-center border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8 space-y-3">
                <div className={`w-20 h-20 ${activeConfig.cardRadius} bg-gradient-to-br ${testimonials[active].avatarBg} flex items-center justify-center text-2xl font-extrabold text-white mx-auto shadow-xl ring-4 ring-white/10`}>
                  {testimonials[active].avatar}
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-lg">{testimonials[active].parentName}</h4>
                  <p className="text-purple-400 text-xs font-semibold">{testimonials[active].childName}</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">📍 {testimonials[active].location}</p>
                </div>
                <div className="flex gap-1 justify-center">
                  {Array(testimonials[active].rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-extrabold border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Parent
                </div>
              </div>

              {/* Story Column */}
              <div className="lg:col-span-8 space-y-4 text-left">
                <span className={`inline-block text-xs font-extrabold px-3 py-1 rounded-full text-white bg-gradient-to-r ${testimonials[active].avatarBg}`}>
                  Program: {testimonials[active].programTaken}
                </span>
                <div className="text-4xl text-purple-500/40 font-serif leading-none">"</div>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed italic">
                  {testimonials[active].story}
                </p>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className={`w-11 h-11 ${activeConfig.cardRadius} bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-purple-50 dark:hover:bg-slate-700 transition-colors shadow-sm`}
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
                    ? 'w-7 h-3 bg-purple-600'
                    : 'w-3 h-3 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className={`w-11 h-11 ${activeConfig.cardRadius} bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-purple-50 dark:hover:bg-slate-700 transition-colors shadow-sm`}
          >
            <ChevronRight className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
