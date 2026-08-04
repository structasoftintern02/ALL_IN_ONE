import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ageGroupPlansData } from '../../data/programsData';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const AgeWisePlansPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const selectedPlan = ageGroupPlansData[activeTab];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <ScrollReveal direction="down" className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Milestone Framework
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.headingFont}`}>
          Age-wise Skill Development Plans
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Targeted observational diagnostics for 3-5 Yrs, 5-7 Yrs, and 7-10 Yrs milestones.
        </p>

        <div className="flex justify-center gap-2 pt-4">
          {ageGroupPlansData.map((plan, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === idx ? `${activeConfig.buttonPrimary}` : 'bg-white text-slate-700 border border-slate-200 shadow-xs'
              }`}
            >
              {plan.ageGroup}
            </motion.button>
          ))}
        </div>
      </ScrollReveal>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6 max-w-4xl mx-auto"
        >
          <div className="border-b border-slate-100 pb-4 space-y-1">
            <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">{selectedPlan.badge}</span>
            <h2 className="text-2xl font-extrabold text-slate-900">{selectedPlan.ageGroup} Program Suite</h2>
            <p className="text-xs text-slate-500">{selectedPlan.tagline}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {selectedPlan.programs.map((p) => (
              <motion.div 
                key={p.id} 
                whileHover={{ y: -4 }}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs shadow-xs transition-all"
              >
                <div className="flex justify-between items-start font-extrabold text-slate-900 text-sm">
                  <span>{p.icon} {p.title}</span>
                  <span className="text-pink-600 text-[11px] font-bold">{p.duration}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{p.description}</p>
                <div className="space-y-1 pt-2 border-t border-slate-200">
                  {p.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-[11px] text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setActivePortal('parent');
              setActivePage('parent-register');
            }}
            className={`w-full py-3.5 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary}`}
          >
            Enroll Child in {selectedPlan.ageGroup} Plan →
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
