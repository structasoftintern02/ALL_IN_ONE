import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Clock, Award, ArrowRight } from 'lucide-react';
import { ageGroupPrograms } from '../data/schoolPortalData';
import { useApp } from '../context/AppContext';

export const AgeWiseProgramsPage = () => {
  const { navTo, openModal } = useApp();
  const [selectedAge, setSelectedAge] = useState('all');

  const filtered = selectedAge === 'all' ? ageGroupPrograms : ageGroupPrograms.filter(p => p.ageGroup.includes(selectedAge));

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">AGE-WISE SKILL CURRICULUM</span>
          <h2 className="section-title">Developmental Milestone Frameworks</h2>
          <p className="section-subtitle">Categorized diagnostic modules customized for 3-5 yrs, 5-7 yrs, and 7-10 yrs.</p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyCenter: 'center', justifyContent: 'center', gap: 10, marginBottom: 40 }}>
          <button className={`btn btn-sm ${selectedAge === 'all' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setSelectedAge('all')}>
            All Age Groups
          </button>
          <button className={`btn btn-sm ${selectedAge === '3 – 5' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setSelectedAge('3 – 5')}>
            3 – 5 Years (Observation)
          </button>
          <button className={`btn btn-sm ${selectedAge === '5 – 7' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setSelectedAge('5 – 7')}>
            5 – 7 Years (Cognitive)
          </button>
          <button className={`btn btn-sm ${selectedAge === '7 – 10' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setSelectedAge('7 – 10')}>
            7 – 10 Years (Advanced STEM)
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
          {filtered.map(prog => (
            <motion.div key={prog.id} className="glass-card" style={{ padding: 28 }} whileHover={{ y: -4 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <span className="badge badge-green">{prog.ageGroup}</span>
                <span style={{ fontSize: 24 }}>{prog.icon}</span>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 900, color: 'var(--slate-900)', marginBottom: 8 }}>{prog.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--slate-600)', marginBottom: 16, lineHeight: 1.5 }}>{prog.tagline}</p>
              
              <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10, fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 16 }}>
                ⏱️ {prog.duration}
              </div>

              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: 8 }}>Included Diagnostic Activities</div>
                {prog.activities.map((act, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--slate-700)', marginBottom: 4 }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--accent-green)' }} /> {act}
                  </div>
                ))}
              </div>

              <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => openModal('ENROLL_STUDENT')}>
                Enroll Students in Program
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
