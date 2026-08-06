import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, THEMES, themeConfigs } from '../../context/ThemeContext';
import {
  Sparkles, Sun, Moon, Menu, X, ChevronDown, ArrowRight, Palette, User, LogOut,
  Home, Info, BookOpen, Layers, Milestone, Award, FileText, Heart, HelpCircle, Phone
} from 'lucide-react';

const mainPages = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'programs', label: 'Age Programs', icon: BookOpen },
  { id: 'skills', label: '12 Skill Domains', icon: Layers },
  { id: 'how-it-works', label: 'How It Works', icon: Milestone },
  { id: 'report-preview', label: 'Sample Report', icon: FileText },
];

const subPages = [
  { id: 'about', label: 'About Us', icon: Info },
  { id: 'parent-login', label: 'Parent Portal Login', icon: User },
  { id: 'benefits', label: 'Key Benefits', icon: Award },
  { id: 'testimonials', label: 'Parent Reviews', icon: Heart },
  { id: 'faq', label: 'FAQ & Help', icon: HelpCircle },
  { id: 'contact', label: 'Contact Us', icon: Phone },
];

export const Navbar = ({ activePage, setActivePage, isLoggedIn, userInfo, setIsLoggedIn }) => {
  const { theme, setTheme, isDark, toggleDark, activeConfig } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (id) => {
    setActivePage(id);
    setMobileOpen(false);
    setThemeDropdownOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-purple-500/5 border-b border-purple-100/50 dark:border-slate-800'
          : 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-purple-100/30 dark:border-slate-800/50'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 py-2 gap-2">

          {/* Brand Logo */}
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-2 sm:gap-2.5 group text-left flex-shrink-0 select-none"
            id="nav-brand-logo"
          >
            <div className={`w-9 h-9 sm:w-10 sm:h-10 ${activeConfig.cardRadius} bg-gradient-to-tr ${activeConfig.primaryGradient} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Talent<span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>Discovery</span>
                </span>
                <span className={`text-[8px] sm:text-[9px] uppercase tracking-widest font-extrabold px-1.5 py-0.5 rounded-full ${activeConfig.accentBadge}`}>
                  PRO
                </span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide hidden sm:block">
                Early Child Skill Mapping
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainPages.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => navigate(link.id)}
                  className={`px-2.5 py-1.5 rounded-xl text-xs xl:text-sm font-semibold transition-all whitespace-nowrap relative ${
                    isActive
                      ? 'text-purple-700 dark:text-purple-300 font-extrabold bg-purple-50 dark:bg-purple-950/40 shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-2.5 right-2.5 h-0.5 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full" />
                  )}
                </button>
              );
            })}

            {/* More Services Dropdown */}
            <div className="relative">
              <button
                id="nav-more-trigger"
                onClick={() => {
                  setMoreDropdownOpen(!moreDropdownOpen);
                  setThemeDropdownOpen(false);
                }}
                className={`px-2.5 py-1.5 rounded-xl text-xs xl:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60 flex items-center gap-1 transition-all whitespace-nowrap ${
                  subPages.some(p => p.id === activePage) ? 'text-purple-700 dark:text-purple-300 font-bold bg-purple-50 dark:bg-purple-950/40' : ''
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {moreDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute right-0 mt-2 w-52 bg-white dark:bg-slate-800 ${activeConfig.cardRadius} shadow-2xl border border-slate-100 dark:border-slate-700 py-2 z-50`}
                  >
                    {subPages.map((item) => {
                      const Icon = item.icon;
                      const isActive = activePage === item.id;
                      return (
                        <button
                          key={item.id}
                          id={`nav-sub-${item.id}`}
                          onClick={() => navigate(item.id)}
                          className={`w-full text-left px-4 py-2 text-xs font-bold transition-colors flex items-center gap-2.5 ${
                            isActive
                              ? 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 font-extrabold'
                              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          <Icon className="w-4 h-4 opacity-70" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Actions: Theme Switcher & Dark Mode Toggle & Login & CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">

            {/* Theme Switcher Button */}
            <div className="relative">
              <button
                id="theme-switcher-btn"
                onClick={() => {
                  setThemeDropdownOpen(!themeDropdownOpen);
                  setMoreDropdownOpen(false);
                }}
                className={`px-2.5 py-1.5 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.primaryGradient} text-white text-xs font-extrabold flex items-center gap-1 shadow-sm hover:opacity-95 transition-all whitespace-nowrap`}
                title="Switch UI/UX Theme"
              >
                <Palette className="w-3.5 h-3.5" />
                <span className="hidden xl:inline text-[11px]">{themeConfigs[theme].name}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${themeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {themeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute right-0 mt-2 w-60 bg-white dark:bg-slate-800 ${activeConfig.cardRadius} shadow-2xl border border-slate-200 dark:border-slate-700 py-2 z-50`}
                  >
                    <div className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-700 mb-1">
                      Choose UI/UX Theme
                    </div>
                    {Object.values(themeConfigs).map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTheme(t.id);
                          setThemeDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs font-bold flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${
                          theme === t.id ? 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 font-extrabold' : 'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">{t.icon}</span>
                          <span>{t.name}</span>
                        </div>
                        {theme === t.id && <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark Mode Toggle */}
            <button
              id="dark-toggle-btn"
              onClick={toggleDark}
              aria-label="Toggle Dark Mode"
              className="p-1.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-600" />}
            </button>

            {/* Parent Login Button */}
            {isLoggedIn ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="nav-parent-portal-btn"
                onClick={() => navigate('parent-dashboard')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap bg-purple-600 text-white shadow-sm hover:bg-purple-700`}
              >
                <User className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Parent Dashboard</span>
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="nav-parent-login-btn"
                onClick={() => navigate('parent-login')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700`}
              >
                <User className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Parent Login</span>
              </motion.button>
            )}

            {/* Start Assessment CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="nav-cta-btn"
              onClick={() => navigate('how-it-works')}
              className={`hidden xl:flex items-center gap-1.5 px-3.5 py-1.5 ${activeConfig.cardRadius} text-xs font-extrabold transition-all whitespace-nowrap ${activeConfig.buttonPrimary} shadow-sm`}
            >
              <span>Discover Talent</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>

            {/* Mobile Hamburger Trigger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">
                UI/UX Theme Variation
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {Object.values(themeConfigs).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setMobileOpen(false);
                    }}
                    className={`p-2 text-center text-xs font-bold rounded-xl transition-all ${
                      theme === t.id ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {t.icon} {t.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                Navigation
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {[...mainPages, ...subPages].map((page) => (
                  <button
                    key={page.id}
                    onClick={() => navigate(page.id)}
                    className={`text-left px-3 py-2 text-xs rounded-xl font-bold transition-all ${
                      activePage === page.id ? 'bg-purple-600 text-white' : 'text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800'
                    }`}
                  >
                    {page.label}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('how-it-works')}
                  className={`w-full py-3 ${activeConfig.cardRadius} text-white font-extrabold text-sm flex items-center justify-center gap-2 ${activeConfig.buttonPrimary}`}
                >
                  <span>Start Talent Discovery</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
