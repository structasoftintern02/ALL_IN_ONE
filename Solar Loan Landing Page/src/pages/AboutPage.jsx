import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/common/SectionHeader';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const aboutTopics = [
  {
    emoji: '❓',
    title: 'What is a Solar Loan?',
    desc: 'A Solar Loan is a specialized financial product that helps individuals, businesses, and farmers install solar power systems without needing upfront capital. You borrow money from a bank or NBFC, purchase and install the solar system, and repay through monthly EMIs. Your electricity savings often exceed your EMI, making it a self-financing investment.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    emoji: '⚙️',
    title: 'How Does It Work?',
    desc: 'You apply online → get pre-approved → upload documents → bank evaluates your profile and the solar installation site → loan gets sanctioned → amount is disbursed directly to your empaneled solar vendor → solar system is installed → you start generating free electricity → repay EMI monthly from your savings.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    emoji: '👤',
    title: 'Who Can Apply?',
    desc: 'Any Indian citizen (age 21–65) with a stable income can apply. This includes salaried employees, self-employed professionals, business owners, MSME entrepreneurs, farmers, and housing societies. NRIs with Indian property are also eligible for select products.',
    color: 'from-violet-500 to-purple-500',
  },
];

const loanCategories = [
  { emoji: '🏠', title: 'Residential Solar Loans', desc: 'For homeowners installing rooftop solar panels on their residence. Covers 1kW–10kW systems.' },
  { emoji: '🏢', title: 'Commercial Solar Loans', desc: 'For offices, hotels, hospitals, retail stores. Larger ticket sizes up to ₹5 Crore.' },
  { emoji: '🏭', title: 'Industrial Solar Loans', desc: 'Project finance for factories, manufacturing plants. Up to ₹50 Crore under consortium lending.' },
  { emoji: '🌾', title: 'Agriculture Solar Loans', desc: 'PM-KUSUM scheme for solar irrigation pumps. Up to 90% government subsidy available.' },
  { emoji: '⚙️', title: 'MSME Solar Loans', desc: 'For small and medium enterprises. SIDBI-linked, low rates, fast 3-day approval.' },
  { emoji: '🏘️', title: 'Society Rooftop Loans', desc: 'Group loans for housing societies to install shared common area solar systems.' },
];

export const AboutPage = ({ setActivePage }) => {
  return (
    <div className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Hero */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800"
          >
            ☀️ Learn About Solar Loans
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white"
          >
            Everything About <span className="text-gradient-green">Solar Loans</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A complete guide to understanding solar loans — what they are, how they work, and how they can power your home or business for free.
          </motion.p>
        </div>

        {/* Main About Topics */}
        <div className="space-y-8">
          {aboutTopics.map((topic, i) => (
            <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-md p-8 flex flex-col sm:flex-row gap-6 items-start">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-3xl flex-shrink-0 shadow-md`}>
                  {topic.emoji}
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3">{topic.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{topic.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Solar Loan Categories */}
        <div className="space-y-8">
          <SectionHeader
            badge="📋 Loan Categories"
            title={<>Types of <span className="text-gradient-green">Solar Loans Available</span></>}
            subtitle="From small residential rooftop systems to large industrial power plants — we have a solar loan for every need."
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {loanCategories.map((cat, i) => (
              <StaggerItem key={i} direction="up">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg p-5 transition-all"
                >
                  <div className="text-3xl mb-3">{cat.emoji}</div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base mb-2">{cat.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{cat.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Quick Benefits Checklist */}
        <div className="bg-gradient-to-br from-emerald-950 to-slate-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
          <h3 className="text-2xl font-extrabold mb-6">Why Solar Loans Make Financial Sense 💡</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'EMI is often less than your electricity bill savings', 'System generates free power for 25+ years',
              'Government subsidy reduces net loan amount', 'Increases property value by 4-6%',
              'Tax depreciation benefit for businesses', 'Zero prepayment penalty on any loan',
              'Sell surplus power to grid and earn income', '100% digital, zero physical paperwork',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center flex flex-wrap gap-4 justify-center">
          <button onClick={() => setActivePage('loan-types')} className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold shadow-lg flex items-center gap-2">
            Explore Loan Types <ArrowRight className="w-5 h-5" />
          </button>
          <button onClick={() => setActivePage('eligibility')} className="px-8 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold">
            Check My Eligibility
          </button>
        </div>
      </div>
    </div>
  );
};
