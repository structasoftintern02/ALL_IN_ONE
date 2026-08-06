import React, { useState, useEffect } from 'react';
import { useTheme, VARIATIONS } from '../../context/ThemeContext';
import { 
  Sparkles, ChevronDown, Menu, X, ArrowRight, User, Building, GraduationCap, ShieldCheck, Palette 
} from 'lucide-react';

export const Navbar = ({ activePage, setActivePage, activePortal, setActivePortal }) => {
  const { variation, setVariation, activeConfig } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portalDropdownOpen, setPortalDropdownOpen] = useState(false);
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

  const publicLinks = [
    { id: 'home', label: 'Home' },
    { id: 'programs', label: 'Age-wise Programs' },
    { id: 'nearby-schools', label: 'Nearby Schools' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNav = (pageId) => {
    setActivePage(pageId);
    setMobileOpen(false);
    setPortalDropdownOpen(false);
    setThemeDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const switchPortal = (portalId, pageId) => {
    setActivePortal(portalId);
    setActivePage(pageId);
    setPortalDropdownOpen(false);
    setThemeDropdownOpen(false);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`sticky top-0 z-40 font-sans transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-white/85 shadow-md border-b border-slate-200/80 py-0.5' 
          : `${activeConfig.headerBg} shadow-xs border-b border-slate-200/60`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Left: Brand Logo */}
          <div 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 cursor-pointer group select-none flex-shrink-0"
          >
            <div className={`w-11 h-11 ${activeConfig.cardRadius} flex items-center justify-center transition-transform group-hover:scale-105 ${
              variation === VARIATIONS.KIDS
                ? 'bg-gradient-to-tr from-pink-500 to-amber-400 text-white shadow-md'
                : variation === VARIATIONS.PREMIUM
                ? 'bg-gradient-to-tr from-purple-600 to-teal-500 text-white shadow-md'
                : 'bg-blue-600 text-white shadow-md'
            }`}>
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`text-xl font-extrabold tracking-tight ${activeConfig.navText}`}>
                  EARLY<span className={activeConfig.accentText}>SKILLS</span>
                </span>
                <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-pink-500/10 text-pink-700 border border-pink-500/20 whitespace-nowrap">
                  KIDS 3-10Y
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-tight whitespace-nowrap hidden sm:block">
                Talent Identification & Skill Program
              </p>
            </div>
          </div>

          {/* Center: Desktop Public Nav Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {publicLinks.map((link) => {
              const isActive = activePage === link.id && activePortal === 'public';
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActivePortal('public');
                    handleNav(link.id);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-sm transition-all whitespace-nowrap relative ${
                    isActive
                      ? `${activeConfig.buttonSecondary} shadow-xs text-slate-900 font-extrabold border-pink-300`
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 font-bold'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-pink-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: User Portals, Login, Primary CTA & Themes Dropdown */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            
            {/* 1. User Portal Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setPortalDropdownOpen(!portalDropdownOpen);
                  setThemeDropdownOpen(false);
                }}
                className="px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shadow-md hover:bg-slate-800 transition-all whitespace-nowrap"
              >
                <span>Portal: {activePortal.toUpperCase()}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${portalDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {portalDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-64 bg-white ${activeConfig.cardRadius} shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150`}>
                  <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                    Select User Experience Portal
                  </div>
                  
                  <button
                    onClick={() => switchPortal('public', 'home')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">🌐 Public Website & Programs</span>
                    {activePortal === 'public' && <span className="w-2 h-2 rounded-full bg-pink-500" />}
                  </button>

                  <button
                    onClick={() => switchPortal('teacher', 'teacher-login')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">🧑‍🏫 Teacher Login & Hub</span>
                    {activePortal === 'teacher' && <span className="w-2 h-2 rounded-full bg-pink-500" />}
                  </button>

                  <button
                    onClick={() => switchPortal('parent', 'parent-dashboard')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">👨‍👩‍👧 Parent Portal & Skill Quiz</span>
                    {activePortal === 'parent' && <span className="w-2 h-2 rounded-full bg-pink-500" />}
                  </button>

                  <button
                    onClick={() => switchPortal('school', 'school-dashboard')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">🏫 Partner School Portal</span>
                    {activePortal === 'school' && <span className="w-2 h-2 rounded-full bg-pink-500" />}
                  </button>

                  <button
                    onClick={() => switchPortal('admin', 'admin-dashboard')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between border-t border-slate-100 mt-1 pt-2"
                  >
                    <span className="flex items-center gap-2">🛡️ Admin Verification Panel</span>
                    {activePortal === 'admin' && <span className="w-2 h-2 rounded-full bg-pink-500" />}
                  </button>
                </div>
              )}
            </div>

            {/* 2. Teacher Login Button */}
            <button
              onClick={() => {
                setActivePortal('teacher');
                handleNav('teacher-login');
              }}
              className="text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 px-2 py-2 whitespace-nowrap flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4 text-purple-600" />
              <span>Teacher Login</span>
            </button>

            {/* 3. Primary CTA Button */}
            <button
              onClick={() => {
                setActivePortal('parent');
                handleNav('parent-register');
              }}
              className={`px-4 py-2.5 ${activeConfig.cardRadius} text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all whitespace-nowrap shadow-md hover:shadow-lg ${activeConfig.buttonPrimary}`}
            >
              <span>Enroll Child Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* 4. Themes Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setThemeDropdownOpen(!themeDropdownOpen);
                  setPortalDropdownOpen(false);
                }}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-md hover:opacity-95 transition-all whitespace-nowrap"
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
                      setVariation(VARIATIONS.MODERN);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-slate-50 ${
                      variation === VARIATIONS.MODERN ? 'text-blue-600 bg-blue-50/50' : 'text-slate-800'
                    }`}
                  >
                    <span className="flex items-center gap-2">🎓 1. Modern Education</span>
                    {variation === VARIATIONS.MODERN && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                  </button>

                  <button
                    onClick={() => {
                      setVariation(VARIATIONS.KIDS);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-slate-50 ${
                      variation === VARIATIONS.KIDS ? 'text-pink-600 bg-pink-50/50' : 'text-slate-800'
                    }`}
                  >
                    <span className="flex items-center gap-2">🧸 2. Kids Friendly</span>
                    {variation === VARIATIONS.KIDS && <span className="w-2 h-2 rounded-full bg-pink-600" />}
                  </button>

                  <button
                    onClick={() => {
                      setVariation(VARIATIONS.PREMIUM);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-slate-50 ${
                      variation === VARIATIONS.PREMIUM ? 'text-purple-600 bg-purple-50/50' : 'text-slate-800'
                    }`}
                  >
                    <span className="flex items-center gap-2">💎 3. Premium EdTech</span>
                    {variation === VARIATIONS.PREMIUM && <span className="w-2 h-2 rounded-full bg-purple-600" />}
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Mobile Menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
            UI/UX Design Themes
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <button onClick={() => setVariation(VARIATIONS.MODERN)} className={`p-2 text-center text-xs font-bold rounded-xl ${variation === VARIATIONS.MODERN ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`}>🎓 Modern</button>
            <button onClick={() => setVariation(VARIATIONS.KIDS)} className={`p-2 text-center text-xs font-bold rounded-xl ${variation === VARIATIONS.KIDS ? 'bg-pink-600 text-white' : 'bg-slate-100 text-slate-700'}`}>🧸 Kids</button>
            <button onClick={() => setVariation(VARIATIONS.PREMIUM)} className={`p-2 text-center text-xs font-bold rounded-xl ${variation === VARIATIONS.PREMIUM ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-700'}`}>💎 Premium</button>
          </div>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1 pt-2 border-t border-slate-100">
            Navigation Links
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {publicLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePortal('public');
                  handleNav(link.id);
                }}
                className={`text-left px-3 py-2.5 text-sm font-bold rounded-xl ${
                  activePage === link.id && activePortal === 'public'
                    ? 'bg-pink-100 text-pink-900'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1 pt-2 border-t border-slate-100">
            User Experience Portals
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <button onClick={() => switchPortal('public', 'home')} className="p-2.5 text-left text-xs font-bold bg-slate-100 rounded-xl">🌐 Public Site</button>
            <button onClick={() => switchPortal('teacher', 'teacher-login')} className="p-2.5 text-left text-xs font-bold bg-slate-100 rounded-xl">🧑‍🏫 Teacher Login</button>
            <button onClick={() => switchPortal('parent', 'parent-dashboard')} className="p-2.5 text-left text-xs font-bold bg-slate-100 rounded-xl">👨‍👩‍👧 Parent Hub</button>
            <button onClick={() => switchPortal('school', 'school-dashboard')} className="p-2.5 text-left text-xs font-bold bg-slate-100 rounded-xl">🏫 School Portal</button>
            <button onClick={() => switchPortal('admin', 'admin-dashboard')} className="p-2.5 text-left text-xs font-bold bg-slate-100 rounded-xl col-span-2">🛡️ Admin Panel</button>
          </div>
        </div>
      )}
    </header>
  );
};
