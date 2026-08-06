import React, { useState, useEffect } from 'react';
import { AssessmentPreview } from '../components/sections/AssessmentPreview';

const API_URL = 'http://localhost:5000/api/cms/child-talent';

export const ReportPreviewPage = ({ setActivePage }) => {
  const [cmsData, setCmsData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}`)
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.sampleReportCms) {
          setCmsData(data.sampleReportCms);
        }
      })
      .catch(() => {});
  }, []);

  const heroBadge = cmsData?.pageHeroBadge || "📊 Sample Report Interactive Demo";
  const heroTitle = cmsData?.pageHeroTitle || "Talent Assessment Report Preview";
  const heroSubtitle = cmsData?.pageHeroSubtitle || "Interact with a full sample report dashboard. See how scores, radar charts, strengths, growth areas, and curated roadmaps are delivered to parents.";
  const vis = cmsData?.visibility || {};

  const renderHeroTitle = (titleText) => {
    if (!titleText) return null;
    const words = titleText.split(' ');
    if (words.length <= 1) return <span>{titleText}</span>;
    const lastPart = words.length >= 3 ? words.slice(-2).join(' ') : words.pop();
    const firstPart = words.length >= 3 ? words.slice(0, -2).join(' ') : words.join(' ');
    return (
      <>
        {firstPart} <span className="text-amber-400">{lastPart}</span>
      </>
    );
  };

  return (
    <div>
      {(vis.pageHero !== false) && (
        <div className="py-14 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white text-center px-4">
          <div className="max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-extrabold border border-white/20">
              {heroBadge}
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold">{renderHeroTitle(heroTitle)}</h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              {heroSubtitle}
            </p>
          </div>
        </div>
      )}
      <AssessmentPreview setActivePage={setActivePage} />
    </div>
  );
};
