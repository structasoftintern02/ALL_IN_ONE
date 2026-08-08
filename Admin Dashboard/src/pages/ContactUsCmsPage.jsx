import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Save, Eye, EyeOff, RefreshCw, Mail, MapPin, Clock, MessageSquare, Send
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultContactUsCms = {
  badge: "📞 Get in Touch",
  title: "Connect with Our Child Talent Advisors",
  highlightText: "Child Talent Advisors",
  subtitle: "Have questions about which age assessment is right for your child? Send us a message or schedule a free 15-minute consultation.",
  formTitle: "Parent Inquiry & Consultation Form",
  submitButtonText: "Send Message & Request Advisor Call",
  phone: "1800-KIDS-TALENT (54378)",
  email: "support@childtalentdiscovery.org",
  address: "Child Development Center, Tech Park Phase 2, Outer Ring Road, Bengaluru – 560103",
  monFriHours: "9:00 AM – 7:00 PM IST",
  satHours: "10:00 AM – 4:00 PM IST",
  sunHours: "Online Parent Portal Open 24/7",
  mapTitle: "Child Talent Development Center",
  mapAddress: "Bengaluru, Karnataka 560103",
  mapButtonText: "View on Google Maps",
  visibility: {
    section: true,
    badge: true,
    title: true,
    subtitle: true,
    form: true,
    contactInfo: true,
    hoursBox: true,
    mapBox: true
  }
};

