import React from 'react';
import { 
  IndianRupee, Download, TrendingUp, Clock, FileText, Landmark, ShieldCheck, ArrowUpRight 
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar 
} from 'recharts';
import { useSchool } from '../context/SchoolContext';

const revenueBreakdown = [
  { month: 'Jan', commission: 12000, rental: 28000 },
  { month: 'Feb', commission: 18000, rental: 38000 },
  { month: 'Mar', commission: 23000, rental: 52000 },
  { month: 'Apr', commission: 28000, rental: 64000 },
  { month: 'May', commission: 32000, rental: 78000 },
  { month: 'Jun', commission: 37000, rental: 91000 },
  { month: 'Jul', commission: 38250, rental: 104250 },
];

export const RevenueCenterPage = () => {
  const { revenueStats } = useSchool();

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white border border-emerald-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-xs font-black border border-emerald-400/30 text-emerald-300">
            <IndianRupee className="w-4 h-4 text-emerald-400" />
            <span>School Partner Financial Hub</span>
          </div>
          <h1 className="text-xl sm:text-3xl font-black">Revenue Center & Payouts</h1>
          <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
            Automatic earnings calculation: <span className="text-amber-400 font-extrabold">15% Student Program Commission</span> + <span className="text-white font-extrabold">Weekly Classroom Rental Fees</span> paid directly to your HDFC registered account.
          </p>
        </div>

        <button className="px-4 py-2.5 rounded-xl bg-white text-emerald-900 font-extrabold text-xs hover:bg-emerald-50 transition-all flex items-center gap-2 shadow-lg flex-shrink-0">
          <Download className="w-4 h-4" />
          <span>Download GST Statement</span>
        </button>
      </div>

      {/* 4 Financial Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Earnings */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">Total Partner Earnings</span>
          <div className="text-2xl font-black text-amber-500">₹{revenueStats.totalEarnings.toLocaleString()}</div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +18.4% vs last month
          </div>
        </div>

        {/* Card 2: 15% Student Commission */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">15% Student Commission</span>
          <div className="text-2xl font-black text-blue-600 dark:text-blue-400">₹{revenueStats.commissionEarnings.toLocaleString()}</div>
          <div className="text-[11px] text-slate-500 font-bold">Earned from 65 student enrollments</div>
        </div>

        {/* Card 3: Classroom Weekly Rental */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">Classroom Weekly Rental</span>
          <div className="text-2xl font-black text-teal-600 dark:text-teal-400">₹{revenueStats.rentalEarnings.toLocaleString()}</div>
          <div className="text-[11px] text-slate-500 font-bold">Earned from weekly facility slots</div>
        </div>

        {/* Card 4: Pending Payout */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">Next Payout Queue</span>
          <div className="text-2xl font-black text-rose-500">₹{revenueStats.pendingPayments.toLocaleString()}</div>
          <div className="text-[11px] text-slate-500 font-bold">Scheduled for {revenueStats.upcomingPayoutDate}</div>
        </div>
      </div>

      {/* Chart: Income Source Breakdown */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white">Earnings Source Breakdown</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Comparison of Student Commission vs Classroom Rental Payouts</p>
          </div>
        </div>

        <div className="h-72 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueBreakdown}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
              <XAxis dataKey="month" stroke="#94A3B8" fontSize={11} />
              <YAxis stroke="#94A3B8" fontSize={11} tickFormatter={(v) => `₹${v/1000}k`} />
              <Tooltip contentStyle={{ backgroundColor: '#0F172A', borderRadius: '12px', color: '#fff', fontSize: '12px' }} formatter={(val) => `₹${val.toLocaleString()}`} />
              <Bar dataKey="rental" fill="#14B8A6" radius={[6, 6, 0, 0]} name="Classroom Weekly Rental" />
              <Bar dataKey="commission" fill="#2563EB" radius={[6, 6, 0, 0]} name="15% Student Commission" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <h3 className="text-base font-black text-slate-900 dark:text-white">Recent Payout Invoices & Receipts</h3>
          <span className="text-xs font-bold text-slate-400">Verified GST Receipts</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-extrabold uppercase text-[10px]">
                <th className="py-3 px-4">Invoice ID</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Description</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {revenueStats.invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-900 dark:text-white">{inv.id}</td>
                  <td className="py-3.5 px-4 text-slate-500">{inv.date}</td>
                  <td className="py-3.5 px-4 font-extrabold text-blue-600 dark:text-blue-400">{inv.category}</td>
                  <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300 max-w-xs truncate">{inv.description}</td>
                  <td className="py-3.5 px-4 font-black text-amber-500">₹{inv.amount.toLocaleString()}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black ${
                      inv.status === 'Paid' ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' : 'bg-amber-500/15 text-amber-600'
                    }`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-end gap-1 ml-auto">
                      <Download className="w-3 h-3" /> PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
