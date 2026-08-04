import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

export const ContactUsPage = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <ScrollReveal direction="down" className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          24/7 Support Desk
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.headingFont}`}>
          Get in Touch With Our Recruitment Team
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Have questions regarding employer job posting, candidate verification, or enterprise HRMS integration?
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <ScrollReveal direction="right" className={`lg:col-span-7 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-8 space-y-6 shadow-sm`}>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} 
                className="space-y-4"
              >
                <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">Send Inquiry</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
                    <input type="text" placeholder="Vikram Verma" className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500/20" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input type="email" placeholder="vikram@example.com" className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500/20" required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Message Detail</label>
                  <textarea rows={4} placeholder="Specify your requirement..." className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500/20" required />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className={`px-8 py-3 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}
                >
                  Send Message
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
                <h3 className="text-2xl font-extrabold text-slate-900">Message Received!</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">Our HR representative will get back to you within 24 hours.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>

        <ScrollReveal direction="left" className="lg:col-span-5 space-y-4">
          <div className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-3 shadow-sm`}>
            <h4 className="font-bold text-slate-900 text-sm">Headquarters</h4>
            <div className="space-y-2 text-xs text-slate-600">
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Outer Ring Road, Bellandur, Bengaluru 560103</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" /> 1800-108-JOBS (Toll Free)</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" /> support@indiajobs.pro</p>
            </div>
          </div>

          <div className="p-6 bg-slate-900 text-white rounded-3xl space-y-2">
            <h4 className="font-bold text-sm">Map Location Placeholder</h4>
            <div className="h-32 bg-slate-800 rounded-xl flex items-center justify-center text-xs text-slate-400 font-mono">
              [ Google Map Embed Visual Placeholder ]
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
