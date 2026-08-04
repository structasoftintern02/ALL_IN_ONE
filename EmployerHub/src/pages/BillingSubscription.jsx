import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sidebar } from '../components/layout/Sidebar';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { CreditCard, CheckCircle2, FileText, Download } from 'lucide-react';

export const BillingSubscription = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <Sidebar activePage="billing" setActivePage={setActivePage} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <ScrollReveal direction="down" amount={0.1} className="border-b border-slate-200 dark:border-gray-800 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Billing, Plan Subscriptions & GST Invoices
          </h1>
          <p className="text-xs text-slate-500">Manage active employer plan, payment methods, and tax invoice receipts</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Active Subscription Plan</span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Growth HRMS Plan</h3>
            <div className="text-xl font-bold text-emerald-600">₹23,999 / month (Annual)</div>
            <p className="text-xs text-slate-500">Includes 15 Active Jobs, 2,000 Resume Credits/mo & Full Kanban ATS</p>
            <button onClick={() => setActivePage('hiring-plans')} className={`w-full py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}>
              Upgrade to Enterprise Plan
            </button>
          </div>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Payment Method</span>
            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-gray-800 rounded-xl">
              <CreditCard className="w-6 h-6 text-indigo-500" />
              <div>
                <h4 className="font-bold text-xs text-slate-900 dark:text-white">HDFC Corporate Visa •••• 9812</h4>
                <span className="text-[10px] text-slate-400">Auto-renews on Aug 22, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
