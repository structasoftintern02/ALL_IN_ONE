import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import {
  Sun, Moon, Menu, X, ChevronDown, ArrowRight, Calculator,
  FileText, Phone, Home, Info, BookOpen, Shield, FileCheck,
  Landmark, HelpCircle, LayoutGrid
} from 'lucide-react';

const navLinks = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About Solar Loan', icon: Info },
  { id: 'loan-types', label: 'Loan Types', icon: LayoutGrid },
  { id: 'eligibility', label: 'Eligibility', icon: Shield },
  { id: 'documents', label: 'Documents', icon: FileCheck },
];

const moreLinks = [
  { id: 'how-to-apply', label: 'How to Apply', icon: BookOpen },
  { id: 'subsidy', label: 'Govt. Subsidy', icon: Landmark },
  { id: 'calculator', label: 'EMI Calculator', icon: Calculator },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
  { id: 'contact', label: 'Contact Us', icon: Phone },
];

export const Navbar = ({ activePage, setActivePage }) => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = (id) => {
    setActivePage(id);
    setMobileOpen(false);
    setMoreOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 border-b border-slate-200/80 dark:border-slate-700/80'
          : 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18 gap-4">

          {/* Brand Logo */}
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-2.5 group flex-shrink-0"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-500/30 group-hover:scale-105 transition-transform">
              <Sun className="w-5 h-5 text-white animate-spin-slow" />
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Solar<span className="text-emerald-600 dark:text-emerald-400">Loan</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  PRO
                </span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                Green Energy Finance
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-${link.id}`}
                  onClick={() => navigate(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all relative whitespace-nowrap ${
                    isActive
                      ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </button>
              );
            })}

            {/* More Dropdown */}
            <div className="relative">
              <button
                id="nav-more-dropdown"
                onClick={() => setMoreOpen(!moreOpen)}
                onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-all whitespace-nowrap ${
                  moreLinks.some(l => l.id === activePage)
                    ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-52 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-700 py-2 z-50"
                  >
                    {moreLinks.map((link) => {
                      const Icon = link.icon;
                      const isActive = activePage === link.id;
                      return (
                        <button
                          key={link.id}
                          id={`nav-more-${link.id}`}
                          onClick={() => navigate(link.id)}
                          className={`w-full text-left px-4 py-2.5 text-sm font-semibold flex items-center gap-3 transition-colors ${
                            isActive
                              ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          <Icon className="w-4 h-4 opacity-70" />
                          {link.label}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Dark Mode Toggle */}
            <button
              id="dark-mode-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Apply CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="nav-apply-btn"
              onClick={() => navigate('how-to-apply')}
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-bold shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-2 pb-2">
                Navigation
              </div>
              {[...navLinks, ...moreLinks].map((link) => {
                const Icon = link.icon;
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => navigate(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors ${
                      isActive
                        ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4 opacity-70" />
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => navigate('how-to-apply')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  Apply for Solar Loan <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
