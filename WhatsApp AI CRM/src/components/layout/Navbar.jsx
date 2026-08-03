import React, { useState } from 'react';
import { useTheme, VARIATIONS } from '../../context/ThemeContext';
import { 
  MessageSquare, ArrowRight, Menu, X, LayoutDashboard, Palette, ChevronDown 
} from 'lucide-react';

export const Navbar = ({ activePage, setActivePage }) => {
  const { variation, setVariation, activeConfig } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'landing', label: 'Home' },
    { id: 'pricing', label: 'Country Pricing' },
    { id: 'comparison', label: 'Plan Comparison' },
    { id: 'country', label: 'Country Select 🌐' },
    { id: 'dashboard', label: 'CRM Dashboard 📊', icon: LayoutDashboard }
  ];

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    setMobileOpen(false);
    setThemeDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-40 ${activeConfig.headerBg} shadow-sm border-b border-slate-200/60`}>
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavigate('landing')}
            className="flex items-center gap-3 cursor-pointer group select-none flex-shrink-0"
          >
            <div className={`w-11 h-11 ${activeConfig.cardRadius} flex items-center justify-center transition-transform group-hover:scale-105 ${
              variation === VARIATIONS.DARK
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : variation === VARIATIONS.WHATSAPP
                ? 'bg-[#075E54] text-white shadow-md shadow-emerald-900/20'
                : 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
            }`}>
              <MessageSquare className="w-6 h-6 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`text-xl font-extrabold tracking-tight ${
                  activeConfig.isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  WHATSAPP<span className={activeConfig.accentText}>AI</span>
                </span>
                <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
                  CRM PRO
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide hidden sm:block whitespace-nowrap">
                Meta Official Cloud API Partner
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? `${activeConfig.buttonSecondary} font-extrabold shadow-xs`
                      : activeConfig.isDark
                      ? 'text-slate-300 hover:text-white hover:bg-gray-800/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right CTAs & Themes Dropdown AT THE VERY END */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => handleNavigate('login')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors whitespace-nowrap ${
                activeConfig.isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>

            <button
              onClick={() => handleNavigate('register')}
              className={`px-4 py-2.5 ${activeConfig.cardRadius} text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all whitespace-nowrap ${activeConfig.buttonPrimary}`}
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Themes Dropdown AT THE VERY END (Button Label: "Themes") */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-md hover:opacity-95 transition-all whitespace-nowrap"
              >
                <Palette className="w-4 h-4" />
                <span>Themes</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${themeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {themeDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-60 bg-white dark:bg-gray-900 ${activeConfig.cardRadius} shadow-2xl border border-slate-200 dark:border-gray-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150`}>
                  <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500 border-b border-slate-100 dark:border-gray-800 mb-1">
                    Select UI/UX Design Theme
                  </div>
                  
                  <button
                    onClick={() => {
                      setVariation(VARIATIONS.MODERN);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-slate-50 dark:hover:bg-gray-800/60 ${
                      variation === VARIATIONS.MODERN ? 'text-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30' : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <span className="flex items-center gap-2">🚀 1. Modern SaaS</span>
                    {variation === VARIATIONS.MODERN && <span className="w-2 h-2 rounded-full bg-indigo-600" />}
                  </button>

                  <button
                    onClick={() => {
                      setVariation(VARIATIONS.DARK);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-slate-50 dark:hover:bg-gray-800/60 ${
                      variation === VARIATIONS.DARK ? 'text-emerald-400 bg-emerald-950/30' : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <span className="flex items-center gap-2">🌙 2. Premium Dark CRM</span>
                    {variation === VARIATIONS.DARK && <span className="w-2 h-2 rounded-full bg-emerald-500" />}
                  </button>

                  <button
                    onClick={() => {
                      setVariation(VARIATIONS.WHATSAPP);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-slate-50 dark:hover:bg-gray-800/60 ${
                      variation === VARIATIONS.WHATSAPP ? 'text-emerald-800 bg-emerald-50/80 dark:bg-emerald-950/30' : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <span className="flex items-center gap-2">💬 3. WhatsApp Clean UI</span>
                    {variation === VARIATIONS.WHATSAPP && <span className="w-2 h-2 rounded-full bg-[#075E54]" />}
                  </button>
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
              className="p-2 text-slate-400 hover:text-white rounded-lg"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className={`lg:hidden border-b px-4 pt-2 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 ${
          activeConfig.isDark ? 'bg-gray-950 border-gray-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-1">
            UI/UX Design Themes
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <button onClick={() => { setVariation(VARIATIONS.MODERN); setMobileOpen(false); }} className={`p-2 text-center text-xs font-bold rounded-xl ${variation === VARIATIONS.MODERN ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300'}`}>🚀 SaaS</button>
            <button onClick={() => { setVariation(VARIATIONS.DARK); setMobileOpen(false); }} className={`p-2 text-center text-xs font-bold rounded-xl ${variation === VARIATIONS.DARK ? 'bg-emerald-500 text-slate-950' : 'bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300'}`}>🌙 Dark CRM</button>
            <button onClick={() => { setVariation(VARIATIONS.WHATSAPP); setMobileOpen(false); }} className={`p-2 text-center text-xs font-bold rounded-xl ${variation === VARIATIONS.WHATSAPP ? 'bg-[#075E54] text-white' : 'bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300'}`}>💬 WhatsApp</button>
          </div>

          <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-1 pt-2 border-t border-slate-100 dark:border-gray-800">
            Pages Navigation
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={`text-left px-3 py-2 text-xs rounded-xl font-bold ${
                  activePage === link.id ? 'bg-indigo-600 text-white font-bold' : 'hover:bg-slate-100 dark:hover:bg-gray-800 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-gray-900'
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
