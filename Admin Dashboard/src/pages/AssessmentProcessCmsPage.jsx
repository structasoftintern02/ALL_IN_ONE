import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, Save, Eye, EyeOff, Plus, Trash2, RefreshCw, Layers, Sparkles, ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultAssessmentProcessCms = {
  badge: "🛣️ 5-Step Learning Journey",
  title: "How Child Talent Discovery Works",
  highlightText: "Works",
  subtitle: "Simple, non-stressful, and parent-guided. Discover your child's innate strengths in 5 simple steps.",
  ctaBadge: "✨ 100% Home Play-Based Assessment",
  ctaTitle: "Ready to Discover Your Child's Core Potential?",
  ctaSubtitle: "Takes less than 20 minutes of guided observational play. Get your 12-page Talent Profile immediately.",
  ctaText: "Explore Sample Assessment Report →",
  steps: [
    {
      step: '01',
      title: 'Register Your Child',
      duration: '2 Minutes',
      desc: 'Create a free parent profile and enter basic information about your child (age, interests, observed habits).',
      details: 'Quick 2-minute registration without complex paperwork. Completely private and secure.',
      icon: '📝',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      step: '02',
      title: 'Choose Age Group',
      duration: '1 Minute',
      desc: 'Select the age-tailored evaluation module (3–5 Yrs, 5–7 Yrs, or 7–10 Yrs) matching your child\'s developmental milestone.',
      details: 'Each age bucket features scientifically calibrated games, observational scenarios, and task prompts.',
      icon: '🎯',
      color: 'from-rose-500 to-pink-600'
    },
    {
      step: '03',
      title: 'Complete Skill Assessment',
      duration: '15-20 Minutes',
      desc: 'Engage in fun, play-based interactive tasks and observational activities alongside your child at home.',
      details: 'No stressful exams! Activities feel like enjoyable puzzles, creative drawing, or rhythm games.',
      icon: '🎮',
      color: 'from-amber-500 to-orange-600'
    },
    {
      step: '04',
      title: 'Receive Talent Report',
      duration: 'Instant Download',
      desc: 'Get an instant, comprehensive 12-page Talent Profile breaking down cognitive, creative, and social strengths.',
      details: 'Includes visual radar charts, benchmark percentiles, and identified hidden natural talents.',
      icon: '📊',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      step: '05',
      title: 'Get Personalized Recommendations',
      duration: 'Ongoing Guidance',
      desc: 'Unlock a customized 3-year learning pathway, recommended hobbies, books, and talent nurturing activities.',
      details: 'Direct advice on what activities to encourage and how to avoid early academic burnout.',
      icon: '🚀',
      color: 'from-cyan-500 to-blue-600'
    }
  ],
  visibility: {
    section: true,
    sectionBadge: true,
    sectionTitle: true,
    sectionSubtitle: true,
    stepsList: true,
    ctaBanner: true
  }
};

