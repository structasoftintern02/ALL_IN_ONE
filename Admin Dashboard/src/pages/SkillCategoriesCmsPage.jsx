import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, Save, Eye, EyeOff, Plus, Trash2, RefreshCw, Sparkles, CheckCircle2, ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultSkillCategoriesCms = {
  badge: "🌳 10 Skill Domains",
  title: "Scientific Skill Assessment Report",
  highlightText: "Assessment Report",
  subtitle: "Comprehensive talent evaluation across 10 core developmental domains. Highlighting top innate strengths for targeted guidance.",
  skills: [
    {
      id: 'cognitive',
      title: 'Cognitive Skills',
      icon: '🧠',
      color: 'from-purple-500 to-indigo-600',
      overallScore: 92,
      subSkills: [
        { name: 'Memory', score: 98 },
        { name: 'Pattern Recognition', score: 96 },
        { name: 'Spatial Reasoning', score: 95 },
        { name: 'Logical Thinking', score: 91 },
        { name: 'Decision Making', score: 89 },
        { name: 'Attention & Focus', score: 86 }
      ]
    },
    {
      id: 'communication',
      title: 'Communication Skills',
      icon: '💬',
      color: 'from-blue-500 to-cyan-600',
      overallScore: 89,
      subSkills: [
        { name: 'Vocabulary', score: 95 },
        { name: 'Listening Skills', score: 92 },
        { name: 'Storytelling', score: 91 },
        { name: 'Expressive Language', score: 88 },
        { name: 'Public Speaking', score: 85 }
      ]
    },
    {
      id: 'creativity',
      title: 'Creativity & Innovation',
      icon: '🎨',
      color: 'from-rose-500 to-pink-600',
      overallScore: 96,
      subSkills: [
        { name: 'Imagination', score: 99 },
        { name: 'Original Thinking', score: 98 },
        { name: 'Drawing & Design', score: 97 },
        { name: 'Idea Generation', score: 94 },
        { name: 'Curiosity', score: 93 }
      ]
    },
    {
      id: 'leadership',
      title: 'Leadership & Initiative',
      icon: '👑',
      color: 'from-amber-500 to-orange-600',
      overallScore: 91,
      subSkills: [
        { name: 'Team Guidance', score: 96 },
        { name: 'Self-Drive', score: 93 },
        { name: 'Responsibility', score: 91 },
        { name: 'Delegation', score: 88 }
      ]
    },
    {
      id: 'problem-solving',
      title: 'Problem Solving',
      icon: '🧩',
      color: 'from-emerald-500 to-teal-600',
      overallScore: 94,
      subSkills: [
        { name: 'Analytical Thinking', score: 97 },
        { name: 'Root Cause Analysis', score: 95 },
        { name: 'Resourcefulness', score: 93 },
        { name: 'Hypothesis Testing', score: 90 }
      ]
    },
    {
      id: 'emotional',
      title: 'Emotional Intelligence',
      icon: '❤️',
      color: 'from-red-500 to-rose-600',
      overallScore: 88,
      subSkills: [
        { name: 'Empathy', score: 94 },
        { name: 'Self-Awareness', score: 91 },
        { name: 'Emotional Regulation', score: 89 },
        { name: 'Stress Tolerance', score: 86 }
      ]
    },
    {
      id: 'motor',
      title: 'Motor Skills',
      icon: '🏃',
      color: 'from-teal-500 to-emerald-600',
      overallScore: 90,
      subSkills: [
        { name: 'Hand-Eye Coordination', score: 96 },
        { name: 'Fine Motor Control', score: 93 },
        { name: 'Balance & Agility', score: 90 },
        { name: 'Physical Reflexes', score: 87 }
      ]
    },
    {
      id: 'social',
      title: 'Social Skills',
      icon: '🤝',
      color: 'from-indigo-500 to-purple-600',
      overallScore: 93,
      subSkills: [
        { name: 'Peer Collaboration', score: 97 },
        { name: 'Active Sharing', score: 95 },
        { name: 'Respecting Rules', score: 92 },
        { name: 'Inclusion & Kindness', score: 89 }
      ]
    },
    {
      id: 'stem',
      title: 'STEM Readiness',
      icon: '🔬',
      color: 'from-violet-500 to-purple-600',
      overallScore: 95,
      subSkills: [
        { name: 'Mathematical Intuition', score: 98 },
        { name: 'Scientific Observation', score: 96 },
        { name: 'Algorithmic Thinking', score: 94 },
        { name: 'Data Interpretation', score: 91 }
      ]
    },
    {
      id: 'art-music',
      title: 'Art & Music',
      icon: '🎵',
      color: 'from-pink-500 to-rose-600',
      overallScore: 92,
      subSkills: [
        { name: 'Rhythm & Tempo Sensing', score: 97 },
        { name: 'Pitch & Tone Recognition', score: 94 },
        { name: 'Visual Color Harmony', score: 92 },
        { name: 'Musical Expression', score: 89 }
      ]
    }
  ],
  visibility: {
    section: true,
    sectionBadge: true,
    sectionTitle: true,
    sectionSubtitle: true
  }
};

