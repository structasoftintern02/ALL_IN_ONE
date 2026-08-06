import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, GraduationCap, Calendar, Users, FileText, CheckCircle2,
  ChevronDown, Menu, X, ShieldCheck, MapPin, Award, Sparkles, Home,
  Info, HelpCircle, DollarSign, Phone, ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Navbar = () => {
  const { activePage, navTo, openModal } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const mainLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Program', icon: Info },  
    { id: 'programs', label: 'Programs', icon: Sparkles }
  ];

  const portalSections = [
    {
      title: 'School ERP & Management',
      items: [
        { id: 'school-profile', label: 'School Profile', icon: Building2, desc: 'View accreditation & facilities' },
        { id: 'program-calendar', label: 'Program Calendar', icon: Calendar, desc: 'Sessions, holidays & expert visits' },
        { id: 'student-enrollment', label: 'Student Enrollment', icon: Users, desc: 'Manage rosters & progress' },
        { id: 'session-scheduling', label: 'Session Scheduling', icon: Calendar, desc: 'Schedule diagnostic sessions' },
        { id: 'attendance', label: 'Attendance Dashboard', icon: CheckCircle2, desc: 'Track daily & monthly attendance' },
        { id: 'progress-reports', label: 'Child Progress Reports', icon: FileText, desc: '360° Radar reports & certificates' }
      ]
    },
    {
      title: 'Program Specifications',
      items: [
        { id: 'age-programs', label: 'Age-wise Skill Programs', icon: Sparkles, desc: '3-5, 5-7, 7-10 years frameworks' },
        { id: 'assessment-process', label: 'Scientific Assessment', icon: ShieldCheck, desc: '5-stage evaluation workflow' },
        { id: 'infrastructure', label: 'Infrastructure Specs', icon: Building2, desc: 'Activity rooms, STEM labs, specs' },
        { id: 'expert-teachers', label: 'Expert Educators', icon: GraduationCap, desc: 'Child psychologists & IIT mentors' },
        { id: 'regional-programs', label: 'Regional Programs', icon: MapPin, desc: 'Browse state & city hubs' },
        { id: 'faqs', label: 'FAQs & Support', icon: Award, desc: 'Frequently asked questions' }
      ]
    }
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--slate-200)'
    }}>

      {/* Main Navbar */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flexShrink: 0 }} onClick={() => { navTo('home'); setMobileOpen(false); }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, fontWeight: 900, boxShadow: '0 4px 12px rgba(37,99,235,0.3)'
          }}>
            🏫
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.02em', lineHeight: 1.1, whiteSpace: 'nowrap' }}>
              Child Skill Identification Program
            </div>
            <div style={{ fontSize: 10, color: 'var(--primary)', fontWeight: 700, whiteSpace: 'nowrap' }}>
              School Portal & ERP
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="desktop-only" style={{ alignItems: 'center', gap: 4, margin: '0 12px' }}>
          {mainLinks.map(link => (
            <button
              key={link.id}
              onClick={() => navTo(link.id)}
              style={{
                background: activePage === link.id ? 'var(--primary-light)' : 'none',
                border: 'none', padding: '8px 12px', borderRadius: 8,
                fontSize: 13, fontWeight: activePage === link.id ? 800 : 600,
                color: activePage === link.id ? 'var(--primary)' : 'var(--slate-700)',
                cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap'
              }}
            >
              {link.label}
            </button>
          ))}

          {/* Mega Menu Toggle */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setMegaOpen(!megaOpen)}
              style={{
                background: megaOpen ? 'var(--primary-light)' : 'none', border: 'none', padding: '8px 12px', borderRadius: 8,
                fontSize: 13, fontWeight: 700, color: megaOpen ? 'var(--primary)' : 'var(--slate-800)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, whiteSpace: 'nowrap'
              }}
            >
              <span>Portal Modules</span>
              <ChevronDown size={14} style={{ transform: megaOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {/* Mega Menu Popover */}
            {megaOpen && (
              <div 
                style={{
                  position: 'absolute', top: 48, right: -100, width: 620,
                  background: 'white', borderRadius: 16, border: '1px solid var(--slate-200)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)', zIndex: 100, padding: 20,
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20
                }}
                onMouseLeave={() => setMegaOpen(false)}
              >
                {portalSections.map((sec, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: 10, letterSpacing: '0.05em' }}>
                      {sec.title}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {sec.items.map(item => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.id}
                            onClick={() => { navTo(item.id); setMegaOpen(false); }}
                            style={{
                              display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 10px',
                              borderRadius: 10, border: 'none', background: activePage === item.id ? 'var(--slate-100)' : 'none',
                              textAlign: 'left', cursor: 'pointer', transition: 'background 0.2s'
                            }}
                          >
                            <div style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <Icon size={16} />
                            </div>
                            <div>
                              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-900)' }}>{item.label}</div>
                              <div style={{ fontSize: 10, color: 'var(--slate-500)' }}>{item.desc}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Action CTAs & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <button className="btn btn-outline btn-sm desktop-only" onClick={() => navTo('school-registration')} style={{ whiteSpace: 'nowrap' }}>
            Register School
          </button>

          {/* Mobile Drawer Toggle Icon Button */}
          <button
            className="mobile-only"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              background: 'var(--slate-100)',
              border: '1px solid var(--slate-200)',
              padding: '6px 10px',
              borderRadius: 10,
              color: 'var(--slate-800)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              outline: 'none'
            }}
          >
            {mobileOpen ? <X size={20} style={{ color: 'var(--slate-900)' }} /> : <Menu size={20} style={{ color: 'var(--slate-900)' }} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Scrollable & Stylized) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'white',
              borderBottom: '2px solid var(--primary)',
              boxShadow: '0 20px 30px rgba(0,0,0,0.12)',
              overflowY: 'auto',
              maxHeight: 'calc(85vh - 72px)',
              padding: 16
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Main Links */}
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8, paddingLeft: 4 }}>
                  MAIN NAVIGATION
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                  {mainLinks.map(link => {
                    const Icon = link.icon;
                    return (
                      <button
                        key={link.id}
                        onClick={() => { navTo(link.id); setMobileOpen(false); }}
                        style={{
                          padding: '10px 12px', borderRadius: 10, border: 'none',
                          background: activePage === link.id ? 'var(--primary-light)' : 'var(--slate-50)',
                          color: activePage === link.id ? 'var(--primary)' : 'var(--slate-800)',
                          fontWeight: 700, fontSize: 13, textAlign: 'left', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', gap: 8
                        }}
                      >
                        <Icon size={15} style={{ color: activePage === link.id ? 'var(--primary)' : 'var(--slate-500)' }} />
                        <span>{link.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Portal Sections */}
              {portalSections.map((sec, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8, paddingLeft: 4 }}>
                    {sec.title}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {sec.items.map(item => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => { navTo(item.id); setMobileOpen(false); }}
                          style={{
                            padding: '8px 12px', borderRadius: 8, border: 'none',
                            background: activePage === item.id ? 'var(--slate-100)' : 'none',
                            color: activePage === item.id ? 'var(--primary)' : 'var(--slate-700)',
                            fontWeight: activePage === item.id ? 800 : 600, fontSize: 13,
                            textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10
                          }}
                        >
                          <div style={{ width: 26, height: 26, borderRadius: 6, background: 'var(--slate-100)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Icon size={14} />
                          </div>
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* CTA Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 12, borderTop: '1px solid var(--slate-100)' }}>
                <button 
                  className="btn btn-outline" 
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => { navTo('school-registration'); setMobileOpen(false); }}
                >
                  Register School
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};