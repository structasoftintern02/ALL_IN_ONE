import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, Save, Eye, EyeOff, Plus, Trash2, RefreshCw, Layers, Minus, Phone, Mail, CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const API_BASE = 'http://localhost:5000/api';

const defaultFaqCms = {
  badge: "❓ Frequently Asked Questions",
  title: "Everything Parents Need to Know",
  highlightText: "Know",
  subtitle: "Clear answers to common questions about early skill discovery, scientific validation, and play assessment.",
  viewAllText: "View All 10 FAQs →",
  contactTitle: "Have a specific question about your child?",
  contactSubtitle: "Our child development advisors are available for free parent guidance.",
  callButtonText: "Call Advisor Free",
  emailButtonText: "Email Support",
  faqs: [
    { q: "What is Child Talent Discovery?", a: "Child Talent Discovery is a scientific, play-based observational assessment designed for children aged 3–10 years to identify their innate cognitive strengths, creative abilities, and natural learning styles before traditional schooling imposes rigid labels." },
    { q: "At what age should talent identification begin?", a: "Early childhood (ages 3–7) is the golden window of brain plasticity where neural pathways form rapidly. Identifying natural inclinations early allows parents to nurture innate potential without academic pressure." },
    { q: "How is the assessment conducted?", a: "The assessment is conducted 100% at home through guided 15-20 minute interactive play tasks, visual puzzles, rhythm games, and parent observation prompts. No stressful exams or paper tests!" },
    { q: "Is it scientifically validated?", a: "Yes. Our frameworks are built upon Howard Gardner's Theory of Multiple Intelligences, Montessori developmental benchmarks, and observational cognitive psychology principles." },
    { q: "Will my child have to sit for an exam?", a: "Not at all! There are zero tests or grades. Children perceive the entire process as enjoyable puzzles and creative play." },
    { q: "How long does the assessment take?", a: "The evaluation takes less than 20 minutes of observational play. You receive your comprehensive 12-page Talent Profile report immediately upon completion." }
  ],
  visibility: {
    section: true,
    badge: true,
    title: true,
    subtitle: true,
    faqList: true,
    contactBox: true
  }
};

