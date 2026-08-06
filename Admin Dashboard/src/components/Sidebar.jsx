import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, ShieldCheck, Building2, Database, Settings,
  ChevronLeft, ChevronRight, ChevronDown, Users, Baby, BarChart3, IndianRupee,
  FileText, Bell, LogOut, GraduationCap, Sparkles, Layers, Award, Home, BookOpen, Clock, Target
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
  },
  {
    title: 'Child Talent Website',
    items: [
      {
        id: 'home-page',
        label: 'Home Page',
        icon: Home,
        subItems: [
          { id: 'child-talent-hero', label: 'Hero Section', icon: Sparkles }
        ]
      },
      {
        id: 'age-programs-page',
        label: 'Age Programs',
        icon: Layers,
        subItems: [
          { id: 'child-talent-age-programs', label: 'Programs Section', icon: BookOpen }
        ]
      },
      {
        id: 'skills-page',
        label: '10 Skill Domains',
        icon: Award,
        subItems: [
          { id: 'child-talent-skills', label: 'Skill Categories Section', icon: Layers }
        ]
      },
      {
        id: 'how-it-works-page',
        label: 'How It Works',
        icon: Clock,
        subItems: [
          { id: 'child-talent-how-it-works', label: '5-Step Process Section', icon: Target }
        ]
      },
      {
        id: 'sample-report-page',
        label: 'Sample Report',
        icon: BarChart3,
        subItems: [
          { id: 'child-talent-sample-report', label: 'Report Preview Section', icon: FileText }
        ]
      }
    ]
  }
];

export const Sidebar = ({ activePage, setActivePage, collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  const [openSections, setOpenSections] = useState({
    Overview: true,
    'Child Talent Website': true,
    Verification: true,
    Management: true,
    Analytics: true,
    System: true
  });

  const [openSubMenus, setOpenSubMenus] = useState({
    'home-page': true,
    'age-programs-page': true,
    'skills-page': true,
    'how-it-works-page': true,
    'sample-report-page': true
  });

  const toggleSubMenu = (id) => {
    setOpenSubMenus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleSection = (section) => {
    if (section.items && section.items.length > 0) {
      setOpenSections(prev => ({
        ...prev,
        [section.title]: !prev[section.title]
      }));
    } else if (section.id) {
      handleNav(section.id);
    }
  };

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
        <div style={{ flex: 1, paddingTop: 8 }} className="sidebar-scrollable">
          {menuSections.map((section, sIdx) => {
            const isOpen = openSections[section.title] !== false;
            const isDirectActive = section.items.length === 0 && activePage === section.id;

            return (
              <div key={sIdx} className="sidebar-section-container">
                <div className="sidebar-section">
                  <button
                    type="button"
                    onClick={() => toggleSection(section)}
                    className={`sidebar-section-toggle ${isDirectActive ? 'active' : ''}`}
                  >
                    <span className={`sidebar-section-title ${isDirectActive ? 'text-white font-extrabold' : ''}`}>{section.title}</span>
                    {section.items.length > 0 && !collapsed && (
                      <ChevronDown
                        size={15}
                        className={`section-chevron ${isOpen ? 'open' : ''}`}
                      />
                    )}
                  </button>
                </div>

                {section.items.length > 0 && (
                  <AnimatePresence initial={false}>
                    {(isOpen || collapsed) && (
                      <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="sidebar-nav"
                        style={{ overflow: 'hidden' }}
                      >
                      {section.items.map((item) => {
                        const Icon = item.icon;
                        const hasSubItems = item.subItems && item.subItems.length > 0;
                        const isSubOpen = openSubMenus[item.id] !== false;
                        const isItemActive = activePage === item.id || (hasSubItems && item.subItems.some(sub => sub.id === activePage));

                        return (
                          <div key={item.id}>
                            <motion.button
                              onClick={() => {
                                if (hasSubItems) {
                                  toggleSubMenu(item.id);
                                  handleNav(item.subItems[0].id);
                                } else {
                                  handleNav(item.id);
                                }
                              }}
                              className={`nav-item ${isItemActive ? 'active' : ''}`}
                              whileTap={{ scale: 0.97 }}
                              title={collapsed ? item.label : undefined}
                            >
                              <Icon className="nav-icon" />
                              <span className="nav-label">{item.label}</span>
                              {item.badge && (
                                <span className="nav-badge">{item.badge}</span>
                              )}
                              {hasSubItems && !collapsed && (
                                <ChevronDown
                                  size={14}
                                  style={{
                                    marginLeft: 'auto',
                                    transform: isSubOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s',
                                    opacity: 0.7
                                  }}
                                />
                              )}
                            </motion.button>

                            {/* Render Nested Sub-Items */}
                            {hasSubItems && isSubOpen && !collapsed && (
                              <div style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 2, marginTop: 4, marginBottom: 4 }}>
                                {item.subItems.map((sub) => {
                                  const SubIcon = sub.icon;
                                  const isSubActive = activePage === sub.id;
                                  return (
                                    <motion.button
                                      key={sub.id}
                                      onClick={() => handleNav(sub.id)}
                                      className={`nav-item ${isSubActive ? 'active' : ''}`}
                                      style={{
                                        padding: '7px 12px',
                                        fontSize: 12,
                                        borderRadius: 8
                                      }}
                                      whileTap={{ scale: 0.97 }}
                                    >
                                      <SubIcon size={14} className="nav-icon" />
                                      <span className="nav-label">{sub.label}</span>
                                    </motion.button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </motion.nav>
                  )}
                </AnimatePresence>
              )}
            </div>
            );
          })}
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
