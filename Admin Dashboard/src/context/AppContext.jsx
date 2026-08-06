import React, { createContext, useContext, useState } from 'react';
import { 
  pendingTeachers as initTeachers, 
  pendingSchools as initSchools, 
  allChildren as initChildren, 
  allParents as initParents, 
  skillCategoriesData as initCategories,
  activityFeed as initActivities,
  scheduledReports as initScheduledReports
} from '../data/adminData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Auth State — DEFAULT FALSE so Login Page is shown FIRST
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [teachers, setTeachers] = useState(initTeachers);
  const [approvedTeachersCount, setApprovedTeachersCount] = useState(1248);
  
  const [schools, setSchools] = useState(initSchools);
  const [accreditedSchoolsCount, setAccreditedSchoolsCount] = useState(342);

  const [childrenList, setChildrenList] = useState(initChildren);
  const [parentsList, setParentsList] = useState(initParents);
  const [categoriesList, setCategoriesList] = useState(initCategories);
  const [activities, setActivities] = useState(initActivities);
  const [scheduledReportsList, setScheduledReportsList] = useState(initScheduledReports);
  
  const [toasts, setToasts] = useState([]);
  const [activeModal, setActiveModal] = useState(null); // { type, data }

  // Toast Handler
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

  // Auth Handlers
  const login = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
    showToast(`Welcome back, ${userData.name}! Login successful.`, 'success');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    showToast('Signed out of Admin Console', 'info');
  };

  // Actions
  const approveTeacher = (id) => {
    const teacher = teachers.find(t => t.id === id);
    setTeachers(prev => prev.filter(t => t.id !== id));
    setApprovedTeachersCount(prev => prev + 1);
    const msg = teacher ? `${teacher.name} approved & certified badge granted!` : 'Teacher approved successfully!';
    showToast(msg, 'success');
    
    setActivities(prev => [
      { id: Date.now(), type: 'verification', message: `Approved teacher ${teacher?.name || id}`, time: 'Just now', icon: '🎓' },
      ...prev
    ]);
  };

  const rejectTeacher = (id) => {
    const teacher = teachers.find(t => t.id === id);
    setTeachers(prev => prev.filter(t => t.id !== id));
    showToast(`Teacher application ${teacher?.name || id} rejected.`, 'error');
  };

  const approveSchool = (id) => {
    const school = schools.find(s => s.id === id);
    setSchools(prev => prev.filter(s => s.id !== id));
    setAccreditedSchoolsCount(prev => prev + 1);
    const msg = school ? `${school.name} accredited successfully!` : 'School accredited successfully!';
    showToast(msg, 'success');

    setActivities(prev => [
      { id: Date.now(), type: 'school', message: `Accredited partner school ${school?.name || id}`, time: 'Just now', icon: '🏫' },
      ...prev
    ]);
  };

  const rejectSchool = (id) => {
    const school = schools.find(s => s.id === id);
    setSchools(prev => prev.filter(s => s.id !== id));
    showToast(`School accreditation for ${school?.name || id} rejected.`, 'error');
  };

  const addChild = (childData) => {
    const newChild = {
      id: `CH-0${childrenList.length + 1}`,
      name: childData.name || 'New Child',
      age: parseInt(childData.age) || 5,
      ageGroup: childData.age <= 5 ? '3–5' : childData.age <= 7 ? '5–7' : '7–10',
      parent: childData.parent || 'Parent',
      school: childData.school || 'Partner School',
      program: childData.program || 'Sensory & Motor',
      assessments: 1,
      status: 'Active',
      joinDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      avatar: (childData.name || 'NC').split(' ').map(n => n[0]).join('').toUpperCase()
    };
    setChildrenList(prev => [newChild, ...prev]);
    showToast(`Enrolled child ${newChild.name} successfully!`, 'success');
  };

  const addCategory = (catData) => {
    const newCat = {
      id: `cat-${Date.now()}`,
      name: catData.name,
      count: `${catData.count || 0} Programs`,
      icon: catData.icon || '✨',
      bg: 'bg-indigo-100 text-indigo-900'
    };
    setCategoriesList(prev => [...prev, newCat]);
    showToast(`Added skill category "${newCat.name}"`, 'success');
  };

  const downloadReport = (title, format) => {
    const content = `=== ${title} ===\nExported on: ${new Date().toLocaleString()}\nFormat: ${format}\nStatus: Certified Admin Report\n\nPlatform: Early Child Skill Identification Program\nTotal Children Enrolled: ${childrenList.length + 28400}\nActive Partner Schools: ${accreditedSchoolsCount}\nCertified Skill Teachers: ${approvedTeachersCount}\n`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}.${format === 'Excel' ? 'csv' : 'txt'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Downloaded ${title} (${format})`, 'success');
  };

  const openModal = (type, data = null) => setActiveModal({ type, data });
  const closeModal = () => setActiveModal(null);

  return (
    <AppContext.Provider value={{
      isAuthenticated,
      currentUser,
      login,
      logout,
      teachers,
      approvedTeachersCount,
      schools,
      accreditedSchoolsCount,
      childrenList,
      parentsList,
      categoriesList,
      activities,
      scheduledReportsList,
      toasts,
      activeModal,
      showToast,
      removeToast,
      approveTeacher,
      rejectTeacher,
      approveSchool,
      rejectSchool,
      addChild,
      addCategory,
      downloadReport,
      openModal,
      closeModal,
      setScheduledReportsList
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
