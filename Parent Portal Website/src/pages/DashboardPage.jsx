import React from 'react';
import { motion } from 'framer-motion';
import {
  Baby, ClipboardCheck, BookOpen, School, TrendingUp, Calendar, Bell,
  ArrowRight, Plus, Sparkles, Trophy, Clock, MapPin, BarChart3
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay: i * 0.06 }
});

export const DashboardPage = () => {
  const { user } = useAuth();
  const { children, programs, sessions, notifications, setActivePage } = useApp();

  const quickActions = [
    { icon: Plus, label: 'Add Child', page: 'add-child', color: 'linear-gradient(135deg, #0D9488, #10B981)', iconColor: '#2DD4BF' },
    { icon: ClipboardCheck, label: 'Start Assessment', page: 'start-assessment', color: 'linear-gradient(135deg, #7C3AED, #6366F1)', iconColor: '#A78BFA' },
    { icon: BookOpen, label: 'Browse Programs', page: 'browse-programs', color: 'linear-gradient(135deg, #E11D48, #F43F5E)', iconColor: '#FB7185' },
    { icon: BarChart3, label: 'View Reports', page: 'skill-reports', color: 'linear-gradient(135deg, #D97706, #F59E0B)', iconColor: '#FCD34D' },
  ];

  const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
      
      {/* 1. Welcome Hero Banner */}
      <motion.div
        {...fadeUp(0)}
        className="responsive-hero-padding"
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 45%, #0D3B66 100%)',
          padding: '32px 36px',
          color: '#FFFFFF',
          border: '1.5px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.35)'
        }}
      >
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '999px',
            background: 'rgba(13, 148, 136, 0.2)',
            color: '#2DD4BF',
            border: '1px solid rgba(45, 212, 191, 0.3)',
            fontSize: '12px',
            fontWeight: 800,
            marginBottom: '14px'
          }}>
            <Sparkles style={{ width: '14px', height: '14px' }} />
            <span>PARENT DASHBOARD</span>
          </div>

          <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.2 }}>
            Welcome back, <span style={{ color: '#2DD4BF' }}>{user?.name?.split(' ')[0] || 'Parent'}</span>! 👋
          </h1>
          <p style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 500, marginTop: '6px', margin: 0 }}>
            {today}
          </p>

          {/* Stat Box Cards inside Hero */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '20px' }}>
            <div style={{ padding: '10px 20px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center', flex: '1 1 100px' }}>
              <div style={{ fontSize: '22px', fontWeight: 900, color: '#2DD4BF' }}>{children.length}</div>
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>Children</div>
            </div>

            <div style={{ padding: '10px 20px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center', flex: '1 1 110px' }}>
              <div style={{ fontSize: '22px', fontWeight: 900, color: '#C084FC' }}>{programs.length}</div>
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>Active Programs</div>
            </div>

            <div style={{ padding: '10px 20px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center', flex: '1 1 120px' }}>
              <div style={{ fontSize: '22px', fontWeight: 900, color: '#FBBF24' }}>{sessions.length}</div>
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>Upcoming Sessions</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Quick Actions */}
      <motion.div {...fadeUp(1)}>
        <h2 style={{ fontSize: '13px', fontWeight: 900, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
          Quick Actions
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActivePage(action.page)}
                className="dash-card"
                style={{
                  padding: '22px 20px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: action.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 6px 16px rgba(0,0,0,0.12)'
                }}>
                  <Icon style={{ width: '22px', height: '22px', color: '#FFFFFF' }} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 900, color: '#0F172A' }}>{action.label}</div>
                  <div style={{ fontSize: 12, color: '#64748B', marginTop: 2, fontWeight: 600 }}>Click to open →</div>
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* 3. My Children & Upcoming Sessions Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '24px' }}>
        
        {/* My Children Summary Card */}
        <motion.div {...fadeUp(2)} className="dash-card" style={{ overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1.5px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 900, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '10px', margin: 0 }}>
              <Baby style={{ width: '20px', height: '20px', color: '#0D9488' }} />
              <span>My Children</span>
            </h3>
            <button
              type="button"
              onClick={() => setActivePage('child-profiles')}
              style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: 800, color: '#0D9488', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <span>View All</span>
              <ArrowRight style={{ width: '14px', height: '14px' }} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {children.map((child, idx) => (
              <div
                key={child.id}
                onClick={() => setActivePage('child-profiles')}
                style={{
                  padding: '18px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: idx === children.length - 1 ? 'none' : '1px solid #F1F5F9',
                  cursor: 'pointer',
                  transition: 'background 0.15s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #EC4899, #8B5CF6, #F59E0B)',
                    color: '#FFFFFF',
                    fontSize: '15px',
                    fontWeight: 900,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {child.avatar}
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 900, color: '#0F172A' }}>{child.name}</div>
                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>{child.age} • {child.gender}</div>
                  </div>
                </div>

                <div>
                  {child.assessmentStatus === 'completed' ? (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '999px', background: 'rgba(245, 158, 11, 0.12)', color: '#D97706', border: '1px solid rgba(245, 158, 11, 0.25)', fontSize: '12px', fontWeight: 800 }}>
                      <Trophy style={{ width: '14px', height: '14px' }} />
                      <span>{child.overallScore}/100 Score</span>
                    </div>
                  ) : (
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#EA580C', background: '#FFEDD5', padding: '5px 10px', borderRadius: '8px' }}>
                      Assessment Pending
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Sessions Card */}
        <motion.div {...fadeUp(3)} className="dash-card" style={{ overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1.5px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 900, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '10px', margin: 0 }}>
              <Calendar style={{ width: '20px', height: '20px', color: '#7C3AED' }} />
              <span>Upcoming Sessions</span>
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {sessions.slice(0, 4).map((session, idx) => (
              <div
                key={session.id}
                style={{
                  padding: '16px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: idx === sessions.slice(0, 4).length - 1 ? 'none' : '1px solid #F1F5F9'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: '#F3E8FF',
                    color: '#7C3AED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Clock style={{ width: '18px', height: '18px' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 900, color: '#0F172A' }}>{session.programName}</div>
                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
                      {session.childName} • {new Date(session.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} at {session.time}
                    </div>
                  </div>
                </div>

                <span style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '8px',
                  background: session.type === 'In-Person' ? '#EFF6FF' : '#ECFDF5',
                  color: session.type === 'In-Person' ? '#2563EB' : '#059669',
                  border: session.type === 'In-Person' ? '1px solid #BFDBFE' : '1px solid #A7F3D0'
                }}>
                  {session.type}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* 4. Active Enrolled Programs */}
      <motion.div {...fadeUp(4)}>
        <h2 style={{ fontSize: '13px', fontWeight: 900, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
          Active Enrolled Programs
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '18px' }}>
          {programs.map((prog) => {
            const child = children.find(c => c.id === prog.childId);
            return (
              <div key={prog.id} className="dash-card" style={{ padding: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 900, color: '#0F172A', lineHeight: 1.3 }}>{prog.name}</div>
                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin style={{ width: '14px', height: '14px', color: '#0D9488' }} />
                      <span>{prog.school}</span>
                    </div>
                  </div>
                  {child && (
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #EC4899, #8B5CF6)',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 900,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {child.avatar}
                    </div>
                  )}
                </div>

                {/* Progress Meter Bar */}
                <div style={{ marginTop: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', marginBottom: '6px' }}>
                    <span style={{ color: '#64748B', fontWeight: 700 }}>{prog.sessionsCompleted}/{prog.totalSessions} sessions</span>
                    <span style={{ color: '#0D9488', fontWeight: 900 }}>{prog.progress}%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '999px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${prog.progress}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      style={{ height: '100%', background: 'linear-gradient(90deg, #0D9488, #10B981)', borderRadius: '999px' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* 5. Recent Notifications */}
      <motion.div {...fadeUp(5)} className="dash-card" style={{ overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1.5px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '17px', fontWeight: 900, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '10px', margin: 0 }}>
            <Bell style={{ width: '20px', height: '20px', color: '#E11D48' }} />
            <span>Recent Notifications</span>
          </h3>
          <button
            type="button"
            onClick={() => setActivePage('notifications')}
            style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: 800, color: '#0D9488', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>View All</span>
            <ArrowRight style={{ width: '14px', height: '14px' }} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {notifications.slice(0, 3).map((notif, idx) => (
            <div
              key={notif.id}
              style={{
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                borderBottom: idx === notifications.slice(0, 3).length - 1 ? 'none' : '1px solid #F1F5F9',
                background: !notif.read ? 'rgba(13, 148, 136, 0.04)' : 'transparent'
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: !notif.read ? '#0D9488' : '#CBD5E1', marginTop: '6px', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 900, color: '#0F172A' }}>{notif.title}</div>
                <div style={{ fontSize: '13px', color: '#64748B', fontWeight: 500, marginTop: '2px' }}>{notif.message}</div>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', flexShrink: 0 }}>{notif.time}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};