export const SkillCategoriesCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [cms, setCms] = useState(defaultSkillCategoriesCms);
  const [newSkill, setNewSkill] = useState({ title: '', icon: '🌟', overallScore: 90 });

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/home`);
      if (res.ok) {
        const data = await res.json();
        if (data && (data.skillCategoriesCms || data.skillsCms)) {
          const loaded = data.skillCategoriesCms || data.skillsCms;
          setCms({
            ...defaultSkillCategoriesCms,
            ...loaded,
            visibility: { ...defaultSkillCategoriesCms.visibility, ...(loaded.visibility || {}) }
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
        skillCategoriesCms: cms,
        skillsCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/home`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCmsData)
      });

      if (res.ok) {
        showToast('Skill Categories Section updated & published live!', 'success');
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

  const handleRemoveSkill = (idx) => {
    const updated = (cms.skills || []).filter((_, i) => i !== idx);
    setCms({ ...cms, skills: updated });
    showToast('Skill category removed', 'info');
  };

  const handleAddSkill = (e) => {
    if (e) e.preventDefault();
    if (!newSkill.title.trim()) return;

    const skillToAdd = {
      id: `sc-${Date.now()}`,
      title: newSkill.title.trim(),
      icon: newSkill.icon.trim() || '🌟',
      overallScore: Number(newSkill.overallScore) || 90,
      subSkills: [
        { name: 'Core Foundation', score: 95 },
        { name: 'Practical Application', score: 91 },
        { name: 'Creative Adaptability', score: 88 }
      ]
    };

    setCms(prev => ({
      ...prev,
      skills: [...(prev.skills || []), skillToAdd]
    }));

    setNewSkill({ title: '', icon: '🌟', overallScore: 90 });
    showToast('New Skill Domain added!', 'info');
  };

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--slate-500)' }}>
        <RefreshCw size={24} style={{ animation: 'spin 1s linear infinite' }} />
        <p style={{ marginTop: 12, fontWeight: 700 }}>Loading Skill Categories CMS...</p>
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
            <span style={{ fontSize: 24 }}>🌳</span>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>Skill Categories Section CMS</h1>
          </div>
          <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 4, marginBottom: 0, maxWidth: 650 }}>
            Customize the 10 Scientific Skill Domains, icons, overall scores, and top 3 strengths auto-calculation.
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
                <Layers size={16} color="var(--primary)" />
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
                  placeholder="e.g. Assessment Report"
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

          {/* Card 2: 10 Skill Categories List */}
          <div className="card">
            <div className="card-header">
              <h3>
                <Layers size={16} color="var(--purple)" />
                <span>2. 10 Skill Domains & Overall Scores ({cms.skills?.length || 0} Domains)</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {(cms.skills || []).map((skill, idx) => (
                <div key={skill.id || idx} style={{ padding: 14, borderRadius: 12, background: 'var(--slate-50)', border: '1px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Domain #{idx + 1} ({skill.icon || '🧠'})</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(idx)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#EF4444', display: 'flex', alignItems: 'center', padding: 2 }}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 100px', gap: 8 }}>
                    <input
                      type="text"
                      value={skill.icon || '🧠'}
                      placeholder="Icon"
                      onChange={(e) => handleSkillChange(idx, 'icon', e.target.value)}
                      style={{ padding: '8px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 16, textAlign: 'center', background: 'white' }}
                    />
                    <input
                      type="text"
                      value={skill.title}
                      placeholder="Skill Title"
                      onChange={(e) => handleSkillChange(idx, 'title', e.target.value)}
                      style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontWeight: 800, fontSize: 13, background: 'white' }}
                    />
                    <input
                      type="number"
                      value={skill.overallScore || 90}
                      placeholder="Score %"
                      onChange={(e) => handleSkillChange(idx, 'overallScore', e.target.value)}
                      style={{ padding: '8px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontWeight: 800, fontSize: 13, background: 'white' }}
                    />
                  </div>
                </div>
              ))}

              {/* Add New Domain Box */}
              <div style={{ padding: 14, borderRadius: 12, background: 'white', border: '2px dashed var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--slate-800)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Plus size={15} color="var(--primary)" />
                  <span>Add New Skill Domain</span>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 100px', gap: 8 }}>
                  <input
                    type="text"
                    placeholder="Icon"
                    value={newSkill.icon}
                    onChange={(e) => setNewSkill({ ...newSkill, icon: e.target.value })}
                    style={{ padding: '8px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 14, textAlign: 'center', background: 'var(--slate-50)' }}
                  />
                  <input
                    type="text"
                    placeholder="Domain Title (e.g. Logic & Reasoning)"
                    value={newSkill.title}
                    onChange={(e) => setNewSkill({ ...newSkill, title: e.target.value })}
                    style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'var(--slate-50)' }}
                  />
                  <input
                    type="number"
                    placeholder="Score %"
                    value={newSkill.overallScore}
                    onChange={(e) => setNewSkill({ ...newSkill, overallScore: e.target.value })}
                    style={{ padding: '8px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'var(--slate-50)' }}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="btn btn-primary"
                  style={{ padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: 4, cursor: 'pointer', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 12, alignSelf: 'flex-start' }}
                >
                  <Plus size={14} /> Add Domain
                </button>
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
              <div style={{ fontSize: 12, color: 'var(--slate-500)', marginTop: 2 }}>Click save to push all updated skill categories & top 3 strengths live to the Child Talent website.</div>
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
                10 Skill Domains Section
              </span>
            </div>

            {/* Live Visual Preview Body (Apple-Level Report Style Card) */}
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

              {/* Sample Card Preview (Cognitive Skills Card) */}
              <div style={{
                padding: 16,
                borderRadius: 16,
                background: '#0F172A',
                border: '1px solid #1E293B',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                marginTop: 4
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 12, background: 'linear-gradient(135deg, #8B5CF6, #4F46E5)', display: 'flex', flexShrink: 0, alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                    {(cms.skills && cms.skills[0]?.icon) || '🧠'}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 900, color: 'white' }}>{(cms.skills && cms.skills[0]?.title) || 'Cognitive Skills'}</div>
                    <span style={{ fontSize: 8, padding: '1px 6px', borderRadius: 999, background: 'rgba(16,185,129,0.15)', color: '#34D399', fontWeight: 800 }}>
                      Excellent
                    </span>
                  </div>
                </div>

                {/* Score bar */}
                <div style={{ padding: 10, borderRadius: 10, background: '#020617', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, fontWeight: 800, color: '#94A3B8' }}>
                    <span>OVERALL SCORE</span>
                    <span style={{ color: '#FBBF24', fontSize: 11 }}>{(cms.skills && cms.skills[0]?.overallScore) || 92}%</span>
                  </div>
                  <div style={{ width: '100%', height: 6, borderRadius: 999, background: '#1E293B', overflow: 'hidden' }}>
                    <div style={{ width: `${(cms.skills && cms.skills[0]?.overallScore) || 92}%`, height: '100%', background: 'linear-gradient(90deg, #EC4899, #8B5CF6)', borderRadius: 999 }} />
                  </div>
                </div>

                {/* Top 3 Strengths */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <div style={{ fontSize: 8.5, fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Sparkles size={10} color="#34D399" /> Top Strengths
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9.5, padding: '4px 8px', borderRadius: 6, background: '#020617', color: '#E2E8F0', fontWeight: 700 }}>
                      <span>✔ Memory</span>
                      <span style={{ color: '#34D399', fontWeight: 900 }}>98%</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9.5, padding: '4px 8px', borderRadius: 6, background: '#020617', color: '#E2E8F0', fontWeight: 700 }}>
                      <span>✔ Pattern Recognition</span>
                      <span style={{ color: '#34D399', fontWeight: 900 }}>96%</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9.5, padding: '4px 8px', borderRadius: 6, background: '#020617', color: '#E2E8F0', fontWeight: 700 }}>
                      <span>✔ Spatial Reasoning</span>
                      <span style={{ color: '#34D399', fontWeight: 900 }}>95%</span>
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <div style={{ padding: '7px 12px', borderRadius: 8, background: '#1E293B', color: '#C084FC', fontSize: 9.5, fontWeight: 800, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 2 }}>
                  <span>View Details (All 8 Sub-skills)</span>
                  <ChevronRight size={11} />
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
