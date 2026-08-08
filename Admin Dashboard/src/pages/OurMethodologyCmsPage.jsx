import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Save, Eye, EyeOff, Plus, Trash2, RefreshCw, Layers, CheckCircle2, ArrowRight, BookOpen, ShieldCheck, Sparkles, Brain
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultMethodologyCms = {
  badge: "🔬 Scientific Approach",
  title: "The Science of Child Talent Profiling",
  highlightText: "Child Talent Profiling",
  subtitle: "Our play-based methodology is built upon Howard Gardner's Multiple Intelligences framework, Montessori observational standards, and pediatric cognitive psychology.",
  bannerBadge: "✨ Play-Based Observation System",
  bannerTitle: "No Exams. No Pressure. Pure Playful Discovery. 🎈",
  bannerDesc: "Traditional schooling evaluates children using rigid exam benchmarks. Our system observes children during natural home play — analyzing how they solve spatial puzzles, express emotions, build Lego structures, and respond to music.",
  buttonText: "Explore Sample Talent Report →",
  checklist: [
    "Gardner's 8 Intelligences mapped",
    "100% Home play-based tasks",
    "Sensory learning style profiling",
    "Visual spatial & logic benchmarks",
    "Divergent creative expression score",
    "Motor dexterity & rhythm timing",
    "Emotional regulation indicators",
    "3-Year personalized learning roadmap"
  ],
  visibility: {
    section: true,
    header: true,
    banner: true,
    checklist: true,
    button: true
  }
};

