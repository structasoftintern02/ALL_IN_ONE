import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Building2, CheckCircle2 } from 'lucide-react';
import { sampleSchools } from '../data/schoolPortalData';
import { useApp } from '../context/AppContext';

export const RegionalProgramsPage = () => {
  const { navTo } = useApp();
  const [selectedState, setSelectedState] = useState('all');

  const states = ['all', 'Karnataka', 'Haryana', 'Maharashtra', 'Delhi NCR', 'Uttar Pradesh'];

  const filtered = selectedState === 'all' ? sampleSchools : sampleSchools.filter(s => s.state.toLowerCase().includes(selectedState.toLowerCase()));

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">REGIONAL DIAGNOSTIC HUBS</span>
          <h2 className="section-title">Find Nearby Partner Schools & Hubs</h2>
          <p className="section-subtitle">Explore accredited campuses running early skill diagnostic programs across India.</p>
        </div>

        {/* State Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 40, flexWrap: 'wrap' }}>
          {states.map(st => (
            <button
              key={st}
              className={`btn btn-sm ${selectedState === st ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setSelectedState(st)}
              style={{ textTransform: 'capitalize' }}
            >
              {st === 'all' ? 'All States' : st}
            </button>
          ))}
        </div>

        {/* Simulated Interactive Map & School Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 32, marginBottom: 60 }}>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {filtered.map(s => (
                <motion.div key={s.id} className="glass-card" style={{ padding: 20 }} whileHover={{ y: -4 }}>
                  <img src={s.image} alt={s.name} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 12, marginBottom: 12 }} />
                  <span className="badge badge-green" style={{ marginBottom: 6 }}>{s.accreditationStatus}</span>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--slate-900)' }}>{s.name}</h3>
                  <div style={{ fontSize: 12, color: 'var(--slate-500)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, marginBottom: 12 }}>
                    <MapPin size={13} style={{ color: 'var(--primary)' }} /> {s.city}, {s.state}
                  </div>
                  <button className="btn btn-outline btn-sm" style={{ width: '100%' }} onClick={() => navTo('school-profile')}>
                    View Hub Profile
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="glass-card" style={{ padding: 24, background: 'var(--slate-900)', color: 'white', borderRadius: 20, minHeight: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--accent-green)', textTransform: 'uppercase' }}>NATIONAL HUB NETWORK</div>
              <h3 style={{ fontSize: 20, fontWeight: 900, color: 'white', marginTop: 4 }}>Interactive Location Map</h3>
              <p style={{ fontSize: 12, color: '#94A3B8', marginTop: 4 }}>540+ Accredited Campuses Across 24 States</p>
            </div>

            <div style={{ padding: 40, border: '2px dashed #334155', borderRadius: 16, textAlign: 'center', background: 'rgba(255,255,255,0.02)' }}>
              <MapPin size={48} style={{ color: 'var(--primary)', marginBottom: 8 }} />
              <div style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>Regional GPS Hub Locator Active</div>
              <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 4 }}>Showing {filtered.length} accredited centers in selected region</div>
            </div>

            <button className="btn btn-primary" onClick={() => navTo('school-registration')}>
              Empanel Your School in This Region
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
