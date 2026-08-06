import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  School, LayoutDashboard, Users, BookOpen, Calendar, Clock,
  CheckCircle2, Award, Bell, Settings, Building2, UserCheck,
  ChevronLeft, ChevronRight, LogOut, X, Sparkles, ChevronDown
} from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';
import { useAuth } from '../../context/AuthContext';

export const Sidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  const { activePage, setActivePage, notifications } = useSchool();
  const { user, logout } = useAuth();
  const [openMenus, setOpenMenus] = useState({ academics: true, management: true });

  const unreadCount = notifications.filter(n => !n.read).length;

  const navSections = [
    {
      title: 'Main',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'school-profile', label: 'School Profile', icon: School },
        { id: 'infrastructure', label: 'Campus Infrastructure', icon: Building2 },
      ]
    },
    {
      title: 'Academics & Skills',
      items: [
        { id: 'students', label: 'Student Management', icon: Users },
        { id: 'programs', label: 'Skill Programs', icon: BookOpen },
        { id: 'teachers', label: 'Teachers & Faculty', icon: UserCheck },
        { id: 'attendance', label: 'Attendance Marker', icon: CheckCircle2 },
        { id: 'calendar', label: 'Session Calendar', icon: Calendar },
      ]
    },
    {
      title: 'Analytics & Alerts',
      items: [
        { id: 'reports', label: 'Reports & Analytics', icon: Award },
        { id: 'notifications', label: 'Notifications', icon: Bell, badge: unreadCount },
        { id: 'settings', label: 'Portal Settings', icon: Settings },
      ]
    }
  ];

  const handleNav = (pageId) => {
    setActivePage(pageId);
    setMobileOpen(false);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 dark:bg-slate-950 border-r border-slate-800">
      
      {/* Brand Header */}
      <div className="h-[72px] px-5 flex items-center justify-between border-b border-slate-800 flex-shrink-0">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('dashboard')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-teal-500/25 flex-shrink-0">
            <School className="w-5 h-5" />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <div className="text-base font-extrabold text-white leading-tight truncate">School Portal</div>
              <div className="text-[11px] font-bold text-teal-400 uppercase tracking-wider">Talent Management</div>
            </div>
          )}
        </div>

        {/* Collapse Toggle Button (Desktop Only) */}
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 items-center justify-center text-slate-400 hover:text-white transition-colors"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        {navSections.map((section) => (
          <div key={section.title}>
            {!collapsed && (
              <div className="px-3 mb-2 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
                {section.title}
              </div>
            )}
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = activePage === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNav(item.id)}
                    title={collapsed ? item.label : undefined}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all duration-150 ${
                      active
                        ? 'bg-teal-500/15 text-teal-400 border border-teal-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent'
                    }`}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 ${active ? 'text-teal-400' : 'text-slate-400'}`} />
                    {!collapsed && (
                      <>
                        <span className="flex-1 text-left truncate">{item.label}</span>
                        {item.badge > 0 && (
                          <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[11px] font-extrabold shadow-sm">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* School Admin Profile & Logout */}
      {!collapsed && user && (
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex-shrink-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-md">
              {user.logo || '🏫'}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-extrabold text-white truncate">{user.name}</div>
              <div className="text-xs text-slate-400 font-semibold truncate">{user.code}</div>
            </div>
          </div>

          <button
            type="button"
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/30 text-xs font-bold hover:bg-rose-500/25 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col fixed top-0 left-0 h-screen z-40 transition-all duration-300 ${
          collapsed ? 'w-[72px]' : 'w-[280px]'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 left-0 h-screen w-[280px] z-50 lg:hidden flex flex-col shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center z-10"
              >
                <X className="w-5 h-5" />
              </button>
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
