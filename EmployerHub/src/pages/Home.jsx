import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { mockPricingPlans, mockStats, mockTestimonials, mockFaqs } from '../data/employerData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/common/StaggerContainer';
import { ParallaxBox } from '../components/common/ParallaxBox';
import { AnimatedCounter } from '../components/common/AnimatedCounter';
import { 
  Building2, Users, Briefcase, Zap, ShieldCheck, CheckCircle2, ArrowRight, 
  Sparkles, Star, ChevronDown, Award, TrendingUp, Globe, Video, Clock 
} from 'lucide-react';

export const Home = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="space-y-20 pb-16 w-full">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-slate-800/80 overflow-hidden bg-slate-950 text-white min-h-[80vh] flex items-center justify-center w-full">
        
        {/* Absolute Background Mesh Glow (does not affect flex layout) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="w-[1000px] h-[600px] bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-emerald-500/25 rounded-full blur-[140px] animate-pulse" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
            
            {/* Left Hero Content */}
            <ScrollReveal direction="up" amount={0.05} className="w-full lg:w-[58%] space-y-7 text-left flex-shrink-0">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs sm:text-sm font-extrabold text-blue-300 backdrop-blur-md shadow-sm">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>India's #1 Enterprise ATS & Employer Recruitment Hub</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                Hire Top 1% Tech & Corporate Talent <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">65% Faster</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Streamline job postings, AI resume parsing, automated interview scheduling, and employee onboarding on a single enterprise HRMS platform.
              </p>

              {/* Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-200 bg-slate-900/90 p-3 rounded-2xl border border-slate-800 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>4.8M+ Verified Resumes</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-200 bg-slate-900/90 p-3 rounded-2xl border border-slate-800 shadow-sm">
                  <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>AI Match Score Ranking</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-200 bg-slate-900/90 p-3 rounded-2xl border border-slate-800 shadow-sm">
                  <Building2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>12,500+ Hiring Orgs</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActivePage('register')}
                  className={`px-8 py-4 ${activeConfig.cardRadius} text-sm sm:text-base font-extrabold flex items-center gap-3 transition-all shadow-xl shadow-blue-600/30 ${activeConfig.buttonPrimary}`}
                >
                  <span>Post Job & Start Hiring</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActivePage('hiring-plans')}
                  className="px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm sm:text-base border border-slate-700 backdrop-blur-md transition-all shadow-lg"
                >
                  View Hiring Plans & Pricing
                </motion.button>
              </div>

              <p className="text-xs text-slate-400 font-medium tracking-wide">
                ⚡ Zero setup fee • Instant ATS workspace activation • GST Invoice Billing
              </p>
            </ScrollReveal>

            {/* Right Interactive Mock Widget Preview */}
            <ScrollReveal direction="up" amount={0.05} className="w-full lg:w-[42%] flex justify-center lg:justify-end flex-shrink-0">
              <div className="w-full max-w-lg p-6 sm:p-7 bg-slate-900/95 border border-slate-700/80 rounded-3xl space-y-5 shadow-2xl backdrop-blur-2xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-extrabold text-white tracking-wide">Live Candidate Sourcing Stream</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono font-bold">Real-time AI Match</span>
                </div>

                <div className="space-y-3.5">
                  <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-1.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-extrabold text-white text-sm">Ananya Sharma</span>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-extrabold text-xs">96% AI Match</span>
                    </div>
                    <p className="text-slate-300 text-xs font-medium">Senior Full Stack Developer • 4.8 Yrs Exp</p>
                    <span className="text-[11px] text-emerald-400 font-extrabold block">Serving Notice (Immediate Joiner)</span>
                  </div>

                  <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-1.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-extrabold text-white text-sm">Vikramaditya Nair</span>
                      <span className="px-2.5 py-1 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-400 font-extrabold text-xs">91% AI Match</span>
                    </div>
                    <p className="text-slate-300 text-xs font-medium">DevOps & Kubernetes Cloud Architect • 7.5 Yrs</p>
                    <span className="text-[11px] text-blue-400 font-extrabold block">Scheduled for Technical System Round</span>
                  </div>
                </div>

                <div className="p-3.5 bg-blue-950/60 rounded-2xl border border-blue-800/80 text-xs text-blue-300 font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>18 candidates matched for "Full Stack React Developer" in last 10 minutes.</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" amount={0.2} className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-200 dark:divide-gray-800">
            {mockStats.map((stat, idx) => (
              <div key={idx} className="space-y-1 pl-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* RECRUITMENT FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="down" amount={0.1} className="text-center max-w-3xl mx-auto space-y-3">
          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
            End-to-End Enterprise Recruitment Software
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Why 12,500+ Indian Employers Hire With Us
          </h2>
          <p className="text-slate-500 text-base">
            Everything your talent acquisition team needs from candidate discovery to offer letter signing.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <StaggerItem direction="up">
            <motion.div whileHover={{ y: -6 }} className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4 shadow-sm hover:shadow-xl transition-all h-full">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center text-xl font-bold">
                🎯
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI Candidate Matching Engine</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Automatically score and rank incoming applicant resumes based on required skills, tech stack, salary expectations, and notice period suitability.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="up">
            <motion.div whileHover={{ y: -6 }} className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4 shadow-sm hover:shadow-xl transition-all h-full">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center text-xl font-bold">
                📊
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Visual Kanban ATS Pipeline</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Drag and drop candidates across stages (Applied, Shortlisted, Technical Interview, Offer Released, Joined) with automated email notifications.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="up">
            <motion.div whileHover={{ y: -6 }} className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4 shadow-sm hover:shadow-xl transition-all h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center text-xl font-bold">
                📅
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">1-Click Google Meet Scheduling</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Sync interviewer Google Calendars to schedule video interviews effortlessly with automatic video link generation and reminder alerts.
              </p>
            </motion.div>
          </StaggerItem>

        </StaggerContainer>
      </section>

      {/* HIRING PLANS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="down" amount={0.1} className="text-center max-w-3xl mx-auto space-y-3">
          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
            Flexible Plans For Startups To Enterprises
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Choose Your Hiring Plan
          </h2>
          <p className="text-slate-500 text-sm">Transparent pricing with zero hidden fees. Upgrade or pause anytime.</p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockPricingPlans.map((plan) => (
            <StaggerItem key={plan.id} direction="scale">
              <motion.div
                whileHover={{ y: -6 }}
                className={`p-8 bg-white dark:bg-gray-900 rounded-3xl ${
                  plan.highlighted ? 'border-2 border-blue-600 shadow-2xl relative scale-105' : 'border border-slate-200 dark:border-gray-800'
                } space-y-6 flex flex-col justify-between transition-all h-full`}
              >
                <div>
                  {plan.highlighted && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white font-extrabold text-[10px] uppercase rounded-full shadow-md">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{plan.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{plan.subtitle}</p>

                  <div className="py-4 border-y border-slate-100 dark:border-gray-800 my-4">
                    <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{plan.priceAnnual}</span>
                    <span className="text-xs text-slate-500 font-semibold">{plan.unit}</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActivePage('hiring-plans')}
                  className={`w-full py-3.5 ${activeConfig.cardRadius} text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
                    plan.highlighted ? activeConfig.buttonPrimary : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>Select Plan & Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="down" amount={0.1} className="text-center max-w-2xl mx-auto space-y-3">
          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
            Employer Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Trusted By Top HR Leaders in India
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockTestimonials.map((t, idx) => (
            <StaggerItem key={idx} direction="up">
              <motion.div whileHover={{ y: -4 }} className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-gray-800">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">{t.name}</h4>
                    <p className="text-[10px] text-slate-500">{t.designation} • {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <ScrollReveal direction="down" amount={0.1} className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-500">Everything you need to know about EmployerHub ATS & HRMS.</p>
        </ScrollReveal>

        <StaggerContainer className="space-y-3">
          {mockFaqs.map((faq, idx) => (
            <StaggerItem key={idx} direction="up">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 space-y-2 shadow-xs">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-start gap-2">
                  <span className="text-blue-600 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

    </div>
  );
};
