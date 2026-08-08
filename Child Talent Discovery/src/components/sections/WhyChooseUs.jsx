import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
import { 
  Award, Users, BookOpen, TrendingUp, Shield, Clock, 
  Brain, Target, Sparkles, Zap, ShieldCheck, HeartHandshake, Star, CheckCircle, Lightbulb
} from 'lucide-react';

const ICON_MAP = {
  Award,
  Users,
  BookOpen,
  TrendingUp,
  Shield,
  Clock,
  Brain,
  Target,
  Sparkles,
  Zap,
  ShieldCheck,
  HeartHandshake,
  Star,
  CheckCircle,
  Lightbulb
};

const defaultCards = [
  {
    id: 'wc-1',
    iconName: 'Award',
    emoji: '🏆',
    title: 'Scientifically Backed Assessments',
    desc: 'Our assessments are designed by child psychologists and education experts using globally recognized frameworks like Howard Gardner\'s Multiple Intelligences theory.',
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50 dark:bg-violet-950/30',
    borderColor: 'border-violet-200 dark:border-violet-900',
  },
  {
    id: 'wc-2',
    iconName: 'Users',
    emoji: '👨‍👩‍👧‍👦',
    title: 'Trusted by 10,000+ Families',
    desc: 'Thousands of parents across India trust our platform to discover and nurture their children\'s hidden talents, with a 98% satisfaction rate.',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    borderColor: 'border-blue-200 dark:border-blue-900',
  },
  {
    id: 'wc-3',
    iconName: 'BookOpen',
    emoji: '📚',
    title: 'Personalized Learning Plans',
    desc: 'Every child receives a tailored development roadmap with specific activity recommendations, book lists, and hobby suggestions based on their unique profile.',
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    borderColor: 'border-emerald-200 dark:border-emerald-900',
  },
  {
    id: 'wc-4',
    iconName: 'TrendingUp',
    emoji: '📈',
    title: 'Track Growth Over Time',
    desc: 'Monitor your child\'s progress with detailed reports and milestone tracking. See how their skills evolve and celebrate every achievement along the way.',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    borderColor: 'border-orange-200 dark:border-orange-900',
  },
  {
    id: 'wc-5',
    iconName: 'Shield',
    emoji: '🔒',
    title: '100% Safe & Private',
    desc: 'Your child\'s data is encrypted and completely confidential. We never share personal information with third parties. Your privacy is our top priority.',
    color: 'from-teal-500 to-cyan-600',
    bgColor: 'bg-teal-50 dark:bg-teal-950/30',
    borderColor: 'border-teal-200 dark:border-teal-900',
  },
  {
    id: 'wc-6',
    iconName: 'Clock',
    emoji: '⏰',
    title: 'Quick & Easy Process',
    desc: 'Complete the assessment in just 15-20 minutes from the comfort of your home. Get instant, detailed results with actionable insights — no waiting required.',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50 dark:bg-pink-950/30',
    borderColor: 'border-pink-200 dark:border-pink-900',
  },
];

export const WhyChooseUs = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const dataContext = useData();
  const homeCms = dataContext?.homeCms;
  const cmsData = homeCms?.whyChooseUsCms;

  const badge = cmsData?.badge || '⭐ Why Choose Us';
  const rawTitle = cmsData?.title || 'The Smartest Choice for Your Child\'s Future';
  const highlightText = cmsData?.highlightText || 'Child\'s Future';
  const subtitle = cmsData?.subtitle || 'We combine science, technology, and care to deliver the most accurate and actionable talent discovery experience for your child.';
  const buttonText = cmsData?.buttonText || 'Learn More About Us →';
  const cards = (cmsData?.cards && cmsData.cards.length > 0) ? cmsData.cards : defaultCards;
  const isVisible = cmsData?.visibility?.section !== false;

  if (!isVisible) return null;

  // Format title with gradient text for highlightText if present
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
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {(cmsData?.visibility?.header !== false) && (
          <SectionHeader
            badge={badge}
            title={titleNode}
            subtitle={subtitle}
          />
        )}

        {(cmsData?.visibility?.cardsList !== false) && (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {cards.map((card, i) => {
              const IconComponent = ICON_MAP[card.iconName] || ICON_MAP[card.icon] || Award;
              const cardBg = card.bgColor || 'bg-slate-50 dark:bg-slate-800/40';
              const cardBorder = card.borderColor || 'border-slate-200 dark:border-slate-800';
              const cardColor = card.color || 'from-indigo-500 to-purple-600';

              return (
                <StaggerItem key={card.id || i} direction="up">
                  <motion.div
                    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                    className={`p-6 ${activeConfig.cardRadius} border ${cardBg} ${cardBorder} h-full transition-all`}
                  >
                    <div className={`w-12 h-12 ${activeConfig.cardRadius} bg-gradient-to-br ${cardColor} flex items-center justify-center mb-4 shadow-md text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {card.emoji && <div className="text-2xl mb-2">{card.emoji}</div>}
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{card.desc}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        )}

        {(cmsData?.visibility?.ctaButton !== false) && (
          <div className="text-center">
            <button
              onClick={() => setActivePage('about')}
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
