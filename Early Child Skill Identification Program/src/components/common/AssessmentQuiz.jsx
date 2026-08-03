import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { assessmentQuizQuestions } from '../../data/parentData';
import { Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Award, RefreshCw } from 'lucide-react';

export const AssessmentQuiz = ({ onComplete }) => {
  const { activeConfig } = useTheme();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const currentQ = assessmentQuizQuestions[currentIdx];
  const progressPercent = Math.round(((currentIdx + 1) / assessmentQuizQuestions.length) * 100);

  const handleSelectOption = (qId, option) => {
    setAnswers({ ...answers, [qId]: option });
  };

  const handleNext = () => {
    if (currentIdx < assessmentQuizQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setCompleted(true);
      if (onComplete) onComplete(answers);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 w-full">
      
      {!completed ? (
        <div className={`p-4 sm:p-8 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} shadow-xl space-y-6 w-full`}>
          
          {/* Progress Header */}
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px] sm:text-xs">
                Question {currentIdx + 1} of {assessmentQuizQuestions.length} • {currentQ.skillArea}
              </span>
              <span className="font-extrabold text-pink-600 text-xs sm:text-xs">{progressPercent}% Completed</span>
            </div>

            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-500 to-amber-400 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-xl font-extrabold text-slate-900 leading-snug">
              {currentQ.question}
            </h3>

            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = answers[currentQ.id]?.text === opt.text;
                return (
                  <div
                    key={idx}
                    onClick={() => handleSelectOption(currentQ.id, opt)}
                    className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 text-xs ${
                      isSelected
                        ? 'border-pink-500 bg-pink-50/50 shadow-md font-bold text-slate-900'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100/70 text-slate-700'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] mt-0.5 flex-shrink-0 ${
                      isSelected ? 'bg-pink-500 text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {isSelected ? '✓' : idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="break-words">{opt.text}</p>
                      <span className="text-[10px] text-pink-600 font-bold mt-1 block">
                        Diagnostic Indicator: {opt.trait}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className={`px-3 sm:px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                currentIdx === 0 ? 'opacity-30 cursor-not-allowed text-slate-400' : 'text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!answers[currentQ.id]}
              className={`px-4 sm:px-6 py-2.5 ${activeConfig.cardRadius} text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                !answers[currentQ.id]
                  ? 'opacity-40 bg-slate-300 text-slate-600 cursor-not-allowed'
                  : activeConfig.buttonPrimary
              }`}
            >
              <span>{currentIdx === assessmentQuizQuestions.length - 1 ? 'Finish & Generate' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      ) : (
        <div className={`p-6 sm:p-8 bg-white ${activeConfig.cardRadius} text-center space-y-6 shadow-2xl border border-pink-200 w-full`}>
          <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mx-auto text-3xl font-extrabold animate-bounce">
            🏆
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-600">Assessment Complete</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Talent Report Ready for Aarav!</h3>
            <p className="text-xs text-slate-500">Overall Skill Score: <strong className="text-pink-600 font-extrabold text-sm">92% (High Gifted Aptitude)</strong></p>
          </div>

          <button
            onClick={() => onComplete && onComplete(answers)}
            className={`w-full py-3.5 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary}`}
          >
            View Detailed Skill Report & PDF Download →
          </button>
        </div>
      )}

    </div>
  );
};
