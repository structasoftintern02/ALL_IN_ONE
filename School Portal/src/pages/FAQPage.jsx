import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';
import { faqsList } from '../data/schoolPortalData';
import { useApp } from '../context/AppContext';

export const FAQPage = () => {
  const { navTo } = useApp();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: 860 }}>
        <div className="section-header">
          <span className="section-tag">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title">School Empanelment & Diagnostic FAQs</h2>
          <p className="section-subtitle">Everything principals and administrators need to know about our platform.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 60 }}>
          {faqsList.map((faq, idx) => (
            <div key={idx} className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{
                  width: '100%', padding: '20px 24px', border: 'none', background: 'none',
                  textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  cursor: 'pointer', fontSize: 16, fontWeight: 800, color: 'var(--slate-900)'
                }}
              >
                <span>{faq.question}</span>
                <ChevronDown size={18} style={{ transform: openIndex === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'var(--slate-400)' }} />
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ padding: '0 24px 20px', fontSize: 14, color: 'var(--slate-600)', lineHeight: 1.6 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="glass-card" style={{ padding: 32, textAlign: 'center', background: 'var(--primary-light)' }}>
          <HelpCircle size={36} style={{ color: 'var(--primary)', marginBottom: 8 }} />
          <h3 style={{ fontSize: 20, fontWeight: 900, color: 'var(--slate-900)' }}>Still Have Questions?</h3>
          <p style={{ fontSize: 14, color: 'var(--slate-600)', marginTop: 4, marginBottom: 20 }}>
            Our school empanelment specialists are available Monday to Saturday for live consultation.
          </p>
          <button className="btn btn-primary" onClick={() => navTo('contact')}>
            <Mail size={16} /> Contact School Support Team
          </button>
        </div>
      </div>
    </div>
  );
};
