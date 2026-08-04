import React, { createContext, useContext, useState } from 'react';

export const VARIATIONS = {
  OBSIDIAN_BLUE: 'obsidian_blue',
  MIDNIGHT_PURPLE: 'midnight_purple',
  EMERALD_ENTERPRISE: 'emerald_enterprise',
  CYBER_CYAN: 'cyber_cyan',
  AMBER_GOLD: 'amber_gold',
  CRIMSON_RUBY: 'crimson_ruby',
  FOREST_MINT: 'forest_mint'
};

const themeConfigs = {
  [VARIATIONS.OBSIDIAN_BLUE]: {
    name: 'Obsidian Sapphire Dark',
    badge: '🌑 Obsidian Sapphire Dark',
    dotColor: 'bg-blue-500',
    headerBg: 'bg-slate-950/90 text-white backdrop-blur-xl border-b border-slate-800',
    sidebarBg: 'bg-slate-950 text-white border-r border-slate-800',
    cardBg: 'bg-slate-900/90 text-white',
    cardBorder: 'border border-slate-800 shadow-xl',
    cardRadius: 'rounded-2xl',
    buttonPrimary: 'bg-blue-600 hover:bg-blue-500 text-white font-extrabold shadow-lg shadow-blue-600/30',
    buttonSecondary: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
    accentText: 'text-blue-400',
    badgeClass: 'bg-blue-950 text-blue-400 border border-blue-800',
    gradientBg: 'from-slate-950 via-blue-950/60 to-slate-950',
    isDark: true
  },
  [VARIATIONS.MIDNIGHT_PURPLE]: {
    name: 'Midnight Neon Purple',
    badge: '🔮 Midnight Neon Purple',
    dotColor: 'bg-purple-500',
    headerBg: 'bg-zinc-950/90 text-white backdrop-blur-xl border-b border-zinc-800',
    sidebarBg: 'bg-zinc-950 text-white border-r border-zinc-800',
    cardBg: 'bg-zinc-900/90 text-white',
    cardBorder: 'border border-purple-900/50 shadow-xl',
    cardRadius: 'rounded-2xl',
    buttonPrimary: 'bg-purple-600 hover:bg-purple-500 text-white font-extrabold shadow-lg shadow-purple-600/30',
    buttonSecondary: 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700',
    accentText: 'text-purple-400',
    badgeClass: 'bg-purple-950 text-purple-400 border border-purple-800',
    gradientBg: 'from-zinc-950 via-purple-950/60 to-zinc-950',
    isDark: true
  },
  [VARIATIONS.EMERALD_ENTERPRISE]: {
    name: 'Emerald Enterprise Dark',
    badge: '💎 Emerald Enterprise Dark',
    dotColor: 'bg-emerald-500',
    headerBg: 'bg-gray-950/90 text-white backdrop-blur-xl border-b border-gray-800',
    sidebarBg: 'bg-gray-950 text-white border-r border-gray-800',
    cardBg: 'bg-gray-900/90 text-white',
    cardBorder: 'border border-emerald-900/50 shadow-xl',
    cardRadius: 'rounded-2xl',
    buttonPrimary: 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold shadow-lg shadow-emerald-500/30',
    buttonSecondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700',
    accentText: 'text-emerald-400',
    badgeClass: 'bg-emerald-950 text-emerald-400 border border-emerald-800',
    gradientBg: 'from-gray-950 via-emerald-950/60 to-gray-950',
    isDark: true
  },
  [VARIATIONS.CYBER_CYAN]: {
    name: 'Cyberpunk Neon Cyan',
    badge: '⚡ Cyberpunk Neon Cyan',
    dotColor: 'bg-cyan-400',
    headerBg: 'bg-slate-950/90 text-white backdrop-blur-xl border-b border-slate-800',
    sidebarBg: 'bg-slate-950 text-white border-r border-slate-800',
    cardBg: 'bg-slate-900/90 text-white',
    cardBorder: 'border border-cyan-900/50 shadow-xl',
    cardRadius: 'rounded-2xl',
    buttonPrimary: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/30',
    buttonSecondary: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
    accentText: 'text-cyan-400',
    badgeClass: 'bg-cyan-950 text-cyan-400 border border-cyan-800',
    gradientBg: 'from-slate-950 via-cyan-950/60 to-slate-950',
    isDark: true
  },
  [VARIATIONS.AMBER_GOLD]: {
    name: 'Charcoal Amber Gold',
    badge: '🔥 Charcoal Amber Gold',
    dotColor: 'bg-amber-500',
    headerBg: 'bg-stone-950/90 text-white backdrop-blur-xl border-b border-stone-800',
    sidebarBg: 'bg-stone-950 text-white border-r border-stone-800',
    cardBg: 'bg-stone-900/90 text-white',
    cardBorder: 'border border-amber-900/50 shadow-xl',
    cardRadius: 'rounded-2xl',
    buttonPrimary: 'bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold shadow-lg shadow-amber-500/30',
    buttonSecondary: 'bg-stone-800 hover:bg-stone-700 text-white border border-stone-700',
    accentText: 'text-amber-400',
    badgeClass: 'bg-amber-950 text-amber-400 border border-amber-800',
    gradientBg: 'from-stone-950 via-amber-950/60 to-stone-950',
    isDark: true
  },
  [VARIATIONS.CRIMSON_RUBY]: {
    name: 'Deep Ruby Crimson',
    badge: '🩸 Deep Ruby Crimson',
    dotColor: 'bg-rose-500',
    headerBg: 'bg-neutral-950/90 text-white backdrop-blur-xl border-b border-neutral-800',
    sidebarBg: 'bg-neutral-950 text-white border-r border-neutral-800',
    cardBg: 'bg-neutral-900/90 text-white',
    cardBorder: 'border border-rose-900/50 shadow-xl',
    cardRadius: 'rounded-2xl',
    buttonPrimary: 'bg-rose-600 hover:bg-rose-500 text-white font-extrabold shadow-lg shadow-rose-600/30',
    buttonSecondary: 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700',
    accentText: 'text-rose-400',
    badgeClass: 'bg-rose-950 text-rose-400 border border-rose-800',
    gradientBg: 'from-neutral-950 via-rose-950/60 to-neutral-950',
    isDark: true
  },
  [VARIATIONS.FOREST_MINT]: {
    name: 'Dark Forest Mint',
    badge: '🌿 Dark Forest Mint',
    dotColor: 'bg-teal-400',
    headerBg: 'bg-slate-950/90 text-white backdrop-blur-xl border-b border-slate-800',
    sidebarBg: 'bg-slate-950 text-white border-r border-slate-800',
    cardBg: 'bg-slate-900/90 text-white',
    cardBorder: 'border border-teal-900/50 shadow-xl',
    cardRadius: 'rounded-2xl',
    buttonPrimary: 'bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold shadow-lg shadow-teal-500/30',
    buttonSecondary: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
    accentText: 'text-teal-400',
    badgeClass: 'bg-teal-950 text-teal-400 border border-teal-800',
    gradientBg: 'from-slate-950 via-teal-950/60 to-slate-950',
    isDark: true
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [variation, setVariation] = useState(VARIATIONS.OBSIDIAN_BLUE);

  const activeConfig = themeConfigs[variation];

  return (
    <ThemeContext.Provider value={{ variation, setVariation, activeConfig, themeConfigs }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
