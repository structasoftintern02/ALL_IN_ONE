import React, { createContext, useContext, useState, useCallback } from 'react';

const SchoolContext = createContext(null);

// Demo Initial Data
const INITIAL_STUDENTS = [
  { id: 'st-101', rollNo: 'S-201', name: 'Aarav Sharma', age: 6, grade: 'Grade 1-A', parentName: 'Priya Sharma', parentPhone: '+91 98201 11223', parentEmail: 'priya@demo.com', enrolledPrograms: ['Creative & Cognitive Growth', 'STEM Explorer'], progressScore: 89, attendancePct: 96, status: 'Active' },
  { id: 'st-102', rollNo: 'S-202', name: 'Ananya Sharma', age: 3, grade: 'Pre-K B', parentName: 'Priya Sharma', parentPhone: '+91 98201 11223', parentEmail: 'priya@demo.com', enrolledPrograms: ['Early Sensory Play'], progressScore: 92, attendancePct: 98, status: 'Active' },
  { id: 'st-103', rollNo: 'S-203', name: 'Rohan Verma', age: 7, grade: 'Grade 2-B', parentName: 'Vikram Verma', parentPhone: '+91 98765 43210', parentEmail: 'vikram@verma.com', enrolledPrograms: ['Junior Robotics & Coding', 'Math Whiz'], progressScore: 95, attendancePct: 92, status: 'Active' },
  { id: 'st-104', rollNo: 'S-204', name: 'Diya Patel', age: 5, grade: 'KG-A', parentName: 'Sanjay Patel', parentPhone: '+91 98111 22334', parentEmail: 'sanjay@patel.com', enrolledPrograms: ['Phonics & Vocal Arts'], progressScore: 88, attendancePct: 94, status: 'Active' },
  { id: 'st-105', rollNo: 'S-205', name: 'Kabir Mehta', age: 8, grade: 'Grade 3-A', parentName: 'Neha Mehta', parentPhone: '+91 97222 33445', parentEmail: 'neha@mehta.com', enrolledPrograms: ['Junior Chess & Logic', 'STEM Explorer'], progressScore: 91, attendancePct: 90, status: 'Active' },
  { id: 'st-106', rollNo: 'S-206', name: 'Sanya Gupta', age: 6, grade: 'Grade 1-B', parentName: 'Amit Gupta', parentPhone: '+91 96333 44556', parentEmail: 'amit@gupta.com', enrolledPrograms: ['Creative & Cognitive Growth'], progressScore: 84, attendancePct: 88, status: 'Active' }
];

const INITIAL_TEACHERS = [
  { id: 'tch-1', name: 'Mrs. Rajeshwari Nair', empId: 'T-101', skills: ['Cognitive Skills', 'Early Childhood Ed'], email: 'rnair@littlestars.edu', phone: '+91 98200 12345', programs: ['Creative & Cognitive Growth'], status: 'Available', rating: 4.9, experience: '8 Years' },
  { id: 'tch-2', name: 'Mr. Arvind Deshmukh', empId: 'T-102', skills: ['STEM', 'Robotics & AI'], email: 'adeshmukh@littlestars.edu', phone: '+91 98200 23456', programs: ['STEM Explorer Workshop', 'Junior Robotics & Coding'], status: 'In Session', rating: 4.8, experience: '6 Years' },
  { id: 'tch-3', name: 'Ms. Anita Sundaram', empId: 'T-103', skills: ['Sensory Development', 'Montessori'], email: 'asundaram@littlestars.edu', phone: '+91 98200 34567', programs: ['Early Sensory Play'], status: 'Available', rating: 5.0, experience: '10 Years' },
  { id: 'tch-4', name: 'Mr. David Fernandez', empId: 'T-104', skills: ['Vocal Arts', 'Phonics & Speech'], email: 'dfernandez@littlestars.edu', phone: '+91 98200 45678', programs: ['Phonics & Vocal Arts'], status: 'On Leave', rating: 4.7, experience: '5 Years' }
];

