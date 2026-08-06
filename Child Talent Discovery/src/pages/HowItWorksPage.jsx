import React, { useState, useEffect } from 'react';
import { HowItWorks } from '../components/sections/HowItWorks';
import { AssessmentPreview } from '../components/sections/AssessmentPreview';

const API_URL = 'http://localhost:5000/api/cms/child-talent';

export const HowItWorksPage = ({ setActivePage }) => {
  const [cmsData, setCmsData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}`)
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.howItWorksCms) {
          setCmsData(data.howItWorksCms);
        }
      })
      .catch(() => {});
  }, []);

  const heroBadge = cmsData?.pageHeroBadge || "🐣 Simple Parent Guide";
  const heroTitle = cmsData?.pageHeroTitle || "How Talent Assessment Works";
  const heroSubtitle = cmsData?.pageHeroSubtitle || "A step-by-step walkthrough of registration, play-based task activities, instant report generation, and personalized learning guidance.";
  const vis = cmsData?.visibility || {};

  const renderHeroTitle = (titleText) => {
    if (!titleText) return null;
    const words = titleText.split(' ');
    if (words.length <= 1) return <span>{titleText}</span>;
    const lastWord = words.pop();
    const firstPart = words.join(' ');
    return (
      <>
        {firstPart} <span className="text-emerald-400">{lastWord}</span>
      </>
    );
  };

  return (
    <div>
      {(vis.pageHero !== false) && (
        <div className="py-14 bg-gradient-to-br from-teal-950 via-slate-900 to-indigo-950 text-white text-center px-4">
          <div className="max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-extrabold border border-white/20">
              {heroBadge}
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold">{renderHeroTitle(heroTitle)}</h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              {heroSubtitle}
            </p>
          </div>
        </div>
      )}
      <HowItWorks setActivePage={setActivePage} />
      <AssessmentPreview setActivePage={setActivePage} />
    </div>
  );
};
