import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Search, Check, X, MapPin, Users, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SchoolVerifyPage = () => {
  const { schools, approveSchool, rejectSchool, accreditedSchoolsCount } = useApp();
  const [search, setSearch] = useState('');

  const filtered = schools.filter(s => {
    if (search && !s.name.toLowerCase().includes(search.toLowerCase()) && !s.city.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <div className="page-title">
        <h1>School Accreditation Queue</h1>
        <p>Audit school infrastructure, sensory playrooms, and safety compliance before platform accreditation</p>
      </div>

      {/* Summary Stats */}
      <div className="summary-stats">
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--blue)' }}>{schools.length + accreditedSchoolsCount}</div>
          <div className="ss-label">Total Schools</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--amber)' }}>{schools.length}</div>
          <div className="ss-label">Pending Audit</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--emerald)' }}>{accreditedSchoolsCount}</div>
          <div className="ss-label">Accredited</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--red)' }}>0</div>
          <div className="ss-label">Rejected</div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="toolbar">
        <div className="toolbar-left">
          <div className="search-input">
            <Search size={14} style={{ color: 'var(--slate-400)' }} />
            <input type="text" placeholder="Search schools by name or city..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
        <span style={{ fontSize: 12, color: 'var(--slate-500)', fontWeight: 600 }}>
          {filtered.length} pending schools
        </span>
      </div>

      {/* School Cards */}
      {filtered.length === 0 ? (
        <div className="card" style={{ padding: 40, textAlign: 'center', color: 'var(--slate-500)' }}>
          <Building2 size={32} style={{ color: 'var(--emerald)', marginBottom: 8 }} />
          <div style={{ fontWeight: 700 }}>All Partner Schools Audited!</div>
          <div style={{ fontSize: 12 }}>There are no pending school accreditation applications requiring review right now.</div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 16 }}>
          {filtered.map((school, i) => (
            <motion.div
              key={school.id}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 4 }}>{school.name}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--slate-500)' }}>
                      <MapPin size={12} /> {school.city}, {school.state}
                    </div>
                  </div>
                  <span className="badge pending">Pending</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 16 }}>
                  <div style={{ padding: 10, background: 'var(--slate-50)', borderRadius: 8 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', textTransform: 'uppercase' }}>Affiliation</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-800)', fontFamily: 'monospace', marginTop: 2 }}>{school.affiliation}</div>
                  </div>
                  <div style={{ padding: 10, background: 'var(--slate-50)', borderRadius: 8 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', textTransform: 'uppercase' }}>Type</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-800)', marginTop: 2 }}>{school.type}</div>
                  </div>
                  <div style={{ padding: 10, background: 'var(--slate-50)', borderRadius: 8 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', textTransform: 'uppercase' }}>Students</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-800)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Users size={12} /> {school.students.toLocaleString()}
                    </div>
                  </div>
                  <div style={{ padding: 10, background: 'var(--slate-50)', borderRadius: 8 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', textTransform: 'uppercase' }}>Infrastructure</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                      <div className="progress-bar" style={{ flex: 1, height: 6 }}>
                        <div className="progress-fill" style={{ width: `${school.infrastructure}%`, background: school.infrastructure >= 90 ? 'var(--emerald)' : school.infrastructure >= 80 ? 'var(--amber)' : 'var(--red)' }} />
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--slate-700)' }}>{school.infrastructure}%</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn btn-success btn-sm" style={{ flex: 1 }} onClick={() => approveSchool(school.id)}>
                    <Check size={14} /> Accredit School
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => rejectSchool(school.id)}>
                    <X size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
