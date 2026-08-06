import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { sampleReportData as defaultReport } from '../../data/talentData';
import { useTheme } from '../../context/ThemeContext';
import { Award, CheckCircle2, AlertCircle, Sparkles, BookOpen, Download, Star } from 'lucide-react';

const API_URL = 'http://localhost:5000/api/cms/child-talent';

export const AssessmentPreview = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const [cmsData, setCmsData] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); // overview, domain-breakdown, learning-path

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      const res = await fetch(API_URL);
      if (res.ok) {
        const data = await res.json();
        if (data && data.sampleReportCms) {
          setCmsData(data.sampleReportCms);
        }
      }
    } catch (err) {
      console.log('Using fallback for Sample Report CMS');
    }
  };

  const report = cmsData ? { ...defaultReport, ...cmsData } : defaultReport;
  const sectionBadge = cmsData?.badge || "📊 Sample Assessment Report Preview";
  const sectionTitle = cmsData?.title || "Explore a Real Talent Discovery Report";
  const sectionSubtitle = cmsData?.subtitle || "Here is a live preview of the 12-page comprehensive talent report parents receive immediately after play assessment.";
  const vis = cmsData?.visibility || {};

  const renderTitle = (titleText) => {
    if (!titleText) return null;
    const words = titleText.split(' ');
    if (words.length <= 1) return <span>{titleText}</span>;
    const lastPart = words.length >= 3 ? words.slice(-3).join(' ') : words.pop();
    const firstPart = words.length >= 3 ? words.slice(0, -3).join(' ') : words.join(' ');
    return (
      <>
        {firstPart} <span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>{lastPart}</span>
      </>
    );
  };

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900" id="assessment-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {(vis.sectionBadge !== false || vis.sectionTitle !== false || vis.sectionSubtitle !== false) && (
          <SectionHeader
            badge={vis.sectionBadge !== false ? sectionBadge : undefined}
            title={vis.sectionTitle !== false ? renderTitle(sectionTitle) : undefined}
            subtitle={vis.sectionSubtitle !== false ? sectionSubtitle : undefined}
          />
        )}

        {/* Dashboard Preview Frame */}
        {(vis.reportCard !== false) && (
          <div className={`p-6 sm:p-10 ${activeConfig.cardRadius} bg-slate-900 text-white shadow-2xl border border-purple-900/50 relative overflow-hidden space-y-8`}>
            
            {/* Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 via-purple-500 to-amber-500 flex items-center justify-center font-extrabold text-xl shadow-md text-white">
                  {report.childInitials || 'AS'}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-extrabold text-white">{report.childName}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {report.verifiedBadgeText || 'Verified Profile'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-semibold">
                    Age: {report.age} • Assessed: {report.assessmentDate}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-800/60 text-right">
                  <div className="text-[10px] font-extrabold uppercase text-purple-300">Overall Potential</div>
                  <div className="text-xl font-extrabold text-amber-400">{report.overallScore} / 100</div>
                </div>
                <button
                  onClick={() => setActivePage('contact')}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-md"
                >
                  <Download className="w-4 h-4" /> {report.downloadButtonText || 'Download Sample PDF'}
                </button>
              </div>
            </div>

            {/* Archetype Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-900/60 via-slate-800 to-indigo-900/60 border border-purple-700/40 flex items-center gap-4">
              <div className="text-3xl">🧩</div>
              <div>
                <div className="text-xs font-extrabold text-purple-300 uppercase tracking-widest">{report.archetypeTitle || 'IDENTIFIED TALENT ARCHETYPE'}</div>
                <div className="text-base sm:text-lg font-extrabold text-white">{report.archetype}</div>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{report.summary}</p>
              </div>
            </div>

          {/* Report Tab Switcher */}
          <div className="flex gap-2 border-b border-slate-800 pb-2">
            {[
              { id: 'overview', label: '📊 Skill Scores Overview' },
              { id: 'domain-breakdown', label: '🌟 Strengths & Growth Areas' },
              { id: 'learning-path', label: '🎯 Recommended Activities & Path' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Report Content Panels */}
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {report.skills.map((skill, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                      <div className="flex items-center justify-between text-xs font-extrabold">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-amber-400 font-extrabold">{skill.score}% ({skill.percentile})</span>
                      </div>

                      {/* Progress Meter Bar */}
                      <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.score}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className={`h-full ${skill.color || 'bg-purple-500'} rounded-full`}
                        />
                      </div>

                      <div className="flex justify-between items-center text-[10px] text-slate-400 font-medium">
                        <span>Baseline Benchmark</span>
                        <span className="text-emerald-400 font-bold">Status: {skill.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'domain-breakdown' && (
              <motion.div
                key="domain-breakdown"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Strengths */}
                <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Top Identified Strengths</span>
                  </div>
                  <ul className="space-y-2">
                    {report.strengths.map((str, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-emerald-200">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Growth Areas */}
                <div className="p-5 rounded-2xl bg-amber-950/40 border border-amber-800/60 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm">
                    <AlertCircle className="w-5 h-5" />
                    <span>Areas for Gentle Development</span>
                  </div>
                  <ul className="space-y-2">
                    {report.growthAreas.map((grow, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-amber-200">
                        <span className="text-amber-400 font-bold">🌱</span>
                        <span>{grow}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'learning-path' && (
              <motion.div
                key="learning-path"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-4"
              >
                <h4 className="text-xs font-extrabold uppercase text-purple-300">Curated Weekly Activities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {report.recommendedActivities.map((act, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-amber-400">{act.type}</span>
                        <span className="text-[10px] text-slate-400 font-semibold">{act.duration}</span>
                      </div>
                      <p className="text-sm font-extrabold text-white">{act.title}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer note inside card */}
          <div className="text-center pt-4 border-t border-slate-800 text-xs text-slate-400">
            {report.footerPrivacyNote || "🔒 All assessments are 100% private, parent-guided, and based on observational play metrics."}
          </div>

        </div>
        )}

        {(vis.ctaButton !== false) && (
          <div className="text-center">
            <button
              onClick={() => setActivePage('how-it-works')}
              className={`px-8 py-4 ${activeConfig.cardRadius} text-white font-extrabold text-sm shadow-lg ${activeConfig.buttonPrimary}`}
            >
              <span>{report.ctaButtonText || "Get a Report Like This for Your Child →"}</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
