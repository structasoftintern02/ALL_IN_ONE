import React, { useState, useEffect } from 'react';
import { AgePrograms } from '../components/sections/AgePrograms';
import { SkillCategories } from '../components/sections/SkillCategories';

const API_URL = 'http://localhost:5000/api/cms/child-talent';

export const ProgramsPage = ({ setActivePage }) => {
  const [cmsData, setCmsData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}`)
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.ageProgramsCms) {
          setCmsData(data.ageProgramsCms);
        }
      })
      .catch(() => {});
  }, []);

  const heroBadge = cmsData?.pageHeroBadge || "🌱 Age-Tailored Modules";
  const heroTitle = cmsData?.pageHeroTitle || "Age-wise Development Programs";
  const heroSubtitle = cmsData?.pageHeroSubtitle || "Explore dedicated skill evaluation programs tailored for 3–5 years, 5–7 years, and 7–10 years milestone groups.";
  const vis = cmsData?.visibility || {};

  const renderHeroTitle = (titleText) => {
    if (!titleText) return null;
    const words = titleText.split(' ');
    if (words.length <= 1) return <span>{titleText}</span>;
    const lastWord = words.pop();
    const firstPart = words.join(' ');
    return (
      <>
        {firstPart} <span className="text-cyan-400">{lastWord}</span>
      </>
    );
  };

  return (
    <div>
      {(vis.pageHero !== false) && (
        <div className="py-14 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white text-center px-4">
          <div className="max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-extrabold border border-white/20">
              {heroBadge}
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold">
              {renderHeroTitle(heroTitle)}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              {heroSubtitle}
            </p>
          </div>
        </div>
      )}
      <AgePrograms setActivePage={setActivePage} />
      <SkillCategories setActivePage={setActivePage} />
    </div>
  );
};
