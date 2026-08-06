import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, ShieldCheck, Building2, Database, Settings,
  ChevronLeft, ChevronRight, Users, Baby, BarChart3, IndianRupee,
  FileText, Bell, LogOut, GraduationCap
} from 'lucide-react';

const menuSections = [
  {
    title: 'Overview',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard }
    ]
  },
  {
    title: 'Verification',
    items: [
      { id: 'verify-teachers', label: 'Teacher Verification', icon: ShieldCheck, badge: '8' },
      { id: 'verify-schools', label: 'School Accreditation', icon: Building2, badge: '5' }
    ]
  },
  {
    title: 'Management',
    items: [
      { id: 'children', label: 'Children', icon: Baby },
      { id: 'parents', label: 'Parents', icon: Users },
      { id: 'master-data', label: 'Skill & Age Masters', icon: Database }
    ]
  },
  {
    title: 'Analytics',
    items: [
      { id: 'analytics', label: 'Assessment Analytics', icon: BarChart3 },
      { id: 'revenue', label: 'Revenue & Billing', icon: IndianRupee }
    ]
  },
  {
    title: 'System',
    items: [
      { id: 'reports', label: 'Reports & Export', icon: FileText },
      { id: 'settings', label: 'Platform Settings', icon: Settings }
    ]
  }
];

export const Sidebar = ({ activePage, setActivePage, collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  const handleNav = (id) => {
    setActivePage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="mobile-overlay show" 
          onClick={() => setMobileOpen(false)} 
        />
      )}

      <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
        {/* Brand */}
        <div className="sidebar-brand">
          <div className="brand-icon">🧒</div>
          <div className="brand-text">
            <h2>Early Child Skill</h2>
            <span>Admin Console</span>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ flex: 1, paddingTop: 8 }}>
          {menuSections.map((section, sIdx) => (
            <div key={sIdx}>
              <div className="sidebar-section">
                <div className="sidebar-section-title">{section.title}</div>
              </div>
              <nav className="sidebar-nav">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activePage === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNav(item.id)}
                      className={`nav-item ${isActive ? 'active' : ''}`}
                      whileTap={{ scale: 0.97 }}
                      title={collapsed ? item.label : undefined}
                    >
                      <Icon className="nav-icon" />
                      <span className="nav-label">{item.label}</span>
                      {item.badge && (
                        <span className="nav-badge">{item.badge}</span>
                      )}
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="user-avatar">SA</div>
            <div className="user-info">
              <div className="user-name">Super Admin</div>
              <div className="user-role">Platform Governance</div>
            </div>
          </div>
          <button 
            className="sidebar-collapse-btn" 
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            {!collapsed && <span>Collapse</span>}
          </button>
        </div>
      </aside>
    </>
  );
};
