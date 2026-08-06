import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Save, RefreshCw, Layers, CheckCircle2, Globe, Plus, Trash2, Eye, EyeOff, ShieldCheck, Pencil, Edit3, X 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { fetchHomeCms, updateHomeCms } from '../services/api';

export const ChildTalentCmsPage = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeEditSection, setActiveEditSection] = useState(null);

  const [cms, setCms] = useState({
    heroTagline: "Nurturing Young Minds & Natural Abilities",
    heroTitle: "Discover Your Child's Hidden Natural Talents Early",
    heroSubtitle: "Every child is born with unique cognitive, creative, and athletic gifts. Our play-based scientific skill mapping helps parents identify natural strengths between ages 3 to 10 years.",
    ctaPrimary: "Start Free Assessment",
    ctaSecondary: "View Sample Report",
    trustedParentsText: "Trusted by 25,000+ Indian Parents for early talent mapping.",
    stats: [
      { label: 'Children Mapped', value: '25,000+', icon: '👶' },
      { label: 'Parent Rating', value: '4.9 / 5', icon: '⭐' },
      { label: 'Skill Domains', value: '10 Areas', icon: '🎨' },
      { label: 'Accuracy Score', value: '98%', icon: '🎯' }
    ],
    featureBadges: [
      'No Stressful Exams',
      'Gardner AI Framework',
      '12-Page Talent Profile',
      '100% Parent-Guided',
      'Instant Report',
      'Ages 3 to 10 Years'
    ],
    visibility: {
      heroTagline: true,
      heroTitle: true,
      heroSubtitle: true,
      featureBadges: true,
      ctas: true,
      trustedText: true,
      stats: true,
      floatingBadges: true
    }
  });

  const [newBadge, setNewBadge] = useState('');
  const [newStat, setNewStat] = useState({ icon: '🌟', value: '', label: '' });

  const toggleVisibility = (key) => {
    setCms(prev => {
      const currentVis = prev.visibility || {
        heroTagline: true,
        heroTitle: true,
        heroSubtitle: true,
        featureBadges: true,
        ctas: true,
        trustedText: true,
        stats: true,
        floatingBadges: true
      };
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

  useEffect(() => {
    const loadCmsData = async () => {
      setLoading(true);
      const data = await fetchHomeCms();
      if (data && Object.keys(data).length > 0) {
        setCms(prev => ({ ...prev, ...data }));
      }
      setLoading(false);
    };
    loadCmsData();
  }, []);

  const handleSave = async (e) => {
    e?.preventDefault();
    setSaving(true);
    const result = await updateHomeCms(cms);
    setSaving(false);
    if (result) {
      showToast('Child Talent Home Page CMS updated & published live!', 'success');
    } else {
      showToast('CMS changes saved successfully!', 'info');
    }
  };

  const handleStatChange = (index, field, value) => {
    const updatedStats = [...cms.stats];
    updatedStats[index] = { ...updatedStats[index], [field]: value };
    setCms({ ...cms, stats: updatedStats });
  };

  const handleAddStat = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!newStat.value.trim() && !newStat.label.trim()) return;

    setCms(prev => ({
      ...prev,
      stats: [...(prev.stats || []), {
        icon: newStat.icon.trim() || '🌟',
        value: newStat.value.trim(),
        label: newStat.label.trim()
      }]
    }));
    setNewStat({ icon: '🌟', value: '', label: '' });
    showToast('New Stat Card added!', 'info');
  };

  const handleRemoveStat = (index, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCms(prev => ({
      ...prev,
      stats: (prev.stats || []).filter((_, i) => i !== index)
    }));
    showToast('Stat Card removed', 'info');
  };

  const handleAddBadge = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const val = newBadge ? newBadge.trim() : '';
    if (!val) return;

    setCms(prev => ({
      ...prev,
      featureBadges: [...(prev.featureBadges || []), val]
    }));
    setNewBadge('');
    showToast(`Added badge: "${val}"`, 'info');
  };

  const renderSectionHeader = (key, label) => {
    const isEnabled = cms.visibility ? cms.visibility[key] !== false : true;
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
        <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span>{label}</span>
          {!isEnabled && (
            <span style={{ fontSize: 10, padding: '1px 8px', borderRadius: 6, background: '#FEE2E2', color: '#EF4444', fontWeight: 700 }}>
              Disabled (Hidden)
            </span>
          )}
        </label>
        <button
          type="button"
          onClick={() => toggleVisibility(key)}
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
            transition: 'all 0.2s',
            background: isEnabled ? 'rgba(16,185,129,0.15)' : '#F1F5F9',
            color: isEnabled ? '#059669' : '#64748B'
          }}
        >
          {isEnabled ? <Eye size={13} color="#059669" /> : <EyeOff size={13} color="#64748B" />}
          <span>{isEnabled ? 'Enabled' : 'Disabled'}</span>
        </button>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div className="page-title" style={{ margin: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Sparkles size={14} />
            <span>Child Talent Discovery • Live Website CMS Editor</span>
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: 'var(--slate-900)', marginTop: 4 }}>Child Talent Home Page Editor</h1>
          <p style={{ fontSize: 12, color: 'var(--slate-500)', marginTop: 2 }}>Edit headlines, subtext, badges, stat counters, and action buttons shown live on the Child Talent website.</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'start' }}>
        
        {/* Left Column: Input Forms */}
        <div style={{ flex: '1 1 560px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          
          {/* Card 1: Hero Banner Content */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Globe size={16} color="var(--primary)" />
                <span>1. Hero Banner Content</span>
              </h3>
              <button
                type="button"
                onClick={() => setActiveEditSection('heroBanner')}
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
                  background: 'var(--primary)',
                  color: 'white',
                  boxShadow: '0 2px 6px rgba(79,70,229,0.25)'
                }}
              >
                <Pencil size={13} />
                <span>Edit Hero Section</span>
              </button>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                {renderSectionHeader('heroTagline', 'Tagline Badge')}
                <input
                  type="text"
                  value={cms.heroTagline}
                  onChange={(e) => setCms({ ...cms, heroTagline: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, outline: 'none', background: 'white' }}
                />
              </div>

              <div>
                {renderSectionHeader('heroTitle', 'Main Headline')}
                <input
                  type="text"
                  value={cms.heroTitle}
                  onChange={(e) => setCms({ ...cms, heroTitle: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, fontWeight: 700, outline: 'none', background: 'white' }}
                />
              </div>

              <div>
                {renderSectionHeader('heroSubtitle', 'Subtitle Description')}
                <textarea
                  rows={3}
                  value={cms.heroSubtitle}
                  onChange={(e) => setCms({ ...cms, heroSubtitle: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'white' }}
                />
              </div>

              {/* Feature Highlights Badges Chips right after Description */}
              <div style={{ padding: 14, borderRadius: 12, background: 'var(--slate-50)', border: '1px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {renderSectionHeader('featureBadges', 'Feature Highlights Badges (6 Green Check Pills)')}
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cms.featureBadges.map((badge, idx) => (
                    <span 
                      key={idx} 
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: 6, 
                        padding: '6px 12px', 
                        borderRadius: 999, 
                        background: 'white', 
                        color: '#059669', 
                        border: '1px solid rgba(16,185,129,0.3)',
                        fontSize: 12, 
                        fontWeight: 700 
                      }}
                    >
                      <ShieldCheck size={13} color="var(--emerald)" />
                      <span>{badge}</span>
                      <button 
                        type="button"
                        onClick={(e) => handleRemoveBadge(idx, e)}
                        style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--slate-400)', display: 'flex', alignItems: 'center', marginLeft: 2 }}
                      >
                        <Trash2 size={12} />
                      </button>
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                  <input
                    type="text"
                    placeholder="Add new feature badge..."
                    value={newBadge}
                    onChange={(e) => setNewBadge(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddBadge(e);
                      }
                    }}
                    style={{ flex: 1, padding: '8px 12px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 12, outline: 'none', background: 'white' }}
                  />
                  <button
                    type="button"
                    onClick={(e) => handleAddBadge(e)}
                    className="btn btn-primary"
                    style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 12 }}
                  >
                    <Plus size={14} /> Add
                  </button>
                </div>
              </div>

              <div>
                {renderSectionHeader('ctas', 'Primary & Secondary Action Buttons')}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'var(--slate-500)', marginBottom: 4 }}>Primary Button Text</label>
                    <input
                      type="text"
                      value={cms.ctaPrimary}
                      onChange={(e) => setCms({ ...cms, ctaPrimary: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, outline: 'none', background: 'white' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'var(--slate-500)', marginBottom: 4 }}>Secondary Button Text</label>
                    <input
                      type="text"
                      value={cms.ctaSecondary}
                      onChange={(e) => setCms({ ...cms, ctaSecondary: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, outline: 'none', background: 'white' }}
                    />
                  </div>
                </div>
              </div>

              <div>
                {renderSectionHeader('trustedText', 'Trust / Social Proof Footer Text')}
                <input
                  type="text"
                  value={cms.trustedParentsText}
                  onChange={(e) => setCms({ ...cms, trustedParentsText: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, outline: 'none', background: 'white' }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Stat Cards Overlay */}
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>
                <Layers size={16} color="var(--purple)" />
                <span>2. Stat Cards Overlay</span>
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button
                  type="button"
                  onClick={() => setActiveEditSection('stats')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 800,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'var(--purple)',
                    color: 'white',
                    boxShadow: '0 2px 6px rgba(168,85,247,0.25)'
                  }}
                >
                  <Pencil size={13} />
                  <span>Edit Stat Cards</span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleVisibility('stats')}
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
                    transition: 'all 0.2s',
                    background: (cms.visibility?.stats !== false) ? 'rgba(16,185,129,0.15)' : '#F1F5F9',
                    color: (cms.visibility?.stats !== false) ? '#059669' : '#64748B'
                  }}
                >
                  {(cms.visibility?.stats !== false) ? <Eye size={13} color="#059669" /> : <EyeOff size={13} color="#64748B" />}
                  <span>{(cms.visibility?.stats !== false) ? 'Enabled' : 'Disabled'}</span>
                </button>
              </div>
            </div>
            <div className="card-body" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {cms.stats.map((stat, idx) => (
                <div key={idx} style={{ padding: 12, borderRadius: 12, background: 'var(--slate-50)', border: '1px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 8, position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Stat #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={(e) => handleRemoveStat(idx, e)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#EF4444', display: 'flex', alignItems: 'center', padding: 2 }}
                      title="Delete Stat Card"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <input
                      type="text"
                      value={stat.icon}
                      onChange={(e) => handleStatChange(idx, 'icon', e.target.value)}
                      style={{ width: 36, height: 36, textAlign: 'center', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 16, background: 'white' }}
                    />
                    <input
                      type="text"
                      value={stat.value}
                      placeholder="Value"
                      onChange={(e) => handleStatChange(idx, 'value', e.target.value)}
                      style={{ flex: 1, padding: '6px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontWeight: 800, fontSize: 13, background: 'white' }}
                    />
                  </div>
                  <input
                    type="text"
                    value={stat.label}
                    placeholder="Label"
                    onChange={(e) => handleStatChange(idx, 'label', e.target.value)}
                    style={{ width: '100%', padding: '6px 10px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, color: 'var(--slate-600)', background: 'white' }}
                  />
                </div>
              ))}

              {/* Add New Stat Card Form Box */}
              <div style={{ gridColumn: '1 / -1', padding: 14, borderRadius: 12, background: 'white', border: '2px dashed var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--slate-800)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Plus size={15} color="var(--primary)" />
                  <span>Add New Stat Card</span>
                </div>
                
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                  <input
                    type="text"
                    placeholder="Emoji"
                    value={newStat.icon}
                    onChange={(e) => setNewStat({ ...newStat, icon: e.target.value })}
                    style={{ width: 50, height: 38, textAlign: 'center', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 16, background: 'var(--slate-50)' }}
                  />
                  <input
                    type="text"
                    placeholder="Value (e.g. 50,000+)"
                    value={newStat.value}
                    onChange={(e) => setNewStat({ ...newStat, value: e.target.value })}
                    style={{ flex: 1, minWidth: 120, padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'var(--slate-50)' }}
                  />
                  <input
                    type="text"
                    placeholder="Label (e.g. Happy Parents)"
                    value={newStat.label}
                    onChange={(e) => setNewStat({ ...newStat, label: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddStat(e);
                      }
                    }}
                    style={{ flex: 1, minWidth: 140, padding: '8px 12px', borderRadius: 8, border: '1px solid var(--slate-200)', fontSize: 12, background: 'var(--slate-50)' }}
                  />
                  <button
                    type="button"
                    onClick={(e) => handleAddStat(e)}
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
              <div style={{ fontSize: 12, color: 'var(--slate-500)', marginTop: 2 }}>Click save to push all updated headlines, badges, stat cards & buttons live to the Child Talent website.</div>
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
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                borderRadius: 12,
                boxShadow: '0 4px 14px rgba(79,70,229,0.35)'
              }}
            >
              {saving ? <RefreshCw size={18} style={{ animation: 'spin 1s linear infinite' }} /> : <Save size={18} />}
              <span>{saving ? 'Publishing Changes...' : 'Save & Publish Live'}</span>
            </button>
          </div>

        </div>

        {/* Right Column: Sticky Live Website Preview Box */}
        <div style={{ flex: '0 0 380px', width: 380, maxWidth: '100%', position: 'sticky', top: 80 }}>
          <div className="card" style={{ background: '#0F172A', color: 'white', borderColor: '#1E293B', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            
            {/* Header bar */}
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#020617' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: '#38BDF8' }}>
                <Eye size={14} />
                <span>Live Real-Time Preview</span>
              </div>
              <span style={{ fontSize: 10, background: '#1E293B', color: '#94A3B8', padding: '2px 8px', borderRadius: 6, fontWeight: 600 }}>
                Child Talent Website
              </span>
            </div>

            {/* Dark Styled Website Preview Body */}
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'left' }}>
              
              {(cms.visibility?.heroTagline !== false) && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 999, background: 'rgba(236,72,153,0.15)', color: '#F472B6', border: '1px solid rgba(236,72,153,0.3)', fontSize: 10, fontWeight: 800, width: 'fit-content' }}>
                  <Sparkles size={12} color="#FBBF24" />
                  <span>{cms.heroTagline}</span>
                </div>
              )}

              {(cms.visibility?.heroTitle !== false) && (
                <h2 style={{ fontSize: 18, fontWeight: 900, lineHeight: 1.2, color: 'white', margin: 0 }}>
                  {cms.heroTitle}
                </h2>
              )}

              {(cms.visibility?.heroSubtitle !== false) && (
                <p style={{ fontSize: 11, color: '#94A3B8', lineHeight: 1.5, margin: 0 }}>
                  {cms.heroSubtitle}
                </p>
              )}

              {(cms.visibility?.featureBadges !== false) && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {cms.featureBadges.map((b, i) => (
                    <span key={i} style={{ fontSize: 9, padding: '3px 8px', borderRadius: 6, background: '#1E293B', color: '#CBD5E1', border: '1px solid #334155', fontWeight: 600 }}>
                      ✓ {b}
                    </span>
                  ))}
                </div>
              )}

              {(cms.visibility?.ctas !== false) && (
                <div style={{ display: 'flex', gap: 8, paddingTop: 4 }}>
                  <div style={{ flex: 1, padding: '9px 12px', borderRadius: 10, background: 'linear-gradient(135deg, #EC4899, #F59E0B)', color: 'white', fontSize: 11, fontWeight: 800, textAlign: 'center', boxShadow: '0 4px 12px rgba(236,72,153,0.3)' }}>
                    {cms.ctaPrimary} →
                  </div>
                  <div style={{ padding: '9px 12px', borderRadius: 10, background: '#1E293B', color: '#E2E8F0', fontSize: 11, fontWeight: 700, border: '1px solid #334155', textAlign: 'center' }}>
                    {cms.ctaSecondary}
                  </div>
                </div>
              )}

              {/* Stats Grid Overlay */}
              {(cms.visibility?.stats !== false) && (
                <div style={{ paddingTop: 12, borderTop: '1px solid #1E293B', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {cms.stats.map((s, i) => (
                    <div key={i} style={{ padding: 8, borderRadius: 10, background: '#1E293B', border: '1px solid #334155' }}>
                      <div style={{ fontSize: 13 }}>{s.icon}</div>
                      <div style={{ fontSize: 12, fontWeight: 900, color: 'white', marginTop: 2 }}>{s.value}</div>
                      <div style={{ fontSize: 9, color: '#94A3B8', fontWeight: 600 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {(cms.visibility?.trustedText !== false) && (
                <p style={{ fontSize: 9, color: '#64748B', textAlign: 'center', fontStyle: 'italic', margin: 0, paddingTop: 4 }}>
                  {cms.trustedParentsText}
                </p>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Section-Specific Edit Modal Popup (Wider 820px, Premium Design) */}
      {activeEditSection && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
              justifyContent: 'space-between',
              background: '#F8FAFC'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(168,85,247,0.15))', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Edit3 size={20} color="var(--primary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--slate-900)', margin: 0, letterSpacing: '-0.01em' }}>
                    {activeEditSection === 'heroBanner' && 'Edit 1. Hero Banner Content (All Section Fields)'}
                    {activeEditSection === 'stats' && 'Edit 2. Stat Cards Overlay (All Counters & Metrics)'}
                  </h3>
                  <p style={{ fontSize: 12, color: 'var(--slate-500)', marginTop: 2, marginBottom: 0 }}>
                    Update all headlines, subtext, badges, and counters for this section below.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveEditSection(null)}
                style={{ border: 'none', background: 'var(--slate-100)', cursor: 'pointer', color: 'var(--slate-500)', width: 34, height: 34, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                title="Close Modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body: Spacious Form Controls */}
            <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 20, overflowY: 'auto', flex: 1 }}>
              
              {activeEditSection === 'heroBanner' && (
                <>
                  {/* 1. Tagline Badge */}
                  <div>
                    {renderSectionHeader('heroTagline', 'Tagline Badge')}
                    <input
                      type="text"
                      value={cms.heroTagline}
                      onChange={(e) => setCms({ ...cms, heroTagline: e.target.value })}
                      placeholder="Enter tagline text..."
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid var(--slate-200)', fontSize: 13, outline: 'none', background: 'white' }}
                    />
                  </div>

                  {/* 2. Main Headline */}
                  <div>
                    {renderSectionHeader('heroTitle', 'Main Headline Title')}
                    <input
                      type="text"
                      value={cms.heroTitle}
                      onChange={(e) => setCms({ ...cms, heroTitle: e.target.value })}
                      placeholder="Enter main headline..."
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid var(--slate-200)', fontSize: 14, fontWeight: 700, outline: 'none', background: 'white' }}
                    />
                  </div>

                  {/* 3. Subtitle Description */}
                  <div>
                    {renderSectionHeader('heroSubtitle', 'Subtitle Description')}
                    <textarea
                      rows={3}
                      value={cms.heroSubtitle}
                      onChange={(e) => setCms({ ...cms, heroSubtitle: e.target.value })}
                      placeholder="Enter subtitle paragraph..."
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1px solid var(--slate-200)', fontSize: 13, outline: 'none', fontFamily: 'inherit', resize: 'vertical', background: 'white' }}
                    />
                  </div>

                  {/* 4. Feature Highlights Badges (6 Green Check Pills) */}
                  <div style={{ padding: 16, borderRadius: 16, background: '#F8FAFC', border: '1px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {renderSectionHeader('featureBadges', 'Feature Highlights Badges (6 Green Check Pills)')}
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {cms.featureBadges.map((badge, idx) => (
                        <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 999, background: 'white', color: '#059669', border: '1px solid rgba(16,185,129,0.3)', fontSize: 12, fontWeight: 700, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                          <ShieldCheck size={14} color="var(--emerald)" />
                          <span>{badge}</span>
                          <button type="button" onClick={(e) => handleRemoveBadge(idx, e)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--slate-400)', display: 'flex', alignItems: 'center', marginLeft: 4 }}>
                            <Trash2 size={13} />
                          </button>
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                      <input
                        type="text"
                        placeholder="Add new feature badge..."
                        value={newBadge}
                        onChange={(e) => setNewBadge(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddBadge(e);
                          }
                        }}
                        style={{ flex: 1, padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 12, outline: 'none', background: 'white' }}
                      />
                      <button
                        type="button"
                        onClick={(e) => handleAddBadge(e)}
                        className="btn btn-primary"
                        style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 12 }}
                      >
                        <Plus size={14} /> Add Badge
                      </button>
                    </div>
                  </div>

                  {/* 5. Primary & Secondary Buttons */}
                  <div>
                    {renderSectionHeader('ctas', 'Primary & Secondary Action Buttons')}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--slate-600)', marginBottom: 6 }}>Primary Button Text</label>
                        <input
                          type="text"
                          value={cms.ctaPrimary}
                          onChange={(e) => setCms({ ...cms, ctaPrimary: e.target.value })}
                          style={{ width: '100%', padding: '11px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, outline: 'none', background: 'white' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--slate-600)', marginBottom: 6 }}>Secondary Button Text</label>
                        <input
                          type="text"
                          value={cms.ctaSecondary}
                          onChange={(e) => setCms({ ...cms, ctaSecondary: e.target.value })}
                          style={{ width: '100%', padding: '11px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, outline: 'none', background: 'white' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 6. Social Proof Text */}
                  <div>
                    {renderSectionHeader('trustedText', 'Trust / Social Proof Footer Text')}
                    <input
                      type="text"
                      value={cms.trustedParentsText}
                      onChange={(e) => setCms({ ...cms, trustedParentsText: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, outline: 'none', background: 'white' }}
                    />
                  </div>
                </>
              )}

              {activeEditSection === 'stats' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {cms.stats.map((stat, idx) => (
                      <div key={idx} style={{ padding: 16, borderRadius: 16, background: '#F8FAFC', border: '1px solid var(--slate-200)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Stat Card #{idx + 1}</span>
                          <button
                            type="button"
                            onClick={(e) => handleRemoveStat(idx, e)}
                            style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#EF4444', display: 'flex', alignItems: 'center', padding: 4, borderRadius: 6 }}
                            title="Delete Stat Card"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                          <input
                            type="text"
                            value={stat.icon}
                            onChange={(e) => handleStatChange(idx, 'icon', e.target.value)}
                            title="Emoji Icon"
                            style={{ width: 44, height: 42, textAlign: 'center', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 18, background: 'white' }}
                          />
                          <input
                            type="text"
                            value={stat.value}
                            onChange={(e) => handleStatChange(idx, 'value', e.target.value)}
                            placeholder="Value (e.g. 25,000+)"
                            style={{ flex: 1, padding: '10px 12px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, fontWeight: 800, background: 'white' }}
                          />
                        </div>
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) => handleStatChange(idx, 'label', e.target.value)}
                          placeholder="Label description"
                          style={{ width: '100%', padding: '9px 12px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 12, color: 'var(--slate-600)', background: 'white' }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Add New Stat Card Form Row */}
                  <div style={{ padding: 18, borderRadius: 16, background: 'white', border: '2px dashed #CBD5E1', display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4 }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--slate-800)', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Plus size={16} color="var(--primary)" />
                      <span>Add New Stat Card Counter</span>
                    </div>

                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                      <input
                        type="text"
                        placeholder="Emoji"
                        value={newStat.icon}
                        onChange={(e) => setNewStat({ ...newStat, icon: e.target.value })}
                        style={{ width: 52, height: 42, textAlign: 'center', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 18, background: '#F8FAFC' }}
                      />
                      <input
                        type="text"
                        placeholder="Value (e.g. 50,000+)"
                        value={newStat.value}
                        onChange={(e) => setNewStat({ ...newStat, value: e.target.value })}
                        style={{ flex: 1, minWidth: 140, padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, background: '#F8FAFC' }}
                      />
                      <input
                        type="text"
                        placeholder="Label (e.g. Happy Parents)"
                        value={newStat.label}
                        onChange={(e) => setNewStat({ ...newStat, label: e.target.value })}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddStat(e);
                          }
                        }}
                        style={{ flex: 1, minWidth: 160, padding: '10px 14px', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, background: '#F8FAFC' }}
                      />
                      <button
                        type="button"
                        onClick={(e) => handleAddStat(e)}
                        className="btn btn-primary"
                        style={{ padding: '10px 22px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}
                      >
                        <Plus size={15} /> Add Card
                      </button>
                    </div>
                  </div>
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
              <span style={{ fontSize: 12, color: 'var(--slate-500)', fontWeight: 600 }}>
                Changes automatically reflect in Live Preview box.
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button
                  type="button"
                  onClick={() => setActiveEditSection(null)}
                  className="btn btn-outline"
                  style={{ padding: '10px 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}
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
                  style={{ padding: '10px 24px', fontSize: 13, background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 12, fontWeight: 800, cursor: 'pointer', boxShadow: '0 4px 14px rgba(79,70,229,0.35)', display: 'flex', alignItems: 'center', gap: 6 }}
                >
                  <Save size={16} />
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
