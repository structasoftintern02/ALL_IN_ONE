import React, { useState } from 'react';
import { useTheme, VARIATIONS } from '../../context/ThemeContext';
import { ageGroupPlansData, skillCategoriesData } from '../../data/programsData';
import { schoolsData } from '../../data/schoolsData';
import { skillTeachersData, expertTeachersData } from '../../data/teachersData';
import { 
  Sparkles, CheckCircle2, ArrowRight, Star, Heart, MapPin, Award, ShieldCheck, 
  Users, BookOpen, ChevronRight, HelpCircle 
} from 'lucide-react';

export const HomePage = ({ setActivePage, setActivePortal }) => {
  const { variation, activeConfig } = useTheme();

  return (
    <div className="space-y-24 pb-16">
      
      {/* SECTION 1: HERO BANNER */}
      <section className={`relative pt-12 pb-24 border-b overflow-hidden ${
        variation === VARIATIONS.KIDS
          ? 'bg-gradient-to-br from-pink-500 via-purple-600 to-amber-500 text-white'
          : variation === VARIATIONS.PREMIUM
          ? 'bg-gradient-to-br from-purple-950 via-slate-900 to-teal-950 text-white'
          : 'bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>NIMHANS & Early Childhood Association Aligned • Ages 3 to 10 Yrs</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Discover & Nurture Your Child's <span className="bg-gradient-to-r from-amber-300 via-pink-200 to-teal-200 bg-clip-text text-transparent">Natural Genius</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-100 leading-relaxed">
              Scientific age-wise talent diagnostic programs connecting parents with certified educators, pediatric psychologists, and top nearby schools.
            </p>

            {/* Quick Diagnostic Launcher Card */}
            <div className="p-4 bg-white rounded-3xl shadow-2xl space-y-3 text-slate-900 max-w-xl mx-auto border border-white/30">
              <span className="text-xs font-extrabold text-pink-600 uppercase tracking-wider block">
                Select Your Child's Age Group
              </span>

              <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                <button
                  onClick={() => {
                    setActivePortal('parent');
                    setActivePage('assessment-quiz');
                  }}
                  className="p-3 rounded-2xl bg-pink-50 hover:bg-pink-100 text-pink-900 border border-pink-200 transition-all flex flex-col items-center gap-1"
                >
                  <span className="text-xl">👶</span>
                  <span>3 – 5 Years</span>
                  <span className="text-[10px] text-pink-600 font-normal">Early Play</span>
                </button>

                <button
                  onClick={() => {
                    setActivePortal('parent');
                    setActivePage('assessment-quiz');
                  }}
                  className="p-3 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-all flex flex-col items-center gap-1"
                >
                  <span className="text-xl">👦</span>
                  <span>5 – 7 Years</span>
                  <span className="text-[10px] text-amber-600 font-normal">Cognitive</span>
                </button>

                <button
                  onClick={() => {
                    setActivePortal('parent');
                    setActivePage('assessment-quiz');
                  }}
                  className="p-3 rounded-2xl bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 transition-all flex flex-col items-center gap-1"
                >
                  <span className="text-xl">🎓</span>
                  <span>7 – 10 Years</span>
                  <span className="text-[10px] text-teal-600 font-normal">STEM Talent</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setActivePortal('parent');
                  setActivePage('assessment-quiz');
                }}
                className={`w-full py-3.5 ${activeConfig.cardRadius} font-extrabold text-xs shadow-lg transition-all flex items-center justify-center gap-2 ${activeConfig.buttonPrimary}`}
              >
                <span>Take 15-Min Free Skill Quiz Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className={`px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
            Scientific 4-Step Process
          </span>
          <h2 className={`text-3xl font-extrabold ${activeConfig.headingFont}`}>
            How Talent Discovery Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-3 shadow-sm`}>
            <span className="text-3xl font-extrabold text-pink-500">01</span>
            <h4 className="font-bold text-slate-900 text-base">1. Interactive Skill Quiz</h4>
            <p className="text-xs text-slate-600">Parents complete observational questions evaluating play behavior and logic.</p>
          </div>

          <div className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-3 shadow-sm`}>
            <span className="text-3xl font-extrabold text-purple-500">02</span>
            <h4 className="font-bold text-slate-900 text-base">2. Expert Diagnostic Report</h4>
            <p className="text-xs text-slate-600">Receive detailed score gauges for Cognitive, Motor, Creative, and EQ skills.</p>
          </div>

          <div className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-3 shadow-sm`}>
            <span className="text-3xl font-extrabold text-amber-500">03</span>
            <h4 className="font-bold text-slate-900 text-base">3. Match Nearby Schools</h4>
            <p className="text-xs text-slate-600">Connect with accredited schools offering specialized tinkering & sensory labs.</p>
          </div>

          <div className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-3 shadow-sm`}>
            <span className="text-3xl font-extrabold text-teal-500">04</span>
            <h4 className="font-bold text-slate-900 text-base">4. Certified Mentorship</h4>
            <p className="text-xs text-slate-600">Weekly sessions with certified skill teachers and pediatric psychologists.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: AGE-WISE PLANS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className={`text-3xl font-extrabold ${activeConfig.headingFont}`}>
              Age-based Skill Identification Programs
            </h2>
            <p className="text-xs text-slate-500 mt-1">Tailored developmental milestones for early childhood growth.</p>
          </div>
          <button
            onClick={() => setActivePage('age-plans')}
            className={`px-5 py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonSecondary}`}
          >
            Explore All Age Plans →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ageGroupPlansData.map((plan, idx) => (
            <div key={idx} className={`p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-6 shadow-sm flex flex-col justify-between`}>
              <div className="space-y-4">
                <span className="px-3 py-1 bg-pink-100 text-pink-900 rounded-full font-bold text-xs">
                  {plan.ageGroup}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">{plan.badge}</h3>
                <p className="text-xs text-slate-600">{plan.tagline}</p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {plan.programs.map((p) => (
                    <div key={p.id} className="p-3 bg-slate-50 rounded-xl text-xs space-y-1">
                      <div className="flex items-center gap-2 font-bold text-slate-900">
                        <span>{p.icon}</span>
                        <span>{p.title}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block">{p.duration} • {p.category}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setActivePortal('parent');
                  setActivePage('parent-register');
                }}
                className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-extrabold transition-all ${activeConfig.buttonPrimary}`}
              >
                Enroll Child in {plan.ageGroup}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: NEARBY SCHOOLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className={`text-3xl font-extrabold ${activeConfig.headingFont}`}>
              Empaneled Partner Schools
            </h2>
            <p className="text-xs text-slate-500">Equipped with specialized sensory observation labs & robotics studios.</p>
          </div>
          <button
            onClick={() => setActivePage('nearby-schools')}
            className={`px-5 py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonSecondary}`}
          >
            Find Nearby Schools →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {schoolsData.map((sch) => (
            <div key={sch.id} className={`bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} overflow-hidden shadow-sm space-y-4`}>
              <div className="relative h-44 overflow-hidden">
                <img src={sch.image} alt={sch.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-amber-400 text-slate-950">
                  ⭐ {sch.rating} ({sch.reviewsCount})
                </span>
              </div>
              <div className="p-4 pt-0 space-y-2 text-xs">
                <h3 className="font-extrabold text-slate-900 text-base">{sch.name}</h3>
                <p className="text-slate-500">{sch.area}, {sch.city}</p>
                <span className="text-[10px] text-pink-600 font-bold block">{sch.accreditation}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-10 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.gradientBg} text-white text-center space-y-6 shadow-2xl relative overflow-hidden`}>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Give Your Child the Gift of Early Skill Identification
          </h2>
          <p className="text-slate-100 max-w-xl mx-auto text-sm">
            Join 28,400+ parents who unlocked their child's natural talents through scientific observational assessments.
          </p>
          <button
            onClick={() => {
              setActivePortal('parent');
              setActivePage('assessment-quiz');
            }}
            className={`px-8 py-4 bg-white text-slate-950 font-extrabold ${activeConfig.cardRadius} shadow-xl hover:bg-slate-100 transition-all inline-flex items-center gap-2 text-sm`}
          >
            <span>Start Free Skill Assessment</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
};
