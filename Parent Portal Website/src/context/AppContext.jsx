import React, { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext(null);

// Demo children data
const DEMO_CHILDREN = [
  {
    id: 'c1',
    name: 'Aarav Sharma',
    dob: '2020-04-12',
    age: '6 Years 4 Months',
    gender: 'Male',
    avatar: 'AS',
    avatarBg: 'from-purple-500 to-rose-500',
    archetype: 'Creative Explorer & STEM Strategist',
    overallScore: 89,
    activePrograms: 2,
    assessmentStatus: 'completed',
    medicalNotes: ''
  },
  {
    id: 'c2',
    name: 'Ananya Sharma',
    dob: '2022-09-22',
    age: '3 Years 11 Months',
    gender: 'Female',
    avatar: 'AN',
    avatarBg: 'from-rose-500 to-amber-500',
    archetype: null,
    overallScore: null,
    activePrograms: 1,
    assessmentStatus: 'pending',
    medicalNotes: ''
  }
];

const DEMO_PROGRAMS = [
  {
    id: 'pr1',
    childId: 'c1',
    name: 'Creative & Cognitive Growth (5-7 Years)',
    school: 'Little Stars Academy',
    progress: 72,
    nextSession: '2026-08-08',
    sessionsCompleted: 14,
    totalSessions: 20,
    status: 'active'
  },
  {
    id: 'pr2',
    childId: 'c1',
    name: 'STEM Explorer Workshop',
    school: 'BrightMinds School',
    progress: 45,
    nextSession: '2026-08-10',
    sessionsCompleted: 9,
    totalSessions: 20,
    status: 'active'
  },
  {
    id: 'pr3',
    childId: 'c2',
    name: 'Early Sensory Play (2-4 Years)',
    school: 'Little Stars Academy',
    progress: 30,
    nextSession: '2026-08-09',
    sessionsCompleted: 6,
    totalSessions: 20,
    status: 'active'
  }
];

const DEMO_SESSIONS = [
  { id: 's1', childName: 'Aarav', programName: 'Creative & Cognitive Growth', date: '2026-08-08', time: '10:00 AM', type: 'In-Person', school: 'Little Stars Academy' },
  { id: 's2', childName: 'Ananya', programName: 'Early Sensory Play', date: '2026-08-09', time: '2:00 PM', type: 'Home-Play', school: 'At Home' },
  { id: 's3', childName: 'Aarav', programName: 'STEM Explorer Workshop', date: '2026-08-10', time: '11:00 AM', type: 'In-Person', school: 'BrightMinds School' },
  { id: 's4', childName: 'Aarav', programName: 'Creative & Cognitive Growth', date: '2026-08-12', time: '10:00 AM', type: 'In-Person', school: 'Little Stars Academy' },
  { id: 's5', childName: 'Ananya', programName: 'Early Sensory Play', date: '2026-08-14', time: '2:00 PM', type: 'Home-Play', school: 'At Home' }
];

const DEMO_NOTIFICATIONS = [
  { id: 'n1', title: 'Assessment Report Ready', message: "Aarav's Cognitive Assessment report is now available.", time: '2 hours ago', type: 'report', read: false },
  { id: 'n2', title: 'Upcoming Session', message: 'Creative & Cognitive Growth session tomorrow at 10 AM.', time: '5 hours ago', type: 'session', read: false },
  { id: 'n3', title: 'New Program Available', message: 'Junior Chess & Logic program now open for enrollment!', time: '1 day ago', type: 'program', read: true },
  { id: 'n4', title: 'Payment Confirmed', message: 'Payment of ₹4,500 for STEM Explorer Workshop received.', time: '3 days ago', type: 'payment', read: true }
];

export const AppProvider = ({ children: appChildren }) => {
  const [activePage, setActivePage] = useState('dashboard');
  const [children, setChildren] = useState(DEMO_CHILDREN);
  const [programs] = useState(DEMO_PROGRAMS);
  const [sessions] = useState(DEMO_SESSIONS);
  const [notifications, setNotifications] = useState(DEMO_NOTIFICATIONS);
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  }, []);

  const addChild = (child) => {
    const newChild = {
      id: `c-${Date.now()}`,
      ...child,
      avatar: child.name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase(),
      avatarBg: 'from-cyan-500 to-teal-500',
      archetype: null,
      overallScore: null,
      activePrograms: 0,
      assessmentStatus: 'pending',
      medicalNotes: child.medicalNotes || ''
    };
    setChildren(prev => [...prev, newChild]);
    showToast(`${child.name} added successfully!`);
    return newChild;
  };

  const updateChild = (id, updates) => {
    setChildren(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
    showToast('Child profile updated!');
  };

  const deleteChild = (id) => {
    setChildren(prev => prev.filter(c => c.id !== id));
    showToast('Child profile removed.', 'info');
  };

  const markNotificationRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <AppContext.Provider value={{
      activePage, setActivePage,
      children, addChild, updateChild, deleteChild,
      programs, sessions,
      notifications, markNotificationRead, unreadCount,
      toasts, showToast
    }}>
      {appChildren}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};
