import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn, Sparkles, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const LoginPage = ({ setAuthPage }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = await login(email, password);
    if (!result.success) {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <div className="auth-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 16px' }}>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          width: '100%',
          maxWidth: '460px',
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1.5px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '28px',
          boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.65), 0 0 40px rgba(13, 148, 136, 0.15)',
          padding: '40px 36px',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #0D9488, #10B981)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 10px 25px rgba(13, 148, 136, 0.35)'
          }}>
            <Sparkles style={{ width: '32px', height: '32px', color: '#FFFFFF' }} />
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
            Welcome Back
          </h1>
          <p style={{ fontSize: '14px', color: '#94A3B8', fontWeight: 500, marginTop: '6px', margin: 0 }}>
            Sign in to your Parent Portal account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'rgba(239, 68, 68, 0.12)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#FCA5A5',
                fontSize: '13px',
                fontWeight: 600,
                textAlign: 'center'
              }}
            >
              {error}
            </motion.div>
          )}

          {/* Email Field */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              Email Address
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Mail style={{ position: 'absolute', left: '16px', width: '20px', height: '20px', color: '#2DD4BF', pointerEvents: 'none', zIndex: 10 }} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="priya@demo.com"
                required
                className="auth-input"
                style={{
                  height: '52px',
                  paddingLeft: '48px',
                  paddingRight: '16px',
                  borderRadius: '14px',
                  background: 'rgba(30, 41, 59, 0.85)',
                  border: '1.5px solid rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: 600
                }}
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              Password
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Lock style={{ position: 'absolute', left: '16px', width: '20px', height: '20px', color: '#2DD4BF', pointerEvents: 'none', zIndex: 10 }} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="auth-input"
                style={{
                  height: '52px',
                  paddingLeft: '48px',
                  paddingRight: '48px',
                  borderRadius: '14px',
                  background: 'rgba(30, 41, 59, 0.85)',
                  border: '1.5px solid rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: 600
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '16px', background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center' }}
              >
                {showPassword ? <EyeOff style={{ width: '20px', height: '20px' }} /> : <Eye style={{ width: '20px', height: '20px' }} />}
              </button>
            </div>
          </div>

          {/* Remember me & Forgot Password */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                style={{ width: '18px', height: '18px', borderRadius: '4px', border: '1.5px solid #475569', accentColor: '#0D9488', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#CBD5E1' }}>Remember me</span>
            </label>
            <button
              type="button"
              onClick={() => setAuthPage('forgot-password')}
              style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: 700, color: '#2DD4BF', cursor: 'pointer' }}
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              height: '52px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #0D9488, #10B981)',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 900,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(13, 148, 136, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '6px',
              transition: 'all 0.2s ease'
            }}
          >
            {loading ? (
              <div style={{ width: '22px', height: '22px', border: '2.5px solid rgba(255,255,255,0.3)', borderTopColor: '#FFFFFF', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
            ) : (
              <>
                <LogIn style={{ width: '20px', height: '20px' }} />
                <span>Sign In to Portal</span>
              </>
            )}
          </button>

          {/* Demo Account Box */}
          <div style={{
            padding: '14px 18px',
            borderRadius: '14px',
            background: 'rgba(13, 148, 136, 0.08)',
            border: '1px solid rgba(13, 148, 136, 0.2)',
            textAlign: 'center',
            marginTop: '4px'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#2DD4BF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              🔑 DEMO LOGIN CREDENTIALS
            </div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#F1F5F9', marginTop: '4px' }}>
              <span style={{ color: '#5EEAD4' }}>priya@demo.com</span> • <span style={{ color: '#94A3B8' }}>test1234</span>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <p style={{ fontSize: '14px', color: '#94A3B8', fontWeight: 500, margin: 0 }}>
            Don't have an account?{' '}
            <button
              onClick={() => setAuthPage('register')}
              style={{ background: 'none', border: 'none', color: '#2DD4BF', fontWeight: 800, cursor: 'pointer', padding: 0 }}
            >
              Create Account →
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
