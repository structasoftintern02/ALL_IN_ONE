import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { solarBenefits } from '../../data/solarData';
import { CheckCircle2 } from 'lucide-react';

export const Benefits = ({ setActivePage }) => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        <SectionHeader
          badge="✅ Key Benefits"
          title={<>Why Choose <span className="text-gradient-green">SolarLoan Pro</span></>}
          subtitle="We offer the most borrower-friendly solar loan experience in India. From zero paperwork to best-in-class rates, we make going solar effortless."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {solarBenefits.map((benefit, i) => (
            <StaggerItem key={i} direction="scale">
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
                className="group relative p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all overflow-hidden h-full"
              >
                {/* Gradient accent top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-md text-2xl group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {benefit.desc}
                </p>

                {/* Hover glow */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity`} />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Feature List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 rounded-3xl p-8 lg:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
                Everything You Need,{' '}
                <span className="text-gradient-green">In One Place</span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                SolarLoan Pro is India's most comprehensive solar loan comparison and application platform. We partner with 12+ banks and NBFCs to bring you unbeatable rates.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Free credit score check', '12+ bank comparison', 'Dedicated loan advisor',
                'PM Surya Ghar integrated', 'Instant sanction letter', '100% digital KYC',
                'Subsidy claim support', 'Zero hidden charges',
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
