import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/common/BackToTop';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { SkillsPage } from './pages/SkillsPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { BenefitsPage } from './pages/BenefitsPage';
import { ReportPreviewPage } from './pages/ReportPreviewPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { ParentLoginPage } from './pages/ParentLoginPage';
import { ParentDashboardPage } from './pages/ParentDashboardPage';

const PageTransition = ({ children, pageKey }) => (
  <motion.div
    key={pageKey}
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -14 }}
    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {children}
  </motion.div>
);

function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleSetActivePage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':           return <HomePage setActivePage={handleSetActivePage} />;
      case 'about':          return <AboutPage setActivePage={handleSetActivePage} />;
      case 'programs':       return <ProgramsPage setActivePage={handleSetActivePage} />;
      case 'skills':         return <SkillsPage setActivePage={handleSetActivePage} />;
      case 'how-it-works':   return <HowItWorksPage setActivePage={handleSetActivePage} />;
      case 'benefits':       return <BenefitsPage setActivePage={handleSetActivePage} />;
      case 'report-preview': return <ReportPreviewPage setActivePage={handleSetActivePage} />;
      case 'testimonials':   return <TestimonialsPage setActivePage={handleSetActivePage} />;
      case 'faq':            return <FAQPage setActivePage={handleSetActivePage} />;
      case 'contact':        return <ContactPage setActivePage={handleSetActivePage} />;
      case 'parent-login':   return <ParentLoginPage setActivePage={handleSetActivePage} setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo} />;
      case 'parent-dashboard': return <ParentDashboardPage setActivePage={handleSetActivePage} userInfo={userInfo} setIsLoggedIn={setIsLoggedIn} />;
      default:               return <HomePage setActivePage={handleSetActivePage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Sticky Navigation Header */}
      <Navbar activePage={activePage} setActivePage={handleSetActivePage} isLoggedIn={isLoggedIn} userInfo={userInfo} setIsLoggedIn={setIsLoggedIn} />

      {/* Main Page View with Animated Route Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition pageKey={activePage}>
            {renderPage()}
          </PageTransition>
        </AnimatePresence>
      </main>

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Footer */}
      <Footer setActivePage={handleSetActivePage} />
    </div>
  );
}

import { DataProvider } from './context/DataContext';

export default function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <AppContent />
      </DataProvider>
    </ThemeProvider>
  );
}
