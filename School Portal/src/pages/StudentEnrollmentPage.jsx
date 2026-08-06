import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Plus, Download, FileText } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const StudentEnrollmentPage = () => {
  const { studentsList, openModal, showToast, navTo } = useApp();
  const [search, setSearch] = useState('');
  const [ageFilter, setAgeFilter] = useState('all');

  const filtered = studentsList.filter(s => {
    if (search && !s.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (ageFilter !== 'all' && !s.ageGroup.includes(ageFilter)) return false;
    return true;
  });

  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="section-tag">STUDENT ROSTER</span>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--slate-900)' }}>Student Enrollment Directory</h1>
            <p style={{ fontSize: 14, color: 'var(--slate-600)' }}>Track enrolled children, progress percentages, and assessment scores</p>
          </div>
          <button className="btn btn-primary" onClick={() => openModal('ENROLL_STUDENT')}>
            <Plus size={16} /> Enroll New Student
          </button>
        </div>

        {/* Toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', width: 240 }}>
              <Search size={16} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--slate-400)' }} />
              <input type="text" placeholder="Search student name..." value={search} onChange={e => setSearch(e.target.value)} className="form-input" style={{ paddingLeft: 36, padding: '8px 12px 8px 36px', fontSize: 13 }} />
            </div>
            <button className={`btn btn-sm ${ageFilter === 'all' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setAgeFilter('all')}>All Ages</button>
            <button className={`btn btn-sm ${ageFilter === '3–5' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setAgeFilter('3–5')}>3–5 Yrs</button>
            <button className={`btn btn-sm ${ageFilter === '5–7' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setAgeFilter('5–7')}>5–7 Yrs</button>
            <button className={`btn btn-sm ${ageFilter === '7–10' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setAgeFilter('7–10')}>7–10 Yrs</button>
          </div>

          <button className="btn btn-outline btn-sm" onClick={() => showToast('Exported Student Enrollment List (.CSV)', 'success')}>
            <Download size={14} /> Export CSV
          </button>
        </div>

        {/* Student Table */}
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Student ID & Name</th>
                <th>Age Group</th>
                <th>Program Enrolled</th>
                <th>Evaluation Progress</th>
                <th>Score Metric</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr key={s.id}>
                  <td>
                    <div style={{ fontWeight: 800, color: 'var(--slate-900)' }}>{s.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--slate-500)', fontFamily: 'monospace' }}>{s.id}</div>
                  </td>
                  <td><span className="badge badge-blue">{s.ageGroup}</span></td>
                  <td style={{ fontSize: 13 }}>{s.program}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div className="progress-bar-bg" style={{ flex: 1, width: 100 }}>
                        <div className="progress-bar-fill" style={{ width: `${s.progress}%` }} />
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 800 }}>{s.progress}%</span>
                    </div>
                  </td>
                  <td><span style={{ fontWeight: 800, color: 'var(--accent-green)' }}>{s.score}</span></td>
                  <td><span className={`badge ${s.status === 'Completed' ? 'badge-green' : 'badge-amber'}`}>{s.status}</span></td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="btn btn-outline btn-sm" onClick={() => navTo('progress-reports')}>
                      <FileText size={13} /> View Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
