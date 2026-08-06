import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Clock, FileBarChart, FilePieChart, Plus } from 'lucide-react';
import { useApp } from '../context/AppContext';

const reportTypes = [
  { title: 'Monthly Enrollment Report', desc: 'Child enrollments across all age groups and programs', icon: FileBarChart, color: 'var(--primary)', lastGenerated: '01 Aug 2026', format: 'PDF' },
  { title: 'Assessment Analytics Report', desc: 'Category-wise assessment completion and performance stats', icon: FilePieChart, color: 'var(--purple)', lastGenerated: '01 Aug 2026', format: 'Excel' },
  { title: 'Revenue & Subscription Report', desc: 'Monthly revenue breakdown by subscription plans', icon: FileText, color: 'var(--emerald)', lastGenerated: '31 Jul 2026', format: 'PDF' },
  { title: 'Teacher Performance Report', desc: 'Certified teacher metrics, ratings, and session data', icon: FileBarChart, color: 'var(--amber)', lastGenerated: '28 Jul 2026', format: 'Excel' },
  { title: 'School Partnership Report', desc: 'Accredited school enrollments and infrastructure scores', icon: FilePieChart, color: 'var(--blue)', lastGenerated: '25 Jul 2026', format: 'PDF' },
  { title: 'Parent Engagement Report', desc: 'Parent activity, feedback, and subscription retention', icon: FileText, color: 'var(--pink)', lastGenerated: '20 Jul 2026', format: 'Excel' }
];

export const ReportsPage = () => {
  const { scheduledReportsList, openModal, downloadReport } = useApp();

  return (
    <div>
      <div className="page-title">
        <h1>Reports & Export</h1>
        <p>Generate, schedule, and download platform reports in PDF and Excel formats</p>
      </div>

      {/* Report Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16, marginBottom: 24 }}>
        {reportTypes.map((report, i) => {
          const Icon = report.icon;
          return (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="card-body">
                <div style={{ display: 'flex', gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${report.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: report.color, flexShrink: 0 }}>
                    <Icon size={22} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--slate-900)', marginBottom: 4 }}>{report.title}</h4>
                    <p style={{ fontSize: 12, color: 'var(--slate-500)', lineHeight: 1.4 }}>{report.desc}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid var(--slate-100)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 11, color: 'var(--slate-400)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Calendar size={11} /> {report.lastGenerated}
                    </span>
                    <span className="badge" style={{ background: 'var(--slate-100)', color: 'var(--slate-600)' }}>{report.format}</span>
                  </div>
                  <button className="btn btn-primary btn-sm" onClick={() => downloadReport(report.title, report.format)}>
                    <Download size={13} /> Download
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Scheduled Reports */}
      <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <div className="card-header">
          <h3><Clock size={18} style={{ color: 'var(--primary)' }} /> Scheduled Reports</h3>
          <button className="btn btn-outline btn-sm" onClick={() => openModal('ADD_SCHEDULE')}>
            <Plus size={14} /> Add Schedule
          </button>
        </div>
        <div className="card-body no-padding">
          <table className="data-table">
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Frequency</th>
                <th>Recipients</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {scheduledReportsList.map((sr, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 700, color: 'var(--slate-900)' }}>{sr.name}</td>
                  <td style={{ fontSize: 12 }}>{sr.frequency}</td>
                  <td style={{ fontSize: 12, color: 'var(--slate-500)' }}>{sr.recipients}</td>
                  <td><span className={`badge ${sr.status.toLowerCase()}`}>{sr.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};
