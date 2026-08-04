import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/common/StaggerContainer';
import { ShieldCheck, Target, Eye, Award, Users } from 'lucide-react';

export const AboutUsPage = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <ScrollReveal direction="down" className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Our Story & Vision
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.headingFont}`}>
          Building India's Most Trusted Recruitment Platform
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Empowering millions of job seekers and thousands of companies through smart verification and transparent hiring.
        </p>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StaggerItem direction="up">
          <motion.div whileHover={{ y: -6 }} className={`p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-3 shadow-sm hover:shadow-xl transition-all h-full`}>
            <Target className="w-8 h-8 text-emerald-600" />
            <h3 className="text-xl font-extrabold text-slate-900">Our Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Eliminate recruitment fraud and fake job postings by enforcing mandatory GST/CIN employer verification and Aadhaar candidate screening.
            </p>
          </motion.div>
        </StaggerItem>

        <StaggerItem direction="up">
          <motion.div whileHover={{ y: -6 }} className={`p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-3 shadow-sm hover:shadow-xl transition-all h-full`}>
            <Eye className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-extrabold text-slate-900">Our Vision</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Connect 10 Million+ Indian professionals with high-paying careers across Tier 1, Tier 2, and Tier 3 cities by 2028.
            </p>
          </motion.div>
        </StaggerItem>

        <StaggerItem direction="up">
          <motion.div whileHover={{ y: -6 }} className={`p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-3 shadow-sm hover:shadow-xl transition-all h-full`}>
            <Award className="w-8 h-8 text-amber-500" />
            <h3 className="text-xl font-extrabold text-slate-900">Core Values</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Zero placement fee for candidates, 100% data privacy compliance, and equal opportunity employment nationwide.
            </p>
          </motion.div>
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
};
