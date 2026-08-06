import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Award, ArrowRight, Play, FileText, Target } from 'lucide-react';
import { assessmentProcessSteps } from '../data/schoolPortalData';
import { useApp } from '../context/AppContext';

export const AssessmentProcessPage = () => {
  const { navTo } = useApp();

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">SCIENTIFIC METHODOLOGY</span>
          <h2 className="section-title">The 5-Stage Diagnostic Assessment Workflow</h2>
          <p className="section-subtitle">How observational evaluations convert early play activities into objective talent data.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 860, margin: '0 auto 60px' }}>
          {assessmentProcessSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className="glass-card"
              style={{ padding: 28, display: 'flex', gap: 20, alignItems: 'flex-start' }}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14, background: 'var(--primary)',
                color: 'white', fontWeight: 900, fontSize: 18, display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                {step.step}
              </div>
              <div>
                <div style={{ fontSize: 24, marginBottom: 4 }}>{step.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: 'var(--slate-900)', marginBottom: 6 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--slate-600)', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-primary btn-lg" onClick={() => navTo('school-registration')}>
            Register School for Baseline Assessment <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
