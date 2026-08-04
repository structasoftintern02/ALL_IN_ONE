import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const THEMES = {
  PLAYFUL: 'playful',
  EDTECH: 'edtech',
  PREMIUM: 'premium',
};

export const themeConfigs = {
  [THEMES.PLAYFUL]: {
    id: 'playful',
    name: 'Playful Kids',
    icon: '🎨',
    tagline: 'Vibrant, friendly & fun learning environment',
    cardRadius: 'rounded-3xl',
    bgClass: 'bg-gradient-to-b from-rose-50/50 via-purple-50/30 to-amber-50/40 dark:from-slate-950 dark:via-purple-950/30 dark:to-slate-950',
    primaryGradient: 'from-rose-500 via-purple-500 to-amber-500',
    buttonPrimary: 'bg-gradient-to-r from-rose-500 via-purple-600 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white shadow-lg shadow-purple-500/30 font-extrabold',
    buttonSecondary: 'bg-white/90 dark:bg-slate-800/90 hover:bg-rose-50 dark:hover:bg-slate-700 text-purple-700 dark:text-purple-200 border border-purple-200 dark:border-purple-700/80 shadow-sm font-extrabold',
    badgeClass: 'bg-rose-100/90 dark:bg-rose-950/80 text-rose-800 dark:text-rose-200 border border-rose-200/90 dark:border-rose-800/80 shadow-xs',
    cardBorder: 'border-purple-100 dark:border-slate-800 shadow-xl shadow-purple-500/5',
    gradientText: 'from-rose-500 via-pink-400 to-amber-400 dark:from-rose-400 dark:via-pink-300 dark:to-amber-300',
    accentBadge: 'bg-amber-400 text-slate-950 font-extrabold',
    heroTagline: '🎈 Nurturing Young Minds & Natural Abilities',
  },
  [THEMES.EDTECH]: {
    id: 'edtech',
    name: 'Modern EdTech',
    icon: '⚡',
    tagline: 'Sleek cyan, indigo glass & AI-assisted talent discovery',
    cardRadius: 'rounded-2xl',
    bgClass: 'bg-gradient-to-b from-slate-50 via-indigo-50/30 to-cyan-50/30 dark:from-slate-950 dark:via-indigo-950/30 dark:to-slate-950',
    primaryGradient: 'from-indigo-600 via-cyan-600 to-emerald-500',
    buttonPrimary: 'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white shadow-lg shadow-indigo-500/30 font-extrabold',
    buttonSecondary: 'bg-white/90 dark:bg-slate-800/90 hover:bg-indigo-50 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-700/80 shadow-sm font-extrabold',
    badgeClass: 'bg-cyan-100/90 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-200 border border-cyan-200/90 dark:border-cyan-800/80 shadow-xs',
    cardBorder: 'border-indigo-100 dark:border-slate-800 shadow-lg shadow-indigo-500/5',
    gradientText: 'from-indigo-500 via-cyan-400 to-emerald-400 dark:from-indigo-400 dark:via-cyan-300 dark:to-emerald-300',
    accentBadge: 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white',
    heroTagline: '⚡ Next-Gen Scientific Child Talent Analytics',
  },
  [THEMES.PREMIUM]: {
    id: 'premium',
    name: 'Premium Educational',
    icon: '🏛️',
    tagline: 'Classic, trustworthy & formal institutional style',
    cardRadius: 'rounded-xl',
    bgClass: 'bg-gradient-to-b from-slate-50 via-amber-50/20 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950',
    primaryGradient: 'from-amber-600 via-emerald-700 to-slate-900',
    buttonPrimary: 'bg-gradient-to-r from-slate-900 via-amber-600 to-emerald-800 hover:from-slate-800 hover:to-emerald-700 text-white shadow-lg shadow-slate-900/30 font-extrabold',
    buttonSecondary: 'bg-white/90 dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 shadow-sm font-extrabold',
    badgeClass: 'bg-amber-100/90 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 border border-amber-300/90 dark:border-amber-800/80 shadow-xs',
    cardBorder: 'border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl',
    gradientText: 'from-amber-600 via-emerald-600 to-amber-500 dark:from-amber-400 dark:via-emerald-300 dark:to-amber-200',
    accentBadge: 'bg-slate-900 text-amber-400 border border-amber-500/30',
    heroTagline: '🏛️ Institutional Excellence in Early Child Mapping',
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.PLAYFUL); // Default Theme: Playful Kids
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('child-talent-dark');
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const activeConfig = themeConfigs[theme];

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('child-talent-dark', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('child-talent-dark', 'false');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, toggleDark, activeConfig }}>
      <div className={`min-h-screen transition-colors duration-300 ${activeConfig.bgClass}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
