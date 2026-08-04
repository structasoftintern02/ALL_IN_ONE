import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { subsidySchemes } from '../../data/solarData';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const GovernmentSubsidy = ({ setActivePage }) => {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        <SectionHeader
          badge="🏛️ Government Benefits"
          title={<>Massive <span className="text-gradient-solar">Government Subsidies</span> Available</>}
          subtitle="The Indian government offers substantial financial support for solar adoption. Combine these subsidies with your solar loan to dramatically reduce your net cost."
        />

        {/* Main Banner — PM Surya Ghar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50 border border-amber-200 dark:border-amber-800/50 p-8 lg:p-12 shadow-xl"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-xs font-bold mb-4 border border-amber-200 dark:border-amber-700">
                🏛️ Central Government — MNRE India
              </div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                PM Surya Ghar Muft Bijli Yojana
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                India's biggest residential solar scheme. Get up to <strong>₹78,000 direct subsidy</strong> credited to your bank account. Covers 1 crore homes with 300 units free electricity per month.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setActivePage('subsidy')}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-colors flex items-center gap-2 shadow-md"
                >
                  Know More <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-700 text-amber-700 dark:text-amber-400 font-bold text-sm transition-colors flex items-center gap-2">
                  pmsuryaghar.gov.in <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Subsidy amounts visual */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { kw: 'Up to 1 kW', amount: '₹30,000', color: 'from-amber-400 to-orange-400' },
                { kw: '1–2 kW', amount: '₹60,000', color: 'from-orange-400 to-red-400' },
                { kw: '2–3 kW', amount: '₹78,000', color: 'from-red-400 to-rose-400', highlight: true },
                { kw: 'Free Power', amount: '300 Units/mo', color: 'from-emerald-400 to-teal-400' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white text-center shadow-lg ${item.highlight ? 'ring-2 ring-amber-300' : ''}`}
                >
                  {item.highlight && <p className="text-[9px] font-bold uppercase tracking-widest text-white/80 mb-1">Maximum</p>}
                  <p className="text-xl font-extrabold">{item.amount}</p>
                  <p className="text-xs text-white/80 font-medium mt-0.5">{item.kw}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Other Subsidy Schemes */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {subsidySchemes.slice(1).map((scheme) => (
            <StaggerItem key={scheme.id} direction="up">
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-md hover:shadow-xl transition-all overflow-hidden h-full"
              >
                <div className={`h-1.5 bg-gradient-to-r ${scheme.color}`} />
                <div className="p-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold mb-4 ${
                    scheme.tag === 'State Level'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700'
                      : scheme.tag === 'Agriculture'
                      ? 'bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400 border border-lime-200 dark:border-lime-700'
                      : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700'
                  }`}>
                    {scheme.tag}
                  </div>

                  <div className="text-2xl mb-2">{scheme.icon}</div>
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white mb-1">{scheme.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{scheme.ministry}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{scheme.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {scheme.benefits.map((b, i) => (
                      <div key={i} className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-2.5">
                        <p className="text-base font-extrabold text-slate-900 dark:text-white">{b.amount}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">{b.label}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    📋 {scheme.howToApply}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center">
          <button
            onClick={() => setActivePage('subsidy')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg inline-flex items-center gap-2"
          >
            Explore All Government Schemes <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
