import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Save, Eye, EyeOff, Plus, Trash2, Edit3, X, RefreshCw, Layers, ShieldCheck, BookOpen, Clock, Target, CheckCircle2, ArrowRight, Layout, Check, Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultHowItWorksCms = {
  pageHeroBadge: "🐣 Simple Parent Guide",
  pageHeroTitle: "How Talent Assessment Works",
  pageHeroSubtitle: "A step-by-step walkthrough of registration, play-based task activities, instant report generation, and personalized learning guidance.",
  badge: "🛣️ 5-Step Learning Journey",
  title: "How Child Talent Discovery Works",
  subtitle: "Simple, non-stressful, and parent-guided. Discover your child's innate strengths in 5 simple steps.",
  steps: [
    {
      step: '01',
      title: 'Register Your Child',
      desc: 'Create a free parent profile and enter basic information about your child (age, interests, observed habits).',
      icon: '📝',
      duration: '2 Minutes',
      color: 'from-rose-500 to-purple-500',
      details: 'Quick 2-minute registration without complex paperwork. Completely private and secure.'
    },
    {
      step: '02',
      title: 'Choose Age Group',
      desc: 'Select the age-tailored evaluation module (3–5 Yrs, 5–7 Yrs, or 7–10 Yrs) matching your child\'s developmental milestone.',
      icon: '🎯',
      duration: '1 Minute',
      color: 'from-purple-500 to-indigo-500',
      details: 'Each age bucket features scientifically calibrated games, observational scenarios, and task prompts.'
    },
    {
      step: '03',
      title: 'Complete Skill Assessment',
      desc: 'Engage in fun, play-based interactive tasks and observational activities alongside your child at home.',
      icon: '🎮',
      duration: '15-20 Minutes',
      color: 'from-indigo-500 to-cyan-500',
      details: 'No stressful exams! Activities feel like enjoyable puzzles, creative drawing, or rhythm games.'
    },
    {
      step: '04',
      title: 'Receive Talent Report',
      desc: 'Get an instant, comprehensive 12-page Talent Profile breaking down cognitive, creative, and social strengths.',
      icon: '📊',
      duration: 'Instant Download',
      color: 'from-cyan-500 to-emerald-500',
      details: 'Includes visual radar charts, benchmark percentiles, and identified hidden natural talents.'
    },
    {
      step: '05',
      title: 'Get Personalized Recommendations',
      desc: 'Unlock a customized 3-year learning pathway, recommended hobbies, books, and talent nurturing activities.',
      icon: '🚀',
      duration: 'Ongoing Guidance',
      color: 'from-emerald-500 to-amber-500',
      details: 'Direct advice on what activities to encourage and how to avoid early academic burnout.'
    }
  ],
  ctaBadge: "✨ 100% Home Play-Based Assessment",
  ctaTitle: "Ready to Discover Your Child's Core Potential?",
  ctaSubtitle: "Takes less than 20 minutes of guided observational play. Get your 12-page Talent Profile immediately.",
  ctaText: "Explore Sample Assessment Report →",
  visibility: {
    pageHero: true,
    sectionBadge: true,
    sectionTitle: true,
    sectionSubtitle: true,
    stepsList: true,
    ctaBanner: true
  }
};

