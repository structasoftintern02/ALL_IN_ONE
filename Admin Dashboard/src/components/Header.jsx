import React, { useState } from 'react';
import { Search, Bell, Menu, Shield, LogOut, FileText } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Header = ({ setMobileOpen, setActivePage }) => {
  const { activities, showToast, logout, currentUser } = useApp();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const now = new Date();
  const greeting = now.getHours() < 12 ? 'Good Morning' : now.getHours() < 17 ? 'Good Afternoon' : 'Good Evening';

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      showToast(`Searching platform for "${searchQuery}"...`, 'info');
      setActivePage('children');
    }
  };

  return (
    <header className="header" style={{ position: 'relative' }}>
      <div className="header-left">
        <button className="mobile-menu-btn" onClick={() => setMobileOpen(true)}>
          <Menu size={20} />
        </button>
        <div className="header-greeting">
          <h1>{greeting}, {currentUser?.name || 'Super Admin'} 👋</h1>
          <p>Here's what's happening on your platform today</p>
        </div>
      </div>

      <div className="header-right">
        {/* Search */}
        <div className="header-search">
          <Search size={16} />
          <input 
            type="text" 
            placeholder="Search children, schools, teachers..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchKeyDown}
          />
        </div>
        
        {/* Notifications Dropdown Button */}
        <div style={{ position: 'relative' }}>
          <button 
            className="header-btn"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
          >
            <Bell size={18} />
            <span className="badge-dot" />
          </button>

          {/* Notifications Popover Menu */}
          {showNotifications && (
            <div style={{
              position: 'absolute', top: 48, right: 0, width: 340,
              background: 'white', borderRadius: 16, border: '1px solid var(--slate-200)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)', zIndex: 100, overflow: 'hidden'
            }}>
              <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--slate-100)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 800, fontSize: 14, color: 'var(--slate-900)' }}>Platform Alerts</span>
                <span style={{ fontSize: 10, fontWeight: 700, background: 'rgba(79,70,229,0.1)', color: 'var(--primary)', padding: '2px 8px', borderRadius: 999 }}>
                  {activities.length} New
                </span>
              </div>
              <div style={{ maxHeight: 300, overflowY: 'auto' }}>
                {activities.slice(0, 5).map(act => (
                  <div key={act.id} style={{ padding: '12px 16px', borderBottom: '1px solid var(--slate-100)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 16 }}>{act.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--slate-800)', lineHeight: 1.3 }}>{act.message}</div>
                      <div style={{ fontSize: 10, color: 'var(--slate-400)', marginTop: 2 }}>{act.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => {
                  showToast('Marked all notifications as read', 'success');
                  setShowNotifications(false);
                }}
                style={{ width: '100%', padding: 10, border: 'none', background: 'var(--slate-50)', color: 'var(--primary)', fontWeight: 700, fontSize: 12, cursor: 'pointer', borderTop: '1px solid var(--slate-100)' }}
              >
                Mark All as Read
              </button>
            </div>
          )}
        </div>

        {/* Profile Avatar & Dropdown */}
        <div style={{ position: 'relative' }}>
          <div 
            className="header-avatar"
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
          >
            {currentUser?.avatar || 'SA'}
          </div>

          {/* Profile Menu Popover */}
          {showProfileMenu && (
            <div style={{
              position: 'absolute', top: 48, right: 0, width: 220,
              background: 'white', borderRadius: 14, border: '1px solid var(--slate-200)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)', zIndex: 100, overflow: 'hidden', padding: 6
            }}>
              <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--slate-100)' }}>
                <div style={{ fontWeight: 800, fontSize: 13, color: 'var(--slate-900)' }}>{currentUser?.name || 'Super Admin'}</div>
                <div style={{ fontSize: 11, color: 'var(--slate-500)' }}>{currentUser?.email || 'admin@ecsip.in'}</div>
              </div>
              <button 
                onClick={() => { setActivePage('settings'); setShowProfileMenu(false); }}
                style={{ width: '100%', padding: '9px 12px', background: 'none', border: 'none', textAlign: 'left', fontSize: 12, fontWeight: 600, color: 'var(--slate-700)', cursor: 'pointer', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <Shield size={14} /> Platform Settings
              </button>
              <button 
                onClick={() => { setActivePage('reports'); setShowProfileMenu(false); }}
                style={{ width: '100%', padding: '9px 12px', background: 'none', border: 'none', textAlign: 'left', fontSize: 12, fontWeight: 600, color: 'var(--slate-700)', cursor: 'pointer', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <FileText size={14} /> System Reports
              </button>
              <button 
                onClick={() => { logout(); setShowProfileMenu(false); }}
                style={{ width: '100%', padding: '9px 12px', background: 'none', border: 'none', textAlign: 'left', fontSize: 12, fontWeight: 600, color: 'var(--red)', cursor: 'pointer', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8, borderTop: '1px solid var(--slate-100)', marginTop: 4 }}
              >
                <LogOut size={14} /> Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
