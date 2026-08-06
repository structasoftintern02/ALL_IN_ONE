import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Award, Users, CheckCircle2, Star, Calendar } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ageGroupPrograms } from '../data/schoolPortalData';

export const SchoolProfilePage = () => {
  const { schoolsList, navTo, openModal } = useApp();
  const school = schoolsList[0]; // Active school profile
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        {/* Banner Hero */}
        <div className="glass-card" style={{ padding: 0, overflow: 'hidden', marginBottom: 32 }}>
          <img src={school.image} alt={school.name} style={{ width: '100%', height: 260, objectFit: 'cover' }} />
          <div style={{ padding: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span className="badge badge-green">{school.accreditationStatus}</span>
                <span className="badge badge-blue">{school.board}</span>
              </div>
              <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--slate-900)' }}>{school.name}</h1>
              <p style={{ fontSize: 13, color: 'var(--slate-600)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                <MapPin size={14} style={{ color: 'var(--primary)' }} /> {school.address}
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-outline" onClick={() => navTo('infrastructure')}>
                Infrastructure Specs
              </button>
              <button className="btn btn-primary" onClick={() => openModal('SCHEDULE_SESSION')}>
                Schedule Diagnostic Session
              </button>
            </div>
          </div>
        </div>

        {/* Tab Bar */}
        <div style={{ display: 'flex', gap: 10, borderBottom: '1px solid var(--slate-200)', marginBottom: 32 }}>
          {['overview', 'gallery', 'infrastructure', 'programs', 'achievements'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 20px', border: 'none', background: 'none',
                fontSize: 14, fontWeight: 700, textTransform: 'capitalize',
                color: activeTab === tab ? 'var(--primary)' : 'var(--slate-600)',
                borderBottom: activeTab === tab ? '3px solid var(--primary)' : '3px solid transparent',
                cursor: 'pointer'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32 }}>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 12 }}>About the Campus</h3>
              <p style={{ fontSize: 14, color: 'var(--slate-600)', lineHeight: 1.7, marginBottom: 24 }}>
                {school.name} is a premier educational institution committed to early child development and NEP 2020 diagnostic excellence. Equipped with dedicated sensory activity rooms, STEM logic centers, and certified skill observers.
              </p>

              <h4 style={{ fontSize: 16, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 12 }}>Programs Offered</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 24 }}>
                {school.offeredPrograms.map((prog, idx) => (
                  <div key={idx} style={{ padding: 14, background: 'var(--slate-50)', borderRadius: 10, border: '1px solid var(--slate-200)', fontSize: 13, fontWeight: 700, color: 'var(--slate-800)' }}>
                    ✨ {prog}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="glass-card" style={{ padding: 24 }}>
                <h4 style={{ fontSize: 16, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 16 }}>Key Metrics</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Principal</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--slate-900)' }}>{school.principal}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Enrolled Diagnostic Students</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--primary)' }}>{school.studentsEnrolled} Students</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Total Capacity</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--slate-900)' }}>{school.infrastructure.capacity}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {school.gallery.map((img, i) => (
              <img key={i} src={img} alt="Gallery" style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 16 }} />
            ))}
          </div>
        )}

        {activeTab === 'infrastructure' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            <div className="glass-card" style={{ padding: 20 }}>
              <div style={{ fontSize: 24 }}>🏫</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--slate-900)', marginTop: 8 }}>{school.infrastructure.classrooms}</div>
              <div style={{ fontSize: 12, color: 'var(--slate-500)', fontWeight: 600 }}>Available Classrooms</div>
            </div>
            <div className="glass-card" style={{ padding: 20 }}>
              <div style={{ fontSize: 24 }}>🎨</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--slate-900)', marginTop: 8 }}>{school.infrastructure.activityRooms}</div>
              <div style={{ fontSize: 12, color: 'var(--slate-500)', fontWeight: 600 }}>Activity & Play Rooms</div>
            </div>
            <div className="glass-card" style={{ padding: 20 }}>
              <div style={{ fontSize: 24 }}>🤖</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--slate-900)', marginTop: 8 }}>{school.infrastructure.stemLabs}</div>
              <div style={{ fontSize: 12, color: 'var(--slate-500)', fontWeight: 600 }}>STEM & Robotics Labs</div>
            </div>
          </div>
        )}

        {activeTab === 'programs' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {ageGroupPrograms.map((prog) => (
              <div key={prog.id} className="glass-card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 32 }}>{prog.icon}</span>
                  <div>
                    <span className="badge badge-blue" style={{ fontSize: 11 }}>{prog.ageGroup}</span>
                    <h4 style={{ fontSize: 16, fontWeight: 800, color: 'var(--slate-900)', marginTop: 4 }}>{prog.title}</h4>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: 'var(--slate-600)', marginBottom: 16, lineHeight: 1.5 }}>
                  {prog.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: 'var(--slate-700)', marginBottom: 16 }}>
                  {prog.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <button className="btn btn-outline btn-sm" style={{ width: '100%' }} onClick={() => navTo('age-programs')}>
                  View Full Framework
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {school.achievements.map((ach, idx) => (
              <div key={idx} className="glass-card" style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                <Award size={24} style={{ color: 'var(--amber)' }} />
                <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--slate-900)' }}>{ach}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
