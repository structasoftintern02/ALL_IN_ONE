import React, { useState } from 'react';
import { useTheme, CONCEPTS } from '../context/ThemeContext';
import { mockUserData } from '../data/dashboardData';
import { 
  Sun, ShieldCheck, Zap, CreditCard, Calendar, FileText, Download, Bell, 
  User, CheckCircle2, TrendingUp, ArrowUpRight, DollarSign, Clock, HelpCircle 
} from 'lucide-react';

export const CustomerDashboard = ({ setActivePage }) => {
  const { concept, activeConfig } = useTheme();

  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'loans' | 'documents' | 'notifications'
  const [showPayModal, setShowPayModal] = useState(false);

  const loan = mockUserData.activeLoan;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Welcome Banner Card */}
      <div className={`p-6 sm:p-8 bg-gradient-to-r ${activeConfig.gradientBg} ${activeConfig.cardRadius} text-white space-y-4 shadow-xl relative overflow-hidden`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-white/10 text-xs font-bold border border-white/20">
                Verified Borrower Profile
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-extrabold text-[11px]">
                CIBIL {mockUserData.cibilScore} EXCELLENT
              </span>
            </div>
            <h1 className={`text-2xl sm:text-4xl font-extrabold ${activeConfig.headingFont}`}>
              Welcome Back, {mockUserData.name}!
            </h1>
            <p className="text-xs sm:text-sm text-slate-200">
              Active Solar Loan: <strong className="text-white font-mono">{loan.loanId}</strong> ({loan.lenderName})
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowPayModal(true)}
              className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-all"
            >
              Pay Upcoming EMI (₹{loan.monthlyEMI.toLocaleString('en-IN')})
            </button>

            <button
              onClick={() => setActivePage('sanction')}
              className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs rounded-xl backdrop-blur-xs"
            >
              Sanction Letter
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Sub-Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
            activeTab === 'overview' ? 'border-teal-600 text-teal-700' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Overview & EMIs
        </button>

        <button
          onClick={() => setActiveTab('solar')}
          className={`px-4 py-2 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
            activeTab === 'solar' ? 'border-teal-600 text-teal-700' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Solar Generation & Green Offset
        </button>

        <button
          onClick={() => setActiveTab('documents')}
          className={`px-4 py-2 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
            activeTab === 'documents' ? 'border-teal-600 text-teal-700' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Document Vault ({mockUserData.documentsVault.length})
        </button>

        <button
          onClick={() => setActivePage('disbursement')}
          className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-900 whitespace-nowrap"
        >
          Disbursement Tranches
        </button>
      </div>

      {/* OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          
          {/* Top 4 Key Metric Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className={`p-5 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-xs space-y-2`}>
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">Sanctioned Principal</span>
              <div className="text-2xl font-extrabold text-slate-900">
                ₹{loan.sanctionedAmount.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-emerald-700 font-semibold">100% Disbursed</span>
            </div>

            <div className={`p-5 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-xs space-y-2`}>
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">Remaining Principal Balance</span>
              <div className="text-2xl font-extrabold text-teal-700">
                ₹{loan.remainingBalance.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-slate-500">{loan.paidEMIs} of {loan.tenureMonths} EMIs Paid</span>
            </div>

            <div className={`p-5 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-xs space-y-2`}>
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">Next Monthly EMI Due</span>
              <div className="text-2xl font-extrabold text-slate-900">
                ₹{loan.monthlyEMI.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-amber-700 font-bold">Due On {loan.nextEmiDate}</span>
            </div>

            <div className={`p-5 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-xs space-y-2`}>
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">Net Monthly Solar Gain</span>
              <div className="text-2xl font-extrabold text-emerald-600">
                +₹{loan.netMonthlyGainRs.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-emerald-700 font-medium">Electricity Saved &gt; EMI!</span>
            </div>

          </div>

          {/* Grid: Application Progress + Recent Payments */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Recent Repayment Activity */}
            <div className={`lg:col-span-7 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-6 space-y-4 shadow-sm`}>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-900 text-sm">Recent EMI Payments History</h3>
                <span className="text-xs text-teal-700 font-semibold">Auto-Debit NACH Active</span>
              </div>

              <div className="space-y-3">
                {mockUserData.recentPayments.map((pay) => (
                  <div key={pay.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        ✓
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">{pay.date}</span>
                        <span className="text-[10px] text-slate-400">{pay.method}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-extrabold text-slate-900 block">₹{pay.amount.toLocaleString('en-IN')}</span>
                      <span className="text-[10px] text-emerald-700 font-bold">{pay.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Tracker Widget */}
            <div className={`lg:col-span-5 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-6 space-y-4 shadow-sm`}>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-900 text-sm">Secondary Application Status</h3>
                <span className="text-xs text-amber-700 font-bold">Under Review</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>15 kW Factory Upgrade</span>
                  <span>₹8.50 Lakhs</span>
                </div>
                <p className="text-slate-500 text-[11px]">Tata Capital CleanTech Finance</p>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-amber-500 rounded-full w-2/3" />
                </div>
              </div>

              <button
                onClick={() => setActivePage('track')}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all"
              >
                Track Live Application Timeline →
              </button>
            </div>

          </div>

        </div>
      )}

      {/* SOLAR GENERATION TAB */}
      {activeTab === 'solar' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-sm space-y-2`}>
              <span className="text-xs font-bold text-slate-400 uppercase">System Capacity</span>
              <div className="text-3xl font-extrabold text-amber-500">{loan.solarCapacityKw} kW</div>
              <span className="text-xs text-slate-600">Tata Power Solar Tier-1 Panels</span>
            </div>

            <div className={`p-6 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-sm space-y-2`}>
              <span className="text-xs font-bold text-slate-400 uppercase">Lifetime Energy Generated</span>
              <div className="text-3xl font-extrabold text-teal-700">{loan.lifetimeGenerationKwh.toLocaleString('en-IN')} kWh</div>
              <span className="text-xs text-emerald-700 font-semibold">Net Metering DISCOM Export</span>
            </div>

            <div className={`p-6 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-sm space-y-2`}>
              <span className="text-xs font-bold text-slate-400 uppercase">CO2 Offset Impact</span>
              <div className="text-3xl font-extrabold text-emerald-600">{loan.co2OffsetTons} Tons</div>
              <span className="text-xs text-slate-600">Equivalent to planting 180 trees</span>
            </div>
          </div>
        </div>
      )}

      {/* DOCUMENTS VAULT TAB */}
      {activeTab === 'documents' && (
        <div className={`bg-white ${activeConfig.cardRadius} border border-slate-200 p-6 space-y-4 shadow-sm`}>
          <h3 className="font-bold text-slate-900 text-sm">Official Loan Documents Vault</h3>
          <div className="divide-y divide-slate-100">
            {mockUserData.documentsVault.map((doc, idx) => (
              <div key={idx} className="py-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-teal-600" />
                  <div>
                    <span className="font-bold text-slate-900 block">{doc.name}</span>
                    <span className="text-[10px] text-slate-400">{doc.category} • {doc.date}</span>
                  </div>
                </div>
                <button
                  onClick={() => alert(`Downloading ${doc.name}`)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-lg flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pay EMI Modal Simulation */}
      {showPayModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 border border-slate-200 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900">Pay Monthly Solar Loan EMI</h3>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">EMI Amount:</span> <strong className="text-slate-900 font-bold text-sm">₹{loan.monthlyEMI.toLocaleString('en-IN')}</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Loan Account:</span> <strong className="text-slate-900 font-mono">{loan.loanId}</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Due Date:</span> <strong className="text-amber-700">{loan.nextEmiDate}</strong></div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700">Select Payment Method</label>
              <select className="w-full p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium">
                <option>UPI / GPay / PhonePe</option>
                <option>Auto-Debit NACH (HDFC Bank ****4901)</option>
                <option>Net Banking</option>
                <option>Debit Card</option>
              </select>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setShowPayModal(false)} className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700">Cancel</button>
              <button onClick={() => { alert('Payment of ₹5,240 processed successfully via UPI!'); setShowPayModal(false); }} className={`px-5 py-2 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}>Process Payment</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