const INITIAL_PROGRAMS = [
  { id: 'prg-1', name: 'Creative & Cognitive Growth', category: 'Cognitive & Motor', ageGroup: '5-7 Years', enrolledCount: 28, maxCapacity: 30, assignedTeacher: 'Mrs. Rajeshwari Nair', schedule: 'Mon & Wed (10:00 AM)', status: 'Active', fee: '₹4,500' },
  { id: 'prg-2', name: 'STEM Explorer Workshop', category: 'Science & Logic', ageGroup: '6-8 Years', enrolledCount: 22, maxCapacity: 25, assignedTeacher: 'Mr. Arvind Deshmukh', schedule: 'Tue & Thu (11:00 AM)', status: 'Active', fee: '₹5,200' },
  { id: 'prg-3', name: 'Early Sensory Play', category: 'Early Childhood', ageGroup: '2-4 Years', enrolledCount: 18, maxCapacity: 20, assignedTeacher: 'Ms. Anita Sundaram', schedule: 'Mon & Fri (02:00 PM)', status: 'Active', fee: '₹3,800' },
  { id: 'prg-4', name: 'Junior Chess & Logic Lab', category: 'Strategy & Math', ageGroup: '7-10 Years', enrolledCount: 15, maxCapacity: 20, assignedTeacher: 'Mr. Arvind Deshmukh', schedule: 'Saturday (10:00 AM)', status: 'Upcoming', fee: '₹4,000' }
];

const INITIAL_SESSIONS = [
  { id: 'ses-1', programName: 'Creative & Cognitive Growth', teacherName: 'Mrs. Rajeshwari Nair', date: '2026-08-08', time: '10:00 AM', room: 'Smart Lab 1', enrolled: 28, attended: 26, status: 'Scheduled' },
  { id: 'ses-2', programName: 'STEM Explorer Workshop', teacherName: 'Mr. Arvind Deshmukh', date: '2026-08-08', time: '11:30 AM', room: 'Robotics Center', enrolled: 22, attended: 21, status: 'Scheduled' },
  { id: 'ses-3', programName: 'Early Sensory Play', teacherName: 'Ms. Anita Sundaram', date: '2026-08-09', time: '02:00 PM', room: 'Activity Hall A', enrolled: 18, attended: 18, status: 'Scheduled' },
  { id: 'ses-4', programName: 'Junior Chess & Logic Lab', teacherName: 'Mr. Arvind Deshmukh', date: '2026-08-10', time: '10:00 AM', room: 'Logic Studio', enrolled: 15, attended: 0, status: 'Upcoming' }
];

const INITIAL_INFRASTRUCTURE = [
  { id: 'inf-1', name: 'STEM & Robotics Innovation Lab', category: 'Laboratories', capacity: '30 Students', features: ['3D Printers', 'LEGO Education Robotics', 'Interactive Smartboard'], status: 'Operational', image: '🤖' },
  { id: 'inf-2', name: 'Montessori Sensory & Play Studio', category: 'Activity Rooms', capacity: '20 Toddlers', features: ['Padded Flooring', 'Tactile Skill Panels', 'Calm Zone'], status: 'Operational', image: '🎨' },
  { id: 'inf-3', name: 'Multipurpose Skill Auditorium', category: 'Auditoriums', capacity: '250 Seats', features: ['Pro Surround Sound', 'Acoustic Panels', 'Stage Lighting'], status: 'Operational', image: '🎭' },
  { id: 'inf-4', name: 'Indoor Sports & Motor Skill Arena', category: 'Sports & Playgrounds', capacity: '50 Students', features: ['Climbing Wall', 'Balance Beams', 'Mini Turf'], status: 'Under Maintenance', image: '🏟️' }
];

