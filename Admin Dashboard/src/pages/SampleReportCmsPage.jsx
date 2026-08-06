import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Save, Eye, EyeOff, Plus, Trash2, Edit3, X, RefreshCw, Layers, ShieldCheck, BookOpen, Clock, Target, CheckCircle2, ArrowRight, Layout, Check, Award, BarChart3, User, AlertCircle, FileText, Download
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultSampleReportCms = {
  pageHeroBadge: "📊 Sample Report Interactive Demo",
  pageHeroTitle: "Talent Assessment Report Preview",
  pageHeroSubtitle: "Interact with a full sample report dashboard. See how scores, radar charts, strengths, growth areas, and curated roadmaps are delivered to parents.",
  badge: "📊 Sample Assessment Report Preview",
  title: "Explore a Real Talent Discovery Report",
  subtitle: "Here is a live preview of the 12-page comprehensive talent report parents receive immediately after play assessment.",
  childName: "Aarav Sharma",
  childInitials: "AS",
  verifiedBadgeText: "Verified Profile",
  age: "6 Years 4 Months",
  assessmentDate: "August 2026",
  overallScore: 89,
  downloadButtonText: "Download Sample PDF",
  archetypeTitle: "IDENTIFIED TALENT ARCHETYPE",
  archetype: "The Creative Explorer & STEM Strategist",
  summary: "Aarav demonstrates exceptional spatial reasoning, divergent artistic imagination, and high verbal storytelling ability. He learns best through visual building tasks and hands-on experiments.",
  skills: [
    { name: 'Cognitive Reasoning', score: 92, percentile: '95th Percentile', status: 'High Talent', color: 'bg-purple-500' },
    { name: 'Creative Expression', score: 88, percentile: '90th Percentile', status: 'High Talent', color: 'bg-rose-500' },
    { name: 'Communication & Phonics', score: 90, percentile: '92nd Percentile', status: 'High Talent', color: 'bg-amber-500' },
    { name: 'STEM & Logical Math', score: 84, percentile: '85th Percentile', status: 'Strong Ability', color: 'bg-emerald-500' },
    { name: 'Social Collaboration', score: 89, percentile: '88th Percentile', status: 'High Talent', color: 'bg-cyan-500' },
    { name: 'Fine Motor Control', score: 78, percentile: '75th Percentile', status: 'Developing Well', color: 'bg-indigo-500' }
  ],
  strengths: [
    '3D Spatial Construction (Lego / Block Assembly)',
    'Inventive Story Creation with Rich Vocabulary',
    'Rapid Pattern Recognition in Visual Puzzles',
    'Empathetic Group Play & Peer Coordination'
  ],
  growthAreas: [
    'Fine Finger Control in Precision Scissors Crafting',
    'Task Persistence when Initial Attempt Fails'
  ],
  recommendedActivities: [
    { title: 'Robotics & Lego Structural Building', type: 'STEM Skill', duration: '2x / week' },
    { title: 'Illustrated Comic Story Writing', type: 'Creativity', duration: 'Daily Play' },
    { title: 'Origami & Clay Sculpting', type: 'Fine Motor Control', duration: '3x / week' },
    { title: 'Junior Chess & Logic Sequences', type: 'Cognitive', duration: 'Weekend Fun' }
  ],
  footerPrivacyNote: "🔒 All assessments are 100% private, parent-guided, and based on observational play metrics.",
  ctaButtonText: "Get a Report Like This for Your Child →",
  visibility: {
    pageHero: true,
    sectionBadge: true,
    sectionTitle: true,
    sectionSubtitle: true,
    reportCard: true,
    ctaButton: true
  }
};

