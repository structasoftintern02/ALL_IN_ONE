import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { benefitsList as defaultBenefits } from '../../data/talentData';
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Benefits = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const dataContext = useData();
  const homeCms = dataContext?.homeCms;
  const cmsData = homeCms?.keyBenefitsCms || homeCms?.benefitsCms;

  const badge = cmsData?.badge || "⭐ Key Benefits for Children & Parents";
  const rawTitle = cmsData?.title || "Transform Your Child's Learning Experience";
  const highlightText = cmsData?.highlightText || "Learning Experience";
  const subtitle = cmsData?.subtitle || "Empower your child with confidence and focus by nurturing their natural inclinations from an early age.";
  const buttonText = cmsData?.buttonText || "Choose Age Group & Start Assessment →";
  const benefits = (cmsData?.benefits && cmsData.benefits.length > 0) ? cmsData.benefits : defaultBenefits;
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
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {(cmsData?.visibility?.badge !== false || cmsData?.visibility?.title !== false || cmsData?.visibility?.subtitle !== false) && (
          <SectionHeader
            badge={cmsData?.visibility?.badge !== false ? badge : undefined}
            title={cmsData?.visibility?.title !== false ? titleNode : undefined}
            subtitle={cmsData?.visibility?.subtitle !== false ? subtitle : undefined}
          />
        )}

        {/* 8 Benefits Grid */}
        {(cmsData?.visibility?.benefitsList !== false) && (
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.06}>
            {benefits.map((item, i) => (
              <StaggerItem key={item.id || i} direction="up">
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`p-6 ${activeConfig.cardRadius} bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-12 h-12 ${activeConfig.cardRadius} bg-gradient-to-br ${item.color || 'from-purple-500 to-indigo-600'} flex items-center justify-center text-2xl mb-4 shadow-md text-white`}>
                      {item.icon}
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-4 flex items-center gap-1 text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.tag || "Validated Benefit"}</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        {(cmsData?.visibility?.button !== false) && (
          <div className="text-center">
            <button
              onClick={() => setActivePage('programs')}
              className={`px-8 py-4 ${activeConfig.cardRadius} text-white font-extrabold text-sm shadow-lg ${activeConfig.buttonPrimary}`}
            >
              {buttonText}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
