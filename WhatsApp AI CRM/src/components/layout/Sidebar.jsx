import React, { useState } from 'react';
import { useTheme, VARIATIONS } from '../../context/ThemeContext';
import { 
  LayoutDashboard, MessageSquare, Send, Bot, Users, CreditCard, User, 
  Settings, LogOut, ChevronLeft, ChevronRight, Zap, ShieldCheck, Menu, X, ArrowLeft 
} from 'lucide-react';

export const Sidebar = ({ activePage, setActivePage }) => {
  const { variation, activeConfig } = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Overview Dashboard', icon: LayoutDashboard },
    { id: 'inbox', label: 'Live Team Inbox', icon: MessageSquare, badge: '12 Live' },
    { id: 'broadcasts', label: 'Broadcast Campaigns', icon: Send },
    { id: 'ai-bots', label: 'AI Chatbots & Flows', icon: Bot, badge: 'GPT-4o' },
    { id: 'contacts', label: 'CRM Contacts', icon: Users },
    { id: 'billing', label: 'Subscription & Billing', icon: CreditCard },
    { id: 'profile', label: 'Account Profile', icon: User }
  ];

  const handleSelect = (id) => {
    if (id === 'dashboard' || id === 'billing' || id === 'profile') {
      setActivePage(id);
    } else {
      setActivePage('dashboard');
    }
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
              setActivePage('landing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="p-1.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:text-white flex items-center gap-1 text-xs font-bold mr-1"
            title="Back to Home Website"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">Back</span>
          </button>
          <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 font-extrabold flex items-center justify-center text-sm">
            <MessageSquare className="w-4 h-4 fill-current" />
          </div>
          <div>
            <h2 className="font-extrabold text-xs text-white leading-tight">WhatsApp AI CRM</h2>
            <span className="text-[9px] text-emerald-400 font-bold">Cloud API Console</span>
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 hover:text-white flex items-center gap-1.5 text-xs font-bold"
        >
          {mobileOpen ? <X className="w-4 h-4 text-emerald-400" /> : <Menu className="w-4 h-4 text-emerald-400" />}
          <span>{mobileOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {/* Mobile Slide-Over Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex justify-start">
          <div className="w-4/5 max-w-xs bg-slate-950 text-white p-5 min-h-full flex flex-col justify-between shadow-2xl border-r border-slate-800 animate-in slide-in-from-left duration-200">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 font-extrabold flex items-center justify-center text-base">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-sm text-white">WhatsApp AI CRM</h2>
                    <span className="text-[10px] text-emerald-400 font-bold">Cloud API Console</span>
                  </div>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-1 text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activePage === item.id || (activePage === 'dashboard' && item.id === 'dashboard');
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-emerald-600 text-white font-bold shadow-md'
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

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setActivePage('landing');
                  setMobileOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full text-left px-3 py-2.5 text-xs font-bold text-slate-200 hover:bg-slate-800 hover:text-white rounded-xl flex items-center gap-2 transition-all border border-slate-800"
              >
                <ArrowLeft className="w-4 h-4 text-emerald-400" />
                <span>Exit to Main Website</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sticky Sidebar */}
      <aside className={`hidden lg:flex max-lg:hidden transition-all duration-300 sticky top-0 h-screen overflow-y-auto z-30 flex-col justify-between flex-shrink-0 ${
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
              variation === VARIATIONS.DARK ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-emerald-600'
            }`}>
              <MessageSquare className="w-5 h-5 fill-current" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-extrabold text-base tracking-tight text-white leading-none">
                  WHATSAPP<span className="text-emerald-400">AI</span>
                </h2>
                <span className="text-[10px] text-slate-400 font-medium">Cloud API Console</span>
              </div>
            )}
          </div>

          {/* Menu Links */}
          <div className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id || (activePage === 'dashboard' && item.id === 'dashboard');

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white font-bold shadow-md shadow-emerald-900/30'
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

        {/* Sidebar Footer User Card + Back Button */}
        <div className="pt-4 border-t border-slate-800 space-y-2.5">
          {!collapsed && (
            <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 flex items-center justify-between">
              <div className="flex items-center gap-2.5 truncate">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-xs flex-shrink-0">
                  AR
                </div>
                <div className="truncate text-left">
                  <span className="font-bold text-xs text-white block truncate">Alex Rivera</span>
                  <span className="text-[10px] text-slate-400 block truncate">Pro Plan Active</span>
                </div>
              </div>
            </div>
          )}

          {/* Back / Exit Button */}
          <button
            onClick={() => {
              setActivePage('landing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`w-full text-left p-2.5 text-xs font-extrabold text-slate-200 hover:bg-slate-800 hover:text-white rounded-xl flex items-center gap-2.5 transition-all border border-slate-800 ${
              collapsed ? 'justify-center' : ''
            }`}
            title="Exit to Main Website"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            {!collapsed && <span>Exit to Main Website</span>}
          </button>

          <button
            onClick={() => {
              setActivePage('landing');
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
    </>
  );
};
