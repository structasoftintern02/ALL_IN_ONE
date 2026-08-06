import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { VariationBar } from './components/layout/VariationBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/common/ScrollProgress';
import { BackToTop } from './components/common/BackToTop';
import { PageTransition } from './components/common/PageTransition';

// Public Pages
import { HomePage } from './pages/public/HomePage';
import { ProgramsPage } from './pages/public/ProgramsPage';
import { AgeWisePlansPage } from './pages/public/AgeWisePlansPage';
import { NearbySchoolsPage } from './pages/public/NearbySchoolsPage';
import { ContactUsPage } from './pages/public/ContactUsPage';

// Parent Pages
import { ParentLogin } from './pages/parent/ParentLogin';
import { ParentRegister } from './pages/parent/ParentRegister';
import { ParentDashboard } from './pages/parent/ParentDashboard';
import { ChildProfile } from './pages/parent/ChildProfile';
import { AssessmentPage } from './pages/parent/AssessmentPage';
import { SkillReportPage } from './pages/parent/SkillReportPage';
import { EnrollmentWizard } from './pages/parent/EnrollmentWizard';
import { PaymentCheckout } from './pages/parent/PaymentCheckout';

// School Pages
import { SchoolDashboard } from './pages/school/SchoolDashboard';
import { SchoolProfile } from './pages/school/SchoolProfile';
import { StudentEnrollment } from './pages/school/StudentEnrollment';

// Teacher Pages
import { TeacherLogin } from './pages/teacher/TeacherLogin';
import { TeacherDashboard } from './pages/teacher/TeacherDashboard';
import { CertUploadPage } from './pages/teacher/CertUploadPage';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { TeacherVerifyPage } from './pages/admin/TeacherVerifyPage';
import { SchoolVerifyPage } from './pages/admin/SchoolVerifyPage';
import { MasterDataManagement } from './pages/admin/MasterDataManagement';

export function AppContent() {
  const [activePortal, setActivePortal] = useState('public'); // 'public' | 'parent' | 'school' | 'teacher' | 'admin'
  const [activePage, setActivePage] = useState('home');

  const pageKey = `${activePortal}-${activePage}`;

  const renderPage = () => {
    // PUBLIC PAGES
    if (activePortal === 'public') {
      switch (activePage) {
        case 'home':
          return <HomePage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'programs':
        case 'age-plans':
          return <ProgramsPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'nearby-schools':
          return <NearbySchoolsPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'contact':
          return <ContactUsPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        default:
          return <HomePage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
      }
    }

    // PARENT PORTAL
    if (activePortal === 'parent') {
      switch (activePage) {
        case 'parent-login':
          return <ParentLogin setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'parent-register':
          return <ParentRegister setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'parent-dashboard':
          return <ParentDashboard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'child-profile':
          return <ChildProfile setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'assessment-quiz':
          return <AssessmentPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'skill-report':
          return <SkillReportPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'enrollment-wizard':
          return <EnrollmentWizard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'payment-checkout':
          return <PaymentCheckout setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        default:
          return <ParentDashboard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
      }
    }

    // SCHOOL PORTAL
    if (activePortal === 'school') {
      switch (activePage) {
        case 'school-dashboard':
          return <SchoolDashboard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'school-profile':
          return <SchoolProfile setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'school-students':
          return <StudentEnrollment setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        default:
          return <SchoolDashboard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
      }
    }

    // TEACHER PORTAL
    if (activePortal === 'teacher') {
      switch (activePage) {
        case 'teacher-login':
          return <TeacherLogin setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'teacher-dashboard':
          return <TeacherDashboard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'teacher-cert-upload':
          return <CertUploadPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        default:
          return <TeacherLogin setActivePage={setActivePage} setActivePortal={setActivePortal} />;
      }
    }

    // ADMIN PANEL
    if (activePortal === 'admin') {
      switch (activePage) {
        case 'admin-dashboard':
          return <AdminDashboard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'admin-verify-teacher':
          return <TeacherVerifyPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'admin-verify-school':
          return <SchoolVerifyPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'admin-master':
          return <MasterDataManagement setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        default:
          return <AdminDashboard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
      }
    }

    return <HomePage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Top Scroll Reading Progress Indicator */}
      <ScrollProgress />

      {/* Top Floating Theme Switcher */}
      <VariationBar />

      {/* Header Navigation with Portal Selector */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        activePortal={activePortal} 
        setActivePortal={setActivePortal} 
      />

      {/* Main Page Content with Animated Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition pageKey={pageKey}>
            {renderPage()}
          </PageTransition>
        </AnimatePresence>
      </main>

      {/* Back To Top Floating Action Button */}
      <BackToTop />

      {/* Footer */}
      {activePortal === 'public' && (
        <Footer setActivePage={setActivePage} setActivePortal={setActivePortal} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
