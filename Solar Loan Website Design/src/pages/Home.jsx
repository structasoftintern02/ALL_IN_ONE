import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme, CONCEPTS } from '../context/ThemeContext';
import { lendersData } from '../data/lenders';
import { productsData } from '../data/products';
import { faqsData } from '../data/faqs';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/common/StaggerContainer';
import { ParallaxBox } from '../components/common/ParallaxBox';
import { AnimatedCounter } from '../components/common/AnimatedCounter';
import { 
  Sun, Zap, ShieldCheck, ArrowRight, CheckCircle2, Award, Building2, 
  TrendingUp, Clock, FileText, ChevronRight, Star, Percent, Sparkles, UserCheck 
} from 'lucide-react';

export const Home = ({ setActivePage }) => {
  const { concept, activeConfig } = useTheme();
  
  // Quick hero calculator inputs
  const [quickLoanAmount, setQuickLoanAmount] = useState(300000);
  const [quickTenureYears, setQuickTenureYears] = useState(5);

  // Quick estimation logic (assuming 6.95% rate)
  const monthlyRate = 6.95 / 12 / 100;
  const nMonths = quickTenureYears * 12;
  const estimatedEmi = Math.round(
    (quickLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, nMonths)) /
    (Math.pow(1 + monthlyRate, nMonths) - 1)
  );
  const estimatedElectricitySavedMonth = Math.round(estimatedEmi * 1.35); // Solar usually saves more than EMI!

  return (
    <div className="space-y-20 pb-16 overflow-hidden">
      
      {/* SECTION 1: HERO BANNER WITH PARALLAX & ENTRANCE MOTION */}
      <section className={`relative pt-16 pb-24 overflow-hidden border-b border-slate-200/60 ${
        concept === CONCEPTS.CORPORATE 
          ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-white' 
          : concept === CONCEPTS.FINTECH 
          ? 'bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white' 
          : 'bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 text-white'
      }`}>
        
        {/* Parallax Floating Sun & Decorative Elements */}
        <ParallaxBox offset={-45} className="absolute top-10 left-10 opacity-20 pointer-events-none hidden lg:block">
          <div className="w-52 h-52 rounded-full bg-amber-400 blur-3xl" />
        </ParallaxBox>
        <ParallaxBox offset={60} className="absolute bottom-10 right-10 opacity-20 pointer-events-none hidden lg:block">
          <div className="w-64 h-64 rounded-full bg-teal-400 blur-3xl" />
        </ParallaxBox>

        {/* Glow & grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                <span className="text-white/90">{activeConfig.heroTagline}</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
              >
                Finance Your Solar System at <span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>6.75% Interest</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-300 leading-relaxed max-w-2xl"
              >
                Get up to <strong className="text-white">100% paperless financing</strong> for residential rooftop and commercial solar panels. Direct credit PM Surya Ghar subsidy up to ₹78,000. Zero foreclosure fee.
              </motion.p>

              {/* Key Highlights Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
              >
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-white/5 p-2.5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Collateral-Free to ₹10L</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-white/5 p-2.5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>6-Hour Pre-Sanction</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-white/5 p-2.5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>0% Prepayment Penalty</span>
                </div>
              </motion.div>

              {/* Primary Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActivePage('eligibility')}
                  className={`px-8 py-4 ${activeConfig.cardRadius} text-base font-bold flex items-center gap-3 shadow-lg transition-all ${activeConfig.buttonPrimary}`}
                >
                  <span>Check Instant Eligibility</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActivePage('compare')}
                  className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
                >
                  <span>Compare 6 Bank Rates</span>
                </motion.button>
              </motion.div>

              <div className="flex items-center gap-4 pt-4 text-xs text-slate-400">
                <div className="flex -space-x-2">
                  <span className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center font-bold text-white text-[10px] border-2 border-slate-900">RS</span>
                  <span className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-[10px] border-2 border-slate-900">AK</span>
                  <span className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center font-bold text-white text-[10px] border-2 border-slate-900">VM</span>
                </div>
                <span>Over <strong>15,000+</strong> Indian homes powered by SolarLoan Pro in 2026.</span>
              </div>
            </div>

            {/* Right Widget: Quick Hero EMI & Savings Calculator */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className={`p-6 bg-white text-slate-900 ${activeConfig.cardRadius} shadow-2xl border border-slate-100 space-y-5 relative hover:shadow-3xl transition-all`}>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Quick Solar Loan Calculator</h3>
                    <p className="text-xs text-slate-500">Instant estimate with top partner banks</p>
                  </div>
                  <span className="text-2xl animate-float">⚡</span>
                </div>

                {/* Slider 1: Amount */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Loan Amount</span>
                    <span className="text-teal-700 font-bold">₹{(quickLoanAmount / 100000).toFixed(2)} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="1500000"
                    step="50000"
                    value={quickLoanAmount}
                    onChange={(e) => setQuickLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹1L</span>
                    <span>₹7.5L</span>
                    <span>₹15L</span>
                  </div>
                </div>

                {/* Slider 2: Tenure */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Tenure</span>
                    <span className="text-teal-700 font-bold">{quickTenureYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="10"
                    step="1"
                    value={quickTenureYears}
                    onChange={(e) => setQuickTenureYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  />
                </div>

                {/* Output Card */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 font-medium">Estimated Monthly EMI:</span>
                    <span className="text-xl font-extrabold text-slate-900">₹{estimatedEmi.toLocaleString('en-IN')}/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" /> Approx Electricity Saved:
                    </span>
                    <span className="text-emerald-800 font-bold">~₹{estimatedElectricitySavedMonth.toLocaleString('en-IN')}/mo</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 text-center">
                    💡 <strong>Net Gain:</strong> Your solar electricity savings cover your loan EMI!
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActivePage('apply')}
                  className={`w-full py-3.5 ${activeConfig.cardRadius} text-sm font-bold text-center transition-all ${activeConfig.buttonPrimary}`}
                >
                  Apply For ₹{(quickLoanAmount / 100000).toFixed(2)}L Solar Loan →
                </motion.button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS COUNTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" amount={0.3}>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">
                <AnimatedCounter prefix="₹" to={450} suffix=" Cr+" />
              </div>
              <p className="text-xs font-semibold text-slate-500">Solar Loans Sanctioned</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-teal-600">
                <AnimatedCounter to={18500} suffix="+" />
              </div>
              <p className="text-xs font-semibold text-slate-500">Solar Panel Installations</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-500">
                <AnimatedCounter to={0} suffix="%" />
              </div>
              <p className="text-xs font-semibold text-slate-500">Down Payment Option</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600">
                <AnimatedCounter to={99} suffix="%" />
              </div>
              <p className="text-xs font-semibold text-slate-500">Pre-Approval Success Rate</p>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 2: TRUSTED PARTNER BANKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Empaneled Official Green Finance Partners
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {lendersData.map((lender) => (
            <StaggerItem key={lender.id} direction="scale">
              <motion.div 
                whileHover={{ y: -5, scale: 1.03 }}
                onClick={() => setActivePage('compare')}
                className={`p-4 bg-white ${activeConfig.cardRadius} border border-slate-200/80 text-center cursor-pointer shadow-xs hover:shadow-md transition-all group h-full flex flex-col justify-between`}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{lender.bankLogo}</div>
                <div>
                  <h3 className="text-xs font-bold text-slate-800 line-clamp-1">{lender.name}</h3>
                  <p className="text-[11px] text-teal-700 font-semibold mt-1">From {lender.interestRate}% p.a.</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* SECTION 3: WHY CHOOSE SOLAR LOAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 ${activeConfig.badgeClass} rounded-full`}>
            Why Solar Finance?
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold text-slate-900 ${activeConfig.headingFont}`}>
            Turn Your Rooftop Into a Money-Generating Asset
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Instead of paying lifetime electricity bills to DISCOMs, pay a fixed solar loan EMI for 3-5 years and enjoy free clean solar power for the next 20+ years.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggerItem direction="up">
            <motion.div whileHover={{ y: -6 }} className={`p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 shadow-sm hover:shadow-xl transition-all h-full`}>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xl">
                💰
              </div>
              <h3 className="text-xl font-bold text-slate-900">Zero Out Power Bills</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Slash your monthly home or factory electricity bill by up to 90% via Net Metering grid credit export.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="up">
            <motion.div whileHover={{ y: -6 }} className={`p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 shadow-sm hover:shadow-xl transition-all h-full`}>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-xl">
                🏛️
              </div>
              <h3 className="text-xl font-bold text-slate-900">Direct PM Surya Subsidy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Up to ₹78,000 Central Govt direct subsidy credit into your linked savings bank account.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="up">
            <motion.div whileHover={{ y: -6 }} className={`p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 shadow-sm hover:shadow-xl transition-all h-full`}>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-slate-900">Zero Foreclosure Penalty</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Foreclose or part-prepay your solar loan anytime after 6 months without paying extra bank penalties.
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* SECTION 4: COMPARE LENDERS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold text-slate-900 ${activeConfig.headingFont}`}>
              Top Solar Lenders Overview
            </h2>
            <p className="text-sm text-slate-500 mt-1">Compare interest rates, tenure, and collateral requirements.</p>
          </div>
          <button
            onClick={() => setActivePage('compare')}
            className={`px-5 py-2.5 ${activeConfig.cardRadius} text-sm font-semibold flex items-center gap-2 hover:scale-105 transition-all ${activeConfig.buttonSecondary}`}
          >
            <span>View Full Comparison Table</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lendersData.slice(0, 3).map((lender) => (
            <StaggerItem key={lender.id} direction="scale">
              <motion.div whileHover={{ y: -6 }} className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{lender.bankLogo}</span>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">{lender.name}</h3>
                        <span className="text-[11px] text-slate-500">{lender.bankType}</span>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 text-[11px] font-bold ${activeConfig.badgeClass} rounded-full`}>
                      {lender.badgeText}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block">Interest Rate</span>
                      <span className="text-base font-extrabold text-teal-700">{lender.interestRate}% p.a.</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Max Loan</span>
                      <span className="text-base font-extrabold text-slate-900">₹{(lender.maxLoanAmount / 100000).toFixed(1)} Lakhs</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Max Tenure</span>
                      <span className="font-bold text-slate-800">{lender.loanTenureYears} Years</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Approval Time</span>
                      <span className="font-bold text-slate-800">{lender.approvalTimeHours} Hours</span>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActivePage('apply')}
                  className={`w-full py-2.5 ${activeConfig.cardRadius} text-xs font-bold transition-all ${activeConfig.buttonPrimary}`}
                >
                  Apply with {lender.name.split(' ')[0]}
                </motion.button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* SECTION 5: HOW IT WORKS (4 STEPS) */}
      <section className={`py-16 ${
        concept === CONCEPTS.CORPORATE ? 'bg-slate-900 text-white' : concept === CONCEPTS.FINTECH ? 'bg-indigo-950 text-white' : 'bg-emerald-950 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down" className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 px-3 py-1 bg-white/10 rounded-full">
              Seamless 4-Step Process
            </span>
            <h2 className="text-3xl font-extrabold mt-3">How Solar Financing Works</h2>
            <p className="text-slate-300 text-sm mt-2">100% paperless from rate check to installer disbursement.</p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StaggerItem direction="up">
              <motion.div whileHover={{ y: -6 }} className="p-6 bg-white/5 rounded-2xl border border-white/10 relative h-full">
                <span className="text-4xl font-extrabold text-white/20 absolute top-4 right-4">01</span>
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="font-bold text-lg text-white mb-2">Check Rate</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Enter solar project cost & monthly income to get instant pre-approved bank rates in 60 seconds.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem direction="up">
              <motion.div whileHover={{ y: -6 }} className="p-6 bg-white/5 rounded-2xl border border-white/10 relative h-full">
                <span className="text-4xl font-extrabold text-white/20 absolute top-4 right-4">02</span>
                <div className="w-10 h-10 rounded-xl bg-teal-400 text-slate-950 flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="font-bold text-lg text-white mb-2">Upload KYC & Quote</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Drag & drop Aadhaar, PAN, bank statement, and solar installer estimate.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem direction="up">
              <motion.div whileHover={{ y: -6 }} className="p-6 bg-white/5 rounded-2xl border border-white/10 relative h-full">
                <span className="text-4xl font-extrabold text-white/20 absolute top-4 right-4">03</span>
                <div className="w-10 h-10 rounded-xl bg-cyan-400 text-slate-950 flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h3 className="font-bold text-lg text-white mb-2">Instant E-Sanction</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Receive digital loan sanction letter with fixed EMI and terms signed via Aadhaar OTP.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem direction="up">
              <motion.div whileHover={{ y: -6 }} className="p-6 bg-white/5 rounded-2xl border border-white/10 relative h-full">
                <span className="text-4xl font-extrabold text-white/20 absolute top-4 right-4">04</span>
                <div className="w-10 h-10 rounded-xl bg-emerald-400 text-slate-950 flex items-center justify-center font-bold mb-4">
                  4
                </div>
                <h3 className="font-bold text-lg text-white mb-2">Tranche Disbursal</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Direct vendor disbursement based on panel delivery & DISCOM Net Metering sync.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 6: CUSTOMER REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={`text-3xl font-extrabold text-slate-900 ${activeConfig.headingFont}`}>
            Loved By 15,000+ Solar Rooftop Owners
          </h2>
          <p className="text-sm text-slate-500 mt-2">Real reviews from verified borrowers across India.</p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StaggerItem direction="up">
            <motion.div whileHover={{ y: -6 }} className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between`}>
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
                </div>
                <p className="text-sm text-slate-700 italic">
                  "Got my 5 kW SBI Green Solar loan approved in under 18 hours. My electricity bill was ₹7,200/mo and is now practically zero. My loan EMI is ₹4,800!"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-sm">
                  MK
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Manish Kulkarni</h4>
                  <p className="text-[11px] text-slate-500">5 kW Solar Rooftop • Pune, Maharashtra</p>
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="up">
            <motion.div whileHover={{ y: -6 }} className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between`}>
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
                </div>
                <p className="text-sm text-slate-700 italic">
                  "Tata Capital clean energy team handled the factory solar loan seamlessly. 40% accelerated tax depreciation saved us Lakhs in year 1."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm">
                  SR
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Suresh Reddy</h4>
                  <p className="text-[11px] text-slate-500">40 kW Factory Solar • Hyderabad</p>
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="up">
            <motion.div whileHover={{ y: -6 }} className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between`}>
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
                </div>
                <p className="text-sm text-slate-700 italic">
                  "The document upload process was so simple! Direct PM Surya Ghar subsidy of ₹78,000 was credited directly to my HDFC account."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
                  AP
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Ananya Patel</h4>
                  <p className="text-[11px] text-slate-500">3 kW Rooftop • Ahmedabad, Gujarat</p>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* SECTION 7: FAQ PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold text-slate-900 ${activeConfig.headingFont}`}>
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500 mt-1">Get instant answers regarding rates, subsidy, and approvals.</p>
          </div>
          <button
            onClick={() => setActivePage('faq')}
            className="text-sm font-bold text-teal-700 hover:text-teal-800 underline"
          >
            View All FAQs →
          </button>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqsData[0].questions.map((faq, idx) => (
            <StaggerItem key={idx} direction="scale">
              <motion.div whileHover={{ y: -4 }} className={`p-6 bg-white ${activeConfig.cardRadius} border border-slate-200/80 space-y-2 shadow-xs hover:shadow-md transition-all h-full`}>
                <h4 className="font-bold text-slate-900 text-sm flex items-start gap-2">
                  <span className="text-teal-600 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* SECTION 8: FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale" amount={0.3}>
          <div className={`p-10 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.gradientBg} text-white text-center space-y-6 shadow-2xl relative overflow-hidden`}>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Stop Paying Heavy DISCOM Power Bills Today!
            </h2>
            <p className="text-slate-200 max-w-xl mx-auto text-sm sm:text-base">
              Get instant pre-approval for solar rooftop financing starting at 6.75% p.a. Zero collateral up to ₹10 Lakhs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActivePage('apply')}
                className={`px-8 py-4 bg-white text-slate-900 font-extrabold ${activeConfig.cardRadius} shadow-lg hover:bg-slate-100 flex items-center gap-2 transition-all`}
              >
                <span>Apply for Solar Loan Now</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActivePage('calculator')}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all"
              >
                Calculate Solar ROI Savings
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
