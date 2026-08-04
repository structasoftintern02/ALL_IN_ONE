import React from 'react';
import { Hero } from '../components/sections/Hero';
import { WhySolar } from '../components/sections/WhySolar';
import { Benefits } from '../components/sections/Benefits';
import { LoanTypes } from '../components/sections/LoanTypes';
import { Eligibility } from '../components/sections/Eligibility';
import { BankingPartners } from '../components/sections/BankingPartners';
import { GovernmentSubsidy } from '../components/sections/GovernmentSubsidy';
import { EMICalculator } from '../components/sections/EMICalculator';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';

export const HomePage = ({ setActivePage }) => {
  return (
    <div>
      <Hero setActivePage={setActivePage} />
      <WhySolar setActivePage={setActivePage} />
      <Benefits setActivePage={setActivePage} />
      <LoanTypes setActivePage={setActivePage} />
      <BankingPartners />
      <Eligibility setActivePage={setActivePage} />
      <GovernmentSubsidy setActivePage={setActivePage} />
      <EMICalculator setActivePage={setActivePage} />
      <Testimonials />
      <FAQ setActivePage={setActivePage} limit={6} />
      <Contact />
    </div>
  );
};
