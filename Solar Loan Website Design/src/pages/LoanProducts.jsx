import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, CONCEPTS } from '../context/ThemeContext';
import { productsData } from '../data/products';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/common/StaggerContainer';
import { CheckCircle2, ArrowRight, Sun, ShieldCheck, Zap, Sparkles, Building2, HelpCircle } from 'lucide-react';

export const LoanProducts = ({ setActivePage }) => {
  const { concept, activeConfig } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Home & Housing', 'Business & Factory', 'Agriculture & Farm', 'Storage & Backup', 'Existing Home Loan'];

  const filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <ScrollReveal direction="down" amount={0.1} className="text-center max-w-3xl mx-auto space-y-4">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Financing Options & Products
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold text-slate-900 ${activeConfig.headingFont}`}>
          Tailored Solar Loan Solutions
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Whether you are an individual homeowner, a commercial factory operator, or a farmer installing solar irrigation pumps, we have customized financing structures with low interest rates and Govt subsidy integration.
        </p>
      </ScrollReveal>

      {/* Category Tabs Filter */}
      <ScrollReveal direction="up" amount={0.2} className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeCategory === cat
                ? `${activeConfig.buttonPrimary}`
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </ScrollReveal>

      {/* Product Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -6 }}
              className={`bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300 h-full`}
            >
              <div>
                {/* Product Card Image Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <motion.img 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/90 text-slate-900 shadow-sm backdrop-blur-md">
                    {product.icon} {product.category}
                  </span>

                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-400 text-slate-950 shadow-sm">
                    {product.badge}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] text-teal-300 font-semibold uppercase tracking-wider block">Subsidy Benefit</span>
                    <span className="text-xs font-bold">{product.subsidyAmount}</span>
                  </div>
                </div>

                {/* Product Body Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Interest Rate</span>
                      <span className="font-extrabold text-teal-700 text-sm">{product.interestRate}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Max Funding</span>
                      <span className="font-bold text-slate-900 text-sm">{product.maxLoanAmount}</span>
                    </div>
                    <div className="col-span-2 pt-1 border-t border-slate-200 flex justify-between">
                      <span className="text-slate-500">Max Tenure:</span>
                      <span className="font-semibold text-slate-800">{product.tenure}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 text-xs">
                    <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px] block">Key Highlights</span>
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 font-medium border-t border-slate-100">
                    🎯 <strong>Ideal For:</strong> {product.idealFor}
                  </div>
                </div>
              </div>

              {/* Apply Button Footer */}
              <div className="p-6 pt-0">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActivePage('apply')}
                  className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-bold transition-all flex items-center justify-center gap-2 ${activeConfig.buttonPrimary}`}
                >
                  <span>Apply For {product.title.split(' ')[0]} Loan</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

    </div>
  );
};