export const HowItWorksCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [cms, setCms] = useState(defaultHowItWorksCms);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
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
        if (data && data.howItWorksCms) {
          setCms({
            ...defaultHowItWorksCms,
            ...data.howItWorksCms,
            visibility: { ...defaultHowItWorksCms.visibility, ...(data.howItWorksCms.visibility || {}) }
          });
        }
      }
    } catch (err) {
      console.error('Error fetching How It Works CMS:', err);
      showToast?.('Using default How It Works configuration', 'info');
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
        howItWorksCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/child-talent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        showToast?.('How It Works CMS published live successfully!', 'success');
      } else {
        throw new Error('Failed to save to backend');
      }
    } catch (err) {
      console.error('Error saving How It Works CMS:', err);
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

  const handleStepChange = (index, field, value) => {
    setCms((prev) => {
      const updatedSteps = [...prev.steps];
      updatedSteps[index] = { ...updatedSteps[index], [field]: value };
      return { ...prev, steps: updatedSteps };
    });
  };

  const handleAddStep = () => {
    const newNum = String(cms.steps.length + 1).padStart(2, '0');
    const newStep = {
      step: newNum,
      title: 'New Evaluation Step',
      desc: 'Describe the action parent or child needs to take during this milestone phase.',
      icon: '✨',
      duration: '5 Minutes',
      color: 'from-purple-500 to-indigo-500',
      details: 'Key tip or instruction note for parents.'
    };
    setCms((prev) => ({
      ...prev,
      steps: [...prev.steps, newStep]
    }));
    setActiveStepIndex(cms.steps.length);
  };

  const handleDeleteStep = (index) => {
    if (cms.steps.length <= 1) {
      showToast?.('At least 1 process step is required', 'warning');
      return;
    }
    setCms((prev) => {
      const filtered = prev.steps.filter((_, i) => i !== index);
      const renumbered = filtered.map((st, i) => ({
        ...st,
        step: String(i + 1).padStart(2, '0')
      }));
      return { ...prev, steps: renumbered };
    });
    if (activeStepIndex >= cms.steps.length - 1) {
      setActiveStepIndex(Math.max(0, cms.steps.length - 2));
    }
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
        <div>Loading How It Works CMS Editor...</div>
      </div>
    );
  }

  const selectedStep = cms.steps[activeStepIndex] || cms.steps[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, fontSize: 16 }}>
      {/* Top Page Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div className="page-title" style={{ margin: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Sparkles size={18} />
            <span>Child Talent Discovery • How It Works CMS</span>
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--slate-900)', marginTop: 4 }}>
            How It Works Editor
          </h1>
          <p style={{ fontSize: 15, color: 'var(--slate-600)', marginTop: 4 }}>
            Edit step titles, descriptions, duration badges, parent note tips, and section headers live on the website.
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
                  placeholder="e.g. 🐣 Simple Parent Guide"
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
                  placeholder="e.g. How Talent Assessment Works"
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
                  placeholder="e.g. A step-by-step walkthrough of registration..."
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

          {/* Card 2: 5-Step Timeline Cards Manager */}
          <div className="card" style={{ borderRadius: 20, border: '1.5px solid var(--slate-200)' }}>
            <div className="card-header" style={{ padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid var(--slate-100)' }}>
              <h3 style={{ fontSize: 20, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 12 }}>
                <Clock size={22} color="var(--primary)" />
                <span>2. Step-by-Step Timeline Cards ({cms.steps.length} Steps)</span>
              </h3>
              <button
                type="button"
                onClick={handleAddStep}
                style={{
                  padding: '10px 20px',
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#10B981',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(16,185,129,0.3)'
                }}
              >
                <Plus size={16} />
                <span>Add Step</span>
              </button>
            </div>

            <div className="card-body" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 22 }}>
              
              {/* Step Tabs */}
              <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 6 }}>
                {cms.steps.map((st, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    style={{
                      padding: '10px 18px',
                      borderRadius: 14,
                      fontSize: 14,
                      fontWeight: 800,
                      border: activeStepIndex === idx ? '2px solid var(--primary)' : '1.5px solid #CBD5E1',
                      background: activeStepIndex === idx ? 'rgba(79,70,229,0.08)' : 'white',
                      color: activeStepIndex === idx ? 'var(--primary)' : '#0F172A',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      flexShrink: 0
                    }}
                  >
                    <span style={{ fontSize: 16 }}>{st.icon}</span>
                    <span>Step {st.step}</span>
                  </button>
                ))}
              </div>

              {/* Selected Step Form */}
              {selectedStep && (
                <div style={{ padding: 24, borderRadius: 16, background: '#F8FAFC', border: '1.5px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: 20 }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 17, fontWeight: 900, color: 'var(--slate-900)' }}>
                      Editing Step {selectedStep.step} Details
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDeleteStep(activeStepIndex)}
                      style={{ padding: '8px 16px', borderRadius: 10, border: 'none', background: '#FEE2E2', color: '#EF4444', fontWeight: 800, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                    >
                      <Trash2 size={14} />
                      <span>Remove Step</span>
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '80px 110px 1fr', gap: 14 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 4 }}>Icon</label>
                      <input
                        type="text"
                        value={selectedStep.icon}
                        onChange={(e) => handleStepChange(activeStepIndex, 'icon', e.target.value)}
                        style={{ width: '100%', textAlign: 'center', padding: '12px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 20, background: 'white' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 4 }}>Step Num</label>
                      <input
                        type="text"
                        value={selectedStep.step}
                        onChange={(e) => handleStepChange(activeStepIndex, 'step', e.target.value)}
                        style={{ width: '100%', textAlign: 'center', padding: '12px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, fontWeight: 800, background: 'white' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 4 }}>Time Duration Badge</label>
                      <input
                        type="text"
                        value={selectedStep.duration}
                        onChange={(e) => handleStepChange(activeStepIndex, 'duration', e.target.value)}
                        placeholder="e.g. 2 Minutes"
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 15, fontWeight: 700, background: 'white' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>Step Title</label>
                    <input
                      type="text"
                      value={selectedStep.title}
                      onChange={(e) => handleStepChange(activeStepIndex, 'title', e.target.value)}
                      placeholder="e.g. Register Your Child"
                      style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, fontWeight: 900, background: 'white' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>Description</label>
                    <textarea
                      rows={3}
                      value={selectedStep.desc}
                      onChange={(e) => handleStepChange(activeStepIndex, 'desc', e.target.value)}
                      placeholder="Step instructions..."
                      style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 15, background: 'white', fontFamily: 'inherit', resize: 'vertical', lineHeight: 1.5 }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>Parent Key Note Highlight (Bullet Tip)</label>
                    <textarea
                      rows={2}
                      value={selectedStep.details || ''}
                      onChange={(e) => handleStepChange(activeStepIndex, 'details', e.target.value)}
                      placeholder="e.g. Quick 2-minute registration without complex paperwork..."
                      style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 14, background: 'white', fontFamily: 'inherit', resize: 'vertical' }}
                    />
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Card 3: Bottom Call-to-Action (CTA) Banner */}
          <div className="card" style={{ borderRadius: 20, border: '1.5px solid var(--slate-200)' }}>
            <div className="card-header" style={{ padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid var(--slate-100)' }}>
              <h3 style={{ fontSize: 20, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 12 }}>
                <Sparkles size={22} color="var(--primary)" />
                <span>3. Bottom Call-to-Action (CTA) Banner</span>
              </h3>
              {renderSectionHeaderToggle('ctaBanner', 'Show CTA Banner')}
            </div>

            <div className="card-body" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>
                  CTA Tagline Badge
                </label>
                <input
                  type="text"
                  value={cms.ctaBadge || ''}
                  onChange={(e) => setCms({ ...cms, ctaBadge: e.target.value })}
                  placeholder="e.g. ✨ 100% Home Play-Based Assessment"
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 15, fontWeight: 700, outline: 'none', background: 'white', color: '#0F172A' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>
                  CTA Headline Title
                </label>
                <input
                  type="text"
                  value={cms.ctaTitle || ''}
                  onChange={(e) => setCms({ ...cms, ctaTitle: e.target.value })}
                  placeholder="e.g. Ready to Discover Your Child's Core Potential?"
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 16, fontWeight: 900, outline: 'none', background: 'white', color: '#0F172A' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>
                  CTA Subtitle Description
                </label>
                <textarea
                  rows={2}
                  value={cms.ctaSubtitle || ''}
                  onChange={(e) => setCms({ ...cms, ctaSubtitle: e.target.value })}
                  placeholder="e.g. Takes less than 20 minutes of guided observational play..."
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 14, outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'white', color: '#0F172A' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 6 }}>
                  CTA Action Button Text
                </label>
                <input
                  type="text"
                  value={cms.ctaText || ''}
                  onChange={(e) => setCms({ ...cms, ctaText: e.target.value })}
                  placeholder="e.g. Explore Sample Assessment Report →"
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
              <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--slate-900)' }}>Ready to publish How It Works changes?</div>
              <div style={{ fontSize: 14, color: 'var(--slate-500)', marginTop: 4 }}>Click save to push all updated 5-step process timeline cards live to the website.</div>
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
                How It Works Section
              </span>
            </div>

            {/* Dark Styled Website Preview Body */}
            <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 18, maxHeight: '82vh', overflowY: 'auto' }}>
              
              {/* 1. Top Page Hero Banner Preview */}
              {(cms.visibility?.pageHero !== false) && (
                <div style={{ padding: '18px 16px', borderRadius: 16, background: 'linear-gradient(135deg, #1E1B4B, #0F172A, #312E81)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8, border: '1px solid #3730A3' }}>
                  <div style={{ margin: '0 auto', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.1)', color: '#38BDF8', border: '1px solid rgba(255,255,255,0.2)', fontSize: 11, fontWeight: 800 }}>
                    <span>{cms.pageHeroBadge || "🐣 Simple Parent Guide"}</span>
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 900, color: 'white' }}>
                    {cms.pageHeroTitle || "How Talent Assessment Works"}
                  </div>
                  <p style={{ fontSize: 11, color: '#94A3B8', margin: 0, lineHeight: 1.4 }}>
                    {cms.pageHeroSubtitle || "A step-by-step walkthrough of registration..."}
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

              {/* 3. Process Steps Timeline Preview */}
              {(cms.visibility?.stepsList !== false) && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' }}>
                  {cms.steps.map((st, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveStepIndex(i)}
                      style={{
                        padding: 14,
                        borderRadius: 14,
                        background: activeStepIndex === i ? '#1E293B' : '#111827',
                        border: activeStepIndex === i ? '1.5px solid #38BDF8' : '1px solid #1F2937',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ fontSize: 20 }}>{st.icon}</span>
                          <div>
                            <span style={{ fontSize: 9, fontWeight: 800, color: '#A78BFA', textTransform: 'uppercase' }}>Step {st.step}</span>
                            <div style={{ fontSize: 13, fontWeight: 900, color: 'white' }}>{st.title}</div>
                          </div>
                        </div>
                        <span style={{ fontSize: 10, background: 'rgba(167,139,250,0.15)', color: '#C084FC', padding: '2px 8px', borderRadius: 6, fontWeight: 800 }}>
                          ⏱️ {st.duration}
                        </span>
                      </div>
                      <div style={{ fontSize: 11, color: '#9CA3AF', lineHeight: 1.4 }}>{st.desc}</div>
                      {st.details && (
                        <div style={{ fontSize: 10, color: '#FCD34D', background: 'rgba(252,211,77,0.1)', padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span>💡</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{st.details}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* 4. Bottom CTA Banner Preview */}
              {(cms.visibility?.ctaBanner !== false) && (
                <div style={{ padding: '20px 16px', borderRadius: 16, background: 'linear-gradient(135deg, #6B21A8, #BE123C, #312E81)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 10, border: '1px solid #7E22CE', boxShadow: '0 10px 25px rgba(126,34,206,0.3)' }}>
                  <div style={{ margin: '0 auto', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.12)', color: '#FDE047', border: '1px solid rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 800 }}>
                    <span>{cms.ctaBadge || "✨ 100% Home Play-Based Assessment"}</span>
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 900, color: 'white', lineHeight: 1.3 }}>
                    {cms.ctaTitle || "Ready to Discover Your Child's Core Potential?"}
                  </div>
                  <p style={{ fontSize: 10, color: '#F3E8FF', margin: 0, lineHeight: 1.4 }}>
                    {cms.ctaSubtitle || "Takes less than 20 minutes of guided observational play..."}
                  </p>
                  <button type="button" style={{ margin: '6px auto 0', padding: '10px 20px', borderRadius: 12, background: 'white', color: '#581C87', border: 'none', fontWeight: 900, fontSize: 11, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span>{cms.ctaText || "Explore Sample Assessment Report →"}</span>
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
