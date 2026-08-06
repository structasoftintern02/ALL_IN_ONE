import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Moon, Sun, Shield, Lock, Bell, CheckCircle2, Save } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useSchool } from '../context/SchoolContext';

export const SettingsPage = () => {
  const { darkMode, toggleDarkMode, user } = useAuth();
  const { showToast } = useSchool();

  const handleSaveSettings = (e) => {
    e.preventDefault();
    showToast('Portal settings saved successfully!');
  };

  return (
    <div className="space-y-6 max-w-[1000px] mx-auto w-full">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Portal Settings & Theme</h1>
        <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
          Customize dark/light mode, academic term preferences, and security settings
        </p>
      </div>

      <form onSubmit={handleSaveSettings} className="space-y-6">
        
        {/* Theme Preferences */}
        <div className="glass-card rounded-3xl p-6 space-y-4">
          <h3 className="text-base font-black text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
            {darkMode ? <Moon className="w-5 h-5 text-amber-400" /> : <Sun className="w-5 h-5 text-amber-500" />}
            <span>Theme Preference</span>
          </h3>

          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
            <div>
              <div className="text-sm font-black text-slate-900 dark:text-white">Dark Mode Theme</div>
              <div className="text-xs text-slate-400 font-semibold mt-0.5">Toggle sleek dark mode interface for low light conditions</div>
            </div>

            <button
              type="button"
              onClick={toggleDarkMode}
              className={`w-14 h-8 rounded-full p-1 transition-colors duration-200 ease-in-out ${
                darkMode ? 'bg-teal-500' : 'bg-slate-300'
              }`}
            >
              <div className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>
        </div>

        {/* Academic Year Settings */}
        <div className="glass-card rounded-3xl p-6 space-y-4">
          <h3 className="text-base font-black text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800">
            Academic Year & Terms
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
            <div>
              <label className="block text-slate-700 dark:text-slate-300 mb-1">Current Academic Session</label>
              <input type="text" defaultValue="2026 - 2027" className="form-input" />
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 mb-1">Term Start Date</label>
              <input type="date" defaultValue="2026-06-01" className="form-input" />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="glass-card rounded-3xl p-6 space-y-4">
          <h3 className="text-base font-black text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <Lock className="w-5 h-5 text-teal-500" />
            <span>Account Security</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
            <div>
              <label className="block text-slate-700 dark:text-slate-300 mb-1">New Password</label>
              <input type="password" placeholder="••••••••" className="form-input" />
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 mb-1">Confirm Password</label>
              <input type="password" placeholder="••••••••" className="form-input" />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 h-11 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold text-xs shadow-md flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save All Settings</span>
          </button>
        </div>

      </form>

    </div>
  );
};
