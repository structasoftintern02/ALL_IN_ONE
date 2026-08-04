import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sidebar } from '../components/layout/Sidebar';
import { mockCompany, mockJobs, mockCandidates, mockInterviews } from '../data/employerData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/common/StaggerContainer';
import { AnimatedCounter } from '../components/common/AnimatedCounter';
import { ChartWidgets } from '../components/ui/ChartWidgets';
import { 
  Briefcase, Users, GitMerge, Calendar, UserCheck, TrendingUp, Bell, 
  Sparkles, Plus, ArrowUpRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';

export const EmployerDashboard = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      
      {/* Sticky Desktop Sidebar */}
      <Sidebar activePage="dashboard" setActivePage={setActivePage} />

      {/* Main Dashboard Canvas */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        
        {/* Welcome Banner */}
        <ScrollReveal direction="down" amount={0.1}>
          <div className={`p-6 sm:p-8 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.gradientBg} text-white space-y-4 shadow-xl relative overflow-hidden`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-white/10 text-xs font-bold border border-white/20 backdrop-blur-md">
                    Verified Employer Account
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-extrabold text-[11px]">
                    Growth HRMS Plan Active
                  </span>
                </div>
                <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                  Welcome Back, {mockCompany.name}! ✨
                </h1>
                <p className="text-xs sm:text-sm text-slate-200">
                  Headquarters: <strong className="text-white font-semibold">{mockCompany.headquarters}</strong> • {mockCompany.teamSize}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActivePage('jobs')}
                  className="w-full sm:w-auto px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-all"
                >
                  + Post New Job Requirement
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActivePage('pipeline')}
                  className="w-full sm:w-auto px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs rounded-xl backdrop-blur-xs"
                >
                  View Kanban ATS Pipeline
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 6 Key Stat Cards */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          
          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 space-y-2 shadow-xs">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Active Jobs</span>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                <AnimatedCounter value={4} />
              </div>
              <span className="text-[10px] text-emerald-500 font-semibold">142 New Applicants</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 space-y-2 shadow-xs">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Total Applications</span>
              <div className="text-2xl font-extrabold text-blue-600">
                <AnimatedCounter value={599} />
              </div>
              <span className="text-[10px] text-blue-500 font-semibold">+24 Today</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 space-y-2 shadow-xs">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Shortlisted</span>
              <div className="text-2xl font-extrabold text-indigo-600">
                <AnimatedCounter value={53} />
              </div>
              <span className="text-[10px] text-indigo-500 font-semibold">AI Match Score &gt; 85%</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 space-y-2 shadow-xs">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Interviews</span>
              <div className="text-2xl font-extrabold text-purple-600">
                <AnimatedCounter value={13} />
              </div>
              <span className="text-[10px] text-purple-500 font-semibold">3 Scheduled Today</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 space-y-2 shadow-xs">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Offers Joined</span>
              <div className="text-2xl font-extrabold text-emerald-500">
                <AnimatedCounter value={14} />
              </div>
              <span className="text-[10px] text-emerald-500 font-semibold">100% Onboarding Rate</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 space-y-2 shadow-xs">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Resume Credits</span>
              <div className="text-2xl font-extrabold text-amber-500">
                <AnimatedCounter value={1450} suffix="/2000" />
              </div>
              <span className="text-[10px] text-amber-500 font-semibold">Renews in 18 days</span>
            </motion.div>
          </StaggerItem>

        </StaggerContainer>

        {/* Analytics SVG Charts Widget */}
        <ScrollReveal direction="up" amount={0.1}>
          <ChartWidgets />
        </ScrollReveal>

        {/* Active Jobs & Top Applicants List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Active Job Openings */}
          <ScrollReveal direction="right" className="lg:col-span-7 bg-white dark:bg-gray-900 p-6 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-gray-800 pb-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Active Job Openings</h3>
              <button onClick={() => setActivePage('jobs')} className="text-xs font-bold text-blue-600 hover:underline">
                View All Jobs →
              </button>
            </div>

            <div className="space-y-3">
              {mockJobs.slice(0, 3).map((job) => (
                <div key={job.id} className="p-4 bg-slate-50 dark:bg-gray-800/60 rounded-2xl border border-slate-200 dark:border-gray-700/60 flex items-center justify-between text-xs transition-all hover:border-blue-500/40">
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-900 dark:text-white">{job.title}</h4>
                    <span className="text-slate-500 text-[11px]">{job.department} • {job.location}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-blue-600 dark:text-blue-400 block">{job.applicantsCount} Candidates</span>
                    <span className="text-[10px] text-emerald-500 font-semibold">{job.shortlistedCount} Shortlisted</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Today's Interviews Widget */}
          <ScrollReveal direction="left" className="lg:col-span-5 bg-white dark:bg-gray-900 p-6 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-gray-800 pb-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Today's Scheduled Interviews</h3>
              <button onClick={() => setActivePage('interviews')} className="text-xs font-bold text-blue-600 hover:underline">
                View Calendar →
              </button>
            </div>

            <div className="space-y-3">
              {mockInterviews.map((int) => (
                <div key={int.id} className="p-3.5 bg-slate-50 dark:bg-gray-800/60 rounded-2xl border border-slate-200 dark:border-gray-700 text-xs space-y-1">
                  <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                    <span>{int.candidateName}</span>
                    <span className="text-blue-600 font-mono text-[10px]">{int.time}</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">{int.candidateRole}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>

      </div>

    </div>
  );
};
