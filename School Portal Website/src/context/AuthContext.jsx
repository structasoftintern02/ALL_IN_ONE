import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const DEMO_SCHOOL_USER = {
  id: 'sch-101',
  name: 'Little Stars International Academy',
  email: 'admin@littlestars.edu.in',
  role: 'School Admin',
  code: 'SCH-MUM-8802',
  principal: 'Dr. Meera Vasudevan',
  phone: '+91 98201 44552',
  address: 'Plot 42, Knowledge Park, Bandra West, Mumbai, Maharashtra 400050',
  logo: '⭐',
  established: 2012,
  affiliation: 'CBSE / Skill Board'
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('school_user');
    return saved ? JSON.parse(saved) : DEMO_SCHOOL_USER;
  });
  
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('school_auth') === 'true' || true; // Default logged in for demo
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('school_theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('school_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('school_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const login = async (email, password) => {
    if (email && password.length >= 4) {
      const schoolUser = { ...DEMO_SCHOOL_USER, email };
      setUser(schoolUser);
      setIsAuthenticated(true);
      localStorage.setItem('school_user', JSON.stringify(schoolUser));
      localStorage.setItem('school_auth', 'true');
      return { success: true };
    }
    return { success: false, error: 'Invalid school email or password' };
  };

  const registerSchool = async (schoolData) => {
    const newSchool = {
      id: `sch-${Date.now()}`,
      name: schoolData.name || 'New Horizon Skill School',
      email: schoolData.email,
      role: 'School Admin',
      code: `SCH-${Math.floor(1000 + Math.random() * 9000)}`,
      principal: schoolData.principal || 'Principal Name',
      phone: schoolData.phone || '+91 99999 00000',
      address: schoolData.address || 'Mumbai, Maharashtra',
      logo: '🏫',
      established: 2024,
      affiliation: 'Skill Discovery Council'
    };
    setUser(newSchool);
    setIsAuthenticated(true);
    localStorage.setItem('school_user', JSON.stringify(newSchool));
    localStorage.setItem('school_auth', 'true');
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('school_user');
    localStorage.removeItem('school_auth');
  };

  const updateSchoolProfile = (updatedData) => {
    const updated = { ...user, ...updatedData };
    setUser(updated);
    localStorage.setItem('school_user', JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      darkMode,
      toggleDarkMode,
      login,
      registerSchool,
      logout,
      updateSchoolProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
