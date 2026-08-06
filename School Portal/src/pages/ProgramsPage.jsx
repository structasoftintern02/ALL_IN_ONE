import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Clock, Target, ArrowRight } from 'lucide-react';
import { ageGroupPrograms } from '../data/schoolPortalData';
import { useApp } from '../context/AppContext';

export const ProgramsPage = () => {
  const { navTo, openModal } = useApp();

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">COMPREHENSIVE PROGRAM CATALOG</span>
          <h2 className="section-title">Early Child Skill Identification Programs</h2>
          <p className="section-subtitle">Structured 1-hour sessions conducting play-based diagnostics across 3 core age bands.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginBottom: 60 }}>
          {ageGroupPrograms.map((prog, index) => (
            <motion.div
              key={prog.id}
              className="glass-card"
              style={{ padding: 32, display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 32, alignItems: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span className="badge badge-blue">{prog.ageGroup}</span>
                  <span className="badge badge-amber">{prog.badge}</span>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: 'var(--slate-900)', marginBottom: 8 }}>{prog.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: 20 }}>{prog.description}</p>
                
                <div style={{ padding: 14, background: 'var(--slate-50)', borderRadius: 12, marginBottom: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: 4 }}>PROGRAM SPECIFICATIONS</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-800)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Clock size={14} style={{ color: 'var(--primary)' }} /> {prog.duration}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  <button className="btn btn-primary" onClick={() => openModal('ENROLL_STUDENT')}>
                    Enroll School Class
                  </button>
                  <button className="btn btn-outline" onClick={() => navTo('age-programs')}>
                    Full Syllabus
                  </button>
                </div>
              </div>

              <div style={{ padding: 24, background: 'var(--slate-50)', borderRadius: 16, border: '1px solid var(--slate-200)' }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--slate-500)', textTransform: 'uppercase', marginBottom: 12 }}>
                  Targeted Skills Assessed ({prog.targetedSkillsCount})
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                  {prog.skills.map((sk, idx) => (
                    <span key={idx} style={{ padding: '6px 12px', borderRadius: 8, background: 'white', border: '1px solid var(--slate-200)', fontSize: 12, fontWeight: 700, color: 'var(--slate-800)' }}>
                      ✨ {sk}
                    </span>
                  ))}
                </div>

                <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--slate-500)', textTransform: 'uppercase', marginBottom: 8 }}>
                  Key Program Outcomes
                </div>
                <p style={{ fontSize: 13, color: 'var(--slate-700)', lineHeight: 1.5 }}>
                  {prog.outcomes}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
