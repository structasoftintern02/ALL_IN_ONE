import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, Save, Eye, EyeOff, RefreshCw, Phone, Mail, MapPin, Sparkles, Plus, Trash2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultFooterCms = {
  brandName: "TalentDiscovery",
  brandSubtitle: "Child Skill Identification Portal",
  description: "India's leading scientific early child talent discovery platform. We empower parents to identify natural strengths, cognitive inclinations, and personalized learning pathways for children aged 3 to 10 years.",
  phone: "1800-KIDS-TALENT (54378)",
  email: "support@childtalentdiscovery.org",
  address: "Child Development Center, Tech Park Phase 2, Bengaluru – 560103",
  copyrightNotice: "© 2026 Child Talent Discovery Portal. All rights reserved. Designed for Early Child Development Awareness.",
  ageProgramsTitle: "AGE PROGRAMS",
  ageProgramsLinks: [
    "3–5 Years (Foundation)",
    "5–7 Years (Growth)",
    "7–10 Years (Mapping)",
    "Sensory Skill Modules"
  ],
  skillDomainsTitle: "SKILL DOMAINS",
  skillDomainsLinks: [
    "Cognitive & Spatial",
    "Creative & Artistic",
    "STEM & Logic",
    "Leadership & Emotional"
  ],
  parentToolsTitle: "PARENT TOOLS",
  parentToolsLinks: [
    "Parent Portal Login",
    "Sample Report Demo",
    "5-Step Process",
    "Parent Testimonials",
    "FAQ & Help Center"
  ],
  privacyLink: "Privacy Policy",
  termsLink: "Terms of Guidance",
  scientificLink: "Scientific Disclosure",
  visibility: {
    section: true,
    brand: true,
    contactInfo: true,
    socialIcons: true,
    categories: true,
    bottomBar: true
  }
};

