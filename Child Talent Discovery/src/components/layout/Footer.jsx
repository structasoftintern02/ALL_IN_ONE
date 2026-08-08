import React from 'react';
import { Sparkles, Heart, Mail, Phone, MapPin, ArrowRight, Share2, MessageCircle, Link2, Globe, Camera } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';

const defaultFooterLinks = {
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
  const dataContext = useData();
  const homeCms = dataContext?.homeCms;
  const ctaData = homeCms?.ctaCms || homeCms?.callToActionCms;
  const cmsData = homeCms?.footerCms;

  const badge = ctaData?.badge || "✨ Unlock Natural Talents Early";
  const rawTitle = ctaData?.title || "Discover What Your Child is Naturally Gifted At 🌟";
  const highlightText = ctaData?.highlightText || "Naturally Gifted At";
  const subtitle = ctaData?.subtitle || "Join 25,000+ parents who replaced guess-work with scientific early talent mapping.";
  const primaryButtonText = ctaData?.primaryButtonText || "Start Assessment";
  const secondaryButtonText = ctaData?.secondaryButtonText || "View Sample Report";
  const isCtaVisible = ctaData?.visibility?.section !== false;

  const brandName = cmsData?.brandName || "TalentDiscovery";
  const brandSubtitle = cmsData?.brandSubtitle || "Child Skill Identification Portal";
  const description = cmsData?.description || "India's leading scientific early child talent discovery platform. We empower parents to identify natural strengths, cognitive inclinations, and personalized learning pathways for children aged 3 to 10 years.";
  const phone = cmsData?.phone || "1800-KIDS-TALENT (54378)";
  const email = cmsData?.email || "support@childtalentdiscovery.org";
  const address = cmsData?.address || "Child Development Center, Tech Park Phase 2, Bengaluru – 560103";
  const copyrightNotice = cmsData?.copyrightNotice || "© 2026 Child Talent Discovery Portal. All rights reserved. Designed for Early Child Development Awareness.";

  const ageProgramsTitle = cmsData?.ageProgramsTitle || "AGE PROGRAMS";
  const ageProgramsLinks = cmsData?.ageProgramsLinks || defaultFooterLinks['Age Programs'].map(l => l.label);

  const skillDomainsTitle = cmsData?.skillDomainsTitle || "SKILL DOMAINS";
  const skillDomainsLinks = cmsData?.skillDomainsLinks || defaultFooterLinks['Skill Domains'].map(l => l.label);

  const parentToolsTitle = cmsData?.parentToolsTitle || "PARENT TOOLS";
  const parentToolsLinks = cmsData?.parentToolsLinks || defaultFooterLinks['Parent Tools'].map(l => l.label);

  const privacyLink = cmsData?.privacyLink || "Privacy Policy";
  const termsLink = cmsData?.termsLink || "Terms of Guidance";
  const scientificLink = cmsData?.scientificLink || "Scientific Disclosure";

  const isFooterVisible = cmsData?.visibility?.section !== false;
  if (!isFooterVisible) return null;

  const navigate = (id) => {
    if (setActivePage) setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let titleNode = rawTitle;
  if (highlightText && rawTitle.includes(highlightText)) {
    const parts = rawTitle.split(highlightText);
    titleNode = (
      <>
        {parts[0]}
        <span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>
          {highlightText}
        </span>
        {parts[1]}
      </>
    );
  }

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* CTA Banner */}
      {isCtaVisible && (
        <div className="bg-gradient-to-r from-purple-800 via-rose-700 to-indigo-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                {(ctaData?.visibility?.badge !== false) && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-extrabold mb-2 border border-white/20">
                    {badge}
                  </div>
                )}
                {(ctaData?.visibility?.title !== false) && (
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {titleNode}
                  </h3>
                )}
                {(ctaData?.visibility?.subtitle !== false) && (
                  <p className="text-purple-100 mt-1 text-sm sm:text-base">
                    {subtitle}
                  </p>
                )}
              </div>
              <div className="flex gap-3 flex-shrink-0">
                {(ctaData?.visibility?.primaryButton !== false) && (
                  <button
                    onClick={() => navigate('how-it-works')}
                    className="px-6 py-3.5 rounded-2xl bg-white text-purple-900 font-extrabold text-sm hover:bg-rose-50 transition-all flex items-center gap-2 shadow-lg hover:scale-105"
                  >
                    <span>{primaryButtonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
                {(ctaData?.visibility?.secondaryButton !== false) && (
                  <button
                    onClick={() => navigate('report-preview')}
                    className="px-6 py-3.5 rounded-2xl bg-purple-900/60 text-white font-bold text-sm border border-purple-400/40 hover:bg-purple-900 transition-colors"
                  >
                    {secondaryButtonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Info */}
          {(cmsData?.visibility?.brand !== false) && (
            <div className="lg:col-span-2 space-y-5">
              <button onClick={() => navigate('home')} className="flex items-center gap-3 text-left">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-500 via-purple-500 to-amber-500 flex items-center justify-center text-white shadow-md">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-xl font-extrabold text-white">{brandName}</span>
                  <p className="text-xs text-slate-400 font-medium">{brandSubtitle}</p>
                </div>
              </button>
              <p className="text-slate-400 text-sm leading-relaxed">
                {description}
              </p>

              {/* Contact Quick Info */}
              {(cmsData?.visibility?.contactInfo !== false) && (
                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                    <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>{phone}</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                    <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>{email}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{address}</span>
                  </div>
                </div>
              )}

              {/* Social Icons */}
              {(cmsData?.visibility?.socialIcons !== false) && (
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
              )}
            </div>
          )}

          {/* Footer Link Categories */}
          {(cmsData?.visibility?.categories !== false) && (
            <>
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-4">
                  {ageProgramsTitle}
                </h4>
                <ul className="space-y-2.5">
                  {ageProgramsLinks.map((label, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => navigate('programs')}
                        className="text-sm text-slate-400 hover:text-purple-400 transition-colors text-left"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-4">
                  {skillDomainsTitle}
                </h4>
                <ul className="space-y-2.5">
                  {skillDomainsLinks.map((label, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => navigate('skills')}
                        className="text-sm text-slate-400 hover:text-purple-400 transition-colors text-left"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-4">
                  {parentToolsTitle}
                </h4>
                <ul className="space-y-2.5">
                  {parentToolsLinks.map((label, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => navigate('how-it-works')}
                        className="text-sm text-slate-400 hover:text-purple-400 transition-colors text-left"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Bottom Bar */}
        {(cmsData?.visibility?.bottomBar !== false) && (
          <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>{copyrightNotice}</p>
            <div className="flex gap-4">
              <button className="hover:text-slate-400 transition-colors">{privacyLink}</button>
              <button className="hover:text-slate-400 transition-colors">{termsLink}</button>
              <button className="hover:text-slate-400 transition-colors">{scientificLink}</button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
