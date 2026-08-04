import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme, CONCEPTS } from '../context/ThemeContext';
import { DonutChart, BarChartSavings } from '../components/ui/ChartPlaceholder';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Calculator, ArrowRight, ShieldCheck, TrendingUp, Sparkles, DollarSign } from 'lucide-react';

export const EmiCalculator = ({ setActivePage }) => {
  const { concept, activeConfig } = useTheme();

  // Inputs
  const [loanAmount, setLoanAmount] = useState(400000);
  const [interestRate, setInterestRate] = useState(6.95);
  const [tenureYears, setTenureYears] = useState(7);

  // EMI Math Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const nMonths = tenureYears * 12;

  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, nMonths)) /
    (Math.pow(1 + monthlyRate, nMonths) - 1)
  );

  const totalPayment = emi * nMonths;
  const totalInterest = Math.max(0, totalPayment - loanAmount);

  // 25-Year Solar ROI Data Simulation
  const estMonthlySavings = Math.round(emi * 1.35);
  const yearlyGridBillData = [
    { year: 1, label: 'Yr 1', gridBillHeight: 25, savingsHeight: 40, savings: estMonthlySavings * 12 },
    { year: 5, label: 'Yr 5', gridBillHeight: 45, savingsHeight: 60, savings: estMonthlySavings * 12 * 5 },
    { year: 10, label: 'Yr 10', gridBillHeight: 65, savingsHeight: 75, savings: estMonthlySavings * 12 * 10 },
    { year: 15, label: 'Yr 15', gridBillHeight: 80, savingsHeight: 88, savings: estMonthlySavings * 12 * 15 },
    { year: 20, label: 'Yr 20', gridBillHeight: 90, savingsHeight: 95, savings: estMonthlySavings * 12 * 20 },
    { year: 25, label: 'Yr 25', gridBillHeight: 100, savingsHeight: 100, savings: estMonthlySavings * 12 * 25 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <ScrollReveal direction="down" amount={0.1} className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Solar Loan & ROI Visualizer
        </span>
        <h1 className={`text-3xl sm:text-4xl font-extrabold text-slate-900 ${activeConfig.headingFont}`}>
          Solar EMI & Savings Calculator
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Adjust loan parameters below to calculate exact monthly EMIs and 25-year solar electricity bill savings.
        </p>
      </ScrollReveal>

      {/* Main Grid: Input Sliders + Output Cards + SVG Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Inputs (3 Sliders) */}
        <ScrollReveal direction="right" className={`lg:col-span-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-6 sm:p-8 space-y-6 shadow-sm`}>
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-teal-600" />
              <span>Loan Parameters</span>
            </h3>
            <span className="text-xs text-teal-700 font-semibold">Green Rate 6.75% - 7.50%</span>
          </div>

          {/* Slider 1: Loan Amount */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
              <span>Required Loan Amount</span>
              <div className="flex items-center gap-1">
                <span className="text-slate-400">₹</span>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-28 py-1 px-2 text-right bg-slate-50 rounded border border-slate-300 text-sm font-bold text-slate-900"
                />
              </div>
            </div>
            <input
              type="range"
              min="50000"
              max="2000000"
              step="25000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
              <span>₹50,000</span>
              <span>₹10 Lakhs</span>
              <span>₹20 Lakhs</span>
            </div>
          </div>

          {/* Slider 2: Interest Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
              <span>Interest Rate (% per annum)</span>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  step="0.05"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-20 py-1 px-2 text-right bg-slate-50 rounded border border-slate-300 text-sm font-bold text-teal-700"
                />
                <span className="text-slate-500 font-bold">%</span>
              </div>
            </div>
            <input
              type="range"
              min="6.5"
              max="12.0"
              step="0.05"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
          </div>

          {/* Slider 3: Loan Tenure */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
              <span>Loan Tenure (Years)</span>
              <span className="text-sm font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
                {tenureYears} Years ({nMonths} Months)
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
          </div>

          {/* Summary Metric Output */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
            <div>
              <span className="text-[10px] text-slate-400 block font-bold uppercase">Monthly EMI</span>
              <span className="text-xl font-extrabold text-slate-900">₹{emi.toLocaleString('en-IN')}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-bold uppercase">Total Interest</span>
              <span className="text-base font-extrabold text-amber-600">₹{totalInterest.toLocaleString('en-IN')}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-bold uppercase">Total Payment</span>
              <span className="text-base font-bold text-slate-800">₹{totalPayment.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActivePage('apply')}
            className={`w-full py-3.5 ${activeConfig.cardRadius} text-sm font-extrabold transition-all flex items-center justify-center gap-2 ${activeConfig.buttonPrimary}`}
          >
            <span>Apply For ₹{(loanAmount / 100000).toFixed(2)}L Solar Loan Now</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

        </ScrollReveal>

        {/* Right Output: SVG Donut Chart + 25-Year ROI Projection Bar Chart */}
        <ScrollReveal direction="left" className="lg:col-span-6 space-y-6">
          
          <div className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} shadow-sm space-y-4`}>
            <h4 className="text-sm font-bold text-slate-900">Principal vs Interest Breakdown</h4>
            <DonutChart 
              principalAmount={loanAmount} 
              interestAmount={totalInterest} 
              totalAmount={totalPayment} 
            />
          </div>

          <div>
            <BarChartSavings yearlyData={yearlyGridBillData} />
          </div>

        </ScrollReveal>

      </div>

    </div>
  );
};
