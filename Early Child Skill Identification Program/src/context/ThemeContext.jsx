import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const VARIATIONS = {
  MODERN: 'modern',
  KIDS: 'kids',
  PREMIUM: 'premium'
};

export const variationConfigs = {
  [VARIATIONS.MODERN]: {
    id: 'modern',
    name: 'Modern Education',
    subtitle: 'Crisp White & Education Blue clean layout',
    bgClass: 'bg-slate-50 text-slate-900',
    cardBg: 'bg-white',
    cardBorder: 'border-slate-200 shadow-sm hover:shadow-md',
    cardRadius: 'rounded-xl',
    headerBg: 'bg-white text-slate-900 border-b border-slate-200',
    buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
    buttonSecondary: 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300',
    badgeClass: 'bg-blue-50 text-blue-800 border border-blue-200',
    accentText: 'text-blue-600',
    gradientBg: 'from-blue-700 via-indigo-800 to-slate-900',
    navText: 'text-slate-900'
  },
  [VARIATIONS.KIDS]: {
    id: 'kids',
    name: 'Kids Friendly',
    subtitle: 'Soft pastels, playful badges & organic rounded cards',
    bgClass: 'bg-amber-50/40 text-slate-900 font-kids',
    cardBg: 'bg-white',
    cardBorder: 'border-amber-200/80 shadow-md hover:shadow-lg hover:border-amber-300',
    cardRadius: 'rounded-3xl',
    headerBg: 'bg-amber-50/90 backdrop-blur-md border-b border-amber-200',
    buttonPrimary: 'bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:from-pink-600 hover:to-amber-600 text-white font-extrabold shadow-md shadow-pink-500/20',
    buttonSecondary: 'bg-white hover:bg-pink-50 text-pink-700 border border-pink-200',
    badgeClass: 'bg-pink-100 text-pink-900 border border-pink-300',
    accentText: 'text-pink-600',
    gradientBg: 'from-pink-500 via-purple-600 to-amber-500',
    navText: 'text-slate-900'
  },
  [VARIATIONS.PREMIUM]: {
    id: 'premium',
    name: 'Premium EdTech',
    subtitle: 'Vivid Purple & Teal SaaS architecture',
    bgClass: 'bg-slate-50 text-slate-900',
    cardBg: 'bg-white/90 backdrop-blur-md',
    cardBorder: 'border-purple-100 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10',
    cardRadius: 'rounded-2xl',
    headerBg: 'bg-white/90 backdrop-blur-md border-b border-purple-100',
    buttonPrimary: 'bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white shadow-lg shadow-purple-600/20',
    buttonSecondary: 'bg-white hover:bg-purple-50 text-purple-800 border border-purple-200',
    badgeClass: 'bg-purple-50 text-purple-800 border border-purple-200',
    accentText: 'text-purple-600',
    gradientBg: 'from-purple-900 via-slate-900 to-teal-950',
    navText: 'text-slate-900'
  }
};

export const ThemeProvider = ({ children }) => {
  const [variation, setVariation] = useState(VARIATIONS.KIDS); // Default to Kids Friendly for early child platform

  const activeConfig = variationConfigs[variation];

  useEffect(() => {
    document.body.classList.remove('theme-modern', 'theme-kids', 'theme-premium');
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
