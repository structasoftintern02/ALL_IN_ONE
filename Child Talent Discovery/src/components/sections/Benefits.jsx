import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { benefitsList } from '../../data/talentData';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Benefits = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        <SectionHeader
          badge="⭐ Key Benefits for Children & Parents"
          title={<>Transform Your Child's <span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>Learning Experience</span></>}
          subtitle="Empower your child with confidence and focus by nurturing their natural inclinations from an early age."
        />

        {/* 8 Benefits Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.06}>
          {benefitsList.map((item, i) => (
            <StaggerItem key={i} direction="up">
              <motion.div
                whileHover={{ y: -6 }}
                className={`p-6 ${activeConfig.cardRadius} bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 ${activeConfig.cardRadius} bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mb-4 shadow-md text-white`}>
                    {item.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-4 flex items-center gap-1 text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Validated Benefit</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center">
          <button
            onClick={() => setActivePage('programs')}
            className={`px-8 py-4 ${activeConfig.cardRadius} text-white font-extrabold text-sm shadow-lg ${activeConfig.buttonPrimary}`}
          >
            Choose Age Group & Start Assessment →
          </button>
        </div>

      </div>
    </section>
  );
};
