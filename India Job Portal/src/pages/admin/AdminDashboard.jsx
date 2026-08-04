import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { SidebarAdmin } from '../../components/layout/SidebarAdmin';
import { mockAdminData } from '../../data/adminData';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/common/StaggerContainer';
import { ShieldCheck, Building2, Users, Briefcase } from 'lucide-react';

export const AdminDashboard = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const m = mockAdminData.platformStats || {};

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarAdmin activePage="admin-dashboard" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <ScrollReveal direction="down" amount={0.1}>
          <div className={`p-5 sm:p-8 ${activeConfig.cardRadius} bg-slate-950 text-white space-y-4 shadow-xl`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold">
                  Platform Governance & Moderation
                </span>
                <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight mt-1">
                  India Job Portal Admin Console
                </h1>
                <p className="text-xs sm:text-sm text-slate-300">GST Verification & Verified Job Moderation Engine</p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActivePage('admin-verify-company')} 
                className="w-full sm:w-auto px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all"
              >
                Audit Companies ({m.pendingCompanyVerifications || 38} Pending)
              </motion.button>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs">
          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-1">
              <span className="text-slate-400 font-bold uppercase">Registered Candidates</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{m.totalCandidates || '4.8M+'}</div>
              <span className="text-emerald-600 font-bold">Verified Resumes</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-1">
              <span className="text-slate-400 font-bold uppercase">GST Employers</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">{m.verifiedCompanies || '18,200+'}</div>
              <span className="text-slate-500">Verified Corporate Accounts</span>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </div>
  );
};