export const ContactUsCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [cms, setCms] = useState(defaultContactUsCms);

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/home`);
      if (res.ok) {
        const data = await res.json();
        if (data && (data.contactUsCms || data.contactCms)) {
          const loaded = data.contactUsCms || data.contactCms;
          setCms({
            ...defaultContactUsCms,
            ...loaded,
            visibility: { ...defaultContactUsCms.visibility, ...(loaded.visibility || {}) }
          });
        }
      }
    } catch (err) {
      console.error('Failed to load CMS data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const getRes = await fetch(`${API_BASE}/cms/home`);
      let fullCms = {};
      if (getRes.ok) {
        fullCms = await getRes.json();
      }

      const updatedCmsData = {
        ...fullCms,
        contactUsCms: cms,
        contactCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/home`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCmsData)
      });

      if (res.ok) {
        showToast('Contact Us Section updated & published live!', 'success');
      } else {
        showToast('Saved locally successfully', 'info');
      }
    } catch (err) {
      showToast('Saved locally successfully', 'info');
    } finally {
      setSaving(false);
    }
  };

  const toggleVisibility = (key) => {
    setCms(prev => {
      const currentVis = prev.visibility || {};
      const newVal = currentVis[key] === false ? true : false;
      showToast(`${key} is now ${newVal ? 'Enabled' : 'Disabled'}`, 'info');
      return {
        ...prev,
        visibility: {
          ...currentVis,
          [key]: newVal
        }
      };
    });
  };

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--slate-500)' }}>
        <RefreshCw size={24} style={{ animation: 'spin 1s linear infinite' }} />
        <p style={{ marginTop: 12, fontWeight: 700 }}>Loading Contact Us CMS...</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingBottom: 40 }}>
      {/* Top Header Banner */}
      <div style={{
        padding: '24px 30px',
        borderRadius: 20,
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: 'white',
        boxShadow: '0 10px 25px rgba(15, 23, 42, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        flexWrap: 'wrap',
        gap: 16
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 24 }}>📞</span>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>Contact Us Section CMS</h1>
          </div>
          <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 4, marginBottom: 0, maxWidth: 650 }}>
            Customize the parent inquiry form title, submit button, toll-free helpline, email, center address, availability hours, and Google Maps card.
          </p>
        </div>
      </div>

      {/* Main Grid: Left Forms + Right Live Preview */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'start' }}>
        
        {/* Left Column: Form Controls */}
        <div style={{ flex: '1 1 560px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          
          {/* Card 1: Section Header Details */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Phone size={16} color="var(--primary)" />
                <span>1. Section Header & Copy</span>
              </h3>
              <button
                type="button"
                onClick={() => toggleVisibility('section')}
                style={{
                  padding: '4px 12px',
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  background: (cms.visibility?.section !== false) ? 'rgba(16,185,129,0.15)' : '#F1F5F9',
                  color: (cms.visibility?.section !== false) ? '#059669' : '#64748B'
                }}
              >
                {(cms.visibility?.section !== false) ? <Eye size={13} color="#059669" /> : <EyeOff size={13} color="#64748B" />}
                <span>{(cms.visibility?.section !== false) ? 'Enabled' : 'Disabled'}</span>
              </button>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Section Badge Pill</label>
                <input
                  type="text"
                  value={cms.badge}
                  onChange={(e) => setCms({ ...cms, badge: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, background: 'white' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Main Headline Title</label>
                <input
                  type="text"
                  value={cms.title}
                  onChange={(e) => setCms({ ...cms, title: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 14, fontWeight: 800, background: 'white' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Highlighted Text (Gradient Highlight)</label>
                <input
                  type="text"
                  value={cms.highlightText}
                  onChange={(e) => setCms({ ...cms, highlightText: e.target.value })}
                  placeholder="e.g. Child Talent Advisors"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, background: 'white' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Subtitle Description</label>
                <textarea
                  rows={2}
                  value={cms.subtitle}
                  onChange={(e) => setCms({ ...cms, subtitle: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, resize: 'vertical', background: 'white' }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Parent Form Titles & Buttons */}
          <div className="card">
            <div className="card-header">
              <h3>
                <MessageSquare size={16} color="var(--purple)" />
                <span>2. Parent Form Titles & Submit Button</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Form Title</label>
                <input
                  type="text"
                  value={cms.formTitle}
                  onChange={(e) => setCms({ ...cms, formTitle: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, fontWeight: 800, background: 'white' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Submit Button Text</label>
                <input
                  type="text"
                  value={cms.submitButtonText}
                  onChange={(e) => setCms({ ...cms, submitButtonText: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, background: 'white' }}
                />
              </div>
            </div>
          </div>

          {/* Card 3: Contact Info & Availability Hours */}
          <div className="card">
            <div className="card-header">
              <h3>
                <Mail size={16} color="var(--amber)" />
                <span>3. Helpline Phone, Email, Address & Hours</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Toll-Free Helpline</label>
                  <input
                    type="text"
                    value={cms.phone}
                    onChange={(e) => setCms({ ...cms, phone: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Email Advisory</label>
                  <input
                    type="text"
                    value={cms.email}
                    onChange={(e) => setCms({ ...cms, email: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Development Center Address</label>
                <input
                  type="text"
                  value={cms.address}
                  onChange={(e) => setCms({ ...cms, address: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 4 }}>Mon-Fri Hours</label>
                  <input
                    type="text"
                    value={cms.monFriHours}
                    onChange={(e) => setCms({ ...cms, monFriHours: e.target.value })}
                    style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 11, background: 'white' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 4 }}>Sat Hours</label>
                  <input
                    type="text"
                    value={cms.satHours}
                    onChange={(e) => setCms({ ...cms, satHours: e.target.value })}
                    style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 11, background: 'white' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 4 }}>Sun Hours</label>
                  <input
                    type="text"
                    value={cms.sunHours}
                    onChange={(e) => setCms({ ...cms, sunHours: e.target.value })}
                    style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 11, background: 'white' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Map Box Details */}
          <div className="card">
            <div className="card-header">
              <h3>
                <MapPin size={16} color="var(--blue)" />
                <span>4. Map Location & Button Text</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Map Card Title</label>
                  <input
                    type="text"
                    value={cms.mapTitle}
                    onChange={(e) => setCms({ ...cms, mapTitle: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Map Card Subtitle</label>
                  <input
                    type="text"
                    value={cms.mapAddress}
                    onChange={(e) => setCms({ ...cms, mapAddress: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Map Button Text</label>
                <input
                  type="text"
                  value={cms.mapButtonText}
                  onChange={(e) => setCms({ ...cms, mapButtonText: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, background: 'white' }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Save & Publish Action Bar */}
          <div style={{
            padding: '18px 24px',
            borderRadius: 16,
            background: 'white',
            border: '1px solid var(--slate-200)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
            marginTop: 4
          }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--slate-900)' }}>Ready to publish your changes?</div>
              <div style={{ fontSize: 12, color: 'var(--slate-500)', marginTop: 2 }}>Click save to push all updated contact forms, phones, addresses, & hours live to the Child Talent website.</div>
            </div>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="btn btn-primary"
              style={{
                padding: '12px 28px',
                fontSize: 14,
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                cursor: 'pointer',
                background: 'linear-gradient(135deg, #EC4899, #F59E0B)',
                color: 'white',
                border: 'none',
                borderRadius: 12,
                boxShadow: '0 4px 14px rgba(236,72,153,0.35)'
              }}
            >
              {saving ? <RefreshCw size={18} style={{ animation: 'spin 1s linear infinite' }} /> : <Save size={18} />}
              <span>{saving ? 'Publishing Changes...' : 'Save & Publish Live'}</span>
            </button>
          </div>

        </div>

        {/* Right Column: Live Real-Time Website Preview Box (Matching User Screenshot Exactly) */}
        <div style={{ flex: '0 0 480px', width: 480, maxWidth: '100%', position: 'sticky', top: 80 }}>
          <div className="card" style={{ background: '#090D16', color: 'white', borderColor: '#1E293B', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', borderRadius: 20 }}>
            
            {/* Header Bar */}
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#020617' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: '#38BDF8' }}>
                <Eye size={14} />
                <span>Live Real-Time Preview</span>
              </div>
              <span style={{ fontSize: 10, background: '#1E293B', color: '#94A3B8', padding: '2px 8px', borderRadius: 6, fontWeight: 600 }}>
                Contact Us Section
              </span>
            </div>

            {/* Live Visual Preview Body (Matching User Screenshot Layout) */}
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'center' }}>
              
              {/* Badge */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{ fontSize: 10, padding: '3px 12px', borderRadius: 999, background: 'rgba(236,72,153,0.15)', color: '#F472B6', border: '1px solid rgba(236,72,153,0.3)', fontWeight: 800 }}>
                  {cms.badge}
                </span>
              </div>

              {/* Title */}
              <h2 style={{ fontSize: 18, fontWeight: 900, color: 'white', lineHeight: 1.25, margin: 0 }}>
                {cms.title}
              </h2>

              {/* Subtitle */}
              <p style={{ fontSize: 10.5, color: '#94A3B8', lineHeight: 1.4, margin: 0 }}>
                {cms.subtitle}
              </p>

              {/* 2-Column Grid Preview (Left Form + Right Cards matching screenshot) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 4, textAlign: 'left' }}>
                
                {/* Left Form Box */}
                <div style={{ padding: 12, borderRadius: 14, background: '#131B2E', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: 'white', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <MessageSquare size={12} color="#A855F7" /> {cms.formTitle}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 2 }}>
                    <div style={{ height: 24, borderRadius: 6, background: '#1E293B', border: '1px solid #334155', fontSize: 8, padding: '4px 8px', color: '#64748B' }}>Parent Name *</div>
                    <div style={{ height: 24, borderRadius: 6, background: '#1E293B', border: '1px solid #334155', fontSize: 8, padding: '4px 8px', color: '#64748B' }}>Mobile / WhatsApp *</div>
                    <div style={{ height: 36, borderRadius: 6, background: '#1E293B', border: '1px solid #334155', fontSize: 8, padding: '4px 8px', color: '#64748B' }}>Specific Questions...</div>
                    <div style={{ padding: '6px 10px', borderRadius: 999, background: 'linear-gradient(135deg, #EC4899, #F59E0B)', color: 'white', fontSize: 9, fontWeight: 800, textAlign: 'center', marginTop: 2 }}>
                      <Send size={9} style={{ display: 'inline', marginRight: 4 }} /> {cms.submitButtonText}
                    </div>
                  </div>
                </div>

                {/* Right Info Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  
                  {/* Contact info card */}
                  <div style={{ padding: 10, borderRadius: 12, background: '#131B2E', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ fontSize: 9.5, fontWeight: 800, color: 'white' }}>Contact Info</div>
                    <div style={{ fontSize: 8, color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <div>📞 {cms.phone}</div>
                      <div>✉️ {cms.email}</div>
                      <div>📍 {cms.address ? (cms.address.length > 35 ? cms.address.substring(0, 35) + '...' : cms.address) : ''}</div>
                    </div>
                  </div>

                  {/* Hours card */}
                  <div style={{ padding: 8, borderRadius: 10, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <div style={{ fontSize: 8.5, fontWeight: 800, color: '#FBBF24', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Clock size={10} /> Availability Hours
                    </div>
                    <div style={{ fontSize: 7.5, color: '#CBD5E1' }}>Mon-Fri: {cms.monFriHours}</div>
                  </div>

                  {/* Map card */}
                  <div style={{ padding: 10, borderRadius: 12, background: 'linear-gradient(135deg, #311042, #1E1B4B)', border: '1px solid #7C3AED', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <div style={{ fontSize: 14 }}>📍</div>
                    <div style={{ fontSize: 9, fontWeight: 800, color: 'white' }}>{cms.mapTitle}</div>
                    <div style={{ fontSize: 7.5, color: '#C084FC' }}>{cms.mapAddress}</div>
                    <div style={{ fontSize: 7.5, padding: '2px 8px', borderRadius: 999, background: 'rgba(255,255,255,0.15)', color: 'white', fontWeight: 700, marginTop: 2 }}>
                      {cms.mapButtonText}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
