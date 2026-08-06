import React, { useState } from 'react';
import {
  Menu, Search, Bell, Moon, Sun, ChevronRight, School,
  Sparkles, CheckCircle2, AlertCircle, Info, Calendar
} from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';
import { useAuth } from '../../context/AuthContext';

export const TopBar = ({ setMobileOpen }) => {
  const { activePage, setActivePage, notifications } = useSchool();
  const { user, darkMode, toggleDarkMode } = useAuth();
  const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const pageTitles = {
    'dashboard': 'School Dashboard',
    'school-profile': 'School Information & Infrastructure',
    'infrastructure': 'Campus Infrastructure & Labs',
    'students': 'Student Management Directory',
    'programs': 'Skill Programs & Sessions',
    'teachers': 'Teachers & Faculty Directory',
    'attendance': 'Session Attendance Marker',
    'calendar': 'Academic Session Calendar',
    'reports': 'Progress & Performance Analytics',
    'notifications': 'Announcements & Alerts',
    'settings': 'School Portal Settings'
  };

  const pageTitle = pageTitles[activePage] || 'School Portal';

  return (
    <header className="sticky top-0 z-30 h-[72px] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 transition-colors duration-200">
      <div className="h-full flex items-center justify-between gap-4">
        
        {/* Left: Mobile Menu Trigger + Breadcrumb */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-sm">
            <span className="hidden sm:inline font-semibold text-slate-500 dark:text-slate-400">School Portal</span>
            <ChevronRight className="hidden sm:inline w-4 h-4 text-slate-400" />
            <span className="font-black text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
              {pageTitle}
            </span>
          </div>
        </div>

        {/* Right: Search + Theme + Notifications + User Avatar */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Global Search Bar (Tablet & Desktop) */}
          <div className="hidden md:flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3 h-10 w-52 lg:w-64">
            <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search students, programs, teachers..."
              className="bg-transparent border-none outline-none text-xs font-semibold text-slate-900 dark:text-white placeholder-slate-400 w-full"
            />
          </div>

          {/* Dark / Light Mode Toggle */}
          <button
            type="button"
            onClick={toggleDarkMode}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-amber-400 hover:scale-105 transition-all"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Notifications Bell Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setActivePage('notifications')}
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 relative hover:scale-105 transition-all"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center shadow-lg shadow-rose-500/40 animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>
          </div>

          {/* User Profile Avatar Pill */}
          {user && (
            <div
              onClick={() => setActivePage('school-profile')}
              className="flex items-center gap-3 pl-3 border-l border-slate-200 dark:border-slate-800 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white font-black text-xs flex items-center justify-center shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
                {user.logo || '🏫'}
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs font-extrabold text-slate-900 dark:text-white leading-tight truncate max-w-[140px]">
                  {user.name}
                </div>
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  {user.role}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
