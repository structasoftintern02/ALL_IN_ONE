import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const WhyJoinPage = () => {
  const { navTo } = useApp();

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">WHY JOIN AS A SCHOOL</span>
          <h2 className="section-title">Elevate Your Campus to a Certified Skill Diagnostic Hub</h2>
          <p className="section-subtitle">Discover the competitive and academic advantages for empaneled schools.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginBottom: 60 }}>
          {[
            { title: 'Increase Admissions & Parent Trust', desc: 'Parents actively seek schools offering scientific early talent identification rather than plain academics.', icon: '📈' },
            { title: 'Zero Infrastructure Overhead', desc: 'We provide all standardized diagnostic play kits, tangrams, and robotics toolkits directly to your school.', icon: '🛠️' },
            { title: 'Certified External Observers', desc: 'Save on faculty training costs by leveraging certified therapists and IIT STEM instructors assigned to your calendar.', icon: '👨‍🏫' },
            { title: 'Gold Accreditation Badge', desc: 'Empaneled campuses receive Gold Accreditation logos for promotional materials and annual school prospectuses.', icon: '🏅' },
            { title: 'NEP 2020 Compliance Certificate', desc: 'Fulfill National Education Policy early childhood care and developmental milestone audit requirements effortlessly.', icon: '📜' },
            { title: 'Digital ERP Portal Access', desc: 'Full digital suite to manage rosters, schedules, session attendance, and digital student report card distribution.', icon: '💻' }
          ].map((item, idx) => (
            <motion.div key={idx} className="glass-card" style={{ padding: 28 }} whileHover={{ y: -4 }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--slate-600)', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="glass-card" style={{ padding: 32, marginBottom: 60 }}>
          <h3 style={{ fontSize: 20, fontWeight: 900, color: 'var(--slate-900)', marginBottom: 20, textAlign: 'center' }}>
            Traditional Schools vs. Certified Skill Partner Schools
          </h3>
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Evaluation Parameter</th>
                  <th>Traditional School Model</th>
                  <th style={{ color: 'var(--primary)' }}>Certified Skill Partner School</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Talent Identification</b></td>
                  <td>Subjective teacher feedback at age 10+</td>
                  <td><span className="badge badge-green">Scientific 360° Radar at Age 3 to 10</span></td>
                </tr>
                <tr>
                  <td><b>Faculty Expertise</b></td>
                  <td>General nursery / primary teachers</td>
                  <td><span className="badge badge-blue">Certified Speech, Motor & STEM Specialists</span></td>
                </tr>
                <tr>
                  <td><b>Parent Consultation</b></td>
                  <td>General academic marksheet</td>
                  <td><span className="badge badge-green">Certified Percentile Diagnostic Scorecard</span></td>
                </tr>
                <tr>
                  <td><b>Curriculum Framework</b></td>
                  <td>Rote learning & basic crafts</td>
                  <td><span className="badge badge-purple">Tangram Logic, Robotics & Pitch Acoustics</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-primary btn-lg" onClick={() => navTo('school-registration')}>
            Empanel Your School Today <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
