import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { SidebarAdmin } from '../../components/layout/SidebarAdmin';
import { mockAdminData } from '../../data/adminData';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/common/StaggerContainer';
import { 
  Users, Building2, ShieldCheck, Award, ArrowUpRight, CheckCircle2 
} from 'lucide-react';

export const AdminDashboard = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const m = mockAdminData.platformStats || {};

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarAdmin activePage="admin-dashboard" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <ScrollReveal direction="down" amount={0.1}>
          <div className={`p-5 sm:p-8 ${activeConfig.cardRadius} bg-slate-900 text-white space-y-4 shadow-xl`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold">
                  Platform Governance & Verifications
                </span>
                <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight mt-1">
                  Early Child Skill Platform Governance
                </h1>
                <p className="text-xs sm:text-sm text-slate-300">National Diagnostic Registry for Children 3 to 10 Years</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <motion.button 
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActivePage('admin-verify-teacher')} 
                  className="px-4 py-2.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-extrabold text-xs rounded-xl shadow-md"
                >
                  Audit Teachers ({m.pendingTeacherVerifications || 18} Pending)
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs">
          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-1">
              <span className="text-slate-400 font-bold uppercase">Enrolled Children</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{m.totalEnrolledChildren || '28,400+'}</div>
              <span className="text-emerald-600 font-bold">+12% this month</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-1">
              <span className="text-slate-400 font-bold uppercase">Empaneled Schools</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">{m.partnerSchools || '340+'}</div>
              <span className="text-slate-500">CBSE Affiliated</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-1">
              <span className="text-slate-400 font-bold uppercase">Certified Skill Teachers</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-600">{m.certifiedTeachers || '1,200+'}</div>
              <span className="text-purple-600 font-bold">Pedagogical Verified</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-1">
              <span className="text-slate-400 font-bold uppercase">Assessments Completed</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-pink-600">{m.monthlyAssessmentsCompleted || '4,280'}</div>
              <span className="text-pink-600 font-bold">Diagnostics Generated</span>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </div>
  );
};
