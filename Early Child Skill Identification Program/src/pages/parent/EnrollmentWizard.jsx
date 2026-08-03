import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarParent } from '../../components/layout/SidebarParent';
import { ageGroupPlansData } from '../../data/programsData';
import { schoolsData } from '../../data/schoolsData';
import { skillTeachersData } from '../../data/teachersData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const EnrollmentWizard = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const [step, setStep] = useState(1);
  const [selectedProgram, setSelectedProgram] = useState(ageGroupPlansData[1].programs[0]);
  const [selectedSchool, setSelectedSchool] = useState(schoolsData[0]);
  const [selectedTeacher, setSelectedTeacher] = useState(skillTeachersData[0]);

  const handleFinish = () => {
    setActivePage('payment-checkout');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarParent activePage="enrollment-wizard" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Program Enrollment Wizard</h1>
          <p className="text-xs text-slate-500">Select child age program, partner school, and certified teacher</p>
        </div>

        <div className="bg-white p-4 sm:p-8 rounded-3xl border border-slate-200 shadow-xl max-w-3xl space-y-6 w-full">
          <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-4">
            <span className="font-extrabold text-pink-600 uppercase">Step {step} of 3</span>
            <div className="flex gap-2">
              <span className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-pink-500' : 'bg-slate-200'}`} />
              <span className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-pink-500' : 'bg-slate-200'}`} />
              <span className={`w-3 h-3 rounded-full ${step >= 3 ? 'bg-pink-500' : 'bg-slate-200'}`} />
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-extrabold text-slate-900 text-sm">1. Choose Program Track</h3>
              <div className="space-y-3">
                {ageGroupPlansData[1].programs.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setSelectedProgram(p)}
                    className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer text-xs flex justify-between items-center ${
                      selectedProgram.id === p.id ? 'border-pink-500 bg-pink-50/50 font-bold' : 'border-slate-200'
                    }`}
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">{p.icon} {p.title}</h4>
                      <span className="text-slate-500 text-[11px]">{p.duration} • {p.category}</span>
                    </div>
                    {selectedProgram.id === p.id && <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-extrabold text-slate-900 text-sm">2. Select Nearby Partner School</h3>
              <div className="space-y-3">
                {schoolsData.map((sch) => (
                  <div
                    key={sch.id}
                    onClick={() => setSelectedSchool(sch)}
                    className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer text-xs flex justify-between items-center ${
                      selectedSchool.id === sch.id ? 'border-pink-500 bg-pink-50/50 font-bold' : 'border-slate-200'
                    }`}
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">{sch.name}</h4>
                      <span className="text-slate-500 text-[11px]">{sch.area}, {sch.city} • ⭐ {sch.rating}</span>
                    </div>
                    {selectedSchool.id === sch.id && <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-extrabold text-slate-900 text-sm">3. Review & Select Certified Teacher</h3>
              <div className="space-y-3">
                {skillTeachersData.map((tch) => (
                  <div
                    key={tch.id}
                    onClick={() => setSelectedTeacher(tch)}
                    className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer text-xs flex justify-between items-center ${
                      selectedTeacher.id === tch.id ? 'border-pink-500 bg-pink-50/50 font-bold' : 'border-slate-200'
                    }`}
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">{tch.name}</h4>
                      <span className="text-slate-500 text-[11px]">{tch.role} • {tch.hourlyRate}</span>
                    </div>
                    {selectedTeacher.id === tch.id && <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between items-center gap-2 pt-4 border-t border-slate-100">
            {step > 1 ? (
              <button onClick={() => setStep(step - 1)} className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700">
                Back
              </button>
            ) : <div />}

            {step < 3 ? (
              <button onClick={() => setStep(step + 1)} className={`px-6 py-2.5 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary}`}>
                Continue →
              </button>
            ) : (
              <button onClick={handleFinish} className={`px-6 sm:px-8 py-3 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary}`}>
                Proceed to Checkout →
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
