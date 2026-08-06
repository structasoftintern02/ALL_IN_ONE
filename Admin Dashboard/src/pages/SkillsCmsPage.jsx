import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Save, Eye, EyeOff, Plus, Trash2, Edit3, X, RefreshCw, Layers, ShieldCheck, BookOpen, Clock, Target, CheckCircle2, ArrowRight, Layout, Check, Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultSkillsCms = {
  cmsPageCategory: "Child Talent Discovery • Skill Domains CMS",
  cmsPageTitle: "10 Skill Domains Editor",
  cmsPageSubtitle: "Edit page titles, 10 core skill category cards, key metrics, activities, and CTA buttons live on the website.",
  pageHeroBadge: "🎨 10 Core Domains",
  pageHeroTitle: "10 Skill Development Categories",
  pageHeroSubtitle: "From cognitive memory and STEM logic to divergent creativity, leadership, and motor dexterity — explore all 10 mapped domains.",
  badge: "🎨 10 Skill Domains",
  title: "Comprehensive Talent Categories",
  subtitle: "We map 10 core development areas to build a 360-degree cognitive and creative profile of your child. Click any category for details.",
  ctaText: "See How These Skills Look in Talent Report →",
  skills: [
    {
      id: 'cognitive',
      title: 'Cognitive Skills',
      icon: '🧠',
      color: 'from-purple-500 to-indigo-600',
      desc: 'Memory retention, spatial orientation, information processing speed, and mental agility.',
      keyMetrics: ['Pattern Recognition', 'Processing Speed', 'Spatial Reasoning'],
      recommendedActivities: ['Memory Matrix Games', '3D Spatial Puzzles', 'Logic Sequence Challenges']
    },
    {
      id: 'communication',
      title: 'Communication Skills',
      icon: '💬',
      color: 'from-rose-500 to-pink-600',
      desc: 'Verbal clarity, active listening, vocabulary breadth, and expressive storytelling ability.',
      keyMetrics: ['Vocabulary Breadth', 'Expressive Clarity', 'Active Listening'],
      recommendedActivities: ['Story Building Sessions', 'Role-play Drama', 'Show & Tell Activities']
    },
    {
      id: 'creativity',
      title: 'Creativity & Innovation',
      icon: '🎨',
      color: 'from-amber-500 to-orange-600',
      desc: 'Divergent thinking, imaginative problem solving, visual arts, and original idea generation.',
      keyMetrics: ['Idea Originality', 'Visual Expression', 'Divergent Thinking'],
      recommendedActivities: ['Mixed-media Crafting', 'Invent-a-Story', 'Unconventional Design']
    },
    {
      id: 'leadership',
      title: 'Leadership & Initiative',
      icon: '👑',
      color: 'from-emerald-500 to-teal-600',
      desc: 'Responsibility, team motivation, decision making under ambiguity, and confidence.',
      keyMetrics: ['Initiative Taking', 'Peer Guidance', 'Decision Quality'],
      recommendedActivities: ['Group Project Lead', 'Community Challenge', 'Goal Setting Drills']
    },
    {
      id: 'problem-solving',
      title: 'Problem Solving',
      icon: '🧩',
      color: 'from-cyan-500 to-blue-600',
      desc: 'Deconstructing complex challenges, hypothesis testing, and systematic solution finding.',
      keyMetrics: ['Analytical Breakdown', 'Trial & Learning', 'Strategy Formation'],
      recommendedActivities: ['Escape Room Puzzles', 'Coding Logic Blocks', 'Rube Goldberg Contraptions']
    },
    {
      id: 'emotional-intelligence',
      title: 'Emotional Intelligence',
      icon: '❤️',
      color: 'from-red-500 to-rose-600',
      desc: 'Self-awareness, emotional regulation, empathy for others, and resilience in adversity.',
      keyMetrics: ['Emotion Naming', 'Self-Regulation', 'Empathy Response'],
      recommendedActivities: ['Emotion Journaling', 'Mindful Breathing', 'Collaborative Story Circle']
    },
    {
      id: 'motor-skills',
      title: 'Motor Skills',
      icon: '🏃',
      color: 'from-lime-500 to-emerald-600',
      desc: 'Fine finger dexterity, gross physical balance, hand-eye coordination, and spatial control.',
      keyMetrics: ['Fine Dexterity', 'Balance Control', 'Hand-Eye Timing'],
      recommendedActivities: ['Origami Folding', 'Obstacle Course Training', 'Juggling Basics']
    },
    {
      id: 'social-skills',
      title: 'Social Skills',
      icon: '🤝',
      color: 'from-violet-500 to-purple-600',
      desc: 'Peer cooperation, conflict resolution, sharing, respectful listening, and group play.',
      keyMetrics: ['Sharing Tendency', 'Conflict Navigation', 'Group Play Integration'],
      recommendedActivities: ['Cooperative Board Games', 'Team Building Tasks', 'Peer Buddy Sharing']
    },
    {
      id: 'stem-readiness',
      title: 'STEM Readiness',
      icon: '🔬',
      color: 'from-indigo-500 to-blue-600',
      desc: 'Scientific curiosity, numerical intuition, mechanical understanding, and experimentation.',
      keyMetrics: ['Scientific Curiosity', 'Number Sense', 'Hypothesis Building'],
      recommendedActivities: ['Kitchen Science Experiments', 'Lego Robotics Construction', 'Math Magic Puzzles']
    },
    {
      id: 'art-music',
      title: 'Art & Music',
      icon: '🎵',
      color: 'from-fuchsia-500 to-pink-600',
      desc: 'Rhythmic sensitivity, auditory discrimination, pitch perception, and visual harmony.',
      keyMetrics: ['Rhythm Precision', 'Color Harmony', 'Pitch Discrimination'],
      recommendedActivities: ['Percussion Rhythm Games', 'Color Theory Sketching', 'Melody Recognition']
    }
  ],
  visibility: {
    pageHero: true,
    sectionBadge: true,
    sectionTitle: true,
    sectionSubtitle: true,
    skillCards: true,
    ctaButton: true
  }
};

