import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { VariationBar } from './components/layout/VariationBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/common/ScrollProgress';
import { BackToTop } from './components/common/BackToTop';
import { PageTransition } from './components/common/PageTransition';

import { countriesData, basePlans } from './data/pricingData';

// Pages
import { LandingPage } from './pages/LandingPage';
import { CustomerLogin } from './pages/CustomerLogin';
import { Registration } from './pages/Registration';
import { ForgotPassword } from './pages/ForgotPassword';
import { CustomerDashboard } from './pages/CustomerDashboard';
import { CountrySelection } from './pages/CountrySelection';
import { CountryPricing } from './pages/CountryPricing';
import { PlanComparison } from './pages/PlanComparison';
import { SubscriptionFlow } from './pages/SubscriptionFlow';
import { BillingPage } from './pages/BillingPage';
import { ProfilePage } from './pages/ProfilePage';

export function AppContent() {
  const [activePage, setActivePage] = useState('landing');
  const [selectedCountry, setSelectedCountry] = useState(countriesData[0]); // Default USA
  const [selectedPlan, setSelectedPlan] = useState(basePlans[2]); // Default Pro

  const isCrmDashboardView = ['dashboard', 'billing', 'profile'].includes(activePage);

  const renderPage = () => {
    switch (activePage) {
      case 'landing':
        return <LandingPage setActivePage={setActivePage} />;
      case 'login':
        return <CustomerLogin setActivePage={setActivePage} />;
      case 'register':
        return <Registration setActivePage={setActivePage} />;
      case 'forgot':
        return <ForgotPassword setActivePage={setActivePage} />;
      case 'dashboard':
        return <CustomerDashboard setActivePage={setActivePage} />;
      case 'country':
        return (
          <CountrySelection 
            setActivePage={setActivePage} 
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry} 
          />
        );
      case 'pricing':
        return (
          <CountryPricing 
            setActivePage={setActivePage} 
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            setSelectedPlan={setSelectedPlan}
          />
        );
      case 'comparison':
        return <PlanComparison setActivePage={setActivePage} />;
      case 'purchase':
        return (
          <SubscriptionFlow 
            setActivePage={setActivePage} 
            selectedPlan={selectedPlan}
            selectedCountry={selectedCountry}
          />
        );
      case 'billing':
        return <BillingPage setActivePage={setActivePage} />;
      case 'profile':
        return <ProfilePage setActivePage={setActivePage} />;
      default:
        return <LandingPage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Scroll Progress Bar at top */}
      <ScrollProgress />

      {/* Top Floating Variation Switcher */}
      <VariationBar />

      {/* Show Navbar on public views */}
      {!isCrmDashboardView && (
        <Navbar activePage={activePage} setActivePage={setActivePage} />
      )}

      {/* Main Page Content with Page Route Transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition key={activePage}>
            {renderPage()}
          </PageTransition>
        </AnimatePresence>
      </main>

      {/* Show Footer on public views */}
      {!isCrmDashboardView && (
        <Footer setActivePage={setActivePage} />
      )}

      {/* Floating Back to Top Button */}
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
