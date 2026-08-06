import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, Heart, FileText, Save, ArrowLeft, Baby } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AddEditChildPage = ({ editChild = null }) => {
  const { addChild, updateChild, setActivePage } = useApp();

  const [form, setForm] = useState({
    name: editChild?.name || '',
    dob: editChild?.dob || '',
    gender: editChild?.gender || 'Male',
    medicalNotes: editChild?.medicalNotes || ''
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const calculateAge = (dob) => {
    if (!dob) return '';
    const birth = new Date(dob);
    const now = new Date();
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    if (months < 0) { years--; months += 12; }
    return `${years} Years ${months} Months`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const childData = {
      ...form,
      age: calculateAge(form.dob)
    };

    if (editChild) {
      updateChild(editChild.id, childData);
    } else {
      addChild(childData);
    }

    await new Promise(r => setTimeout(r, 500));
    setSaving(false);
    setActivePage('child-profiles');
  };

  const genders = ['Male', 'Female', 'Other'];

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header + Back Button */}
      <div>
        <button
          type="button"
          onClick={() => setActivePage('child-profiles')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#F1F5F9',
            border: '1px solid #CBD5E1',
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: 700,
            color: '#475569',
            cursor: 'pointer',
            marginBottom: '16px',
            transition: 'all 0.2s'
          }}
        >
          <ArrowLeft style={{ width: '16px', height: '16px' }} />
          <span>Back to All Children</span>
        </button>

        <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em', margin: 0 }}>
          {editChild ? 'Edit Child Profile' : 'Add New Child'}
        </h1>
        <p style={{ fontSize: '14px', color: '#64748B', fontWeight: 500, marginTop: '6px', margin: 0 }}>
          Fill in your child's details to create their talent & skill identification profile
        </p>
      </div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="responsive-form-padding"
        style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          border: '1.5px solid #E2E8F0',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          padding: '36px 40px'
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Child Full Name */}
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              <User style={{ width: '18px', height: '18px', color: '#0D9488' }} />
              <span>Child's Full Name</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Aarav Sharma"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
              style={{
                width: '100%',
                height: '50px',
                padding: '0 18px',
                borderRadius: '14px',
                border: '1.5px solid #CBD5E1',
                fontSize: '15px',
                fontWeight: 600,
                color: '#0F172A',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* DOB & Gender Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            
            {/* Date of Birth */}
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                <Calendar style={{ width: '18px', height: '18px', color: '#7C3AED' }} />
                <span>Date of Birth</span>
              </label>
              <input
                type="date"
                value={form.dob}
                onChange={(e) => handleChange('dob', e.target.value)}
                required
                style={{
                  width: '100%',
                  height: '50px',
                  padding: '0 18px',
                  borderRadius: '14px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#0F172A',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              {form.dob && (
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#0D9488', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Baby style={{ width: '14px', height: '14px' }} />
                  <span>Age: {calculateAge(form.dob)}</span>
                </div>
              )}
            </div>

            {/* Gender Toggle Pills */}
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                <Heart style={{ width: '18px', height: '18px', color: '#E11D48' }} />
                <span>Gender</span>
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {genders.map(g => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => handleChange('gender', g)}
                    style={{
                      flex: 1,
                      height: '48px',
                      borderRadius: '12px',
                      fontSize: '14px',
                      fontWeight: form.gender === g ? 800 : 600,
                      border: form.gender === g ? '2px solid #0D9488' : '1.5px solid #CBD5E1',
                      background: form.gender === g ? 'rgba(13, 148, 136, 0.1)' : '#F8FAFC',
                      color: form.gender === g ? '#0D9488' : '#64748B',
                      cursor: 'pointer',
                      transition: 'all 0.15s'
                    }}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Medical Notes */}
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              <FileText style={{ width: '18px', height: '18px', color: '#D97706' }} />
              <span>Medical Notes <span style={{ fontSize: '12px', fontWeight: 500, color: '#94A3B8' }}>(Optional)</span></span>
            </label>
            <textarea
              value={form.medicalNotes}
              onChange={(e) => handleChange('medicalNotes', e.target.value)}
              placeholder="Any allergies, conditions, or special notes the team should know..."
              rows={3}
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: '14px',
                border: '1.5px solid #CBD5E1',
                fontSize: '14px',
                fontWeight: 500,
                color: '#0F172A',
                outline: 'none',
                boxSizing: 'border-box',
                resize: 'none',
                minHeight: '90px'
              }}
            />
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px', paddingTop: '16px', borderTop: '1.5px solid #F1F5F9' }}>
            <button
              type="button"
              onClick={() => setActivePage('child-profiles')}
              style={{
                height: '48px',
                padding: '0 24px',
                borderRadius: '12px',
                border: '1.5px solid #CBD5E1',
                background: '#F1F5F9',
                color: '#475569',
                fontSize: '14px',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              style={{
                height: '48px',
                padding: '0 32px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #0D9488, #10B981)',
                color: '#FFFFFF',
                fontSize: '15px',
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(13, 148, 136, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s'
              }}
            >
              {saving ? (
                <div style={{ width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#FFFFFF', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
              ) : (
                <Save style={{ width: '18px', height: '18px' }} />
              )}
              <span>{editChild ? 'Update Profile' : 'Save Child Profile'}</span>
            </button>
          </div>

        </form>
      </motion.div>
    </div>
  );
};
