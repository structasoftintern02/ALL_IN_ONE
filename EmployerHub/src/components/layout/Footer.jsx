import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Building2, Mail, Phone, MapPin, ShieldCheck, Globe, Heart } from 'lucide-react';

export const Footer = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-base">
                <Building2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                EMPLOYER<span className="text-blue-500">HUB</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              India's premier enterprise recruitment platform and HRMS portal. Streamlining candidate sourcing, AI matching, interview workflows, and employee onboarding for 12,500+ companies.
            </p>
            <div className="flex items-center gap-2 text-slate-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 27001 Certified • SOC2 Type II Security Standard</span>
            </div>
          </div>

          {/* Column 1: Solutions */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-[11px]">Employer Solutions</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => setActivePage('features')} className="hover:text-white">AI Candidate Matching</button></li>
              <li><button onClick={() => setActivePage('features')} className="hover:text-white">Kanban ATS Pipeline</button></li>
              <li><button onClick={() => setActivePage('features')} className="hover:text-white">Interview Scheduler</button></li>
              <li><button onClick={() => setActivePage('features')} className="hover:text-white">Resume Database Search</button></li>
              <li><button onClick={() => setActivePage('features')} className="hover:text-white">Offer Letter Generator</button></li>
            </ul>
          </div>

          {/* Column 2: Hiring Plans */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-[11px]">Hiring Plans</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => setActivePage('hiring-plans')} className="hover:text-white">Startup Hiring Plan</button></li>
              <li><button onClick={() => setActivePage('hiring-plans')} className="hover:text-white">Growth HRMS Plan</button></li>
              <li><button onClick={() => setActivePage('hiring-plans')} className="hover:text-white">Enterprise Hiring Suite</button></li>
              <li><button onClick={() => setActivePage('hiring-plans')} className="hover:text-white">Custom API Integration</button></li>
            </ul>
          </div>

          {/* Column 3: Corporate HQ */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-[11px]">National HQ</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>Outer Ring Road, Bengaluru 560103</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>+91 1800 420 9000 (Toll Free)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>employers@employerhub.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 EmployerHub Technologies India Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400">Terms of Service</a>
            <a href="#security" className="hover:text-slate-400">Security Architecture</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
