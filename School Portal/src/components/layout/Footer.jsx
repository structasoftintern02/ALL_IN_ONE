import React, { useState } from 'react';
import { Building2, Mail, Phone, MapPin, Send, ShieldCheck, Heart } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer = () => {
  const { navTo, showToast } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    showToast(`Subscribed ${email} to Early Childhood Skill Digest!`, 'success');
    setEmail('');
  };

  return (
    <footer style={{ background: '#0F172A', color: 'white', paddingTop: 60, paddingBottom: 24, borderTop: '1px solid #1E293B' }}>
      <div className="container">
        {/* Newsletter Box */}
        <div style={{
          background: 'linear-gradient(135deg, #1E293B, #0F172A)',
          borderRadius: 20, padding: '32px 40px', border: '1px solid rgba(255,255,255,0.1)',
          marginBottom: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20
        }}>
          <div>
            <span style={{ color: '#22C55E', fontWeight: 800, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              STAY UPDATED
            </span>
            <h3 style={{ fontSize: 22, fontWeight: 900, marginTop: 4, color: 'white' }}>
              Subscribe to Early Child Skill Research & Pedagogy Digest
            </h3>
            <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 4 }}>
              Join 12,000+ principals and educators receiving monthly skill identification research.
            </p>
          </div>
          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 10, minWidth: 320 }}>
            <input
              type="email"
              required
              placeholder="Enter school email address..."
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1, padding: '12px 16px', borderRadius: 10, border: '1px solid #334155',
                background: 'rgba(255,255,255,0.06)', color: 'white', fontSize: 13, outline: 'none'
              }}
            />
            <button type="submit" className="btn btn-accent btn-sm">
              <Send size={14} /> Subscribe
            </button>
          </form>
        </div>

        {/* Multi-Column Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#2563EB', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 900 }}>
                🏫
              </div>
              <span style={{ fontSize: 16, fontWeight: 900, color: 'white' }}>Child Skill Identification Program</span>
            </div>
            <p style={{ fontSize: 12, color: '#94A3B8', lineHeight: 1.6, marginBottom: 16 }}>
              National diagnostic framework for scientific talent identification in early childhood (3 to 10 years).
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#22C55E', fontWeight: 700 }}>
              <ShieldCheck size={14} /> NEP 2020 Early Childhood Compliant
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 13, fontWeight: 800, color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>
              School Programs
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13, color: '#94A3B8' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => navTo('age-programs')}>Early Observation (3–5 Yrs)</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navTo('age-programs')}>Cognitive Talent Explorer (5–7 Yrs)</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navTo('age-programs')}>Advanced STEM Logic (7–10 Yrs)</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navTo('assessment-process')}>Scientific 5-Stage Assessment</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navTo('regional-programs')}>Regional Diagnostic Hubs</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 13, fontWeight: 800, color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>
              School ERP Portal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13, color: '#94A3B8' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => navTo('school-profile')}>School Profile & Gallery</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navTo('program-calendar')}>Program Calendar</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navTo('student-enrollment')}>Student Enrollment</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navTo('attendance')}>Attendance Management</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navTo('progress-reports')}>Child Progress Radar Reports</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 13, fontWeight: 800, color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>
              Contact & Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 12, color: '#94A3B8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><MapPin size={14} style={{ color: '#2563EB' }} /> National Education Hub, Sector 62, Noida, NCR</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Phone size={14} style={{ color: '#22C55E' }} /> Toll Free: 1800-SKILL-CHILD</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Mail size={14} style={{ color: '#F59E0B' }} /> schools@earlychildskill.in</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #1E293B', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: 12, color: '#64748B' }}>
          <div>© 2026 Early Child Skill Identification Program Platform. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <span style={{ cursor: 'pointer' }} onClick={() => navTo('faqs')}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }} onClick={() => navTo('faqs')}>Terms & Accreditation</span>
            <span style={{ cursor: 'pointer' }} onClick={() => navTo('contact')}>School Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
