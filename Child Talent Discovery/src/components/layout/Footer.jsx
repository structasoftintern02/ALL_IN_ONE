import React from 'react';
import { Sparkles, Heart, Mail, Phone, MapPin, ArrowRight, Share2, MessageCircle, Link2, Globe, Camera } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const footerLinks = {
  'Age Programs': [
    { label: '3–5 Years (Foundation)', id: 'programs' },
    { label: '5–7 Years (Growth)', id: 'programs' },
    { label: '7–10 Years (Mapping)', id: 'programs' },
    { label: 'Sensory Skill Modules', id: 'skills' },
  ],
  'Skill Domains': [
    { label: 'Cognitive & Spatial', id: 'skills' },
    { label: 'Creative & Artistic', id: 'skills' },
    { label: 'STEM & Logic', id: 'skills' },
    { label: 'Leadership & Emotional', id: 'skills' },
  ],
  'Parent Tools': [
    { label: 'Parent Portal Login', id: 'parent-login' },
    { label: 'Sample Report Demo', id: 'report-preview' },
    { label: '5-Step Process', id: 'how-it-works' },
    { label: 'Parent Testimonials', id: 'testimonials' },
    { label: 'FAQ & Help Center', id: 'faq' },
  ],
};

export const Footer = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  const navigate = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-purple-800 via-rose-700 to-indigo-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-extrabold mb-2 border border-white/20">
                ✨ Unlock Natural Talents Early
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Discover What Your Child is Naturally Gifted At 🌟
              </h3>
              <p className="text-purple-100 mt-1 text-sm sm:text-base">
                Join 25,000+ parents who replaced guess-work with scientific early talent mapping.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={() => navigate('how-it-works')}
                className="px-6 py-3.5 rounded-2xl bg-white text-purple-900 font-extrabold text-sm hover:bg-rose-50 transition-all flex items-center gap-2 shadow-lg hover:scale-105"
              >
                <span>Start Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('report-preview')}
                className="px-6 py-3.5 rounded-2xl bg-purple-900/60 text-white font-bold text-sm border border-purple-400/40 hover:bg-purple-900 transition-colors"
              >
                View Sample Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <button onClick={() => navigate('home')} className="flex items-center gap-3 text-left">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-500 via-purple-500 to-amber-500 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white">Talent<span className="text-purple-400">Discovery</span></span>
                <p className="text-xs text-slate-400 font-medium">Child Skill Identification Portal</p>
              </div>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed">
              India's leading scientific early child talent discovery platform. We empower parents to identify natural strengths, cognitive inclinations, and personalized learning pathways for children aged 3 to 10 years.
            </p>

            {/* Contact Quick Info */}
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>1800-KIDS-TALENT (54378)</span>
              </div>
              <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>support@childtalentdiscovery.org</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Child Development Center, Tech Park Phase 2, Bengaluru – 560103</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {[Share2, MessageCircle, Link2, Globe, Camera].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-purple-600 text-slate-400 hover:text-white transition-all flex items-center justify-center border border-slate-800"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Link Categories */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate(link.id)}
                      className="text-sm text-slate-400 hover:text-purple-400 transition-colors text-left"
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
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Child Talent Discovery Portal. All rights reserved. Designed for Early Child Development Awareness.</p>
          <div className="flex gap-4">
            <button className="hover:text-slate-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-slate-400 transition-colors">Terms of Guidance</button>
            <button className="hover:text-slate-400 transition-colors">Scientific Disclosure</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
