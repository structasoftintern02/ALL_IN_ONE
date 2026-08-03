import React, { useState } from 'react';
import { useTheme, CONCEPTS } from '../context/ThemeContext';
import { lendersData } from '../data/lenders';
import { 
  Search, Filter, SlidersHorizontal, ArrowUpDown, Check, X, ShieldCheck, 
  ArrowRight, Info, CheckCircle2, LayoutGrid, Table as TableIcon, Sparkles 
} from 'lucide-react';

export const CompareLoans = ({ setActivePage }) => {
  const { concept, activeConfig } = useTheme();

  // Search & Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBankType, setSelectedBankType] = useState('All');
  const [maxRateFilter, setMaxRateFilter] = useState(8.0);
  const [subsidyOnly, setSubsidyOnly] = useState(false);
  const [sortBy, setSortBy] = useState('rate-asc'); // 'rate-asc', 'loan-desc', 'approval-asc'
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'grid'

  // Selected for Compare drawer (Max 3)
  const [compareList, setCompareList] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const toggleCompare = (lender) => {
    if (compareList.some(item => item.id === lender.id)) {
      setCompareList(compareList.filter(item => item.id !== lender.id));
    } else {
      if (compareList.length >= 3) {
        alert('You can compare up to 3 solar loan lenders simultaneously.');
        return;
      }
      setCompareList([...compareList, lender]);
    }
  };

  // Filtered & Sorted Data
  let filteredLenders = lendersData.filter(lender => {
    const matchesSearch = lender.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lender.bankType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBankType = selectedBankType === 'All' || lender.bankType === selectedBankType;
    const matchesRate = lender.interestRate <= maxRateFilter;
    const matchesSubsidy = !subsidyOnly || lender.subsidyEligible;
    return matchesSearch && matchesBankType && matchesRate && matchesSubsidy;
  });

  filteredLenders.sort((a, b) => {
    if (sortBy === 'rate-asc') return a.interestRate - b.interestRate;
    if (sortBy === 'loan-desc') return b.maxLoanAmount - a.maxLoanAmount;
    if (sortBy === 'approval-asc') return a.approvalTimeHours - b.approvalTimeHours;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className={`p-8 bg-gradient-to-r ${activeConfig.gradientBg} ${activeConfig.cardRadius} text-white space-y-3 shadow-xl relative overflow-hidden`}>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold border border-white/20">
            Smart Lender Matrix 2026
          </span>
        </div>
        <h1 className={`text-3xl sm:text-4xl font-extrabold ${activeConfig.headingFont}`}>
          Compare Top Solar Rooftop Loans
        </h1>
        <p className="text-sm text-slate-200 max-w-2xl">
          Evaluate interest rates, processing charges, maximum sanctioned amounts, and Govt subsidy eligibility across empaneled Indian PSU and Private Banks.
        </p>
      </div>

      {/* Controls: Search, Filters & View Toggle */}
      <div className={`p-6 bg-white ${activeConfig.cardRadius} border border-slate-200/80 shadow-sm space-y-4`}>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Search Input */}
          <div className="md:col-span-4 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by bank name or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Bank Type Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedBankType}
              onChange={(e) => setSelectedBankType(e.target.value)}
              className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="All">All Bank Types</option>
              <option value="Public Sector">Public Sector Banks (PSU)</option>
              <option value="Private Sector">Private Sector Banks</option>
              <option value="NBFC Leader">CleanTech NBFCs</option>
            </select>
          </div>

          {/* Max Rate Slider */}
          <div className="md:col-span-3">
            <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
              <span>Max Interest Rate</span>
              <span className="font-bold text-teal-700">{maxRateFilter}% p.a.</span>
            </div>
            <input
              type="range"
              min="6.5"
              max="8.0"
              step="0.05"
              value={maxRateFilter}
              onChange={(e) => setMaxRateFilter(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="md:col-span-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="rate-asc">Lowest Interest Rate</option>
              <option value="loan-desc">Highest Max Loan</option>
              <option value="approval-asc">Fastest Approval</option>
            </select>
          </div>

        </div>

        {/* Sub-Filters & View Mode Selector */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100 text-xs">
          
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={subsidyOnly}
                onChange={(e) => setSubsidyOnly(e.target.checked)}
                className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 cursor-pointer"
              />
              <span className="font-semibold text-slate-700">PM Surya Ghar Subsidy Eligible Only</span>
            </label>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 font-medium">Showing <strong>{filteredLenders.length}</strong> lenders</span>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded flex items-center gap-1 text-xs font-semibold ${
                viewMode === 'table' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <TableIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Table View</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded flex items-center gap-1 text-xs font-semibold ${
                viewMode === 'grid' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Card View</span>
            </button>
          </div>

        </div>

      </div>

      {/* Main Content: Table or Grid */}
      {viewMode === 'table' ? (
        <div className={`bg-white ${activeConfig.cardRadius} border border-slate-200/80 shadow-sm overflow-x-auto`}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-500 tracking-wider">
                <th className="py-4 px-4">Lender Bank</th>
                <th className="py-4 px-4">Interest Rate</th>
                <th className="py-4 px-4">Max Loan Amount</th>
                <th className="py-4 px-4">Max Tenure</th>
                <th className="py-4 px-4">Processing Fee</th>
                <th className="py-4 px-4">Est. EMI / ₹1L</th>
                <th className="py-4 px-4">Approval Time</th>
                <th className="py-4 px-4 text-center">Compare</th>
                <th className="py-4 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredLenders.map((lender) => {
                const isSelected = compareList.some(item => item.id === lender.id);
                return (
                  <tr key={lender.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{lender.bankLogo}</span>
                        <div>
                          <div className="font-bold text-slate-900">{lender.name}</div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[11px] text-slate-500">{lender.bankType}</span>
                            {lender.featured && (
                              <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                                {lender.badgeText}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 font-extrabold text-teal-700 text-base">
                      {lender.interestRate}% <span className="text-[11px] font-normal text-slate-500">p.a.</span>
                    </td>

                    <td className="py-4 px-4 font-bold text-slate-900">
                      ₹{(lender.maxLoanAmount / 100000).toFixed(1)} Lakhs
                    </td>

                    <td className="py-4 px-4 text-slate-700 font-medium">
                      Up to {lender.loanTenureYears} Yrs
                    </td>

                    <td className="py-4 px-4 text-slate-600">
                      {lender.processingFeePercent}% (Min ₹{lender.processingFeeFixed})
                    </td>

                    <td className="py-4 px-4 font-bold text-slate-900">
                      ₹{lender.minEmiPerLakh}/mo
                    </td>

                    <td className="py-4 px-4">
                      <span className="px-2 py-1 rounded bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                        ⚡ {lender.approvalTimeHours} Hours
                      </span>
                    </td>

                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => toggleCompare(lender)}
                        className={`p-2 rounded-lg border transition-all text-xs font-semibold ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {isSelected ? '✓ Selected' : '+ Select'}
                      </button>
                    </td>

                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => setActivePage('apply')}
                        className={`px-4 py-2 ${activeConfig.cardRadius} text-xs font-bold transition-all ${activeConfig.buttonPrimary}`}
                      >
                        Apply Now
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredLenders.map((lender) => {
            const isSelected = compareList.some(item => item.id === lender.id);
            return (
              <div key={lender.id} className={`p-6 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 relative`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{lender.bankLogo}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{lender.name}</h3>
                      <span className="text-[11px] text-slate-500">{lender.bankType}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleCompare(lender)}
                    className={`text-xs px-2.5 py-1 rounded-md font-semibold border ${
                      isSelected ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {isSelected ? '✓ Selected' : '+ Compare'}
                  </button>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Interest Rate</span>
                    <span className="text-lg font-extrabold text-teal-700">{lender.interestRate}% p.a.</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Max Loan</span>
                    <span className="text-base font-bold text-slate-900">₹{(lender.maxLoanAmount / 100000).toFixed(1)} L</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Tenure</span>
                    <span className="font-semibold text-slate-800">{lender.loanTenureYears} Years</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Approval</span>
                    <span className="font-bold text-amber-700">{lender.approvalTimeHours} Hrs</span>
                  </div>
                </div>

                <div className="space-y-1 text-xs text-slate-600">
                  {lender.tags.map((tag, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setActivePage('apply')}
                  className={`w-full py-2.5 ${activeConfig.cardRadius} text-xs font-bold transition-all ${activeConfig.buttonPrimary}`}
                >
                  Apply For {lender.name.split(' ')[0]} Loan
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Floating Compare Tray (when items are selected) */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white py-3 px-6 rounded-2xl shadow-2xl z-50 border border-slate-700 flex items-center justify-between gap-6 max-w-xl w-full mx-auto animate-in slide-in-from-bottom-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full">
              {compareList.length} Selected
            </span>
            <span className="text-xs text-slate-300 font-medium">Ready to compare side-by-side</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCompareList([])}
              className="text-xs text-slate-400 hover:text-white px-2 py-1"
            >
              Clear
            </button>
            <button
              onClick={() => setShowCompareModal(true)}
              className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md"
            >
              Compare Side-by-Side →
            </button>
          </div>
        </div>
      )}

      {/* Side-by-Side Comparison Modal */}
      {showCompareModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 border border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Side-by-Side Solar Loan Comparison</h3>
                <p className="text-xs text-slate-500">Compare parameters of your selected lenders</p>
              </div>
              <button
                onClick={() => setShowCompareModal(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 text-xs sm:text-sm">
              {compareList.map((item) => (
                <div key={item.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                  <div className="text-center space-y-1">
                    <span className="text-4xl">{item.bankLogo}</span>
                    <h4 className="font-extrabold text-slate-900">{item.name}</h4>
                    <span className="text-[11px] text-teal-700 font-bold">{item.badgeText}</span>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-200">
                    <div>
                      <span className="text-slate-400 text-[10px] block uppercase font-bold">Interest Rate</span>
                      <span className="text-lg font-extrabold text-teal-700">{item.interestRate}% p.a.</span>
                    </div>

                    <div>
                      <span className="text-slate-400 text-[10px] block uppercase font-bold">Max Loan Sanction</span>
                      <span className="font-bold text-slate-900">₹{(item.maxLoanAmount / 100000).toFixed(1)} Lakhs</span>
                    </div>

                    <div>
                      <span className="text-slate-400 text-[10px] block uppercase font-bold">Tenure</span>
                      <span className="font-medium text-slate-800">{item.loanTenureYears} Years</span>
                    </div>

                    <div>
                      <span className="text-slate-400 text-[10px] block uppercase font-bold">Processing Fee</span>
                      <span className="text-slate-800">{item.processingFeePercent}% (Min ₹{item.processingFeeFixed})</span>
                    </div>

                    <div>
                      <span className="text-slate-400 text-[10px] block uppercase font-bold">Collateral Free Limit</span>
                      <span className="font-bold text-emerald-700">Up to ₹{(item.collateralFreeLimit / 100000).toFixed(1)}L</span>
                    </div>

                    <div>
                      <span className="text-slate-400 text-[10px] block uppercase font-bold">Approval Speed</span>
                      <span className="font-bold text-amber-700">⚡ {item.approvalTimeHours} Hours</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setShowCompareModal(false);
                      setActivePage('apply');
                    }}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${activeConfig.buttonPrimary}`}
                  >
                    Apply for {item.name.split(' ')[0]}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
