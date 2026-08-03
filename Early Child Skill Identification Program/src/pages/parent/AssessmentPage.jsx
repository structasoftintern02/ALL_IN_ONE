import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarParent } from '../../components/layout/SidebarParent';
import { AssessmentQuiz } from '../../components/common/AssessmentQuiz';

export const AssessmentPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const handleQuizComplete = (answers) => {
    setActivePage('skill-report');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarParent activePage="assessment-quiz" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Interactive Child Skill Assessment</h1>
          <p className="text-xs text-slate-500">Observational diagnostic questions evaluating cognitive, motor, and EQ skills</p>
        </div>

        <AssessmentQuiz onComplete={handleQuizComplete} />
      </div>
    </div>
  );
};
