import React, { createContext, useContext, useState } from 'react';
import { sampleSchools, studentEnrollments, certifiedTeachers, expertEducators } from '../data/schoolPortalData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('home');
  const [activeTab, setActiveTab] = useState('all');
  const [schoolsList, setSchoolsList] = useState(sampleSchools);
  const [studentsList, setStudentsList] = useState(studentEnrollments);
  const [teachersList, setTeachersList] = useState(certifiedTeachers);
  
  const [toasts, setToasts] = useState([]);
  const [activeModal, setActiveModal] = useState(null); // { type, data }

  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const navTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const registerSchool = (formData) => {
    const newSchool = {
      id: `sch-0${schoolsList.length + 1}`,
      name: formData.name || 'New Registered School',
      principal: formData.principal || 'Principal',
      board: formData.board || 'CBSE',
      type: formData.type || 'Day School',
      city: formData.city || 'City',
      state: formData.state || 'State',
      address: formData.address || 'Address',
      studentsEnrolled: 0,
      accreditationStatus: 'Pending Verification',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
      gallery: [],
      infrastructure: {
        classrooms: parseInt(formData.classrooms) || 30,
        activityRooms: parseInt(formData.activityRooms) || 4,
        sportsFacilities: ['Multipurpose Sports Ground'],
        stemLabs: 2,
        musicRooms: 1,
        artRooms: 1,
        capacity: '1,500 Students'
      },
      offeredPrograms: ['Early Observation (3-5 yrs)', 'Cognitive Talent (5-7 yrs)'],
      achievements: ['Newly Registered Partner School 2026']
    };

    setSchoolsList(prev => [newSchool, ...prev]);
    showToast(`Registration submitted for ${newSchool.name}! Under verification audit.`, 'success');
    navTo('school-profile');
  };

  const openModal = (type, data = null) => setActiveModal({ type, data });
  const closeModal = () => setActiveModal(null);

  return (
    <AppContext.Provider value={{
      activePage,
      setActivePage,
      navTo,
      activeTab,
      setActiveTab,
      schoolsList,
      studentsList,
      teachersList,
      expertEducators,
      toasts,
      activeModal,
      showToast,
      removeToast,
      registerSchool,
      openModal,
      closeModal
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
