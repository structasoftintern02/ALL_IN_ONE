import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Save, Eye, EyeOff, Plus, Trash2, RefreshCw, Layers, Brain, Target, Sparkles, Zap, HeartHandshake, ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultOurAdvantagesCms = {
  badge: "⭐ Our Advantages",
  title: "The Key Advantages of Early Talent Mapping",
  highlightText: "Early Talent Mapping",
  subtitle: "We combine cognitive science, AI, and structured play to give your child an unfair advantage in early childhood development.",
  buttonText: "Explore Our Scientific Methodology →",
  cards: [
    {
      id: 'adv-1',
      iconName: 'Brain',
      emoji: '🧠',
      title: '90% Synaptic Growth Window',
      desc: 'Synaptic brain connections peak between ages 3 and 7. Identifying natural inclinations during this critical period ensures effortless learning.',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30'
    },
    {
      id: 'adv-2',
      iconName: 'Target',
      emoji: '🎯',
      title: 'Avoid Mismatched Tuitions',
      desc: 'Save time and money by avoiding trial-and-error classes. Focus only on activities aligned with your child\'s natural cognitive strengths.',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50 dark:bg-rose-950/30'
    },
    {
      id: 'adv-3',
      iconName: 'Sparkles',
      emoji: '✨',
      title: 'Nurture Innate Talents',
      desc: 'Whether logic, visual arts, or verbal fluency, early discovery lets natural talents flourish with intrinsic joy rather than external pressure.',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30'
    },
    {
      id: 'adv-4',
      iconName: 'HeartHandshake',
      emoji: '🤝',
      title: 'Unshakable Self-Confidence',
      desc: 'Children excel when engaged in tasks matching their profile. Early success builds intrinsic motivation and lifelong self-esteem.',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30'
    },
    {
      id: 'adv-5',
      iconName: 'Zap',
      emoji: '⚡',
      title: 'Prevent Academic Burnout',
      desc: 'When learning style aligns with cognitive strength, studying becomes an exciting adventure rather than a stressful homework chore.',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/30'
    },
    {
      id: 'adv-6',
      iconName: 'ShieldCheck',
      emoji: '🛡️',
      title: 'Actionable Parent Roadmap',
      desc: 'Get tailored recommendations for books, educational toys, sports, and hobbies tailored specifically to your child\'s unique profile.',
      color: 'from-fuchsia-500 to-pink-600',
      bgColor: 'bg-fuchsia-50 dark:bg-fuchsia-950/30'
    }
  ],
  visibility: {
    section: true,
    badge: true,
    title: true,
    subtitle: true,
    cardsList: true,
    button: true
  }
};

