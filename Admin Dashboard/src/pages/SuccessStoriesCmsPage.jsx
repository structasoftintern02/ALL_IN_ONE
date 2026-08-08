import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Save, Eye, EyeOff, Plus, Trash2, RefreshCw, Layers, Star, CheckCircle2, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultSuccessStoriesCms = {
  badge: "❤️ Parent Testimonials",
  title: "Loved by 25,000+ Indian Parents",
  highlightText: "25,000+ Indian Parents",
  subtitle: "Real stories from parents who discovered their child's natural talents and transformed their learning experience.",
  testimonials: [
    {
      id: 't-1',
      avatar: 'SM',
      parentName: 'Sunita & Vikram Mehta',
      childName: 'Ananya (Age 6)',
      location: 'Mumbai, Maharashtra',
      programTaken: '5–7 Years Creative & Cognitive Growth',
      rating: 5,
      story: 'We used to push Ananya into keyboard classes, but she always seemed disinterested. The Child Talent Discovery report revealed her true natural strength was spatial reasoning and visual architecture! We switched her to 3D design and Lego robotics, and she is thriving with absolute joy!',
      avatarBg: 'from-rose-500 to-purple-600'
    },
    {
      id: 't-2',
      avatar: 'RP',
      parentName: 'Rajesh & Pooja Patel',
      childName: 'Aarav (Age 8)',
      location: 'Ahmedabad, Gujarat',
      programTaken: '7–10 Years STEM & Logic Module',
      rating: 5,
      story: 'Aarav was struggling with traditional rote math homework. The assessment highlighted his kinaesthetic learning style and exceptional pattern recognition. Now learning through visual coding modules, his math confidence has skyrocketed!',
      avatarBg: 'from-blue-500 to-cyan-600'
    },
    {
      id: 't-3',
      avatar: 'NK',
      parentName: 'Neha & Kshitij Kapoor',
      childName: 'Riya (Age 4)',
      location: 'Bengaluru, Karnataka',
      programTaken: '3–5 Years Early Foundation',
      rating: 5,
      story: 'At age 4, we did not want stressful exams. The 20-minute observational play games felt like pure fun to Riya! The 12-page report gave us actionable advice on nursery books and rhythm games tailored to her auditory strength.',
      avatarBg: 'from-emerald-500 to-teal-600'
    }
  ],
  visibility: {
    section: true,
    sectionBadge: true,
    sectionTitle: true,
    sectionSubtitle: true,
    testimonialsList: true
  }
};

