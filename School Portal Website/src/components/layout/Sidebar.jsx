import React from 'react';
import { 
  LayoutDashboard, Building2, DoorClosed, BookOpenCheck, GraduationCap, 
  Users, UserCheck, CalendarCheck, BarChart3, IndianRupee, Sparkles, 
  Bell, FileText, Settings, ShieldCheck, ChevronLeft, ChevronRight, X 
} from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'school-profile', label: 'School Profile', icon: Building2 },
  { id: 'classrooms', label: 'Classrooms', icon: DoorClosed, badge: 'Key Module' },
  { id: 'foundation-programs', label: 'Foundation Programs', icon: BookOpenCheck },
  { id: 'student-enrollments', label: 'Student Enrollments', icon: GraduationCap },
  { id: 'parents', label: 'Parents', icon: Users, isReadOnly: true },
  { id: 'teachers', label: 'Teacher Info', icon: UserCheck, isReadOnly: true },
  { id: 'attendance', label: 'Attendance', icon: CalendarCheck, isReadOnly: true },
  { id: 'assessments', label: 'Assessments', icon: BarChart3, isReadOnly: true },
  { id: 'revenue', label: 'Revenue Center', icon: IndianRupee },
  { id: 'school-events', label: 'School Events', icon: Sparkles, isPremium: true },
  { id: 'announcements', label: 'Announcements', icon: Bell },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  const { activePage, setActivePage, subscription, schoolProfile } = useSchool();

  const handleNavClick = (id) => {
    setActivePage(id);
    if (mobileOpen) setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          onClick={() => setMobileOpen(false)} 
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen flex flex-col justify-between
        bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800
        transition-all duration-300 shadow-xl lg:shadow-none
        ${collapsed ? 'w-20' : 'w-72'}
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div>
          {/* Top Brand Header */}
          <div className="h-16 px-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl flex-shrink-0 shadow-md shadow-blue-500/20">
                CSF
              </div>
              {!collapsed && (
                <div className="flex flex-col truncate">
                  <span className="text-sm font-black text-slate-900 dark:text-white truncate">
                    Child Skill Foundation
                  </span>
                  <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider truncate">
                    School Partner Portal
                  </span>
                </div>
              )}
            </div>

            {/* Close button on mobile */}
            <button 
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* School Name & Verification Pill */}
          {!collapsed && (
            <div className="mx-3 mt-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
              <div className="truncate pr-2">
                <div className="text-xs font-black text-slate-800 dark:text-slate-100 truncate">{schoolProfile.name}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{schoolProfile.code}</div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1 flex-shrink-0">
                <ShieldCheck className="w-3 h-3" /> Approved
              </span>
            </div>
          )}

          {/* Navigation Items Scroll Container */}
          <div className="px-3 py-4 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)] custom-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  title={collapsed ? item.label : undefined}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-xs transition-all relative group
                    ${isActive 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                    }
                    ${collapsed ? 'justify-center' : ''}
                  `}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'}`} />

                  {!collapsed && (
                    <span className="truncate flex-1 text-left">{item.label}</span>
                  )}

                  {!collapsed && item.badge && (
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                      {item.badge}
                    </span>
                  )}

                  {!collapsed && item.isReadOnly && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                      View
                    </span>
                  )}

                  {!collapsed && item.isPremium && (
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                      PRO
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Collapse Toggle & Subscription Status */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          {!collapsed && (
            <div className="mb-2 p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{subscription} Partner</span>
              </div>
              <span className="text-[10px] font-black px-1.5 py-0.5 bg-white/20 rounded-md">Active</span>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>
      </aside>
    </>
  );
};
