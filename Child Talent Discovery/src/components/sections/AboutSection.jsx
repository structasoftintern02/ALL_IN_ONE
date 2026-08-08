import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { ScrollReveal } from '../common/ScrollReveal';
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const defaultChecklist = [
  'Gardner\'s 8 Intelligences mapped', '100% Home play-based tasks',
  'Sensory learning style profiling', 'Visual spatial & logic benchmarks',
  'Divergent creative expression score', 'Motor dexterity & rhythm timing',
  'Emotional regulation indicators', '3-Year personalized learning roadmap'
];

export const AboutSection = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const dataContext = useData();
  const homeCms = dataContext?.homeCms;
  const cmsData = homeCms?.ourMethodologyCms;

  const badge = cmsData?.badge || '🔬 Scientific Approach';
  const rawTitle = cmsData?.title || 'The Science of Child Talent Profiling';
  const highlightText = cmsData?.highlightText || 'Child Talent Profiling';
  const subtitle = cmsData?.subtitle || 'Our play-based methodology is built upon Howard Gardner\'s Multiple Intelligences framework, Montessori observational standards, and pediatric cognitive psychology.';
  const bannerBadge = cmsData?.bannerBadge || '✨ Play-Based Observation System';
  const bannerTitle = cmsData?.bannerTitle || 'No Exams. No Pressure. Pure Playful Discovery. 🎈';
  const bannerDesc = cmsData?.bannerDesc || 'Traditional schooling evaluates children using rigid exam benchmarks. Our system observes children during natural home play — analyzing how they solve spatial puzzles, express emotions, build Lego structures, and respond to music.';
  const buttonText = cmsData?.buttonText || 'Explore Sample Talent Report →';
  const checklist = (cmsData?.checklist && cmsData.checklist.length > 0) ? cmsData.checklist : defaultChecklist;
  const isVisible = cmsData?.visibility?.section !== false;

  if (!isVisible) return null;

  let titleNode = rawTitle;
  if (highlightText && rawTitle.includes(highlightText)) {
    const parts = rawTitle.split(highlightText);
    titleNode = (
      <>
        {parts[0]}
        <span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>
          {highlightText}
        </span>
        {parts[1]}
      </>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {(cmsData?.visibility?.header !== false) && (
          <SectionHeader
            badge={badge}
            title={titleNode}
            subtitle={subtitle}
          />
        )}

        {/* Feature Grid Banner */}
        {(cmsData?.visibility?.banner !== false) && (
          <ScrollReveal direction="up">
            <div className={`bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 text-white ${activeConfig.cardRadius} p-8 lg:p-12 shadow-2xl relative overflow-hidden`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                
                <div className="space-y-4">
                  {bannerBadge && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-extrabold text-amber-300 border border-white/20">
                      {bannerBadge}
                    </div>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {bannerTitle}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {bannerDesc}
                  </p>
                  {(cmsData?.visibility?.button !== false) && (
                    <div className="pt-2">
                      <button
                        onClick={() => setActivePage('report-preview')}
                        className={`px-6 py-3.5 ${activeConfig.cardRadius} text-slate-900 font-extrabold text-xs bg-white hover:bg-rose-50 transition-all flex items-center gap-2 shadow-lg`}
                      >
                        <span>{buttonText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Checklist Grid */}
                {(cmsData?.visibility?.checklist !== false) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {checklist.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200 glass p-3 rounded-2xl border border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
};
