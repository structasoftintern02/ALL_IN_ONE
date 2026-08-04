import React, { useState } from 'react';
import { useTheme, VARIATIONS } from '../../context/ThemeContext';
import { 
  LayoutDashboard, Building2, Briefcase, Users, GitMerge, Calendar, 
  UserCheck, BarChart3, CreditCard, Settings, ChevronLeft, ChevronRight, 
  LogOut, Menu, X, ArrowLeft, ShieldCheck, Sparkles 
} from 'lucide-react';

export const Sidebar = ({ activePage, setActivePage }) => {
  const { variation, activeConfig } = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Overview Dashboard', icon: LayoutDashboard },
    { id: 'company', label: 'Company Profile', icon: Building2 },
    { id: 'jobs', label: 'Job Management', icon: Briefcase, badge: '4 Active' },
    { id: 'candidates', label: 'Candidate Search', icon: Users, badge: '142 New' },
    { id: 'pipeline', label: 'Kanban ATS Pipeline', icon: GitMerge, badge: 'Live' },
    { id: 'interviews', label: 'Interviews & Calendar', icon: Calendar },
    { id: 'onboarding', label: 'Candidate Onboarding', icon: UserCheck },
    { id: 'analytics', label: 'Hiring Analytics', icon: BarChart3 },
    { id: 'employees', label: 'Employee HRMS Directory', icon: Users },
    { id: 'billing', label: 'Billing & Subscription', icon: CreditCard },
    { id: 'settings', label: 'Company Settings', icon: Settings }
  ];

  const handleSelect = (id) => {
    setActivePage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Header Bar */}
      <div className="block lg:hidden w-full bg-slate-950 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <button 
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="p-1.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:text-white flex items-center gap-1 text-xs font-bold mr-1"
            title="Back to Public Website"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400" />
            <span className="hidden sm:inline">Back</span>
          </button>
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm">
            <Building2 className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div>
            <h2 className="font-extrabold text-xs text-white leading-tight">EmployerHub Console</h2>
            <span className="text-[9px] text-blue-400 font-bold">TechCorp Solutions</span>
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 hover:text-white flex items-center gap-1.5 text-xs font-bold"
        >
          {mobileOpen ? <X className="w-4 h-4 text-blue-400" /> : <Menu className="w-4 h-4 text-blue-400" />}
          <span>{mobileOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {/* Mobile Slide-Over Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex justify-start">
          <div className="w-4/5 max-w-xs bg-slate-950 text-white p-5 min-h-full flex flex-col justify-between shadow-2xl border-r border-slate-800 animate-in slide-in-from-left duration-200 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-base">
                    <Building2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-sm text-white">EmployerHub</h2>
                    <span className="text-[10px] text-blue-400 font-bold">Enterprise ATS Portal</span>
                  </div>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-1 text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1.5">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-blue-600 text-white font-bold shadow-md'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/20 text-white font-bold">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2 mt-6">
              <button
                onClick={() => {
                  setActivePage('home');
                  setMobileOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full text-left px-3 py-2.5 text-xs font-bold text-slate-200 hover:bg-slate-800 hover:text-white rounded-xl flex items-center gap-2 transition-all border border-slate-800"
              >
                <ArrowLeft className="w-4 h-4 text-blue-400" />
                <span>Exit to Public Website</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop FIXED Sidebar (Stays 100% fixed on left when page scrolls) */}
      <aside className={`hidden lg:flex transition-all duration-300 fixed top-0 left-0 h-screen overflow-y-auto z-30 flex-col justify-between flex-shrink-0 ${
        collapsed ? 'w-20' : 'w-64'
      } ${activeConfig.sidebarBg} border-r border-slate-800 p-4`}>
        <div>
          {/* Toggle Collapse Button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="absolute -right-3 top-6 w-7 h-7 rounded-full bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center shadow-md hover:bg-slate-700 transition-colors z-40"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

          {/* Sidebar Brand Header */}
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 ${
              variation === VARIATIONS.ENTERPRISE ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-blue-600'
            }`}>
              <Building2 className="w-5 h-5 stroke-[2.5]" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-extrabold text-base tracking-tight text-white leading-none">
                  EMPLOYER<span className="text-blue-400">HUB</span>
                </h2>
                <span className="text-[10px] text-slate-400 font-medium">HRMS & ATS Console</span>
              </div>
            )}
          </div>

          {/* Menu Links */}
          <div className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-900/30'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                  title={collapsed ? item.label : ''}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!collapsed && <span>{item.label}</span>}
                  </div>

                  {!collapsed && item.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sidebar Footer User Card + Exit Button */}
        <div className="pt-4 border-t border-slate-800 space-y-2.5 mt-4">
          {!collapsed && (
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5 truncate">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0">
                  TC
                </div>
                <div className="truncate text-left">
                  <span className="font-bold text-xs text-white block truncate">TechCorp India</span>
                  <span className="text-[10px] text-emerald-400 font-bold block truncate">HRMS Plan Active</span>
                </div>
              </div>
            </div>
          )}

          {/* Back / Exit Button */}
          <button
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`w-full text-left p-2.5 text-xs font-extrabold text-slate-200 hover:bg-slate-800 hover:text-white rounded-xl flex items-center gap-2.5 transition-all border border-slate-800 ${
              collapsed ? 'justify-center' : ''
            }`}
            title="Exit to Public Website"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400 flex-shrink-0" />
            {!collapsed && <span>Exit to Public Website</span>}
          </button>

          <button
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`w-full text-left p-2 text-xs font-semibold text-red-400 hover:bg-red-500/10 rounded-xl flex items-center gap-2.5 transition-colors ${
              collapsed ? 'justify-center' : ''
            }`}
            title="Sign Out"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            {!collapsed && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Desktop Layout Spacer Div (preserves width spacing for fixed sidebar) */}
      <div className={`hidden lg:block flex-shrink-0 transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`} />
    </>
  );
};
