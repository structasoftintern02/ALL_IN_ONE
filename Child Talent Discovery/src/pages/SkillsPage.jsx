import React, { useState, useEffect } from 'react';
import { SkillCategories } from '../components/sections/SkillCategories';
import { AssessmentPreview } from '../components/sections/AssessmentPreview';

const API_URL = 'http://localhost:5000/api/cms/child-talent';

export const SkillsPage = ({ setActivePage }) => {
  const [cmsData, setCmsData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.skillsCms) {
          setCmsData(data.skillsCms);
        }
      })
      .catch(() => {});
  }, []);

  const heroBadge = cmsData?.pageHeroBadge || "🎨 10 Core Domains";
  const heroTitle = cmsData?.pageHeroTitle || "10 Skill Development Categories";
  const heroSubtitle = cmsData?.pageHeroSubtitle || "From cognitive memory and STEM logic to divergent creativity, leadership, and motor dexterity — explore all 10 mapped domains.";
  const vis = cmsData?.visibility || {};

  const renderTitle = (titleText) => {
    if (!titleText) return null;
    const words = titleText.split(' ');
    if (words.length <= 1) return <span>{titleText}</span>;
    const lastWord = words.pop();
    const firstPart = words.join(' ');
    return (
      <>
        {firstPart} <span className="text-rose-400">{lastWord}</span>
      </>
    );
  };

  return (
    <div>
      {(vis.pageHero !== false) && (
        <div className="py-14 bg-gradient-to-br from-purple-950 via-slate-900 to-rose-950 text-white text-center px-4">
          <div className="max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-extrabold border border-white/20">
              {heroBadge}
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold">
              {renderTitle(heroTitle)}
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {heroSubtitle}
            </p>
          </div>
        </div>
      )}
      <SkillCategories setActivePage={setActivePage} />
      <AssessmentPreview setActivePage={setActivePage} />
    </div>
  );
};
