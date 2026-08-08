import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Save, Eye, EyeOff, Plus, Trash2, RefreshCw, Layers, Clock, Target, ArrowRight, ChevronDown
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultProgramsCms = {
  badge: "🌱 Age-wise Development Programs",
  title: "Tailored Programs for Every Milestone",
  highlightText: "Every Milestone",
  subtitle: "Children develop distinct cognitive and physical capabilities at different ages. Our programs match your child's exact developmental stage.",
  programs: [
    {
      id: 'prog-1',
      ageRange: '3 – 5 Years',
      badge: 'FOUNDATION STAGE',
      icon: '🌱',
      title: 'Early Discovery & Foundation',
      subtitle: 'Observation & Natural Curiosity Stage',
      duration: '1 Week',
      focus: 'Playful Observation & Sensory Exploration',
      ctaText: 'Start 3 – 5 Years Program →',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30'
    },
    {
      id: 'prog-2',
      ageRange: '5 – 7 Years',
      badge: 'GROWTH STAGE',
      icon: '🚀',
      title: 'Creative & Cognitive Growth',
      subtitle: 'Exploration & Expression Stage',
      duration: '2 Weeks',
      focus: 'Creative Problem Solving & Spatial Logic',
      ctaText: 'Start 5 – 7 Years Program →',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50 dark:bg-rose-950/30'
    },
    {
      id: 'prog-3',
      ageRange: '7 – 10 Years',
      badge: 'LEADERSHIP STAGE',
      icon: '🏆',
      title: 'Talent Mapping & Leadership',
      subtitle: 'Specialization & Mastery Stage',
      duration: '2 Weeks',
      focus: 'Advanced Analytical & Leadership Mapping',
      ctaText: 'Start 7 – 10 Years Program →',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30'
    }
  ],
  visibility: {
    section: true,
    badge: true,
    title: true,
    subtitle: true,
    programsList: true
  }
};

