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
import { WhyChooseUsCmsPage } from './pages/WhyChooseUsCmsPage';
import { WhyEarlyDiscoveryCmsPage } from './pages/WhyEarlyDiscoveryCmsPage';
import { OurAdvantagesCmsPage } from './pages/OurAdvantagesCmsPage';
import { OurMethodologyCmsPage } from './pages/OurMethodologyCmsPage';
import { ProgramsCmsPage } from './pages/ProgramsCmsPage';
import { SkillCategoriesCmsPage } from './pages/SkillCategoriesCmsPage';
import { AssessmentProcessCmsPage } from './pages/AssessmentProcessCmsPage';
import { KeyBenefitsCmsPage } from './pages/KeyBenefitsCmsPage';
import { SampleReportsCmsPage } from './pages/SampleReportsCmsPage';
import { SuccessStoriesCmsPage } from './pages/SuccessStoriesCmsPage';
import { FaqCmsPage } from './pages/FaqCmsPage';
import { ContactUsCmsPage } from './pages/ContactUsCmsPage';
import { CallToActionCmsPage } from './pages/CallToActionCmsPage';
import { FooterCmsPage } from './pages/FooterCmsPage';
import { AgeProgramsCmsPage } from './pages/AgeProgramsCmsPage';
import { SkillsCmsPage } from './pages/SkillsCmsPage';
import { HowItWorksCmsPage } from './pages/HowItWorksCmsPage';

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
      case 'child-talent-stats':
      case 'home-page':
        return <ChildTalentCmsPage activePage={activePage} />;
      case 'child-talent-why-early':
        return <WhyEarlyDiscoveryCmsPage />;
      case 'child-talent-our-advantages':
        return <OurAdvantagesCmsPage />;
      case 'child-talent-why-choose-us':
        return <WhyChooseUsCmsPage />;
      case 'child-talent-our-methodology':
        return <OurMethodologyCmsPage />;
      case 'child-talent-programs':
        return <ProgramsCmsPage />;
      case 'child-talent-skill-categories':
      case 'child-talent-skills':
      case 'skills-page':
        return <SkillCategoriesCmsPage />;
      case 'child-talent-assessment-process':
      case 'child-talent-how-it-works':
      case 'how-it-works-page':
        return <AssessmentProcessCmsPage />;
      case 'child-talent-key-benefits':
        return <KeyBenefitsCmsPage />;
      case 'child-talent-sample-reports':
      case 'child-talent-sample-report':
      case 'sample-report-page':
        return <SampleReportsCmsPage />;
      case 'child-talent-success-stories':
      case 'child-talent-testimonials':
        return <SuccessStoriesCmsPage />;
      case 'child-talent-faq':
      case 'faq-page':
        return <FaqCmsPage />;
      case 'child-talent-contact-us':
      case 'contact-us-page':
        return <ContactUsCmsPage />;
      case 'child-talent-cta':
      case 'cta-page':
        return <CallToActionCmsPage />;
      case 'child-talent-footer':
      case 'footer-page':
        return <FooterCmsPage />;
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
