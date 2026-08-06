import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { subscriptionPlans } from '../data/schoolPortalData';
import { useApp } from '../context/AppContext';

export const SubscriptionPlansPage = () => {
  const { navTo, showToast } = useApp();
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">TRANSPARENT EMPANELMENT PLANS</span>
          <h2 className="section-title">School Subscription & Accreditation Plans</h2>
          <p className="section-subtitle">Choose the right diagnostic tier for your campus size and student strength.</p>

          {/* Billing Cycle Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'var(--slate-100)', padding: 4, borderRadius: 999, marginTop: 20 }}>
            <button
              className={`btn btn-sm ${!annualBilling ? 'btn-primary' : 'btn-outline'}`}
              style={{ border: 'none' }}
              onClick={() => setAnnualBilling(false)}
            >
              Monthly Billing
            </button>
            <button
              className={`btn btn-sm ${annualBilling ? 'btn-primary' : 'btn-outline'}`}
              style={{ border: 'none' }}
              onClick={() => setAnnualBilling(true)}
            >
              Annual Billing (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginBottom: 60 }}>
          {subscriptionPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`glass-card ${plan.color}`}
              style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}
              whileHover={{ y: -6 }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--primary)', color: 'white', padding: '4px 16px', borderRadius: 999,
                  fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em'
                }}>
                  Most Popular For Schools
                </div>
              )}

              <div>
                <h3 style={{ fontSize: 22, fontWeight: 900, color: 'var(--slate-900)' }}>{plan.name}</h3>
                <p style={{ fontSize: 13, color: 'var(--slate-600)', marginTop: 4, marginBottom: 20 }}>{plan.tagline}</p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
                  <span style={{ fontSize: 32, fontWeight: 900, color: 'var(--slate-900)' }}>
                    {annualBilling ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--slate-500)', fontWeight: 600 }}>{plan.period}</span>
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent-green)', marginBottom: 24 }}>
                  {plan.capacity}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--slate-700)', lineHeight: 1.4 }}>
                      <Check size={16} style={{ color: 'var(--accent-green)', flexShrink: 0, marginTop: 2 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`btn ${plan.btnVariant}`}
                style={{ width: '100%' }}
                onClick={() => {
                  showToast(`Selected ${plan.name}! Proceeding to Registration.`, 'success');
                  navTo('school-registration');
                }}
              >
                Choose {plan.name} <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
