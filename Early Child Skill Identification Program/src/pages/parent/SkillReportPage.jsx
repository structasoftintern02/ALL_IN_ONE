import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarParent } from '../../components/layout/SidebarParent';
import { mockParentUser } from '../../data/parentData';
import { Award, Download, CheckCircle2, Sparkles, Printer } from 'lucide-react';

export const SkillReportPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const child = mockParentUser.child;

  const handleDownload = () => {
    alert(`Downloading ${child.name}_Skill_Diagnostic_Report_2026.pdf...`);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarParent activePage="skill-report" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Child Skill Assessment Report</h1>
            <p className="text-xs text-slate-500">Certified Diagnostic Report for {child.name} ({child.age})</p>
          </div>

          <button
            onClick={handleDownload}
            className={`w-full sm:w-auto px-4 py-2.5 ${activeConfig.cardRadius} text-xs font-extrabold flex items-center justify-center gap-2 ${activeConfig.buttonPrimary}`}
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF Report</span>
          </button>
        </div>

        {/* Report Card Certificate Container */}
        <div className="bg-white p-4 sm:p-8 rounded-3xl border-2 border-pink-200 shadow-xl space-y-6 sm:space-y-8 max-w-4xl mx-auto w-full">
          
          {/* Certificate Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-pink-500 to-amber-400 text-white flex items-center justify-center text-2xl sm:text-3xl font-extrabold shadow-md flex-shrink-0">
                🏆
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">{child.name}</h2>
                <span className="text-xs font-bold text-pink-600">Age Milestone: {child.ageGroup}</span>
              </div>
            </div>

            <div className="p-3 bg-pink-50 rounded-2xl border border-pink-200 text-xs text-center w-full sm:w-auto">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Overall Diagnostic Index</span>
              <span className="text-xl sm:text-2xl font-extrabold text-pink-600">{child.overallProgressScore}% (Gifted Aptitude)</span>
            </div>
          </div>

          {/* Skill Score Gauges Grid */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-slate-900 text-sm">Skill Domain Breakdown Gauges</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex justify-between font-bold">
                  <span className="text-slate-900">🧠 Cognitive & Logical Aptitude</span>
                  <span className="text-purple-600 font-extrabold">{child.skillScores.cognitiveLogic}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: `${child.skillScores.cognitiveLogic}%` }} />
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex justify-between font-bold">
                  <span className="text-slate-900">🎨 Creative & Visual Expression</span>
                  <span className="text-pink-600 font-extrabold">{child.skillScores.creativeArtistic}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-500 rounded-full" style={{ width: `${child.skillScores.creativeArtistic}%` }} />
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex justify-between font-bold">
                  <span className="text-slate-900">🏃‍♂️ Fine Motor & Hand-Eye Control</span>
                  <span className="text-amber-600 font-extrabold">{child.skillScores.fineMotor}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${child.skillScores.fineMotor}%` }} />
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex justify-between font-bold">
                  <span className="text-slate-900">❤️ Emotional Intelligence (EQ)</span>
                  <span className="text-emerald-600 font-extrabold">{child.skillScores.emotionalEQ}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${child.skillScores.emotionalEQ}%` }} />
                </div>
              </div>

            </div>
          </div>

          {/* Strengths & Actionable Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-4 sm:p-5 bg-emerald-50/50 rounded-2xl border border-emerald-200 space-y-3">
              <h4 className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Identified Core Strengths</span>
              </h4>
              <ul className="space-y-2 text-emerald-900 font-medium">
                {child.strengths.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 sm:p-5 bg-pink-50/50 rounded-2xl border border-pink-200 space-y-3">
              <h4 className="font-extrabold text-pink-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span>Nurturing Recommendations</span>
              </h4>
              <ul className="space-y-2 text-pink-900 font-medium">
                {child.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
