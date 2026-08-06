import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Baby, Trophy, ClipboardCheck, ArrowRight, Trash2, Edit3, MoreVertical } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ChildProfilesPage = () => {
  const { children, setActivePage, deleteChild } = useApp();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em', margin: 0 }}>
            My Children
          </h1>
          <p style={{ fontSize: '14px', color: '#64748B', fontWeight: 500, marginTop: '4px', margin: 0 }}>
            Manage your children's profiles, track assessment progress, and view skill archetypes
          </p>
        </div>

        <button
          type="button"
          onClick={() => setActivePage('add-child')}
          style={{
            height: '46px',
            padding: '0 24px',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(135deg, #0D9488, #10B981)',
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: 900,
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(13, 148, 136, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s'
          }}
        >
          <Plus style={{ width: '18px', height: '18px' }} />
          <span>Add New Child</span>
        </button>
      </div>

      {/* Children Grid */}
      {children.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1.5px solid #E2E8F0',
            padding: '60px 24px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
          }}
        >
          <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <Baby style={{ width: '36px', height: '36px', color: '#94A3B8' }} />
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0F172A', margin: '0 0 6px' }}>No Children Added Yet</h3>
          <p style={{ fontSize: '14px', color: '#64748B', fontWeight: 500, margin: '0 0 24px' }}>Add your child's profile to start their talent discovery journey.</p>
          <button
            type="button"
            onClick={() => setActivePage('add-child')}
            style={{
              height: '46px',
              padding: '0 28px',
              borderRadius: '12px',
              background: '#0D9488',
              color: 'white',
              fontSize: '14px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer'
            }}
          >
            + Add Your First Child
          </button>
        </motion.div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {children.map((child, i) => (
            <motion.div
              key={child.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="dash-card"
              style={{ overflow: 'hidden', position: 'relative' }}
            >
              {/* Card Top Cover Header */}
              <div style={{
                height: '110px',
                background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0D9488 100%)',
                position: 'relative',
                overflow: 'visible'
              }}>
                {/* Action Buttons (Top Right) */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  right: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  zIndex: 20
                }}>
                  <button
                    type="button"
                    onClick={() => setActivePage('edit-child')}
                    style={{
                      height: '34px',
                      padding: '0 14px',
                      margin: 0,
                      boxSizing: 'border-box',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.18)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      transition: 'all 0.15s'
                    }}
                  >
                    <Edit3 style={{ width: '14px', height: '14px' }} />
                    <span>Edit Profile</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Remove ${child.name}'s profile?`)) deleteChild(child.id);
                    }}
                    title="Remove Profile"
                    style={{
                      width: '34px',
                      height: '34px',
                      padding: 0,
                      margin: 0,
                      boxSizing: 'border-box',
                      borderRadius: '10px',
                      background: 'rgba(239, 68, 68, 0.25)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1.5px solid rgba(239, 68, 68, 0.45)',
                      color: '#FCA5A5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.15s'
                    }}
                  >
                    <Trash2 style={{ width: '16px', height: '16px', color: '#FCA5A5' }} />
                  </button>
                </div>

                {/* Avatar Circle Badge (Bottom Left Overlapping) */}
                <div style={{
                  position: 'absolute',
                  bottom: '-28px',
                  left: '24px',
                  zIndex: 20
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    background: '#FFFFFF',
                    padding: '4px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.12)'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #EC4899, #8B5CF6, #F59E0B)',
                      color: '#FFFFFF',
                      fontSize: '18px',
                      fontWeight: 900,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center'
                    }}>
                      <span>{child.avatar}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content Body */}
              <div style={{ padding: '40px 24px 24px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A', margin: 0 }}>{child.name}</h3>
                  <div style={{ fontSize: '13px', color: '#64748B', fontWeight: 600, marginTop: '3px' }}>{child.age} • {child.gender}</div>
                </div>

                {/* Score & Programs Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{ padding: '12px', borderRadius: '14px', background: '#F8FAFC', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                    <div style={{ fontSize: '16px', fontWeight: 900, color: '#0F172A' }}>
                      {child.overallScore ? `${child.overallScore}/100` : '—'}
                    </div>
                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginTop: '2px' }}>Score</div>
                  </div>

                  <div style={{ padding: '12px', borderRadius: '14px', background: '#F8FAFC', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                    <div style={{ fontSize: '16px', fontWeight: 900, color: '#0F172A' }}>{child.activePrograms}</div>
                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginTop: '2px' }}>Programs</div>
                  </div>
                </div>

                {/* Archetype or Assessment CTA Button */}
                {child.archetype ? (
                  <div style={{ padding: '12px 14px', borderRadius: '12px', background: 'rgba(124, 58, 237, 0.08)', border: '1px solid rgba(124, 58, 237, 0.2)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Trophy style={{ width: '18px', height: '18px', color: '#7C3AED', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', fontWeight: 800, color: '#6D28D9', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{child.archetype}</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActivePage('start-assessment')}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(13, 148, 136, 0.08)',
                      border: '1px solid rgba(13, 148, 136, 0.25)',
                      color: '#0D9488',
                      fontSize: '13px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <ClipboardCheck style={{ width: '16px', height: '16px' }} />
                    <span>Start Talent Assessment →</span>
                  </button>
                )}
              </div>

            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
