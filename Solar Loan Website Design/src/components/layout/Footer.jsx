import React from 'react';
import { useTheme, CONCEPTS } from '../../context/ThemeContext';
import { Sun, ShieldCheck, Mail, Phone, MapPin, ArrowRight, Heart, Award, CheckCircle2 } from 'lucide-react';

export const Footer = ({ setActivePage }) => {
  const { concept, activeConfig } = useTheme();

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter Card */}
        <div className={`mb-16 p-8 bg-gradient-to-r ${activeConfig.gradientBg} ${activeConfig.cardRadius} shadow-xl border border-white/10 text-white flex flex-col md:flex-row items-center justify-between gap-6`}>
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white/10 rounded-full text-white/90 inline-block mb-3 border border-white/20">
              Government PM Surya Ghar Partner
            </span>
            <h3 className="text-2xl font-bold tracking-tight">
              Ready to Zero Out Your Monthly Electricity Bill?
            </h3>
            <p className="text-sm text-slate-200 mt-2">
              Check your pre-approved solar loan rate in 2 minutes with zero impact on your CIBIL score.
            </p>
          </div>

          <div className="w-full md:w-auto flex items-center gap-3">
            <button
              onClick={() => navigateTo('eligibility')}
              className={`px-6 py-3.5 bg-white text-slate-900 font-bold ${activeConfig.cardRadius} shadow-lg hover:bg-slate-100 transition-all flex items-center gap-2`}
            >
              <span>Check Instant Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 border border-white/20">
                <Sun className="w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                SOLAR<span className="text-teal-400">LOAN</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              India's premier digital green finance platform connecting homeowners, commercial enterprises, and farmers with top PSUs and private banks for 100% paperless solar rooftop financing.
            </p>
            
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400 pt-2">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-400" /> RBI Compliant</span>
              <span className="flex items-center gap-1"><Award className="w-4 h-4 text-amber-400" /> 0% Foreclosure</span>
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Loan Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => navigateTo('products')} className="hover:text-white transition-colors">Residential Solar Loan</button></li>
              <li><button onClick={() => navigateTo('products')} className="hover:text-white transition-colors">Commercial & Factory Solar</button></li>
              <li><button onClick={() => navigateTo('products')} className="hover:text-white transition-colors">PM-KUSUM Agri Solar Pump</button></li>
              <li><button onClick={() => navigateTo('products')} className="hover:text-white transition-colors">Battery Storage & Hybrid</button></li>
              <li><button onClick={() => navigateTo('products')} className="hover:text-white transition-colors">Existing Home Loan Top-Up</button></li>
            </ul>
          </div>

          {/* Borrower Tools */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Borrower Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => navigateTo('compare')} className="hover:text-white transition-colors">Compare Bank Rates</button></li>
              <li><button onClick={() => navigateTo('calculator')} className="hover:text-white transition-colors">EMI & Solar ROI Calculator</button></li>
              <li><button onClick={() => navigateTo('eligibility')} className="hover:text-white transition-colors">Instant Eligibility Checker</button></li>
              <li><button onClick={() => navigateTo('upload')} className="hover:text-white transition-colors">Document Upload Vault</button></li>
              <li><button onClick={() => navigateTo('track')} className="hover:text-white transition-colors">Track Application Status</button></li>
              <li><button onClick={() => navigateTo('sanction')} className="hover:text-white transition-colors">Sanction Letter Preview</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support & Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Level 12, Green Energy Tower, Cyber City, Gurugram 122002</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>1800-200-SOLAR (Toll-Free)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>support@solarloan.in</span>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="text-xs font-semibold text-teal-400 hover:text-teal-300 underline mt-1">
                  Visit Contact & Support Page →
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 SolarLoan Tech Private Limited. All rights reserved. Partnered with SBI, HDFC, Tata Capital, ICICI Bank.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => navigateTo('faq')} className="hover:text-slate-300">Privacy Policy</button>
            <button onClick={() => navigateTo('faq')} className="hover:text-slate-300">Terms of Service</button>
            <button onClick={() => navigateTo('faq')} className="hover:text-slate-300">RBI Compliance</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
