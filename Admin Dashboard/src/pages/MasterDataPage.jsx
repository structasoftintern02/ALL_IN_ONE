import React from 'react';
import { motion } from 'framer-motion';
import { Database, Plus } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ageGroups = [
  { range: '3–5 Years', label: 'Early Observation & Play', programs: 2, skills: 15, color: '#EC4899' },
  { range: '5–7 Years', label: 'Cognitive & Creative Talent', programs: 2, skills: 14, color: '#F59E0B' },
  { range: '7–10 Years', label: 'Advanced Talent Mapping', programs: 2, skills: 19, color: '#10B981' }
];

export const MasterDataPage = () => {
  const { categoriesList, openModal, showToast } = useApp();

  return (
    <div>
      <div className="page-title">
        <h1>Skill & Age Group Masters</h1>
        <p>Configure milestone frameworks, skill categories, and age-group parameters</p>
      </div>

      {/* Age Group Masters */}
      <motion.div className="card" style={{ marginBottom: 20 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-header">
          <h3><Database size={18} style={{ color: 'var(--primary)' }} /> Age Group Configuration</h3>
          <button className="btn btn-primary btn-sm" onClick={() => openModal('EDIT_SETTING', { title: 'New Age Group', currentValue: '10–12 Years' })}>
            <Plus size={14} /> Add Age Group
          </button>
        </div>
        <div className="card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {ageGroups.map((ag, i) => (
              <motion.div
                key={i}
                style={{
                  padding: 20, borderRadius: 14, border: `1px solid ${ag.color}25`,
                  background: `${ag.color}06`, transition: 'all 0.3s'
                }}
                whileHover={{ y: -4, boxShadow: `0 8px 24px ${ag.color}15` }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--slate-900)' }}>{ag.range}</div>
                  <div style={{ width: 8, height: 8, borderRadius: 4, background: ag.color }} />
                </div>
                <div style={{ fontSize: 12, color: 'var(--slate-500)', fontWeight: 600, marginBottom: 16 }}>{ag.label}</div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div style={{ padding: '8px 14px', borderRadius: 8, background: 'white', flex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: ag.color }}>{ag.programs}</div>
                    <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 600 }}>Programs</div>
                  </div>
                  <div style={{ padding: '8px 14px', borderRadius: 8, background: 'white', flex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: ag.color }}>{ag.skills}</div>
                    <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 600 }}>Skills</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Skill Categories */}
      <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <div className="card-header">
          <h3>Skill Categories ({categoriesList.length})</h3>
          <button className="btn btn-outline btn-sm" onClick={() => openModal('ADD_CATEGORY')}>
            <Plus size={14} /> Add Category
          </button>
        </div>
        <div className="card-body no-padding">
          <table className="data-table">
            <thead>
              <tr>
                <th>Icon</th>
                <th>Category Name</th>
                <th>Programs Count</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categoriesList.map((cat) => (
                <tr key={cat.id}>
                  <td>
                    <span style={{ fontSize: 22 }}>{cat.icon}</span>
                  </td>
                  <td style={{ fontWeight: 700, color: 'var(--slate-900)' }}>{cat.name}</td>
                  <td>
                    <span className="badge" style={{ background: 'rgba(79,70,229,0.1)', color: 'var(--primary)' }}>{cat.count}</span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button 
                      className="btn btn-outline btn-sm"
                      onClick={() => openModal('EDIT_SETTING', { title: `Skill Category (${cat.name})`, currentValue: cat.name })}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};
