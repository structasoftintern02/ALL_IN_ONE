import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2, GraduationCap, Users, Award, ShieldCheck, CheckCircle2,
  ArrowRight, Star, ChevronRight, Sparkles, Activity, FileText, Heart
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import {
  platformStats, trustedSchools, ageGroupPrograms,
  expertEducators, testimonials, faqsList
} from '../data/schoolPortalData';

export const HomePage = () => {
  const { navTo, openModal, showToast } = useApp();

  return (
    <div>
      {/* ── HERO SECTION ── */}
      <section style={{
        background: 'radial-gradient(circle at 50% 0%, #EFF6FF 0%, #FFFFFF 70%)',
        paddingTop: 60, paddingBottom: 80, overflow: 'hidden', position: 'relative'
      }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 40, alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-tag">
              <Sparkles size={12} /> Empowering Schools with Scientific Skill Identification
            </div>
            <h1 style={{ fontSize: 44, fontWeight: 900, color: 'var(--slate-900)', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: 20 }}>
              Discover Every Child's Natural Talent in Your School
            </h1>
            <p style={{ fontSize: 18, color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: 32 }}>
              A scientific 5-stage diagnostic platform empowering schools to evaluate motor, cognitive, creative, STEM, linguistic, and musical talents in children aged 3 to 10 years.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={() => navTo('school-registration')}>
                Register School Now <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline btn-lg" onClick={() => navTo('programs')}>
                Explore Skill Programs
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--slate-200)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <ShieldCheck size={18} style={{ color: 'var(--accent-green)' }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-700)' }}>NEP 2020 Aligned</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Award size={18} style={{ color: 'var(--primary)' }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-700)' }}>CBSE / ICSE Compliant</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Star size={18} style={{ color: 'var(--amber)', fill: 'var(--amber)' }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-700)' }}>4.9/5 School Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Illustration / Preview Mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} style={{ position: 'relative' }}>
            <div className="glass-card" style={{ padding: 24, borderRadius: 24, boxShadow: '0 25px 50px -12px rgba(37,99,235,0.15)', background: 'white' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10B981' }} />
                </div>
                <span className="badge badge-green">Live ERP Sync</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                alt="School Skill Evaluation"
                style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: 16, marginBottom: 16 }}
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, textAlignment: 'center', textAlign: 'center' }}>
                <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 12 }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--primary)' }}>360°</div>
                  <div style={{ fontSize: 11, color: 'var(--slate-500)', fontWeight: 600 }}>Radar Scorecard</div>
                </div>
                <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 12 }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--accent-green)' }}>6</div>
                  <div style={{ fontSize: 11, color: 'var(--slate-500)', fontWeight: 600 }}>Core Domains</div>
                </div>
                <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 12 }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--purple)' }}>100%</div>
                  <div style={{ fontSize: 11, color: 'var(--slate-500)', fontWeight: 600 }}>Certified Report</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUSTED SCHOOLS STRIP ── */}
      <section style={{ padding: '32px 0', borderTop: '1px solid var(--slate-200)', borderBottom: '1px solid var(--slate-200)', background: 'var(--slate-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 800, color: 'var(--slate-500)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>
            TRUSTED BY OVER 500+ LEADING PRE-PRIMARY & K-10 SCHOOLS
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
            {trustedSchools.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: 0.8, cursor: 'pointer' }} onClick={() => navTo('school-profile')}>
                <span style={{ fontSize: 24 }}>{s.logo}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 13, color: 'var(--slate-800)' }}>{s.name}</div>
                  <div style={{ fontSize: 10, color: 'var(--slate-500)' }}>{s.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM STATS ── */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">IMPACT & METRICS</span>
            <h2 className="section-title">Empowering Early Childhood Talent At Scale</h2>
            <p className="section-subtitle">Our diagnostic framework is benchmarked across thousands of children daily.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {platformStats.map((stat, i) => (
              <motion.div
                key={i}
                className="glass-card"
                style={{ padding: 28, textAlign: 'center' }}
                whileHover={{ y: -6 }}
              >
                <div style={{ fontSize: 36, marginBottom: 10 }}>{stat.icon}</div>
                <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.02em', marginBottom: 4 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 14, color: 'var(--slate-600)', fontWeight: 600 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SCHOOLS CHOOSE US ── */}
      <section style={{ padding: '80px 0', background: 'var(--slate-50)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">WHY SCHOOLS JOIN</span>
            <h2 className="section-title">Transform Your Early Childhood Curriculum</h2>
            <p className="section-subtitle">Integrated skill observation toolkit, certified faculty, and digital ERP progress cards.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {[
              { title: 'Standardized NEP Diagnostic Toolkits', desc: 'Pre-packaged observational kits for fine motor, tangrams, phonics, and robotics play.', icon: '🧩' },
              { title: 'Empaneled Certified Skill Teachers', desc: 'Certified pedagogical experts & therapists assigned directly to your school calendar.', icon: '🎓' },
              { title: '360° Radar Child Progress Reports', desc: 'Automated digital report generator with percentile scores and developmental roadmaps.', icon: '📊' },
              { title: 'Complete ERP Portal Integration', desc: 'Schedule sessions, mark attendance, and distribute parent report cards seamlessly.', icon: '⚡' },
              { title: 'Parent Delight & Retention', desc: 'Demonstrate actionable talent insights during PTMs to boost admissions & trust.', icon: '❤️' },
              { title: 'National Accreditation Badge', desc: 'Grant your campus Gold Accreditation status as a certified skill identification center.', icon: '🏆' }
            ].map((f, i) => (
              <motion.div key={i} className="glass-card" style={{ padding: 28 }} whileHover={{ y: -4 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 16 }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--slate-600)', lineHeight: 1.6 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGE-WISE SKILL PROGRAMS ── */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">AGE-WISE PROGRAM CATALOG</span>
            <h2 className="section-title">Age-Appropriate Diagnostic Frameworks</h2>
            <p className="section-subtitle">Tailored observation modules for 3 to 10 year olds.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {ageGroupPrograms.map((prog, i) => (
              <motion.div key={prog.id} className="glass-card" style={{ padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} whileHover={{ y: -6 }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <span className="badge badge-blue">{prog.ageGroup}</span>
                    <span style={{ fontSize: 22 }}>{prog.icon}</span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--slate-900)', marginBottom: 8 }}>{prog.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--slate-600)', marginBottom: 16, lineHeight: 1.5 }}>{prog.tagline}</p>
                  
                  <div style={{ padding: '10px 14px', background: 'var(--slate-50)', borderRadius: 10, fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', marginBottom: 16 }}>
                    ⏱️ {prog.duration}
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: 8 }}>Targeted Skills ({prog.targetedSkillsCount})</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {prog.skills.slice(0, 4).map((sk, idx) => (
                        <span key={idx} style={{ padding: '3px 8px', borderRadius: 6, background: 'var(--slate-100)', fontSize: 11, fontWeight: 600, color: 'var(--slate-700)' }}>
                          ✨ {sk}
                        </span>
                      ))}
                      {prog.skills.length > 4 && (
                        <span style={{ padding: '3px 8px', borderRadius: 6, background: 'var(--primary-light)', fontSize: 11, fontWeight: 700, color: 'var(--primary)' }}>
                          +{prog.skills.length - 4} More
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => navTo('age-programs')}>
                  View Full Framework <ChevronRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ── CTA & FOOTER ── */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #2563EB, #1D4ED8)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 12, color: 'white' }}>
            Ready to Empower Your Students' Hidden Talents?
          </h2>
          <p style={{ fontSize: 16, color: '#DBEAFE', maxWidth: 600, margin: '0 auto 28px' }}>
            Empanel your school today and grant your institution Gold Accreditation in Child Skill Diagnostics.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
            <button className="btn btn-accent btn-lg" onClick={() => navTo('school-registration')}>
              Register School Now
            </button>
            <button className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)' }} onClick={() => navTo('contact')}>
              Schedule School Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
