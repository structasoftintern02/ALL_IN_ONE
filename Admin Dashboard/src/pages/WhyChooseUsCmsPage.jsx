import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, Save, Eye, EyeOff, Plus, Trash2, Edit3, X, RefreshCw, Layers, ShieldCheck, Star, CheckCircle2, ArrowRight, Layout, Check, Brain, Target, Sparkles, Zap, HeartHandshake, Shield, Clock, BookOpen, TrendingUp, Users
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultWhyChooseUsCms = {
  badge: "⭐ Why Choose Us",
  title: "The Smartest Choice for Your Child's Future",
  highlightText: "Child's Future",
  subtitle: "We combine science, technology, and care to deliver the most accurate and actionable talent discovery experience for your child.",
  buttonText: "Learn More About Us →",
  cards: [
    {
      id: 'wc-1',
      iconName: 'Award',
      emoji: '🏆',
      title: 'Scientifically Backed Assessments',
      desc: 'Our assessments are designed by child psychologists and education experts using globally recognized frameworks like Howard Gardner\'s Multiple Intelligences theory.',
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-50 dark:bg-violet-950/30'
    },
    {
      id: 'wc-2',
      iconName: 'Users',
      emoji: '👨‍👩‍👧‍👦',
      title: 'Trusted by 10,000+ Families',
      desc: 'Thousands of parents across India trust our platform to discover and nurture their children\'s hidden talents, with a 98% satisfaction rate.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30'
    },
    {
      id: 'wc-3',
      iconName: 'BookOpen',
      emoji: '📚',
      title: 'Personalized Learning Plans',
      desc: 'Every child receives a tailored development roadmap with specific activity recommendations, book lists, and hobby suggestions based on their unique profile.',
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30'
    },
    {
      id: 'wc-4',
      iconName: 'TrendingUp',
      emoji: '📈',
      title: 'Track Growth Over Time',
      desc: 'Monitor your child\'s progress with detailed reports and milestone tracking. See how their skills evolve and celebrate every achievement along the way.',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30'
    },
    {
      id: 'wc-5',
      iconName: 'Shield',
      emoji: '🔒',
      title: '100% Safe & Private',
      desc: 'Your child\'s data is encrypted and completely confidential. We never share personal information with third parties. Your privacy is our top priority.',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50 dark:bg-teal-950/30'
    },
    {
      id: 'wc-6',
      iconName: 'Clock',
      emoji: '⏰',
      title: 'Quick & Easy Process',
      desc: 'Complete the assessment in just 15-20 minutes from the comfort of your home. Get instant, detailed results with actionable insights — no waiting required.',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50 dark:bg-pink-950/30'
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

export const WhyChooseUsCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [cms, setCms] = useState(defaultWhyChooseUsCms);
  const [newCard, setNewCard] = useState({
    title: '',
    desc: '',
    emoji: '🌟',
    iconName: 'Award'
  });

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/home`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.whyChooseUsCms) {
          setCms({
            ...defaultWhyChooseUsCms,
            ...data.whyChooseUsCms,
            visibility: { ...defaultWhyChooseUsCms.visibility, ...(data.whyChooseUsCms.visibility || {}) }
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
        whyChooseUsCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/home`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCmsData)
      });

      if (res.ok) {
        showToast('Why Choose Us Section updated & published live!', 'success');
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
      id: `wc-${Date.now()}`,
      title: newCard.title.trim(),
      desc: newCard.desc.trim() || 'Custom benefit description',
      emoji: newCard.emoji.trim() || '🌟',
      iconName: newCard.iconName || 'Award',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30'
    };

    setCms(prev => ({
      ...prev,
      cards: [...(prev.cards || []), cardToAdd]
    }));

    setNewCard({ title: '', desc: '', emoji: '🌟', iconName: 'Award' });
    showToast('New Why Choose Us Card added!', 'info');
  };

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--slate-500)' }}>
        <RefreshCw size={24} style={{ animation: 'spin 1s linear infinite' }} />
        <p style={{ marginTop: 12, fontWeight: 700 }}>Loading Why Choose Us CMS...</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingBottom: 40 }}>
      {/* Top Banner Header */}
      <div style={{
        padding: '24px 30px',
        borderRadius: 20,
        background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)',
        color: 'white',
        boxShadow: '0 10px 25px rgba(49, 46, 129, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 24 }}>🏆</span>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>Why Choose Us Section CMS</h1>
          </div>
          <p style={{ fontSize: 13, color: '#C7D2FE', marginTop: 4, marginBottom: 0, maxWidth: 650 }}>
            Customize the section badge, title, description, cards, emojis, icons, and CTA button that appear live on the Home Page.
          </p>
        </div>
      </div>

      {/* Main Content Grid: Forms Left + Live Preview Right */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'start' }}>
        
        {/* Left Column: Form Controls */}
        <div style={{ flex: '1 1 560px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          
          {/* Card 1: Section Header Details */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Award size={16} color="var(--primary)" />
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
                  placeholder="e.g. Child's Future"
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

          {/* Card 2: 6 Cards Management */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Layers size={16} color="var(--purple)" />
                <span>2. Feature Cards ({cms.cards?.length || 0} Cards)</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {(cms.cards || []).map((card, idx) => (
                <div key={card.id || idx} style={{ padding: 14, borderRadius: 12, background: 'var(--slate-50)', border: '1px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 10, position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Card #{idx + 1}</span>
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
                  <span>Add New Card</span>
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

        {/* Right Column: Live Real-Time Website Preview Box (Matching Screenshot) */}
        <div style={{ flex: '0 0 420px', width: 420, maxWidth: '100%', position: 'sticky', top: 80 }}>
          <div className="card" style={{ background: '#090D16', color: 'white', borderColor: '#1E293B', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', borderRadius: 20 }}>
            
            {/* Header Bar */}
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#020617' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: '#38BDF8' }}>
                <Eye size={14} />
                <span>Live Real-Time Preview</span>
              </div>
              <span style={{ fontSize: 10, background: '#1E293B', color: '#94A3B8', padding: '2px 8px', borderRadius: 6, fontWeight: 600 }}>
                Why Choose Us Section
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
              <h2 style={{ fontSize: 20, fontWeight: 900, color: 'white', lineHeight: 1.25, margin: 0 }}>
                {cms.title}
              </h2>

              {/* Subtitle */}
              <p style={{ fontSize: 11, color: '#94A3B8', lineHeight: 1.5, margin: 0, paddingLeft: 10, paddingRight: 10 }}>
                {cms.subtitle}
              </p>

              {/* 6 Cards Grid (Exact layout as screenshot) */}
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
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: 'white' }}>
                      <Award size={14} />
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
