import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage';
import { DashboardPage } from './pages/DashboardPage';
import { ChildProfilesPage } from './pages/children/ChildProfilesPage';
import { AddEditChildPage } from './pages/children/AddEditChildPage';
import { CheckCircle2, X, AlertCircle, Info } from 'lucide-react';

/* ============================================ */
/* TOAST NOTIFICATION RENDERER                  */
/* ============================================ */
const ToastRenderer = () => {
  const { toasts } = useApp();
  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    error: <AlertCircle className="w-4 h-4 text-rose-400" />,
    info: <Info className="w-4 h-4 text-blue-400" />
  };
  const colors = {
    success: 'border-emerald-500/30 bg-emerald-50',
    error: 'border-rose-500/30 bg-rose-50',
    info: 'border-blue-500/30 bg-blue-50'
  };

  return (
    <div className="toast-container">
      <AnimatePresence>
        {toasts.map(t => (
          <div
            key={t.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg text-sm font-semibold text-slate-900 animate-slide-in ${colors[t.type] || colors.success}`}
          >
            {icons[t.type] || icons.success}
            <span>{t.message}</span>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

/* ============================================ */
/* PLACEHOLDER PAGES (Phase 2/3)                */
/* ============================================ */
const PlaceholderPage = ({ title, description, emoji }) => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="text-center max-w-md animate-fade-in">
      <div className="text-6xl mb-4">{emoji || '🚧'}</div>
      <h2 className="text-2xl font-black text-slate-900 mb-2">{title}</h2>
      <p className="text-sm text-slate-500 font-medium">{description || 'This feature will be available in the next update. Stay tuned!'}</p>
      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">
        <span>🔧 Coming in Phase 2</span>
      </div>
    </div>
  </div>
);

/* ============================================ */
/* AUTHENTICATED APP SHELL                      */
/* ============================================ */
const AuthenticatedApp = () => {
  const { activePage } = useApp();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'child-profiles':
      case 'children':
        return <ChildProfilesPage />;
      case 'add-child':
        return <AddEditChildPage />;
      case 'edit-child':
        return <AddEditChildPage editChild={null} />;
      case 'start-assessment':
        return <PlaceholderPage title="Skill Assessment" emoji="🧪" description="Interest, behaviour, cognitive, and motor skill assessments will be available here." />;
      case 'assessment-history':
        return <PlaceholderPage title="Assessment History" emoji="📋" description="View all past assessments and their results." />;
      case 'browse-programs':
        return <PlaceholderPage title="Browse Programs" emoji="📚" description="Discover age-wise programs for your child." />;
      case 'my-enrollments':
        return <PlaceholderPage title="My Enrollments" emoji="🎓" description="Track your enrolled programs and progress." />;
      case 'school-list':
        return <PlaceholderPage title="Nearby Schools" emoji="🏫" description="Find partner schools and learning centers near you." />;
      case 'school-map':
        return <PlaceholderPage title="School Map View" emoji="🗺️" description="Interactive map of nearby schools." />;
      case 'payments':
        return <PlaceholderPage title="Payment History" emoji="💳" description="View all payment transactions and invoices." />;
      case 'skill-reports':
        return <PlaceholderPage title="Skill Reports" emoji="📊" description="Detailed skill breakdown and performance analysis." />;
      case 'certificates':
        return <PlaceholderPage title="Certificates" emoji="🏆" description="Download certificates earned by your children." />;
      case 'notifications':
        return <PlaceholderPage title="Notifications" emoji="🔔" description="All your notifications and alerts in one place." />;
      case 'settings':
        return <PlaceholderPage title="Profile Settings" emoji="⚙️" description="Manage your account settings and preferences." />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 main-wrapper ${sidebarCollapsed ? 'main-wrapper-collapsed' : 'main-wrapper-expanded'}`}
      >
        <TopBar setMobileOpen={setMobileOpen} collapsed={sidebarCollapsed} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {renderPage()}
        </main>
      </div>
      <ToastRenderer />
    </div>
  );
};

/* ============================================ */
/* ROOT APP COMPONENT                           */
/* ============================================ */
function App() {
  return (
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  );
}

const AppWrapper = () => {
  const { isAuthenticated, loading } = useAuth();
  const [authPage, setAuthPage] = useState('login');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="w-8 h-8 border-3 border-teal-500/30 border-t-teal-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    switch (authPage) {
      case 'register':
        return <RegisterPage setAuthPage={setAuthPage} />;
      case 'forgot-password':
        return <ForgotPasswordPage setAuthPage={setAuthPage} />;
      default:
        return <LoginPage setAuthPage={setAuthPage} />;
    }
  }

  return (
    <AppProvider>
      <AuthenticatedApp />
    </AppProvider>
  );
};

export default App;
