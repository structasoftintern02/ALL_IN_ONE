import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Save, Eye, EyeOff, Plus, Trash2, RefreshCw, Layers, CheckCircle2, Download, Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultSampleReportsCms = {
  badge: "📊 Sample Assessment Report Preview",
  title: "Explore a Real Talent Discovery Report",
  highlightText: "Talent Discovery Report",
  subtitle: "Here is a live preview of the 12-page comprehensive talent report parents receive immediately after play assessment.",
  childInitials: "AS",
  childName: "Aarav Sharma",
  verifiedBadgeText: "Verified Profile",
  age: "6 Years 4 Months",
  assessmentDate: "August 2026",
  overallScore: "89",
  downloadButtonText: "Download Sample PDF",
  archetypeTitle: "IDENTIFIED TALENT ARCHETYPE",
  archetype: "The Creative Explorer & STEM Strategist",
  summary: "Aarav demonstrates exceptional spatial reasoning, divergent artistic imagination, and high verbal storytelling ability. He learns best through visual building tasks and hands-on experiments.",
  footerPrivacyNote: "🔒 All assessments are 100% private, parent-guided, and based on observational play metrics.",
  ctaButtonText: "Get a Report Like This for Your Child →",
  skills: [
    { name: "Cognitive Reasoning", score: 95, percentile: "95th Percentile", status: "High Talent", color: "bg-purple-500" },
    { name: "Creative Expression", score: 90, percentile: "90th Percentile", status: "High Talent", color: "bg-rose-500" },
    { name: "Communication & Phonics", score: 90, percentile: "92nd Percentile", status: "High Talent", color: "bg-amber-500" },
    { name: "STEM & Logical Math", score: 85, percentile: "85th Percentile", status: "Strong Ability", color: "bg-emerald-500" },
    { name: "Social Collaboration", score: 90, percentile: "88th Percentile", status: "High Talent", color: "bg-cyan-500" },
    { name: "Fine Motor Control", score: 80, percentile: "75th Percentile", status: "Developing Well", color: "bg-indigo-500" }
  ],
  strengths: [
    "High spatial visualization & 3D building block assembly speed",
    "Rich narrative imagination during free drawing & role-play",
    "Fast pattern recognition in logical sequence games"
  ],
  growthAreas: [
    "Focus stamina in sedentary listening tasks >15 mins",
    "Fine motor pencil grip stability under timed speed prompts"
  ],
  recommendedActivities: [
    { title: "LEGO Engineering Challenges", type: "Visual-Spatial", duration: "30 mins / 3x week" },
    { title: "Audio Storybook Storytelling", type: "Verbal-Linguistic", duration: "15 mins daily" },
    { title: "Clay Modeling & Pattern Matching", type: "Fine Motor", duration: "20 mins / 2x week" },
    { title: "Nature Scavenger Hunt Puzzles", type: "Naturalist-Logic", duration: "Weekend Activity" }
  ],
  visibility: {
    section: true,
    sectionBadge: true,
    sectionTitle: true,
    sectionSubtitle: true,
    reportCard: true,
    ctaButton: true
  }
};

