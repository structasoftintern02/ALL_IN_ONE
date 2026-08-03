import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { VariationBar } from './components/layout/VariationBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Public Pages
import { HomePage } from './pages/public/HomePage';
import { JobSearchPage } from './pages/public/JobSearchPage';
import { JobsByCityPage } from './pages/public/JobsByCityPage';
import { JobsByIndustryPage } from './pages/public/JobsByIndustryPage';
import { PricingPlansPage } from './pages/public/PricingPlansPage';
import { AboutUsPage } from './pages/public/AboutUsPage';
import { ContactUsPage } from './pages/public/ContactUsPage';

// Candidate Pages
import { CandidateLogin } from './pages/candidate/CandidateLogin';
import { CandidateRegister } from './pages/candidate/CandidateRegister';
import { CandidateDashboard } from './pages/candidate/CandidateDashboard';
import { CandidateProfile } from './pages/candidate/CandidateProfile';
import { ApplicationHistory } from './pages/candidate/ApplicationHistory';
import { ApplicationTracking } from './pages/candidate/ApplicationTracking';

// Employer Company Pages
import { CompanyLogin } from './pages/company/CompanyLogin';
import { CompanyRegister } from './pages/company/CompanyRegister';
import { CompanyDashboard } from './pages/company/CompanyDashboard';
import { CompanyProfile } from './pages/company/CompanyProfile';
import { JobPostingWizard } from './pages/company/JobPostingWizard';
import { CandidateManagement } from './pages/company/CandidateManagement';
import { HiringPipelinePage } from './pages/company/HiringPipelinePage';
import { InterviewSchedule } from './pages/company/InterviewSchedule';
import { EmployeeOnboarding } from './pages/company/EmployeeOnboarding';
import { HiringAnalytics } from './pages/company/HiringAnalytics';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { CompanyVerifyPage } from './pages/admin/CompanyVerifyPage';
import { CandidateVerifyPage } from './pages/admin/CandidateVerifyPage';
import { MasterDataManagement } from './pages/admin/MasterDataManagement';

export function AppContent() {
  const [activePortal, setActivePortal] = useState('public'); // 'public' | 'candidate' | 'company' | 'admin'
  const [activePage, setActivePage] = useState('home');

  const isPortalLayout = activePortal === 'candidate' || activePortal === 'company' || activePortal === 'admin';

  const renderPage = () => {
    // PUBLIC PAGES
    if (activePortal === 'public') {
      switch (activePage) {
        case 'home':
          return <HomePage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'job-search':
          return <JobSearchPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'jobs-city':
          return <JobsByCityPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'jobs-industry':
          return <JobsByIndustryPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'pricing':
          return <PricingPlansPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'about':
          return <AboutUsPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'contact':
          return <ContactUsPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'candidate-login':
          return <CandidateLogin setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'company-login':
          return <CompanyLogin setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        default:
          return <HomePage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
      }
    }

    // CANDIDATE PORTAL
    if (activePortal === 'candidate') {
      switch (activePage) {
        case 'candidate-login':
          return <CandidateLogin setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'candidate-register':
          return <CandidateRegister setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'candidate-dashboard':
          return <CandidateDashboard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'candidate-profile':
          return <CandidateProfile setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'candidate-history':
          return <ApplicationHistory setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'candidate-tracking':
          return <ApplicationTracking setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        default:
          return <CandidateDashboard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
      }
    }

    // COMPANY ATS PORTAL
    if (activePortal === 'company') {
      switch (activePage) {
        case 'company-login':
          return <CompanyLogin setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'company-register':
          return <CompanyRegister setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'company-dashboard':
          return <CompanyDashboard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'company-post-job':
          return <JobPostingWizard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'company-applicants':
          return <CandidateManagement setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'company-kanban':
          return <HiringPipelinePage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'company-interviews':
          return <InterviewSchedule setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'company-onboarding':
          return <EmployeeOnboarding setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'company-analytics':
          return <HiringAnalytics setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'company-profile':
          return <CompanyProfile setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        default:
          return <CompanyDashboard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
      }
    }

    // ADMIN PANEL
    if (activePortal === 'admin') {
      switch (activePage) {
        case 'admin-dashboard':
          return <AdminDashboard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'admin-verify-company':
          return <CompanyVerifyPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'admin-verify-candidate':
          return <CandidateVerifyPage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        case 'admin-master':
          return <MasterDataManagement setActivePage={setActivePage} setActivePortal={setActivePortal} />;
        default:
          return <AdminDashboard setActivePage={setActivePage} setActivePortal={setActivePortal} />;
      }
    }

    return <HomePage setActivePage={setActivePage} setActivePortal={setActivePortal} />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Floating Variation Switcher */}
      <VariationBar />

      {/* Navbar with Portal Selector */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        activePortal={activePortal} 
        setActivePortal={setActivePortal} 
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Footer (Only on public view or bottom) */}
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
