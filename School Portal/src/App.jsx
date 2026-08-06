import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppProvider, useApp } from './context/AppContext';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/common/ToastContainer';
import { ModalContainer } from './components/common/ModalContainer';

// All 20 Pages
import { HomePage } from './pages/HomePage';
import { AboutProgramPage } from './pages/AboutProgramPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { AgeWiseProgramsPage } from './pages/AgeWiseProgramsPage';
import { AssessmentProcessPage } from './pages/AssessmentProcessPage';
import { SchoolRegistrationPage } from './pages/SchoolRegistrationPage';
import { SchoolProfilePage } from './pages/SchoolProfilePage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { ExpertTeachersPage } from './pages/ExpertTeachersPage';
import { ProgramCalendarPage } from './pages/ProgramCalendarPage';
import { StudentEnrollmentPage } from './pages/StudentEnrollmentPage';
import { SessionSchedulingPage } from './pages/SessionSchedulingPage';
import { AttendancePage } from './pages/AttendancePage';
import { ChildProgressReportsPage } from './pages/ChildProgressReportsPage';
import { RegionalProgramsPage } from './pages/RegionalProgramsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

function AppRouter() {
  const { activePage } = useApp();

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutProgramPage />;
      case 'programs': return <ProgramsPage />;
      case 'age-programs': return <AgeWiseProgramsPage />;
      case 'assessment-process': return <AssessmentProcessPage />;
      case 'school-registration': return <SchoolRegistrationPage />;
      case 'school-profile': return <SchoolProfilePage />;
      case 'infrastructure': return <InfrastructurePage />;
      case 'expert-teachers': return <ExpertTeachersPage />;
      case 'program-calendar': return <ProgramCalendarPage />;
      case 'student-enrollment': return <StudentEnrollmentPage />;
      case 'session-scheduling': return <SessionSchedulingPage />;
      case 'attendance': return <AttendancePage />;
      case 'progress-reports': return <ChildProgressReportsPage />;
      case 'regional-programs': return <RegionalProgramsPage />;
      case 'faqs': return <FAQPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
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
      </main>
      <Footer />

      {/* Interactive Global Modals & Toast Alerts */}
      <ModalContainer />
      <ToastContainer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
