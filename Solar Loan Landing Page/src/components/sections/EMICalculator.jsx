import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { ArrowRight } from 'lucide-react';

export const EMICalculator = ({ setActivePage }) => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [tenure, setTenure] = useState(5);

  const { emi, totalInterest, totalAmount, monthlySaving } = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const n = tenure * 12;
    if (monthlyRate === 0) {
      const e = Math.round(loanAmount / n);
      return { emi: e, totalInterest: 0, totalAmount: loanAmount, monthlySaving: Math.round(e * 1.3) };
    }
    const e = Math.round((loanAmount * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1));
    const total = e * n;
    const interest = total - loanAmount;
    return {
      emi: e,
      totalInterest: interest,
      totalAmount: total,
      monthlySaving: Math.round(e * 1.35),
    };
  }, [loanAmount, interestRate, tenure]);

  const principalPercent = Math.round((loanAmount / totalAmount) * 100);
  const interestPercent = 100 - principalPercent;

  const loanPercent = ((loanAmount - 50000) / (2000000 - 50000)) * 100;
  const ratePercent = ((interestRate - 4) / (15 - 4)) * 100;
  const tenurePercent = ((tenure - 1) / (20 - 1)) * 100;

  const formatINR = (val) => new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(val);

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <SectionHeader
          badge="🧮 EMI Calculator"
          title={<>Calculate Your <span className="text-gradient-green">Monthly EMI</span></>}
          subtitle="Use our free solar loan EMI calculator to instantly know your monthly payment, total interest, and estimated electricity savings."
        />

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Inputs Panel */}
            <div className="p-8 space-y-8">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                📊 Loan Parameters
              </h3>

              {/* Loan Amount */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Loan Amount</label>
                  <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                    ₹{formatINR(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="2000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2.5 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #10b981 ${loanPercent}%, #334155 ${loanPercent}%)`
                  }}
                  aria-label="Loan amount slider"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>₹50,000</span><span>₹10 Lakhs</span><span>₹20 Lakhs</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Interest Rate (p.a.)</label>
                  <span className="text-base font-extrabold text-blue-600 dark:text-blue-400">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="15"
                  step="0.25"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2.5 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 ${ratePercent}%, #334155 ${ratePercent}%)`
                  }}
                  aria-label="Interest rate slider"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>4% (Subsidized)</span><span>7.5% (Avg)</span><span>15%</span>
                </div>
              </div>

              {/* Tenure */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Loan Tenure</label>
                  <span className="text-base font-extrabold text-violet-600 dark:text-violet-400">{tenure} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2.5 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #8b5cf6 ${tenurePercent}%, #334155 ${tenurePercent}%)`
                  }}
                  aria-label="Tenure slider"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>1 Year</span><span>10 Years</span><span>20 Years</span>
                </div>
              </div>

              <button
                onClick={() => setActivePage('how-to-apply')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow"
              >
                Apply for This Loan <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Results Panel */}
            <div className="p-8 bg-gradient-to-br from-emerald-950 to-slate-900 space-y-6">
              <h3 className="text-lg font-extrabold text-white">📈 Your Loan Summary</h3>

              {/* Monthly EMI — Hero */}
              <motion.div
                key={emi}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center py-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Monthly EMI</p>
                <p className="text-5xl font-extrabold text-white">₹{formatINR(emi)}</p>
                <p className="text-slate-400 text-xs mt-2">per month for {tenure} years</p>
              </motion.div>

              {/* Breakdown */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/8">
                  <p className="text-xs text-slate-400 mb-1">Principal</p>
                  <p className="text-xl font-extrabold text-white">₹{formatINR(loanAmount)}</p>
                  <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${principalPercent}%` }} />
                  </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/8">
                  <p className="text-xs text-slate-400 mb-1">Total Interest</p>
                  <p className="text-xl font-extrabold text-amber-400">₹{formatINR(totalInterest)}</p>
                  <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: `${interestPercent}%` }} />
                  </div>
                </div>
                <div className="col-span-2 bg-white/5 rounded-2xl p-4 border border-white/8">
                  <p className="text-xs text-slate-400 mb-1">Total Amount Payable</p>
                  <p className="text-2xl font-extrabold text-white">₹{formatINR(totalAmount)}</p>
                </div>
              </div>

              {/* Solar Savings Highlight */}
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4">
                <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">
                  🌞 Estimated Monthly Electricity Saving
                </p>
                <p className="text-2xl font-extrabold text-emerald-300">
                  ₹{formatINR(monthlySaving)}/month
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Your savings (₹{formatINR(monthlySaving)}) exceed your EMI (₹{formatINR(emi)})! Solar pays for itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
