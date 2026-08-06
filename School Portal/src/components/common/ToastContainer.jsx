import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ToastContainer = () => {
  const { toasts, removeToast } = useApp();

  return (
    <div style={{
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      maxWidth: 380,
      pointerEvents: 'none'
    }}>
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            style={{
              pointerEvents: 'auto',
              background: 'white',
              borderRadius: 14,
              padding: '12px 16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)',
              border: '1px solid var(--slate-200)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              borderLeft: toast.type === 'error' ? '4px solid var(--rose)' : toast.type === 'info' ? '4px solid var(--primary)' : '4px solid var(--accent-green)'
            }}
          >
            {toast.type === 'error' ? (
              <AlertCircle size={20} style={{ color: 'var(--rose)', flexShrink: 0 }} />
            ) : toast.type === 'info' ? (
              <Info size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            ) : (
              <CheckCircle2 size={20} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
            )}
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--slate-800)', flex: 1, lineHeight: 1.4 }}>
              {toast.message}
            </span>
            <button
              onClick={() => removeToast(toast.id)}
              style={{ background: 'none', border: 'none', color: 'var(--slate-400)', cursor: 'pointer', padding: 2 }}
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
