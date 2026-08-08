import React from 'react';
import { Settings, ShieldCheck, Sparkles, CheckCircle2, Moon, Sun, Lock } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { useTheme } from '../context/ThemeContext';

export const SettingsPage = () => {
  const { schoolProfile, subscription, setSubscription, addToast } = useSchool();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <Settings className="w-6 h-6 text-slate-400" />
            <h1 className="text-xl sm:text-2xl font-black text-white">Portal Settings & Subscription</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Manage partner subscription plans, theme preferences, notification triggers, and security controls.
          </p>
        </div>
      </div>

      {/* Subscription Plan Comparison Cards */}
      <div className="space-y-4">
        <h3 className="text-base font-black text-slate-900 dark:text-white">Partner Subscription Tiers</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Tier */}
          <div className={`p-6 rounded-3xl border transition-all ${
            subscription === 'Basic' 
              ? 'bg-blue-500/10 border-blue-500 shadow-xl' 
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-black text-slate-900 dark:text-white">Basic Partner</h4>
                <p className="text-xs text-slate-400">Essential classroom listing & CSF program enrollment</p>
              </div>
              <span className="text-xl font-black text-slate-900 dark:text-white">Free</span>
            </div>

            <ul className="my-6 space-y-2 text-xs text-slate-700 dark:text-slate-300 font-bold">
              <li className="flex items-center gap-2">✓ School Registration & KYC Verification</li>
              <li className="flex items-center gap-2">✓ Classroom Space Listing</li>
              <li className="flex items-center gap-2">✓ CSF Foundation Program Acceptance</li>
              <li className="flex items-center gap-2">✓ Student Enrollments & Parent Invitations</li>
              <li className="flex items-center gap-2">✓ Revenue & Weekly Rental Dashboard</li>
            </ul>

            <button
              onClick={() => {
                setSubscription('Basic');
                addToast('Switched to Basic Partner Plan', 'info');
              }}
              className={`w-full py-3 rounded-2xl font-extrabold text-xs transition-colors ${
                subscription === 'Basic' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              {subscription === 'Basic' ? 'Current Active Plan' : 'Switch to Basic'}
            </button>
          </div>

          {/* Premium Tier */}
          <div className={`p-6 rounded-3xl border transition-all relative overflow-hidden ${
            subscription === 'Premium' 
              ? 'bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-slate-900 border-amber-500 shadow-xl' 
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-1 text-[10px] font-black text-amber-500 uppercase tracking-widest mb-1">
                  <Sparkles className="w-3 h-3" /> Recommended
                </div>
                <h4 className="text-lg font-black text-slate-900 dark:text-white">Premium Partner</h4>
                <p className="text-xs text-slate-400">Everything in Basic + Full School Event Ticketing</p>
              </div>
              <span className="text-xl font-black text-amber-500">₹4,999<span className="text-xs font-normal text-slate-400">/yr</span></span>
            </div>

            <ul className="my-6 space-y-2 text-xs text-slate-700 dark:text-slate-300 font-bold">
              <li className="flex items-center gap-2">✓ Everything included in Basic</li>
              <li className="flex items-center gap-2 text-amber-500">★ School Internal Events Manager</li>
              <li className="flex items-center gap-2 text-amber-500">★ Paid Online Event Registration & Ticketing</li>
              <li className="flex items-center gap-2 text-amber-500">★ Dedicated School Event Reports & Photo Gallery</li>
              <li className="flex items-center gap-2 text-amber-500">★ Priority Foundation Support & Instant Payouts</li>
            </ul>

            <button
              onClick={() => {
                setSubscription('Premium');
                addToast('Switched to Premium Partner Tier!', 'success');
              }}
              className={`w-full py-3 rounded-2xl font-extrabold text-xs transition-colors ${
                subscription === 'Premium' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              {subscription === 'Premium' ? 'Current Active Tier' : 'Upgrade to Premium'}
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Theme Settings */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h4 className="text-base font-black text-slate-900 dark:text-white">Appearance & Theme Mode</h4>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Dark / Light Interface</span>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-extrabold text-xs flex items-center gap-2"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              <span>{isDarkMode ? 'Dark Mode Active' : 'Light Mode Active'}</span>
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h4 className="text-base font-black text-slate-900 dark:text-white">Account Security</h4>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Principal Password Authentication</span>
            <button className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-extrabold text-xs">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
