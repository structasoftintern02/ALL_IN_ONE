import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { expertEducators } from '../data/schoolPortalData';
import { useApp } from '../context/AppContext';

export const ExpertTeachersPage = () => {
  const { navTo } = useApp();

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">EXPERT ADVISORY BOARD</span>
          <h2 className="section-title">Senior Educators & Child Psychologists</h2>
          <p className="section-subtitle">Distinguished Ph.D. psychologists, IIT STEM mentors, and pediatric observers.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24, marginBottom: 60 }}>
          {expertEducators.map(exp => (
            <motion.div key={exp.id} className="glass-card" style={{ padding: 28 }} whileHover={{ y: -4 }}>
              <img src={exp.photo} alt={exp.name} style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 16, marginBottom: 16 }} />
              <h3 style={{ fontSize: 20, fontWeight: 900, color: 'var(--slate-900)' }}>{exp.name}</h3>
              <div style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 700, marginBottom: 8 }}>{exp.specialization}</div>
              <p style={{ fontSize: 13, color: 'var(--slate-600)', marginBottom: 16 }}>{exp.qualification}</p>

              <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10, fontSize: 12 }}>
                <div style={{ fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase', fontSize: 10, marginBottom: 4 }}>Assigned Campus Consultations</div>
                <div style={{ color: 'var(--slate-800)', fontWeight: 700 }}>{exp.assignedSchools.join(' • ')}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-primary btn-lg" onClick={() => navTo('contact')}>
            Request Expert Campus Visit
          </button>
        </div>
      </div>
    </div>
  );
};
