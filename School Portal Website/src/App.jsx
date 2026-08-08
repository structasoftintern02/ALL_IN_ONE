import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { SchoolProvider, useSchool } from './context/SchoolContext';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { DashboardPage } from './pages/DashboardPage';
import { SchoolProfilePage } from './pages/SchoolProfilePage';
import { ClassroomsPage } from './pages/ClassroomsPage';
import { FoundationProgramsPage } from './pages/FoundationProgramsPage';
import { StudentEnrollmentPage } from './pages/StudentEnrollmentPage';
import { ParentsPage } from './pages/ParentsPage';
import { TeachersPage } from './pages/TeachersPage';
import { AttendancePage } from './pages/AttendancePage';
import { AssessmentsPage } from './pages/AssessmentsPage';
import { RevenueCenterPage } from './pages/RevenueCenterPage';
import { SchoolEventsPage } from './pages/SchoolEventsPage';
import { AnnouncementsPage } from './pages/AnnouncementsPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { SettingsPage } from './pages/SettingsPage';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

/* Toast Notification Renderer */
const ToastRenderer = () => {
  const { toasts } = useSchool();
  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    error: <AlertCircle className="w-4 h-4 text-rose-400" />,
    info: <Info className="w-4 h-4 text-blue-400" />
  };
  const colors = {
    success: 'border-emerald-500/30 bg-emerald-950/90 text-emerald-200',
    error: 'border-rose-500/30 bg-rose-950/90 text-rose-200',
    info: 'border-blue-500/30 bg-blue-950/90 text-blue-200'
  };

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map(t => (
          <div
            key={t.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-2xl text-xs font-bold pointer-events-auto backdrop-blur-md ${colors[t.type] || colors.success}`}
          >
            {icons[t.type] || icons.success}
            <span>{t.message}</span>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

/* Global Add Classroom Modal */
const GlobalAddClassroomModal = ({ isOpen, onClose }) => {
  const { addClassroom } = useSchool();
  const [formData, setFormData] = useState({
    name: '',
    roomNumber: '',
    capacity: 35,
    maxStudents: 30,
    ageGroup: '5–8 Years',
    rentalPrice: 8500,
    isSmart: true,
    hasAC: true,
    hasProjector: true,
    hasWhiteboard: true,
    hasWifi: true,
    hasCCTV: true,
    type: 'Indoor',
    description: 'High-speed smart classroom with digital interactive board and climate control.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.roomNumber.trim()) return;

    addClassroom({
      id: `CR-${Date.now()}`,
      ...formData,
      status: 'Available'
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-black text-slate-900 dark:text-white">List New Physical Classroom</h3>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Classroom Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Innovation Hub Alpha"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Room Number</label>
              <input
                type="text"
                required
                placeholder="e.g. A-201"
                value={formData.roomNumber}
                onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Weekly Rental Price (₹)</label>
              <input
                type="number"
                value={formData.rentalPrice}
                onChange={(e) => setFormData({ ...formData, rentalPrice: Number(e.target.value) })}
                className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Total Capacity</label>
              <input
                type="number"
                value={formData.capacity}
                onChange={(e) => setFormData({ ...formData, capacity: Number(e.target.value) })}
                className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Recommended Age</label>
              <input
                type="text"
                value={formData.ageGroup}
                onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Infrastructure Amenities</label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <label className="flex items-center gap-2 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 cursor-pointer font-bold">
                <input type="checkbox" checked={formData.isSmart} onChange={(e) => setFormData({ ...formData, isSmart: e.target.checked })} />
                <span>Smart Board</span>
              </label>
              <label className="flex items-center gap-2 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 cursor-pointer font-bold">
                <input type="checkbox" checked={formData.hasAC} onChange={(e) => setFormData({ ...formData, hasAC: e.target.checked })} />
                <span>Air Conditioned</span>
              </label>
              <label className="flex items-center gap-2 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 cursor-pointer font-bold">
                <input type="checkbox" checked={formData.hasProjector} onChange={(e) => setFormData({ ...formData, hasProjector: e.target.checked })} />
                <span>Projector</span>
              </label>
              <label className="flex items-center gap-2 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 cursor-pointer font-bold">
                <input type="checkbox" checked={formData.hasWifi} onChange={(e) => setFormData({ ...formData, hasWifi: e.target.checked })} />
                <span>High-Speed WiFi</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-lg mt-2"
          >
            Publish Classroom to Partner Network
          </button>
        </form>
      </div>
    </div>
  );
};

/* Authenticated Main App Shell */
const AuthenticatedApp = () => {
  const { activePage } = useSchool();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAddClassroomModal, setShowAddClassroomModal] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage onOpenAddClassroom={() => setShowAddClassroomModal(true)} />;
      case 'school-profile':
        return <SchoolProfilePage />;
      case 'classrooms':
        return <ClassroomsPage isOpenAddModal={showAddClassroomModal} onCloseAddModal={() => setShowAddClassroomModal(false)} />;
      case 'foundation-programs':
        return <FoundationProgramsPage />;
      case 'student-enrollments':
        return <StudentEnrollmentPage />;
      case 'parents':
        return <ParentsPage />;
      case 'teachers':
        return <TeachersPage />;
      case 'attendance':
        return <AttendancePage />;
      case 'assessments':
        return <AssessmentsPage />;
      case 'revenue':
        return <RevenueCenterPage />;
      case 'school-events':
        return <SchoolEventsPage />;
      case 'announcements':
        return <AnnouncementsPage />;
      case 'documents':
        return <DocumentsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage onOpenAddClassroom={() => setShowAddClassroomModal(true)} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500 selection:text-white transition-colors duration-200">
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar 
          setMobileOpen={setMobileOpen} 
          onOpenAddClassroom={() => setShowAddClassroomModal(true)} 
        />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {renderPage()}
        </main>
      </div>

      <ToastRenderer />

      <GlobalAddClassroomModal 
        isOpen={showAddClassroomModal} 
        onClose={() => setShowAddClassroomModal(false)} 
      />
    </div>
  );
};

/* Root Export Component */
export function App() {
  return (
    <ThemeProvider>
      <SchoolProvider>
        <AuthenticatedApp />
      </SchoolProvider>
    </ThemeProvider>
  );
}

export default App;
