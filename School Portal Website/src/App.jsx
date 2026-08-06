import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider, useAuth } from './context/AuthContext';
import { SchoolProvider, useSchool } from './context/SchoolContext';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage';
import { DashboardPage } from './pages/DashboardPage';
import { SchoolProfilePage } from './pages/SchoolProfilePage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { StudentManagementPage } from './pages/StudentManagementPage';
import { ProgramManagementPage } from './pages/ProgramManagementPage';
import { TeachersPage } from './pages/TeachersPage';
import { AttendancePage } from './pages/AttendancePage';
import { SessionCalendarPage } from './pages/SessionCalendarPage';
import { ReportsPage } from './pages/ReportsPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { SettingsPage } from './pages/SettingsPage';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

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
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-2xl text-xs font-bold animate-slide-in pointer-events-auto backdrop-blur-md ${colors[t.type] || colors.success}`}
          >
            {icons[t.type] || icons.success}
            <span>{t.message}</span>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

/* Authenticated Main App Shell */
const AuthenticatedApp = () => {
  const { activePage } = useSchool();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'school-profile':
        return <SchoolProfilePage />;
      case 'infrastructure':
        return <InfrastructurePage />;
      case 'students':
        return <StudentManagementPage />;
      case 'programs':
        return <ProgramManagementPage />;
      case 'teachers':
        return <TeachersPage />;
      case 'attendance':
        return <AttendancePage />;
      case 'calendar':
        return <SessionCalendarPage />;
      case 'reports':
        return <ReportsPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 main-wrapper ${
          sidebarCollapsed ? 'main-wrapper-collapsed' : 'main-wrapper-expanded'
        }`}
      >
        <TopBar setMobileOpen={setMobileOpen} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {renderPage()}
        </main>
      </div>

      <ToastRenderer />
    </div>
  );
};

/* Root Wrapper */
export function App() {
  return (
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  );
}

const AppWrapper = () => {
  const { isAuthenticated } = useAuth();
  const [authPage, setAuthPage] = useState('login');

  if (!isAuthenticated) {
    if (authPage === 'register') return <RegisterPage setAuthPage={setAuthPage} />;
    if (authPage === 'forgot') return <ForgotPasswordPage setAuthPage={setAuthPage} />;
    return <LoginPage setAuthPage={setAuthPage} />;
  }

  return (
    <SchoolProvider>
      <AuthenticatedApp />
    </SchoolProvider>
  );
};

export default App;
