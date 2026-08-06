import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactPage = () => {
  const { showToast } = useApp();
  const [form, setForm] = useState({ name: '', school: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast(`Inquiry sent from ${form.school || form.name}! Support team will contact you shortly.`, 'success');
    setForm({ name: '', school: '', email: '', phone: '', message: '' });
  };

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">SCHOOL SUPPORT & DEMO</span>
          <h2 className="section-title">Get in Touch with Our Empanelment Team</h2>
          <p className="section-subtitle">Have questions about school empanelment, kit delivery, or ERP portal setup?</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 40, alignItems: 'flex-start' }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 900, color: 'var(--slate-900)', marginBottom: 16 }}>
              National School Support Office
            </h3>
            <p style={{ fontSize: 14, color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: 28 }}>
              Our dedicated school success team assists principals and trust boards with campus audits, faculty training, and parent orientation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Headquarters Address</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-800)' }}>National Education Hub, Sector 62, Noida, NCR - 201309</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-green-light)', color: '#15803D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Toll Free School Helpline</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-800)' }}>1800-SKILL-CHILD (Mon-Sat, 9 AM - 6 PM)</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(245, 158, 11, 0.1)', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Official School Email</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-800)' }}>schools@earlychildskill.in</div>
                </div>
              </div>
            </div>

            {/* Google Map Mockup */}
            <div className="glass-card" style={{ padding: 20, background: 'var(--slate-900)', color: 'white', borderRadius: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent-green)', marginBottom: 4 }}>LOCATION MAP MOCKUP</div>
              <div style={{ fontSize: 14, fontWeight: 800 }}>National Education Hub Campus • Sector 62, Noida</div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div className="glass-card" style={{ padding: 32 }} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h3 style={{ fontSize: 20, fontWeight: 900, color: 'var(--slate-900)', marginBottom: 20 }}>
              Send an Inquiry or Schedule Demo
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Your Name *</label>
                <input type="text" required placeholder="Principal / Educator Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="form-input" />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">School Name *</label>
                <input type="text" required placeholder="e.g. Greenwood High" value={form.school} onChange={e => setForm({ ...form, school: e.target.value })} className="form-input" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Email Address *</label>
                  <input type="email" required placeholder="school@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="form-input" />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" required placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="form-input" />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Message / Inquiry Details</label>
                <textarea rows="4" placeholder="Tell us about your school student strength and requirement..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="form-textarea" />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 10 }}>
                <Send size={16} /> Send Inquiry & Request Callback
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
