import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { SidebarCandidate } from '../../components/layout/SidebarCandidate';
import { mockCandidateUser } from '../../data/candidatesData';
import { jobListingsData } from '../../data/jobsData';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/common/StaggerContainer';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';
import { 
  CheckCircle2, Clock, Briefcase, FileText, Calendar, Bell, ArrowRight, UserCheck, Sparkles 
} from 'lucide-react';

export const CandidateDashboard = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const candidate = mockCandidateUser;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      
      {/* Candidate Sidebar */}
      <SidebarCandidate activePage="candidate-dashboard" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      {/* Main Dashboard Canvas */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        
        {/* Welcome Banner */}
        <ScrollReveal direction="down" amount={0.1}>
          <div className={`p-5 sm:p-8 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.gradientBg} text-white space-y-4 shadow-xl relative overflow-hidden`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-white/10 text-xs font-bold border border-white/20">
                    Verified Candidate Profile
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-extrabold text-[11px]">
                    Notice: {candidate.noticePeriod}
                  </span>
                </div>
                <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                  Welcome Back, {candidate.name}!
                </h1>
                <p className="text-xs sm:text-sm text-slate-200">
                  {candidate.currentRole} • {candidate.currentLocation}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActivePage('candidate-profile')}
                  className="w-full sm:w-auto px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition-all"
                >
                  Update Resume ({candidate.resumeUpdated})
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Metric Widgets */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className={`p-5 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-2`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Profile Completion</span>
              <div className="text-2xl font-extrabold text-slate-900">
                <AnimatedCounter to={candidate.profileCompletionScore} suffix="%" />
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: '0%' }}
                  animate={{ width: `${candidate.profileCompletionScore}%` }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-emerald-500 rounded-full" 
                />
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className={`p-5 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-2`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Applied Applications</span>
              <div className="text-2xl font-extrabold text-emerald-600">{candidate.appliedJobs.length} Active</div>
              <span className="text-[11px] text-slate-500">1 Interview Scheduled</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className={`p-5 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-2`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Next Scheduled Interview</span>
              <div className="text-base font-extrabold text-amber-600">04 Aug 2026</div>
              <span className="text-[11px] text-slate-500">Razorpay • System Design Round</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className={`p-5 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-2`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Expected CTC Target</span>
              <div className="text-2xl font-extrabold text-slate-900">{candidate.expectedSalary}</div>
              <span className="text-[11px] text-emerald-600 font-semibold">+40% Hike over current</span>
            </motion.div>
          </StaggerItem>

        </StaggerContainer>

        {/* Grid: Applied History + Recommended Jobs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Applied Jobs History */}
          <ScrollReveal direction="left" className={`lg:col-span-7 bg-white ${activeConfig.cardRadius} border border-slate-200 p-5 sm:p-6 space-y-4 shadow-sm`}>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-sm">Recent Job Applications</h3>
              <button 
                onClick={() => setActivePage('candidate-history')}
                className="text-xs font-bold text-emerald-600 hover:underline"
              >
                View History →
              </button>
            </div>

            <div className="space-y-3">
              {candidate.appliedJobs.map((app) => (
                <motion.div 
                  key={app.id} 
                  whileHover={{ x: 4 }}
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs transition-all"
                >
                  <div>
                    <h4 className="font-bold text-slate-900">{app.title}</h4>
                    <span className="text-slate-500 text-[11px]">{app.company} • Applied {app.appliedDate}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px]">
                    {app.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Recommended Jobs */}
          <ScrollReveal direction="right" className={`lg:col-span-5 bg-white ${activeConfig.cardRadius} border border-slate-200 p-5 sm:p-6 space-y-4 shadow-sm`}>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-sm">Recommended for Your Skills</h3>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                AI Match
              </span>
            </div>

            <div className="space-y-3">
              {jobListingsData.slice(0, 2).map((job) => (
                <motion.div 
                  key={job.id} 
                  whileHover={{ x: 4 }}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs transition-all"
                >
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{job.title}</span>
                    <span className="text-emerald-600">{job.salaryText}</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">{job.company} • {job.city}</p>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActivePage('job-search')}
                    className="w-full py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-[11px] font-bold"
                  >
                    Quick Apply
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

        </div>

      </div>

    </div>
  );
};