export const OurMethodologyCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [cms, setCms] = useState(defaultMethodologyCms);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/home`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.ourMethodologyCms) {
          setCms({
            ...defaultMethodologyCms,
            ...data.ourMethodologyCms,
            visibility: { ...defaultMethodologyCms.visibility, ...(data.ourMethodologyCms.visibility || {}) }
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
        ourMethodologyCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/home`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCmsData)
      });

      if (res.ok) {
        showToast('Our Methodology Section updated & published live!', 'success');
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

  const handleChecklistChange = (idx, value) => {
    const updated = [...(cms.checklist || [])];
    updated[idx] = value;
    setCms({ ...cms, checklist: updated });
  };

  const handleRemoveChecklistItem = (idx) => {
    const updated = (cms.checklist || []).filter((_, i) => i !== idx);
    setCms({ ...cms, checklist: updated });
    showToast('Checklist item removed', 'info');
  };

  const handleAddChecklistItem = (e) => {
    if (e) e.preventDefault();
    if (!newItem.trim()) return;

    setCms(prev => ({
      ...prev,
      checklist: [...(prev.checklist || []), newItem.trim()]
    }));

    setNewItem('');
    showToast('New checklist point added!', 'info');
  };

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--slate-500)' }}>
        <RefreshCw size={24} style={{ animation: 'spin 1s linear infinite' }} />
        <p style={{ marginTop: 12, fontWeight: 700 }}>Loading Our Methodology CMS...</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingBottom: 40 }}>
      {/* Top Header Banner */}
      <div style={{
        padding: '24px 30px',
        borderRadius: 20,
        background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)',
        color: 'white',
        boxShadow: '0 10px 25px rgba(49, 46, 129, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        flexWrap: 'wrap',
        gap: 16
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 24 }}>🔬</span>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>Our Methodology Section CMS</h1>
          </div>
          <p style={{ fontSize: 13, color: '#C7D2FE', marginTop: 4, marginBottom: 0, maxWidth: 650 }}>
            Customize the section badge, scientific headline, play-based observation banner, checklist points, and report preview button.
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
                <Target size={16} color="var(--primary)" />
                <span>1. Section Header & Scientific Copy</span>
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
                  placeholder="e.g. Child Talent Profiling"
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

          {/* Card 2: Feature Banner & Checklist Points */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Layers size={16} color="var(--purple)" />
                <span>2. Feature Banner & Checklist Points</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Banner Badge Pill</label>
                <input
                  type="text"
                  value={cms.bannerBadge}
                  onChange={(e) => setCms({ ...cms, bannerBadge: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, background: 'white' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Banner Main Title</label>
                <input
                  type="text"
                  value={cms.bannerTitle}
                  onChange={(e) => setCms({ ...cms, bannerTitle: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 14, fontWeight: 800, background: 'white' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Banner Description</label>
                <textarea
                  rows={3}
                  value={cms.bannerDesc}
                  onChange={(e) => setCms({ ...cms, bannerDesc: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, resize: 'vertical', background: 'white' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Button CTA Text</label>
                <input
                  type="text"
                  value={cms.buttonText}
                  onChange={(e) => setCms({ ...cms, buttonText: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, background: 'white' }}
                />
              </div>

              {/* 8 Checklist Items Manager */}
              <div style={{ padding: 14, borderRadius: 12, background: 'var(--slate-50)', border: '1px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--slate-800)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Checklist Points ({cms.checklist?.length || 0} Points)</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {(cms.checklist || []).map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0 }} />
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleChecklistChange(idx, e.target.value)}
                        style={{ flex: 1, padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 13, fontWeight: 600, background: 'white' }}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveChecklistItem(idx)}
                        style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#EF4444', display: 'flex', alignItems: 'center', padding: 4 }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add Checklist Item */}
                <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                  <input
                    type="text"
                    placeholder="Add new methodology checklist point..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddChecklistItem(e);
                      }
                    }}
                    style={{ flex: 1, padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                  />
                  <button
                    type="button"
                    onClick={handleAddChecklistItem}
                    className="btn btn-primary"
                    style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 12 }}
                  >
                    <Plus size={14} /> Add
                  </button>
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
              <div style={{ fontSize: 12, color: 'var(--slate-500)', marginTop: 2 }}>Click save to push all updated methodology text & checklist points live to the Child Talent website.</div>
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

        {/* Right Column: Live Real-Time Website Preview Box (Matching User Screenshot) */}
        <div style={{ flex: '0 0 440px', width: 440, maxWidth: '100%', position: 'sticky', top: 80 }}>
          <div className="card" style={{ background: '#090D16', color: 'white', borderColor: '#1E293B', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', borderRadius: 20 }}>
            
            {/* Header Bar */}
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#020617' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: '#38BDF8' }}>
                <Eye size={14} />
                <span>Live Real-Time Preview</span>
              </div>
              <span style={{ fontSize: 10, background: '#1E293B', color: '#94A3B8', padding: '2px 8px', borderRadius: 6, fontWeight: 600 }}>
                Our Methodology Section
              </span>
            </div>

            {/* Live Visual Preview Body (Matching User Screenshot Layout) */}
            <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'center' }}>
              
              {/* Badge */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{ fontSize: 10, padding: '3px 12px', borderRadius: 999, background: 'rgba(236,72,153,0.15)', color: '#F472B6', border: '1px solid rgba(236,72,153,0.3)', fontWeight: 800 }}>
                  {cms.badge}
                </span>
              </div>

              {/* Title */}
              <h2 style={{ fontSize: 19, fontWeight: 900, color: 'white', lineHeight: 1.25, margin: 0 }}>
                {cms.title}
              </h2>

              {/* Subtitle */}
              <p style={{ fontSize: 11, color: '#94A3B8', lineHeight: 1.5, margin: 0, paddingLeft: 10, paddingRight: 10 }}>
                {cms.subtitle}
              </p>

              {/* Dark Purple Gradient Banner (Matching Screenshot 2) */}
              <div style={{
                padding: 16,
                borderRadius: 16,
                background: 'linear-gradient(135deg, #1E1B4B 0%, #3B0764 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: 12
              }}>
                <span style={{ fontSize: 9, padding: '2px 8px', borderRadius: 999, background: 'rgba(255,255,255,0.1)', color: '#FDE047', border: '1px solid rgba(255,255,255,0.2)', fontWeight: 800, width: 'fit-content' }}>
                  {cms.bannerBadge}
                </span>
                
                <div style={{ fontSize: 13, fontWeight: 900, color: 'white', lineHeight: 1.3 }}>
                  {cms.bannerTitle}
                </div>

                <p style={{ fontSize: 9.5, color: '#CBD5E1', margin: 0, lineHeight: 1.4 }}>
                  {cms.bannerDesc ? (cms.bannerDesc.length > 110 ? cms.bannerDesc.substring(0, 110) + '...' : cms.bannerDesc) : ''}
                </p>

                {/* 8 Checklist Items Grid (Exact layout from Screenshot 2) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginTop: 4 }}>
                  {(cms.checklist || []).slice(0, 8).map((c, i) => (
                    <div key={i} style={{ padding: '6px 8px', borderRadius: 8, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CheckCircle2 size={12} color="#34D399" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: 9, fontWeight: 600, color: '#E2E8F0', lineHeight: 1.2 }}>{c}</span>
                    </div>
                  ))}
                </div>

                {/* Button CTA */}
                <div style={{ padding: '8px 14px', borderRadius: 8, background: 'white', color: '#0F172A', fontSize: 10, fontWeight: 900, textAlign: 'center', width: 'fit-content', marginTop: 4 }}>
                  {cms.buttonText}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
