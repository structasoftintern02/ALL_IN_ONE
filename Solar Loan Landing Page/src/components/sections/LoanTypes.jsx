import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { loanTypes } from '../../data/solarData';
import { CheckCircle2, ArrowRight, Clock, Percent, IndianRupee } from 'lucide-react';

const LoanCard = ({ loan, onApply, isExpanded, onToggle }) => (
  <motion.div
    layout
    whileHover={{ y: -4 }}
    className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer"
    onClick={onToggle}
  >
    {/* Top gradient bar */}
    <div className={`h-1.5 bg-gradient-to-r ${loan.color}`} />

    <div className="p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${loan.color} flex items-center justify-center text-2xl shadow-md`}>
            {loan.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{loan.title}</h3>
              {loan.badge && (
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${loan.badgeColor}`}>
                  {loan.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">{loan.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Key Info */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-2.5 text-center">
          <IndianRupee className="w-3 h-3 text-emerald-500 mx-auto mb-0.5" />
          <p className="text-[10px] font-extrabold text-slate-900 dark:text-white leading-tight">{loan.amount}</p>
          <p className="text-[9px] text-slate-500">Amount</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-2.5 text-center">
          <Clock className="w-3 h-3 text-blue-500 mx-auto mb-0.5" />
          <p className="text-[10px] font-extrabold text-slate-900 dark:text-white leading-tight">{loan.tenure}</p>
          <p className="text-[9px] text-slate-500">Tenure</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-2.5 text-center">
          <Percent className="w-3 h-3 text-amber-500 mx-auto mb-0.5" />
          <p className="text-[10px] font-extrabold text-slate-900 dark:text-white leading-tight">{loan.rate.split(' ').slice(0, 2).join(' ')}</p>
          <p className="text-[9px] text-slate-500">Rate</p>
        </div>
      </div>

      {/* Suitable For */}
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
        <span className="font-bold">Suitable for:</span> {loan.suitableFor}
      </p>

      {/* Expandable Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-100 dark:border-slate-700">
              <div>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">✨ Features</p>
                <ul className="space-y-1.5">
                  {loan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">🎯 Benefits</p>
                <ul className="space-y-1.5">
                  {loan.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-amber-500 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {isExpanded ? '▲ Less details' : '▼ More details'}
        </span>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={(e) => { e.stopPropagation(); onApply(); }}
          className={`px-4 py-2 text-xs font-bold text-white rounded-xl bg-gradient-to-r ${loan.color} flex items-center gap-1.5 shadow-md`}
        >
          Apply Now <ArrowRight className="w-3 h-3" />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export const LoanTypes = ({ setActivePage }) => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <SectionHeader
          badge="🏦 Loan Categories"
          title={<>Choose the Right <span className="text-gradient-green">Solar Loan</span></>}
          subtitle="Whether you're a homeowner, farmer, or business owner — we have a solar loan tailored exactly for your needs. Click any card to see full details."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {loanTypes.map((loan) => (
            <StaggerItem key={loan.id} direction="up">
              <LoanCard
                loan={loan}
                onApply={() => setActivePage('how-to-apply')}
                isExpanded={expandedId === loan.id}
                onToggle={() => setExpandedId(expandedId === loan.id ? null : loan.id)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center">
          <button
            onClick={() => setActivePage('how-to-apply')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-base shadow-lg inline-flex items-center gap-2"
          >
            Start Your Solar Loan Application <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
