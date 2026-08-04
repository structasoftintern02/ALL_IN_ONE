import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme, CONCEPTS } from '../context/ThemeContext';
import { mockUserData } from '../data/dashboardData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/common/StaggerContainer';
import { 
  CheckCircle2, Clock, FileCheck, Phone, Mail, ShieldCheck, Download, Search, AlertCircle 
} from 'lucide-react';

export const TrackApplication = ({ setActivePage }) => {
  const { concept, activeConfig } = useTheme();

  const [searchId, setSearchId] = useState('SL-2026-88912');

  const timeline = mockUserData.trackingTimeline;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header & Application Lookup */}
      <ScrollReveal direction="down" amount={0.1} className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
            Real-Time Solar Credit Status
          </span>
          <h1 className={`text-3xl font-extrabold text-slate-900 mt-2 ${activeConfig.headingFont}`}>
            Track Solar Loan Application
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Application Reference: <strong className="text-slate-900 font-bold">{searchId}</strong>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="py-2.5 px-3 bg-white rounded-xl border border-slate-300 text-xs font-bold text-slate-800"
          />
          <button className={`px-4 py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}>
            Track
          </button>
        </div>
      </ScrollReveal>

      {/* Main Grid: Timeline + Loan Officer Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Timeline Visualization */}
        <ScrollReveal direction="right" className={`lg:col-span-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-6 sm:p-8 space-y-6 shadow-sm`}>
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="text-base font-bold text-slate-900">Application Lifecycle</h3>
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
              Stage 5 / 7 Ready
            </span>
          </div>

          <StaggerContainer className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-200">
            {timeline.map((step) => (
              <StaggerItem key={step.step} direction="right">
                <div className="relative flex items-start gap-4 pl-10">
                  {/* Node icon */}
                  <div className={`absolute left-0 top-0.5 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-xs transition-transform ${
                    step.completed 
                      ? 'bg-emerald-600 text-white' 
                      : step.step === 6 
                      ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-100 animate-pulse' 
                      : 'bg-slate-100 text-slate-400 border border-slate-200'
                  }`}>
                    {step.completed ? '✓' : step.step}
                  </div>

                  {/* Content Card */}
                  <motion.div whileHover={{ x: 4 }} className="flex-1 bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-bold text-slate-900 text-sm">{step.title}</h4>
                      <span className="text-[11px] text-slate-400 font-medium">{step.date}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.details}</p>

                    {step.step === 5 && step.completed && (
                      <div className="pt-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setActivePage('sanction')}
                          className="px-3.5 py-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-lg shadow-xs flex items-center gap-1.5 transition-all"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>View & Download Official Sanction Letter</span>
                        </motion.button>
                      </div>
                    )}
                  </motion.div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        {/* Right Info Sidebar */}
        <ScrollReveal direction="left" className="lg:col-span-4 space-y-6">
          
          {/* Officer Details */}
          <div className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 shadow-sm`}>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Assigned Credit Desk Officer</span>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white font-bold flex items-center justify-center text-base">
                VK
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Vikram K. Singhania</h4>
                <p className="text-xs text-slate-500">Chief Green Credit Officer, SBI</p>
              </div>
            </div>

            <div className="space-y-2 text-xs pt-3 border-t border-slate-100 text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-600" />
                <span>+91 98112 00412 (Ext: 402)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-600" />
                <span>vikram.singhania@sbi.co.in</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-6 bg-slate-900 text-white rounded-3xl space-y-4 shadow-xl">
            <h4 className="font-bold text-base">Need Assistance?</h4>
            <p className="text-xs text-slate-300">
              Our solar finance relationship officer can assist with DISCOM Net Metering grid paperwork.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActivePage('contact')}
              className="w-full py-2.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-300 transition-all"
            >
              Schedule Officer Callback
            </motion.button>
          </div>

        </ScrollReveal>

      </div>

    </div>
  );
};
