import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Building2, User, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export const EmployerRegistration = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    companyName: 'TechCorp Solutions India',
    industry: 'IT Services & Software',
    companySize: '250 - 500 Employees',
    gstin: '29ABCDE1234F1Z5',
    adminName: 'Neha Gupta',
    workEmail: 'neha.gupta@techcorp.in',
    mobile: '+91 98765 43210',
    location: 'Bengaluru, Karnataka',
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
        <ScrollReveal direction="scale" amount={0.1} className={`p-8 bg-white dark:bg-gray-900 ${activeConfig.cardRadius} border border-slate-200 dark:border-gray-800 shadow-2xl space-y-6`}>
          
          <div className="text-center space-y-2">
            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
              Step {step} of 3 • Employer Workspace Setup
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Register Employer Account</h2>
            <p className="text-xs text-slate-500">Post jobs & access 4.8M+ verified candidate resumes</p>
          </div>

          <form onSubmit={handleFinish} className="space-y-6">
            <AnimatePresence mode="wait">
              {/* Step 1: Company Profile */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }} className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-gray-800 pb-2">
                    1. Company Entity Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Company Registered Name</label>
                      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium" required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Industry</label>
                      <input type="text" name="industry" value={formData.industry} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium" required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Company Employee Count</label>
                      <select name="companySize" value={formData.companySize} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium">
                        <option value="1 - 20 Employees">1 - 20 Employees (Startup)</option>
                        <option value="20 - 100 Employees">20 - 100 Employees (Mid-size)</option>
                        <option value="250 - 500 Employees">250 - 500 Employees (Enterprise)</option>
                        <option value="1000+ Employees">1000+ Employees (Large Scale)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">GSTIN Number (Optional)</label>
                      <input type="text" name="gstin" value={formData.gstin} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium uppercase" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Admin HR Contact */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }} className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-gray-800 pb-2">
                    2. Primary HR Contact Info
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Admin Full Name</label>
                      <input type="text" name="adminName" value={formData.adminName} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium" required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Official Work Email</label>
                      <input type="email" name="workEmail" value={formData.workEmail} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium" required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Mobile Number</label>
                      <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium" required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Primary Office City</label>
                      <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium" required />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Password Review */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }} className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-gray-800 pb-2">
                    3. Security & Workspace Activation
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Account Password</label>
                      <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium" required />
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-gray-800 rounded-2xl border border-slate-200 dark:border-gray-700 space-y-2 text-xs">
                      <div className="flex justify-between"><span className="text-slate-400">Company:</span> <strong className="text-slate-900 dark:text-white">{formData.companyName}</strong></div>
                      <div className="flex justify-between"><span className="text-slate-400">Admin Email:</span> <strong className="text-slate-900 dark:text-white">{formData.workEmail}</strong></div>
                      <div className="flex justify-between"><span className="text-slate-400">Target Plan:</span> <strong className="text-emerald-500 font-bold">14-Day Free Growth HRMS Access</strong></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-gray-800">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="px-4 py-2.5 rounded-xl text-xs font-bold border border-slate-300 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-800 flex items-center gap-1.5">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : <div />}

              {step < 3 ? (
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="button" onClick={() => setStep(step + 1)} className={`px-6 py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary} flex items-center gap-1.5`}>
                  <span>Continue</span> <ArrowRight className="w-4 h-4" />
                </motion.button>
              ) : (
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit" className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Complete Workspace Setup
                </motion.button>
              )}
            </div>

          </form>

        </ScrollReveal>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className={`p-8 bg-white dark:bg-gray-900 ${activeConfig.cardRadius} border border-slate-200 dark:border-gray-800 text-center space-y-6 shadow-2xl`}>
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-500 flex items-center justify-center mx-auto text-3xl animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold">
              WORKSPACE CREATED
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Welcome, {formData.adminName}!</h2>
            <p className="text-xs text-slate-500">Your employer workspace for <strong className="text-slate-900 dark:text-white">{formData.companyName}</strong> is ready.</p>
          </div>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => setActivePage('dashboard')} className={`px-8 py-3.5 ${activeConfig.cardRadius} text-xs font-extrabold shadow-lg ${activeConfig.buttonPrimary}`}>
            Launch Employer Portal →
          </motion.button>
        </motion.div>
      )}

    </div>
  );
};
