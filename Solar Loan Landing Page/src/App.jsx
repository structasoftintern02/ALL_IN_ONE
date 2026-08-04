import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/common/BackToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LoanTypesPage } from './pages/LoanTypesPage';
import { EligibilityPage } from './pages/EligibilityPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { HowToApplyPage } from './pages/HowToApplyPage';
import { SubsidyPage } from './pages/SubsidyPage';
import { EMICalculatorPage } from './pages/EMICalculatorPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

const PageTransition = ({ children, pageKey }) => (
  <motion.div
    key={pageKey}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {children}
  </motion.div>
);

function AppContent() {
  const [activePage, setActivePage] = useState('home');

  const handleSetActivePage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':         return <HomePage setActivePage={handleSetActivePage} />;
      case 'about':        return <AboutPage setActivePage={handleSetActivePage} />;
      case 'loan-types':   return <LoanTypesPage setActivePage={handleSetActivePage} />;
      case 'eligibility':  return <EligibilityPage setActivePage={handleSetActivePage} />;
      case 'documents':    return <DocumentsPage setActivePage={handleSetActivePage} />;
      case 'how-to-apply': return <HowToApplyPage setActivePage={handleSetActivePage} />;
      case 'subsidy':      return <SubsidyPage setActivePage={handleSetActivePage} />;
      case 'calculator':   return <EMICalculatorPage setActivePage={handleSetActivePage} />;
      case 'faq':          return <FAQPage setActivePage={handleSetActivePage} />;
      case 'contact':      return <ContactPage setActivePage={handleSetActivePage} />;
      default:             return <HomePage setActivePage={handleSetActivePage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition pageKey={activePage}>
            {renderPage()}
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer setActivePage={handleSetActivePage} />
      <BackToTop />
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
