import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { schoolsData } from '../../data/schoolsData';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/common/StaggerContainer';
import { MapPin, Star } from 'lucide-react';

export const NearbySchoolsPage = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <ScrollReveal direction="down" className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Empaneled Partners
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.headingFont}`}>
          Discover Nearby Skill Partner Schools
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Schools equipped with sensory observation playrooms, tinkering robotics labs, and certified staff.
        </p>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {schoolsData.map((sch) => (
          <StaggerItem key={sch.id} direction="up">
            <motion.div 
              whileHover={{ y: -6 }}
              className={`bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} overflow-hidden shadow-sm hover:shadow-xl transition-all space-y-4 h-full flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="relative h-48 overflow-hidden group">
                  <motion.img 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={sch.image} 
                    alt={sch.name} 
                    className="w-full h-full object-cover" 
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-amber-400 text-slate-950 shadow-xs">
                    ⭐ {sch.rating} ({sch.reviewsCount})
                  </span>
                </div>
                <div className="p-6 pt-0 space-y-3 text-xs">
                  <h3 className="font-extrabold text-slate-900 text-base">{sch.name}</h3>
                  <p className="text-slate-500 flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-pink-500 flex-shrink-0" /> {sch.area}, {sch.city}</p>
                  <span className="text-[10px] text-pink-600 font-bold block">{sch.accreditation} • {sch.programsAvailable} Programs</span>
                </div>
              </div>
              <div className="p-6 pt-0">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => alert(`Viewing details of ${sch.name}`)} 
                  className={`w-full py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonSecondary}`}
                >
                  View Infrastructure & Labs →
                </motion.button>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};
