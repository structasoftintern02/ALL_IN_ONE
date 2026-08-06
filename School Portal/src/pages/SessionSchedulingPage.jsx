import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Plus, Check } from 'lucide-react';
import { calendarSessions } from '../data/schoolPortalData';
import { useApp } from '../context/AppContext';

export const SessionSchedulingPage = () => {
  const { openModal } = useApp();

  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="section-tag">SESSION MANAGEMENT</span>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--slate-900)' }}>Diagnostic Session Scheduling</h1>
            <p style={{ fontSize: 14, color: 'var(--slate-600)' }}>Schedule and assign certified skill observers to upcoming sessions</p>
          </div>
          <button className="btn btn-primary" onClick={() => openModal('SCHEDULE_SESSION')}>
            <Plus size={16} /> Schedule Session
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {calendarSessions.filter(s => s.type !== 'Holiday').map(ses => (
            <motion.div key={ses.id} className="glass-card" style={{ padding: 24 }} whileHover={{ y: -4 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <span className="badge badge-blue">{ses.ageGroup}</span>
                <span className="badge badge-green">{ses.type}</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 8 }}>{ses.title}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: 'var(--slate-600)', marginBottom: 16 }}>
                <div><Calendar size={13} style={{ display: 'inline', marginRight: 6, color: 'var(--primary)' }} /> {ses.date}</div>
                <div><Clock size={13} style={{ display: 'inline', marginRight: 6, color: 'var(--primary)' }} /> {ses.time}</div>
                <div><MapPin size={13} style={{ display: 'inline', marginRight: 6, color: 'var(--primary)' }} /> {ses.room}</div>
                <div><User size={13} style={{ display: 'inline', marginRight: 6, color: 'var(--accent-green)' }} /> Observer: <b>{ses.teacher}</b></div>
              </div>

              <button className="btn btn-outline btn-sm" style={{ width: '100%' }} onClick={() => openModal('SCHEDULE_SESSION', ses)}>
                Edit Session Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