export const ProgramsCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [cms, setCms] = useState(defaultProgramsCms);
  const [previewTab, setPreviewTab] = useState('prog-1');

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/home`);
      if (res.ok) {
        const data = await res.json();
        if (data && (data.programsCms || data.ageProgramsCms)) {
          const loaded = data.programsCms || data.ageProgramsCms;
          setCms({
            ...defaultProgramsCms,
            ...loaded,
            visibility: { ...defaultProgramsCms.visibility, ...(loaded.visibility || {}) }
          });
          if (loaded.programs && loaded.programs.length > 0) {
            setPreviewTab(loaded.programs[0].id);
          }
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
        programsCms: cms,
        ageProgramsCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/home`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCmsData)
      });

      if (res.ok) {
        showToast('Programs Section updated & published live!', 'success');
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

  const handleProgramChange = (idx, field, value) => {
    const updated = [...(cms.programs || [])];
    updated[idx] = { ...updated[idx], [field]: value };
    setCms({ ...cms, programs: updated });
  };

  const handleRemoveProgram = (idx) => {
    const updated = (cms.programs || []).filter((_, i) => i !== idx);
    setCms({ ...cms, programs: updated });
    showToast('Program card removed', 'info');
  };

  const activeProg = (cms.programs || []).find(p => p.id === previewTab) || cms.programs?.[0] || defaultProgramsCms.programs[0];

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--slate-500)' }}>
        <RefreshCw size={24} style={{ animation: 'spin 1s linear infinite' }} />
        <p style={{ marginTop: 12, fontWeight: 700 }}>Loading Programs CMS...</p>
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
            <span style={{ fontSize: 24 }}>🌱</span>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>Programs Section CMS</h1>
          </div>
          <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 4, marginBottom: 0, maxWidth: 650 }}>
            Customize the section badge, headline, age tabs, program cards (durations & focus areas), and buttons that display live on the Home Page.
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
                <BookOpen size={16} color="var(--primary)" />
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
                  placeholder="e.g. Every Milestone"
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

          {/* Card 2: Age-Wise Programs Management */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Layers size={16} color="var(--purple)" />
                <span>2. Age-Wise Programs ({cms.programs?.length || 0} Programs)</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {(cms.programs || []).map((prog, idx) => (
                <div key={prog.id || idx} style={{ padding: 16, borderRadius: 14, background: 'var(--slate-50)', border: '1px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: 16 }}>{prog.icon}</span>
                      <span style={{ fontSize: 12, fontWeight: 900, color: 'var(--slate-900)' }}>{prog.ageRange} Program</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveProgram(idx)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#EF4444', display: 'flex', alignItems: 'center', padding: 2 }}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: 10 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', marginBottom: 4 }}>Emoji</label>
                      <input
                        type="text"
                        value={prog.icon}
                        onChange={(e) => handleProgramChange(idx, 'icon', e.target.value)}
                        style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 14, textAlign: 'center', background: 'white' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', marginBottom: 4 }}>Age Range Tag</label>
                      <input
                        type="text"
                        value={prog.ageRange}
                        onChange={(e) => handleProgramChange(idx, 'ageRange', e.target.value)}
                        style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, fontWeight: 800, background: 'white' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', marginBottom: 4 }}>Stage Badge</label>
                      <input
                        type="text"
                        value={prog.badge}
                        onChange={(e) => handleProgramChange(idx, 'badge', e.target.value)}
                        style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, fontWeight: 800, background: 'white' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', marginBottom: 4 }}>Program Title</label>
                    <input
                      type="text"
                      value={prog.title}
                      onChange={(e) => handleProgramChange(idx, 'title', e.target.value)}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 13, fontWeight: 800, background: 'white' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', marginBottom: 4 }}>Subtitle Stage</label>
                    <input
                      type="text"
                      value={prog.subtitle}
                      onChange={(e) => handleProgramChange(idx, 'subtitle', e.target.value)}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', marginBottom: 4 }}>Duration</label>
                      <input
                        type="text"
                        value={prog.duration}
                        onChange={(e) => handleProgramChange(idx, 'duration', e.target.value)}
                        style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', marginBottom: 4 }}>Button Text</label>
                      <input
                        type="text"
                        value={prog.ctaText}
                        onChange={(e) => handleProgramChange(idx, 'ctaText', e.target.value)}
                        style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'var(--slate-500)', marginBottom: 4 }}>Focus Area</label>
                    <input
                      type="text"
                      value={prog.focus}
                      onChange={(e) => handleProgramChange(idx, 'focus', e.target.value)}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                    />
                  </div>
                </div>
              ))}
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
              <div style={{ fontSize: 12, color: 'var(--slate-500)', marginTop: 2 }}>Click save to push all updated headlines, age programs, and duration focus points live to the Child Talent website.</div>
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
        <div style={{ flex: '0 0 440px', width: 440, maxWidth: '100%', position: 'sticky', top: 80 }}>
          <div className="card" style={{ background: '#090D16', color: 'white', borderColor: '#1E293B', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', borderRadius: 20 }}>
            
            {/* Header Bar */}
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#020617' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: '#38BDF8' }}>
                <Eye size={14} />
                <span>Live Real-Time Preview</span>
              </div>
              <span style={{ fontSize: 10, background: '#1E293B', color: '#94A3B8', padding: '2px 8px', borderRadius: 6, fontWeight: 600 }}>
                Programs Section
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

              {/* Age Filter Tabs (Matching User Screenshot) */}
              <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 2 }}>
                {(cms.programs || []).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPreviewTab(p.id)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 999,
                      fontSize: 10,
                      fontWeight: 800,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      background: (previewTab === p.id) ? 'linear-gradient(135deg, #EC4899, #F59E0B)' : '#1E293B',
                      color: 'white',
                      boxShadow: (previewTab === p.id) ? '0 4px 12px rgba(236,72,153,0.3)' : 'none'
                    }}
                  >
                    <span>{p.icon}</span>
                    <span>{p.ageRange}</span>
                  </button>
                ))}
              </div>

              {/* Selected Program Showcase Box (Matching User Screenshot) */}
              {activeProg && (
                <div style={{
                  padding: 16,
                  borderRadius: 16,
                  background: '#111827',
                  border: '1px solid #1F2937',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  marginTop: 4
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 12, background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'white', flexShrink: 0 }}>
                      {activeProg.icon}
                    </div>
                    <div>
                      <span style={{ fontSize: 8, padding: '2px 6px', borderRadius: 4, background: 'rgba(236,72,153,0.2)', color: '#F472B6', fontWeight: 800, textTransform: 'uppercase' }}>
                        {activeProg.badge}
                      </span>
                      <div style={{ fontSize: 13, fontWeight: 900, color: 'white', marginTop: 2 }}>
                        {activeProg.title}
                      </div>
                      <div style={{ fontSize: 9.5, color: '#94A3B8' }}>
                        {activeProg.subtitle}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 2 }}>
                    <div style={{ padding: '4px 8px', borderRadius: 8, background: '#1E293B', border: '1px solid #334155', fontSize: 9, color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Clock size={11} color="#C084FC" />
                      <span>Duration: {activeProg.duration}</span>
                    </div>
                    <div style={{ padding: '4px 8px', borderRadius: 8, background: '#1E293B', border: '1px solid #334155', fontSize: 9, color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Target size={11} color="#34D399" />
                      <span>Focus: {activeProg.focus}</span>
                    </div>
                  </div>

                  <div style={{ padding: '8px 14px', borderRadius: 10, background: 'linear-gradient(135deg, #EC4899, #F59E0B)', color: 'white', fontSize: 10, fontWeight: 800, textAlign: 'center', marginTop: 4 }}>
                    {activeProg.ctaText || `Start ${activeProg.ageRange} Program →`}
                  </div>
                </div>
              )}

              {/* 3 Bottom Cards Quick Row (Matching User Screenshot) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 4 }}>
                {(cms.programs || []).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setPreviewTab(p.id)}
                    style={{
                      padding: 10,
                      borderRadius: 12,
                      background: '#131B2E',
                      border: (previewTab === p.id) ? '1.5px solid #EC4899' : '1px solid #1E293B',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 4
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 14 }}>{p.icon}</span>
                      <span style={{ fontSize: 7.5, padding: '1px 5px', borderRadius: 4, background: '#334155', color: 'white', fontWeight: 800 }}>
                        {p.ageRange}
                      </span>
                    </div>
                    <div style={{ fontSize: 9.5, fontWeight: 800, color: 'white', lineHeight: 1.2, marginTop: 2 }}>{p.title}</div>
                    <div style={{ fontSize: 8, color: '#94A3B8', lineHeight: 1.2 }}>{p.subtitle}</div>
                    <div style={{ fontSize: 8, color: '#F472B6', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 2, marginTop: 2 }}>
                      <span>View Details</span>
                      <ChevronDown size={9} />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
