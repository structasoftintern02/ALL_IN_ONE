import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
import { CheckCircle2, ChevronRight, X, Sparkles, Award, BarChart2 } from 'lucide-react';

const defaultSkillDomains = [
  {
    id: 'cognitive',
    title: 'Cognitive Skills',
    icon: '🧠',
    color: 'from-purple-500 to-indigo-600',
    overallScore: 92,
    subSkills: [
      { name: 'Memory', score: 98 },
      { name: 'Pattern Recognition', score: 96 },
      { name: 'Spatial Reasoning', score: 95 },
      { name: 'Logical Thinking', score: 91 },
      { name: 'Decision Making', score: 89 },
      { name: 'Attention & Focus', score: 86 },
      { name: 'Processing Speed', score: 84 },
      { name: 'Problem Understanding', score: 82 }
    ]
  },
  {
    id: 'communication',
    title: 'Communication Skills',
    icon: '💬',
    color: 'from-blue-500 to-cyan-600',
    overallScore: 89,
    subSkills: [
      { name: 'Vocabulary', score: 95 },
      { name: 'Listening Skills', score: 92 },
      { name: 'Storytelling', score: 91 },
      { name: 'Expressive Language', score: 88 },
      { name: 'Public Speaking', score: 85 },
      { name: 'Non-verbal Cues', score: 83 },
      { name: 'Articulation', score: 80 }
    ]
  },
  {
    id: 'creativity',
    title: 'Creativity & Innovation',
    icon: '🎨',
    color: 'from-rose-500 to-pink-600',
    overallScore: 96,
    subSkills: [
      { name: 'Imagination', score: 99 },
      { name: 'Original Thinking', score: 98 },
      { name: 'Drawing & Design', score: 97 },
      { name: 'Idea Generation', score: 94 },
      { name: 'Curiosity', score: 93 },
      { name: 'Aesthetic Sense', score: 90 },
      { name: 'Flexible Thinking', score: 88 }
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership & Initiative',
    icon: '👑',
    color: 'from-amber-500 to-orange-600',
    overallScore: 91,
    subSkills: [
      { name: 'Team Guidance', score: 96 },
      { name: 'Self-Drive', score: 93 },
      { name: 'Responsibility', score: 91 },
      { name: 'Delegation', score: 88 },
      { name: 'Decision Ownership', score: 86 },
      { name: 'Conflict Resolution', score: 84 },
      { name: 'Strategic Vision', score: 82 }
    ]
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    icon: '🧩',
    color: 'from-emerald-500 to-teal-600',
    overallScore: 94,
    subSkills: [
      { name: 'Analytical Thinking', score: 97 },
      { name: 'Root Cause Analysis', score: 95 },
      { name: 'Resourcefulness', score: 93 },
      { name: 'Hypothesis Testing', score: 90 },
      { name: 'Trial & Error Persistence', score: 87 },
      { name: 'Systematic Execution', score: 85 }
    ]
  },
  {
    id: 'emotional',
    title: 'Emotional Intelligence',
    icon: '❤️',
    color: 'from-red-500 to-rose-600',
    overallScore: 88,
    subSkills: [
      { name: 'Empathy', score: 94 },
      { name: 'Self-Awareness', score: 91 },
      { name: 'Emotional Regulation', score: 89 },
      { name: 'Stress Tolerance', score: 86 },
      { name: 'Mood Recognition', score: 84 },
      { name: 'Compassion', score: 83 }
    ]
  },
  {
    id: 'motor',
    title: 'Motor Skills',
    icon: '🏃',
    color: 'from-teal-500 to-emerald-600',
    overallScore: 90,
    subSkills: [
      { name: 'Hand-Eye Coordination', score: 96 },
      { name: 'Fine Motor Control', score: 93 },
      { name: 'Balance & Agility', score: 90 },
      { name: 'Physical Reflexes', score: 87 },
      { name: 'Spatial Awareness', score: 85 },
      { name: 'Dexterity', score: 83 }
    ]
  },
  {
    id: 'social',
    title: 'Social Skills',
    icon: '🤝',
    color: 'from-indigo-500 to-purple-600',
    overallScore: 93,
    subSkills: [
      { name: 'Peer Collaboration', score: 97 },
      { name: 'Active Sharing', score: 95 },
      { name: 'Respecting Rules', score: 92 },
      { name: 'Inclusion & Kindness', score: 89 },
      { name: 'Group Dynamics', score: 86 },
      { name: 'Cultural Adaptability', score: 84 }
    ]
  },
  {
    id: 'stem',
    title: 'STEM Readiness',
    icon: '🔬',
    color: 'from-violet-500 to-purple-600',
    overallScore: 95,
    subSkills: [
      { name: 'Mathematical Intuition', score: 98 },
      { name: 'Scientific Observation', score: 96 },
      { name: 'Algorithmic Thinking', score: 94 },
      { name: 'Data Interpretation', score: 91 },
      { name: 'Technological Curiosity', score: 88 },
      { name: 'Experimentation', score: 86 }
    ]
  },
  {
    id: 'art-music',
    title: 'Art & Music',
    icon: '🎵',
    color: 'from-pink-500 to-rose-600',
    overallScore: 92,
    subSkills: [
      { name: 'Rhythm & Tempo Sensing', score: 97 },
      { name: 'Pitch & Tone Recognition', score: 94 },
      { name: 'Visual Color Harmony', score: 92 },
      { name: 'Musical Expression', score: 89 },
      { name: 'Tactile Crafting', score: 87 },
      { name: 'Auditory Memory', score: 85 }
    ]
  }
];

export const SkillCategories = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const dataContext = useData();
  const homeCms = dataContext?.homeCms;
  const cmsData = homeCms?.skillCategoriesCms || homeCms?.skillsCms;
  const [modalSkill, setModalSkill] = useState(null);

  const rawSkills = (cmsData?.skills && cmsData.skills.length > 0) ? cmsData.skills : defaultSkillDomains;
  const sectionBadge = cmsData?.badge || "🌳 10 Skill Domains";
  const sectionTitle = cmsData?.title || "Scientific Skill Assessment Report";
  const sectionSubtitle = cmsData?.subtitle || "Comprehensive talent evaluation across 10 core developmental domains. Highlighting top innate strengths for targeted guidance.";
  const vis = cmsData?.visibility || {};

  const isVisible = vis.section !== false;
  if (!isVisible) return null;

  const getStatusBadge = (score) => {
    if (score >= 90) return { label: 'Excellent', bg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' };
    if (score >= 80) return { label: 'Good', bg: 'bg-blue-500/20 text-blue-300 border-blue-500/30' };
    if (score >= 70) return { label: 'Average', bg: 'bg-amber-500/20 text-amber-300 border-amber-500/30' };
    return { label: 'Needs Improvement', bg: 'bg-rose-500/20 text-rose-300 border-rose-500/30' };
  };

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
    <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden" id="skill-categories">
      
      {/* Background glow decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">

        {(vis.sectionBadge !== false || vis.sectionTitle !== false || vis.sectionSubtitle !== false) && (
          <SectionHeader
            badge={vis.sectionBadge !== false ? sectionBadge : undefined}
            title={vis.sectionTitle !== false ? renderTitle(sectionTitle) : undefined}
            subtitle={vis.sectionSubtitle !== false ? sectionSubtitle : undefined}
          />
        )}

        {/* 10 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rawSkills.map((skillItem) => {
            const subSkillsList = skillItem.subSkills && skillItem.subSkills.length > 0 
              ? skillItem.subSkills 
              : (skillItem.keyMetrics || ['Memory', 'Pattern Recognition', 'Spatial Reasoning']).map(m => ({ name: m, score: Math.floor(Math.random() * 15) + 84 }));

            // Sort sub-skills by percentage (Highest -> Lowest)
            const sortedSubSkills = [...subSkillsList].sort((a, b) => b.score - a.score);
            const top3Strengths = sortedSubSkills.slice(0, 3);
            const status = getStatusBadge(skillItem.overallScore || 90);

            return (
              <motion.div
                key={skillItem.id || skillItem.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-purple-500/50 transition-all group"
              >
                <div>
                  {/* Card Top Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${skillItem.color || 'from-purple-500 to-indigo-600'} flex items-center justify-center text-2xl shadow-lg ring-2 ring-white/10 group-hover:scale-110 transition-transform`}>
                        {skillItem.icon || '🧠'}
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold text-white leading-tight">{skillItem.title}</h3>
                        <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border ${status.bg} mt-1`}>
                          {status.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Overall Score & Progress Bar */}
                  <div className="space-y-2 mb-5 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 font-extrabold uppercase tracking-wider text-[10px]">Overall Score</span>
                      <span className="text-base font-extrabold text-amber-400">{skillItem.overallScore || 90}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skillItem.overallScore || 90}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${activeConfig.gradientText || 'from-rose-500 to-purple-600'} rounded-full`}
                      />
                    </div>
                  </div>

                  {/* Top 3 Strengths Section */}
                  <div className="space-y-2.5 mb-5">
                    <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Top Strengths</span>
                    </div>
                    <div className="space-y-2">
                      {top3Strengths.map((sub, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-slate-950/40 border border-slate-800/50">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span className="font-extrabold text-slate-200">{sub.name}</span>
                          </div>
                          <span className="font-extrabold text-emerald-400">{sub.score}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setModalSkill({ ...skillItem, sortedSubSkills, status })}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/90 hover:bg-purple-600/30 text-purple-300 hover:text-white font-extrabold text-xs border border-slate-700/80 hover:border-purple-500/50 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>View Details ({sortedSubSkills.length} Sub-skills)</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Modal / Expandable View */}
        <AnimatePresence>
          {modalSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative space-y-6 overflow-hidden max-h-[90vh] flex flex-col"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${modalSkill.color || 'from-purple-500 to-indigo-600'} flex items-center justify-center text-3xl shadow-lg text-white ring-4 ring-white/10`}>
                      {modalSkill.icon || '🧠'}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-extrabold text-white">{modalSkill.title}</h3>
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${modalSkill.status.bg}`}>
                          {modalSkill.status.label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">Complete Sub-Skill Performance Breakdown</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setModalSkill(null)}
                    className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/60 hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Overall Progress Summary Bar */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-extrabold text-slate-400 uppercase tracking-wider text-[11px]">Domain Overall Score</span>
                    <span className="text-lg font-extrabold text-amber-400">{modalSkill.overallScore || 90}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      style={{ width: `${modalSkill.overallScore || 90}%` }}
                      className={`h-full bg-gradient-to-r ${activeConfig.gradientText || 'from-rose-500 to-purple-600'} rounded-full`}
                    />
                  </div>
                </div>

                {/* All Sub-Skills Dotted Leader Table */}
                <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-400 flex items-center gap-1.5 sticky top-0 bg-slate-900 py-1">
                    <BarChart2 className="w-4 h-4" />
                    <span>All Sub-Skills ({modalSkill.sortedSubSkills.length})</span>
                  </h4>

                  <div className="space-y-2.5">
                    {modalSkill.sortedSubSkills.map((sub, idx) => {
                      const subStatus = getStatusBadge(sub.score);
                      return (
                        <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-3 text-xs">
                          {/* Name */}
                          <span className="font-extrabold text-slate-200 min-w-[140px] sm:min-w-[180px]">{sub.name}</span>
                          
                          {/* Dotted Leader Line */}
                          <div className="flex-1 border-b border-dashed border-slate-800" />

                          {/* Percentage Score */}
                          <span className="font-extrabold text-amber-400 text-sm">{sub.score}%</span>

                          {/* Status Badge */}
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${subStatus.bg} hidden sm:inline-block`}>
                            {subStatus.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-2 border-t border-slate-800 flex gap-3">
                  <button
                    onClick={() => {
                      setModalSkill(null);
                      if (setActivePage) setActivePage('how-it-works');
                    }}
                    className={`w-full py-3.5 rounded-xl text-white font-extrabold text-sm ${activeConfig.buttonPrimary || 'bg-gradient-to-r from-rose-500 to-purple-600'}`}
                  >
                    Start Assessment for {modalSkill.title} →
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
