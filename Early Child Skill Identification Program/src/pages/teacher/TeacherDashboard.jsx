import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { SidebarTeacher } from '../../components/layout/SidebarTeacher';
import { skillTeachersData } from '../../data/teachersData';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/common/StaggerContainer';

export const TeacherDashboard = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const teacher = skillTeachersData[0];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarTeacher activePage="teacher-dashboard" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <ScrollReveal direction="down" amount={0.1}>
          <div className={`p-5 sm:p-8 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.gradientBg} text-white space-y-4 shadow-xl`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-0.5 rounded-full bg-white/10 text-xs font-bold border border-white/20">
                  Verified Skill Educator
                </span>
                <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight mt-1">
                  {teacher.name}
                </h1>
                <p className="text-xs sm:text-sm text-slate-200">{teacher.role} • {teacher.certifiedBy}</p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActivePage('teacher-cert-upload')} 
                className="w-full sm:w-auto px-4 py-2.5 bg-white text-slate-950 font-extrabold text-xs rounded-xl shadow-md"
              >
                Upload New Certification
              </motion.button>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs">
          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-1">
              <span className="text-slate-400 font-bold uppercase">Sessions Conducted This Month</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">42 Sessions</div>
              <span className="text-emerald-600 font-bold">⭐ 4.9 Parent Rating</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-1">
              <span className="text-slate-400 font-bold uppercase">Monthly Session Earnings</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">₹42,500</div>
              <span className="text-slate-500">Paid bi-weekly</span>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </div>
  );
};
