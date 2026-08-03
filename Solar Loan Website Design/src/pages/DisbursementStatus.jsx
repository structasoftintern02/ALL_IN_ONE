import React from 'react';
import { useTheme, CONCEPTS } from '../context/ThemeContext';
import { mockUserData } from '../data/dashboardData';
import { 
  CheckCircle2, Clock, DollarSign, Building2, Calendar, ShieldCheck, ArrowRight, TrendingUp 
} from 'lucide-react';

export const DisbursementStatus = ({ setActivePage }) => {
  const { concept, activeConfig } = useTheme();

  const totalSanction = mockUserData.activeLoan.sanctionedAmount;
  const totalDisbursed = 170000; // Tranche 1 released
  const remainingDisbursement = totalSanction - totalDisbursed;

  const tranches = mockUserData.disbursementSchedule;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
            EPC Vendor Escrow & Tranches
          </span>
          <h1 className={`text-3xl font-extrabold text-slate-900 mt-2 ${activeConfig.headingFont}`}>
            Solar Loan Disbursement Status
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Tracking milestone tranche payouts to Tata Power Solar Authorized Installer.
          </p>
        </div>

        <button
          onClick={() => setActivePage('dashboard')}
          className={`px-5 py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}
        >
          View Customer Dashboard →
        </button>
      </div>

      {/* Top 3 Metric Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className={`p-6 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-sm space-y-2`}>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Sanctioned Loan</span>
          <div className="text-3xl font-extrabold text-slate-900">
            ₹{totalSanction.toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-emerald-700 font-semibold">Approved by SBI Green Finance</span>
        </div>

        <div className={`p-6 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-sm space-y-2`}>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Released Amount</span>
          <div className="text-3xl font-extrabold text-teal-700">
            ₹{totalDisbursed.toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-teal-700 font-semibold">20% Tranche 1 Released</span>
        </div>

        <div className={`p-6 bg-white ${activeConfig.cardRadius} border border-slate-200 shadow-sm space-y-2`}>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Remaining Balance</span>
          <div className="text-3xl font-extrabold text-amber-600">
            ₹{remainingDisbursement.toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-amber-700 font-semibold">Scheduled for Tranches 2 & 3</span>
        </div>

      </div>

      {/* Disbursement Tranches Timeline */}
      <div className={`bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-6 sm:p-8 space-y-6 shadow-sm`}>
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h3 className="text-base font-bold text-slate-900">Milestone Payment Schedule</h3>
          <span className="text-xs text-slate-400">Vendor: Tata Power Solar EPC</span>
        </div>

        <div className="space-y-6">
          {tranches.map((item, idx) => (
            <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                    item.status === 'Released' 
                      ? 'bg-emerald-600 text-white' 
                      : item.status === 'Pending Approval' 
                      ? 'bg-amber-500 text-slate-950 animate-pulse' 
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.tranche}</h4>
                    <span className="text-[11px] text-slate-500">{item.recipient}</span>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-base font-extrabold text-slate-900 block">₹{item.amount.toLocaleString('en-IN')}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    item.status === 'Released' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : item.status === 'Pending Approval' 
                      ? 'bg-amber-100 text-amber-800' 
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.status} ({item.releaseDate})
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${
                  item.status === 'Released' ? 'bg-emerald-500 w-full' : item.status === 'Pending Approval' ? 'bg-amber-500 w-1/2' : 'bg-slate-300 w-0'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
