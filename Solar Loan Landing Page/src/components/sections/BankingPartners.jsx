import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { bankingPartners } from '../../data/solarData';

export const BankingPartners = () => {
  return (
    <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <SectionHeader
          badge="🏦 Trusted Partners"
          title={<>Our <span className="text-gradient-green">Banking Partners</span></>}
          subtitle="We work with 12+ leading banks and NBFCs across India to ensure you get the most competitive solar loan rates and fastest processing."
        />

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4" staggerDelay={0.06}>
          {bankingPartners.map((bank, i) => (
            <StaggerItem key={i} direction="scale">
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all p-4 flex flex-col items-center gap-2 cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bank.color} flex items-center justify-center text-white font-extrabold text-xs shadow-md`}>
                  {bank.short}
                </div>
                <p className="text-[10px] font-bold text-slate-900 dark:text-white text-center leading-tight">{bank.name}</p>
                <p className="text-[9px] text-slate-500 dark:text-slate-400 text-center">{bank.type}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            + 4 more NBFCs including <strong className="text-slate-700 dark:text-slate-300">Tata Capital, Bajaj Finance, HDFC Credila, SIDBI</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
