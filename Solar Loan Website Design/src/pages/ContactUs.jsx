import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, CONCEPTS } from '../context/ThemeContext';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2, Calendar, ShieldCheck 
} from 'lucide-react';

export const ContactUs = ({ setActivePage }) => {
  const { concept, activeConfig } = useTheme();

  const [submitted, setSubmitted] = useState(false);
  const [showCallbackModal, setShowCallbackModal] = useState(false);

  const offices = [
    { city: 'Gurugram / Delhi NCR', address: 'Level 12, Green Energy Tower, Cyber City, Gurugram 122002', phone: '+91 124 4890 100', headquarter: true },
    { city: 'Mumbai', address: 'B Wing, 8th Floor, BKC Financial Hub, Bandra East, Mumbai 400051', phone: '+91 22 6109 200' },
    { city: 'Bengaluru', address: '4th Floor, CleanTech Innovation Park, Outer Ring Road, Bengaluru 560103', phone: '+91 80 4312 800' },
    { city: 'Hyderabad', address: 'Solar Hub Tower, HITEC City, Phase 2, Hyderabad 500081', phone: '+91 40 6710 300' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <ScrollReveal direction="down" amount={0.1} className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          24/7 Borrower Support Desk
        </span>
        <h1 className={`text-3xl sm:text-4xl font-extrabold text-slate-900 ${activeConfig.headingFont}`}>
          Get in Touch With Clean Energy Experts
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Have questions regarding bank loan sanction, vendor empanelement, or PM Surya Ghar subsidies? We are here to assist.
        </p>
      </ScrollReveal>

      {/* Main Grid: Form + Office Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Form */}
        <ScrollReveal direction="right" className={`lg:col-span-7 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-6 sm:p-8 space-y-6 shadow-sm`}>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Send Us a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="rajesh@example.com"
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Query Subject</label>
                    <select className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-teal-500">
                      <option>Sanction & Rate Inquiry</option>
                      <option>Document Upload Support</option>
                      <option>Disbursement Status</option>
                      <option>PM Surya Ghar Subsidy Support</option>
                      <option>Solar Installer EPC Partnering</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Message Detail</label>
                    <textarea
                      rows={4}
                      placeholder="Please specify your loan requirement, solar system capacity, or specific bank preference..."
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className={`w-full sm:w-auto px-8 py-3 ${activeConfig.cardRadius} text-xs font-bold transition-all flex items-center justify-center gap-2 ${activeConfig.buttonPrimary}`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </motion.button>

                  <button
                    type="button"
                    onClick={() => setShowCallbackModal(true)}
                    className="text-xs font-bold text-teal-700 hover:underline"
                  >
                    📞 Prefer a Phone Call? Schedule Callback
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
                <h3 className="text-2xl font-extrabold text-slate-900">Message Received!</h3>
                <p className="text-xs text-slate-600">
                  Our solar finance relationship manager will call you back within 30 minutes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-slate-100 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-200"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>

        {/* Office Directory & Map Placeholder */}
        <ScrollReveal direction="left" className="lg:col-span-5 space-y-6">
          
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900">Our National Offices</h3>
            <div className="space-y-3">
              {offices.map((off, idx) => (
                <div key={idx} className={`p-4 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-xs space-y-1`}>
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{off.city}</h4>
                    {off.headquarter && (
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                        Corporate HQ
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600">{off.address}</p>
                  <p className="text-xs text-teal-700 font-semibold">{off.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Google Map Embed Visual Placeholder */}
          <div className={`p-6 bg-slate-900 text-white ${activeConfig.cardRadius} space-y-3 relative overflow-hidden`}>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <h4 className="font-bold text-sm">Interactive Branch Map</h4>
            </div>
            <div className="h-40 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-center p-4">
              <span className="text-xs text-slate-400 font-mono">
                [ Google Maps API Embed Location Placeholder ]<br />
                Gurugram • BKC Mumbai • ORR Bengaluru • HITEC Hyderabad
              </span>
            </div>
          </div>

        </ScrollReveal>

      </div>

      {/* Schedule Callback Modal */}
      <AnimatePresence>
        {showCallbackModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 border border-slate-200 shadow-2xl"
            >
              <h3 className="text-lg font-bold text-slate-900">Schedule Priority Callback</h3>
              <p className="text-xs text-slate-500">Pick your preferred time for solar loan consultation.</p>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                  <input type="text" placeholder="Rajesh Sharma" className="w-full p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Time Slot</label>
                  <select className="w-full p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <option>Today (10:00 AM - 01:00 PM)</option>
                    <option>Today (02:00 PM - 06:00 PM)</option>
                    <option>Tomorrow Morning</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button onClick={() => setShowCallbackModal(false)} className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700">Cancel</button>
                <button onClick={() => { alert('Callback scheduled!'); setShowCallbackModal(false); }} className={`px-5 py-2 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}>Confirm Slot</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
