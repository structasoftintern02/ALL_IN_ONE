import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { SidebarSchool } from '../../components/layout/SidebarSchool';
import { schoolsData } from '../../data/schoolsData';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/common/StaggerContainer';
import { Building2, Users, CheckCircle2, Award } from 'lucide-react';

export const SchoolDashboard = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const school = schoolsData[0];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarSchool activePage="school-dashboard" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <ScrollReveal direction="down" amount={0.1}>
          <div className={`p-5 sm:p-8 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.gradientBg} text-white space-y-4 shadow-xl`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-0.5 rounded-full bg-white/10 text-xs font-bold border border-white/20">
                  CBSE Affiliated Partner School
                </span>
                <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight mt-1">
                  {school.name}
                </h1>
                <p className="text-xs sm:text-sm text-slate-200">{school.city} • {school.accreditation}</p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActivePage('school-profile')} 
                className="w-full sm:w-auto px-4 py-2.5 bg-white text-slate-950 font-extrabold text-xs rounded-xl shadow-md"
              >
                Edit Infrastructure Gallery
              </motion.button>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs">
          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-1">
              <span className="text-slate-400 font-bold uppercase">Enrolled Students</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">140 Kids</div>
              <span className="text-emerald-600 font-bold">Ages 3 to 10 Years</span>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-1">
              <span className="text-slate-400 font-bold uppercase">Empaneled Skill Teachers</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">8 Educators</div>
              <span className="text-slate-500">Pedagogical Certified</span>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </div>
  );
};
