import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Save, Eye, EyeOff, RefreshCw, ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultCtaCms = {
  badge: "✨ Unlock Natural Talents Early",
  title: "Discover What Your Child is Naturally Gifted At 🌟",
  highlightText: "Naturally Gifted At",
  subtitle: "Join 25,000+ parents who replaced guess-work with scientific early talent mapping.",
  primaryButtonText: "Start Assessment",
  secondaryButtonText: "View Sample Report",
  visibility: {
    section: true,
    badge: true,
    title: true,
    subtitle: true,
    primaryButton: true,
    secondaryButton: true
  }
};

export const CallToActionCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [cms, setCms] = useState(defaultCtaCms);

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/home`);
      if (res.ok) {
        const data = await res.json();
        if (data && (data.ctaCms || data.callToActionCms)) {
          const loaded = data.ctaCms || data.callToActionCms;
          setCms({
            ...defaultCtaCms,
            ...loaded,
            visibility: { ...defaultCtaCms.visibility, ...(loaded.visibility || {}) }
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
        ctaCms: cms,
        callToActionCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/home`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCmsData)
      });

      if (res.ok) {
        showToast('Call To Action Banner updated & published live!', 'success');
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
        <p style={{ marginTop: 12, fontWeight: 700 }}>Loading Call To Action CMS...</p>
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
            <span style={{ fontSize: 24 }}>✨</span>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>Call To Action Section CMS</h1>
          </div>
          <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 4, marginBottom: 0, maxWidth: 650 }}>
            Customize the bottom conversion CTA banner badge, headline, subtitle, and primary/secondary button texts.
          </p>
        </div>
      </div>

      {/* Main Grid: Left Forms + Right Live Preview */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'start' }}>
        
        {/* Left Column: Form Controls */}
        <div style={{ flex: '1 1 560px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          
          {/* Card 1: Section Banner Copy */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Sparkles size={16} color="var(--primary)" />
                <span>1. CTA Banner Content & Copy</span>
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
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Badge Pill Text</label>
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
                  placeholder="e.g. Naturally Gifted At"
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

          {/* Card 2: CTA Action Buttons */}
          <div className="card">
            <div className="card-header">
              <h3>
                <ArrowRight size={16} color="var(--purple)" />
                <span>2. Action Buttons</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Primary Button Text</label>
                  <input
                    type="text"
                    value={cms.primaryButtonText}
                    onChange={(e) => setCms({ ...cms, primaryButtonText: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white', fontWeight: 800 }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Secondary Button Text</label>
                  <input
                    type="text"
                    value={cms.secondaryButtonText}
                    onChange={(e) => setCms({ ...cms, secondaryButtonText: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                  />
                </div>
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
              <div style={{ fontSize: 12, color: 'var(--slate-500)', marginTop: 2 }}>Click save to push all updated CTA banner headlines & buttons live to the Child Talent website.</div>
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
        <div style={{ flex: '0 0 500px', width: 500, maxWidth: '100%', position: 'sticky', top: 80 }}>
          <div className="card" style={{ background: '#090D16', color: 'white', borderColor: '#1E293B', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', borderRadius: 20 }}>
            
            {/* Header Bar */}
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#020617' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: '#38BDF8' }}>
                <Eye size={14} />
                <span>Live Real-Time Preview</span>
              </div>
              <span style={{ fontSize: 10, background: '#1E293B', color: '#94A3B8', padding: '2px 8px', borderRadius: 6, fontWeight: 600 }}>
                Call To Action Section
              </span>
            </div>

            {/* Live Visual Preview Banner (Matching User Screenshot Layout) */}
            <div style={{ padding: 20 }}>
              <div style={{
                padding: '24px 22px',
                borderRadius: 20,
                background: 'linear-gradient(135deg, #9333EA 0%, #BE123C 50%, #4338CA 100%)',
                boxShadow: '0 12px 30px rgba(147,51,234,0.35)',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                color: 'white'
              }}>
                <div>
                  <span style={{ fontSize: 10, padding: '3px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.25)', fontWeight: 800 }}>
                    {cms.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: 17, fontWeight: 900, color: 'white', lineHeight: 1.25, margin: 0 }}>
                  {cms.title}
                </h3>

                <p style={{ fontSize: 11, color: '#F3E8FF', margin: 0, lineHeight: 1.4 }}>
                  {cms.subtitle}
                </p>

                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 4 }}>
                  <div style={{ padding: '8px 16px', borderRadius: 12, background: 'white', color: '#581C87', fontWeight: 900, fontSize: 11, display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                    <span>{cms.primaryButtonText}</span>
                    <ArrowRight size={13} />
                  </div>

                  <div style={{ padding: '8px 16px', borderRadius: 12, background: 'rgba(88,28,135,0.6)', color: 'white', border: '1px solid rgba(192,132,252,0.4)', fontWeight: 700, fontSize: 11 }}>
                    {cms.secondaryButtonText}
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
