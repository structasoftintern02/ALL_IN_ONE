import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sparkles, ShieldCheck, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

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
              India's #1 Child Talent Diagnostic Network
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Discover Your Child's Natural Talent Today!
            </h3>
            <p className="text-sm text-slate-200 mt-2">
              Free 15-minute diagnostic skill assessment for children aged 3 to 10 years.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleNav('parent', 'assessment-quiz')}
              className={`px-6 py-3.5 bg-white text-slate-950 font-extrabold text-sm ${activeConfig.cardRadius} shadow-xl hover:bg-slate-100 transition-all flex items-center gap-2`}
            >
              <span>Take Skill Quiz Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('public', 'home')}>
              <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                EARLY<span className="text-pink-400">SKILLS</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Helping parents, schools, and certified teachers discover cognitive, motor, STEM, and creative talents in children aged 3–10 years.
            </p>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-pink-400" /> NIMHANS & ECA Aligned</span>
              <span>28,400+ Children Mapped</span>
            </div>
          </div>

          {/* Programs by Age */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Age-wise Programs
            </h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNav('public', 'age-plans')} className="hover:text-white transition-colors">3–5 Years Early Observation</button></li>
              <li><button onClick={() => handleNav('public', 'age-plans')} className="hover:text-white transition-colors">5–7 Years Cognitive Assessment</button></li>
              <li><button onClick={() => handleNav('public', 'age-plans')} className="hover:text-white transition-colors">7–10 Years Advanced Talent</button></li>
              <li><button onClick={() => handleNav('public', 'programs')} className="hover:text-white transition-colors">STEM & Robotics Track</button></li>
              <li><button onClick={() => handleNav('public', 'programs')} className="hover:text-white transition-colors">Phonics & Speech Track</button></li>
            </ul>
          </div>

          {/* User Experience Portals */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              User Portals & Hubs
            </h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNav('parent', 'parent-login')} className="hover:text-white transition-colors">Parent Login</button></li>
              <li><button onClick={() => handleNav('parent', 'parent-register')} className="hover:text-white transition-colors">Parent Registration</button></li>
              <li><button onClick={() => handleNav('school', 'school-dashboard')} className="hover:text-white transition-colors">Partner School Portal</button></li>
              <li><button onClick={() => handleNav('teacher', 'teacher-dashboard')} className="hover:text-white transition-colors">Skill Teacher Hub</button></li>
              <li><button onClick={() => handleNav('admin', 'admin-dashboard')} className="hover:text-white transition-colors">Admin Governance</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Headquarters
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-pink-400" /> Indiranagar 100ft Road, Bengaluru 560038</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-pink-400" /> 1800-KID-SKILLS</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-pink-400" /> hello@earlyskills.edu.in</p>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Early Child Skill Identification Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('public', 'contact')} className="hover:text-slate-300">Privacy Policy</button>
            <button onClick={() => handleNav('public', 'contact')} className="hover:text-slate-300">Terms of Service</button>
            <button onClick={() => handleNav('public', 'contact')} className="hover:text-slate-300">Child Data Safety</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
