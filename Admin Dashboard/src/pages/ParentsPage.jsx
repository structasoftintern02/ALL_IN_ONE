import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Eye, Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ParentsPage = () => {
  const { parentsList, openModal, showToast } = useApp();
  const [search, setSearch] = useState('');
  const [subFilter, setSubFilter] = useState('all');

  const filtered = parentsList.filter(p => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.email.toLowerCase().includes(search.toLowerCase())) return false;
    if (subFilter !== 'all' && p.subscription.toLowerCase() !== subFilter) return false;
    return true;
  });

  return (
    <div>
      <div className="page-title">
        <h1>Parent Management</h1>
        <p>Manage parent accounts, subscriptions, and communication</p>
      </div>

      <div className="summary-stats">
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--primary)' }}>{(parentsList.length + 12830).toLocaleString()}</div>
          <div className="ss-label">Total Parents</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--emerald)' }}>11,420</div>
          <div className="ss-label">Active</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--purple)' }}>7,200</div>
          <div className="ss-label">Premium+</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--amber)' }}>₹2.4Cr</div>
          <div className="ss-label">Total Revenue</div>
        </div>
      </div>

      <div className="toolbar">
        <div className="toolbar-left">
          <div className="search-input">
            <Search size={14} style={{ color: 'var(--slate-400)' }} />
            <input type="text" placeholder="Search parents by name or email..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <button className={`filter-btn ${subFilter === 'all' ? 'active' : ''}`} onClick={() => setSubFilter('all')}>All Plans</button>
          <button className={`filter-btn ${subFilter === 'basic' ? 'active' : ''}`} onClick={() => setSubFilter('basic')}>Basic</button>
          <button className={`filter-btn ${subFilter === 'premium' ? 'active' : ''}`} onClick={() => setSubFilter('premium')}>Premium</button>
          <button className={`filter-btn ${subFilter === 'enterprise' ? 'active' : ''}`} onClick={() => setSubFilter('enterprise')}>Enterprise</button>
        </div>
      </div>

      <motion.div className="card" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body no-padding" style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Parent</th>
                <th>Contact</th>
                <th>Children</th>
                <th>Subscription</th>
                <th>Total Spent</th>
                <th>Joined</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((parent, i) => (
                <motion.tr
                  key={parent.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <td>
                    <div className="table-name">
                      <div className="table-avatar" style={{ background: 'linear-gradient(135deg, var(--blue), var(--primary))' }}>
                        {parent.avatar}
                      </div>
                      <div>
                        <div className="table-name-text">{parent.name}</div>
                        <div className="table-sub">{parent.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ fontSize: 12, color: 'var(--slate-700)' }}>{parent.email}</div>
                    <div style={{ fontSize: 11, color: 'var(--slate-500)' }}>{parent.phone}</div>
                  </td>
                  <td>
                    <span style={{ fontWeight: 800, fontSize: 16, color: 'var(--primary)' }}>{parent.children}</span>
                  </td>
                  <td>
                    <span className={`badge ${parent.subscription.toLowerCase()}`}>{parent.subscription}</span>
                  </td>
                  <td style={{ fontWeight: 700, color: 'var(--slate-900)' }}>{parent.totalSpent}</td>
                  <td style={{ fontSize: 12, color: 'var(--slate-500)' }}>{parent.joinDate}</td>
                  <td><span className={`badge ${parent.status.toLowerCase()}`}>{parent.status}</span></td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                      <button className="btn btn-outline btn-sm" onClick={() => openModal('VIEW_PARENT', parent)}>
                        <Eye size={13} />
                      </button>
                      <button className="btn btn-outline btn-sm" onClick={() => showToast(`Sent notification email to ${parent.email}`, 'info')}>
                        <Mail size={13} />
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
