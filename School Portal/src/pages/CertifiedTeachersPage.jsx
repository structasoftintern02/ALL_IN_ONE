import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Star, Calendar, CheckCircle2, Search } from 'lucide-react';
import { certifiedTeachers } from '../data/schoolPortalData';
import { useApp } from '../context/AppContext';

export const CertifiedTeachersPage = () => {
  const { openModal } = useApp();
  const [search, setSearch] = useState('');

  const filtered = certifiedTeachers.filter(t => {
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.role.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">EMPANELED FACULTY</span>
          <h2 className="section-title">Certified Skill Teachers Directory</h2>
          <p className="section-subtitle">Trained & accredited observers conducting on-campus diagnostic play sessions.</p>
        </div>

        {/* Search */}
        <div style={{ maxWidth: 440, margin: '0 auto 40px', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: 16, top: 14, color: 'var(--slate-400)' }} />
          <input
            type="text"
            placeholder="Search teachers by name or specialization..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="form-input"
            style={{ paddingLeft: 44 }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {filtered.map(t => (
            <motion.div key={t.id} className="glass-card" style={{ padding: 24 }} whileHover={{ y: -4 }}>
              <img src={t.photo} alt={t.name} style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 14, marginBottom: 16 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: 'var(--slate-900)' }}>{t.name}</h3>
                  <div style={{ fontSize: 12, color: 'var(--primary)', fontWeight: 700 }}>{t.role}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(245,158,11,0.1)', padding: '2px 8px', borderRadius: 999, fontSize: 12, fontWeight: 800, color: 'var(--amber)' }}>
                  <Star size={12} style={{ fill: 'var(--amber)' }} /> {t.rating}
                </div>
              </div>

              <div style={{ fontSize: 12, color: 'var(--slate-500)', marginBottom: 12 }}>
                <b>Experience:</b> {t.experience} • <b>Assigned:</b> {t.assignedSchool}
              </div>

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: 6 }}>Certifications</div>
                {t.certifications.map((c, i) => (
                  <div key={i} style={{ fontSize: 11, color: 'var(--slate-700)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <CheckCircle2 size={12} style={{ color: 'var(--accent-green)' }} /> {c}
                  </div>
                ))}
              </div>

              <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => openModal('VIEW_TEACHER', t)}>
                View Faculty Profile
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
