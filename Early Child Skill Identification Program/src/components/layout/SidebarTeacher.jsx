import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { 
  LayoutDashboard, Upload, Calendar, Award, DollarSign, ChevronLeft, Menu, X 
} from 'lucide-react';

export const SidebarTeacher = ({ activePage, setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menu = [
    { id: 'teacher-dashboard', label: 'Teacher Console', icon: LayoutDashboard },
    { id: 'teacher-cert-upload', label: 'Certification Upload', icon: Upload, badge: 'Verified' },
    { id: 'teacher-calendar', label: 'Weekly Availability', icon: Calendar },
    { id: 'teacher-earnings', label: 'Session Earnings', icon: DollarSign, badge: '₹42,500' }
  ];

  const handleSelect = (id) => {
    setActivePage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Portal Header Bar */}
      <div className="lg:hidden w-full bg-slate-950 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-purple-600 text-white font-extrabold flex items-center justify-center text-sm">
            🧑‍🏫
          </div>
          <div>
            <h2 className="font-extrabold text-xs text-white leading-tight">Ananya Sharma</h2>
            <span className="text-[9px] text-purple-300 font-bold">Certified Skill Teacher</span>
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 hover:text-white flex items-center gap-1.5 text-xs font-bold"
        >
          {mobileOpen ? <X className="w-4 h-4 text-purple-400" /> : <Menu className="w-4 h-4 text-purple-400" />}
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
                  <div className="w-9 h-9 rounded-xl bg-purple-600 text-white font-extrabold flex items-center justify-center text-base">
                    🧑‍🏫
                  </div>
                  <div>
                    <h2 className="font-extrabold text-sm text-white">Ananya Sharma</h2>
                    <span className="text-[10px] text-purple-300 font-bold">Certified Skill Teacher</span>
                  </div>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-1 text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2">
                {menu.map((item) => {
                  const Icon = item.icon;
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-purple-600 text-white font-bold shadow-md'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-purple-300" />
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

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <button
                onClick={() => {
                  setActivePortal('public');
                  setActivePage('home');
                }}
                className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Exit to Main Website</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar (lg:flex) */}
      <aside className="hidden lg:flex w-64 bg-slate-950 text-white border-r border-slate-800 p-4 min-h-screen flex-col justify-between flex-shrink-0">
        <div>
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-extrabold flex items-center justify-center text-lg">
              🧑‍🏫
            </div>
            <div>
              <h2 className="font-extrabold text-sm text-white leading-tight">Ananya Sharma</h2>
              <span className="text-[10px] text-purple-300 font-bold">Certified Skill Teacher</span>
            </div>
          </div>

          <div className="space-y-1.5">
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-purple-600 text-white font-bold shadow-md'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-purple-300" />
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

        <div className="pt-4 border-t border-slate-800 space-y-3">
          <button
            onClick={() => {
              setActivePortal('public');
              setActivePage('home');
            }}
            className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Exit to Main Website</span>
          </button>
        </div>
      </aside>
    </>
  );
};
