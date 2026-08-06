import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Baby, ClipboardCheck, BookOpen, School, CreditCard,
  BarChart3, Bell, Settings, LogOut, ChevronDown, ChevronRight, Menu, X, Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';

const navSections = [
  {
    title: 'MAIN',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      {
        id: 'children',
        label: 'My Children',
        icon: Baby,
        subItems: [
          { id: 'child-profiles', label: 'All Profiles' },
          { id: 'add-child', label: 'Add New Child' }
        ]
      }
    ]
  },
  {
    title: 'LEARNING',
    items: [
      {
        id: 'assessments',
        label: 'Assessments',
        icon: ClipboardCheck,
        subItems: [
          { id: 'start-assessment', label: 'Start Assessment' },
          { id: 'assessment-history', label: 'Assessment History' }
        ]
      },
      {
        id: 'programs',
        label: 'Programs',
        icon: BookOpen,
        subItems: [
          { id: 'browse-programs', label: 'Browse Programs' },
          { id: 'my-enrollments', label: 'My Enrollments' }
        ]
      },
      {
        id: 'schools',
        label: 'Nearby Schools',
        icon: School,
        subItems: [
          { id: 'school-list', label: 'Find Schools' },
          { id: 'school-map', label: 'Map View' }
        ]
      }
    ]
  },
  {
    title: 'ACCOUNT',
    items: [
      { id: 'payments', label: 'Payments', icon: CreditCard },
      {
        id: 'progress',
        label: 'Progress & Reports',
        icon: BarChart3,
        subItems: [
          { id: 'skill-reports', label: 'Skill Reports' },
          { id: 'certificates', label: 'Certificates' }
        ]
      },
      { id: 'notifications', label: 'Notifications', icon: Bell },
      { id: 'settings', label: 'Settings', icon: Settings }
    ]
  }
];

export const Sidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  const { user, logout } = useAuth();
  const { activePage, setActivePage, unreadCount } = useApp();
  const [openMenus, setOpenMenus] = useState({ children: true, assessments: false, programs: false, schools: false, progress: false });

  const toggleMenu = (id) => setOpenMenus(prev => ({ ...prev, [id]: !prev[id] }));

  const handleNav = (id) => {
    setActivePage(id);
    setMobileOpen(false);
  };

  const isActive = (item) => {
    if (activePage === item.id) return true;
    if (item.subItems) return item.subItems.some(s => activePage === s.id);
    return false;
  };

  const sidebarContent = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#090D16', color: 'white' }}>
      {/* Logo / Brand */}
      <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: '#030712' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 42,
            height: 42,
            borderRadius: 14,
            background: 'linear-gradient(135deg, #0D9488, #10B981)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 20px rgba(13, 148, 136, 0.3)'
          }}>
            <Sparkles style={{ width: 22, height: 22, color: 'white' }} />
          </div>
          {!collapsed && (
            <div>
              <div style={{ fontSize: 16, fontWeight: 900, color: 'white', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Parent Portal</div>
              <div style={{ fontSize: 10, fontWeight: 800, color: '#2DD4BF', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>Child Talent Discovery</div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '18px 12px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {navSections.map((section) => (
          <div key={section.title}>
            {!collapsed && (
              <div style={{ padding: '0 12px', marginBottom: 8, fontSize: 11, fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {section.title}
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item);
                const hasChildren = item.subItems && item.subItems.length > 0;
                const isOpen = openMenus[item.id];

                return (
                  <div key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        if (hasChildren) {
                          toggleMenu(item.id);
                        } else {
                          handleNav(item.id);
                        }
                      }}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '11px 14px',
                        borderRadius: 12,
                        fontSize: 14,
                        fontWeight: active ? 800 : 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        border: active ? '1px solid rgba(45, 212, 191, 0.3)' : '1px solid transparent',
                        background: active ? 'rgba(13, 148, 136, 0.18)' : 'transparent',
                        color: active ? '#2DD4BF' : '#94A3B8'
                      }}
                    >
                      <Icon style={{ width: 18, height: 18, flexShrink: 0, color: active ? '#2DD4BF' : '#64748B' }} />
                      {!collapsed && (
                        <>
                          <span style={{ flex: 1, textAlign: 'left' }}>{item.label}</span>
                          {item.id === 'notifications' && unreadCount > 0 && (
                            <span style={{ width: 20, height: 20, borderRadius: 999, background: '#EF4444', color: 'white', fontSize: 10, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              {unreadCount}
                            </span>
                          )}
                          {hasChildren && (
                            <ChevronDown style={{ width: 16, height: 16, transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none', color: '#64748B' }} />
                          )}
                        </>
                      )}
                    </button>

                    {/* Sub-items */}
                    {hasChildren && isOpen && !collapsed && (
                      <div style={{ marginLeft: 32, marginTop: 4, display: 'flex', flexDirection: 'column', gap: 2, paddingLeft: 10, borderLeft: '1.5px solid rgba(255,255,255,0.08)' }}>
                        {item.subItems.map((sub) => (
                          <button
                            key={sub.id}
                            type="button"
                            onClick={() => handleNav(sub.id)}
                            style={{
                              width: '100%',
                              textAlign: 'left',
                              padding: '8px 12px',
                              borderRadius: 8,
                              fontSize: 13,
                              fontWeight: activePage === sub.id ? 800 : 500,
                              cursor: 'pointer',
                              border: 'none',
                              background: activePage === sub.id ? 'rgba(45, 212, 191, 0.15)' : 'transparent',
                              color: activePage === sub.id ? '#5EEAD4' : '#64748B',
                              transition: 'all 0.15s'
                            }}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User Card + Logout */}
      {!collapsed && user && (
        <div style={{ padding: 16, borderTop: '1px solid rgba(255,255,255,0.08)', background: '#030712' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{
              width: 38,
              height: 38,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #0D9488, #10B981)',
              color: 'white',
              fontSize: 13,
              fontWeight: 900,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {user.avatar}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.name}</div>
              <div style={{ fontSize: 11, color: '#64748B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.email}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={logout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              padding: '10px 14px',
              borderRadius: 10,
              background: 'rgba(239, 68, 68, 0.12)',
              color: '#FCA5A5',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              fontSize: 13,
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <LogOut style={{ width: 15, height: 15 }} />
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
        className={`hidden lg:flex flex-col fixed top-0 left-0 h-screen bg-slate-950 border-r border-slate-800/60 z-40 transition-all duration-300
          ${collapsed ? 'w-[72px]' : 'w-[var(--sidebar-width)]'}`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 left-0 h-screen w-[var(--sidebar-width)] bg-slate-950 border-r border-slate-800/60 z-50 lg:hidden flex flex-col"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white"
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