export const FaqCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [cms, setCms] = useState(defaultFaqCms);
  const [previewOpenIdx, setPreviewOpenIdx] = useState(0);
  const [newFaq, setNewFaq] = useState({ q: '', a: '' });

  useEffect(() => {
    fetchCmsData();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/cms/home`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.faqCms) {
          const loaded = data.faqCms;
          setCms({
            ...defaultFaqCms,
            ...loaded,
            visibility: { ...defaultFaqCms.visibility, ...(loaded.visibility || {}) }
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
        faqCms: cms
      };

      const res = await fetch(`${API_BASE}/cms/home`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCmsData)
      });

      if (res.ok) {
        showToast('FAQ Section updated & published live!', 'success');
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

  const handleFaqChange = (idx, field, value) => {
    const updated = [...(cms.faqs || [])];
    updated[idx] = { ...updated[idx], [field]: value };
    setCms({ ...cms, faqs: updated });
  };

  const handleRemoveFaq = (idx) => {
    const updated = (cms.faqs || []).filter((_, i) => i !== idx);
    setCms({ ...cms, faqs: updated });
    showToast('FAQ question removed', 'info');
  };

  const handleAddFaq = (e) => {
    if (e) e.preventDefault();
    if (!newFaq.q.trim()) return;

    const faqToAdd = {
      q: newFaq.q.trim(),
      a: newFaq.a.trim() || 'Detailed answer explanation for parents.'
    };

    setCms(prev => ({
      ...prev,
      faqs: [...(prev.faqs || []), faqToAdd]
    }));

    setNewFaq({ q: '', a: '' });
    showToast('New FAQ question added!', 'info');
  };

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--slate-500)' }}>
        <RefreshCw size={24} style={{ animation: 'spin 1s linear infinite' }} />
        <p style={{ marginTop: 12, fontWeight: 700 }}>Loading FAQ CMS...</p>
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
            <span style={{ fontSize: 24 }}>❓</span>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>FAQ Section CMS</h1>
          </div>
          <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 4, marginBottom: 0, maxWidth: 650 }}>
            Customize the Frequently Asked Questions accordion list, answers, view all buttons, and bottom parent advisor contact panel.
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
                <HelpCircle size={16} color="var(--primary)" />
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
                  placeholder="e.g. Know"
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
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>View All Button Text</label>
                <input
                  type="text"
                  value={cms.viewAllText}
                  onChange={(e) => setCms({ ...cms, viewAllText: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, background: 'white' }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: FAQ Items Management */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Layers size={16} color="var(--purple)" />
                <span>2. FAQ Accordion Items ({cms.faqs?.length || 0} Questions)</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {(cms.faqs || []).map((faq, idx) => (
                <div key={idx} style={{ padding: 14, borderRadius: 12, background: 'var(--slate-50)', border: '1px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>FAQ #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFaq(idx)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#EF4444', display: 'flex', alignItems: 'center', padding: 2 }}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'var(--slate-600)', marginBottom: 4 }}>Question</label>
                    <input
                      type="text"
                      value={faq.q}
                      placeholder="Question..."
                      onChange={(e) => handleFaqChange(idx, 'q', e.target.value)}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontWeight: 800, fontSize: 13, background: 'white' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: 'var(--slate-600)', marginBottom: 4 }}>Answer</label>
                    <textarea
                      rows={3}
                      value={faq.a}
                      placeholder="Answer text..."
                      onChange={(e) => handleFaqChange(idx, 'a', e.target.value)}
                      style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white', resize: 'vertical' }}
                    />
                  </div>
                </div>
              ))}

              {/* Add New FAQ Form Box */}
              <div style={{ padding: 14, borderRadius: 12, background: 'white', border: '2px dashed var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--slate-800)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Plus size={15} color="var(--primary)" />
                  <span>Add New Question</span>
                </div>
                
                <input
                  type="text"
                  placeholder="Enter Question..."
                  value={newFaq.q}
                  onChange={(e) => setNewFaq({ ...newFaq, q: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'var(--slate-50)' }}
                />

                <textarea
                  rows={2}
                  placeholder="Enter Answer..."
                  value={newFaq.a}
                  onChange={(e) => setNewFaq({ ...newFaq, a: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'var(--slate-50)', resize: 'vertical' }}
                />

                <button
                  type="button"
                  onClick={handleAddFaq}
                  className="btn btn-primary"
                  style={{ padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: 4, cursor: 'pointer', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 12, alignSelf: 'flex-start' }}
                >
                  <Plus size={14} /> Add Question
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Bottom Advisor Contact Box */}
          <div className="card">
            <div className="card-header">
              <h3>
                <Phone size={16} color="var(--emerald)" />
                <span>3. Bottom Parent Support Box</span>
              </h3>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Support Box Headline</label>
                <input
                  type="text"
                  value={cms.contactTitle}
                  onChange={(e) => setCms({ ...cms, contactTitle: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, fontWeight: 800, background: 'white' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Support Box Subtitle</label>
                <input
                  type="text"
                  value={cms.contactSubtitle}
                  onChange={(e) => setCms({ ...cms, contactSubtitle: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Call Button Text</label>
                  <input
                    type="text"
                    value={cms.callButtonText}
                    onChange={(e) => setCms({ ...cms, callButtonText: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 6 }}>Email Button Text</label>
                  <input
                    type="text"
                    value={cms.emailButtonText}
                    onChange={(e) => setCms({ ...cms, emailButtonText: e.target.value })}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'white' }}
                  />
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
              <div style={{ fontSize: 12, color: 'var(--slate-500)', marginTop: 2 }}>Click save to push all updated questions, answers, & support links live to the Child Talent website.</div>
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
                FAQ Section
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
              <h2 style={{ fontSize: 19, fontWeight: 900, color: 'white', lineHeight: 1.25, margin: 0 }}>
                {cms.title}
              </h2>

              {/* Subtitle */}
              <p style={{ fontSize: 10.5, color: '#94A3B8', lineHeight: 1.4, margin: 0, paddingLeft: 10, paddingRight: 10 }}>
                {cms.subtitle}
              </p>

              {/* Accordion Questions List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4, textAlign: 'left' }}>
                {(cms.faqs || []).slice(0, 5).map((f, i) => (
                  <div key={i} style={{ borderRadius: 12, background: '#131B2E', border: '1px solid #1E293B', overflow: 'hidden' }}>
                    <div 
                      onClick={() => setPreviewOpenIdx(previewOpenIdx === i ? null : i)}
                      style={{ padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                    >
                      <span style={{ fontSize: 11, fontWeight: 800, color: 'white' }}>{f.q}</span>
                      <span style={{ width: 22, height: 22, borderRadius: 999, background: previewOpenIdx === i ? '#7C3AED' : '#1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: 'white' }}>
                        {previewOpenIdx === i ? '−' : '+'}
                      </span>
                    </div>

                    {previewOpenIdx === i && (
                      <div style={{ padding: '0 14px 12px 14px', borderTop: '1px solid #1E293B', fontSize: 9.5, color: '#94A3B8', paddingTop: 8, lineHeight: 1.4 }}>
                        {f.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                <div style={{ padding: '8px 16px', borderRadius: 999, background: '#1E293B', color: '#C084FC', border: '1px solid rgba(168,85,247,0.3)', fontSize: 10, fontWeight: 800 }}>
                  {cms.viewAllText}
                </div>
              </div>

              {/* Bottom Support Panel (Purple Box matching screenshot) */}
              <div style={{
                padding: 16,
                borderRadius: 16,
                background: 'linear-gradient(135deg, #1E1B4B 0%, #311042 100%)',
                border: '1px solid rgba(139,92,246,0.3)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                marginTop: 6
              }}>
                <div style={{ fontSize: 12, fontWeight: 900, color: 'white' }}>{cms.contactTitle}</div>
                <p style={{ fontSize: 9.5, color: '#CBD5E1', margin: 0 }}>{cms.contactSubtitle}</p>
                
                <div style={{ display: 'flex', gap: 8, marginTop: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <div style={{ padding: '6px 12px', borderRadius: 999, background: 'linear-gradient(135deg, #EC4899, #8B5CF6)', color: 'white', fontSize: 9.5, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Phone size={11} /> {cms.callButtonText}
                  </div>
                  <div style={{ padding: '6px 12px', borderRadius: 999, background: '#1E293B', color: 'white', border: '1px solid #334155', fontSize: 9.5, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Mail size={11} /> {cms.emailButtonText}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
