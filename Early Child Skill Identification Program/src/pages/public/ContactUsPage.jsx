import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export const ContactUsPage = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Parent Helpline
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.headingFont}`}>
          Contact Our Child Development Team
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Reach out for assessment inquiries, school partnerships, or teacher certification enrollment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className={`lg:col-span-7 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-8 space-y-6 shadow-sm`}>
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-xs">
              <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-3">Inquiry Form</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Parent Full Name</label>
                  <input type="text" placeholder="Priya Verma" className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Child's Age</label>
                  <input type="text" placeholder="5.5 Years" className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
                </div>
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Message Detail</label>
                <textarea rows={4} placeholder="Specify your query..." className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
              </div>
              <button type="submit" className={`px-8 py-3 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}>
                Send Inquiry
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">Inquiry Received!</h3>
              <p className="text-xs text-slate-500">Our pediatric advisor will contact you within 24 hours.</p>
            </div>
          )}
        </div>

        <div className="lg:col-span-5 space-y-4 text-xs">
          <div className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-3`}>
            <h4 className="font-bold text-slate-900 text-sm">Main Learning Hub</h4>
            <div className="space-y-2 text-slate-600">
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-pink-500" /> Indiranagar 100ft Road, Bengaluru 560038</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-pink-500" /> 1800-KID-SKILLS (Toll Free)</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-pink-500" /> hello@earlyskills.edu.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
