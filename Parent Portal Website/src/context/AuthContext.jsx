import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const API_BASE = 'http://localhost:5000/api';

// Demo parent accounts for testing
const DEMO_PARENTS = [
  {
    id: 'p1',
    name: 'Priya Sharma',
    email: 'priya@demo.com',
    phone: '+91 98765 43210',
    avatar: 'PS',
    avatarBg: 'from-teal-500 to-emerald-500',
    joinedDate: 'July 2026'
  },
  {
    id: 'p2',
    name: 'Rahul Mehta',
    email: 'rahul@demo.com',
    phone: '+91 87654 32109',
    avatar: 'RM',
    avatarBg: 'from-purple-500 to-indigo-500',
    joinedDate: 'June 2026'
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved session
    const saved = localStorage.getItem('parentPortalUser');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        localStorage.removeItem('parentPortalUser');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Demo auth — match against demo accounts
    const found = DEMO_PARENTS.find(p => p.email.toLowerCase() === email.toLowerCase());
    if (found && password.length >= 4) {
      setUser(found);
      localStorage.setItem('parentPortalUser', JSON.stringify(found));
      return { success: true };
    }
    // Try any email/password combo for flexibility
    if (email && password.length >= 4) {
      const demoUser = {
        id: 'p-custom',
        name: email.split('@')[0].replace(/[^a-zA-Z ]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        email,
        phone: '',
        avatar: email.substring(0, 2).toUpperCase(),
        avatarBg: 'from-teal-500 to-cyan-500',
        joinedDate: 'August 2026'
      };
      setUser(demoUser);
      localStorage.setItem('parentPortalUser', JSON.stringify(demoUser));
      return { success: true };
    }
    return { success: false, error: 'Invalid email or password. Try priya@demo.com / any 4+ char password.' };
  };

  const register = async ({ name, email, phone, password }) => {
    // Demo register — create user immediately
    const newUser = {
      id: `p-${Date.now()}`,
      name,
      email,
      phone,
      avatar: name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase(),
      avatarBg: 'from-teal-500 to-emerald-500',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    };
    setUser(newUser);
    localStorage.setItem('parentPortalUser', JSON.stringify(newUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('parentPortalUser');
  };

  const updateProfile = (updates) => {
    const updated = { ...user, ...updates };
    setUser(updated);
    localStorage.setItem('parentPortalUser', JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateProfile, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
