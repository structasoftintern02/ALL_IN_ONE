import React from 'react';
import { Menu, Bell, Search, ChevronRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';

const PAGE_TITLES = {
  dashboard: 'Dashboard',
  'child-profiles': 'My Children',
  'add-child': 'Add New Child',
  'edit-child': 'Edit Child Profile',
  'start-assessment': 'Start Assessment',
  'assessment-history': 'Assessment History',
  'browse-programs': 'Browse Programs',
  'my-enrollments': 'My Enrollments',
  'school-list': 'Nearby Schools',
  'school-map': 'School Map',
  payments: 'Payment History',
  'skill-reports': 'Skill Reports',
  certificates: 'Certificates',
  notifications: 'Notifications',
  settings: 'Profile Settings',
  children: 'My Children'
};

export const TopBar = ({ setMobileOpen, collapsed }) => {
  const { user } = useAuth();
  const { activePage, setActivePage, unreadCount } = useApp();

  const pageTitle = PAGE_TITLES[activePage] || 'Dashboard';

  return (
    <header
      className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8"
      style={{
        height: 'var(--topbar-height)',
        background: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1.5px solid #E2E8F0'
      }}
    >
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        {/* Left: Mobile menu + Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '10px', background: '#F1F5F9', border: '1px solid #E2E8F0', color: '#475569', cursor: 'pointer' }}
          >
            <Menu style={{ width: '18px', height: '18px' }} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <span className="hidden sm:inline" style={{ color: '#64748B', fontWeight: 600 }}>Parent Portal</span>
            <ChevronRight className="hidden sm:inline" style={{ width: '14px', height: '14px', color: '#94A3B8' }} />
            <span style={{ fontWeight: 900, color: '#0F172A', background: '#F1F5F9', padding: '4px 10px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '12px' }}>
              {pageTitle}
            </span>
          </div>
        </div>

        {/* Right: Search + Notifications + Avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Search (Tablet & Desktop only) */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '10px', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: '12px', padding: '0 14px', height: '40px', width: '220px' }}>
            <Search style={{ width: '16px', height: '16px', color: '#94A3B8' }} />
            <input
              type="text"
              placeholder="Search portal..."
              style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: '13px', fontWeight: 600, color: '#0F172A', width: '100%' }}
            />
          </div>

          {/* Notification Bell */}
          <button
            type="button"
            onClick={() => setActivePage('notifications')}
            style={{ position: 'relative', width: '38px', height: '38px', borderRadius: '12px', background: '#F8FAFC', border: '1.5px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', cursor: 'pointer' }}
          >
            <Bell style={{ width: '18px', height: '18px' }} />
            {unreadCount > 0 && (
              <span style={{ position: 'absolute', top: '-4px', right: '-4px', width: '18px', height: '18px', borderRadius: '50%', background: '#EF4444', color: 'white', fontSize: '10px', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(239, 68, 68, 0.4)' }}>
                {unreadCount}
              </span>
            )}
          </button>

          {/* User Avatar */}
          {user && (
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '12px', borderLeft: '1.5px solid #E2E8F0', cursor: 'pointer' }}
              onClick={() => setActivePage('settings')}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0D9488, #10B981)',
                color: 'white',
                fontSize: '13px',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {user.avatar}
              </div>
              <div className="hidden sm:block">
                <div style={{ fontSize: '13px', fontWeight: 900, color: '#0F172A', lineHeight: 1.2 }}>{user.name}</div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#64748B' }}>Parent Account</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
