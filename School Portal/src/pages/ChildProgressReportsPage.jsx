import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, Download, CheckCircle2, Star, Sparkles, Share2 } from 'lucide-react';
import { childProgressReportData } from '../data/schoolPortalData';
import { useApp } from '../context/AppContext';

export const ChildProgressReportsPage = () => {
  const { showToast } = useApp();
  const report = childProgressReportData;

  const downloadPDF = () => {
    const content = `=== CERTIFIED CHILD SKILL DIAGNOSTIC REPORT ===\nChild Name: ${report.childName}\nStudent ID: ${report.childId}\nAge Group: ${report.ageGroup}\nSchool: ${report.school}\nOverall Skill Quotient: ${report.overallScore}\nNational Percentile: ${report.percentile}\n\nSKILL SCORES:\n` +
      report.skillsRadar.map(s => `- ${s.category}: ${s.score}/100`).join('\n') +
      `\n\nRECOMMENDATIONS:\n` + report.recommendations.map(r => `* ${r}`).join('\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${report.childName.replace(/\s+/g, '_')}_Diagnostic_Scorecard.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast(`Downloaded Diagnostic Progress Report for ${report.childName}!`, 'success');
  };

  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="section-tag">360° DIAGNOSTIC RADAR REPORT</span>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--slate-900)' }}>Child Skill Progress Scorecard</h1>
            <p style={{ fontSize: 14, color: 'var(--slate-600)' }}>Certified multi-domain talent identification breakdown</p>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="btn btn-outline" onClick={() => showToast('Share link copied to clipboard', 'info')}>
              <Share2 size={16} /> Share Link
            </button>
            <button className="btn btn-primary" onClick={downloadPDF}>
              <Download size={16} /> Download Certified PDF
            </button>
          </div>
        </div>

        {/* Student Overview Header */}
        <div className="glass-card" style={{ padding: 28, marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <span className="badge badge-green">{report.certifiedBadge}</span>
              <span style={{ fontSize: 12, color: 'var(--slate-500)', fontWeight: 600 }}>{report.childId}</span>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: 'var(--slate-900)' }}>{report.childName}</h2>
            <div style={{ fontSize: 13, color: 'var(--slate-600)', marginTop: 2 }}>
              {report.age} ({report.ageGroup}) • {report.school}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 20, textAlignment: 'center', textAlign: 'center' }}>
            <div style={{ padding: '12px 20px', background: 'var(--primary-light)', borderRadius: 14 }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--primary)' }}>{report.overallScore}</div>
              <div style={{ fontSize: 11, color: 'var(--slate-500)', fontWeight: 700 }}>Skill Quotient</div>
            </div>
            <div style={{ padding: '12px 20px', background: 'var(--accent-green-light)', borderRadius: 14 }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: '#15803D' }}>{report.percentile}</div>
              <div style={{ fontSize: 11, color: 'var(--slate-500)', fontWeight: 700 }}>National Benchmark</div>
            </div>
          </div>
        </div>

        {/* Radar Representation & Skill Scores */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 32, marginBottom: 32 }}>
          <div className="glass-card" style={{ padding: 28 }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 20 }}>
              6 Core Domain Skill Breakdown
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {report.skillsRadar.map((skill, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13, fontWeight: 700 }}>
                    <span style={{ color: 'var(--slate-800)' }}>{skill.category}</span>
                    <span style={{ color: 'var(--primary)' }}>{skill.score} / 100</span>
                  </div>
                  <div className="progress-bar-bg" style={{ height: 10 }}>
                    <motion.div
                      className="progress-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.score}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Recommendations */}
          <div className="glass-card" style={{ padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Sparkles size={20} style={{ color: 'var(--amber)' }} />
                <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--slate-900)' }}>Pedagogical Recommendations</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {report.recommendations.map((rec, idx) => (
                  <div key={idx} style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10, borderLeft: '3px solid var(--primary)', fontSize: 13, color: 'var(--slate-700)', lineHeight: 1.5 }}>
                    {rec}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--slate-100)', display: 'flex', alignItems: 'center', justifyBetween: 'space-between', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 11, color: 'var(--slate-400)', fontWeight: 600 }}>Verified by Certified Psychologist</div>
              <span className="badge badge-green">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