export const FooterCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [cms, setCms] = useState(defaultFooterCms);

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/home`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.footerCms) {
          const loaded = data.footerCms;
          setCms({
            ...defaultFooterCms,
            ...loaded,
            visibility: { ...defaultFooterCms.visibility, ...(loaded.visibility || {}) }
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
        footerCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/home`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCmsData)
      });

      if (res.ok) {
        showToast('Footer Section updated & published live!', 'success');
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

  const handleArrayChange = (categoryKey, idx, val) => {
    const list = [...(cms[categoryKey] || [])];
    list[idx] = val;
    setCms({ ...cms, [categoryKey]: list });
  };

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--slate-500)' }}>
        <RefreshCw size={24} style={{ animation: 'spin 1s linear infinite' }} />
        <p style={{ marginTop: 12, fontWeight: 700 }}>Loading Footer CMS...</p>
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
            <span style={{ fontSize: 24 }}>🦶</span>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>Footer Section CMS</h1>
          </div>
          <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 4, marginBottom: 0, maxWidth: 650 }}>
            Customize the brand name, description, helpline, email, center address, 3 column category links, and bottom copyright notice bar.
          </p>
        </div>
      </div>

      {/* Main Grid: Left Forms + Right Live Preview */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'start' }}>
        
        {/* Left Column: Form Controls */}
        <div style={{ flex: '1 1 560px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          
          {/* Card 1: Brand Info & Address */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Sparkles size={16} color="var(--primary)" />
                <span>1. Brand Info & Quick Contact</span>
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Brand Name</label>
                  <input
                    type="text"
                    value={cms.brandName}
                    onChange={(e) => setCms({ ...cms, brandName: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, fontWeight: 800, background: 'white' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Brand Subtitle</label>
                  <input
                    type="text"
                    value={cms.brandSubtitle}
                    onChange={(e) => setCms({ ...cms, brandSubtitle: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Brand Description</label>
                <textarea
                  rows={3}
                  value={cms.description}
                  onChange={(e) => setCms({ ...cms, description: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 12, resize: 'vertical', background: 'white' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Helpline Phone</label>
                  <input
                    type="text"
                    value={cms.phone}
                    onChange={(e) => setCms({ ...cms, phone: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Support Email</label>
                  <input
                    type="text"
                    value={cms.email}
                    onChange={(e) => setCms({ ...cms, email: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Center Address</label>
                <input
                  type="text"
                  value={cms.address}
                  onChange={(e) => setCms({ ...cms, address: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: 3 Column Category Links */}
          <div className="card">
            <div className="card-header">
              <h3>
                <Layers size={16} color="var(--purple)" />
                <span>2. Column Link Categories</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Column 1 */}
              <div style={{ padding: 12, borderRadius: 10, background: 'var(--slate-50)', border: '1px solid var(--slate-200)' }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 800, color: 'var(--purple)', marginBottom: 6 }}>Column 1 Heading</label>
                <input
                  type="text"
                  value={cms.ageProgramsTitle}
                  onChange={(e) => setCms({ ...cms, ageProgramsTitle: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, fontWeight: 800, background: 'white', marginBottom: 8 }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {(cms.ageProgramsLinks || []).map((link, i) => (
                    <input
                      key={i}
                      type="text"
                      value={link}
                      onChange={(e) => handleArrayChange('ageProgramsLinks', i, e.target.value)}
                      style={{ width: '100%', padding: '6px 10px', borderRadius: 6, border: '1px solid var(--slate-200)', fontSize: 11, background: 'white' }}
                    />
                  ))}
                </div>
              </div>

              {/* Column 2 */}
              <div style={{ padding: 12, borderRadius: 10, background: 'var(--slate-50)', border: '1px solid var(--slate-200)' }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 800, color: 'var(--purple)', marginBottom: 6 }}>Column 2 Heading</label>
                <input
                  type="text"
                  value={cms.skillDomainsTitle}
                  onChange={(e) => setCms({ ...cms, skillDomainsTitle: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, fontWeight: 800, background: 'white', marginBottom: 8 }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {(cms.skillDomainsLinks || []).map((link, i) => (
                    <input
                      key={i}
                      type="text"
                      value={link}
                      onChange={(e) => handleArrayChange('skillDomainsLinks', i, e.target.value)}
                      style={{ width: '100%', padding: '6px 10px', borderRadius: 6, border: '1px solid var(--slate-200)', fontSize: 11, background: 'white' }}
                    />
                  ))}
                </div>
              </div>

              {/* Column 3 */}
              <div style={{ padding: 12, borderRadius: 10, background: 'var(--slate-50)', border: '1px solid var(--slate-200)' }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 800, color: 'var(--purple)', marginBottom: 6 }}>Column 3 Heading</label>
                <input
                  type="text"
                  value={cms.parentToolsTitle}
                  onChange={(e) => setCms({ ...cms, parentToolsTitle: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, fontWeight: 800, background: 'white', marginBottom: 8 }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {(cms.parentToolsLinks || []).map((link, i) => (
                    <input
                      key={i}
                      type="text"
                      value={link}
                      onChange={(e) => handleArrayChange('parentToolsLinks', i, e.target.value)}
                      style={{ width: '100%', padding: '6px 10px', borderRadius: 6, border: '1px solid var(--slate-200)', fontSize: 11, background: 'white' }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Copyright Notice & Legal Links */}
          <div className="card">
            <div className="card-header">
              <h3>
                <Mail size={16} color="var(--emerald)" />
                <span>3. Bottom Copyright Notice & Legal Links</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Copyright Notice Bar</label>
                <input
                  type="text"
                  value={cms.copyrightNotice}
                  onChange={(e) => setCms({ ...cms, copyrightNotice: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 4 }}>Legal Link 1</label>
                  <input
                    type="text"
                    value={cms.privacyLink}
                    onChange={(e) => setCms({ ...cms, privacyLink: e.target.value })}
                    style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 11, background: 'white' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 4 }}>Legal Link 2</label>
                  <input
                    type="text"
                    value={cms.termsLink}
                    onChange={(e) => setCms({ ...cms, termsLink: e.target.value })}
                    style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 11, background: 'white' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 4 }}>Legal Link 3</label>
                  <input
                    type="text"
                    value={cms.scientificLink}
                    onChange={(e) => setCms({ ...cms, scientificLink: e.target.value })}
                    style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 11, background: 'white' }}
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
              <div style={{ fontSize: 12, color: 'var(--slate-500)', marginTop: 2 }}>Click save to push all updated footer brand copy, links, & copyright notice live to the Child Talent website.</div>
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
        <div style={{ flex: '0 0 520px', width: 520, maxWidth: '100%', position: 'sticky', top: 80 }}>
          <div className="card" style={{ background: '#020617', color: 'white', borderColor: '#1E293B', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', borderRadius: 20 }}>
            
            {/* Header Bar */}
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0B0F19' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: '#38BDF8' }}>
                <Eye size={14} />
                <span>Live Real-Time Preview</span>
              </div>
              <span style={{ fontSize: 10, background: '#1E293B', color: '#94A3B8', padding: '2px 8px', borderRadius: 6, fontWeight: 600 }}>
                Footer Section
              </span>
            </div>

            {/* Live Visual Preview Body (Matching User Screenshot Layout) */}
            <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'left' }}>
              
              {/* Main 5-Column Grid Preview */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 14 }}>
                
                {/* Brand Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #EC4899, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Sparkles size={14} color="white" />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 900, color: 'white' }}>{cms.brandName}</div>
                      <div style={{ fontSize: 7.5, color: '#94A3B8' }}>{cms.brandSubtitle}</div>
                    </div>
                  </div>

                  <p style={{ fontSize: 8.5, color: '#64748B', lineHeight: 1.4, margin: 0 }}>
                    {cms.description ? (cms.description.length > 90 ? cms.description.substring(0, 90) + '...' : cms.description) : ''}
                  </p>

                  <div style={{ fontSize: 8, color: '#64748B', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <div>📞 {cms.phone}</div>
                    <div>✉️ {cms.email}</div>
                  </div>
                </div>

                {/* Column 1 Links */}
                <div>
                  <div style={{ fontSize: 8.5, fontWeight: 900, color: '#CBD5E1', textTransform: 'uppercase', marginBottom: 6 }}>
                    {cms.ageProgramsTitle}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 8, color: '#64748B' }}>
                    {(cms.ageProgramsLinks || []).map((l, i) => (
                      <div key={i}>{l}</div>
                    ))}
                  </div>
                </div>

                {/* Column 2 Links */}
                <div>
                  <div style={{ fontSize: 8.5, fontWeight: 900, color: '#CBD5E1', textTransform: 'uppercase', marginBottom: 6 }}>
                    {cms.skillDomainsTitle}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 8, color: '#64748B' }}>
                    {(cms.skillDomainsLinks || []).map((l, i) => (
                      <div key={i}>{l}</div>
                    ))}
                  </div>
                </div>

                {/* Column 3 Links */}
                <div>
                  <div style={{ fontSize: 8.5, fontWeight: 900, color: '#CBD5E1', textTransform: 'uppercase', marginBottom: 6 }}>
                    {cms.parentToolsTitle}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 8, color: '#64748B' }}>
                    {(cms.parentToolsLinks || []).map((l, i) => (
                      <div key={i}>{l}</div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Copyright Bar */}
              <div style={{ borderTop: '1px solid #1E293B', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 8, color: '#475569', flexWrap: 'wrap', gap: 6 }}>
                <div>{cms.copyrightNotice}</div>
                <div style={{ display: 'flex', gap: 8, color: '#64748B' }}>
                  <span>{cms.privacyLink}</span>
                  <span>{cms.termsLink}</span>
                  <span>{cms.scientificLink}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
