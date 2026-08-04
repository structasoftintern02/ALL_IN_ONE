import React, { useState, useEffect } from 'react';
import { useTheme, CONCEPTS } from '../../context/ThemeContext';
import { 
  Sun, ChevronDown, Menu, X, ArrowRight, FileCheck, LayoutDashboard, Palette 
} from 'lucide-react';

export const Navbar = ({ activePage, setActivePage }) => {
  const { concept, setConcept, activeConfig } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainPages = [
    { id: 'home', label: 'Home' },
    { id: 'compare', label: 'Compare Loans' },
    { id: 'products', label: 'Loan Products' },
    { id: 'eligibility', label: 'Eligibility Checker' },
    { id: 'calculator', label: 'EMI Calculator' },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard }
  ];

  const subPages = [
    { id: 'apply', label: 'Apply for Loan' },
    { id: 'upload', label: 'Upload Documents' },
    { id: 'track', label: 'Track Application' },
    { id: 'sanction', label: 'Sanction Letter' },
    { id: 'disbursement', label: 'Disbursement Status' },
    { id: 'faq', label: 'FAQ & Help' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    setThemeDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled
        ? 'bg-white/85 backdrop-blur-xl shadow-md border-b border-slate-200/80 py-0.5'
        : 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none flex-shrink-0"
          >
            <div className={`w-11 h-11 ${activeConfig.cardRadius} flex items-center justify-center transition-transform group-hover:scale-105 ${
              concept === CONCEPTS.CORPORATE 
                ? 'bg-slate-900 text-teal-400' 
                : concept === CONCEPTS.FINTECH 
                ? 'bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20' 
                : 'bg-emerald-700 text-amber-300 shadow-md shadow-emerald-700/20'
            }`}>
              <Sun className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className={`text-xl font-extrabold tracking-tight ${activeConfig.headingFont} ${
                  concept === CONCEPTS.CORPORATE ? 'text-slate-900' : concept === CONCEPTS.FINTECH ? 'text-indigo-950' : 'text-emerald-950'
                }`}>
                  SOLAR<span className={activeConfig.iconColor}>LOAN</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 whitespace-nowrap">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide hidden sm:block whitespace-nowrap">
                Green Energy Capital
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {mainPages.map((page) => {
              const Icon = page.icon;
              const isActive = activePage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handleNavClick(page.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap relative ${
                    isActive
                      ? `${activeConfig.buttonSecondary} font-extrabold shadow-xs`
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{page.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </button>
              );
            })}

            {/* Dropdown Menu for Services / Application Tools */}
            <div className="relative">
              <button
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                  setThemeDropdownOpen(false);
                }}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 flex items-center gap-1 transition-all whitespace-nowrap ${
                  subPages.some(p => p.id === activePage) ? 'text-indigo-600 font-bold' : ''
                }`}
              >
                <span>Services & Status</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className={`absolute right-0 mt-2 w-64 bg-white ${activeConfig.cardRadius} shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150`}>
                  <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                    Application Tools & Status
                  </div>
                  {subPages.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 py-2 text-xs font-bold transition-colors flex items-center justify-between ${
                        activePage === item.id 
                          ? 'bg-slate-100 text-slate-900 font-extrabold' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span>{item.label}</span>
                      {activePage === item.id && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right CTAs & Themes Dropdown AT THE VERY END */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => handleNavClick('track')}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="Track Application"
            >
              <FileCheck className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleNavClick('apply')}
              className={`px-5 py-2.5 ${activeConfig.cardRadius} text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all whitespace-nowrap ${activeConfig.buttonPrimary}`}
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Themes Dropdown AT THE VERY END (Button Label: "Themes") */}
            <div className="relative">
              <button
                onClick={() => {
                  setThemeDropdownOpen(!themeDropdownOpen);
                  setDropdownOpen(false);
                }}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-teal-600 via-indigo-600 to-emerald-600 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-md hover:opacity-95 transition-all whitespace-nowrap"
              >
                <Palette className="w-4 h-4" />
                <span>Themes</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${themeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {themeDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-60 bg-white ${activeConfig.cardRadius} shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150`}>
                  <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                    Select UI/UX Design Theme
                  </div>
                  
                  <button
                    onClick={() => {
                      setConcept(CONCEPTS.CORPORATE);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-slate-50 ${
                      concept === CONCEPTS.CORPORATE ? 'text-teal-700 bg-teal-50/50' : 'text-slate-800'
                    }`}
                  >
                    <span className="flex items-center gap-2">🏛️ 1. Corporate Banking</span>
                    {concept === CONCEPTS.CORPORATE && <span className="w-2 h-2 rounded-full bg-teal-600" />}
                  </button>

                  <button
                    onClick={() => {
                      setConcept(CONCEPTS.FINTECH);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-slate-50 ${
                      concept === CONCEPTS.FINTECH ? 'text-indigo-600 bg-indigo-50/50' : 'text-slate-800'
                    }`}
                  >
                    <span className="flex items-center gap-2">⚡ 2. Modern FinTech</span>
                    {concept === CONCEPTS.FINTECH && <span className="w-2 h-2 rounded-full bg-indigo-600" />}
                  </button>

                  <button
                    onClick={() => {
                      setConcept(CONCEPTS.ECO);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-slate-50 ${
                      concept === CONCEPTS.ECO ? 'text-emerald-700 bg-emerald-50/80' : 'text-slate-800'
                    }`}
                  >
                    <span className="flex items-center gap-2">🌿 3. Eco Solar Premium</span>
                    {concept === CONCEPTS.ECO && <span className="w-2 h-2 rounded-full bg-emerald-600" />}
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('apply')}
              className={`px-3 py-1.5 text-xs font-extrabold ${activeConfig.cardRadius} ${activeConfig.buttonPrimary}`}
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2">
          <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-1">
            UI/UX Design Themes
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <button onClick={() => { setConcept(CONCEPTS.CORPORATE); setMobileMenuOpen(false); }} className={`p-2 text-center text-xs font-bold rounded-xl ${concept === CONCEPTS.CORPORATE ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'}`}>🏛️ Corporate</button>
            <button onClick={() => { setConcept(CONCEPTS.FINTECH); setMobileMenuOpen(false); }} className={`p-2 text-center text-xs font-bold rounded-xl ${concept === CONCEPTS.FINTECH ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>⚡ FinTech</button>
            <button onClick={() => { setConcept(CONCEPTS.ECO); setMobileMenuOpen(false); }} className={`p-2 text-center text-xs font-bold rounded-xl ${concept === CONCEPTS.ECO ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>🌿 Eco Solar</button>
          </div>

          <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-1 pt-2 border-t border-slate-100">
            Main Navigation
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {mainPages.map((page) => (
              <button
                key={page.id}
                onClick={() => handleNavClick(page.id)}
                className={`text-left px-3 py-2 text-xs rounded-xl font-bold ${
                  activePage === page.id ? 'bg-slate-900 text-white' : 'text-slate-700 bg-slate-50'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
