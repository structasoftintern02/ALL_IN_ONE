import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { ScrollReveal } from '../common/ScrollReveal';
import { useTheme } from '../../context/ThemeContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutSection = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <SectionHeader
          badge="🔬 Scientific Approach"
          title={<>The Science of <span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>Child Talent Profiling</span></>}
          subtitle="Our play-based methodology is built upon Howard Gardner's Multiple Intelligences framework, Montessori observational standards, and pediatric cognitive psychology."
        />

        {/* Feature Grid Banner */}
        <ScrollReveal direction="up">
          <div className={`bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 text-white ${activeConfig.cardRadius} p-8 lg:p-12 shadow-2xl relative overflow-hidden`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-extrabold text-amber-300 border border-white/20">
                  ✨ Play-Based Observation System
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  No Exams. No Pressure. Pure Playful Discovery. 🎈
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Traditional schooling evaluates children using rigid exam benchmarks. Our system observes children during natural home play — analyzing how they solve spatial puzzles, express emotions, build Lego structures, and respond to music.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setActivePage('report-preview')}
                    className={`px-6 py-3.5 ${activeConfig.cardRadius} text-slate-900 font-extrabold text-xs bg-white hover:bg-rose-50 transition-all flex items-center gap-2 shadow-lg`}
                  >
                    <span>Explore Sample Talent Report</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Gardner\'s 8 Intelligences mapped', '100% Home play-based tasks',
                  'Sensory learning style profiling', 'Visual spatial & logic benchmarks',
                  'Divergent creative expression score', 'Motor dexterity & rhythm timing',
                  'Emotional regulation indicators', '3-Year personalized learning roadmap'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200 glass p-3 rounded-2xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