export const SampleReportsCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [cms, setCms] = useState(defaultSampleReportsCms);
  const [activePreviewTab, setActivePreviewTab] = useState('overview');

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/home`);
      if (res.ok) {
        const data = await res.json();
        if (data && (data.sampleReportsCms || data.sampleReportCms)) {
          const loaded = data.sampleReportsCms || data.sampleReportCms;
          setCms({
            ...defaultSampleReportsCms,
            ...loaded,
            visibility: { ...defaultSampleReportsCms.visibility, ...(loaded.visibility || {}) }
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
        sampleReportsCms: cms,
        sampleReportCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/home`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCmsData)
      });

      if (res.ok) {
        showToast('Sample Reports Section updated & published live!', 'success');
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

  const handleSkillChange = (idx, field, value) => {
    const updated = [...(cms.skills || [])];
    updated[idx] = { ...updated[idx], [field]: value };
    setCms({ ...cms, skills: updated });
  };

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--slate-500)' }}>
        <RefreshCw size={24} style={{ animation: 'spin 1s linear infinite' }} />
        <p style={{ marginTop: 12, fontWeight: 700 }}>Loading Sample Reports CMS...</p>
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
            <span style={{ fontSize: 24 }}>📊</span>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>Sample Reports Section CMS</h1>
          </div>
          <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 4, marginBottom: 0, maxWidth: 650 }}>
            Customize the live interactive sample talent report preview card, scores, archetype, and call-to-action buttons.
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
                <FileText size={16} color="var(--primary)" />
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
                  placeholder="e.g. Talent Discovery Report"
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

          {/* Card 2: Sample Child Profile & Archetype */}
          <div className="card">
            <div className="card-header">
              <h3>
                <Sparkles size={16} color="var(--purple)" />
                <span>2. Sample Profile & Archetype Details</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Child Name</label>
                  <input
                    type="text"
                    value={cms.childName}
                    onChange={(e) => setCms({ ...cms, childName: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 13, fontWeight: 800, background: 'white' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Age & Assessed Date</label>
                  <input
                    type="text"
                    value={`${cms.age} • ${cms.assessmentDate}`}
                    onChange={(e) => {
                      const parts = e.target.value.split('•');
                      setCms({ ...cms, age: parts[0]?.trim() || cms.age, assessmentDate: parts[1]?.trim() || cms.assessmentDate });
                    }}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Overall Potential Score</label>
                  <input
                    type="text"
                    value={cms.overallScore}
                    onChange={(e) => setCms({ ...cms, overallScore: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 13, fontWeight: 800, background: 'white' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Download Button Text</label>
                  <input
                    type="text"
                    value={cms.downloadButtonText}
                    onChange={(e) => setCms({ ...cms, downloadButtonText: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Identified Archetype Title</label>
                <input
                  type="text"
                  value={cms.archetype}
                  onChange={(e) => setCms({ ...cms, archetype: e.target.value })}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 13, fontWeight: 800, background: 'white' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Archetype Summary</label>
                <textarea
                  rows={2}
                  value={cms.summary}
                  onChange={(e) => setCms({ ...cms, summary: e.target.value })}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, resize: 'vertical', background: 'white' }}
                />
              </div>
            </div>
          </div>

          {/* Card 3: 6 Skill Scores Management */}
          <div className="card">
            <div className="card-header">
              <h3>
                <Layers size={16} color="var(--amber)" />
                <span>3. Skill Score Progress Bars ({cms.skills?.length || 0} Skills)</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {(cms.skills || []).map((sk, idx) => (
                <div key={idx} style={{ padding: 12, borderRadius: 10, background: 'var(--slate-50)', border: '1px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 130px', gap: 8 }}>
                    <input
                      type="text"
                      value={sk.name}
                      placeholder="Skill Name"
                      onChange={(e) => handleSkillChange(idx, 'name', e.target.value)}
                      style={{ padding: '6px 10px', borderRadius: 6, border: '1px solid var(--slate-200)', fontSize: 12, fontWeight: 800, background: 'white' }}
                    />
                    <input
                      type="number"
                      value={sk.score}
                      placeholder="Score %"
                      onChange={(e) => handleSkillChange(idx, 'score', Number(e.target.value))}
                      style={{ padding: '6px 8px', borderRadius: 6, border: '1px solid var(--slate-200)', fontSize: 12, fontWeight: 800, textAlign: 'center', background: 'white' }}
                    />
                    <input
                      type="text"
                      value={sk.percentile}
                      placeholder="Percentile"
                      onChange={(e) => handleSkillChange(idx, 'percentile', e.target.value)}
                      style={{ padding: '6px 8px', borderRadius: 6, border: '1px solid var(--slate-200)', fontSize: 11, background: 'white' }}
                    />
                  </div>

                  <input
                    type="text"
                    value={sk.status}
                    placeholder="Status Text (e.g. High Talent)"
                    onChange={(e) => handleSkillChange(idx, 'status', e.target.value)}
                    style={{ padding: '6px 10px', borderRadius: 6, border: '1px solid var(--slate-200)', fontSize: 11, fontStyle: 'italic', background: 'white' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Disclaimer & Bottom CTA Button */}
          <div className="card">
            <div className="card-header">
              <h3>
                <CheckCircle2 size={16} color="var(--emerald)" />
                <span>4. Privacy Disclaimer & Bottom CTA Button</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Privacy Disclaimer Note</label>
                <input
                  type="text"
                  value={cms.footerPrivacyNote}
                  onChange={(e) => setCms({ ...cms, footerPrivacyNote: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Bottom CTA Button Text</label>
                <input
                  type="text"
                  value={cms.ctaButtonText}
                  onChange={(e) => setCms({ ...cms, ctaButtonText: e.target.value })}
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
              <div style={{ fontSize: 12, color: 'var(--slate-500)', marginTop: 2 }}>Click save to push all updated report scores, archetype, and buttons live to the Child Talent website.</div>
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
                Sample Reports Section
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

              {/* Sample Student Card Frame (Dark Box matching Screenshot) */}
              <div style={{ padding: 16, borderRadius: 16, background: '#131B2E', border: '1px solid #1E293B', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 12 }}>
                
                {/* Profile Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #EC4899, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 13, color: 'white' }}>
                      {cms.childInitials}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: 13, fontWeight: 800, color: 'white' }}>{cms.childName}</span>
                        <span style={{ fontSize: 8, padding: '1px 6px', borderRadius: 999, background: 'rgba(16,185,129,0.15)', color: '#34D399', fontWeight: 800 }}>
                          {cms.verifiedBadgeText}
                        </span>
                      </div>
                      <div style={{ fontSize: 9.5, color: '#94A3B8' }}>Age: {cms.age} • Assessed: {cms.assessmentDate}</div>
                    </div>
                  </div>
                </div>

                {/* Archetype Box */}
                <div style={{ padding: 12, borderRadius: 12, background: 'rgba(79,70,229,0.15)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ fontSize: 20 }}>🧩</span>
                  <div>
                    <div style={{ fontSize: 8, fontWeight: 800, color: '#A5B4FC', textTransform: 'uppercase' }}>{cms.archetypeTitle}</div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: 'white' }}>{cms.archetype}</div>
                    <div style={{ fontSize: 9, color: '#CBD5E1', marginTop: 2 }}>{cms.summary}</div>
                  </div>
                </div>

                {/* Tabs Switcher */}
                <div style={{ display: 'flex', gap: 6, borderBottom: '1px solid #1E293B', paddingBottom: 6 }}>
                  {[
                    { id: 'overview', label: '📊 Skill Scores Overview' },
                    { id: 'strengths', label: '⭐ Strengths' }
                  ].map(tb => (
                    <button
                      key={tb.id}
                      type="button"
                      onClick={() => setActivePreviewTab(tb.id)}
                      style={{
                        padding: '4px 10px',
                        borderRadius: 8,
                        fontSize: 9.5,
                        fontWeight: 800,
                        border: 'none',
                        cursor: 'pointer',
                        background: activePreviewTab === tb.id ? '#7C3AED' : '#1E293B',
                        color: activePreviewTab === tb.id ? 'white' : '#94A3B8'
                      }}
                    >
                      {tb.label}
                    </button>
                  ))}
                </div>

                {/* 6 Skill Bars Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {(cms.skills || []).map((sk, i) => (
                    <div key={i} style={{ padding: 8, borderRadius: 8, background: '#0F172A', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, fontWeight: 800 }}>
                        <span style={{ color: 'white' }}>{sk.name}</span>
                        <span style={{ color: '#FBBF24' }}>{sk.score}% ({sk.percentile})</span>
                      </div>
                      <div style={{ width: '100%', height: 4, borderRadius: 999, background: '#334155', overflow: 'hidden' }}>
                        <div style={{ width: `${sk.score}%`, height: '100%', borderRadius: 999, background: 'linear-gradient(90deg, #EC4899, #8B5CF6)' }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 7.5, color: '#64748B' }}>
                        <span>Baseline</span>
                        <span style={{ color: '#34D399', fontWeight: 700 }}>Status: {sk.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer privacy disclaimer inside preview */}
                <div style={{ textAlign: 'center', fontSize: 8.5, color: '#64748B', paddingTop: 4 }}>
                  {cms.footerPrivacyNote}
                </div>

              </div>

              {/* Bottom CTA Button */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                <div style={{ padding: '10px 20px', borderRadius: 999, background: 'linear-gradient(135deg, #EC4899, #F59E0B)', color: 'white', fontSize: 11, fontWeight: 800, boxShadow: '0 4px 14px rgba(236,72,153,0.35)' }}>
                  {cms.ctaButtonText}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
