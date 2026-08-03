import React, { useState } from 'react';
import { useTheme, CONCEPTS } from '../context/ThemeContext';
import { faqsData } from '../data/faqs';
import { Search, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FaqPage = ({ setActivePage }) => {
  const { concept, activeConfig } = useTheme();

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndices, setOpenIndices] = useState({});

  const toggleAccordion = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenIndices(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Knowledge Hub & FAQs
        </span>
        <h1 className={`text-3xl sm:text-4xl font-extrabold text-slate-900 ${activeConfig.headingFont}`}>
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 text-sm">
          Everything you need to know about Solar Rooftop Loans, PM Surya Ghar subsidies, interest rates, and DISCOM Net Metering.
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-xl mx-auto relative">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search any question or keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-slate-300 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {/* Accordion Categories */}
      <div className="space-y-8">
        {faqsData.map((cat, cIdx) => {
          if (activeCategory !== 'All' && cat.category !== activeCategory) return null;

          const filteredQs = cat.questions.filter(q => 
            q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
            q.a.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filteredQs.length === 0) return null;

          return (
            <div key={cIdx} className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <HelpCircle className="w-5 h-5 text-teal-600" />
                <span>{cat.category} Questions</span>
              </h3>

              <div className="space-y-3">
                {filteredQs.map((faq, qIdx) => {
                  const key = `${cIdx}-${qIdx}`;
                  const isOpen = openIndices[key] || searchQuery.length > 0;

                  return (
                    <div 
                      key={qIdx}
                      className={`bg-white ${activeConfig.cardRadius} border border-slate-200/80 overflow-hidden transition-all shadow-xs`}
                    >
                      <button
                        onClick={() => toggleAccordion(cIdx, qIdx)}
                        className="w-full text-left p-4 font-bold text-slate-900 text-sm flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-teal-600">Q.</span>
                          <span>{faq.q}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
