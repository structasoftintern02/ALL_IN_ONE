import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { countriesData } from '../data/pricingData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/common/StaggerContainer';
import { Search, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export const CountrySelection = ({ setActivePage, selectedCountry, setSelectedCountry }) => {
  const { activeConfig } = useTheme();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCode, setActiveCode] = useState(selectedCountry ? selectedCountry.code : 'US');

  const filteredCountries = countriesData.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.currency.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectCountry = (country) => {
    setActiveCode(country.code);
    setSelectedCountry(country);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      
      {/* Header */}
      <ScrollReveal direction="down" amount={0.1} className="text-center max-w-2xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Localized Currency & Tax Compliance
        </span>
        <h1 className={`text-3xl sm:text-4xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
          Select Your Business Location & Country
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          We automatically adjust WhatsApp message pricing and billing currencies to match your regional market.
        </p>
      </ScrollReveal>

      {/* Search Input */}
      <ScrollReveal direction="up" amount={0.2} className="max-w-md mx-auto relative">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search by country name or currency (e.g. India, USD, GBP)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-900 rounded-2xl border border-slate-300 dark:border-gray-800 text-sm font-medium shadow-sm focus:ring-2 focus:ring-emerald-500"
        />
      </ScrollReveal>

      {/* Flag Grid */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredCountries.map((country) => {
          const isSelected = activeCode === country.code;
          return (
            <StaggerItem key={country.code} direction="scale">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelectCountry(country)}
                className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 h-full ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/40 shadow-md'
                    : 'border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-slate-300 dark:hover:border-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{country.flag}</span>
                  {isSelected && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  )}
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {country.name}
                  </h4>
                  <div className="flex items-center justify-between mt-1 text-xs text-slate-500">
                    <span>Currency:</span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {country.currency} ({country.symbol})
                    </span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Continue CTA */}
      <div className="flex justify-center pt-4">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setActivePage('pricing')}
          className={`px-8 py-4 ${activeConfig.cardRadius} text-sm font-extrabold transition-all shadow-xl flex items-center gap-2 ${activeConfig.buttonPrimary}`}
        >
          <span>View Plans for Selected Country</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

    </div>
  );
};
