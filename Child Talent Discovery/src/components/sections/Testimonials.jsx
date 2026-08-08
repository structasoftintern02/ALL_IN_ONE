import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { testimonials as defaultTestimonials } from '../../data/talentData';
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Heart } from 'lucide-react';

export const Testimonials = () => {
  const { activeConfig } = useTheme();
  const dataContext = useData();
  const homeCms = dataContext?.homeCms;
  const cmsData = homeCms?.successStoriesCms || homeCms?.testimonialsCms;

  const [active, setActive] = useState(0);

  const testimonialsList = (cmsData?.testimonials && cmsData.testimonials.length > 0) ? cmsData.testimonials : defaultTestimonials;
  const badge = cmsData?.badge || "❤️ Parent Testimonials";
  const rawTitle = cmsData?.title || "Loved by 25,000+ Indian Parents";
  const highlightText = cmsData?.highlightText || "25,000+ Indian Parents";
  const subtitle = cmsData?.subtitle || "Real stories from parents who discovered their child's natural talents and transformed their learning experience.";
  const isVisible = cmsData?.visibility?.section !== false;

  if (!isVisible) return null;

  const safeActive = active < testimonialsList.length ? active : 0;
  const currentItem = testimonialsList[safeActive] || defaultTestimonials[0];

  const prev = () => setActive((a) => (a === 0 ? testimonialsList.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonialsList.length - 1 ? 0 : a + 1));

  let titleNode = rawTitle;
  if (highlightText && rawTitle.includes(highlightText)) {
    const parts = rawTitle.split(highlightText);
    titleNode = (
      <>
        {parts[0]}
        <span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>
          {highlightText}
        </span>
        {parts[1]}
      </>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {(cmsData?.visibility?.sectionBadge !== false || cmsData?.visibility?.sectionTitle !== false || cmsData?.visibility?.sectionSubtitle !== false) && (
          <SectionHeader
            badge={cmsData?.visibility?.sectionBadge !== false ? badge : undefined}
            title={cmsData?.visibility?.sectionTitle !== false ? titleNode : undefined}
            subtitle={cmsData?.visibility?.sectionSubtitle !== false ? subtitle : undefined}
          />
        )}

        {/* Featured Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={safeActive}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className={`bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 text-white ${activeConfig.cardRadius} p-8 lg:p-12 shadow-2xl relative overflow-hidden`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Author Column */}
              <div className="lg:col-span-4 text-center border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8 space-y-3">
                <div className={`w-20 h-20 ${activeConfig.cardRadius} bg-gradient-to-br ${currentItem.avatarBg || 'from-rose-500 to-purple-600'} flex items-center justify-center text-2xl font-extrabold text-white mx-auto shadow-xl ring-4 ring-white/10`}>
                  {currentItem.avatar || 'SM'}
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-lg">{currentItem.parentName}</h4>
                  <p className="text-purple-400 text-xs font-semibold">{currentItem.childName}</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">📍 {currentItem.location}</p>
                </div>
                <div className="flex gap-1 justify-center">
                  {Array(currentItem.rating || 5).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-extrabold border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Parent
                </div>
              </div>

              {/* Story Column */}
              <div className="lg:col-span-8 space-y-4 text-left">
                <span className={`inline-block text-xs font-extrabold px-3 py-1 rounded-full text-white bg-gradient-to-r ${currentItem.avatarBg || 'from-rose-500 to-purple-600'}`}>
                  Program: {currentItem.programTaken || 'Child Talent Growth'}
                </span>
                <div className="text-4xl text-purple-500/40 font-serif leading-none">"</div>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed italic">
                  {currentItem.story}
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
            {testimonialsList.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all ${
                  i === safeActive
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
