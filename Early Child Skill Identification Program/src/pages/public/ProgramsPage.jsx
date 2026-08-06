import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ageGroupPlansData } from '../../data/programsData';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/common/StaggerContainer';
import { ArrowRight, CheckCircle2, Filter, Sparkles } from 'lucide-react';

export const ProgramsPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all'); // 'all' | '3 – 5 Years' | '5 – 7 Years' | '7 – 10 Years'

  const allPrograms = ageGroupPlansData.flatMap(plan => 
    plan.programs.map(p => ({ ...p, ageGroup: plan.ageGroup, planBadge: plan.badge, planTagline: plan.tagline }))
  );

  const filteredPrograms = selectedAgeGroup === 'all' 
    ? allPrograms 
    : allPrograms.filter(p => p.ageGroup === selectedAgeGroup);

  const currentPlanInfo = selectedAgeGroup !== 'all' 
    ? ageGroupPlansData.find(plan => plan.ageGroup === selectedAgeGroup) 
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* HEADER SECTION */}
      <ScrollReveal direction="down" className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Skill Catalog & Age Plans
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.headingFont}`}>
          Age-wise Programs
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          Tailored milestone frameworks and diagnostic skill identification modules for children aged 3 to 10 years.
        </p>

        {/* AGE GROUP FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setSelectedAgeGroup('all')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              selectedAgeGroup === 'all' 
                ? `${activeConfig.buttonPrimary}` 
                : 'bg-white text-slate-700 border border-slate-200 shadow-xs hover:bg-slate-50'
            }`}
          >
            🌟 All Programs ({allPrograms.length})
          </motion.button>

          {ageGroupPlansData.map((plan, idx) => {
            const isSelected = selectedAgeGroup === plan.ageGroup;
            return (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedAgeGroup(plan.ageGroup)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  isSelected 
                    ? `${activeConfig.buttonPrimary}` 
                    : 'bg-white text-slate-700 border border-slate-200 shadow-xs hover:bg-slate-50'
                }`}
              >
                {plan.ageGroup}
              </motion.button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* SELECTED AGE SUITE BANNER (If specific age selected) */}
      {currentPlanInfo && (
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 bg-gradient-to-r ${activeConfig.gradientBg} text-white rounded-2xl shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`}
        >
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 bg-white/20 rounded-full inline-block">
              {currentPlanInfo.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold">{currentPlanInfo.ageGroup} Milestone Framework</h2>
            <p className="text-xs text-slate-100">{currentPlanInfo.tagline}</p>
          </div>
          <button
            onClick={() => {
              setActivePortal('parent');
              setActivePage('parent-register');
            }}
            className="px-5 py-2.5 bg-white text-slate-950 font-extrabold text-xs rounded-xl shadow-md hover:bg-slate-100 transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Enroll Child in {currentPlanInfo.ageGroup}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      {/* PROGRAM CARDS GRID */}
      <AnimatePresence mode="wait">
        <motion.div key={selectedAgeGroup} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => (
              <StaggerItem key={prog.id} direction="scale">
                <motion.div 
                  whileHover={{ y: -6 }}
                  className={`bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-6 space-y-4 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{prog.icon}</span>
                      <div className="flex flex-wrap items-center gap-1.5 justify-end">
                        <span className="px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-900 font-bold text-[10px]">
                          ⏱️ {prog.duration}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 font-bold text-[10px]">
                          {prog.ageGroup}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-pink-600 uppercase tracking-wider block mb-1">
                        {prog.category}
                      </span>
                      <h3 className="font-extrabold text-slate-900 text-base">{prog.title}</h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">{prog.description}</p>
                    
                    {/* Targeted Skills Count Summary */}
                    {prog.skills && (
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">
                          Targeted Skills:
                        </span>
                        <span className="px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200/80 rounded-lg font-extrabold text-xs flex items-center gap-1 shadow-2xs">
                          ✨ {prog.skills.length} Skills Assessed
                        </span>
                      </div>
                    )}

                    <div className="space-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
                      {prog.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{b}</span>
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
                    className={`w-full py-2.5 mt-4 ${activeConfig.cardRadius} text-xs font-extrabold transition-all ${activeConfig.buttonPrimary}`}
                  >
                    Enroll Child in Program
                  </motion.button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
