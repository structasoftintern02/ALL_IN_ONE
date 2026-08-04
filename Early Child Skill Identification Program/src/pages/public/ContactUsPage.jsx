import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export const ContactUsPage = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <ScrollReveal direction="down" className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Parent Helpline
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.headingFont}`}>
          Contact Our Child Development Team
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Reach out for assessment inquiries, school partnerships, or teacher certification enrollment.
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
                className="space-y-4 text-xs"
              >
                <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-3">Inquiry Form</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Parent Full Name</label>
                    <input type="text" placeholder="Priya Verma" className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500/20" required />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Child's Age</label>
                    <input type="text" placeholder="5.5 Years" className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500/20" required />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Message Detail</label>
                  <textarea rows={4} placeholder="Specify your query..." className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500/20" required />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className={`px-8 py-3 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}
                >
                  Send Inquiry
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
                <h3 className="text-2xl font-extrabold text-slate-900">Inquiry Received!</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">Our pediatric advisor will contact you within 24 hours.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>

        <ScrollReveal direction="left" className="lg:col-span-5 space-y-4 text-xs">
          <div className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 shadow-sm`}>
            <h4 className="font-bold text-slate-900 text-sm">Main Learning Hub</h4>
            <div className="space-y-3 text-slate-600">
              <p className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-pink-500 flex-shrink-0" /> Indiranagar 100ft Road, Bengaluru 560038</p>
              <p className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-pink-500 flex-shrink-0" /> 1800-KID-SKILLS (Toll Free)</p>
              <p className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-pink-500 flex-shrink-0" /> hello@earlyskills.edu.in</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
