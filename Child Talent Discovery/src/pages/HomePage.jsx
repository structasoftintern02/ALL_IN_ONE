import React from 'react';
import { Hero } from '../components/sections/Hero';
import { WhyEarlyDiscovery } from '../components/sections/WhyEarlyDiscovery';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { OurAdvantages } from '../components/sections/OurAdvantages';
import { AboutSection } from '../components/sections/AboutSection';
import { AgePrograms } from '../components/sections/AgePrograms';
import { SkillCategories } from '../components/sections/SkillCategories';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Benefits } from '../components/sections/Benefits';
import { AssessmentPreview } from '../components/sections/AssessmentPreview';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';

export const HomePage = ({ setActivePage }) => {
  return (
    <div>
      <Hero setActivePage={setActivePage} />
      <WhyEarlyDiscovery setActivePage={setActivePage} />
      <WhyChooseUs setActivePage={setActivePage} />
      <OurAdvantages setActivePage={setActivePage} />
      <AboutSection setActivePage={setActivePage} />
      <AgePrograms setActivePage={setActivePage} />
      <SkillCategories setActivePage={setActivePage} />
      <HowItWorks setActivePage={setActivePage} />
      <Benefits setActivePage={setActivePage} />
      <AssessmentPreview setActivePage={setActivePage} />
      <Testimonials />
      <FAQ setActivePage={setActivePage} limit={6} />
      <Contact />
    </div>
  );
};
