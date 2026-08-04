import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { documentCategories } from '../../data/solarData';
import { CheckCircle2, Circle, ChevronDown } from 'lucide-react';

export const Documents = ({ setActivePage }) => {
  const [activeCategory, setActiveCategory] = useState('personal');

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <SectionHeader
          badge="📋 Required Documents"
          title={<>Documents You <span className="text-gradient-green">Need to Apply</span></>}
          subtitle="Gather these documents before starting your application. Our 100% digital process means you can upload everything from your smartphone — no physical copies required."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center">
          {documentCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/25'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.icon} {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Documents */}
        <AnimatePresence mode="wait">
          {documentCategories.filter(c => c.id === activeCategory).map((cat) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`p-6 lg:p-8 rounded-3xl ${cat.lightBg} ${cat.darkBg} border border-slate-100 dark:border-slate-700`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-md`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{cat.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{cat.documents.filter(d => d.required).length} mandatory • {cat.documents.filter(d => !d.required).length} optional</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.documents.map((doc, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-white dark:border-slate-700 shadow-sm flex items-start gap-3"
                    >
                      {doc.required ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">{doc.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{doc.desc}</p>
                        {doc.required ? (
                          <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full mt-1 inline-block">
                            Required
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full mt-1 inline-block">
                            Optional
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* All Categories Overview */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.1}>
          {documentCategories.map((cat) => (
            <StaggerItem key={cat.id} direction="up">
              <button
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full p-4 rounded-2xl text-center border transition-all ${
                  activeCategory === cat.id
                    ? `${cat.lightBg} ${cat.darkBg} border-emerald-200 dark:border-emerald-700 shadow-md`
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{cat.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{cat.documents.length} docs</p>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center">
          <button
            onClick={() => setActivePage('how-to-apply')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold shadow-lg"
          >
            Start Application →
          </button>
        </div>
      </div>
    </section>
  );
};