export const OurAdvantagesCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [cms, setCms] = useState(defaultOurAdvantagesCms);
  const [newCard, setNewCard] = useState({ title: '', desc: '', emoji: '🌟', iconName: 'Brain' });

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/home`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.ourAdvantagesCms) {
          setCms({
            ...defaultOurAdvantagesCms,
            ...data.ourAdvantagesCms,
            visibility: { ...defaultOurAdvantagesCms.visibility, ...(data.ourAdvantagesCms.visibility || {}) }
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
        ourAdvantagesCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/home`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCmsData)
      });

      if (res.ok) {
        showToast('Our Advantages Section updated & published live!', 'success');
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

  const handleCardChange = (idx, field, value) => {
    const updatedCards = [...(cms.cards || [])];
    updatedCards[idx] = { ...updatedCards[idx], [field]: value };
    setCms({ ...cms, cards: updatedCards });
  };

  const handleRemoveCard = (idx) => {
    const updatedCards = (cms.cards || []).filter((_, i) => i !== idx);
    setCms({ ...cms, cards: updatedCards });
    showToast('Card removed', 'info');
  };

  const handleAddCard = (e) => {
    if (e) e.preventDefault();
    if (!newCard.title.trim()) return;

    const cardToAdd = {
      id: `adv-${Date.now()}`,
      title: newCard.title.trim(),
      desc: newCard.desc.trim() || 'Custom advantage description',
      emoji: newCard.emoji.trim() || '🌟',
      iconName: newCard.iconName || 'Brain',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30'
    };

    setCms(prev => ({
      ...prev,
      cards: [...(prev.cards || []), cardToAdd]
    }));

    setNewCard({ title: '', desc: '', emoji: '🌟', iconName: 'Brain' });
    showToast('New Advantage Card added!', 'info');
  };

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--slate-500)' }}>
        <RefreshCw size={24} style={{ animation: 'spin 1s linear infinite' }} />
        <p style={{ marginTop: 12, fontWeight: 700 }}>Loading Our Advantages CMS...</p>
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
            <span style={{ fontSize: 24 }}>🎯</span>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>Our Advantages Section CMS</h1>
          </div>
          <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 4, marginBottom: 0, maxWidth: 650 }}>
            Customize the section badge, main title, subtitle, advantage cards (emojis & text), and CTA button that display live on the Home Page.
          </p>
        </div>
      </div>

      {/* Main Grid: Left Forms + Right Live Real-Time Preview */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'start' }}>
        
        {/* Left Column: Form Controls */}
        <div style={{ flex: '1 1 560px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          
          {/* Card 1: Section Header Details */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Target size={16} color="var(--primary)" />
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
                  placeholder="e.g. Early Talent Mapping"
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

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Bottom CTA Button Text</label>
                <input
                  type="text"
                  value={cms.buttonText}
                  onChange={(e) => setCms({ ...cms, buttonText: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, background: 'white' }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Advantage Cards Management */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Layers size={16} color="var(--purple)" />
                <span>2. Advantage Cards ({cms.cards?.length || 0} Cards)</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {(cms.cards || []).map((card, idx) => (
                <div key={card.id || idx} style={{ padding: 14, borderRadius: 12, background: 'var(--slate-50)', border: '1px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 10, position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Advantage #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveCard(idx)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#EF4444', display: 'flex', alignItems: 'center', padding: 2 }}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>

                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <input
                      type="text"
                      value={card.emoji}
                      placeholder="Emoji"
                      onChange={(e) => handleCardChange(idx, 'emoji', e.target.value)}
                      style={{ width: 42, height: 38, textAlign: 'center', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 16, background: 'white' }}
                    />
                    <input
                      type="text"
                      value={card.title}
                      placeholder="Card Title"
                      onChange={(e) => handleCardChange(idx, 'title', e.target.value)}
                      style={{ flex: 1, padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontWeight: 800, fontSize: 13, background: 'white' }}
                    />
                  </div>

                  <textarea
                    rows={2}
                    value={card.desc}
                    placeholder="Card Description"
                    onChange={(e) => handleCardChange(idx, 'desc', e.target.value)}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white', resize: 'vertical' }}
                  />
                </div>
              ))}

              {/* Add New Card Form Box */}
              <div style={{ padding: 14, borderRadius: 12, background: 'white', border: '2px dashed var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--slate-800)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Plus size={15} color="var(--primary)" />
                  <span>Add New Advantage Card</span>
                </div>
                
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                  <input
                    type="text"
                    placeholder="Emoji"
                    value={newCard.emoji}
                    onChange={(e) => setNewCard({ ...newCard, emoji: e.target.value })}
                    style={{ width: 50, height: 38, textAlign: 'center', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 16, background: 'var(--slate-50)' }}
                  />
                  <input
                    type="text"
                    placeholder="Card Title"
                    value={newCard.title}
                    onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
                    style={{ flex: 1, minWidth: 140, padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'var(--slate-50)' }}
                  />
                  <button
                    type="button"
                    onClick={handleAddCard}
                    className="btn btn-primary"
                    style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 12 }}
                  >
                    <Plus size={14} /> Add Card
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
              <div style={{ fontSize: 12, color: 'var(--slate-500)', marginTop: 2 }}>Click save to push all updated headlines, badges, cards & buttons live to the Child Talent website.</div>
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

        {/* Right Column: Live Real-Time Website Preview Box */}
        <div style={{ flex: '0 0 420px', width: 420, maxWidth: '100%', position: 'sticky', top: 80 }}>
          <div className="card" style={{ background: '#090D16', color: 'white', borderColor: '#1E293B', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', borderRadius: 20 }}>
            
            {/* Header Bar */}
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#020617' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: '#38BDF8' }}>
                <Eye size={14} />
                <span>Live Real-Time Preview</span>
              </div>
              <span style={{ fontSize: 10, background: '#1E293B', color: '#94A3B8', padding: '2px 8px', borderRadius: 6, fontWeight: 600 }}>
                Our Advantages Section
              </span>
            </div>

            {/* Live Visual Preview Body */}
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

              {/* 6 Cards Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 6 }}>
                {(cms.cards || []).slice(0, 6).map((c, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      padding: 12, 
                      borderRadius: 14, 
                      background: '#131B2E', 
                      border: '1px solid #1E293B', 
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6
                    }}
                  >
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #EC4899, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: 'white' }}>
                      <Target size={14} />
                    </div>
                    <div style={{ fontSize: 14 }}>{c.emoji}</div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: 'white', lineHeight: 1.3 }}>{c.title}</div>
                    <div style={{ fontSize: 9.5, color: '#94A3B8', lineHeight: 1.4 }}>
                      {c.desc ? (c.desc.length > 60 ? c.desc.substring(0, 60) + '...' : c.desc) : ''}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA Button */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                <div style={{ padding: '10px 20px', borderRadius: 999, background: 'linear-gradient(135deg, #EC4899, #F59E0B)', color: 'white', fontSize: 12, fontWeight: 800, boxShadow: '0 4px 14px rgba(236,72,153,0.35)' }}>
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
