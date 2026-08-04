import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2 } from 'lucide-react';

export const ContactUs = () => {
  const { activeConfig } = useTheme();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      <ScrollReveal direction="down" amount={0.1} className="text-center max-w-2xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          24/7 Dedicated Employer Support Desk
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Contact Our Enterprise Sales & HR Team
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Have custom ATS integration requirements or need assistance choosing a hiring plan? We are here to help.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <ScrollReveal direction="right" className="lg:col-span-7 bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4 shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-gray-800 pb-2">
                Send Direct Inquiry
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Company Name</label>
                  <input type="text" required placeholder="TechCorp Solutions" className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Work Email</label>
                  <input type="email" required placeholder="hr@techcorp.in" className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea rows={4} required placeholder="Tell us about your upcoming hiring goals..." className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium" />
                </div>
              </div>

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary} flex items-center justify-center gap-2`}>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </motion.button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Received!</h3>
              <p className="text-xs text-slate-500">Our HR Solutions manager will call you back within 1 hour.</p>
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal direction="left" className="lg:col-span-5 space-y-4">
          <div className="p-6 bg-slate-900 text-white rounded-3xl space-y-3">
            <h4 className="font-bold text-sm">National Headquarters</h4>
            <p className="text-xs text-slate-400">Level 8, EmployerHub Tower, Outer Ring Road, Bengaluru 560103</p>
            <p className="text-xs text-blue-400 font-bold">Toll Free: +91 1800 420 9000</p>
          </div>
        </ScrollReveal>
      </div>

    </div>
  );
};
