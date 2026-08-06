import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Upload, Check, ShieldCheck, User, Mail, Phone, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SchoolRegistrationPage = () => {
  const { registerSchool } = useApp();

  const [form, setForm] = useState({
    name: '',
    principal: '',
    board: 'CBSE',
    type: 'Day School',
    email: '',
    phone: '',
    address: '',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    city: 'Bengaluru',
    classrooms: 30,
    activityRooms: 4
  });

  const [fileName, setFileName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    registerSchool(form);
  };

  return (
    <div style={{ padding: '60px 0', background: 'var(--slate-50)', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-header">
          <span className="section-tag">PARTNER SCHOOL EMPANELMENT</span>
          <h2 className="section-title">School Registration Form</h2>
          <p className="section-subtitle">Empanel your campus to receive diagnostic kits, certified teachers, and accreditation status.</p>
        </div>

        <motion.div className="glass-card" style={{ padding: 36, background: 'white' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <form onSubmit={handleSubmit}>
            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: 16, borderBottom: '1px solid var(--slate-100)', pb: 8 }}>
              1. School General Information
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="form-group">
                <label className="form-label">School Name *</label>
                <input type="text" required placeholder="e.g. Greenwood High International" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Principal Name *</label>
                <input type="text" required placeholder="e.g. Dr. Meenakshi Sundaram" value={form.principal} onChange={e => setForm({ ...form, principal: e.target.value })} className="form-input" />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="form-group">
                <label className="form-label">Affiliation Board *</label>
                <select value={form.board} onChange={e => setForm({ ...form, board: e.target.value })} className="form-select">
                  <option>CBSE</option>
                  <option>ICSE / CISCE</option>
                  <option>IB World School</option>
                  <option>IGCSE / Cambridge</option>
                  <option>State Board</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">School Type *</label>
                <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="form-select">
                  <option>Day School</option>
                  <option>Day Cum Boarding</option>
                  <option>Residential Boarding</option>
                  <option>Standalone Kindergarten / Academy</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="form-group">
                <label className="form-label">School Official Email *</label>
                <input type="email" required placeholder="principal@school.edu.in" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Contact Phone Number *</label>
                <input type="tel" required placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="form-input" />
              </div>
            </div>

            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginTop: 24, marginBottom: 16, borderBottom: '1px solid var(--slate-100)', pb: 8 }}>
              2. Campus Location & Infrastructure
            </div>

            <div className="form-group">
              <label className="form-label">School Address *</label>
              <input type="text" required placeholder="Street, Landmark, Area" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} className="form-input" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
              <div className="form-group">
                <label className="form-label">State</label>
                <input type="text" value={form.state} onChange={e => setForm({ ...form, state: e.target.value })} className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">District</label>
                <input type="text" value={form.district} onChange={e => setForm({ ...form, district: e.target.value })} className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">City</label>
                <input type="text" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className="form-input" />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="form-group">
                <label className="form-label">Classrooms Count</label>
                <input type="number" value={form.classrooms} onChange={e => setForm({ ...form, classrooms: e.target.value })} className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Activity Rooms Count</label>
                <input type="number" value={form.activityRooms} onChange={e => setForm({ ...form, activityRooms: e.target.value })} className="form-input" />
              </div>
            </div>

            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginTop: 24, marginBottom: 16, borderBottom: '1px solid var(--slate-100)', pb: 8 }}>
              3. Verification Documents (UI Mockup)
            </div>

            <div style={{ border: '2px dashed var(--slate-300)', padding: 24, borderRadius: 12, textAlign: 'center', background: 'var(--slate-50)', marginBottom: 24, cursor: 'pointer' }}>
              <Upload size={32} style={{ color: 'var(--primary)', marginBottom: 8 }} />
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-800)' }}>
                {fileName ? `Uploaded: ${fileName}` : 'Click to Upload School Affiliation Certificate (PDF/PNG)'}
              </div>
              <div style={{ fontSize: 11, color: 'var(--slate-500)', marginTop: 4 }}>Maximum file size: 10MB</div>
              <input
                type="file"
                style={{ display: 'none' }}
                id="doc-upload"
                onChange={e => e.target.files[0] && setFileName(e.target.files[0].name)}
              />
              <label htmlFor="doc-upload" className="btn btn-outline btn-sm" style={{ marginTop: 12, display: 'inline-flex' }}>
                Select File
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              Submit School Registration & Audit Request
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
