import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { skillTeachersData } from '../../data/teachersData';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/common/StaggerContainer';
import { Star, Award, CheckCircle2 } from 'lucide-react';

export const SkillTeachersPage = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <ScrollReveal direction="down" className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Certified Educators
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.headingFont}`}>
          Certified Skill Teachers
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Trained specialists in motor control, phonics, robotics, and creative arts.
        </p>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillTeachersData.map((tch) => (
          <StaggerItem key={tch.id} direction="up">
            <motion.div 
              whileHover={{ y: -4 }}
              className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} flex flex-col sm:flex-row gap-4 items-center shadow-sm hover:shadow-lg transition-all`}
            >
              <img src={tch.photo} alt={tch.name} className="w-24 h-24 rounded-2xl object-cover flex-shrink-0" />
              <div className="space-y-2 text-xs text-center sm:text-left">
                <h3 className="text-base font-extrabold text-slate-900">{tch.name}</h3>
                <p className="text-pink-600 font-bold">{tch.role}</p>
                <span className="text-slate-500 block">{tch.experience} • Certified by {tch.certifiedBy}</span>
                <div className="flex items-center gap-2 justify-center sm:justify-start font-bold text-slate-900">
                  <span className="text-amber-500">⭐ {tch.rating}</span>
                  <span>•</span>
                  <span className="text-emerald-600">{tch.hourlyRate}</span>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};
