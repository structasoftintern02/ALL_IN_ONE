import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { stats } from '../../data/solarData';
import { Leaf, Zap, TrendingDown, Home, Factory, Globe } from 'lucide-react';

const whyCards = [
  {
    icon: TrendingDown,
    emoji: '📉',
    title: 'Cut Electricity Bills by 80%',
    desc: 'Solar panels generate free electricity from sunlight. Most families save ₹40,000–₹80,000 annually on electricity bills after going solar.',
    color: 'from-emerald-500 to-teal-500',
    lightBg: 'bg-emerald-50 dark:bg-emerald-900/20',
    borderColor: 'border-emerald-100 dark:border-emerald-800/50',
  },
  {
    icon: Globe,
    emoji: '🌍',
    title: 'Reduce Carbon Footprint',
    desc: 'A 5kW solar system prevents 4–6 tonnes of CO₂ emissions annually. Go green and contribute to India\'s net zero 2070 mission.',
    color: 'from-blue-500 to-indigo-500',
    lightBg: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-100 dark:border-blue-800/50',
  },
  {
    icon: Home,
    emoji: '🏠',
    title: 'Increase Property Value',
    desc: 'Homes with solar panels sell 4.1% higher on average. Solar installation is a permanent upgrade that adds lasting value.',
    color: 'from-violet-500 to-purple-500',
    lightBg: 'bg-violet-50 dark:bg-violet-900/20',
    borderColor: 'border-violet-100 dark:border-violet-800/50',
  },
  {
    icon: Zap,
    emoji: '⚡',
    title: 'Energy Independence',
    desc: 'Generate your own electricity and become energy independent. With battery backup, enjoy uninterrupted power 24x7.',
    color: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50 dark:bg-amber-900/20',
    borderColor: 'border-amber-100 dark:border-amber-800/50',
  },
  {
    icon: Leaf,
    emoji: '🌿',
    title: 'Government Subsidy Up to ₹78,000',
    desc: 'PM Surya Ghar Yojana offers up to ₹78,000 direct benefit transfer for residential solar. Multiple state-level incentives are also available.',
    color: 'from-lime-500 to-green-500',
    lightBg: 'bg-lime-50 dark:bg-lime-900/20',
    borderColor: 'border-lime-100 dark:border-lime-800/50',
  },
  {
    icon: Factory,
    emoji: '🏭',
    title: 'Zero Grid Dependency',
    desc: 'Net metering allows you to sell surplus power back to the grid and earn monthly income. Your solar system pays for itself in 4-6 years.',
    color: 'from-rose-500 to-pink-500',
    lightBg: 'bg-rose-50 dark:bg-rose-900/20',
    borderColor: 'border-rose-100 dark:border-rose-800/50',
  },
];

export const WhySolar = ({ setActivePage }) => {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        <SectionHeader
          badge="🌞 Why Solar Energy?"
          title={<>Why India is Going <span className="text-gradient-green">Solar Fast</span></>}
          subtitle="Solar energy is not just eco-friendly — it's financially smart. Discover why over 15,000 Indian families chose solar financing through SolarLoan Pro in 2026."
        />

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className={`text-3xl font-extrabold ${stat.color} dark:${stat.color}`}>
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix}
                  decimal={stat.decimal}
                />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {whyCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={i} direction="up">
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                  className={`p-6 rounded-2xl border ${card.lightBg} ${card.borderColor} h-full transition-all cursor-default`}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl mb-2">{card.emoji}</div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{card.desc}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActivePage('loan-types')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-base shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all inline-flex items-center gap-2"
          >
            Explore Solar Loan Options →
          </motion.button>
        </div>
      </div>
    </section>
  );
};
