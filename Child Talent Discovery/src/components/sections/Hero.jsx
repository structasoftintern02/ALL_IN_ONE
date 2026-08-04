import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Sparkles, ArrowRight, ShieldCheck, Star, Award, Heart, Brain, Zap, ChevronRight } from 'lucide-react';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { statsData } from '../../data/talentData';

// Floating Decorative Elements
const FloatingBadge = ({ icon, text, delay = 0, className = '' }) => (
  <motion.div
    animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay }}
    className={`absolute pointer-events-none z-20 ${className}`}
  >
    <div className="glass px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-white/60 dark:border-white/10 text-xs font-extrabold text-slate-800 dark:text-white">
      <span className="text-base">{icon}</span>
      <span>{text}</span>
    </div>
  </motion.div>
);

export const Hero = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      {/* Background Glow Overlay & Pattern */}
      <div className="absolute inset-0 grid-dot-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Badges */}
      <FloatingBadge icon="🧠" text="Cognitive & Spatial Mapping" delay={0} className="top-12 left-[5%] hidden lg:block" />
      <FloatingBadge icon="🎨" text="Divergent Creativity" delay={1.2} className="top-48 left-[8%] hidden xl:block" />
      <FloatingBadge icon="🔬" text="STEM & Logic Readiness" delay={0.8} className="top-16 right-[6%] hidden lg:block" />
      <FloatingBadge icon="👑" text="Leadership & Empathy" delay={2} className="bottom-24 right-[10%] hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-4 py-2 ${activeConfig.cardRadius} ${activeConfig.badgeClass} text-xs font-extrabold shadow-sm`}
            >
              <Sparkles className="w-4 h-4 animate-pulse text-amber-500 flex-shrink-0" />
              <span>{activeConfig.heroTagline}</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-70 flex-shrink-0" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-white"
            >
              Discover Your Child's{' '}
              <span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>
                Hidden Natural Talents
              </span>{' '}
              Early
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              Every child is born with unique cognitive, creative, and athletic gifts. Our <strong className="text-slate-900 dark:text-white font-extrabold">play-based scientific skill mapping</strong> helps parents identify natural strengths between ages <span className="text-purple-600 dark:text-purple-300 font-extrabold">3 to 10 years</span>.
            </motion.p>

            {/* Feature Highlights Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3"
            >
              {[
                { icon: ShieldCheck, text: 'No Stressful Exams', color: 'text-emerald-500 dark:text-emerald-400' },
                { icon: Brain, text: 'Gardner AI Framework', color: 'text-purple-500 dark:text-purple-400' },
                { icon: Star, text: '12-Page Talent Profile', color: 'text-amber-500 dark:text-amber-400' },
                { icon: Heart, text: '100% Parent-Guided', color: 'text-rose-500 dark:text-rose-400' },
                { icon: Zap, text: 'Instant Report', color: 'text-cyan-500 dark:text-cyan-400' },
                { icon: Award, text: 'Ages 3 to 10 Years', color: 'text-indigo-500 dark:text-indigo-400' },
              ].map(({ icon: Icon, text, color }, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 text-xs font-extrabold text-slate-800 dark:text-slate-100 bg-white/90 dark:bg-slate-800/90 p-2.5 ${activeConfig.cardRadius} border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:scale-102 transition-all`}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                id="hero-start-btn"
                onClick={() => setActivePage('how-it-works')}
                className={`px-8 py-4 ${activeConfig.cardRadius} text-base font-extrabold flex items-center justify-center gap-3 transition-all ${activeConfig.buttonPrimary}`}
              >
                <span>Start Free Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                id="hero-sample-report-btn"
                onClick={() => setActivePage('report-preview')}
                className={`px-7 py-4 ${activeConfig.cardRadius} font-extrabold text-base transition-all flex items-center justify-center gap-2 ${activeConfig.buttonSecondary}`}
              >
                <span>📊 View Sample Report</span>
              </motion.button>
            </motion.div>

            {/* Social Trust Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 pt-1 text-xs text-slate-600 dark:text-slate-300"
            >
              <div className="flex -space-x-2 flex-shrink-0">
                {['SM', 'RN', 'PA', 'KS'].map((initials, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-[10px] text-white border-2 border-white dark:border-slate-900 ${
                      ['bg-rose-500', 'bg-purple-600', 'bg-emerald-500', 'bg-amber-500'][i]
                    }`}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p>
                Trusted by <strong className="text-slate-900 dark:text-white font-extrabold">25,000+ Indian Parents</strong> for early talent mapping.
              </p>
            </motion.div>

          </div>

          {/* Right Hero Interactive Widget Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className={`p-6 sm:p-8 bg-white dark:bg-slate-800/95 ${activeConfig.cardRadius} ${activeConfig.cardBorder} shadow-2xl space-y-6 relative overflow-hidden`}>
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-4">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Early Skill Identification</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Scientific Talent Mapping Dashboard</p>
                </div>
                <span className="text-3xl animate-bounce-soft">🚀</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {statsData.map((stat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-700/60 border border-slate-100 dark:border-slate-700"
                  >
                    <div className="text-xl mb-1">{stat.icon}</div>
                    <div className={`text-xl font-extrabold ${stat.color}`}>
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
                    </div>
                    <div className="text-[11px] font-bold text-slate-600 dark:text-slate-300 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Age Program Selector Buttons */}
              <div className="space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-400">Select Age Milestone</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: '3–5 Yrs', badge: '🌱 Play' },
                    { label: '5–7 Yrs', badge: '🚀 Growth' },
                    { label: '7–10 Yrs', badge: '🏆 Talent' },
                  ].map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePage('programs')}
                      className={`p-3 text-center rounded-2xl border transition-all hover:scale-102 ${
                        i === 1
                          ? 'bg-purple-600 text-white border-purple-600 font-extrabold shadow-md'
                          : 'bg-slate-50 dark:bg-slate-700/80 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 font-bold'
                      }`}
                    >
                      <div className="text-xs font-extrabold">{item.label}</div>
                      <div className="text-[10px] opacity-90 mt-0.5">{item.badge}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Assessment CTA button */}
              <button
                onClick={() => setActivePage('programs')}
                className={`w-full py-3.5 ${activeConfig.cardRadius} text-white font-extrabold text-sm flex items-center justify-center gap-2 ${activeConfig.buttonPrimary}`}
              >
                <span>Explore Age Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
