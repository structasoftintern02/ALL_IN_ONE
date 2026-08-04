import React from 'react';
import { Sun, Phone, Mail, MapPin, ArrowRight, Share2, MessageCircle, Link2, Globe, Camera } from 'lucide-react';

const footerLinks = {
  'Solar Loans': [
    { label: 'Residential Solar Loan', id: 'loan-types' },
    { label: 'Commercial Solar Loan', id: 'loan-types' },
    { label: 'Agricultural Solar Loan', id: 'loan-types' },
    { label: 'MSME Solar Loan', id: 'loan-types' },
    { label: 'Compare All Loans', id: 'loan-types' },
  ],
  'Information': [
    { label: 'About Solar Loans', id: 'about' },
    { label: 'Eligibility Criteria', id: 'eligibility' },
    { label: 'Required Documents', id: 'documents' },
    { label: 'How to Apply', id: 'how-to-apply' },
    { label: 'Govt. Subsidies', id: 'subsidy' },
  ],
  'Tools & Support': [
    { label: 'EMI Calculator', id: 'calculator' },
    { label: 'FAQ & Help', id: 'faq' },
    { label: 'Contact Us', id: 'contact' },
    { label: 'Track Application', id: 'contact' },
    { label: 'Customer Support', id: 'contact' },
  ],
};

export const Footer = ({ setActivePage }) => {
  const navigate = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 dark:bg-[#020818] text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Go Solar? ☀️
              </h3>
              <p className="text-emerald-200 mt-2 text-base">
                Get instant eligibility check. No credit card required. Apply in 2 minutes.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={() => navigate('eligibility')}
                className="px-6 py-3 rounded-xl bg-white text-emerald-800 font-extrabold text-sm hover:bg-emerald-50 transition-colors flex items-center gap-2 shadow-lg"
              >
                Check Eligibility <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('calculator')}
                className="px-6 py-3 rounded-xl bg-emerald-900/60 text-white font-bold text-sm border border-emerald-600 hover:bg-emerald-900 transition-colors"
              >
                EMI Calculator
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <button onClick={() => navigate('home')} className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-500/30">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold">Solar<span className="text-emerald-400">Loan</span> PRO</span>
                <p className="text-xs text-slate-500 font-medium">Green Energy Finance</p>
              </div>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed">
              India's most trusted solar loan facilitation platform. We connect homeowners, businesses, and farmers with 12+ banks and NBFCs to finance their solar energy journey at the best interest rates.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5 text-slate-400 hover:text-emerald-400 transition-colors">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>1800-123-SOLAR (76527)</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>support@solarloanpro.in</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Solar Tower, Green Business Park, Bengaluru – 560001, Karnataka, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[Share2, MessageCircle, Link2, Globe, Camera].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-700 text-slate-400 hover:text-white transition-all flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-300 mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate(link.id)}
                      className="text-sm text-slate-500 hover:text-emerald-400 transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>
            © 2026 SolarLoan Pro. All rights reserved. | NBFC Registration: RBI/2023/NBFC/00421 | MNRE Empaneled
          </p>
          <div className="flex gap-4">
            <button className="hover:text-slate-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-slate-400 transition-colors">Terms of Service</button>
            <button className="hover:text-slate-400 transition-colors">Disclaimer</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
