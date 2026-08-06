import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { skillCategories as staticSkillCategories } from '../../data/talentData';
import { useTheme } from '../../context/ThemeContext';
import { CheckCircle2, ArrowRight, X } from 'lucide-react';

const API_URL = 'http://localhost:5000/api/cms/child-talent';

export const SkillCategories = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const [cmsData, setCmsData] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      const res = await fetch(API_URL);
      if (res.ok) {
        const data = await res.json();
        if (data && data.skillsCms) {
          setCmsData(data.skillsCms);
        }
      }
    } catch (err) {
      console.log('Using fallback for Skills CMS');
    }
  };

  const skillCategories = cmsData?.skills || staticSkillCategories;
  const sectionBadge = cmsData?.badge || "🎨 10 Skill Domains";
  const sectionTitle = cmsData?.title || "Comprehensive Talent Categories";
  const sectionSubtitle = cmsData?.subtitle || "We map 10 core development areas to build a 360-degree cognitive and creative profile of your child. Click any category for details.";
  const ctaBtnText = cmsData?.ctaText || "See How These Skills Look in Talent Report →";
  const vis = cmsData?.visibility || {};

  const renderTitle = (titleText) => {
    if (!titleText) return null;
    const words = titleText.split(' ');
    if (words.length <= 1) return <span>{titleText}</span>;
    const lastWords = words.length >= 3 ? words.slice(-2).join(' ') : words.pop();
    const firstPart = words.length >= 3 ? words.slice(0, -2).join(' ') : words.join(' ');
    return (
      <>
        {firstPart} <span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>{lastWords}</span>
      </>
    );
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50" id="skill-categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {(vis.sectionBadge !== false || vis.sectionTitle !== false || vis.sectionSubtitle !== false) && (
          <SectionHeader
            badge={vis.sectionBadge !== false ? sectionBadge : undefined}
            title={vis.sectionTitle !== false ? renderTitle(sectionTitle) : undefined}
            subtitle={vis.sectionSubtitle !== false ? sectionSubtitle : undefined}
          />
        )}

        {/* 10 Skill Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" staggerDelay={0.05}>
          {skillCategories.map((skill) => (
            <StaggerItem key={skill.id} direction="up">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedSkill(skill)}
                className={`p-5 ${activeConfig.cardRadius} bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between h-full`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-12 h-12 ${activeConfig.cardRadius} bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl shadow-md text-white group-hover:scale-110 transition-transform`}>
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      Explore
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-1.5">{skill.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3 line-clamp-2">{skill.desc}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400">
                  <span>View Metrics & Tasks</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Selected Skill Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className={`w-full max-w-lg bg-white dark:bg-slate-800 ${activeConfig.cardRadius} shadow-2xl p-6 sm:p-8 relative border border-slate-200 dark:border-slate-700 space-y-5`}
              >
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3">
                  <div className={`w-14 h-14 ${activeConfig.cardRadius} bg-gradient-to-br ${selectedSkill.color} flex items-center justify-center text-3xl text-white shadow-md`}>
                    {selectedSkill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{selectedSkill.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Domain Assessment Metrics</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedSkill.desc}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">Key Observational Metrics</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.keyMetrics.map((m, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-xs font-extrabold border border-purple-200 dark:border-purple-800">
                        🎯 {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">Recommended Nurturing Activities</h4>
                  <ul className="space-y-1.5">
                    {selectedSkill.recommendedActivities.map((act, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedSkill(null);
                    setActivePage('how-it-works');
                  }}
                  className={`w-full py-3.5 ${activeConfig.cardRadius} text-white font-extrabold text-sm ${activeConfig.buttonPrimary}`}
                >
                  Start Assessment for {selectedSkill.title}
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {(vis.ctaButton !== false) && (
          <div className="text-center">
            <button
              onClick={() => setActivePage('report-preview')}
              className={`px-8 py-4 ${activeConfig.cardRadius} text-white font-extrabold text-sm shadow-lg ${activeConfig.buttonPrimary}`}
            >
              {ctaBtnText}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