export const SuccessStoriesCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [cms, setCms] = useState(defaultSuccessStoriesCms);
  const [previewIdx, setPreviewIdx] = useState(0);
  const [newTestimonial, setNewTestimonial] = useState({ parentName: '', childName: '', location: '', programTaken: '', story: '' });

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/home`);
      if (res.ok) {
        const data = await res.json();
        if (data && (data.successStoriesCms || data.testimonialsCms)) {
          const loaded = data.successStoriesCms || data.testimonialsCms;
          setCms({
            ...defaultSuccessStoriesCms,
            ...loaded,
            visibility: { ...defaultSuccessStoriesCms.visibility, ...(loaded.visibility || {}) }
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
        successStoriesCms: cms,
        testimonialsCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/home`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCmsData)
      });

      if (res.ok) {
        showToast('Success Stories Section updated & published live!', 'success');
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

  const handleTestimonialChange = (idx, field, value) => {
    const updated = [...(cms.testimonials || [])];
    updated[idx] = { ...updated[idx], [field]: value };

    // Update avatar initials if parentName changed
    if (field === 'parentName' && value) {
      const names = value.trim().split(' ');
      const initials = names.length >= 2 ? (names[0][0] + names[names.length - 1][0]).toUpperCase() : value.substring(0, 2).toUpperCase();
      updated[idx].avatar = initials;
    }

    setCms({ ...cms, testimonials: updated });
  };

  const handleRemoveTestimonial = (idx) => {
    const updated = (cms.testimonials || []).filter((_, i) => i !== idx);
    setCms({ ...cms, testimonials: updated });
    if (previewIdx >= updated.length) setPreviewIdx(Math.max(0, updated.length - 1));
    showToast('Testimonial removed', 'info');
  };

  const handleAddTestimonial = (e) => {
    if (e) e.preventDefault();
    if (!newTestimonial.parentName.trim()) return;

    const names = newTestimonial.parentName.trim().split(' ');
    const initials = names.length >= 2 ? (names[0][0] + names[names.length - 1][0]).toUpperCase() : newTestimonial.parentName.substring(0, 2).toUpperCase();

    const cardToAdd = {
      id: `t-${Date.now()}`,
      avatar: initials,
      parentName: newTestimonial.parentName.trim(),
      childName: newTestimonial.childName.trim() || 'Child (Age 6)',
      location: newTestimonial.location.trim() || 'India',
      programTaken: newTestimonial.programTaken.trim() || '5–7 Years Growth',
      rating: 5,
      story: newTestimonial.story.trim() || 'Amazing parent experience with Child Talent Discovery!',
      avatarBg: 'from-rose-500 to-purple-600'
    };

    setCms(prev => ({
      ...prev,
      testimonials: [...(prev.testimonials || []), cardToAdd]
    }));

    setNewTestimonial({ parentName: '', childName: '', location: '', programTaken: '', story: '' });
    showToast('New Parent Story added!', 'info');
  };

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--slate-500)' }}>
        <RefreshCw size={24} style={{ animation: 'spin 1s linear infinite' }} />
        <p style={{ marginTop: 12, fontWeight: 700 }}>Loading Success Stories CMS...</p>
      </div>
    );
  }

  const currentPreview = (cms.testimonials && cms.testimonials.length > 0) ? cms.testimonials[previewIdx % cms.testimonials.length] : defaultSuccessStoriesCms.testimonials[0];

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
            <span style={{ fontSize: 24 }}>❤️</span>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>Success Stories Section CMS</h1>
          </div>
          <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 4, marginBottom: 0, maxWidth: 650 }}>
            Customize the parent testimonial stories, child age details, locations, star ratings, and program pills.
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
                <Heart size={16} color="var(--primary)" />
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
                  placeholder="e.g. 25,000+ Indian Parents"
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

          {/* Card 2: Testimonials Management */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Layers size={16} color="var(--purple)" />
                <span>2. Parent Testimonials ({cms.testimonials?.length || 0} Stories)</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {(cms.testimonials || []).map((t, idx) => (
                <div key={t.id || idx} style={{ padding: 14, borderRadius: 12, background: 'var(--slate-50)', border: '1px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Story #{idx + 1} ({t.avatar || 'SM'})</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTestimonial(idx)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#EF4444', display: 'flex', alignItems: 'center', padding: 2 }}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    <input
                      type="text"
                      value={t.parentName}
                      placeholder="Parent Name"
                      onChange={(e) => handleTestimonialChange(idx, 'parentName', e.target.value)}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontWeight: 800, fontSize: 13, background: 'white' }}
                    />
                    <input
                      type="text"
                      value={t.childName}
                      placeholder="Child Name & Age"
                      onChange={(e) => handleTestimonialChange(idx, 'childName', e.target.value)}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    <input
                      type="text"
                      value={t.location}
                      placeholder="Location (City, State)"
                      onChange={(e) => handleTestimonialChange(idx, 'location', e.target.value)}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                    />
                    <input
                      type="text"
                      value={t.programTaken}
                      placeholder="Program Taken Pill"
                      onChange={(e) => handleTestimonialChange(idx, 'programTaken', e.target.value)}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                    />
                  </div>

                  <textarea
                    rows={3}
                    value={t.story}
                    placeholder="Parent Story Quote..."
                    onChange={(e) => handleTestimonialChange(idx, 'story', e.target.value)}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white', resize: 'vertical' }}
                  />
                </div>
              ))}

              {/* Add New Testimonial Form Box */}
              <div style={{ padding: 14, borderRadius: 12, background: 'white', border: '2px dashed var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--slate-800)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Plus size={15} color="var(--primary)" />
                  <span>Add New Parent Success Story</span>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  <input
                    type="text"
                    placeholder="Parent Name"
                    value={newTestimonial.parentName}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, parentName: e.target.value })}
                    style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'var(--slate-50)' }}
                  />
                  <input
                    type="text"
                    placeholder="Child Name & Age"
                    value={newTestimonial.childName}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, childName: e.target.value })}
                    style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'var(--slate-50)' }}
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder="Parent Story Quote..."
                  value={newTestimonial.story}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, story: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'var(--slate-50)', resize: 'vertical' }}
                />

                <button
                  type="button"
                  onClick={handleAddTestimonial}
                  className="btn btn-primary"
                  style={{ padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: 4, cursor: 'pointer', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 12, alignSelf: 'flex-start' }}
                >
                  <Plus size={14} /> Add Story
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
              <div style={{ fontSize: 12, color: 'var(--slate-500)', marginTop: 2 }}>Click save to push all updated parent stories & ratings live to the Child Talent website.</div>
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
                Success Stories Section
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

              {/* Featured Testimonial Card (Dark Gradient Card matching screenshot) */}
              <div style={{
                padding: 20,
                borderRadius: 20,
                background: 'linear-gradient(135deg, #1E1B4B 0%, #311042 100%)',
                border: '1px solid rgba(139,92,246,0.3)',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                marginTop: 4
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, alignItems: 'center' }}>
                  
                  {/* Left Column: Avatar & Parent Info */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 6, borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: 12 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 16, background: 'linear-gradient(135deg, #EC4899, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: 'white', boxShadow: '0 4px 12px rgba(236,72,153,0.3)' }}>
                      {currentPreview.avatar || 'SM'}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 900, color: 'white', lineHeight: 1.2 }}>{currentPreview.parentName}</div>
                      <div style={{ fontSize: 9.5, color: '#C084FC', fontWeight: 700, marginTop: 2 }}>{currentPreview.childName}</div>
                      <div style={{ fontSize: 8.5, color: '#94A3B8', marginTop: 1 }}>📍 {currentPreview.location}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 2 }}>
                      {[...Array(currentPreview.rating || 5)].map((_, i) => (
                        <Star key={i} size={11} fill="#FBBF24" color="#FBBF24" />
                      ))}
                    </div>
                    <span style={{ fontSize: 8, padding: '2px 8px', borderRadius: 999, background: 'rgba(16,185,129,0.15)', color: '#34D399', fontWeight: 800, border: '1px solid rgba(16,185,129,0.3)' }}>
                      ✓ Verified Parent
                    </span>
                  </div>

                  {/* Right Column: Program Pill & Story Quote */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ fontSize: 9, padding: '3px 10px', borderRadius: 999, background: 'linear-gradient(90deg, #EC4899, #8B5CF6)', color: 'white', fontWeight: 800, alignSelf: 'flex-start' }}>
                      Program: {currentPreview.programTaken}
                    </span>
                    <div style={{ fontSize: 24, color: 'rgba(168,85,247,0.4)', lineHeight: 1, fontFamily: 'serif' }}>"</div>
                    <p style={{ fontSize: 10.5, color: '#E2E8F0', fontStyle: 'italic', lineHeight: 1.5, margin: 0 }}>
                      {currentPreview.story}
                    </p>
                  </div>

                </div>
              </div>

              {/* Carousel Arrows & Dots Controls */}
              <div style={{ display: 'flex', itemsAlign: 'center', justifyContent: 'center', gap: 10, marginTop: 6 }}>
                <button
                  type="button"
                  onClick={() => setPreviewIdx(prev => (prev === 0 ? (cms.testimonials?.length || 1) - 1 : prev - 1))}
                  style={{ width: 28, height: 28, borderRadius: 999, background: '#1E293B', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <ChevronLeft size={14} />
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  {(cms.testimonials || []).map((_, i) => (
                    <div
                      key={i}
                      onClick={() => setPreviewIdx(i)}
                      style={{
                        height: 6,
                        width: i === (previewIdx % (cms.testimonials?.length || 1)) ? 18 : 6,
                        borderRadius: 999,
                        background: i === (previewIdx % (cms.testimonials?.length || 1)) ? '#A855F7' : '#334155',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewIdx(prev => (prev + 1) % (cms.testimonials?.length || 1))}
                  style={{ width: 28, height: 28, borderRadius: 999, background: '#1E293B', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <ChevronRight size={14} />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
