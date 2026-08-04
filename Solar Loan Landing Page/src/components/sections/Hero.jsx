import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Percent, ChevronRight, Sparkles, Zap, TrendingDown, Award } from 'lucide-react';
import { AnimatedCounter } from '../common/AnimatedCounter';

// Floating Solar Panel SVG
const SolarPanel = ({ className = '' }) => (
  <svg viewBox="0 0 80 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="60" rx="4" fill="url(#panelGrad)" opacity="0.9" />
    <defs>
      <linearGradient id="panelGrad" x1="0" y1="0" x2="80" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1e3a5f" />
        <stop offset="1" stopColor="#0d2137" />
      </linearGradient>
    </defs>
    {/* Grid lines */}
    <line x1="20" y1="0" x2="20" y2="60" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
    <line x1="40" y1="0" x2="40" y2="60" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
    <line x1="60" y1="0" x2="60" y2="60" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
    <line x1="0" y1="20" x2="80" y2="20" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
    <line x1="0" y1="40" x2="80" y2="40" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
    {/* Shine */}
    <rect x="5" y="5" width="12" height="12" rx="1" fill="#60a5fa" opacity="0.15" />
    <rect x="25" y="5" width="12" height="12" rx="1" fill="#60a5fa" opacity="0.1" />
    <rect x="5" y="25" width="12" height="12" rx="1" fill="#60a5fa" opacity="0.12" />
    <rect width="80" height="60" rx="4" stroke="#3b82f6" strokeWidth="0.5" opacity="0.4" />
  </svg>
);

const stats = [
  { value: 15000, suffix: '+', label: 'Homes Powered', icon: '🏠', color: 'text-emerald-400' },
  { value: 78000, prefix: '₹', label: 'Max Subsidy', icon: '💰', color: 'text-amber-400' },
  { value: 6.75, suffix: '%', decimal: true, label: 'Starting Rate', icon: '📊', color: 'text-blue-400' },
  { value: 6, suffix: ' Hrs', label: 'Approval Time', icon: '⚡', color: 'text-violet-400' },
];

export const Hero = ({ setActivePage }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#020d0a] via-[#041a0f] to-[#020d14]">
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-900/20 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
        {/* Dot grid pattern */}
        <div className="absolute inset-0 grid-dot-pattern opacity-60" />
      </div>

      {/* Floating Solar Panel Decoratives */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute top-20 right-[8%] opacity-25 hidden lg:block"
      >
        <SolarPanel className="w-28 h-20" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-32 right-[18%] opacity-20 hidden lg:block"
      >
        <SolarPanel className="w-20 h-14" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 0.8 }}
        className="absolute top-40 left-[6%] opacity-15 hidden xl:block"
      >
        <SolarPanel className="w-16 h-12" />
      </motion.div>

      {/* Floating Sun */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        className="absolute top-16 right-[35%] opacity-10 hidden lg:block"
      >
        <div className="w-32 h-32 rounded-full border-2 border-amber-400/30 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-amber-400/20 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-amber-400/40" />
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="text-amber-300">PM Surya Ghar Yojana Registered Partner 2026</span>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-white"
            >
              Finance Your{' '}
              <span className="relative">
                <span className="shimmer-text">Solar System</span>
              </span>{' '}
              <br className="hidden sm:block" />
              at{' '}
              <span className="text-gradient-solar">6.75% Interest</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Get up to <strong className="text-white font-bold">100% paperless solar financing</strong> for residential, commercial, and agricultural solar systems. Direct PM Surya Ghar subsidy up to{' '}
              <span className="text-amber-400 font-bold">₹78,000</span>. Zero foreclosure fee. 6-hour pre-approval.
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {[
                { icon: ShieldCheck, text: 'Collateral-Free to ₹5L', color: 'text-emerald-400' },
                { icon: Clock, text: '6-Hour Pre-Sanction', color: 'text-amber-400' },
                { icon: Percent, text: '0% Foreclosure Penalty', color: 'text-blue-400' },
                { icon: Zap, text: '100% Paperless Process', color: 'text-violet-400' },
                { icon: TrendingDown, text: 'Rates from 6.75% p.a.', color: 'text-rose-400' },
                { icon: Award, text: '12+ Partner Banks', color: 'text-teal-400' },
              ].map(({ icon: Icon, text, color }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-300 glass p-2.5 rounded-xl hover:bg-white/10 transition-all"
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(22, 163, 74, 0.4)' }}
                whileTap={{ scale: 0.97 }}
                id="hero-eligibility-btn"
                onClick={() => setActivePage('eligibility')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-base flex items-center gap-3 shadow-xl shadow-emerald-600/30 transition-all"
              >
                <span>Check Eligibility Free</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                id="hero-calculator-btn"
                onClick={() => setActivePage('calculator')}
                className="px-7 py-4 rounded-xl glass hover:bg-white/10 text-white font-semibold text-base border border-white/20 transition-all flex items-center gap-2"
              >
                <span>🧮 Calculate EMI</span>
              </motion.button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-2">
                {['RS', 'AK', 'PV', 'GS'].map((initials, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[10px] text-white border-2 border-slate-900 ${
                      ['bg-emerald-600', 'bg-blue-600', 'bg-amber-600', 'bg-violet-600'][i]
                    }`}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400">
                Over <strong className="text-white">15,000+</strong> Indian homes powered by SolarLoan Pro in 2026
              </p>
            </motion.div>
          </div>

          {/* Right: Stats Card Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="glass rounded-3xl p-1 shadow-2xl">
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-[22px] p-6 space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">SolarLoan Pro at a Glance</h3>
                    <p className="text-slate-400 text-xs mt-0.5">India's #1 Solar Finance Platform</p>
                  </div>
                  <span className="text-2xl animate-bounce-slow">☀️</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="bg-white/5 rounded-2xl p-4 border border-white/8 hover:bg-white/10 transition-all"
                    >
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className={`text-2xl font-extrabold ${stat.color}`}>
                        <AnimatedCounter
                          end={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                          decimal={stat.decimal}
                        />
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Loan Types Quick Preview */}
                <div className="space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Quick Loan Reference</p>
                  {[
                    { type: 'Residential', rate: '6.75%', max: '₹10L', color: 'bg-emerald-500' },
                    { type: 'Commercial', rate: '7.25%', max: '₹5Cr', color: 'bg-blue-500' },
                    { type: 'Agriculture', rate: '4.00%', max: '₹5L', color: 'bg-amber-500' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-xs py-2 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span className="text-slate-300 font-semibold">{item.type}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-400 font-bold">{item.rate}</span>
                        <span className="text-slate-500">Up to {item.max}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA in card */}
                <button
                  onClick={() => setActivePage('loan-types')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600/80 to-teal-600/80 text-white font-bold text-sm hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center justify-center gap-2 border border-emerald-500/30"
                >
                  View All Loan Types <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-6 h-9 rounded-full border-2 border-white/20 flex items-center justify-center"
          >
            <div className="w-1.5 h-3 bg-emerald-400 rounded-full" />
          </motion.div>
          <p className="text-[10px] text-slate-600 uppercase tracking-widest">Scroll</p>
        </motion.div>
      </div>
    </section>
  );
};
