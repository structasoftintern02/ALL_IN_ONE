import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Briefcase, ShieldCheck, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const handleNav = (portalId, pageId) => {
    setActivePortal(portalId);
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top CTA Banner */}
        <div className={`mb-16 p-8 bg-gradient-to-r ${activeConfig.gradientBg} ${activeConfig.cardRadius} text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10`}>
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white/10 rounded-full text-white/90 inline-block mb-3 border border-white/20">
              India's #1 Verified Hiring Platform
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Hire Top Tech & Business Talent?
            </h3>
            <p className="text-sm text-slate-200 mt-2">
              Join 18,200+ verified Indian employers posting jobs with zero placement commission fees.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleNav('company', 'company-login')}
              className={`px-6 py-3.5 bg-white text-slate-950 font-extrabold text-sm ${activeConfig.cardRadius} shadow-xl hover:bg-slate-100 transition-all flex items-center gap-2`}
            >
              <span>Post a Job Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('public', 'home')}>
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                INDIA<span className="text-emerald-400">JOBS</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Connecting verified Indian candidates with top PSUs, MNCs, and high-growth startups across Bengaluru, Mumbai, Delhi NCR, Hyderabad, and Pune.
            </p>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-400" /> GST Verified</span>
              <span>245,000+ Active Openings</span>
            </div>
          </div>

          {/* Jobs by City */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Jobs by Top Cities
            </h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNav('public', 'jobs-city')} className="hover:text-white transition-colors">Jobs in Bengaluru (45k+)</button></li>
              <li><button onClick={() => handleNav('public', 'jobs-city')} className="hover:text-white transition-colors">Jobs in Mumbai (38k+)</button></li>
              <li><button onClick={() => handleNav('public', 'jobs-city')} className="hover:text-white transition-colors">Jobs in Delhi NCR (42k+)</button></li>
              <li><button onClick={() => handleNav('public', 'jobs-city')} className="hover:text-white transition-colors">Jobs in Hyderabad (31k+)</button></li>
              <li><button onClick={() => handleNav('public', 'jobs-city')} className="hover:text-white transition-colors">Jobs in Pune (26k+)</button></li>
            </ul>
          </div>

          {/* Jobs by Industry */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Jobs by Industry
            </h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNav('public', 'jobs-industry')} className="hover:text-white transition-colors">IT & Software (85k+)</button></li>
              <li><button onClick={() => handleNav('public', 'jobs-industry')} className="hover:text-white transition-colors">Banking & BFSI (42k+)</button></li>
              <li><button onClick={() => handleNav('public', 'jobs-industry')} className="hover:text-white transition-colors">E-Commerce & Retail (34k+)</button></li>
              <li><button onClick={() => handleNav('public', 'jobs-industry')} className="hover:text-white transition-colors">Healthcare & Pharma (28k+)</button></li>
              <li><button onClick={() => handleNav('public', 'jobs-industry')} className="hover:text-white transition-colors">Sales & BD (51k+)</button></li>
            </ul>
          </div>

          {/* User Portals */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              User Portals & Hubs
            </h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNav('candidate', 'candidate-login')} className="hover:text-white transition-colors">Candidate Login</button></li>
              <li><button onClick={() => handleNav('candidate', 'candidate-register')} className="hover:text-white transition-colors">Candidate Register</button></li>
              <li><button onClick={() => handleNav('company', 'company-login')} className="hover:text-white transition-colors">Employer Login</button></li>
              <li><button onClick={() => handleNav('company', 'company-dashboard')} className="hover:text-white transition-colors">Employer ATS</button></li>
              <li><button onClick={() => handleNav('admin', 'admin-dashboard')} className="hover:text-white transition-colors">Admin Verification</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 India Jobs Tech Private Limited. All rights reserved. Registered under Ministry of Corporate Affairs (MCA).</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('public', 'about')} className="hover:text-slate-300">Privacy Policy</button>
            <button onClick={() => handleNav('public', 'about')} className="hover:text-slate-300">Terms of Service</button>
            <button onClick={() => handleNav('public', 'contact')} className="hover:text-slate-300">Contact Us</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