const INITIAL_NOTIFICATIONS = [
  { id: 'not-1', title: 'Parent Portal Synced', message: '12 new parent accounts created for Grade 1 students.', time: '10 mins ago', type: 'system', read: false },
  { id: 'not-2', title: 'Monthly Assessment Report Ready', message: 'Cognitive & Motor Skill scores updated for July 2026.', time: '1 hour ago', type: 'report', read: false },
  { id: 'not-3', title: 'Session Attendance Completed', message: 'Mrs. Nair marked attendance for Creative Growth session.', time: '3 hours ago', type: 'attendance', read: true }
];

export const SchoolProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('dashboard');
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [teachers, setTeachers] = useState(INITIAL_TEACHERS);
  const [programs, setPrograms] = useState(INITIAL_PROGRAMS);
  const [sessions, setSessions] = useState(INITIAL_SESSIONS);
  const [infrastructure, setInfrastructure] = useState(INITIAL_INFRASTRUCTURE);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [toasts, setToasts] = useState([]);

  // Toast Handler
  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  }, []);

  // Student Actions
  const addStudent = (studentData) => {
    const newStudent = {
      id: `st-${Date.now()}`,
      rollNo: `S-${200 + students.length + 1}`,
      progressScore: 85,
      attendancePct: 95,
      status: 'Active',
      enrolledPrograms: studentData.enrolledPrograms || ['General Skills'],
      ...studentData
    };
    setStudents(prev => [newStudent, ...prev]);
    showToast(`Student ${studentData.name} enrolled successfully!`);
  };

  const updateStudent = (id, updatedData) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, ...updatedData } : s));
    showToast(`Student updated successfully!`);
  };

  const deleteStudent = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
    showToast(`Student record deleted.`, 'info');
  };

  // Teacher Actions
  const addTeacher = (teacherData) => {
    const newTeacher = {
      id: `tch-${Date.now()}`,
      empId: `T-${100 + teachers.length + 1}`,
      status: 'Available',
      rating: 5.0,
      programs: teacherData.programs || [],
      skills: teacherData.skills || ['General Education'],
      ...teacherData
    };
    setTeachers(prev => [newTeacher, ...prev]);
    showToast(`Teacher ${teacherData.name} added!`);
  };

  // Program Actions
  const addProgram = (programData) => {
    const newProg = {
      id: `prg-${Date.now()}`,
      enrolledCount: 0,
      status: 'Active',
      ...programData
    };
    setPrograms(prev => [newProg, ...prev]);
    showToast(`Program ${programData.name} created!`);
  };

  // Session Actions
  const addSession = (sessionData) => {
    const newSes = {
      id: `ses-${Date.now()}`,
      attended: 0,
      status: 'Scheduled',
      ...sessionData
    };
    setSessions(prev => [newSes, ...prev]);
    showToast(`Session scheduled for ${sessionData.date}!`);
  };

  // Attendance Toggle
  const updateSessionAttendance = (sessionId, attendedCount) => {
    setSessions(prev => prev.map(s => s.id === sessionId ? { ...s, attended: attendedCount, status: 'Completed' } : s));
    showToast(`Attendance updated for session.`);
  };

  // Broadcast Announcement
  const broadcastNotification = (title, message, target = 'Parents') => {
    const newNotif = {
      id: `not-${Date.now()}`,
      title: `[${target}] ${title}`,
      message,
      time: 'Just now',
      type: 'broadcast',
      read: false
    };
    setNotifications(prev => [newNotif, ...prev]);
    showToast(`Announcement broadcasted to ${target}!`);
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    showToast(`All notifications marked as read.`, 'info');
  };

  return (
    <SchoolContext.Provider value={{
      activePage,
      setActivePage,
      students,
      teachers,
      programs,
      sessions,
      infrastructure,
      notifications,
      toasts,
      showToast,
      addStudent,
      updateStudent,
      deleteStudent,
      addTeacher,
      addProgram,
      addSession,
      updateSessionAttendance,
      broadcastNotification,
      markAllNotificationsRead
    }}>
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) throw new Error('useSchool must be used within SchoolProvider');
  return context;
};
