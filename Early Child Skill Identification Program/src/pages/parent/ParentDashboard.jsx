import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { SidebarParent } from '../../components/layout/SidebarParent';
import { mockParentUser } from '../../data/parentData';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/common/StaggerContainer';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';
import { 
  Sparkles, Award, Calendar, BookOpen, ArrowRight, UserCheck, Heart 
} from 'lucide-react';

export const ParentDashboard = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const p = mockParentUser;
  const child = p.child;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      {/* Parent Sidebar */}
      <SidebarParent activePage="parent-dashboard" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      {/* Main Canvas */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        
        {/* Welcome Banner */}
        <ScrollReveal direction="down" amount={0.1}>
          <div className={`p-5 sm:p-8 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.gradientBg} text-white space-y-4 shadow-xl relative overflow-hidden`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-white/10 text-xs font-bold border border-white/20">
                    {p.parentName}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-300 text-slate-950 font-extrabold text-[11px]">
                    Child: {child.name} ({child.age})
                  </span>
                </div>
                <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                  Talent Diagnostic & Learning Portal
                </h1>
                <p className="text-xs sm:text-sm text-slate-100">
                  Enrolled Program: <strong className="text-white">{child.enrolledProgram}</strong> @ {child.schoolName}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActivePage('assessment-quiz')}
                  className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-pink-600 animate-spin" />
                  <span>Retake Skill Quiz</span>
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Metric Widgets with Animated Counter */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs">
          
          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className={`p-5 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-2`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Overall Progress Score</span>
              <div className="text-3xl font-extrabold text-pink-600">
                <AnimatedCounter to={child.overallProgressScore} suffix="%" />
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: '0%' }}
                  animate={{ width: `${child.overallProgressScore}%` }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-pink-500 rounded-full" 
                />
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className={`p-5 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-2`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Cognitive & Logic Aptitude</span>
              <div className="text-3xl font-extrabold text-purple-600">
                <AnimatedCounter to={child.skillScores.cognitiveLogic} suffix="%" />
              </div>
              <span className="text-[11px] text-emerald-600 font-bold">Top 3% Percentile</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className={`p-5 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-2`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Creative & Visual Arts</span>
              <div className="text-3xl font-extrabold text-pink-500">
                <AnimatedCounter to={child.skillScores.creativeArtistic} suffix="%" />
              </div>
              <span className="text-[11px] text-pink-600 font-bold">High Gifted Score</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className={`p-5 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-2`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Fine Motor Control</span>
              <div className="text-3xl font-extrabold text-amber-600">
                <AnimatedCounter to={child.skillScores.fineMotor} suffix="%" />
              </div>
              <span className="text-[11px] text-slate-500">Age-appropriate dexterity</span>
            </motion.div>
          </StaggerItem>

        </StaggerContainer>

        {/* Action Bar */}
        <ScrollReveal direction="up" amount={0.2}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-bold text-slate-800">Quick Diagnostic Controls:</span>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActivePage('skill-report')}
                className="px-4 py-2.5 bg-pink-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Award className="w-4 h-4" />
                <span>View Full Skill Report Card</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActivePage('enrollment-wizard')}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-purple-600" />
                <span>Enroll in STEM Track</span>
              </motion.button>
            </div>
          </div>
        </ScrollReveal>

        {/* Sessions & Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          <ScrollReveal direction="left" className={`lg:col-span-6 bg-white ${activeConfig.cardRadius} border border-slate-200 p-5 sm:p-6 space-y-4 shadow-sm text-xs`}>
            <h3 className="font-bold text-slate-900 text-sm">Upcoming Skill Sessions</h3>
            <div className="space-y-3">
              {child.upcomingSessions.map((s) => (
                <motion.div 
                  key={s.id} 
                  whileHover={{ x: 4 }}
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1 transition-all"
                >
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{s.topic}</span>
                    <span className="text-pink-600">{s.date}</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">Teacher: {s.teacher}</p>
                  <span className="text-[10px] text-slate-400 block">{s.location}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className={`lg:col-span-6 bg-white ${activeConfig.cardRadius} border border-slate-200 p-5 sm:p-6 space-y-4 shadow-sm text-xs`}>
            <h3 className="font-bold text-slate-900 text-sm">Expert Recommendations for Aarav</h3>
            <div className="space-y-2">
              {child.recommendations.map((rec, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ x: 4 }}
                  className="p-3 bg-pink-50/60 rounded-xl border border-pink-100 text-slate-800 flex items-start gap-2 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

        </div>

      </div>

    </div>
  );
};