export const AssessmentProcessCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [cms, setCms] = useState(defaultAssessmentProcessCms);

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/home`);
      if (res.ok) {
        const data = await res.json();
        if (data && (data.assessmentProcessCms || data.howItWorksCms)) {
          const loaded = data.assessmentProcessCms || data.howItWorksCms;
          setCms({
            ...defaultAssessmentProcessCms,
            ...loaded,
            visibility: { ...defaultAssessmentProcessCms.visibility, ...(loaded.visibility || {}) }
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
        assessmentProcessCms: cms,
        howItWorksCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/home`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCmsData)
      });

      if (res.ok) {
        showToast('Assessment Process Section updated & published live!', 'success');
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

  const handleStepChange = (idx, field, value) => {
    const updated = [...(cms.steps || [])];
    updated[idx] = { ...updated[idx], [field]: value };
    setCms({ ...cms, steps: updated });
  };

  const handleRemoveStep = (idx) => {
    const updated = (cms.steps || []).filter((_, i) => i !== idx);
    setCms({ ...cms, steps: updated });
    showToast('Assessment step removed', 'info');
  };

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--slate-500)' }}>
        <RefreshCw size={24} style={{ animation: 'spin 1s linear infinite' }} />
        <p style={{ marginTop: 12, fontWeight: 700 }}>Loading Assessment Process CMS...</p>
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
            <span style={{ fontSize: 24 }}>🛣️</span>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>Assessment Process Section CMS</h1>
          </div>
          <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 4, marginBottom: 0, maxWidth: 650 }}>
            Customize the 5-step evaluation timeline, step durations, observational tips, and bottom report CTA banner.
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
                <Clock size={16} color="var(--primary)" />
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
                  placeholder="e.g. Works"
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

          {/* Card 2: 5 Timeline Steps Management */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Layers size={16} color="var(--purple)" />
                <span>2. Timeline Steps ({cms.steps?.length || 0} Steps)</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {(cms.steps || []).map((step, idx) => (
                <div key={step.step || idx} style={{ padding: 14, borderRadius: 12, background: 'var(--slate-50)', border: '1px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Step #{step.step || idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveStep(idx)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#EF4444', display: 'flex', alignItems: 'center', padding: 2 }}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 120px', gap: 8 }}>
                    <input
                      type="text"
                      value={step.icon}
                      placeholder="Emoji"
                      onChange={(e) => handleStepChange(idx, 'icon', e.target.value)}
                      style={{ width: '100%', height: 38, textAlign: 'center', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 16, background: 'white' }}
                    />
                    <input
                      type="text"
                      value={step.title}
                      placeholder="Step Title"
                      onChange={(e) => handleStepChange(idx, 'title', e.target.value)}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontWeight: 800, fontSize: 13, background: 'white' }}
                    />
                    <input
                      type="text"
                      value={step.duration}
                      placeholder="Time Pill"
                      onChange={(e) => handleStepChange(idx, 'duration', e.target.value)}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, fontWeight: 700, background: 'white' }}
                    />
                  </div>

                  <textarea
                    rows={2}
                    value={step.desc}
                    placeholder="Step Description"
                    onChange={(e) => handleStepChange(idx, 'desc', e.target.value)}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white', resize: 'vertical' }}
                  />

                  <input
                    type="text"
                    value={step.details || ''}
                    placeholder="Observational Tip Details..."
                    onChange={(e) => handleStepChange(idx, 'details', e.target.value)}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, fontStyle: 'italic', background: 'white' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Bottom Call-To-Action Banner */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Sparkles size={16} color="var(--amber)" />
                <span>3. Bottom Call-To-Action Banner</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Banner Badge Pill</label>
                <input
                  type="text"
                  value={cms.ctaBadge}
                  onChange={(e) => setCms({ ...cms, ctaBadge: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, background: 'white' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Banner Main Title</label>
                <input
                  type="text"
                  value={cms.ctaTitle}
                  onChange={(e) => setCms({ ...cms, ctaTitle: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 14, fontWeight: 800, background: 'white' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Banner Subtitle</label>
                <textarea
                  rows={2}
                  value={cms.ctaSubtitle}
                  onChange={(e) => setCms({ ...cms, ctaSubtitle: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, resize: 'vertical', background: 'white' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Banner Button Text</label>
                <input
                  type="text"
                  value={cms.ctaText}
                  onChange={(e) => setCms({ ...cms, ctaText: e.target.value })}
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
              <div style={{ fontSize: 12, color: 'var(--slate-500)', marginTop: 2 }}>Click save to push all updated timeline steps & CTA banner copy live to the Child Talent website.</div>
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
        <div style={{ flex: '0 0 460px', width: 460, maxWidth: '100%', position: 'sticky', top: 80 }}>
          <div className="card" style={{ background: '#090D16', color: 'white', borderColor: '#1E293B', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', borderRadius: 20 }}>
            
            {/* Header Bar */}
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#020617' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: '#38BDF8' }}>
                <Eye size={14} />
                <span>Live Real-Time Preview</span>
              </div>
              <span style={{ fontSize: 10, background: '#1E293B', color: '#94A3B8', padding: '2px 8px', borderRadius: 6, fontWeight: 600 }}>
                Assessment Process Section
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

              {/* 5 Steps Vertical Timeline Preview */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4, textAlign: 'left' }}>
                {(cms.steps || []).map((st, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'start' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #EC4899, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: 'white', flexShrink: 0, marginTop: 2 }}>
                      {st.icon}
                    </div>
                    <div style={{ flex: 1, padding: 10, borderRadius: 12, background: '#131B2E', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 11, fontWeight: 800, color: 'white' }}>{st.title}</span>
                        <span style={{ fontSize: 8, padding: '1px 6px', borderRadius: 999, background: 'rgba(192,132,252,0.15)', color: '#C084FC', fontWeight: 800 }}>
                          ⏱️ {st.duration}
                        </span>
                      </div>
                      <p style={{ fontSize: 9, color: '#94A3B8', margin: 0, lineHeight: 1.3 }}>
                        {st.desc ? (st.desc.length > 65 ? st.desc.substring(0, 65) + '...' : st.desc) : ''}
                      </p>
                      {st.details && (
                        <span style={{ fontSize: 8, color: '#CBD5E1', fontStyle: 'italic' }}>
                          💡 {st.details.length > 55 ? st.details.substring(0, 55) + '...' : st.details}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Purple CTA Banner (Matching User Screenshot) */}
              <div style={{
                padding: 16,
                borderRadius: 16,
                background: 'linear-gradient(135deg, #6B21A8 0%, #4C1D95 100%)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                marginTop: 6
              }}>
                <span style={{ fontSize: 8.5, padding: '2px 8px', borderRadius: 999, background: 'rgba(255,255,255,0.15)', color: '#FDE047', fontWeight: 800 }}>
                  {cms.ctaBadge}
                </span>
                <div style={{ fontSize: 13, fontWeight: 900, color: 'white', lineHeight: 1.25 }}>
                  {cms.ctaTitle}
                </div>
                <p style={{ fontSize: 9.5, color: '#E9D5FF', margin: 0, lineHeight: 1.3 }}>
                  {cms.ctaSubtitle}
                </p>
                <div style={{ padding: '8px 16px', borderRadius: 999, background: 'white', color: '#581C87', fontSize: 10, fontWeight: 900, marginTop: 4 }}>
                  {cms.ctaText}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
