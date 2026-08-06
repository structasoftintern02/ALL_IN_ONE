import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Heart, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutProgramPage = () => {
  const { navTo } = useApp();

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">ABOUT THE PROGRAM</span>
          <h2 className="section-title">Scientific Talent Identification Framework</h2>
          <p className="section-subtitle">Pioneering early diagnostic play-based evaluations for schools across India.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', marginBottom: 60 }}>
          <div>
            <h3 style={{ fontSize: 24, fontWeight: 900, color: 'var(--slate-900)', marginBottom: 16 }}>
              Why Early Childhood (Ages 3 to 10) Matters
            </h3>
            <p style={{ fontSize: 15, color: 'var(--slate-600)', lineHeight: 1.7, marginBottom: 16 }}>
              Neuroscience confirms that 90% of brain development occurs before age 6. Yet traditional education evaluates children primarily on rote memorization at later ages, missing the critical early window of natural talent identification.
            </p>
            <p style={{ fontSize: 15, color: 'var(--slate-600)', lineHeight: 1.7, marginBottom: 20 }}>
              Our Early Child Skill Identification Program bridges this gap by collaborating with empaneled schools, bringing certified therapists and standardized diagnostic play toolkits directly to classrooms.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Evaluates 6 core domains: Cognitive, Motor, Creative, STEM, Linguistic & Musical',
                'Standardized NEP 2020 Early Childhood Care & Education guidelines',
                'Generates certified 360-degree radar scorecards for parents and educators'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 600, color: 'var(--slate-800)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ padding: 20, borderRadius: 20 }}>
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
              alt="Child Play Diagnostic"
              style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 16 }}
            />
          </div>
        </div>

        {/* Core Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 60 }}>
          <div className="glass-card" style={{ padding: 28 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🎯</div>
            <h4 style={{ fontSize: 18, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 8 }}>Precision Diagnostics</h4>
            <p style={{ fontSize: 14, color: 'var(--slate-600)', lineHeight: 1.6 }}>Standardized observational metrics evaluating baseline motor sync, auditory pitch discrimination, and sequential logic.</p>
          </div>
          <div className="glass-card" style={{ padding: 28 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🎓</div>
            <h4 style={{ fontSize: 18, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 8 }}>Certified Observers</h4>
            <p style={{ fontSize: 14, color: 'var(--slate-600)', lineHeight: 1.6 }}>Pedagogical specialists certified by Trinity College, IIT STEM Pedagogy, and RCI licensed therapists.</p>
          </div>
          <div className="glass-card" style={{ padding: 28 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🏫</div>
            <h4 style={{ fontSize: 18, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 8 }}>Seamless ERP Integration</h4>
            <p style={{ fontSize: 14, color: 'var(--slate-600)', lineHeight: 1.6 }}>Easily schedule sessions, record attendance, and share progress cards directly through the School Portal.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-primary btn-lg" onClick={() => navTo('school-registration')}>
            Register School for Accreditation <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
