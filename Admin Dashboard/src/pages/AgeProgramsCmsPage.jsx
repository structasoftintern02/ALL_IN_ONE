import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Save, Eye, EyeOff, Plus, Trash2, Edit3, X, RefreshCw, Layers, ShieldCheck, BookOpen, Clock, Target, CheckCircle2, ArrowRight, Layout, Check
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultAgeProgramsCms = {
  pageHeroBadge: "⚡ Age-Tailored Modules",
  pageHeroTitle: "Age-wise Development Programs",
  pageHeroSubtitle: "Explore dedicated skill evaluation programs tailored for 3-5 years, 5-7 years, and 7-10 years milestone groups.",
  badge: "🌱 Age-wise Development Programs",
  title: "Tailored Programs for Every Milestone",
  subtitle: "Children develop distinct cognitive and physical capabilities at different ages. Our programs match your child's exact developmental stage.",
  programs: [
    {
      id: 'age-3-5',
      ageRange: '3 – 5 Years',
      title: 'Early Discovery & Foundation',
      subtitle: 'Observation & Natural Curiosity Stage',
      icon: '🌱',
      badge: 'Foundation Stage',
      duration: '1 Week',
      focus: 'Playful Observation & Sensory Exploration',
      ctaText: 'Start 3 – 5 Years Program',
      outcomes: [
        'Identifies primary sensory learning preference (Visual, Auditory, Kinaesthetic)',
        'Establishes baseline motor & hand-eye coordination benchmarks',
        'Provides early guidance for parent-child playful interaction'
      ],
      modules: [
        { name: 'Early Observation', desc: 'Tracking curiosity patterns through visual & auditory stimuli' },
        { name: 'Motor Skills', desc: 'Fine & gross motor coordination through guided activities' },
        { name: 'Communication', desc: 'Expression, vocabulary comprehension, and storytelling response' },
        { name: 'Social Behaviour', desc: 'Empathy, sharing, and peer interaction indicators' },
        { name: 'Curiosity Development', desc: 'Questioning habits and problem-driven exploration' }
      ]
    },
    {
      id: 'age-5-7',
      ageRange: '5 – 7 Years',
      title: 'Creative & Cognitive Growth',
      subtitle: 'Exploration & Expression Stage',
      icon: '🚀',
      badge: 'Growth Stage',
      duration: '1 Week',
      focus: 'Logical Thinking & Creative Problem Solving',
      ctaText: 'Start 5 – 7 Years Program',
      outcomes: [
        'Discovers latent artistic, mathematical, or linguistic inclinations',
        'Pinpoints attention span strengths and optimal study environment',
        'Recommends tailored co-curricular activities and hobbies'
      ],
      modules: [
        { name: 'Creativity', desc: 'Divergent thinking, imaginative storytelling, and artistic expression' },
        { name: 'Memory Skills', desc: 'Pattern recall, sequence retention, and auditory memory' },
        { name: 'Logical Thinking', desc: 'Basic cause-and-effect, sorting, and spatial puzzle solving' },
        { name: 'Reading Readiness', desc: 'Phonics awareness, letter-sound association, and focus span' },
        { name: 'Learning Behaviour', desc: 'Task persistence, self-correction, and attention span' }
      ]
    },
    {
      id: 'age-7-10',
      ageRange: '7 – 10 Years',
      title: 'Talent Mapping & Leadership',
      subtitle: 'Specialization & Mastery Stage',
      icon: '🏆',
      badge: 'Advanced Mapping',
      duration: '1 Week',
      focus: 'Comprehensive Skill Profiling & Future Potential',
      ctaText: 'Start 7 – 10 Years Program',
      outcomes: [
        'Generates a comprehensive 12-page Talent Discovery & Aptitude Profile',
        'Provides a 3-year personalized skill development roadmap',
        'Recommends specialized competitions, workshops, and mentorship'
      ],
      modules: [
        { name: 'Talent Mapping', desc: 'Identification of core domain excellence (STEM, Arts, Leadership, Sports)' },
        { name: 'Leadership Skills', desc: 'Team coordination, initiative taking, and decision making' },
        { name: 'Problem Solving', desc: 'Multi-step analytical reasoning and strategy creation' },
        { name: 'Critical Thinking', desc: 'Evaluating information, questioning assumptions, and logical debate' },
        { name: 'Advanced Learning Skills', desc: 'Self-directed study habits, project completion, and grit' }
      ]
    }
  ],
  visibility: {
    pageHero: true,
    sectionBadge: true,
    sectionTitle: true,
    sectionSubtitle: true,
    programsList: true,
    modulesList: true,
    outcomesList: true,
    bottomQuickCards: true
  }
};

