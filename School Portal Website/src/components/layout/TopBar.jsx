import React, { useState } from 'react';
import { Menu, Search, Sun, Moon, Bell, Plus, ShieldCheck, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useSchool } from '../../context/SchoolContext';

export const TopBar = ({ setMobileOpen, onOpenAddClassroom, onOpenAddEvent }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { schoolProfile, announcements, setActivePage } = useSchool();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const unreadCount = announcements.filter(a => a.unread).length;

  return (
    <header className="sticky top-0 z-40 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 flex items-center justify-between gap-4">
      {/* Left: Mobile Toggle & Page Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search Input */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 w-64 md:w-80">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search classrooms, programs, students..."
            className="bg-transparent border-none outline-none text-xs font-semibold text-slate-800 dark:text-slate-100 placeholder-slate-400 w-full"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3 relative">
        {/* Quick Action Button */}
        <button
          onClick={onOpenAddClassroom}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Classroom</span>
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          title="Toggle Dark / Light Theme"
          className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
        </button>

        {/* Notifications Popover Toggle */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
            )}
          </button>

          {/* Notifications Dropdown Panel */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-4 space-y-3 z-50 animate-slide-in">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                <div className="text-xs font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Announcements & Alerts</span>
                  {unreadCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px]">
                      {unreadCount} Unread
                    </span>
                  )}
                </div>
                <button
                  onClick={() => {
                    setShowNotifications(false);
                    setActivePage('announcements');
                  }}
                  className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View All
                </button>
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                {announcements.map(anc => (
                  <div key={anc.id} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-extrabold text-blue-600 dark:text-blue-400">{anc.sender}</span>
                      <span className="text-slate-400">{anc.date}</span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white leading-snug">{anc.title}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Pill */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-md">
              RS
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-xs font-extrabold text-slate-900 dark:text-white truncate leading-tight">
                {schoolProfile.principal.name}
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                Principal & Administrator
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
          </button>

          {/* User Profile Dropdown Menu */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-2 z-50 space-y-1 animate-slide-in">
              <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                <div className="text-xs font-black text-slate-900 dark:text-white">{schoolProfile.name}</div>
                <div className="text-[10px] text-slate-400">{schoolProfile.email}</div>
              </div>

              <button
                onClick={() => {
                  setShowUserMenu(false);
                  setActivePage('school-profile');
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                School Profile
              </button>

              <button
                onClick={() => {
                  setShowUserMenu(false);
                  setActivePage('settings');
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Settings & Subscription
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
