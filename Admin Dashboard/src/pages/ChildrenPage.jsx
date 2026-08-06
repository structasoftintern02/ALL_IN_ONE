import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Baby, Search, Eye, FileText, Filter, Plus } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ChildrenPage = () => {
  const { childrenList, openModal, downloadReport } = useApp();
  const [search, setSearch] = useState('');
  const [ageFilter, setAgeFilter] = useState('all');

  const filtered = childrenList.filter(child => {
    if (search && !child.name.toLowerCase().includes(search.toLowerCase()) && !child.parent.toLowerCase().includes(search.toLowerCase())) return false;
    if (ageFilter !== 'all' && child.ageGroup !== ageFilter) return false;
    return true;
  });

  return (
    <div>
      <div className="page-title">
        <h1>Children Management</h1>
        <p>View and manage all enrolled children across age groups and programs</p>
      </div>

      <div className="summary-stats">
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--primary)' }}>{(childrenList.length + 28400).toLocaleString()}</div>
          <div className="ss-label">Total Children</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--pink)' }}>11,200</div>
          <div className="ss-label">3–5 Years</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--amber)' }}>9,850</div>
          <div className="ss-label">5–7 Years</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--emerald)' }}>7,400</div>
          <div className="ss-label">7–10 Years</div>
        </div>
      </div>

      <div className="toolbar">
        <div className="toolbar-left">
          <div className="search-input">
            <Search size={14} style={{ color: 'var(--slate-400)' }} />
            <input type="text" placeholder="Search children or parents..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <button className={`filter-btn ${ageFilter === 'all' ? 'active' : ''}`} onClick={() => setAgeFilter('all')}>All Ages</button>
          <button className={`filter-btn ${ageFilter === '3–5' ? 'active' : ''}`} onClick={() => setAgeFilter('3–5')}>3–5 yrs</button>
          <button className={`filter-btn ${ageFilter === '5–7' ? 'active' : ''}`} onClick={() => setAgeFilter('5–7')}>5–7 yrs</button>
          <button className={`filter-btn ${ageFilter === '7–10' ? 'active' : ''}`} onClick={() => setAgeFilter('7–10')}>7–10 yrs</button>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => openModal('ADD_CHILD')}>
          <Plus size={14} /> Enroll New Child
        </button>
      </div>

      <motion.div className="card" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body no-padding" style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Child</th>
                <th>Age</th>
                <th>Parent</th>
                <th>School</th>
                <th>Program</th>
                <th>Assessments</th>
                <th>Joined</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((child, i) => (
                <motion.tr
                  key={child.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <td>
                    <div className="table-name">
                      <div className="table-avatar" style={{ 
                        background: child.ageGroup === '3–5' ? 'linear-gradient(135deg, #EC4899, #F472B6)' : child.ageGroup === '5–7' ? 'linear-gradient(135deg, #F59E0B, #FBBF24)' : 'linear-gradient(135deg, #10B981, #34D399)'
                      }}>
                        {child.avatar || (child.name || child.childName || 'C').slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="table-name-text">{child.name || child.childName}</div>
                        <div className="table-sub">{child.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge" style={{ 
                      background: child.ageGroup === '3–5' ? 'rgba(236,72,153,0.1)' : child.ageGroup === '5–7' ? 'rgba(245,158,11,0.1)' : 'rgba(16,185,129,0.1)',
                      color: child.ageGroup === '3–5' ? 'var(--pink)' : child.ageGroup === '5–7' ? '#D97706' : 'var(--emerald)'
                    }}>
                      {child.age} yrs ({child.ageGroup || '5–7'})
                    </span>
                  </td>
                  <td style={{ fontSize: 12, fontWeight: 600 }}>{child.parent || child.parentName}</td>
                  <td style={{ fontSize: 12 }}>{child.school}</td>
                  <td style={{ fontSize: 12 }}>{child.program}</td>
                  <td>
                    <span style={{ fontWeight: 800, fontSize: 14, color: 'var(--primary)' }}>{child.assessments || 1}</span>
                  </td>
                  <td style={{ fontSize: 12, color: 'var(--slate-500)' }}>{child.joinDate || child.date || 'Aug 2026'}</td>
                  <td><span className={`badge ${(child.status || 'Active').toLowerCase()}`}>{child.status || 'Active'}</span></td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                      <button className="btn btn-outline btn-sm" onClick={() => openModal('VIEW_CHILD', child)}>
                        <Eye size={13} />
                      </button>
                      <button className="btn btn-outline btn-sm" onClick={() => downloadReport(`${child.name}_Diagnostic_Report`, 'PDF')}>
                        <FileText size={13} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};