export const SampleReportCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [cms, setCms] = useState(defaultSampleReportCms);
  const [activePreviewTab, setActivePreviewTab] = useState('overview'); // overview, domain-breakdown, learning-path
  const [activeEditSection, setActiveEditSection] = useState(null);

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/child-talent`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.sampleReportCms) {
          setCms({
            ...defaultSampleReportCms,
            ...data.sampleReportCms,
            visibility: { ...defaultSampleReportCms.visibility, ...(data.sampleReportCms.visibility || {}) }
          });
        }
      }
    } catch (err) {
      console.error('Error fetching Sample Report CMS:', err);
      showToast?.('Using default Sample Report configuration', 'info');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const getRes = await fetch(`${API_BASE}/cms/child-talent`);
      const existingData = getRes.ok ? await getRes.json() : {};

      const payload = {
        ...existingData,
        sampleReportCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/child-talent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        showToast?.('Sample Report CMS published live successfully!', 'success');
      } else {
        throw new Error('Failed to save to backend');
      }
    } catch (err) {
      console.error('Error saving Sample Report CMS:', err);
      showToast?.('Failed to publish changes live', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleToggleVisibility = (key) => {
    setCms((prev) => ({
      ...prev,
      visibility: {
        ...prev.visibility,
        [key]: !prev.visibility?.[key]
      }
    }));
  };

  const handleSkillChange = (idx, field, value) => {
    setCms((prev) => {
      const updated = [...prev.skills];
      updated[idx] = { ...updated[idx], [field]: value };
      return { ...prev, skills: updated };
    });
  };

  const handleAddSkill = () => {
    setCms((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        { name: 'New Skill Domain', score: 85, percentile: '88th Percentile', status: 'High Talent', color: 'bg-indigo-500' }
      ]
    }));
  };

  const handleDeleteSkill = (idx) => {
    setCms((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== idx)
    }));
  };

  const handleItemChange = (listName, idx, value) => {
    setCms((prev) => {
      const updated = [...prev[listName]];
      updated[idx] = value;
      return { ...prev, [listName]: updated };
    });
  };

  const handleAddItem = (listName, defaultVal) => {
    setCms((prev) => ({
      ...prev,
      [listName]: [...prev[listName], defaultVal]
    }));
  };

  const handleDeleteItem = (listName, idx) => {
    setCms((prev) => ({
      ...prev,
      [listName]: prev[listName].filter((_, i) => i !== idx)
    }));
  };

  const handleActivityChange = (idx, field, value) => {
    setCms((prev) => {
      const updated = [...prev.recommendedActivities];
      updated[idx] = { ...updated[idx], [field]: value };
      return { ...prev, recommendedActivities: updated };
    });
  };

  const handleAddActivity = () => {
    setCms((prev) => ({
      ...prev,
      recommendedActivities: [
        ...prev.recommendedActivities,
        { title: 'New Weekly Activity', type: 'General Skill', duration: '2x / week' }
      ]
    }));
  };

  const handleDeleteActivity = (idx) => {
    setCms((prev) => ({
      ...prev,
      recommendedActivities: prev.recommendedActivities.filter((_, i) => i !== idx)
    }));
  };

  const renderSectionHeaderToggle = (key, labelText) => {
    const isVisible = cms.visibility?.[key] !== false;
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <label style={{ fontSize: 15, fontWeight: 800, color: 'var(--slate-900)' }}>
          {labelText}
        </label>
        <button
          type="button"
          onClick={() => handleToggleVisibility(key)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 12px',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 800,
            cursor: 'pointer',
            border: 'none',
            background: isVisible ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)',
            color: isVisible ? '#10B981' : '#EF4444'
          }}
        >
          {isVisible ? <Eye size={14} /> : <EyeOff size={14} />}
          <span>{isVisible ? 'Visible Live' : 'Hidden'}</span>
        </button>
      </div>
    );
  };

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--slate-600)' }}>
        <RefreshCw size={32} style={{ animation: 'spin 1s linear infinite', margin: '0 auto 16px' }} />
        <div>Loading Sample Report CMS Editor...</div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, fontSize: 16 }}>
      {/* Top Page Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div className="page-title" style={{ margin: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Sparkles size={18} />
            <span>Child Talent Discovery • Sample Report CMS</span>
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--slate-900)', marginTop: 4 }}>
            Sample Report Editor
          </h1>
          <p style={{ fontSize: 15, color: 'var(--slate-600)', marginTop: 4 }}>
            Edit student profile, overall potential score, archetype description, skill scores, strengths, and recommended activities.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'start' }}>
        
        {/* Left Column: Editor Cards */}
        <div style={{ flex: '1 1 560px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          
          {/* Card 1: Page Hero Banner & Section Title */}
          <div className="card" style={{ borderRadius: 20, border: '1.5px solid var(--slate-200)' }}>
            <div className="card-header" style={{ padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid var(--slate-100)' }}>
              <h3 style={{ fontSize: 20, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 12 }}>
                <Award size={22} color="var(--primary)" />
                <span>1. Page Hero Banner & Section Title</span>
              </h3>
              <button
                type="button"
                onClick={() => setActiveEditSection('sectionHeader')}
                style={{
                  padding: '10px 22px',
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--primary)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(79,70,229,0.3)'
                }}
              >
                <Edit3 size={16} />
                <span>Edit Section Headers</span>
              </button>
            </div>
            <div className="card-body" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 22 }}>
              
              <div>
                {renderSectionHeaderToggle('pageHero', 'Page Top Hero Banner Tagline')}
                <input
                  type="text"
                  value={cms.pageHeroBadge || ''}
                  onChange={(e) => setCms({ ...cms, pageHeroBadge: e.target.value })}
                  placeholder="e.g. 📊 Sample Report Interactive Demo"
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, fontWeight: 700, outline: 'none', background: 'white', color: '#0F172A' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 15, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>
                  Page Top Hero Banner Main Headline
                </label>
                <input
                  type="text"
                  value={cms.pageHeroTitle || ''}
                  onChange={(e) => setCms({ ...cms, pageHeroTitle: e.target.value })}
                  placeholder="e.g. Talent Assessment Report Preview"
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 17, fontWeight: 900, outline: 'none', background: 'white', color: '#0F172A' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 15, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>
                  Page Top Hero Banner Subtitle Description
                </label>
                <textarea
                  rows={2}
                  value={cms.pageHeroSubtitle || ''}
                  onChange={(e) => setCms({ ...cms, pageHeroSubtitle: e.target.value })}
                  placeholder="e.g. Interact with a full sample report dashboard..."
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 15, outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'white', color: '#0F172A' }}
                />
              </div>

              <div>
                {renderSectionHeaderToggle('sectionBadge', 'Section Tagline Badge')}
                <input
                  type="text"
                  value={cms.badge}
                  onChange={(e) => setCms({ ...cms, badge: e.target.value })}
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, fontWeight: 700, outline: 'none', background: 'white', color: '#0F172A' }}
                />
              </div>

              <div>
                {renderSectionHeaderToggle('sectionTitle', 'Section Main Headline')}
                <input
                  type="text"
                  value={cms.title}
                  onChange={(e) => setCms({ ...cms, title: e.target.value })}
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 17, fontWeight: 900, outline: 'none', background: 'white', color: '#0F172A' }}
                />
              </div>

              <div>
                {renderSectionHeaderToggle('sectionSubtitle', 'Subtitle Description')}
                <textarea
                  rows={3}
                  value={cms.subtitle}
                  onChange={(e) => setCms({ ...cms, subtitle: e.target.value })}
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 15, outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'white', color: '#0F172A', lineHeight: 1.5 }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Student Profile & Archetype Information */}
          <div className="card" style={{ borderRadius: 20, border: '1.5px solid var(--slate-200)' }}>
            <div className="card-header" style={{ padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid var(--slate-100)' }}>
              <h3 style={{ fontSize: 20, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 12 }}>
                <User size={22} color="var(--primary)" />
                <span>2. Sample Student Profile & Archetype</span>
              </h3>
            </div>
            <div className="card-body" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 100px', gap: 14 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 4 }}>Student Name</label>
                  <input
                    type="text"
                    value={cms.childName || ''}
                    onChange={(e) => setCms({ ...cms, childName: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 15, fontWeight: 800, background: 'white' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 4 }}>Age Milestone</label>
                  <input
                    type="text"
                    value={cms.age || ''}
                    onChange={(e) => setCms({ ...cms, age: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 15, fontWeight: 700, background: 'white' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 4 }}>Overall Score</label>
                  <input
                    type="number"
                    value={cms.overallScore || 89}
                    onChange={(e) => setCms({ ...cms, overallScore: Number(e.target.value) })}
                    style={{ width: '100%', textAlign: 'center', padding: '12px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, fontWeight: 900, background: 'white' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr 1fr', gap: 14 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 4 }}>Initials</label>
                  <input
                    type="text"
                    value={cms.childInitials || 'AS'}
                    onChange={(e) => setCms({ ...cms, childInitials: e.target.value })}
                    style={{ width: '100%', textAlign: 'center', padding: '12px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, fontWeight: 900, background: 'white' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 4 }}>Assessment Date</label>
                  <input
                    type="text"
                    value={cms.assessmentDate || ''}
                    onChange={(e) => setCms({ ...cms, assessmentDate: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 14, background: 'white' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 4 }}>PDF Button Text</label>
                  <input
                    type="text"
                    value={cms.downloadButtonText || ''}
                    onChange={(e) => setCms({ ...cms, downloadButtonText: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 14, fontWeight: 800, background: 'white' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>
                  Talent Archetype Title
                </label>
                <input
                  type="text"
                  value={cms.archetype || ''}
                  onChange={(e) => setCms({ ...cms, archetype: e.target.value })}
                  placeholder="e.g. The Creative Explorer & STEM Strategist"
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, fontWeight: 900, background: 'white' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>
                  Archetype Summary Description
                </label>
                <textarea
                  rows={3}
                  value={cms.summary || ''}
                  onChange={(e) => setCms({ ...cms, summary: e.target.value })}
                  placeholder="Summary of student strengths and learning style..."
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 14, background: 'white', fontFamily: 'inherit', resize: 'vertical' }}
                />
              </div>

            </div>
          </div>

          {/* Card 3: 6 Skill Scores & Percentiles Manager */}
          <div className="card" style={{ borderRadius: 20, border: '1.5px solid var(--slate-200)' }}>
            <div className="card-header" style={{ padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid var(--slate-100)' }}>
              <h3 style={{ fontSize: 20, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 12 }}>
                <BarChart3 size={22} color="var(--primary)" />
                <span>3. Skill Scores & Percentiles ({cms.skills.length} Skills)</span>
              </h3>
              <button
                type="button"
                onClick={handleAddSkill}
                style={{ padding: '10px 20px', borderRadius: 999, fontSize: 14, fontWeight: 800, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, background: '#10B981', color: 'white', boxShadow: '0 4px 12px rgba(16,185,129,0.3)' }}
              >
                <Plus size={16} />
                <span>Add Skill</span>
              </button>
            </div>

            <div className="card-body" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {cms.skills.map((sk, sIdx) => (
                <div key={sIdx} style={{ padding: 18, borderRadius: 14, background: '#F8FAFC', border: '1.5px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 14, fontWeight: 900, color: 'var(--slate-900)' }}>Skill #{sIdx + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteSkill(sIdx)}
                      style={{ padding: '6px 12px', borderRadius: 8, border: 'none', background: '#FEE2E2', color: '#EF4444', fontWeight: 800, fontSize: 12, cursor: 'pointer' }}
                    >
                      Remove
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 90px 140px 130px', gap: 10 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 800, color: 'var(--slate-700)', marginBottom: 4 }}>Skill Name</label>
                      <input
                        type="text"
                        value={sk.name}
                        onChange={(e) => handleSkillChange(sIdx, 'name', e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid #CBD5E1', fontSize: 14, fontWeight: 800, background: 'white' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 800, color: 'var(--slate-700)', marginBottom: 4 }}>Score %</label>
                      <input
                        type="number"
                        value={sk.score}
                        onChange={(e) => handleSkillChange(sIdx, 'score', Number(e.target.value))}
                        style={{ width: '100%', textAlign: 'center', padding: '10px', borderRadius: 10, border: '1.5px solid #CBD5E1', fontSize: 14, fontWeight: 900, background: 'white' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 800, color: 'var(--slate-700)', marginBottom: 4 }}>Percentile</label>
                      <input
                        type="text"
                        value={sk.percentile}
                        onChange={(e) => handleSkillChange(sIdx, 'percentile', e.target.value)}
                        placeholder="e.g. 95th Percentile"
                        style={{ width: '100%', padding: '10px 12px', borderRadius: 10, border: '1.5px solid #CBD5E1', fontSize: 13, background: 'white' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 800, color: 'var(--slate-700)', marginBottom: 4 }}>Status Label</label>
                      <input
                        type="text"
                        value={sk.status}
                        onChange={(e) => handleSkillChange(sIdx, 'status', e.target.value)}
                        placeholder="e.g. High Talent"
                        style={{ width: '100%', padding: '10px 12px', borderRadius: 10, border: '1.5px solid #CBD5E1', fontSize: 13, fontWeight: 700, background: 'white' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Strengths & Gentle Growth Areas Lists */}
          <div className="card" style={{ borderRadius: 20, border: '1.5px solid var(--slate-200)' }}>
            <div className="card-header" style={{ padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid var(--slate-100)' }}>
              <h3 style={{ fontSize: 20, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 12 }}>
                <CheckCircle2 size={22} color="var(--primary)" />
                <span>4. Top Strengths & Gentle Growth Areas</span>
              </h3>
            </div>

            <div className="card-body" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 24 }}>
              
              {/* Strengths List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label style={{ fontSize: 15, fontWeight: 900, color: '#059669', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CheckCircle2 size={18} />
                    <span>Top Identified Strengths</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => handleAddItem('strengths', 'New Identified Strength')}
                    style={{ padding: '6px 14px', borderRadius: 8, border: 'none', background: '#D1FAE5', color: '#059669', fontWeight: 800, fontSize: 12, cursor: 'pointer' }}
                  >
                    + Add Strength
                  </button>
                </div>
                {cms.strengths.map((str, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <input
                      type="text"
                      value={str}
                      onChange={(e) => handleItemChange('strengths', idx, e.target.value)}
                      style={{ flex: 1, padding: '12px 16px', borderRadius: 10, border: '1.5px solid #CBD5E1', fontSize: 14, background: 'white' }}
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteItem('strengths', idx)}
                      style={{ padding: '10px 14px', borderRadius: 10, border: 'none', background: '#FEE2E2', color: '#EF4444', fontWeight: 800, cursor: 'pointer' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Growth Areas List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label style={{ fontSize: 15, fontWeight: 900, color: '#D97706', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <AlertCircle size={18} />
                    <span>Areas for Gentle Development</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => handleAddItem('growthAreas', 'New Growth Area')}
                    style={{ padding: '6px 14px', borderRadius: 8, border: 'none', background: '#FEF3C7', color: '#D97706', fontWeight: 800, fontSize: 12, cursor: 'pointer' }}
                  >
                    + Add Growth Area
                  </button>
                </div>
                {cms.growthAreas.map((grow, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <input
                      type="text"
                      value={grow}
                      onChange={(e) => handleItemChange('growthAreas', idx, e.target.value)}
                      style={{ flex: 1, padding: '12px 16px', borderRadius: 10, border: '1.5px solid #CBD5E1', fontSize: 14, background: 'white' }}
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteItem('growthAreas', idx)}
                      style={{ padding: '10px 14px', borderRadius: 10, border: 'none', background: '#FEE2E2', color: '#EF4444', fontWeight: 800, cursor: 'pointer' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Card 5: Recommended Weekly Activities Manager */}
          <div className="card" style={{ borderRadius: 20, border: '1.5px solid var(--slate-200)' }}>
            <div className="card-header" style={{ padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid var(--slate-100)' }}>
              <h3 style={{ fontSize: 20, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 12 }}>
                <Target size={22} color="var(--primary)" />
                <span>5. Recommended Weekly Activities</span>
              </h3>
              <button
                type="button"
                onClick={handleAddActivity}
                style={{ padding: '10px 20px', borderRadius: 999, fontSize: 14, fontWeight: 800, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, background: '#10B981', color: 'white', boxShadow: '0 4px 12px rgba(16,185,129,0.3)' }}
              >
                <Plus size={16} />
                <span>Add Activity</span>
              </button>
            </div>

            <div className="card-body" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {cms.recommendedActivities.map((act, aIdx) => (
                <div key={aIdx} style={{ padding: 18, borderRadius: 14, background: '#F8FAFC', border: '1.5px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 14, fontWeight: 900, color: 'var(--slate-900)' }}>Activity #{aIdx + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteActivity(aIdx)}
                      style={{ padding: '6px 12px', borderRadius: 8, border: 'none', background: '#FEE2E2', color: '#EF4444', fontWeight: 800, fontSize: 12, cursor: 'pointer' }}
                    >
                      Remove
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px 120px', gap: 12 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 800, color: 'var(--slate-700)', marginBottom: 4 }}>Activity Title</label>
                      <input
                        type="text"
                        value={act.title}
                        onChange={(e) => handleActivityChange(aIdx, 'title', e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid #CBD5E1', fontSize: 14, fontWeight: 800, background: 'white' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 800, color: 'var(--slate-700)', marginBottom: 4 }}>Skill Type</label>
                      <input
                        type="text"
                        value={act.type}
                        onChange={(e) => handleActivityChange(aIdx, 'type', e.target.value)}
                        placeholder="e.g. STEM Skill"
                        style={{ width: '100%', padding: '10px 12px', borderRadius: 10, border: '1.5px solid #CBD5E1', fontSize: 13, background: 'white' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 800, color: 'var(--slate-700)', marginBottom: 4 }}>Frequency</label>
                      <input
                        type="text"
                        value={act.duration}
                        onChange={(e) => handleActivityChange(aIdx, 'duration', e.target.value)}
                        placeholder="e.g. 2x / week"
                        style={{ width: '100%', padding: '10px 12px', borderRadius: 10, border: '1.5px solid #CBD5E1', fontSize: 13, fontWeight: 700, background: 'white' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 6: Footer Privacy Note & Bottom CTA Button */}
          <div className="card" style={{ borderRadius: 20, border: '1.5px solid var(--slate-200)' }}>
            <div className="card-header" style={{ padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid var(--slate-100)' }}>
              <h3 style={{ fontSize: 20, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 12 }}>
                <Sparkles size={22} color="var(--primary)" />
                <span>6. Footer Note & Bottom CTA Button</span>
              </h3>
              {renderSectionHeaderToggle('ctaButton', 'Show Bottom CTA')}
            </div>

            <div className="card-body" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>
                  Footer Privacy Note
                </label>
                <input
                  type="text"
                  value={cms.footerPrivacyNote || ''}
                  onChange={(e) => setCms({ ...cms, footerPrivacyNote: e.target.value })}
                  placeholder="e.g. 🔒 All assessments are 100% private, parent-guided..."
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 14, background: 'white', color: '#0F172A' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>
                  Bottom CTA Button Text
                </label>
                <input
                  type="text"
                  value={cms.ctaButtonText || ''}
                  onChange={(e) => setCms({ ...cms, ctaButtonText: e.target.value })}
                  placeholder="e.g. Get a Report Like This for Your Child →"
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 15, fontWeight: 800, outline: 'none', background: 'white', color: '#0F172A' }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Save & Publish Action Bar */}
          <div style={{
            padding: '24px 32px',
            borderRadius: 20,
            background: 'white',
            border: '1.5px solid var(--slate-200)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            flexWrap: 'wrap',
            gap: 18
          }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--slate-900)' }}>Ready to publish Sample Report changes?</div>
              <div style={{ fontSize: 14, color: 'var(--slate-500)', marginTop: 4 }}>Click save to push updated report scores, archetype, and activities live to the website.</div>
            </div>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="btn btn-primary"
              style={{
                padding: '16px 36px',
                fontSize: 16,
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                cursor: 'pointer',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                borderRadius: 14,
                boxShadow: '0 4px 18px rgba(79,70,229,0.35)'
              }}
            >
              {saving ? <RefreshCw size={22} style={{ animation: 'spin 1s linear infinite' }} /> : <Save size={22} />}
              <span>{saving ? 'Publishing Changes...' : 'Save & Publish Live'}</span>
            </button>
          </div>

        </div>

        {/* Right Column: High-End Live Website Real-Time Preview Box */}
        <div style={{ flex: '0 0 380px', width: 380, maxWidth: '100%', position: 'sticky', top: 80 }}>
          <div className="card" style={{ background: '#090D16', color: 'white', borderColor: '#1E293B', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.35)', borderRadius: 20 }}>
            
            {/* Header bar */}
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#020617' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 800, color: '#38BDF8' }}>
                <Eye size={18} />
                <span>Live Real-Time Website Preview</span>
              </div>
              <span style={{ fontSize: 11, background: '#1E293B', color: '#94A3B8', padding: '3px 12px', borderRadius: 8, fontWeight: 800 }}>
                Sample Report Section
              </span>
            </div>

            {/* Dark Styled Website Preview Body */}
            <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 18, maxHeight: '82vh', overflowY: 'auto' }}>
              
              {/* 1. Top Page Hero Banner Preview */}
              {(cms.visibility?.pageHero !== false) && (
                <div style={{ padding: '18px 16px', borderRadius: 16, background: 'linear-gradient(135deg, #1E1B4B, #0F172A, #3B0764)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8, border: '1px solid #3730A3' }}>
                  <div style={{ margin: '0 auto', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.1)', color: '#FCD34D', border: '1px solid rgba(255,255,255,0.2)', fontSize: 11, fontWeight: 800 }}>
                    <span>{cms.pageHeroBadge || "📊 Sample Report Interactive Demo"}</span>
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 900, color: 'white' }}>
                    {cms.pageHeroTitle || "Talent Assessment Report Preview"}
                  </div>
                  <p style={{ fontSize: 11, color: '#94A3B8', margin: 0, lineHeight: 1.4 }}>
                    {cms.pageHeroSubtitle || "Interact with a full sample report dashboard..."}
                  </p>
                </div>
              )}

              {/* 2. Section Header Preview */}
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {(cms.visibility?.sectionBadge !== false) && (
                  <div style={{ margin: '0 auto', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 14px', borderRadius: 999, background: 'rgba(244,63,94,0.15)', color: '#FB7185', border: '1px solid rgba(244,63,94,0.3)', fontSize: 12, fontWeight: 800 }}>
                    <span>{cms.badge}</span>
                  </div>
                )}

                {(cms.visibility?.sectionTitle !== false) && (
                  <h3 style={{ fontSize: 19, fontWeight: 900, color: 'white', margin: 0 }}>
                    {cms.title}
                  </h3>
                )}

                {(cms.visibility?.sectionSubtitle !== false) && (
                  <p style={{ fontSize: 12, color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
                    {cms.subtitle}
                  </p>
                )}
              </div>

              {/* 3. Sample Report Interactive Card Showcase */}
              {(cms.visibility?.reportCard !== false) && (
                <div style={{ padding: 18, borderRadius: 16, background: '#0F172A', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  
                  {/* Student Top Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1E293B', paddingBottom: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 12, background: 'linear-gradient(135deg, #EC4899, #8B5CF6, #F59E0B)', color: 'white', fontSize: 13, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {cms.childInitials || 'AS'}
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ fontSize: 13, fontWeight: 900, color: 'white' }}>{cms.childName}</span>
                          <span style={{ fontSize: 8, background: 'rgba(16,185,129,0.15)', color: '#34D399', padding: '1px 6px', borderRadius: 4, fontWeight: 700 }}>{cms.verifiedBadgeText || 'Verified'}</span>
                        </div>
                        <div style={{ fontSize: 9, color: '#9CA3AF' }}>Age: {cms.age}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 8, color: '#C084FC', fontWeight: 800 }}>POTENTIAL</div>
                      <div style={{ fontSize: 14, fontWeight: 900, color: '#FBBF24' }}>{cms.overallScore}/100</div>
                    </div>
                  </div>

                  {/* Archetype Box */}
                  <div style={{ padding: 10, borderRadius: 12, background: 'linear-gradient(135deg, #1E1B4B, #111827)', border: '1px solid #312E81', display: 'flex', gap: 8 }}>
                    <span style={{ fontSize: 18 }}>🧩</span>
                    <div>
                      <div style={{ fontSize: 8, fontWeight: 800, color: '#C084FC', textTransform: 'uppercase' }}>{cms.archetypeTitle || 'TALENT ARCHETYPE'}</div>
                      <div style={{ fontSize: 11, fontWeight: 900, color: 'white' }}>{cms.archetype}</div>
                      <div style={{ fontSize: 9, color: '#9CA3AF', marginTop: 2, lineHeight: 1.3 }}>{cms.summary}</div>
                    </div>
                  </div>

                  {/* Preview Interactive Tab Pills */}
                  <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid #1E293B', paddingBottom: 8 }}>
                    {[
                      { id: 'overview', label: '📊 Scores' },
                      { id: 'domain-breakdown', label: '🌟 Strengths' },
                      { id: 'learning-path', label: '🎯 Activities' }
                    ].map(t => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setActivePreviewTab(t.id)}
                        style={{
                          padding: '4px 8px',
                          borderRadius: 8,
                          fontSize: 10,
                          fontWeight: 800,
                          border: 'none',
                          cursor: 'pointer',
                          background: activePreviewTab === t.id ? '#8B5CF6' : '#1E293B',
                          color: activePreviewTab === t.id ? 'white' : '#9CA3AF'
                        }}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Body */}
                  {activePreviewTab === 'overview' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                      {cms.skills.slice(0, 4).map((sk, sI) => (
                        <div key={sI} style={{ padding: 8, borderRadius: 10, background: '#111827', border: '1px solid #1F2937', display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, fontWeight: 800 }}>
                            <span style={{ color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sk.name}</span>
                            <span style={{ color: '#FBBF24' }}>{sk.score}%</span>
                          </div>
                          <div style={{ height: 4, background: '#1F2937', borderRadius: 4, overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${sk.score}%`, background: 'linear-gradient(90deg, #A855F7, #EC4899)' }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activePreviewTab === 'domain-breakdown' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 9, color: '#D1D5DB' }}>
                      <span style={{ fontWeight: 800, color: '#34D399' }}>✓ Top Strengths:</span>
                      {cms.strengths.slice(0, 2).map((st, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: 4 }}>
                          <span>•</span>
                          <span>{st}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activePreviewTab === 'learning-path' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 9 }}>
                      {cms.recommendedActivities.slice(0, 2).map((act, idx) => (
                        <div key={idx} style={{ padding: 6, borderRadius: 8, background: '#111827', border: '1px solid #1F2937', display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'white', fontWeight: 800 }}>{act.title}</span>
                          <span style={{ color: '#FBBF24' }}>{act.duration}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Privacy note preview */}
                  <div style={{ fontSize: 8, color: '#6B7280', textAlign: 'center', borderTop: '1px solid #1E293B', paddingTop: 8 }}>
                    {cms.footerPrivacyNote || '🔒 All assessments are 100% private & parent-guided.'}
                  </div>

                </div>
              )}

              {/* 4. Bottom CTA Button Preview */}
              {(cms.visibility?.ctaButton !== false) && (
                <div style={{ textAlign: 'center' }}>
                  <button type="button" style={{ padding: '12px 20px', borderRadius: 14, background: 'linear-gradient(135deg, #EC4899, #8B5CF6)', color: 'white', border: 'none', fontWeight: 900, fontSize: 11, cursor: 'pointer', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>
                    <span>{cms.ctaButtonText || "Get a Report Like This for Your Child →"}</span>
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>

      {/* Section Edit Modal Overlay */}
      {activeEditSection && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          padding: 24
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            style={{
              background: 'white',
              borderRadius: 24,
              width: '100%',
              maxWidth: 840,
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
              overflow: 'hidden'
            }}
          >
            {/* Modal Header */}
            <div style={{ padding: '24px 30px', borderBottom: '1.5px solid var(--slate-100)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(79,70,229,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Edit3 size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 900, color: 'var(--slate-900)' }}>
                    Edit Section Headers
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--slate-500)', marginTop: 2 }}>
                    Update page titles, section badges, and subtext description.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveEditSection(null)}
                style={{ border: 'none', background: 'var(--slate-100)', cursor: 'pointer', color: 'var(--slate-500)', width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '28px 30px', display: 'flex', flexDirection: 'column', gap: 22, overflowY: 'auto', flex: 1 }}>
              
              {activeEditSection === 'sectionHeader' && (
                <>
                  <div>
                    {renderSectionHeaderToggle('pageHero', 'Page Top Hero Banner Tagline')}
                    <input
                      type="text"
                      value={cms.pageHeroBadge || ''}
                      onChange={(e) => setCms({ ...cms, pageHeroBadge: e.target.value })}
                      style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, outline: 'none', background: 'white' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 15, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>
                      Page Top Hero Banner Main Headline
                    </label>
                    <input
                      type="text"
                      value={cms.pageHeroTitle || ''}
                      onChange={(e) => setCms({ ...cms, pageHeroTitle: e.target.value })}
                      style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, fontWeight: 800, outline: 'none', background: 'white' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 15, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>
                      Page Top Hero Banner Subtitle Description
                    </label>
                    <textarea
                      rows={3}
                      value={cms.pageHeroSubtitle || ''}
                      onChange={(e) => setCms({ ...cms, pageHeroSubtitle: e.target.value })}
                      style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 15, outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'white' }}
                    />
                  </div>

                  <div>
                    {renderSectionHeaderToggle('sectionBadge', 'Section Tagline Badge')}
                    <input
                      type="text"
                      value={cms.badge}
                      onChange={(e) => setCms({ ...cms, badge: e.target.value })}
                      style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, outline: 'none', background: 'white' }}
                    />
                  </div>

                  <div>
                    {renderSectionHeaderToggle('sectionTitle', 'Section Main Headline')}
                    <input
                      type="text"
                      value={cms.title}
                      onChange={(e) => setCms({ ...cms, title: e.target.value })}
                      style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, fontWeight: 800, outline: 'none', background: 'white' }}
                    />
                  </div>

                  <div>
                    {renderSectionHeaderToggle('sectionSubtitle', 'Subtitle Description')}
                    <textarea
                      rows={3}
                      value={cms.subtitle}
                      onChange={(e) => setCms({ ...cms, subtitle: e.target.value })}
                      style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 15, outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'white' }}
                    />
                  </div>
                </>
              )}

            </div>

            {/* Modal Footer */}
            <div style={{ padding: '20px 30px', borderTop: '1.5px solid var(--slate-100)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 14, background: 'var(--slate-50)' }}>
              <button
                type="button"
                onClick={() => setActiveEditSection(null)}
                style={{ padding: '12px 24px', borderRadius: 12, border: '1.5px solid #CBD5E1', background: 'white', fontWeight: 800, color: 'var(--slate-700)', cursor: 'pointer', fontSize: 15 }}
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
};
