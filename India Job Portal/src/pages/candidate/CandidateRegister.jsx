import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { CheckCircle2, ArrowRight, ArrowLeft, Upload, User, Briefcase, GraduationCap } from 'lucide-react';

export const CandidateRegister = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: 'Vikramaditya Verma',
    email: 'vikram.verma@example.com',
    phone: '+91 98765 43210',
    education: 'B.Tech in Computer Science (IIT Madras)',
    experienceYears: '5.5 Years',
    skills: 'React, Node.js, TypeScript, PostgreSQL',
    preferredCities: 'Bengaluru, Hyderabad, Remote',
    noticePeriod: '15 Days / Serving Notice',
    expectedSalary: '₹28 LPA'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {!isSuccess ? (
        <div className={`p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} shadow-2xl space-y-6`}>
          <div className="text-center space-y-1">
            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
              Step {step} of 4 • Candidate Registration
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900">Create Candidate Profile</h2>
            <p className="text-xs text-slate-500">Zero placement fees for job seekers</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setIsSuccess(true); }} className="space-y-6">
            
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">1. Personal & Contact Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Legal Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number (WhatsApp Enabled)</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" required />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">2. Education & Experience</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Highest Qualification</label>
                    <input type="text" name="education" value={formData.education} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Total Experience</label>
                    <input type="text" name="experienceYears" value={formData.experienceYears} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Key Technical Skills (Comma separated)</label>
                    <input type="text" name="skills" value={formData.skills} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">3. Job Preferences & Resume Upload</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Locations</label>
                    <input type="text" name="preferredCities" value={formData.preferredCities} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Expected CTC (LPA)</label>
                    <input type="text" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Notice Period</label>
                    <input type="text" name="noticePeriod" value={formData.noticePeriod} onChange={handleChange} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">4. Review Candidate Details</h3>
                <div className="p-4 bg-slate-50 rounded-xl text-xs space-y-2">
                  <div className="flex justify-between"><span className="text-slate-500">Name:</span> <strong className="text-slate-900">{formData.fullName}</strong></div>
                  <div className="flex justify-between"><span className="text-slate-500">Education:</span> <strong className="text-slate-900">{formData.education}</strong></div>
                  <div className="flex justify-between"><span className="text-slate-500">Notice Period:</span> <strong className="text-emerald-700">{formData.noticePeriod}</strong></div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="px-4 py-2.5 rounded-xl text-xs font-bold border border-slate-300 text-slate-700 flex items-center gap-1">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : <div />}

              {step < 4 ? (
                <button type="button" onClick={() => setStep(step + 1)} className={`px-6 py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}>
                  Continue →
                </button>
              ) : (
                <button type="submit" className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-lg">
                  Submit Candidate Profile
                </button>
              )}
            </div>

          </form>
        </div>
      ) : (
        <div className={`p-8 bg-white ${activeConfig.cardRadius} text-center space-y-6 shadow-2xl`}>
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h2 className="text-2xl font-extrabold text-slate-900">Registration Complete!</h2>
          <p className="text-xs text-slate-500">Welcome, {formData.fullName}. Your profile is 92% complete.</p>
          <button
            onClick={() => {
              setActivePortal('candidate');
              setActivePage('candidate-dashboard');
            }}
            className={`px-8 py-3.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}
          >
            Open Candidate Dashboard →
          </button>
        </div>
      )}
    </div>
  );
};
