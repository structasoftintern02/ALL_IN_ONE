import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Search, Check, X, Star, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TeacherVerifyPage = () => {
  const { teachers, approveTeacher, rejectTeacher, approvedTeachersCount, openModal } = useApp();
  const [expandedId, setExpandedId] = useState(null);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const pendingCount = teachers.length;

  const filtered = teachers.filter(t => {
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.specialization.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <div className="page-title">
        <h1>Teacher Verification Queue</h1>
        <p>Audit pedagogical credentials and certifications before platform onboarding</p>
      </div>

      {/* Summary Stats */}
      <div className="summary-stats">
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--primary)' }}>{teachers.length + approvedTeachersCount}</div>
          <div className="ss-label">Total Submissions</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--amber)' }}>{pendingCount}</div>
          <div className="ss-label">Pending Review</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--emerald)' }}>{approvedTeachersCount}</div>
          <div className="ss-label">Approved & Certified</div>
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
            <input 
              type="text" 
              placeholder="Search teachers..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Pending</button>
        </div>
        <div style={{ fontSize: 12, color: 'var(--slate-500)', fontWeight: 600 }}>
          Showing {filtered.length} pending teachers
        </div>
      </div>

      {/* Teacher Cards / Table */}
      <div className="card">
        <div className="card-body no-padding" style={{ overflowX: 'auto' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: 40, textAlign: 'center', color: 'var(--slate-500)' }}>
              <ShieldCheck size={32} style={{ color: 'var(--emerald)', marginBottom: 8 }} />
              <div style={{ fontWeight: 700 }}>All Teacher Submissions Reviewed!</div>
              <div style={{ fontSize: 12 }}>There are no pending teacher applications requiring audit right now.</div>
            </div>
          ) : (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Teacher</th>
                  <th>Specialization</th>
                  <th>Experience</th>
                  <th>Rating</th>
                  <th>Submitted</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((teacher) => (
                  <React.Fragment key={teacher.id}>
                    <tr 
                      onClick={() => setExpandedId(expandedId === teacher.id ? null : teacher.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <td>
                        <div className="table-name">
                          <div className="table-avatar" style={{ background: 'linear-gradient(135deg, var(--purple), var(--pink))' }}>
                            {teacher.avatar}
                          </div>
                          <div>
                            <div className="table-name-text">{teacher.name}</div>
                            <div className="table-sub">{teacher.id}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge premium">{teacher.specialization}</span>
                      </td>
                      <td style={{ fontWeight: 700 }}>{teacher.experience}</td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <Star size={13} style={{ color: 'var(--amber)', fill: 'var(--amber)' }} />
                          <span style={{ fontWeight: 700, fontSize: 13 }}>{teacher.rating}</span>
                        </div>
                      </td>
                      <td style={{ fontSize: 12, color: 'var(--slate-500)' }}>{teacher.date}</td>
                      <td><span className="badge pending">Pending Review</span></td>
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                          <button className="btn btn-outline btn-sm" onClick={(e) => { e.stopPropagation(); openModal('VIEW_TEACHER', teacher); }}>
                            <Eye size={13} /> Details
                          </button>
                          <button className="btn btn-success btn-sm" onClick={(e) => { e.stopPropagation(); approveTeacher(teacher.id); }}>
                            <Check size={14} /> Approve
                          </button>
                          <button className="btn btn-danger btn-sm" onClick={(e) => { e.stopPropagation(); rejectTeacher(teacher.id); }}>
                            <X size={14} /> Reject
                          </button>
                          {expandedId === teacher.id ? <ChevronUp size={16} style={{ color: 'var(--slate-400)', marginTop: 4 }} /> : <ChevronDown size={16} style={{ color: 'var(--slate-400)', marginTop: 4 }} />}
                        </div>
                      </td>
                    </tr>
                    {/* Expanded Row */}
                    <AnimatePresence>
                      {expandedId === teacher.id && (
                        <tr>
                          <td colSpan="7" style={{ padding: 0 }}>
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              style={{ overflow: 'hidden', background: 'var(--slate-50)', padding: '16px 20px' }}
                            >
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                                <div>
                                  <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', textTransform: 'uppercase', marginBottom: 4 }}>Certificate</div>
                                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--slate-800)' }}>{teacher.cert}</div>
                                </div>
                                <div>
                                  <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', textTransform: 'uppercase', marginBottom: 4 }}>Experience</div>
                                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--slate-800)' }}>{teacher.experience} of teaching</div>
                                </div>
                                <div>
                                  <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', textTransform: 'uppercase', marginBottom: 4 }}>Application ID</div>
                                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--slate-800)' }}>{teacher.id}</div>
                                </div>
                              </div>
                            </motion.div>
                          </td>
                        </tr>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
