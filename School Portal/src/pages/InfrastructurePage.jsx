import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { sampleSchools } from '../data/schoolPortalData';
import { useApp } from '../context/AppContext';

export const InfrastructurePage = () => {
  const { navTo } = useApp();
  const school = sampleSchools[0];

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">CAMPUS FACILITIES</span>
          <h2 className="section-title">Infrastructure Specifications for Diagnostic Sessions</h2>
          <p className="section-subtitle">Requirements and layout setup for conducting Early Child Skill Evaluations.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginBottom: 60 }}>
          <div className="glass-card" style={{ padding: 28 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🎨</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 8 }}>Sensory Activity Rooms</h3>
            <p style={{ fontSize: 14, color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: 16 }}>
              Equipped with soft floor mats, tactile sensory boards, motor obstacle paths, and acoustic sound dampeners.
            </p>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--primary)' }}>Specification: Min 400 sq.ft. carpet area</div>
          </div>

          <div className="glass-card" style={{ padding: 28 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🤖</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 8 }}>Junior STEM & Robotics Labs</h3>
            <p style={{ fontSize: 14, color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: 16 }}>
              Low-voltage circuit boards, modular micro-bot assembly tables, and block coding tablet terminals.
            </p>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent-green)' }}>Specification: Safe 12V DC power stations</div>
          </div>

          <div className="glass-card" style={{ padding: 28 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🎵</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 8 }}>Music & Audio Pitch Acoustic Studio</h3>
            <p style={{ fontSize: 14, color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: 16 }}>
              Audio frequency discrimination monitors, percussion rhythmic sets, and pitch perception testing setups.
            </p>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--purple)' }}>Specification: Acoustic NRC rating 0.75</div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-primary btn-lg" onClick={() => navTo('school-registration')}>
            Request Campus Infrastructure Audit
          </button>
        </div>
      </div>
    </div>
  );
};
