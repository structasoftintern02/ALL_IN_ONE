import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { ConceptBar } from './components/layout/ConceptBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/common/ScrollProgress';
import { BackToTop } from './components/common/BackToTop';
import { PageTransition } from './components/common/PageTransition';

// Pages
import { Home } from './pages/Home';
import { CompareLoans } from './pages/CompareLoans';
import { LoanProducts } from './pages/LoanProducts';
import { EligibilityChecker } from './pages/EligibilityChecker';
import { ApplyLoan } from './pages/ApplyLoan';
import { DocumentUpload } from './pages/DocumentUpload';
import { TrackApplication } from './pages/TrackApplication';
import { SanctionLetter } from './pages/SanctionLetter';
import { DisbursementStatus } from './pages/DisbursementStatus';
import { EmiCalculator } from './pages/EmiCalculator';
import { FaqPage } from './pages/FaqPage';
import { ContactUs } from './pages/ContactUs';
import { CustomerDashboard } from './pages/CustomerDashboard';

export function AppContent() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'compare':
        return <CompareLoans setActivePage={setActivePage} />;
      case 'products':
        return <LoanProducts setActivePage={setActivePage} />;
      case 'eligibility':
        return <EligibilityChecker setActivePage={setActivePage} />;
      case 'apply':
        return <ApplyLoan setActivePage={setActivePage} />;
      case 'upload':
        return <DocumentUpload setActivePage={setActivePage} />;
      case 'track':
        return <TrackApplication setActivePage={setActivePage} />;
      case 'sanction':
        return <SanctionLetter setActivePage={setActivePage} />;
      case 'disbursement':
        return <DisbursementStatus setActivePage={setActivePage} />;
      case 'calculator':
        return <EmiCalculator setActivePage={setActivePage} />;
      case 'faq':
        return <FaqPage setActivePage={setActivePage} />;
      case 'contact':
        return <ContactUs setActivePage={setActivePage} />;
      case 'dashboard':
        return <CustomerDashboard setActivePage={setActivePage} />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Top Scroll Reading Progress Indicator */}
      <ScrollProgress />

      {/* Concept Theme Switcher Floating Bar */}
      <ConceptBar />

      {/* Main Sticky Navigation Bar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Active Page View Body with Animated Route Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition pageKey={activePage}>
            {renderPage()}
          </PageTransition>
        </AnimatePresence>
      </main>

      {/* Floating Back To Top Button */}
      <BackToTop />

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
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
