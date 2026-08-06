import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight, KeyRound, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const LoginPage = () => {
  const { login } = useApp();
  const [email, setEmail] = useState('admin@ecsip.in');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password');
      return;
    }

    setIsLoading(true);

    // Simulate authenticating against security server
    setTimeout(() => {
      if (email.toLowerCase() === 'admin@ecsip.in' && password === 'admin123') {
        login({
          name: 'Super Admin',
          email: 'admin@ecsip.in',
          role: 'Platform Governance',
          avatar: 'SA'
        });
      } else {
        setIsLoading(false);
        setError('Invalid admin credentials. Try admin@ecsip.in / admin123');
      }
    }, 800);
  };

  const handleQuickDemo = (demoEmail, demoPass) => {
    setEmail(demoEmail);
    setPassword(demoPass);
    setError('');
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #312E81 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: 20
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
        top: '-15%', left: '-10%', filter: 'blur(40px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
        bottom: '-15%', right: '-10%', filter: 'blur(40px)', pointerEvents: 'none'
      }} />

      {/* Main Login Box */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          width: '100%',
          maxWidth: 440,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          borderRadius: 24,
          padding: '36px 32px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{
            width: 54, height: 54, borderRadius: 16,
            background: 'linear-gradient(135deg, #4F46E5, #3B82F6)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 26, boxShadow: '0 8px 20px rgba(79, 70, 229, 0.35)', marginBottom: 12
          }}>
            🛡️
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}>
            Admin Console
          </h1>
          <p style={{ fontSize: 13, color: '#64748B', marginTop: 4, fontWeight: 500 }}>
            Early Child Skill Identification Program
          </p>
        </div>

        {/* Demo Credentials Quick Fill Box */}
        <div style={{
          padding: '12px 14px', borderRadius: 12, background: 'rgba(79, 70, 229, 0.08)',
          border: '1px solid rgba(79, 70, 229, 0.2)', marginBottom: 24
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, color: '#4F46E5', textTransform: 'uppercase', marginBottom: 4 }}>
            <KeyRound size={13} /> Demo Admin Credentials
          </div>
          <div style={{ fontSize: 12, color: '#334155', fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Email: <b>admin@ecsip.in</b></span>
            <span>Pass: <b>admin123</b></span>
          </div>
          <button
            type="button"
            onClick={() => handleQuickDemo('admin@ecsip.in', 'admin123')}
            style={{
              marginTop: 8, width: '100%', padding: '6px', borderRadius: 6,
              background: '#4F46E5', color: 'white', border: 'none',
              fontSize: 11, fontWeight: 700, cursor: 'pointer'
            }}
          >
            Auto-Fill Credentials
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            style={{
              padding: '10px 14px', borderRadius: 10, background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)', color: '#EF4444',
              fontSize: 12, fontWeight: 600, marginBottom: 18, textAlign: 'center'
            }}
          >
            {error}
          </motion.div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Email */}
          <div>
            <label style={{ fontSize: 12, fontWeight: 700, color: '#334155', display: 'block', marginBottom: 6 }}>
              Admin Email
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Mail size={18} style={{ position: 'absolute', left: 14, color: '#94A3B8' }} />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@ecsip.in"
                style={{
                  width: '100%', padding: '11px 14px 11px 42px', borderRadius: 12,
                  border: '1px solid #CBD5E1', fontSize: 13, fontWeight: 600, color: '#0F172A',
                  outline: 'none', background: '#F8FAFC', transition: 'all 0.2s'
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label style={{ fontSize: 12, fontWeight: 700, color: '#334155', display: 'block', marginBottom: 6 }}>
              Password
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Lock size={18} style={{ position: 'absolute', left: 14, color: '#94A3B8' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%', padding: '11px 42px 11px 42px', borderRadius: 12,
                  border: '1px solid #CBD5E1', fontSize: 13, fontWeight: 600, color: '#0F172A',
                  outline: 'none', background: '#F8FAFC', transition: 'all 0.2s'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: 14, background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Options */}
          <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', justifyContent: 'space-between', fontSize: 12 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', color: '#475569', fontWeight: 600 }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
                style={{ accentColor: '#4F46E5', width: 15, height: 15, borderRadius: 4 }}
              />
              Remember session
            </label>
            <button
              type="button"
              onClick={() => alert('Password reset link sent to registered admin email')}
              style={{ background: 'none', border: 'none', color: '#4F46E5', fontWeight: 700, cursor: 'pointer' }}
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: '100%', padding: '12px', borderRadius: 12, marginTop: 8,
              background: 'linear-gradient(135deg, #4F46E5, #3B82F6)',
              color: 'white', border: 'none', fontSize: 14, fontWeight: 800,
              cursor: isLoading ? 'wait' : 'pointer',
              boxShadow: '0 8px 20px rgba(79, 70, 229, 0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
            }}
          >
            {isLoading ? (
              <span>Authenticating Admin...</span>
            ) : (
              <>
                <span>Sign In to Admin Console</span>
                <ArrowRight size={16} />
              </>
            )}
          </motion.button>
        </form>

        {/* Footer info */}
        <div style={{ marginTop: 24, textAlign: 'center', borderTop: '1px solid #F1F5F9', paddingTop: 16 }}>
          <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            <ShieldCheck size={14} style={{ color: '#10B981' }} />
            256-Bit Encrypted Platform Governance Portal
          </div>
        </div>
      </motion.div>
    </div>
  );
};
