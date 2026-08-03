import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const CONCEPTS = {
  CORPORATE: 'corporate',
  FINTECH: 'fintech',
  ECO: 'eco'
};

export const conceptConfigs = {
  [CONCEPTS.CORPORATE]: {
    id: 'corporate',
    name: 'Corporate Banking',
    subtitle: 'Classic, trustworthy & formal institutional style',
    font: 'font-sans',
    headingFont: 'font-heading',
    bgClass: 'bg-slate-50',
    primaryColor: '#0F172A',
    secondaryColor: '#1E293B',
    accentColor: '#0D9488',
    gradientBg: 'from-slate-900 via-slate-800 to-slate-950',
    gradientText: 'from-teal-400 to-emerald-300',
    cardBorder: 'border-slate-200 shadow-sm hover:shadow-md',
    cardRadius: 'rounded-xl',
    badgeClass: 'bg-teal-50 text-teal-800 border border-teal-200/60',
    buttonPrimary: 'bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-slate-900/20',
    buttonSecondary: 'bg-white hover:bg-slate-100 text-slate-900 border border-slate-300',
    accentBadge: 'bg-slate-900 text-white',
    iconColor: 'text-teal-600',
    heroTagline: 'Trusted Institutional Solar Financing'
  },
  [CONCEPTS.FINTECH]: {
    id: 'fintech',
    name: 'Modern FinTech',
    subtitle: 'Sleek dark/light indigo, cyan glass & instant digital workflow',
    font: 'font-sans',
    headingFont: 'font-heading',
    bgClass: 'bg-gray-50',
    primaryColor: '#4F46E5',
    secondaryColor: '#4338CA',
    accentColor: '#06B6D4',
    gradientBg: 'from-indigo-600 via-indigo-700 to-cyan-700',
    gradientText: 'from-cyan-300 to-emerald-300',
    cardBorder: 'border-indigo-100 shadow-lg shadow-indigo-500/5 hover:shadow-indigo-500/10',
    cardRadius: 'rounded-2xl',
    badgeClass: 'bg-indigo-50 text-indigo-700 border border-indigo-200/70',
    buttonPrimary: 'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white shadow-lg shadow-indigo-500/25',
    buttonSecondary: 'bg-white hover:bg-indigo-50/50 text-indigo-700 border border-indigo-200',
    accentBadge: 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white',
    iconColor: 'text-cyan-600',
    heroTagline: 'Next-Gen Instant Green Credit Engine'
  },
  [CONCEPTS.ECO]: {
    id: 'eco',
    name: 'Eco Solar Premium',
    subtitle: 'Vivid leaf green, solar gold gradients & sustainability focus',
    font: 'font-sans',
    headingFont: 'font-heading',
    bgClass: 'bg-emerald-50/40',
    primaryColor: '#15803D',
    secondaryColor: '#166534',
    accentColor: '#EAB308',
    gradientBg: 'from-emerald-700 via-emerald-800 to-teal-900',
    gradientText: 'from-amber-300 to-emerald-200',
    cardBorder: 'border-emerald-100 shadow-md hover:shadow-emerald-900/10',
    cardRadius: 'rounded-3xl',
    badgeClass: 'bg-emerald-100 text-emerald-800 border border-emerald-300/60',
    buttonPrimary: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-600/20',
    buttonSecondary: 'bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-200',
    accentBadge: 'bg-amber-500 text-slate-950 font-bold',
    iconColor: 'text-emerald-600',
    heroTagline: 'Zero Carbon, 100% Sun-Powered Financing'
  }
};

export const ThemeProvider = ({ children }) => {
  const [concept, setConcept] = useState(CONCEPTS.FINTECH); // Default to Modern FinTech

  const activeConfig = conceptConfigs[concept];

  useEffect(() => {
    // Remove previous concept classes from body
    document.body.classList.remove('concept-corporate', 'concept-fintech', 'concept-eco');
    document.body.classList.add(`concept-${concept}`);
  }, [concept]);

  return (
    <ThemeContext.Provider value={{ concept, setConcept, activeConfig }}>
      <div className={`min-h-screen transition-colors duration-300 ${activeConfig.bgClass}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
