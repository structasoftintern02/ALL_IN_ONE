import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, VARIATIONS } from '../context/ThemeContext';
import { countriesData } from '../data/pricingData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { CheckCircle2, ArrowRight, ArrowLeft, Building, User, Lock, Globe, Sparkles } from 'lucide-react';

export const Registration = ({ setActivePage }) => {
  const { variation, activeConfig } = useTheme();

  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: 'Alex Rivera',
    email: 'alex.rivera@fintechsaas.com',
    phone: '+1 555 019 2834',
    companyName: 'AeroPulse Global Tech Ltd',
    industry: 'E-Commerce & SaaS',
    country: 'United States',
    estimatedMonthlyVolume: '25,000 - 50,000 Messages',
    password: '••••••••••••'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFinish = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      
      {!isSuccess ? (
        <ScrollReveal direction="scale" amount={0.1} className={`p-8 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} shadow-2xl space-y-6`}>
          
          <div className="text-center space-y-2">
            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
              Step {step} of 3 • 14-Day Free Access
            </span>
            <h2 className={`text-2xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
              Register Your Business Workspace
            </h2>
            <p className="text-xs text-slate-500">Instant Meta Cloud API Onboarding</p>
          </div>

          <form onSubmit={handleFinish} className="space-y-6">
            <AnimatePresence mode="wait">
              {/* Step 1: Personal & Account */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-gray-800 pb-2">
                    1. Admin User Information
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Legal Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                        required
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">WhatsApp Phone Number (For Verification)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Company & Country */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-gray-800 pb-2">
                    2. Business & Country Profile
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Company / Brand Name</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Industry Sector</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                      >
                        <option value="E-Commerce & SaaS">E-Commerce & Retail</option>
                        <option value="Real Estate">Real Estate & Construction</option>
                        <option value="Education & EdTech">Education & EdTech</option>
                        <option value="FinTech & Banking">FinTech & Financial Services</option>
                        <option value="Healthcare & Clinic">Healthcare & Clinics</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Country Location</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                      >
                        {countriesData.map(c => (
                          <option key={c.code} value={c.name}>{c.flag} {c.name} ({c.currency})</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Est. Monthly Message Volume</label>
                      <select
                        name="estimatedMonthlyVolume"
                        value={formData.estimatedMonthlyVolume}
                        onChange={handleChange}
                        className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                      >
                        <option value="1,000 - 10,000 Messages">1,000 - 10,000 Messages/mo</option>
                        <option value="25,000 - 50,000 Messages">25,000 - 50,000 Messages/mo</option>
                        <option value="100,000+ Messages">100,000+ Enterprise Messages/mo</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Password & Review */}
              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-gray-800 pb-2">
                    3. Password & Workspace Review
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Create Secure Password</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                        required
                      />
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-gray-800 rounded-2xl space-y-2 text-xs border border-slate-200 dark:border-gray-700">
                      <div className="flex justify-between"><span className="text-slate-400">Admin Name:</span> <strong className="text-slate-900 dark:text-white">{formData.fullName}</strong></div>
                      <div className="flex justify-between"><span className="text-slate-400">Business:</span> <strong className="text-slate-900 dark:text-white">{formData.companyName}</strong></div>
                      <div className="flex justify-between"><span className="text-slate-400">Country:</span> <strong className="text-emerald-500 font-bold">{formData.country}</strong></div>
                      <div className="flex justify-between"><span className="text-slate-400">Target Plan:</span> <strong className="text-slate-900 dark:text-white">14-Day Free Professional Access</strong></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-gray-800">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold border border-slate-300 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-800 flex items-center gap-1.5 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : <div />}

              {step < 3 ? (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className={`px-6 py-2.5 ${activeConfig.cardRadius} text-xs font-bold transition-all flex items-center gap-1.5 ${activeConfig.buttonPrimary}`}
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Complete Workspace Setup</span>
                </motion.button>
              )}
            </div>

          </form>

        </ScrollReveal>
      ) : (
        /* Registration Success Screen */
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`p-8 ${activeConfig.cardBg} ${activeConfig.cardRadius} border border-slate-200 dark:border-gray-800 text-center space-y-6 shadow-2xl`}
        >
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-500 flex items-center justify-center mx-auto text-3xl animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold">
              WORKSPACE CREATED SUCCESSFULLY
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Welcome to WhatsApp AI CRM, {formData.fullName}!
            </h2>
            <p className="text-xs text-slate-500">
              Your 14-day free professional trial for <strong className="text-slate-900 dark:text-white font-bold">{formData.companyName}</strong> is active.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActivePage('dashboard')}
              className={`px-8 py-3.5 ${activeConfig.cardRadius} text-xs font-extrabold transition-all shadow-lg ${activeConfig.buttonPrimary}`}
            >
              Launch CRM Dashboard →
            </motion.button>
          </div>
        </motion.div>
      )}

    </div>
  );
};
