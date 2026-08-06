import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Plus, User } from 'lucide-react';
import { calendarSessions } from '../data/schoolPortalData';
import { useApp } from '../context/AppContext';

export const ProgramCalendarPage = () => {
  const { openModal } = useApp();

  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="section-tag">SCHOOL ERP CALENDAR</span>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--slate-900)' }}>Program & Diagnostic Calendar</h1>
            <p style={{ fontSize: 14, color: 'var(--slate-600)' }}>Manage monthly sessions, expert visits, and diagnostic milestones</p>
          </div>
          <button className="btn btn-primary" onClick={() => openModal('SCHEDULE_SESSION')}>
            <Plus size={16} /> Schedule New Session
          </button>
        </div>

        {/* Calendar Session List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          {calendarSessions.map((ses) => (
            <motion.div
              key={ses.id}
              className="glass-card"
              style={{ padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}
              whileHover={{ y: -2 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  padding: '12px 16px', background: ses.type === 'Holiday' ? 'rgba(244,63,94,0.1)' : 'var(--primary-light)',
                  borderRadius: 14, textAlign: 'center', minWidth: 90
                }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: ses.type === 'Holiday' ? 'var(--rose)' : 'var(--primary)', textTransform: 'uppercase' }}>
                    {ses.date.split(' ')[1]} {ses.date.split(' ')[2]}
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: ses.type === 'Holiday' ? 'var(--rose)' : 'var(--primary)' }}>
                    {ses.date.split(' ')[0]}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span className={`badge ${ses.type === 'Holiday' ? 'badge-amber' : ses.type === 'Expert Visit' ? 'badge-purple' : 'badge-blue'}`}>
                      {ses.type}
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-500)' }}>{ses.ageGroup}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--slate-900)' }}>{ses.title}</h3>
                  <div style={{ fontSize: 12, color: 'var(--slate-600)', display: 'flex', gap: 16, marginTop: 4 }}>
                    <span><Clock size={12} style={{ display: 'inline', marginRight: 4 }} /> {ses.time}</span>
                    <span><MapPin size={12} style={{ display: 'inline', marginRight: 4 }} /> {ses.room}</span>
                    {ses.teacher !== 'N/A' && <span><User size={12} style={{ display: 'inline', marginRight: 4 }} /> {ses.teacher}</span>}
                  </div>
                </div>
              </div>

              {ses.type !== 'Holiday' && (
                <button className="btn btn-outline btn-sm" onClick={() => openModal('SCHEDULE_SESSION', ses)}>
                  Manage Session
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
