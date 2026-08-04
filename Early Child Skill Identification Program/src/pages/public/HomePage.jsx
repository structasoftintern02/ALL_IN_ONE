import React from 'react';
import { motion } from 'framer-motion';
import { useTheme, VARIATIONS } from '../../context/ThemeContext';
import { ageGroupPlansData } from '../../data/programsData';
import { schoolsData } from '../../data/schoolsData';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/common/StaggerContainer';
import { ParallaxBox } from '../../components/common/ParallaxBox';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';
import { 
  Sparkles, ArrowRight, Star, Award, ShieldCheck, 
  Users, BookOpen, Heart, CheckCircle2 
} from 'lucide-react';

export const HomePage = ({ setActivePage, setActivePortal }) => {
  const { variation, activeConfig } = useTheme();

  return (
    <div className="space-y-24 pb-16 overflow-hidden">
      
      {/* SECTION 1: HERO BANNER WITH PARALLAX & LOAD ANIMATIONS */}
      <section className={`relative pt-16 pb-28 border-b overflow-hidden ${
        variation === VARIATIONS.KIDS
          ? 'bg-gradient-to-br from-pink-500 via-purple-600 to-amber-500 text-white'
          : variation === VARIATIONS.PREMIUM
          ? 'bg-gradient-to-br from-purple-950 via-slate-900 to-teal-950 text-white'
          : 'bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 text-white'
      }`}>
        {/* Parallax Floating Decorative Elements */}
        <ParallaxBox offset={-40} className="absolute top-10 left-8 opacity-20 pointer-events-none hidden lg:block">
          <div className="w-32 h-32 rounded-full bg-white blur-2xl" />
        </ParallaxBox>
        <ParallaxBox offset={60} className="absolute bottom-10 right-12 opacity-20 pointer-events-none hidden lg:block">
          <div className="w-48 h-48 rounded-full bg-amber-300 blur-3xl" />
        </ParallaxBox>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>NIMHANS & Early Childhood Association Aligned • Ages 3 to 10 Yrs</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Discover & Nurture Your Child's <span className="bg-gradient-to-r from-amber-300 via-pink-200 to-teal-200 bg-clip-text text-transparent">Natural Genius</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-100 leading-relaxed"
            >
              Scientific age-wise talent diagnostic programs connecting parents with certified educators, pediatric psychologists, and top nearby schools.
            </motion.p>

            {/* Quick Diagnostic Launcher Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-5 bg-white rounded-3xl shadow-2xl space-y-4 text-slate-900 max-w-xl mx-auto border border-white/30 backdrop-blur-lg"
            >
              <span className="text-xs font-extrabold text-pink-600 uppercase tracking-wider block">
                Select Your Child's Age Group
              </span>

              <div className="grid grid-cols-3 gap-2.5 text-xs font-bold">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    setActivePortal('parent');
                    setActivePage('assessment-quiz');
                  }}
                  className="p-3.5 rounded-2xl bg-pink-50 hover:bg-pink-100 text-pink-900 border border-pink-200 transition-all flex flex-col items-center gap-1 shadow-xs"
                >
                  <span className="text-2xl">👶</span>
                  <span>3 – 5 Years</span>
                  <span className="text-[10px] text-pink-600 font-normal">Early Play</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    setActivePortal('parent');
                    setActivePage('assessment-quiz');
                  }}
                  className="p-3.5 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-all flex flex-col items-center gap-1 shadow-xs"
                >
                  <span className="text-2xl">👦</span>
                  <span>5 – 7 Years</span>
                  <span className="text-[10px] text-amber-600 font-normal">Cognitive</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    setActivePortal('parent');
                    setActivePage('assessment-quiz');
                  }}
                  className="p-3.5 rounded-2xl bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 transition-all flex flex-col items-center gap-1 shadow-xs"
                >
                  <span className="text-2xl">🎓</span>
                  <span>7 – 10 Years</span>
                  <span className="text-[10px] text-teal-600 font-normal">STEM Talent</span>
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setActivePortal('parent');
                  setActivePage('assessment-quiz');
                }}
                className={`w-full py-4 ${activeConfig.cardRadius} font-extrabold text-xs shadow-lg transition-all flex items-center justify-center gap-2 ${activeConfig.buttonPrimary}`}
              >
                <span>Take 15-Min Free Skill Quiz Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS NUMBER COUNTERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" amount={0.3}>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-pink-600">
                <AnimatedCounter to={28400} suffix="+" />
              </div>
              <p className="text-xs font-semibold text-slate-500">Children Evaluated</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-600">
                <AnimatedCounter to={98} suffix="%" />
              </div>
              <p className="text-xs font-semibold text-slate-500">Diagnostic Accuracy</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-600">
                <AnimatedCounter to={150} suffix="+" />
              </div>
              <p className="text-xs font-semibold text-slate-500">Partner Schools</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-teal-600">
                <AnimatedCounter to={450} suffix="+" />
              </div>
              <p className="text-xs font-semibold text-slate-500">Certified Educators</p>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 2: HOW IT WORKS STEP-BY-STEP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-2">
          <span className={`px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
            Scientific 4-Step Process
          </span>
          <h2 className={`text-3xl font-extrabold ${activeConfig.headingFont}`}>
            How Talent Discovery Works
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StaggerItem direction="up">
            <motion.div 
              whileHover={{ y: -6 }}
              className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-3 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between`}
            >
              <div className="space-y-3">
                <span className="text-3xl font-extrabold text-pink-500">01</span>
                <h3 className="font-bold text-slate-900 text-base">1. Interactive Skill Quiz</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Parents complete observational questions evaluating play behavior and logic.</p>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="up">
            <motion.div 
              whileHover={{ y: -6 }}
              className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-3 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between`}
            >
              <div className="space-y-3">
                <span className="text-3xl font-extrabold text-purple-500">02</span>
                <h3 className="font-bold text-slate-900 text-base">2. Expert Diagnostic Report</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Receive detailed score gauges for Cognitive, Motor, Creative, and EQ skills.</p>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="up">
            <motion.div 
              whileHover={{ y: -6 }}
              className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-3 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between`}
            >
              <div className="space-y-3">
                <span className="text-3xl font-extrabold text-amber-500">03</span>
                <h3 className="font-bold text-slate-900 text-base">3. Match Nearby Schools</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Connect with accredited schools offering specialized tinkering & sensory labs.</p>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="up">
            <motion.div 
              whileHover={{ y: -6 }}
              className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-3 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between`}
            >
              <div className="space-y-3">
                <span className="text-3xl font-extrabold text-teal-500">04</span>
                <h3 className="font-bold text-slate-900 text-base">4. Certified Mentorship</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Weekly sessions with certified skill teachers and pediatric psychologists.</p>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* SECTION 3: AGE-WISE PLANS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <ScrollReveal direction="up" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className={`text-3xl font-extrabold ${activeConfig.headingFont}`}>
              Age-based Skill Identification Programs
            </h2>
            <p className="text-xs text-slate-500 mt-1">Tailored developmental milestones for early childhood growth.</p>
          </div>
          <button
            onClick={() => setActivePage('age-plans')}
            className={`px-5 py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonSecondary} hover:scale-105 transition-all`}
          >
            Explore All Age Plans →
          </button>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ageGroupPlansData.map((plan, idx) => (
            <StaggerItem key={idx} direction="scale">
              <motion.div 
                whileHover={{ y: -8 }}
                className={`p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between h-full`}
              >
                <div className="space-y-4">
                  <span className="px-3 py-1 bg-pink-100 text-pink-900 rounded-full font-bold text-xs inline-block">
                    {plan.ageGroup}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900">{plan.badge}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{plan.tagline}</p>

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

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActivePortal('parent');
                    setActivePage('parent-register');
                  }}
                  className={`w-full py-3 mt-4 ${activeConfig.cardRadius} text-xs font-extrabold transition-all ${activeConfig.buttonPrimary}`}
                >
                  Enroll Child in {plan.ageGroup}
                </motion.button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* SECTION 4: NEARBY SCHOOLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <ScrollReveal direction="up" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className={`text-3xl font-extrabold ${activeConfig.headingFont}`}>
              Empaneled Partner Schools
            </h2>
            <p className="text-xs text-slate-500">Equipped with specialized sensory observation labs & robotics studios.</p>
          </div>
          <button
            onClick={() => setActivePage('nearby-schools')}
            className={`px-5 py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonSecondary} hover:scale-105 transition-all`}
          >
            Find Nearby Schools →
          </button>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {schoolsData.map((sch) => (
            <StaggerItem key={sch.id} direction="up">
              <motion.div 
                whileHover={{ y: -6 }}
                className={`bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} overflow-hidden shadow-sm hover:shadow-lg transition-all space-y-4`}
              >
                <div className="relative h-44 overflow-hidden group">
                  <motion.img 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={sch.image} 
                    alt={sch.name} 
                    className="w-full h-full object-cover" 
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-amber-400 text-slate-950 shadow-xs">
                    ⭐ {sch.rating} ({sch.reviewsCount})
                  </span>
                </div>
                <div className="p-4 pt-0 space-y-2 text-xs">
                  <h3 className="font-extrabold text-slate-900 text-base">{sch.name}</h3>
                  <p className="text-slate-500">{sch.area}, {sch.city}</p>
                  <span className="text-[10px] text-pink-600 font-bold block">{sch.accreditation}</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale" amount={0.3}>
          <div className={`p-10 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.gradientBg} text-white text-center space-y-6 shadow-2xl relative overflow-hidden`}>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Give Your Child the Gift of Early Skill Identification
            </h2>
            <p className="text-slate-100 max-w-xl mx-auto text-sm">
              Join 28,400+ parents who unlocked their child's natural talents through scientific observational assessments.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActivePortal('parent');
                setActivePage('assessment-quiz');
              }}
              className={`px-8 py-4 bg-white text-slate-950 font-extrabold ${activeConfig.cardRadius} shadow-xl hover:bg-slate-100 transition-all inline-flex items-center gap-2 text-sm`}
            >
              <span>Start Free Skill Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
