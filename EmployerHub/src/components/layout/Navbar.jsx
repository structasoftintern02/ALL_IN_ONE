import React, { useState, useEffect } from 'react';
import { useTheme, VARIATIONS } from '../../context/ThemeContext';
import { 
  Building2, ArrowRight, Menu, X, LayoutDashboard, Palette, ChevronDown, 
  Briefcase, Users, DollarSign, HelpCircle 
} from 'lucide-react';

export const Navbar = ({ activePage, setActivePage }) => {
  const { variation, setVariation, activeConfig, themeConfigs } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Recruitment Features' },
    { id: 'hiring-plans', label: 'Hiring Plans & Pricing' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'dashboard', label: 'Employer Portal 📊', icon: LayoutDashboard }
  ];

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    setMobileOpen(false);
    setThemeDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? `${activeConfig.headerBg} backdrop-blur-xl shadow-lg border-b border-slate-200/80 py-1` 
        : `${activeConfig.headerBg} border-b border-slate-200/60 py-2`
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group select-none flex-shrink-0"
          >
            <div className={`w-11 h-11 ${activeConfig.cardRadius} flex items-center justify-center transition-transform group-hover:scale-105 ${
              variation === VARIATIONS.ENTERPRISE
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : variation === VARIATIONS.SAAS
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
            }`}>
              <Building2 className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  EMPLOYER<span className={activeConfig.accentText}>HUB</span>
                </span>
                <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 whitespace-nowrap">
                  INDIA ATS
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide hidden sm:block whitespace-nowrap">
                Enterprise Recruitment & HRMS Engine
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all relative flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? `${activeConfig.buttonSecondary} font-extrabold shadow-xs`
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTAs & Themes Dropdown AT THE VERY END */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => handleNavigate('login')}
              className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Employer Login
            </button>

            <button
              onClick={() => handleNavigate('register')}
              className={`px-4 py-2.5 ${activeConfig.cardRadius} text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all whitespace-nowrap ${activeConfig.buttonPrimary}`}
            >
              <span>Post Job & Register</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Themes Dropdown AT THE VERY END (Button Label: "Themes") */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-lg hover:opacity-95 transition-all whitespace-nowrap"
              >
                <Palette className="w-4 h-4" />
                <span>Themes</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${themeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {themeDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-72 bg-slate-900 ${activeConfig.cardRadius} shadow-2xl border border-slate-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150`}>
                  <div className="px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-800 mb-1 flex items-center justify-between">
                    <span>Select Color Scheme</span>
                    <span className="text-blue-400 font-mono">7 Themes</span>
                  </div>
                  
                  {Object.keys(VARIATIONS).map((key) => {
                    const vKey = VARIATIONS[key];
                    const cfg = themeConfigs[vKey];
                    const isSelected = variation === vKey;

                    return (
                      <button
                        key={vKey}
                        onClick={() => {
                          setVariation(vKey);
                          setThemeDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-slate-800/80 transition-colors ${
                          isSelected ? 'text-blue-400 bg-blue-950/50' : 'text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-3 h-3 rounded-full ${cfg.dotColor} shadow-xs flex-shrink-0`} />
                          <span>{cfg.badge}</span>
                        </div>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-blue-500" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavigate('login')}
              className={`px-3 py-1.5 text-xs font-bold ${activeConfig.cardRadius} ${activeConfig.buttonPrimary}`}
            >
              Login
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-4 shadow-xl text-white animate-in slide-in-from-top-2">
          <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-1">
            Select Color Scheme (7 Themes)
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {Object.keys(VARIATIONS).map((key) => {
              const vKey = VARIATIONS[key];
              const cfg = themeConfigs[vKey];
              return (
                <button 
                  key={vKey}
                  onClick={() => { setVariation(vKey); setMobileOpen(false); }} 
                  className={`p-2.5 text-left text-xs font-extrabold rounded-xl flex items-center gap-2 ${
                    variation === vKey ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-900 text-slate-300'
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${cfg.dotColor}`} />
                  <span className="truncate">{cfg.name}</span>
                </button>
              );
            })}
          </div>

          <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-1 pt-2 border-t border-slate-800">
            Pages Navigation
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={`text-left px-3 py-2 text-xs rounded-xl font-bold ${
                  activePage === link.id ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-800 text-slate-300 bg-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
