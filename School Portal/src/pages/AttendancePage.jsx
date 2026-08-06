import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Clock, Calendar, Download, User } from 'lucide-react';
import { attendanceData, studentEnrollments } from '../data/schoolPortalData';
import { useApp } from '../context/AppContext';

export const AttendancePage = () => {
  const { showToast } = useApp();
  const [attendanceState, setAttendanceState] = useState(
    studentEnrollments.map(s => ({ ...s, attendance: 'Present' }))
  );

  const toggleAttendance = (id, status) => {
    setAttendanceState(prev => prev.map(item => item.id === id ? { ...item, attendance: status } : item));
    showToast(`Marked ${status} for student`, 'info');
  };

  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="section-tag">ATTENDANCE DASHBOARD</span>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--slate-900)' }}>Session & Monthly Attendance Tracker</h1>
            <p style={{ fontSize: 14, color: 'var(--slate-600)' }}>Record diagnostic session participation and view monthly attendance trends</p>
          </div>
          <button className="btn btn-outline" onClick={() => showToast('Exported Attendance Summary (.CSV)', 'success')}>
            <Download size={16} /> Export Attendance Report
          </button>
        </div>

        {/* Metric Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
          <div className="glass-card" style={{ padding: 20, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--accent-green)' }}>{attendanceData.summary.presentPercentage}%</div>
            <div style={{ fontSize: 12, color: 'var(--slate-500)', fontWeight: 600, marginTop: 2 }}>Present Percentage</div>
          </div>
          <div className="glass-card" style={{ padding: 20, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--primary)' }}>{attendanceData.summary.totalSessions}</div>
            <div style={{ fontSize: 12, color: 'var(--slate-500)', fontWeight: 600, marginTop: 2 }}>Sessions Conducted</div>
          </div>
          <div className="glass-card" style={{ padding: 20, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--accent-green)' }}>{attendanceData.summary.presentCount}</div>
            <div style={{ fontSize: 12, color: 'var(--slate-500)', fontWeight: 600, marginTop: 2 }}>Student Attendances</div>
          </div>
          <div className="glass-card" style={{ padding: 20, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--rose)' }}>{attendanceData.summary.absentCount}</div>
            <div style={{ fontSize: 12, color: 'var(--slate-500)', fontWeight: 600, marginTop: 2 }}>Absences Recorded</div>
          </div>
        </div>

        {/* Live Attendance Table */}
        <div className="table-container">
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--slate-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--slate-900)' }}>Live Session Attendance Sheet</h3>
            <span className="badge badge-green">Today's Session</span>
          </div>

          <table className="custom-table">
            <thead>
              <tr>
                <th>Student Details</th>
                <th>Age Group</th>
                <th>Enrolled Program</th>
                <th style={{ textAlign: 'center' }}>Mark Attendance</th>
              </tr>
            </thead>
            <tbody>
              {attendanceState.map(s => (
                <tr key={s.id}>
                  <td>
                    <div style={{ fontWeight: 800, color: 'var(--slate-900)' }}>{s.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--slate-500)' }}>{s.id}</div>
                  </td>
                  <td><span className="badge badge-blue">{s.ageGroup}</span></td>
                  <td style={{ fontSize: 13 }}>{s.program}</td>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', gap: 6, justifyContent: 'center' }}>
                      <button
                        className={`btn btn-sm ${s.attendance === 'Present' ? 'btn-accent' : 'btn-outline'}`}
                        style={{ padding: '6px 12px', fontSize: 12 }}
                        onClick={() => toggleAttendance(s.id, 'Present')}
                      >
                        <CheckCircle2 size={13} /> Present
                      </button>
                      <button
                        className={`btn btn-sm ${s.attendance === 'Absent' ? 'btn-primary' : 'btn-outline'}`}
                        style={{ padding: '6px 12px', fontSize: 12, color: s.attendance === 'Absent' ? 'white' : 'var(--rose)', background: s.attendance === 'Absent' ? 'var(--rose)' : 'none' }}
                        onClick={() => toggleAttendance(s.id, 'Absent')}
                      >
                        <XCircle size={13} /> Absent
                      </button>
                      <button
                        className={`btn btn-sm ${s.attendance === 'Late' ? 'btn-primary' : 'btn-outline'}`}
                        style={{ padding: '6px 12px', fontSize: 12, color: s.attendance === 'Late' ? 'white' : 'var(--amber)', background: s.attendance === 'Late' ? 'var(--amber)' : 'none' }}
                        onClick={() => toggleAttendance(s.id, 'Late')}
                      >
                        <Clock size={13} /> Late
                      </button>
                    </div>
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
