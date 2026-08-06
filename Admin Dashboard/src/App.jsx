import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppProvider, useApp } from './context/AppContext';
import { ToastContainer } from './components/ToastContainer';
import { ModalContainer } from './components/ModalContainer';
import { LoginPage } from './pages/LoginPage';

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardPage } from './pages/DashboardPage';
import { TeacherVerifyPage } from './pages/TeacherVerifyPage';
import { SchoolVerifyPage } from './pages/SchoolVerifyPage';
import { ChildrenPage } from './pages/ChildrenPage';
import { ParentsPage } from './pages/ParentsPage';
import { MasterDataPage } from './pages/MasterDataPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { RevenuePage } from './pages/RevenuePage';
import { ReportsPage } from './pages/ReportsPage';
import { SettingsPage } from './pages/SettingsPage';
import { ChildTalentCmsPage } from './pages/ChildTalentCmsPage';
import { AgeProgramsCmsPage } from './pages/AgeProgramsCmsPage';
import { SkillsCmsPage } from './pages/SkillsCmsPage';
import { HowItWorksCmsPage } from './pages/HowItWorksCmsPage';

import { SampleReportCmsPage } from './pages/SampleReportCmsPage';

function DashboardContent() {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage setActivePage={setActivePage} />;
      case 'child-talent':
      case 'child-talent-hero':
      case 'home-page':
        return <ChildTalentCmsPage />;
      case 'child-talent-age-programs':
      case 'age-programs-page':
        return <AgeProgramsCmsPage />;
      case 'child-talent-skills':
      case 'skills-page':
        return <SkillsCmsPage />;
      case 'child-talent-how-it-works':
      case 'how-it-works-page':
        return <HowItWorksCmsPage />;
      case 'child-talent-sample-report':
      case 'sample-report-page':
        return <SampleReportCmsPage />;
      case 'verify-teachers':
        return <TeacherVerifyPage />;
      case 'verify-schools':
        return <SchoolVerifyPage />;
      case 'children':
        return <ChildrenPage />;
      case 'parents':
        return <ParentsPage />;
      case 'master-data':
        return <MasterDataPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'revenue':
        return <RevenuePage />;
      case 'reports':
        return <ReportsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div
        className="main-content"
        style={{ marginLeft: window.innerWidth >= 1024 ? (sidebarCollapsed ? 'var(--sidebar-collapsed)' : 'var(--sidebar-width)') : 0 }}
      >
        <Header setMobileOpen={setMobileOpen} setActivePage={setActivePage} />

        <div className="page-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Global Modals */}
      <ModalContainer />
    </div>
  );
}

function MainAppRouter() {
  const { isAuthenticated } = useApp();

  return (
    <>
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LoginPage />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DashboardContent />
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainAppRouter />
    </AppProvider>
  );
}
