import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
import { 
  Brain, Target, Sparkles, HeartHandshake, Zap, ShieldCheck, 
  Award, Users, BookOpen, TrendingUp, Shield, Clock, Star, CheckCircle, Lightbulb
} from 'lucide-react';

const ICON_MAP = {
  Brain,
  Target,
  Sparkles,
  HeartHandshake,
  Zap,
  ShieldCheck,
  Award,
  Users,
  BookOpen,
  TrendingUp,
  Shield,
  Clock,
  Star,
  CheckCircle,
  Lightbulb
};

const defaultWhyCards = [
  {
    id: 'we-1',
    iconName: 'Brain',
    emoji: '🧠',
    title: '90% Brain Growth Happens Before Age 6',
    desc: 'Between ages 3 and 7, synaptic connections form at an astonishing rate of 1 million per second. Early skill identification captures this golden window.',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    borderColor: 'border-purple-200 dark:border-purple-900',
  },
  {
    id: 'we-2',
    iconName: 'Target',
    emoji: '🎯',
    title: 'Avoid One-Size-Fits-All Tuition',
    desc: 'Every child has distinct learning styles (Visual, Auditory, Kinaesthetic). Identifying natural strengths prevents wasting time and money on mismatched classes.',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50 dark:bg-rose-950/30',
    borderColor: 'border-rose-200 dark:border-rose-900',
  },
  {
    id: 'we-3',
    iconName: 'Sparkles',
    emoji: '✨',
    title: 'Nurture Natural Inclinations',
    desc: 'Whether your child is an intuitive STEM logic builder, a visual artist, or a natural group leader, early discovery allows talents to bloom effortlessly.',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    borderColor: 'border-amber-200 dark:border-amber-900',
  },
  {
    id: 'we-4',
    iconName: 'HeartHandshake',
    emoji: '🤝',
    title: 'Build Unshakable Self-Confidence',
    desc: 'Children excel when engaged in activities aligned with their natural abilities. Success builds intrinsic motivation and high self-esteem.',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    borderColor: 'border-emerald-200 dark:border-emerald-900',
  },
  {
    id: 'we-5',
    iconName: 'Zap',
    emoji: '⚡',
    title: 'Prevent Academic Stress & Burnout',
    desc: 'When learning matches natural cognitive style, studying becomes fun rather than a stressful chore. Homework friction drops significantly.',
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950/30',
    borderColor: 'border-cyan-200 dark:border-cyan-900',
  },
  {
    id: 'we-6',
    iconName: 'ShieldCheck',
    emoji: '🛡️',
    title: 'Actionable Parent Roadmap',
    desc: 'Receive clear, non-judgmental guidance on recommended toys, books, hobbies, and sports tailored precisely to your child\'s profile.',
    color: 'from-fuchsia-500 to-pink-600',
    bgColor: 'bg-fuchsia-50 dark:bg-fuchsia-950/30',
    borderColor: 'border-fuchsia-200 dark:border-fuchsia-900',
  },
];

export const WhyEarlyDiscovery = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const dataContext = useData();
  const homeCms = dataContext?.homeCms;
  const cmsData = homeCms?.whyEarlyDiscoveryCms;

  const badge = cmsData?.badge || '💡 Why Early Skill Identification Matters';
  const rawTitle = cmsData?.title || 'Why Discovering Talent Early Matters';
  const highlightText = cmsData?.highlightText || 'Early Matters';
  const subtitle = cmsData?.subtitle || 'Early child development isn\'t about creating pressure — it\'s about providing the right encouragement at the right time.';
  const buttonText = cmsData?.buttonText || 'Read Our Scientific Methodology →';
  const cards = (cmsData?.cards && cmsData.cards.length > 0) ? cmsData.cards : defaultWhyCards;
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
              const IconComponent = ICON_MAP[card.iconName] || ICON_MAP[card.icon] || Brain;
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
