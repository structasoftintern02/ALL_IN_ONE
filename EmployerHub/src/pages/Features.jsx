import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/common/StaggerContainer';
import { 
  Briefcase, Target, GitMerge, Calendar, Database, BarChart3, Users, UserCheck, 
  CheckCircle2, ArrowRight, ShieldCheck 
} from 'lucide-react';

export const Features = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  const featuresList = [
    { title: 'Job Posting & Multi-Board Syndication', desc: 'Distribute your job openings to LinkedIn, Google Jobs, and 20+ partner job boards with 1-click.', icon: Briefcase },
    { title: 'Smart AI Candidate Matching', desc: 'Deep semantic parsing ranks incoming resumes with match scores based on tech stack and notice period.', icon: Target },
    { title: 'Visual Kanban ATS Pipeline', desc: 'Drag-and-drop candidate stages with automated stage transition email triggers.', icon: GitMerge },
    { title: 'Google Meet & Zoom Interview Scheduler', desc: 'Automated 1-click interview scheduling with calendar sync and video room links.', icon: Calendar },
    { title: '4.8M+ Verified Resume Database Search', desc: 'Search active tech, sales, and operations job seekers across India with advanced filters.', icon: Database },
    { title: 'Hiring Funnel & Channel Analytics', desc: 'Track time-to-hire, cost-per-hire, source effectiveness, and team hiring velocity.', icon: BarChart3 },
    { title: 'Team Collaboration & Interviewer Feedback', desc: 'Role-based access for hiring managers, scorecard evaluations, and internal candidate notes.', icon: Users },
    { title: 'Digital Onboarding & Document Vault', desc: 'Automated digital offer letters, document upload checklists, and employee directory creation.', icon: UserCheck }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <ScrollReveal direction="down" amount={0.1} className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Complete Recruitment Tech Architecture
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
          Recruitment & HRMS Features Built For Enterprise Scale
        </h1>
        <p className="text-slate-500 text-sm sm:text-base">
          Discover how EmployerHub streamlines talent acquisition for modern organizations.
        </p>
      </ScrollReveal>

      {/* Grid of 8 Features */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresList.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <StaggerItem key={idx} direction="scale">
              <motion.div whileHover={{ y: -6 }} className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4 shadow-sm hover:shadow-xl transition-all h-full">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{feat.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* CTA Section */}
      <ScrollReveal direction="scale" amount={0.2}>
        <div className={`p-10 ${activeConfig.cardRadius} ${activeConfig.gradientBg} text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl`}>
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-extrabold">Ready to Accelerate Your Technical Hiring?</h3>
            <p className="text-xs text-slate-300">Set up your employer workspace in under 2 minutes.</p>
          </div>
          <button
            onClick={() => setActivePage('register')}
            className={`px-8 py-3.5 ${activeConfig.cardRadius} text-xs font-extrabold transition-all shadow-lg ${activeConfig.buttonPrimary}`}
          >
            Post Job Now →
          </button>
        </div>
      </ScrollReveal>

    </div>
  );
};
