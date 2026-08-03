import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const VARIATIONS = {
  CORPORATE: 'corporate',
  SAAS: 'saas',
  PREMIUM: 'premium'
};

export const variationConfigs = {
  [VARIATIONS.CORPORATE]: {
    id: 'corporate',
    name: 'Corporate Professional',
    subtitle: 'Classic Navy & Blue institutional HR portal',
    bgClass: 'bg-slate-50 text-slate-900',
    cardBg: 'bg-white',
    cardBorder: 'border-slate-200 shadow-sm hover:shadow-md',
    cardRadius: 'rounded-xl',
    headerBg: 'bg-slate-900 text-white border-b border-slate-800',
    buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
    buttonSecondary: 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300',
    badgeClass: 'bg-blue-50 text-blue-800 border border-blue-200',
    accentText: 'text-blue-600',
    gradientBg: 'from-slate-900 via-slate-800 to-blue-950',
    navText: 'text-white'
  },
  [VARIATIONS.SAAS]: {
    id: 'saas',
    name: 'Modern SaaS',
    subtitle: 'Indigo & Purple gradient with glassmorphism',
    bgClass: 'bg-slate-50 text-slate-900',
    cardBg: 'bg-white/90 backdrop-blur-md',
    cardBorder: 'border-indigo-100 shadow-lg shadow-indigo-500/5 hover:shadow-indigo-500/10',
    cardRadius: 'rounded-2xl',
    headerBg: 'bg-white/90 backdrop-blur-md border-b border-slate-200',
    buttonPrimary: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md shadow-indigo-500/20',
    buttonSecondary: 'bg-white hover:bg-indigo-50/50 text-indigo-700 border border-indigo-200',
    badgeClass: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
    accentText: 'text-indigo-600',
    gradientBg: 'from-indigo-600 via-purple-600 to-cyan-600',
    navText: 'text-slate-800'
  },
  [VARIATIONS.PREMIUM]: {
    id: 'premium',
    name: 'Premium Recruitment Platform',
    subtitle: 'Vivid Emerald Green with organic rounded cards',
    bgClass: 'bg-emerald-50/30 text-slate-900',
    cardBg: 'bg-white',
    cardBorder: 'border-emerald-100 shadow-md hover:shadow-emerald-900/10',
    cardRadius: 'rounded-3xl',
    headerBg: 'bg-white/90 backdrop-blur-md border-b border-emerald-200',
    buttonPrimary: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-600/20',
    buttonSecondary: 'bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-200',
    badgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    accentText: 'text-emerald-600',
    gradientBg: 'from-emerald-800 via-teal-900 to-slate-900',
    navText: 'text-slate-800'
  }
};

export const ThemeProvider = ({ children }) => {
  const [variation, setVariation] = useState(VARIATIONS.PREMIUM); // Default to Premium Recruitment

  const activeConfig = variationConfigs[variation];

  useEffect(() => {
    document.body.classList.remove('theme-corporate', 'theme-saas', 'theme-premium');
    document.body.classList.add(`theme-${variation}`);
  }, [variation]);

  return (
    <ThemeContext.Provider value={{ variation, setVariation, activeConfig }}>
      <div className={`min-h-screen transition-colors duration-300 ${activeConfig.bgClass}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
