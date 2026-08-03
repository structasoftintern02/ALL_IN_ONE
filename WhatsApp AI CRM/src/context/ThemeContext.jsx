import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const VARIATIONS = {
  MODERN: 'modern',
  DARK: 'dark',
  WHATSAPP: 'whatsapp'
};

export const variationConfigs = {
  [VARIATIONS.MODERN]: {
    id: 'modern',
    name: 'Modern SaaS',
    subtitle: 'Crisp light slate, royal indigo & cyan accents',
    bgClass: 'bg-slate-50 text-slate-900',
    cardBg: 'bg-white',
    cardBorder: 'border-slate-200 shadow-sm hover:shadow-md',
    cardRadius: 'rounded-2xl',
    headerBg: 'bg-white/90 backdrop-blur-md border-b border-slate-200',
    sidebarBg: 'bg-slate-900 text-white',
    buttonPrimary: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20',
    buttonSecondary: 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300',
    badgeClass: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
    accentText: 'text-indigo-600',
    gradientBg: 'from-indigo-600 via-indigo-700 to-cyan-600',
    isDark: false
  },
  [VARIATIONS.DARK]: {
    id: 'dark',
    name: 'Premium Dark CRM',
    subtitle: 'Futuristic dark universe with neon emerald glows',
    bgClass: 'bg-gray-950 text-slate-100',
    cardBg: 'bg-gray-900/90 backdrop-blur-md',
    cardBorder: 'border-gray-800 shadow-lg shadow-black/40 hover:border-emerald-500/30',
    cardRadius: 'rounded-2xl',
    headerBg: 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800',
    sidebarBg: 'bg-gray-950 border-r border-gray-800 text-slate-200',
    buttonPrimary: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-extrabold shadow-lg shadow-emerald-500/20',
    buttonSecondary: 'bg-gray-800 hover:bg-gray-700 text-slate-100 border border-gray-700',
    badgeClass: 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/80',
    accentText: 'text-emerald-400',
    gradientBg: 'from-gray-900 via-gray-950 to-emerald-950',
    isDark: true
  },
  [VARIATIONS.WHATSAPP]: {
    id: 'whatsapp',
    name: 'WhatsApp Clean UI',
    subtitle: 'Official WhatsApp green, mint tint & chat bubble styling',
    bgClass: 'bg-emerald-50/40 text-emerald-950',
    cardBg: 'bg-white',
    cardBorder: 'border-emerald-200/80 shadow-sm hover:border-emerald-400',
    cardRadius: 'rounded-3xl',
    headerBg: 'bg-white/90 backdrop-blur-md border-b border-emerald-200',
    sidebarBg: 'bg-[#075E54] text-white',
    buttonPrimary: 'bg-[#075E54] hover:bg-[#128C7E] text-white shadow-md shadow-emerald-900/20',
    buttonSecondary: 'bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-300',
    badgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    accentText: 'text-[#075E54]',
    gradientBg: 'from-[#075E54] via-[#128C7E] to-teal-800',
    isDark: false
  }
};

export const ThemeProvider = ({ children }) => {
  const [variation, setVariation] = useState(VARIATIONS.MODERN);

  const activeConfig = variationConfigs[variation];

  useEffect(() => {
    document.body.classList.remove('theme-modern', 'theme-dark', 'theme-whatsapp');
    document.body.classList.add(`theme-${variation}`);
    if (activeConfig.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