export const AgeProgramsCmsPage = () => {
  const { showToast } = useApp();
  const [cms, setCms] = useState(defaultAgeProgramsCms);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeEditSection, setActiveEditSection] = useState(null); // 'sectionHeader' | 'programCards'
  const [selectedProgIndex, setSelectedProgIndex] = useState(0);
  const [activePreviewTab, setActivePreviewTab] = useState('age-3-5');

  const [newOutcomeText, setNewOutcomeText] = useState('');
  const [newModule, setNewModule] = useState({ name: '', desc: '' });

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/child-talent`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.ageProgramsCms) {
          setCms({
            ...defaultAgeProgramsCms,
            ...data.ageProgramsCms,
            visibility: {
              ...defaultAgeProgramsCms.visibility,
              ...(data.ageProgramsCms.visibility || {})
            }
          });
        }
      }
    } catch (err) {
      console.error('Failed to fetch Age Programs CMS data:', err);
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
        ageProgramsCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/child-talent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFullCms)
      });

      if (res.ok) {
        showToast('Age Programs CMS updated & published live!', 'success');
      } else {
        showToast('Failed to update Age Programs CMS', 'error');
      }
    } catch (err) {
      console.error('Error saving Age Programs CMS:', err);
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

  const handleProgramFieldChange = (idx, field, value) => {
    const updated = [...cms.programs];
    updated[idx] = { ...updated[idx], [field]: value };
    setCms({ ...cms, programs: updated });
  };

  const handleAddOutcome = (progIdx) => {
    if (!newOutcomeText.trim()) return;
    const updated = [...cms.programs];
    const currentOutcomes = updated[progIdx].outcomes || [];
    updated[progIdx] = {
      ...updated[progIdx],
      outcomes: [...currentOutcomes, newOutcomeText.trim()]
    };
    setCms({ ...cms, programs: updated });
    setNewOutcomeText('');
    showToast('Key Learning outcome added!', 'success');
  };

  const handleOutcomeChange = (progIdx, outcomeIdx, value) => {
    const updated = [...cms.programs];
    const currentOutcomes = [...(updated[progIdx].outcomes || [])];
    currentOutcomes[outcomeIdx] = value;
    updated[progIdx] = { ...updated[progIdx], outcomes: currentOutcomes };
    setCms({ ...cms, programs: updated });
  };

  const handleRemoveOutcome = (progIdx, outcomeIdx) => {
    const updated = [...cms.programs];
    const currentOutcomes = (updated[progIdx].outcomes || []).filter((_, i) => i !== outcomeIdx);
    updated[progIdx] = { ...updated[progIdx], outcomes: currentOutcomes };
    setCms({ ...cms, programs: updated });
    showToast('Outcome removed', 'info');
  };

  const handleAddModule = (progIdx) => {
    if (!newModule.name.trim()) return;
    const updated = [...cms.programs];
    const currentModules = updated[progIdx].modules || [];
    updated[progIdx] = {
      ...updated[progIdx],
      modules: [...currentModules, { name: newModule.name.trim(), desc: newModule.desc.trim() }]
    };
    setCms({ ...cms, programs: updated });
    setNewModule({ name: '', desc: '' });
    showToast('Assessment module added!', 'success');
  };

  const handleModuleChange = (progIdx, modIdx, field, value) => {
    const updated = [...cms.programs];
    const currentModules = [...(updated[progIdx].modules || [])];
    currentModules[modIdx] = { ...currentModules[modIdx], [field]: value };
    updated[progIdx] = { ...updated[progIdx], modules: currentModules };
    setCms({ ...cms, programs: updated });
  };

  const handleRemoveModule = (progIdx, modIdx) => {
    const updated = [...cms.programs];
    const currentModules = (updated[progIdx].modules || []).filter((_, i) => i !== modIdx);
    updated[progIdx] = { ...updated[progIdx], modules: currentModules };
    setCms({ ...cms, programs: updated });
    showToast('Module removed', 'info');
  };

  const renderSectionHeaderToggle = (key, label) => {
    const isEnabled = cms.visibility ? cms.visibility[key] !== false : true;
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <label style={{ fontSize: 14, fontWeight: 800, color: 'var(--slate-800)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>{label}</span>
          {!isEnabled && (
            <span style={{ fontSize: 11, padding: '2px 10px', borderRadius: 8, background: '#FEE2E2', color: '#EF4444', fontWeight: 800 }}>
              Disabled (Hidden)
            </span>
          )}
        </label>
        <button
          type="button"
          onClick={() => toggleVisibility(key)}
          style={{
            padding: '6px 16px',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 800,
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            transition: 'all 0.2s',
            background: isEnabled ? 'rgba(16,185,129,0.15)' : '#F1F5F9',
            color: isEnabled ? '#059669' : '#64748B'
          }}
        >
          {isEnabled ? <Eye size={15} color="#059669" /> : <EyeOff size={15} color="#64748B" />}
          <span>{isEnabled ? 'Enabled' : 'Disabled'}</span>
        </button>
      </div>
    );
  };

  const selectedProg = cms.programs[selectedProgIndex] || cms.programs[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, fontSize: 15 }}>
      {/* Top Page Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div className="page-title" style={{ margin: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Sparkles size={16} />
            <span>Child Talent Discovery • Programs Section CMS</span>
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: 'var(--slate-900)', marginTop: 4 }}>Age Programs & Modules Editor</h1>
          <p style={{ fontSize: 14, color: 'var(--slate-600)', marginTop: 4 }}>Edit page titles, stage cards, key learning outcomes, assessment modules, and CTA buttons live on the website.</p>
        </div>
      </div>

      {/* Main Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'start' }}>
        
        {/* Left Column: Editor Cards */}
        <div style={{ flex: '1 1 560px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          
          {/* Card 1: Page Hero & Section Headers */}
          <div className="card" style={{ borderRadius: 18, border: '1px solid var(--slate-200)' }}>
            <div className="card-header" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)' }}>
              <h3 style={{ fontSize: 18, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 10 }}>
                <BookOpen size={20} color="var(--primary)" />
                <span>1. Page Hero Banner & Section Title</span>
              </h3>
              <button
                type="button"
                onClick={() => setActiveEditSection('sectionHeader')}
                style={{
                  padding: '8px 20px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--primary)',
                  color: 'white',
                  boxShadow: '0 3px 10px rgba(79,70,229,0.3)'
                }}
              >
                <Edit3 size={15} />
                <span>Edit Section Headers</span>
              </button>
            </div>
            <div className="card-body" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                {renderSectionHeaderToggle('pageHero', 'Page Top Hero Banner Tagline')}
                <input
                  type="text"
                  value={cms.pageHeroBadge || ''}
                  onChange={(e) => setCms({ ...cms, pageHeroBadge: e.target.value })}
                  placeholder="e.g. ⚡ Age-Tailored Modules"
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
                  placeholder="e.g. Age-wise Development Programs"
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
                  placeholder="e.g. Explore dedicated skill evaluation programs tailored for 3–5 years..."
                  style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1.5px solid #CBD5E1', fontSize: 15, outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'white', color: '#0F172A' }}
                />
              </div>

              <div>
                {renderSectionHeaderToggle('sectionBadge', 'Section Tagline Badge')}
                <input
                  type="text"
                  value={cms.badge}
                  onChange={(e) => setCms({ ...cms, badge: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid var(--slate-200)', fontSize: 15, fontWeight: 600, outline: 'none', background: 'white' }}
                />
              </div>

              <div>
                {renderSectionHeaderToggle('sectionTitle', 'Section Main Headline')}
                <input
                  type="text"
                  value={cms.title}
                  onChange={(e) => setCms({ ...cms, title: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid var(--slate-200)', fontSize: 16, fontWeight: 800, outline: 'none', background: 'white' }}
                />
              </div>

              <div>
                {renderSectionHeaderToggle('sectionSubtitle', 'Subtitle Description')}
                <textarea
                  rows={3}
                  value={cms.subtitle}
                  onChange={(e) => setCms({ ...cms, subtitle: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid var(--slate-200)', fontSize: 15, outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'white', lineHeight: 1.5 }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Age Milestone Program Stage Selector & Card Editor */}
          <div className="card" style={{ borderRadius: 18, border: '1px solid var(--slate-200)' }}>
            <div className="card-header" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--slate-100)' }}>
              <h3 style={{ fontSize: 18, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 10 }}>
                <Layers size={20} color="var(--purple)" />
                <span>2. Age Milestone Showcase & Modules</span>
              </h3>
              <button
                type="button"
                onClick={() => setActiveEditSection('programCards')}
                style={{
                  padding: '8px 20px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--purple)',
                  color: 'white',
                  boxShadow: '0 3px 10px rgba(168,85,247,0.3)'
                }}
              >
                <Edit3 size={15} />
                <span>Edit All Program Cards</span>
              </button>
            </div>

            <div className="card-body" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
              
              {/* Stage Card Selector Tabs */}
              <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4 }}>
                {cms.programs.map((prog, idx) => (
                  <button
                    key={prog.id || idx}
                    type="button"
                    onClick={() => setSelectedProgIndex(idx)}
                    style={{
                      padding: '10px 20px',
                      borderRadius: 14,
                      fontSize: 14,
                      fontWeight: 800,
                      border: selectedProgIndex === idx ? '2px solid var(--primary)' : '1px solid var(--slate-200)',
                      background: selectedProgIndex === idx ? 'rgba(79,70,229,0.08)' : 'white',
                      color: selectedProgIndex === idx ? 'var(--primary)' : 'var(--slate-800)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      transition: 'all 0.2s'
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{prog.icon}</span>
                    <span>{prog.ageRange}</span>
                  </button>
                ))}
              </div>

              {/* Active Program Details Editor Form */}
              {selectedProg && (
                <div style={{ padding: 20, borderRadius: 16, background: '#F8FAFC', border: '1.5px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 18 }}>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr 1fr', gap: 12 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 4 }}>Icon</label>
                      <input
                        type="text"
                        value={selectedProg.icon}
                        onChange={(e) => handleProgramFieldChange(selectedProgIndex, 'icon', e.target.value)}
                        style={{ width: '100%', textAlign: 'center', padding: '10px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 20, background: 'white' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 4 }}>Age Milestone</label>
                      <input
                        type="text"
                        value={selectedProg.ageRange}
                        onChange={(e) => handleProgramFieldChange(selectedProgIndex, 'ageRange', e.target.value)}
                        placeholder="e.g. 3 – 5 Years"
                        style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 14, fontWeight: 800, background: 'white' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 4 }}>Stage Badge</label>
                      <input
                        type="text"
                        value={selectedProg.badge}
                        onChange={(e) => handleProgramFieldChange(selectedProgIndex, 'badge', e.target.value)}
                        placeholder="e.g. Foundation Stage"
                        style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 14, fontWeight: 600, background: 'white' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 4 }}>Program Title</label>
                    <input
                      type="text"
                      value={selectedProg.title}
                      onChange={(e) => handleProgramFieldChange(selectedProgIndex, 'title', e.target.value)}
                      placeholder="Title"
                      style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 15, fontWeight: 800, background: 'white' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 4 }}>Stage Subtitle Description</label>
                    <input
                      type="text"
                      value={selectedProg.subtitle}
                      onChange={(e) => handleProgramFieldChange(selectedProgIndex, 'subtitle', e.target.value)}
                      placeholder="Subtitle description"
                      style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 14, background: 'white' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 4 }}>Duration Pill</label>
                      <input
                        type="text"
                        value={selectedProg.duration}
                        onChange={(e) => handleProgramFieldChange(selectedProgIndex, 'duration', e.target.value)}
                        placeholder="e.g. 1 Week"
                        style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 14, background: 'white' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 4 }}>CTA Button Text</label>
                      <input
                        type="text"
                        value={selectedProg.ctaText || ''}
                        onChange={(e) => handleProgramFieldChange(selectedProgIndex, 'ctaText', e.target.value)}
                        placeholder="e.g. Start 3 – 5 Years Program"
                        style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 14, fontWeight: 800, background: 'white' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', marginBottom: 4 }}>Focus & Objectives</label>
                    <input
                      type="text"
                      value={selectedProg.focus}
                      onChange={(e) => handleProgramFieldChange(selectedProgIndex, 'focus', e.target.value)}
                      placeholder="Focus area"
                      style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 14, background: 'white' }}
                    />
                  </div>

                  {/* Key Learning Outcomes Section */}
                  <div style={{ marginTop: 8, paddingTop: 16, borderTop: '1.5px solid var(--slate-200)' }}>
                    <div style={{ fontSize: 14, fontWeight: 900, color: 'var(--slate-900)', marginBottom: 12 }}>
                      🎯 Key Learning Outcomes ({selectedProg.outcomes?.length || 0})
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {(selectedProg.outcomes || []).map((outText, oIdx) => (
                        <div key={oIdx} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <CheckCircle2 size={18} color="#10B981" />
                          <input
                            type="text"
                            value={outText}
                            onChange={(e) => handleOutcomeChange(selectedProgIndex, oIdx, e.target.value)}
                            style={{ flex: 1, padding: '10px 14px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 13, fontWeight: 600, background: 'white' }}
                          />
                          <button type="button" onClick={() => handleRemoveOutcome(selectedProgIndex, oIdx)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#EF4444' }}>
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}

                      {/* Add Outcome Input */}
                      <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                        <input
                          type="text"
                          placeholder="Add new learning outcome..."
                          value={newOutcomeText}
                          onChange={(e) => setNewOutcomeText(e.target.value)}
                          style={{ flex: 1, padding: '10px 14px', borderRadius: 10, border: '1.5px dashed var(--slate-300)', fontSize: 13, background: 'white' }}
                        />
                        <button type="button" onClick={() => handleAddOutcome(selectedProgIndex)} style={{ padding: '10px 18px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 10, fontWeight: 800, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <Plus size={16} /> Add Outcome
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Assessment Modules Section */}
                  <div style={{ marginTop: 8, paddingTop: 16, borderTop: '1.5px solid var(--slate-200)' }}>
                    <div style={{ fontSize: 14, fontWeight: 900, color: 'var(--slate-900)', marginBottom: 12 }}>
                      📋 Assessment Modules List ({selectedProg.modules?.length || 0})
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {(selectedProg.modules || []).map((mod, mIdx) => (
                        <div key={mIdx} style={{ padding: 14, borderRadius: 12, background: 'white', border: '1.5px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: 12, fontWeight: 900, color: 'var(--primary)' }}>Module #{mIdx + 1}</span>
                            <button type="button" onClick={() => handleRemoveModule(selectedProgIndex, mIdx)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#EF4444' }}>
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <input
                            type="text"
                            value={mod.name}
                            onChange={(e) => handleModuleChange(selectedProgIndex, mIdx, 'name', e.target.value)}
                            placeholder="Module Title (e.g. Early Observation)"
                            style={{ padding: '10px 12px', borderRadius: 8, border: '1.5px solid var(--slate-200)', fontSize: 13, fontWeight: 800 }}
                          />
                          <input
                            type="text"
                            value={mod.desc}
                            onChange={(e) => handleModuleChange(selectedProgIndex, mIdx, 'desc', e.target.value)}
                            placeholder="Module Description"
                            style={{ padding: '10px 12px', borderRadius: 8, border: '1.5px solid var(--slate-200)', fontSize: 13 }}
                          />
                        </div>
                      ))}

                      {/* Add Module Input */}
                      <div style={{ padding: 14, borderRadius: 12, background: 'white', border: '1.5px dashed var(--slate-300)', display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
                        <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--slate-800)' }}>Add New Assessment Module</div>
                        <input
                          type="text"
                          placeholder="Module Title (e.g. Memory Skills)"
                          value={newModule.name}
                          onChange={(e) => setNewModule({ ...newModule, name: e.target.value })}
                          style={{ padding: '10px 12px', borderRadius: 8, border: '1.5px solid var(--slate-200)', fontSize: 13, fontWeight: 700 }}
                        />
                        <input
                          type="text"
                          placeholder="Module Description"
                          value={newModule.desc}
                          onChange={(e) => setNewModule({ ...newModule, desc: e.target.value })}
                          style={{ padding: '10px 12px', borderRadius: 8, border: '1.5px solid var(--slate-200)', fontSize: 13 }}
                        />
                        <button type="button" onClick={() => handleAddModule(selectedProgIndex)} style={{ padding: '10px 18px', background: 'var(--purple)', color: 'white', border: 'none', borderRadius: 8, fontWeight: 800, fontSize: 13, cursor: 'pointer', alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <Plus size={16} /> Add Module
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Bottom Save & Publish Action Bar */}
          <div style={{
            padding: '22px 28px',
            borderRadius: 18,
            background: 'white',
            border: '1px solid var(--slate-200)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            flexWrap: 'wrap',
            gap: 16
          }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 900, color: 'var(--slate-900)' }}>Ready to publish Age Programs changes?</div>
              <div style={{ fontSize: 13, color: 'var(--slate-500)', marginTop: 3 }}>Click save to push all updated milestone programs and stage descriptions live to the website.</div>
            </div>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="btn btn-primary"
              style={{
                padding: '14px 32px',
                fontSize: 15,
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                borderRadius: 14,
                boxShadow: '0 4px 16px rgba(79,70,229,0.35)'
              }}
            >
              {saving ? <RefreshCw size={20} style={{ animation: 'spin 1s linear infinite' }} /> : <Save size={20} />}
              <span>{saving ? 'Publishing Changes...' : 'Save & Publish Live'}</span>
            </button>
          </div>

        </div>

        {/* Right Column: High-End Live Website Real-Time Preview Box */}
        <div style={{ flex: '0 0 380px', width: 380, maxWidth: '100%', position: 'sticky', top: 80 }}>
          <div className="card" style={{ background: '#090D16', color: 'white', borderColor: '#1E293B', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.35)', borderRadius: 18 }}>
            
            {/* Header bar */}
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#020617' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 800, color: '#38BDF8' }}>
                <Eye size={16} />
                <span>Live Real-Time Website Preview</span>
              </div>
              <span style={{ fontSize: 10, background: '#1E293B', color: '#94A3B8', padding: '3px 10px', borderRadius: 8, fontWeight: 800 }}>
                Programs Section
              </span>
            </div>

            {/* Dark Styled Website Preview Body */}
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16, maxHeight: '82vh', overflowY: 'auto' }}>
              
              {/* 1. Top Page Hero Banner Preview */}
              {(cms.visibility?.pageHero !== false) && (
                <div style={{ padding: '16px 14px', borderRadius: 14, background: 'linear-gradient(135deg, #1E1B4B, #0F172A, #3B0764)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6, border: '1px solid #312E81' }}>
                  <div style={{ margin: '0 auto', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.1)', color: '#67E8F9', border: '1px solid rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 800 }}>
                    <span>{cms.pageHeroBadge || "⚡ Age-Tailored Modules"}</span>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: 'white' }}>
                    {cms.pageHeroTitle || "Age-wise Development Programs"}
                  </div>
                  <p style={{ fontSize: 10, color: '#CBD5E1', margin: 0, lineHeight: 1.3 }}>
                    {cms.pageHeroSubtitle || "Explore dedicated skill evaluation programs tailored for 3–5 years, 5–7 years, and 7–10 years milestone groups."}
                  </p>
                </div>
              )}

              {/* 2. Section Header Preview */}
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {(cms.visibility?.sectionBadge !== false) && (
                  <div style={{ margin: '0 auto', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 999, background: 'rgba(244,63,94,0.15)', color: '#FB7185', border: '1px solid rgba(244,63,94,0.3)', fontSize: 11, fontWeight: 800 }}>
                    <span>{cms.badge}</span>
                  </div>
                )}

                {(cms.visibility?.sectionTitle !== false) && (
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: 'white', margin: 0 }}>
                    {cms.title}
                  </h3>
                )}

                {(cms.visibility?.sectionSubtitle !== false) && (
                  <p style={{ fontSize: 11, color: '#94A3B8', margin: 0, lineHeight: 1.4 }}>
                    {cms.subtitle}
                  </p>
                )}
              </div>

              {/* 3. Age Program Tab Pills Preview */}
              {(cms.visibility?.programsList !== false) && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                  {cms.programs.map((p) => {
                    const isSelected = activePreviewTab === p.id || (activePreviewTab === 'age-3-5' && !cms.programs.some(x => x.id === activePreviewTab) && p === cms.programs[0]);
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setActivePreviewTab(p.id)}
                        style={{
                          padding: '6px 14px',
                          borderRadius: 10,
                          fontSize: 11,
                          fontWeight: 800,
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          background: isSelected ? 'linear-gradient(135deg, #EC4899, #8B5CF6)' : '#1E293B',
                          color: isSelected ? 'white' : '#CBD5E1'
                        }}
                      >
                        <span>{p.icon}</span>
                        <span>{p.ageRange}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* 4. Active Program Card Showcase Box */}
              {(cms.visibility?.programsList !== false) && (
                <div style={{ padding: 16, borderRadius: 16, background: '#111827', border: '1px solid #1F2937', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {(() => {
                    const activeP = cms.programs.find(p => p.id === activePreviewTab) || cms.programs[0];
                    if (!activeP) return null;
                    return (
                      <>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 38, height: 38, borderRadius: 12, background: 'linear-gradient(135deg, #EC4899, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                            {activeP.icon}
                          </div>
                          <div>
                            <span style={{ fontSize: 9, fontWeight: 800, color: '#F43F5E', textTransform: 'uppercase', background: 'rgba(244,63,94,0.15)', padding: '2px 8px', borderRadius: 4 }}>{activeP.badge}</span>
                            <div style={{ fontSize: 14, fontWeight: 900, color: 'white', marginTop: 2 }}>{activeP.title}</div>
                            <div style={{ fontSize: 10, color: '#9CA3AF' }}>{activeP.subtitle}</div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, fontSize: 10, color: '#CBD5E1' }}>
                          <div style={{ background: '#1F2937', padding: '4px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
                            <Clock size={12} color="#A78BFA" />
                            <span>{activeP.duration}</span>
                          </div>
                          <div style={{ background: '#1F2937', padding: '4px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
                            <Target size={12} color="#34D399" />
                            <span>{activeP.focus}</span>
                          </div>
                        </div>

                        {(activeP.outcomes && activeP.outcomes.length > 0) && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 4 }}>
                            <span style={{ fontSize: 10, fontWeight: 800, color: '#9CA3AF', textTransform: 'uppercase' }}>Key Learning Outcomes:</span>
                            {activeP.outcomes.map((out, oI) => (
                              <div key={oI} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 10, color: '#D1D5DB' }}>
                                <CheckCircle2 size={13} color="#10B981" style={{ flexShrink: 0, marginTop: 1 }} />
                                <span>{out}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <button type="button" style={{ width: '100%', padding: '10px', borderRadius: 10, background: 'linear-gradient(135deg, #EC4899, #8B5CF6)', color: 'white', border: 'none', fontWeight: 900, fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 4 }}>
                          <span>{activeP.ctaText || `Start ${activeP.ageRange} Program`}</span>
                          <ArrowRight size={13} />
                        </button>

                        {(activeP.modules && activeP.modules.length > 0) && (
                          <div style={{ borderTop: '1px solid #1F2937', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <span style={{ fontSize: 10, fontWeight: 800, color: '#9CA3AF', textTransform: 'uppercase' }}>
                              Assessment Modules Included ({activeP.modules.length}):
                            </span>
                            {activeP.modules.map((mod, mI) => (
                              <div key={mI} style={{ padding: 8, borderRadius: 10, background: '#1F2937', display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: 22, height: 22, borderRadius: 8, background: '#EC4899', color: 'white', fontSize: 9, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                  0{mI + 1}
                                </div>
                                <div style={{ overflow: 'hidden' }}>
                                  <div style={{ fontSize: 10, fontWeight: 800, color: 'white', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{mod.name}</div>
                                  <div style={{ fontSize: 9, color: '#9CA3AF', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{mod.desc}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              )}

              {/* 5. Bottom 3 Overview Cards Preview */}
              {(cms.visibility?.programsList !== false && cms.programs?.length > 0) && (
                <div style={{ borderTop: '1px solid #1F2937', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span style={{ fontSize: 10, fontWeight: 800, color: '#9CA3AF', textTransform: 'uppercase', textAlign: 'center' }}>
                    All Developmental Milestone Stages:
                  </span>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
                    {cms.programs.map((p) => (
                      <div key={p.id} style={{ padding: 8, borderRadius: 10, background: '#111827', border: p.id === activePreviewTab ? '1px solid #EC4899' : '1px solid #1F2937', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 4, cursor: 'pointer' }} onClick={() => setActivePreviewTab(p.id)}>
                        <span style={{ fontSize: 16 }}>{p.icon}</span>
                        <div style={{ fontSize: 9, fontWeight: 900, color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.title}</div>
                        <span style={{ fontSize: 8, color: '#A78BFA', fontWeight: 700 }}>{p.ageRange}</span>
                      </div>
                    ))}
                  </div>
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
              maxWidth: 820,
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
              padding: '20px 28px',
              borderBottom: '1px solid var(--slate-100)',
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              background: '#F8FAFC'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(168,85,247,0.15))', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Edit3 size={22} color="var(--primary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: 'var(--slate-900)', margin: 0 }}>
                    {activeEditSection === 'sectionHeader' && 'Edit Section Banner & Headers'}
                    {activeEditSection === 'programCards' && 'Edit All Age Milestone Programs'}
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--slate-500)', marginTop: 2, marginBottom: 0 }}>
                    Modify content fields specifically for this section.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveEditSection(null)}
                style={{ border: 'none', background: 'var(--slate-100)', cursor: 'pointer', color: 'var(--slate-500)', width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 20, overflowY: 'auto', flex: 1 }}>
              
              {activeEditSection === 'sectionHeader' && (
                <>
                  <div>
                    {renderSectionHeaderToggle('pageHero', 'Page Top Hero Banner Tagline')}
                    <input
                      type="text"
                      value={cms.pageHeroBadge || ''}
                      onChange={(e) => setCms({ ...cms, pageHeroBadge: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid var(--slate-200)', fontSize: 15, outline: 'none', background: 'white' }}
                    />
                  </div>

                  <div>
                    {renderSectionHeaderToggle('sectionBadge', 'Section Tagline Badge')}
                    <input
                      type="text"
                      value={cms.badge}
                      onChange={(e) => setCms({ ...cms, badge: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid var(--slate-200)', fontSize: 15, outline: 'none', background: 'white' }}
                    />
                  </div>

                  <div>
                    {renderSectionHeaderToggle('sectionTitle', 'Section Main Headline')}
                    <input
                      type="text"
                      value={cms.title}
                      onChange={(e) => setCms({ ...cms, title: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid var(--slate-200)', fontSize: 16, fontWeight: 800, outline: 'none', background: 'white' }}
                    />
                  </div>

                  <div>
                    {renderSectionHeaderToggle('sectionSubtitle', 'Subtitle Description')}
                    <textarea
                      rows={4}
                      value={cms.subtitle}
                      onChange={(e) => setCms({ ...cms, subtitle: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid var(--slate-200)', fontSize: 15, outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'white' }}
                    />
                  </div>
                </>
              )}

              {activeEditSection === 'programCards' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {cms.programs.map((prog, idx) => (
                    <div key={idx} style={{ padding: 18, borderRadius: 16, background: '#F8FAFC', border: '1.5px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 13, fontWeight: 900, color: 'var(--slate-600)', textTransform: 'uppercase' }}>Program Card #{idx + 1} ({prog.ageRange})</span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr 1fr', gap: 10 }}>
                        <input
                          type="text"
                          value={prog.icon}
                          onChange={(e) => handleProgramFieldChange(idx, 'icon', e.target.value)}
                          placeholder="Icon"
                          style={{ textAlign: 'center', padding: '10px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 20, background: 'white' }}
                        />
                        <input
                          type="text"
                          value={prog.ageRange}
                          onChange={(e) => handleProgramFieldChange(idx, 'ageRange', e.target.value)}
                          placeholder="Age Range"
                          style={{ padding: '10px 14px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 14, fontWeight: 800, background: 'white' }}
                        />
                        <input
                          type="text"
                          value={prog.badge}
                          onChange={(e) => handleProgramFieldChange(idx, 'badge', e.target.value)}
                          placeholder="Stage Badge"
                          style={{ padding: '10px 14px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 14, background: 'white' }}
                        />
                      </div>

                      <input
                        type="text"
                        value={prog.title}
                        onChange={(e) => handleProgramFieldChange(idx, 'title', e.target.value)}
                        placeholder="Title"
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 15, fontWeight: 800, background: 'white' }}
                      />

                      <input
                        type="text"
                        value={prog.subtitle}
                        onChange={(e) => handleProgramFieldChange(idx, 'subtitle', e.target.value)}
                        placeholder="Subtitle description"
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 14, background: 'white' }}
                      />

                      <input
                        type="text"
                        value={prog.ctaText || ''}
                        onChange={(e) => handleProgramFieldChange(idx, 'ctaText', e.target.value)}
                        placeholder="CTA Button Text"
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1.5px solid var(--slate-200)', fontSize: 14, fontWeight: 800, background: 'white' }}
                      />
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '18px 28px',
              borderTop: '1px solid var(--slate-200)',
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              gap: 12,
              background: '#F8FAFC'
            }}>
              <span style={{ fontSize: 13, color: 'var(--slate-600)', fontWeight: 600 }}>
                Changes reflect in Live Preview box immediately.
              </span>
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  type="button"
                  onClick={() => setActiveEditSection(null)}
                  className="btn btn-outline"
                  style={{ padding: '12px 20px', fontSize: 14, fontWeight: 800, cursor: 'pointer' }}
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
                  style={{ padding: '12px 26px', fontSize: 14, background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 12, fontWeight: 900, cursor: 'pointer', boxShadow: '0 4px 14px rgba(79,70,229,0.35)', display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <Save size={18} />
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
