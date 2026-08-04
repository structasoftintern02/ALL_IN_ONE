import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { agePrograms } from '../../data/talentData';
import { useTheme } from '../../context/ThemeContext';
import { CheckCircle2, ArrowRight, Clock, Target, ChevronDown } from 'lucide-react';

export const AgePrograms = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const [activeTab, setActiveTab] = useState(agePrograms[0].id);

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900" id="age-programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <SectionHeader
          badge="🌱 Age-wise Development Programs"
          title={<>Tailored Programs for <span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>Every Milestone</span></>}
          subtitle="Children develop distinct cognitive and physical capabilities at different ages. Our programs match your child's exact developmental stage."
        />

        {/* Program Age Tabs */}
        <div className="flex flex-wrap gap-3 justify-center">
          {agePrograms.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActiveTab(prog.id)}
              className={`px-6 py-3 ${activeConfig.cardRadius} text-sm font-extrabold transition-all flex items-center gap-2 ${
                activeTab === prog.id
                  ? `${activeConfig.buttonPrimary}`
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>{prog.icon}</span>
              <span>{prog.ageRange}</span>
            </button>
          ))}
        </div>

        {/* Active Program Card Showcase */}
        <AnimatePresence mode="wait">
          {agePrograms.filter(p => p.id === activeTab).map((prog) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className={`p-6 sm:p-10 ${activeConfig.cardRadius} ${prog.bgColor} border ${prog.borderColor} shadow-xl relative overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left Info Column */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 ${activeConfig.cardRadius} bg-gradient-to-br ${prog.color} flex items-center justify-center text-3xl shadow-md text-white`}>
                      {prog.icon}
                    </div>
                    <div>
                      <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full text-white bg-gradient-to-r ${prog.color}`}>
                        {prog.badge}
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">{prog.title}</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold">{prog.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs font-extrabold text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
                      <Clock className="w-3.5 h-3.5 text-purple-500" />
                      <span>Duration: {prog.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
                      <Target className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Focus: {prog.focus}</span>
                    </div>
                  </div>

                  {/* Learning Outcomes */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">Key Learning Outcomes</h4>
                    <ul className="space-y-2">
                      {prog.outcomes.map((out, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setActivePage('how-it-works')}
                    className={`w-full py-3.5 ${activeConfig.cardRadius} text-white font-extrabold text-sm flex items-center justify-center gap-2 ${activeConfig.buttonPrimary}`}
                  >
                    <span>Start {prog.ageRange} Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right Modules Grid */}
                <div className="lg:col-span-7 space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Assessment Modules Included ({prog.modules.length})
                  </h4>
                  <div className="space-y-3">
                    {prog.modules.map((mod, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`p-4 ${activeConfig.cardRadius} bg-white dark:bg-slate-800 border border-white/60 dark:border-slate-700 shadow-sm flex items-start gap-3.5 hover:shadow-md transition-all`}
                      >
                        <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${prog.color} text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          0{idx + 1}
                        </div>
                        <div>
                          <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">{mod.name}</h5>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">{mod.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* All 3 Age Cards Quick Overview */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.08}>
          {agePrograms.map((p) => (
            <StaggerItem key={p.id} direction="up">
              <motion.div
                whileHover={{ y: -6 }}
                onClick={() => setActiveTab(p.id)}
                className={`p-6 ${activeConfig.cardRadius} bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl transition-all cursor-pointer ${
                  activeTab === p.id ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{p.icon}</span>
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full text-white bg-gradient-to-r ${p.color}`}>
                    {p.ageRange}
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white mb-1">{p.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{p.subtitle}</p>
                <div className="text-xs text-purple-600 dark:text-purple-400 font-extrabold flex items-center gap-1">
                  <span>View 5 Modules</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
