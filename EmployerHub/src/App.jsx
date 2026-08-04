import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/common/ScrollProgress';
import { BackToTop } from './components/common/BackToTop';
import { PageTransition } from './components/common/PageTransition';

// Public Pages
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { HiringPlans } from './pages/HiringPlans';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { EmployerLogin } from './pages/EmployerLogin';
import { EmployerRegistration } from './pages/EmployerRegistration';

// Employer Portal Pages
import { EmployerDashboard } from './pages/EmployerDashboard';
import { CompanyProfile } from './pages/CompanyProfile';
import { JobManagement } from './pages/JobManagement';
import { CandidateManagement } from './pages/CandidateManagement';
import { HiringPipeline } from './pages/HiringPipeline';
import { InterviewManagement } from './pages/InterviewManagement';
import { CandidateOnboarding } from './pages/CandidateOnboarding';
import { HiringAnalytics } from './pages/HiringAnalytics';
import { EmployeeManagement } from './pages/EmployeeManagement';
import { BillingSubscription } from './pages/BillingSubscription';
import { SettingsPage } from './pages/SettingsPage';

function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const { activeConfig } = useTheme();

  // Pages that display the public header and footer
  const isPublicPage = ['home', 'features', 'hiring-plans', 'about', 'contact', 'login', 'register'].includes(activePage);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${activeConfig.isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Reading Scroll Progress Bar */}
      <ScrollProgress />

      {/* Public Navbar */}
      {isPublicPage && <Navbar activePage={activePage} setActivePage={setActivePage} />}

      {/* Main Page View with Route Animations */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <PageTransition key={activePage}>
            {activePage === 'home' && <Home setActivePage={setActivePage} />}
            {activePage === 'features' && <Features setActivePage={setActivePage} />}
            {activePage === 'hiring-plans' && <HiringPlans setActivePage={setActivePage} />}
            {activePage === 'about' && <AboutUs setActivePage={setActivePage} />}
            {activePage === 'contact' && <ContactUs setActivePage={setActivePage} />}
            {activePage === 'login' && <EmployerLogin setActivePage={setActivePage} />}
            {activePage === 'register' && <EmployerRegistration setActivePage={setActivePage} />}

            {/* Portal Views */}
            {activePage === 'dashboard' && <EmployerDashboard setActivePage={setActivePage} />}
            {activePage === 'company' && <CompanyProfile setActivePage={setActivePage} />}
            {activePage === 'jobs' && <JobManagement setActivePage={setActivePage} />}
            {activePage === 'candidates' && <CandidateManagement setActivePage={setActivePage} />}
            {activePage === 'pipeline' && <HiringPipeline setActivePage={setActivePage} />}
            {activePage === 'interviews' && <InterviewManagement setActivePage={setActivePage} />}
            {activePage === 'onboarding' && <CandidateOnboarding setActivePage={setActivePage} />}
            {activePage === 'analytics' && <HiringAnalytics setActivePage={setActivePage} />}
            {activePage === 'employees' && <EmployeeManagement setActivePage={setActivePage} />}
            {activePage === 'billing' && <BillingSubscription setActivePage={setActivePage} />}
            {activePage === 'settings' && <SettingsPage setActivePage={setActivePage} />}
          </PageTransition>
        </AnimatePresence>
      </main>

      {/* Public Footer */}
      {isPublicPage && <Footer setActivePage={setActivePage} />}

      {/* Back to Top Floating Action Button */}
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