export const SkillsCmsPage = () => {
  const { showToast } = useApp();
  const [cms, setCms] = useState(defaultSkillsCms);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeEditSection, setActiveEditSection] = useState(null); // 'sectionHeader' | 'skillCards'
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);

  const [newMetricText, setNewMetricText] = useState('');
  const [newActivityText, setNewActivityText] = useState('');

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/child-talent`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.skillsCms) {
          setCms({
            ...defaultSkillsCms,
            ...data.skillsCms,
            visibility: {
              ...defaultSkillsCms.visibility,
              ...(data.skillsCms.visibility || {})
            }
          });
        }
      }
    } catch (err) {
      console.error('Failed to fetch Skills CMS data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const currentRes = await fetch(`${API_BASE}/cms/child-talent`);
      let existingCms = {};
      if (currentRes.ok) {
        existingCms = await currentRes.json();
      }

      const updatedFullCms = {
        ...existingCms,
        skillsCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/child-talent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFullCms)
      });

      if (res.ok) {
        showToast('10 Skill Domains CMS updated & published live!', 'success');
      } else {
        showToast('Failed to update Skills CMS', 'error');
      }
    } catch (err) {
      console.error('Error saving Skills CMS:', err);
      showToast('Backend server connection error', 'error');
    } finally {
      setSaving(false);
    }
  };

  const toggleVisibility = (key) => {
    setCms(prev => ({
      ...prev,
      visibility: {
        ...prev.visibility,
        [key]: prev.visibility ? prev.visibility[key] === false : false
      }
    }));
  };

  const handleSkillFieldChange = (idx, field, value) => {
    const updated = [...cms.skills];
    updated[idx] = { ...updated[idx], [field]: value };
    setCms({ ...cms, skills: updated });
  };

  const handleAddMetric = (skillIdx) => {
    if (!newMetricText.trim()) return;
    const updated = [...cms.skills];
    const currentMetrics = updated[skillIdx].keyMetrics || [];
    updated[skillIdx] = {
      ...updated[skillIdx],
      keyMetrics: [...currentMetrics, newMetricText.trim()]
    };
    setCms({ ...cms, skills: updated });
    setNewMetricText('');
    showToast('Key metric added!', 'success');
  };

  const handleMetricChange = (skillIdx, mIdx, value) => {
    const updated = [...cms.skills];
    const currentMetrics = [...(updated[skillIdx].keyMetrics || [])];
    currentMetrics[mIdx] = value;
    updated[skillIdx] = { ...updated[skillIdx], keyMetrics: currentMetrics };
    setCms({ ...cms, skills: updated });
  };

  const handleRemoveMetric = (skillIdx, mIdx) => {
    const updated = [...cms.skills];
    const currentMetrics = (updated[skillIdx].keyMetrics || []).filter((_, i) => i !== mIdx);
    updated[skillIdx] = { ...updated[skillIdx], keyMetrics: currentMetrics };
    setCms({ ...cms, skills: updated });
    showToast('Metric removed', 'info');
  };

  const handleAddActivity = (skillIdx) => {
    if (!newActivityText.trim()) return;
    const updated = [...cms.skills];
    const currentActivities = updated[skillIdx].recommendedActivities || [];
    updated[skillIdx] = {
      ...updated[skillIdx],
      recommendedActivities: [...currentActivities, newActivityText.trim()]
    };
    setCms({ ...cms, skills: updated });
    setNewActivityText('');
    showToast('Recommended activity added!', 'success');
  };

  const handleActivityChange = (skillIdx, aIdx, value) => {
    const updated = [...cms.skills];
    const currentActivities = [...(updated[skillIdx].recommendedActivities || [])];
    currentActivities[aIdx] = value;
    updated[skillIdx] = { ...updated[skillIdx], recommendedActivities: currentActivities };
    setCms({ ...cms, skills: updated });
  };

  const handleRemoveActivity = (skillIdx, aIdx) => {
    const updated = [...cms.skills];
    const currentActivities = (updated[skillIdx].recommendedActivities || []).filter((_, i) => i !== aIdx);
    updated[skillIdx] = { ...updated[skillIdx], recommendedActivities: currentActivities };
    setCms({ ...cms, skills: updated });
    showToast('Activity removed', 'info');
  };

  const renderSectionHeaderToggle = (key, label) => {
    const isEnabled = cms.visibility ? cms.visibility[key] !== false : true;
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <label style={{ fontSize: 15, fontWeight: 800, color: 'var(--slate-900)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span>{label}</span>
          {!isEnabled && (
            <span style={{ fontSize: 12, padding: '3px 12px', borderRadius: 8, background: '#FEE2E2', color: '#EF4444', fontWeight: 800 }}>
              Disabled (Hidden)
            </span>
          )}
        </label>
        <button
          type="button"
          onClick={() => toggleVisibility(key)}
          style={{
            padding: '7px 18px',
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 800,
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            transition: 'all 0.2s',
            background: isEnabled ? 'rgba(16,185,129,0.15)' : '#F1F5F9',
            color: isEnabled ? '#059669' : '#64748B'
          }}
        >
          {isEnabled ? <Eye size={16} color="#059669" /> : <EyeOff size={16} color="#64748B" />}
          <span>{isEnabled ? 'Enabled' : 'Disabled'}</span>
        </button>
      </div>
    );
  };

  const selectedSkill = cms.skills[selectedSkillIndex] || cms.skills[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, fontSize: 16 }}>
      {/* Top Page Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div className="page-title" style={{ margin: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Sparkles size={18} />
            <span>Child Talent Discovery • Skill Domains CMS</span>
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--slate-900)', marginTop: 4 }}>
            10 Skill Domains Editor
          </h1>
          <p style={{ fontSize: 15, color: 'var(--slate-600)', marginTop: 4 }}>
            Edit page titles, 10 core skill category cards, key metrics, activities, and CTA buttons live on the website.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'start' }}>
        
        {/* Left Column: Editor Cards */}
        <div style={{ flex: '1 1 560px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          
          {/* Card 1: Page Hero & Section Headers */}
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
                  placeholder="e.g. 🎨 10 Core Domains"
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
                  placeholder="e.g. 10 Skill Development Categories"
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
                  placeholder="e.g. From cognitive memory and STEM logic to divergent creativity..."
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
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'white', lineHeight: 1.5, color: '#0F172A' }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: 10 Skill Categories & Metrics Editor */}
          <div className="card" style={{ borderRadius: 20, border: '1.5px solid var(--slate-200)' }}>
            <div className="card-header" style={{ padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid var(--slate-100)' }}>
              <h3 style={{ fontSize: 20, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 12 }}>
                <Layers size={22} color="var(--purple)" />
                <span>2. 10 Skill Categories & Metrics</span>
              </h3>
              <button
                type="button"
                onClick={() => setActiveEditSection('skillCards')}
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
                  background: 'var(--purple)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(168,85,247,0.3)'
                }}
              >
                <Edit3 size={16} />
                <span>Edit All Skill Cards</span>
              </button>
            </div>

            <div className="card-body" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 22 }}>
              
              {/* Skill Card Selector Tabs */}
              <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 8 }}>
                {cms.skills.map((skill, idx) => (
                  <button
                    key={skill.id || idx}
                    type="button"
                    onClick={() => setSelectedSkillIndex(idx)}
                    style={{
                      padding: '10px 18px',
                      borderRadius: 14,
                      fontSize: 14,
                      fontWeight: 800,
                      border: selectedSkillIndex === idx ? '2.5px solid var(--primary)' : '1.5px solid var(--slate-200)',
                      background: selectedSkillIndex === idx ? 'rgba(79,70,229,0.08)' : 'white',
                      color: selectedSkillIndex === idx ? 'var(--primary)' : 'var(--slate-800)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{skill.icon}</span>
                    <span>{skill.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Skill Category Form */}
              {selectedSkill && (
                <div style={{ padding: 24, borderRadius: 18, background: '#F8FAFC', border: '1.5px solid #CBD5E1', display: 'flex', flexDirection: 'column', gap: 20 }}>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 14 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 6 }}>Icon</label>
                      <input
                        type="text"
                        value={selectedSkill.icon}
                        onChange={(e) => handleSkillFieldChange(selectedSkillIndex, 'icon', e.target.value)}
                        style={{ width: '100%', textAlign: 'center', padding: '12px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 22, background: 'white' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 6 }}>Category Title</label>
                      <input
                        type="text"
                        value={selectedSkill.title}
                        onChange={(e) => handleSkillFieldChange(selectedSkillIndex, 'title', e.target.value)}
                        placeholder="Title"
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, fontWeight: 900, background: 'white', color: '#0F172A' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 6 }}>Description</label>
                    <textarea
                      rows={3}
                      value={selectedSkill.desc}
                      onChange={(e) => handleSkillFieldChange(selectedSkillIndex, 'desc', e.target.value)}
                      placeholder="Description"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 15, background: 'white', lineHeight: 1.5, color: '#0F172A' }}
                    />
                  </div>

                  {/* Key Metrics Section */}
                  <div style={{ marginTop: 8, paddingTop: 16, borderTop: '1.5px solid #CBD5E1' }}>
                    <div style={{ fontSize: 15, fontWeight: 900, color: 'var(--slate-900)', marginBottom: 12 }}>
                      📊 Key Metrics Tracked ({selectedSkill.keyMetrics?.length || 0})
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {(selectedSkill.keyMetrics || []).map((mText, mIdx) => (
                        <div key={mIdx} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <CheckCircle2 size={20} color="#8B5CF6" />
                          <input
                            type="text"
                            value={mText}
                            onChange={(e) => handleMetricChange(selectedSkillIndex, mIdx, e.target.value)}
                            style={{ flex: 1, padding: '10px 16px', borderRadius: 10, border: '1.5px solid #CBD5E1', fontSize: 14, fontWeight: 700, background: 'white', color: '#0F172A' }}
                          />
                          <button type="button" onClick={() => handleRemoveMetric(selectedSkillIndex, mIdx)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#EF4444' }}>
                            <Trash2 size={18} />
                          </button>
                        </div>
                      ))}

                      {/* Add Metric */}
                      <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
                        <input
                          type="text"
                          placeholder="Add new metric (e.g. Pattern Recognition)..."
                          value={newMetricText}
                          onChange={(e) => setNewMetricText(e.target.value)}
                          style={{ flex: 1, padding: '10px 16px', borderRadius: 10, border: '1.5px dashed #94A3B8', fontSize: 14, background: 'white' }}
                        />
                        <button type="button" onClick={() => handleAddMetric(selectedSkillIndex)} style={{ padding: '10px 20px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 10, fontWeight: 800, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <Plus size={16} /> Add
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Recommended Activities Section */}
                  <div style={{ marginTop: 8, paddingTop: 16, borderTop: '1.5px solid #CBD5E1' }}>
                    <div style={{ fontSize: 15, fontWeight: 900, color: 'var(--slate-900)', marginBottom: 12 }}>
                      🎮 Recommended Activities ({selectedSkill.recommendedActivities?.length || 0})
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {(selectedSkill.recommendedActivities || []).map((aText, aIdx) => (
                        <div key={aIdx} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <Target size={20} color="#10B981" />
                          <input
                            type="text"
                            value={aText}
                            onChange={(e) => handleActivityChange(selectedSkillIndex, aIdx, e.target.value)}
                            style={{ flex: 1, padding: '10px 16px', borderRadius: 10, border: '1.5px solid #CBD5E1', fontSize: 14, fontWeight: 700, background: 'white', color: '#0F172A' }}
                          />
                          <button type="button" onClick={() => handleRemoveActivity(selectedSkillIndex, aIdx)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#EF4444' }}>
                            <Trash2 size={18} />
                          </button>
                        </div>
                      ))}

                      {/* Add Activity */}
                      <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
                        <input
                          type="text"
                          placeholder="Add recommended activity..."
                          value={newActivityText}
                          onChange={(e) => setNewActivityText(e.target.value)}
                          style={{ flex: 1, padding: '10px 16px', borderRadius: 10, border: '1.5px dashed #94A3B8', fontSize: 14, background: 'white' }}
                        />
                        <button type="button" onClick={() => handleAddActivity(selectedSkillIndex)} style={{ padding: '10px 20px', background: 'var(--purple)', color: 'white', border: 'none', borderRadius: 10, fontWeight: 800, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <Plus size={16} /> Add Activity
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Card 3: Bottom Action CTA Button */}
          <div className="card" style={{ borderRadius: 20, border: '1.5px solid var(--slate-200)' }}>
            <div className="card-header" style={{ padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid var(--slate-100)' }}>
              <h3 style={{ fontSize: 20, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 12 }}>
                <ArrowRight size={22} color="var(--primary)" />
                <span>3. Bottom CTA Action Button</span>
              </h3>
              {renderSectionHeaderToggle('ctaButton', 'Show CTA Button')}
            </div>
            <div className="card-body" style={{ padding: 28 }}>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 6 }}>Button Label Text</label>
              <input
                type="text"
                value={cms.ctaText || ''}
                onChange={(e) => setCms({ ...cms, ctaText: e.target.value })}
                placeholder="e.g. See How These Skills Look in Talent Report →"
                style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, fontWeight: 800, outline: 'none', background: 'white', color: '#0F172A' }}
              />
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
              <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--slate-900)' }}>Ready to publish 10 Skill Domains changes?</div>
              <div style={{ fontSize: 14, color: 'var(--slate-500)', marginTop: 4 }}>Click save to push all updated skill categories and metrics live to the website.</div>
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
                10 Skill Domains
              </span>
            </div>

            {/* Dark Styled Website Preview Body */}
            <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 18, maxHeight: '82vh', overflowY: 'auto' }}>
              
              {/* 1. Top Page Hero Banner Preview */}
              {(cms.visibility?.pageHero !== false) && (
                <div style={{ padding: '18px 16px', borderRadius: 16, background: 'linear-gradient(135deg, #3B0764, #0F172A, #831843)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8, border: '1px solid #581C87' }}>
                  <div style={{ margin: '0 auto', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.1)', color: '#FDA4AF', border: '1px solid rgba(255,255,255,0.2)', fontSize: 11, fontWeight: 800 }}>
                    <span>{cms.pageHeroBadge || "🎨 10 Core Domains"}</span>
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 900, color: 'white' }}>
                    {cms.pageHeroTitle || "10 Skill Development Categories"}
                  </div>
                  <p style={{ fontSize: 11, color: '#94A3B8', margin: 0, lineHeight: 1.4 }}>
                    {cms.pageHeroSubtitle || "From cognitive memory and STEM logic to divergent creativity, leadership, and motor dexterity..."}
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

              {/* Skill Cards Grid Preview (2 Columns) */}
              {(cms.visibility?.skillCards !== false) && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
                  {cms.skills.slice(0, 4).map((sk) => (
                    <div key={sk.id} style={{ padding: 14, borderRadius: 14, background: '#111827', border: '1px solid #1F2937', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 22 }}>{sk.icon}</span>
                        <span style={{ fontSize: 9, background: '#1F2937', color: '#38BDF8', padding: '2px 8px', borderRadius: 6, fontWeight: 700 }}>Explore</span>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 900, color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sk.title}</div>
                      <div style={{ fontSize: 10, color: '#9CA3AF', lineHeight: 1.4, height: 28, overflow: 'hidden' }}>{sk.desc}</div>
                      <div style={{ fontSize: 10, color: '#A78BFA', fontWeight: 800, marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span>View Metrics & Tasks</span>
                        <ArrowRight size={11} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom CTA Button Preview */}
              {(cms.visibility?.ctaButton !== false) && (
                <button type="button" style={{ width: '100%', padding: '12px', borderRadius: 12, background: 'linear-gradient(135deg, #EC4899, #8B5CF6)', color: 'white', border: 'none', fontWeight: 900, fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, boxShadow: '0 4px 14px rgba(236,72,153,0.3)', marginTop: 4 }}>
                  <span>{cms.ctaText || "See How These Skills Look in Talent Report →"}</span>
                </button>
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
              boxShadow: '0 30px 60px -15px rgba(0,0,0,0.35)',
              overflow: 'hidden',
              border: '1px solid var(--slate-200)',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '90vh'
            }}
          >
            {/* Modal Header */}
            <div style={{
              padding: '22px 30px',
              borderBottom: '1px solid var(--slate-100)',
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              background: '#F8FAFC'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(168,85,247,0.15))', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Edit3 size={22} color="var(--primary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 900, color: 'var(--slate-900)', margin: 0 }}>
                    {activeEditSection === 'sectionHeader' && 'Edit Section Banner & Headers'}
                    {activeEditSection === 'skillCards' && 'Edit All 10 Skill Categories'}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--slate-500)', marginTop: 2, marginBottom: 0 }}>
                    Modify content fields specifically for this section.
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
                      style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 17, fontWeight: 900, outline: 'none', background: 'white' }}
                    />
                  </div>

                  <div>
                    {renderSectionHeaderToggle('sectionSubtitle', 'Subtitle Description')}
                    <textarea
                      rows={4}
                      value={cms.subtitle}
                      onChange={(e) => setCms({ ...cms, subtitle: e.target.value })}
                      style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'white' }}
                    />
                  </div>
                </>
              )}

              {activeEditSection === 'skillCards' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {cms.skills.map((skill, idx) => (
                    <div key={idx} style={{ padding: 20, borderRadius: 18, background: '#F8FAFC', border: '1.5px solid #CBD5E1', display: 'flex', flexDirection: 'column', gap: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 14, fontWeight: 900, color: 'var(--slate-700)', textTransform: 'uppercase' }}>Skill Category #{idx + 1} ({skill.title})</span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 12 }}>
                        <input
                          type="text"
                          value={skill.icon}
                          onChange={(e) => handleSkillFieldChange(idx, 'icon', e.target.value)}
                          placeholder="Icon"
                          style={{ textAlign: 'center', padding: '12px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 22, background: 'white' }}
                        />
                        <input
                          type="text"
                          value={skill.title}
                          onChange={(e) => handleSkillFieldChange(idx, 'title', e.target.value)}
                          placeholder="Category Title"
                          style={{ padding: '12px 16px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, fontWeight: 900, background: 'white' }}
                        />
                      </div>

                      <textarea
                        rows={2}
                        value={skill.desc}
                        onChange={(e) => handleSkillFieldChange(idx, 'desc', e.target.value)}
                        placeholder="Description"
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 15, background: 'white', fontFamily: 'inherit' }}
                      />
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '20px 30px',
              borderTop: '1px solid var(--slate-200)',
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              gap: 14,
              background: '#F8FAFC'
            }}>
              <span style={{ fontSize: 14, color: 'var(--slate-600)', fontWeight: 600 }}>
                Changes reflect in Live Preview box immediately.
              </span>
              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  type="button"
                  onClick={() => setActiveEditSection(null)}
                  className="btn btn-outline"
                  style={{ padding: '12px 22px', fontSize: 15, fontWeight: 800, cursor: 'pointer' }}
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    setActiveEditSection(null);
                    await handleSave();
                  }}
                  className="btn btn-primary"
                  style={{ padding: '12px 28px', fontSize: 15, background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 12, fontWeight: 900, cursor: 'pointer', boxShadow: '0 4px 14px rgba(79,70,229,0.35)', display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <Save size={20} />
                  <span>Save & Publish Live</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
};
 