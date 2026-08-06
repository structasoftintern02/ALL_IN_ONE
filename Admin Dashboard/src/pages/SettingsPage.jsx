import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Bell, Shield, Key, Users, Globe, Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SettingsPage = () => {
  const { showToast, openModal } = useApp();
  
  const [platformName, setPlatformName] = useState('Early Child Skill Identification Program');
  const [language, setLanguage] = useState('English (India)');
  const [timezone, setTimezone] = useState('Asia/Kolkata (IST, UTC+05:30)');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    newEnrollment: true,
    teacherSubmission: true,
    schoolApplication: false,
    paymentAlerts: true,
    weeklyReport: true,
    systemAlerts: true
  });

  const toggleSetting = (key, label) => {
    const nextVal = !notifications[key];
    setNotifications(prev => ({ ...prev, [key]: nextVal }));
    showToast(`${label} ${nextVal ? 'enabled' : 'disabled'}`, nextVal ? 'success' : 'info');
  };

  const toggleMaintenance = () => {
    const next = !maintenanceMode;
    setMaintenanceMode(next);
    showToast(`Maintenance mode ${next ? 'ACTIVATED' : 'Deactivated'}`, next ? 'error' : 'success');
  };

  const toggle2FA = () => {
    const next = !twoFactor;
    setTwoFactor(next);
    showToast(`Two-Factor Authentication ${next ? 'Enabled' : 'Disabled'}`, next ? 'success' : 'info');
  };

  return (
    <div>
      <div className="page-title">
        <h1>Platform Settings</h1>
        <p>Configure platform behavior, notifications, security, and team access</p>
      </div>

      {/* General Settings */}
      <motion.div className="settings-section" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="settings-section-header">
          <h3><Globe size={16} style={{ display: 'inline', marginRight: 8, verticalAlign: -2, color: 'var(--primary)' }} /> General Settings</h3>
          <p>Basic platform configuration and preferences</p>
        </div>
        <div className="settings-row">
          <div>
            <div className="sr-label">Platform Name</div>
            <div className="sr-desc">{platformName}</div>
          </div>
          <button 
            className="btn btn-outline btn-sm"
            onClick={() => openModal('EDIT_SETTING', { title: 'Platform Name', currentValue: platformName })}
          >
            Edit
          </button>
        </div>
        <div className="settings-row">
          <div>
            <div className="sr-label">Default Language</div>
            <div className="sr-desc">{language}</div>
          </div>
          <button 
            className="btn btn-outline btn-sm"
            onClick={() => openModal('EDIT_SETTING', { title: 'Default Language', currentValue: language })}
          >
            Change
          </button>
        </div>
        <div className="settings-row">
          <div>
            <div className="sr-label">Timezone</div>
            <div className="sr-desc">{timezone}</div>
          </div>
          <button 
            className="btn btn-outline btn-sm"
            onClick={() => openModal('EDIT_SETTING', { title: 'Timezone', currentValue: timezone })}
          >
            Change
          </button>
        </div>
        <div className="settings-row">
          <div>
            <div className="sr-label">Maintenance Mode</div>
            <div className="sr-desc">Temporarily disable public access to the platform</div>
          </div>
          <button className={`toggle ${maintenanceMode ? 'on' : ''}`} onClick={toggleMaintenance} />
        </div>
      </motion.div>

      {/* Notification Settings */}
      <motion.div className="settings-section" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <div className="settings-section-header">
          <h3><Bell size={16} style={{ display: 'inline', marginRight: 8, verticalAlign: -2, color: 'var(--amber)' }} /> Notification Preferences</h3>
          <p>Control which alerts and notifications you receive</p>
        </div>
        {[
          { key: 'emailAlerts', label: 'Email Alerts', desc: 'Receive important platform notifications via email' },
          { key: 'newEnrollment', label: 'New Enrollment Alert', desc: 'Get notified when a new child enrolls' },
          { key: 'teacherSubmission', label: 'Teacher Certification Submission', desc: 'Alert when a teacher submits credentials for review' },
          { key: 'schoolApplication', label: 'School Application Alert', desc: 'Notify on new school accreditation requests' },
          { key: 'paymentAlerts', label: 'Payment Notifications', desc: 'Track payment success, failures, and refunds' },
          { key: 'weeklyReport', label: 'Weekly Summary Email', desc: 'Receive platform performance summary every Monday' },
          { key: 'systemAlerts', label: 'System Health Alerts', desc: 'Critical alerts about server, uptime, or security' }
        ].map((item) => (
          <div key={item.key} className="settings-row">
            <div>
              <div className="sr-label">{item.label}</div>
              <div className="sr-desc">{item.desc}</div>
            </div>
            <button 
              className={`toggle ${notifications[item.key] ? 'on' : ''}`} 
              onClick={() => toggleSetting(item.key, item.label)} 
            />
          </div>
        ))}
      </motion.div>

      {/* Security */}
      <motion.div className="settings-section" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <div className="settings-section-header">
          <h3><Shield size={16} style={{ display: 'inline', marginRight: 8, verticalAlign: -2, color: 'var(--emerald)' }} /> Security</h3>
          <p>Manage authentication, passwords, and access control</p>
        </div>
        <div className="settings-row">
          <div>
            <div className="sr-label">Two-Factor Authentication</div>
            <div className="sr-desc">Add an extra layer of security to admin accounts</div>
          </div>
          <button className={`toggle ${twoFactor ? 'on' : ''}`} onClick={toggle2FA} />
        </div>
        <div className="settings-row">
          <div>
            <div className="sr-label">Session Timeout</div>
            <div className="sr-desc">Auto-logout after 30 minutes of inactivity</div>
          </div>
          <button 
            className="btn btn-outline btn-sm"
            onClick={() => openModal('EDIT_SETTING', { title: 'Session Timeout', currentValue: '30 Minutes' })}
          >
            Configure
          </button>
        </div>
        <div className="settings-row">
          <div>
            <div className="sr-label">Password Policy</div>
            <div className="sr-desc">Minimum 8 characters, 1 uppercase, 1 number, 1 special</div>
          </div>
          <button 
            className="btn btn-outline btn-sm"
            onClick={() => openModal('EDIT_SETTING', { title: 'Password Policy', currentValue: 'Min 8 chars, 1 upper, 1 number, 1 special' })}
          >
            Edit Policy
          </button>
        </div>
      </motion.div>

      {/* Team & API */}
      <div className="dashboard-grid grid-1-1" style={{ marginBottom: 20 }}>
        <motion.div className="settings-section" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="settings-section-header">
            <h3><Users size={16} style={{ display: 'inline', marginRight: 8, verticalAlign: -2, color: 'var(--purple)' }} /> Team Members</h3>
          </div>
          {[
            { name: 'Super Admin', email: 'admin@ecsip.in', role: 'Super Admin', avatar: 'SA' },
            { name: 'Ravi Sharma', email: 'ravi@ecsip.in', role: 'Operations', avatar: 'RS' },
            { name: 'Anita Deshmukh', email: 'anita@ecsip.in', role: 'Finance', avatar: 'AD' }
          ].map((member, i) => (
            <div key={i} className="settings-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: 'linear-gradient(135deg, var(--primary), var(--purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 11, fontWeight: 800 }}>
                  {member.avatar}
                </div>
                <div>
                  <div className="sr-label">{member.name}</div>
                  <div className="sr-desc">{member.email}</div>
                </div>
              </div>
              <span className="badge premium">{member.role}</span>
            </div>
          ))}
        </motion.div>

        <motion.div className="settings-section" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <div className="settings-section-header">
            <h3><Key size={16} style={{ display: 'inline', marginRight: 8, verticalAlign: -2, color: 'var(--amber)' }} /> API Keys</h3>
          </div>
          {[
            { name: 'Production API Key', key: 'ecsip_prod_****8f3a', status: 'Active', created: '01 Jan 2026' },
            { name: 'Staging API Key', key: 'ecsip_stg_****2c7b', status: 'Active', created: '15 Mar 2026' },
            { name: 'Webhook Secret', key: 'whsec_****9d4e', status: 'Active', created: '01 Jun 2026' }
          ].map((api, i) => (
            <div key={i} className="settings-row">
              <div>
                <div className="sr-label">{api.name}</div>
                <div className="sr-desc" style={{ fontFamily: 'monospace' }}>{api.key}</div>
              </div>
              <button className="badge active" style={{ border: 'none', cursor: 'pointer' }} onClick={() => showToast(`Regenerated ${api.name}`, 'info')}>
                {api.status}
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
