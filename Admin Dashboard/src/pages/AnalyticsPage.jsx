import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Baby, ClipboardCheck } from 'lucide-react';
import { assessmentCategories, ageGroupDistribution, revenueChartData } from '../data/adminData';

const maxEnrollments = Math.max(...revenueChartData.map(d => d.enrollments));

export const AnalyticsPage = () => {
  const totalCompleted = assessmentCategories.reduce((a, c) => a + c.completed, 0);
  const totalAssessments = assessmentCategories.reduce((a, c) => a + c.total, 0);
  const overallRate = Math.round((totalCompleted / totalAssessments) * 100);

  return (
    <div>
      <div className="page-title">
        <h1>Assessment Analytics</h1>
        <p>Detailed assessment performance, category breakdown, and trend analysis</p>
      </div>

      <div className="summary-stats">
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--primary)' }}>{totalAssessments.toLocaleString()}</div>
          <div className="ss-label">Total Assessments</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--emerald)' }}>{totalCompleted.toLocaleString()}</div>
          <div className="ss-label">Completed</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--amber)' }}>{overallRate}%</div>
          <div className="ss-label">Completion Rate</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--purple)' }}>6</div>
          <div className="ss-label">Categories</div>
        </div>
      </div>

      {/* Enrollment Trend Chart */}
      <motion.div className="card" style={{ marginBottom: 20 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-header">
          <h3><TrendingUp size={18} style={{ color: 'var(--primary)' }} /> Monthly Enrollment Trend</h3>
          <span className="header-badge">2026</span>
        </div>
        <div className="card-body">
          <div className="bar-chart" style={{ paddingBottom: 28, height: 220 }}>
            {revenueChartData.map((d, i) => (
              <div
                key={i}
                className="bar"
                style={{ 
                  height: `${(d.enrollments / maxEnrollments) * 100}%`,
                  background: 'linear-gradient(180deg, var(--emerald), #34D399)'
                }}
              >
                <span className="bar-value">{d.enrollments.toLocaleString()}</span>
                <span className="bar-label">{d.month}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Category Breakdown */}
      <div className="dashboard-grid grid-1-1" style={{ marginBottom: 20 }}>
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="card-header">
            <h3><ClipboardCheck size={18} style={{ color: 'var(--purple)' }} /> Category Performance</h3>
          </div>
          <div className="card-body">
            {assessmentCategories.map((cat, i) => (
              <div key={i} style={{ marginBottom: i < assessmentCategories.length - 1 ? 18 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: `${cat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                      {cat.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-900)' }}>{cat.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--slate-500)' }}>{cat.completed.toLocaleString()} / {cat.total.toLocaleString()} assessments</div>
                    </div>
                  </div>
                  <span style={{ fontSize: 16, fontWeight: 800, color: cat.color }}>{cat.percentage}%</span>
                </div>
                <div className="progress-bar" style={{ height: 10 }}>
                  <motion.div 
                    className="progress-fill" 
                    style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${cat.percentage}%` }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="card-header">
            <h3><Baby size={18} style={{ color: 'var(--pink)' }} /> Age Group Analysis</h3>
          </div>
          <div className="card-body">
            {ageGroupDistribution.map((group, i) => (
              <motion.div 
                key={i}
                style={{ 
                  padding: 20, marginBottom: i < ageGroupDistribution.length - 1 ? 12 : 0,
                  background: `${group.color}08`, borderRadius: 14, border: `1px solid ${group.color}20`
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--slate-900)' }}>{group.group}</div>
                    <div style={{ fontSize: 12, color: 'var(--slate-500)', fontWeight: 600 }}>{group.label}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: group.color }}>{group.count.toLocaleString()}</div>
                    <div style={{ fontSize: 11, color: 'var(--slate-500)' }}>{group.percentage}% of total</div>
                  </div>
                </div>
                <div className="progress-bar" style={{ height: 8 }}>
                  <motion.div 
                    className="progress-fill"
                    style={{ background: group.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${group.percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
