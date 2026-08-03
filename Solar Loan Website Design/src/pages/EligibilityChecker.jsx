import React, { useState } from 'react';
import { useTheme, CONCEPTS } from '../context/ThemeContext';
import { 
  Calculator, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, 
  RefreshCw, TrendingUp, AlertCircle 
} from 'lucide-react';

export const EligibilityChecker = ({ setActivePage }) => {
  const { concept, activeConfig } = useTheme();

  // Form Inputs
  const [monthlyIncome, setMonthlyIncome] = useState(75000);
  const [employmentType, setEmploymentType] = useState('Salaried');
  const [stateName, setStateName] = useState('Karnataka');
  const [cityName, setCityName] = useState('Bengaluru');
  const [existingEmi, setExistingEmi] = useState(10000);
  const [propertyType, setPropertyType] = useState('Independent Villa / House');
  const [solarProjectCost, setSolarProjectCost] = useState(350000);
  
  const [isCalculated, setIsCalculated] = useState(true);

  // Eligibility Calculation Engine
  const netAvailableIncome = Math.max(0, monthlyIncome - existingEmi);
  const maxMonthlyEmiCapacity = netAvailableIncome * 0.50; // 50% FOIR (Fixed Obligation to Income Ratio)
  
  // Calculate max eligible loan amount based on 7-year tenure at 6.95%
  const monthlyRate = 6.95 / 12 / 100;
  const nMonths = 84;
  const maxLoanFromIncome = Math.round(
    (maxMonthlyEmiCapacity * (Math.pow(1 + monthlyRate, nMonths) - 1)) /
    (monthlyRate * Math.pow(1 + monthlyRate, nMonths))
  );

  const eligibleLoanAmount = Math.min(solarProjectCost, Math.max(100000, maxLoanFromIncome));
  const estimatedEmi = Math.round(
    (eligibleLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, nMonths)) /
    (Math.pow(1 + monthlyRate, nMonths) - 1)
  );

  // Subsidy Calculation (PM Surya Ghar)
  let subsidyAmount = 0;
  if (solarProjectCost <= 150000) subsidyAmount = 30000;
  else if (solarProjectCost <= 250000) subsidyAmount = 60000;
  else subsidyAmount = 78000;

  const netOutofPocket = Math.max(0, solarProjectCost - subsidyAmount);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Instant Pre-Approval Engine
        </span>
        <h1 className={`text-3xl sm:text-4xl font-extrabold text-slate-900 ${activeConfig.headingFont}`}>
          Solar Loan Eligibility Checker
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Find out how much solar loan amount you qualify for in real-time. Zero credit score inquiry impact.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form (7 Inputs) */}
        <div className={`lg:col-span-7 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-6 sm:p-8 space-y-6 shadow-sm`}>
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-teal-600" />
              <span>Enter Borrower Parameters</span>
            </h3>
            <span className="text-xs text-slate-400 font-medium">Real-time Calculation</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Monthly Income Slider */}
            <div className="sm:col-span-2">
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>Gross Monthly Income (In Hand)</span>
                <span className="text-teal-700 font-bold text-sm">₹{monthlyIncome.toLocaleString('en-IN')}/mo</span>
              </div>
              <input
                type="range"
                min="25000"
                max="500000"
                step="5000"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>₹25k</span>
                <span>₹2.5L</span>
                <span>₹5L+</span>
              </div>
            </div>

            {/* Employment Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Employment Type</label>
              <select
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
                className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="Salaried">Salaried (Private / Govt)</option>
                <option value="Self-Employed Business">Self-Employed Business Owner</option>
                <option value="Self-Employed Professional">Self-Employed Professional (CA/Doctor/Lawyer)</option>
                <option value="Agricultural Farmer">Agricultural Land Owner</option>
              </select>
            </div>

            {/* Existing Monthly EMIs */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Existing Monthly EMIs</label>
              <input
                type="number"
                value={existingEmi}
                onChange={(e) => setExistingEmi(Number(e.target.value))}
                placeholder="e.g. 10000"
                className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Solar Project Cost */}
            <div className="sm:col-span-2">
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>Total Solar Rooftop Quotation Cost</span>
                <span className="text-teal-700 font-bold text-sm">₹{solarProjectCost.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="100000"
                max="2000000"
                step="25000"
                value={solarProjectCost}
                onChange={(e) => setSolarProjectCost(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>₹1L (3kW)</span>
                <span>₹5L (10kW)</span>
                <span>₹20L+ (C&I)</span>
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Property Type</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="Independent House / Villa">Independent House / Villa</option>
                <option value="Gated Society Duplex">Gated Society Duplex</option>
                <option value="Commercial Factory Rooftop">Commercial Factory Rooftop</option>
                <option value="Agricultural Land Farmhouse">Agricultural Land Farmhouse</option>
              </select>
            </div>

            {/* State & City */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">State & City</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                  className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                />
                <input
                  type="text"
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                />
              </div>
            </div>

          </div>

        </div>

        {/* Right Output Eligibility Result Card */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className={`p-6 sm:p-8 bg-white ${activeConfig.cardRadius} border-2 border-teal-500/30 shadow-xl space-y-6 relative overflow-hidden`}>
            
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                PRE-APPROVED ELIGIBLE
              </span>
              <span className="text-xs text-slate-400 font-semibold">Tier-1 Partner Banks</span>
            </div>

            {/* Primary Amount */}
            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Eligible Loan Amount</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                ₹{eligibleLoanAmount.toLocaleString('en-IN')}
              </div>
              <p className="text-xs text-emerald-700 font-semibold">
                100% Funding for your ₹{solarProjectCost.toLocaleString('en-IN')} project requirement
              </p>
            </div>

            {/* Breakdown Parameters */}
            <div className="space-y-3 pt-4 border-t border-slate-100 text-xs">
              
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-600">Offered Interest Rate:</span>
                <span className="font-extrabold text-teal-700 text-base">6.95% p.a.</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-slate-600">Estimated Monthly EMI (7 Yrs):</span>
                <span className="font-bold text-slate-900 text-base">₹{estimatedEmi.toLocaleString('en-IN')}/mo</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-slate-600">PM Surya Ghar Govt Subsidy:</span>
                <span className="font-bold text-amber-600">₹{subsidyAmount.toLocaleString('en-IN')} (Direct Bank Credit)</span>
              </div>

              <div className="flex justify-between items-center py-1 pt-2 border-t border-slate-100">
                <span className="text-slate-800 font-bold">Effective Out-of-Pocket Cost:</span>
                <span className="font-extrabold text-slate-900">₹{netOutofPocket.toLocaleString('en-IN')}</span>
              </div>

            </div>

            {/* Features Bullet List */}
            <div className="bg-slate-50 p-4 rounded-xl space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Collateral Required for your amount</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>0% Prepayment charges after 6 months</span>
              </div>
            </div>

            {/* Call to action */}
            <button
              onClick={() => setActivePage('apply')}
              className={`w-full py-4 ${activeConfig.cardRadius} text-sm font-extrabold text-center shadow-lg transition-all flex items-center justify-center gap-2 ${activeConfig.buttonPrimary}`}
            >
              <span>Apply Now With Prequalified Offer</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};
