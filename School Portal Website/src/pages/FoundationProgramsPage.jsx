import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpenCheck, Calendar, Clock, Users, IndianRupee, 
  CheckCircle2, ArrowRight, ShieldCheck, DoorClosed, AlertCircle, X, Sparkles 
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const FoundationProgramsPage = () => {
  const { csfPrograms, classrooms, acceptProgram } = useSchool();
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [acceptingProgram, setAcceptingProgram] = useState(null);

  // Multi-step acceptance state
  const [step, setStep] = useState(1);
  const [selectedRoomId, setSelectedRoomId] = useState('');

  const handleStartAcceptance = (program) => {
    setAcceptingProgram(program);
    setStep(1);
    setSelectedRoomId(classrooms[0]?.id || '');
  };

  const handleConfirmAcceptance = () => {
    if (!acceptingProgram || !selectedRoomId) return;
    acceptProgram(acceptingProgram.id, selectedRoomId);
    setStep(5); // Success step
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white border border-purple-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-xs font-black border border-purple-400/30 text-purple-300">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Centrally Managed CSF Curricula</span>
          </div>
          <h1 className="text-xl sm:text-3xl font-black">Child Skill Foundation Programs</h1>
          <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
            Programs are published exclusively by Child Skill Foundation. Partner schools allocate physical classroom space and earn <span className="text-amber-400 font-extrabold">15% Student Fee Commission</span> plus <span className="text-emerald-400 font-extrabold">Weekly Classroom Rental</span>.
          </p>
        </div>
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {csfPrograms.map((p) => {
          const isFullyBooked = p.enrolledCount >= p.totalSeats;
          const schoolCommissionAmt = (p.fee * p.schoolCommissionPercent) / 100;

          return (
            <div 
              key={p.id}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Banner Header */}
                <div className="relative h-48 overflow-hidden">
                  <img src={p.banner} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-slate-950/80 text-white text-[10px] font-black backdrop-blur-sm">
                    {p.ageGroup}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-black backdrop-blur-md shadow-md ${
                      isFullyBooked ? 'bg-rose-500 text-white' : 'bg-emerald-500 text-white'
                    }`}>
                      {p.status}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white leading-snug">{p.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{p.description}</p>
                  </div>

                  {/* Program Metadata Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-slate-400 font-bold block text-[10px]">Max Sessions</span>
                      <span className="font-extrabold text-slate-800 dark:text-slate-200">{p.maxSessions} Weekly Sessions</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold block text-[10px]">Schedule</span>
                      <span className="font-extrabold text-slate-800 dark:text-slate-200">{p.schedule}</span>
                    </div>
                  </div>

                  {/* Earnings Box for School */}
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-bold text-[11px]">School 15% Comm:</span>
                      <span className="font-black text-emerald-600 dark:text-emerald-400">₹{schoolCommissionAmt}/student</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-bold text-[11px]">Classroom Rental:</span>
                      <span className="font-black text-amber-500">₹{p.weeklyRentalPrice.toLocaleString()}/wk</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                <button
                  onClick={() => setSelectedProgram(p)}
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white font-extrabold text-xs hover:bg-slate-300 transition-colors"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleStartAcceptance(p)}
                  className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md transition-colors"
                >
                  Apply & Reserve Space
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <img src={selectedProgram.banner} alt={selectedProgram.title} className="w-20 h-20 rounded-2xl object-cover" />
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-black">
                    {selectedProgram.ageGroup}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">{selectedProgram.title}</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedProgram.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">Key Learning Outcomes</h4>
                <div className="space-y-2">
                  {selectedProgram.learningOutcomes?.map((outcome, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedProgram(null);
                  handleStartAcceptance(selectedProgram);
                }}
                className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-xl"
              >
                Start Multi-Step Classroom Acceptance Workflow
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Multi-step Program Acceptance Workflow Modal */}
      <AnimatePresence>
        {acceptingProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6 relative"
            >
              <button
                onClick={() => setAcceptingProgram(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Progress Indicator */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-black text-slate-400">
                  <span>STEP {step} OF 5</span>
                  <span>{step === 1 ? 'Select Classroom' : step === 2 ? 'Validate Availability' : step === 3 ? 'Review Schedule' : step === 4 ? 'Accept Terms' : 'Confirmed'}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${(step / 5) * 100}%` }} />
                </div>
              </div>

              {/* Step 1: Select Classroom */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-base font-black text-slate-900 dark:text-white">Step 1: Select Physical Classroom Space</h3>
                  <div className="space-y-3">
                    {classrooms.map(c => (
                      <label key={c.id} className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                        selectedRoomId === c.id ? 'border-blue-600 bg-blue-500/10' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40'
                      }`}>
                        <div className="flex items-center gap-3">
                          <input 
                            type="radio" 
                            name="classroom" 
                            checked={selectedRoomId === c.id} 
                            onChange={() => setSelectedRoomId(c.id)}
                            className="w-4 h-4 text-blue-600"
                          />
                          <div>
                            <div className="text-xs font-black text-slate-900 dark:text-white">{c.name} ({c.roomNumber})</div>
                            <div className="text-[11px] text-slate-400">Cap: {c.capacity} • Rent: ₹{c.rentalPrice}/wk</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600">{c.status}</span>
                      </label>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="w-full py-3 rounded-xl bg-blue-600 text-white font-extrabold text-xs shadow-md"
                  >
                    Next: Validate Infrastructure →
                  </button>
                </div>
              )}

              {/* Step 2: Validate Availability */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-base font-black text-slate-900 dark:text-white">Step 2: Validate Infrastructure & Capacity</h3>
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-black text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" /> Capacity Check Passed
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300">
                      Selected classroom meets Child Skill Foundation minimum required capacity of {acceptingProgram.requiredCapacity} seats.
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={() => setStep(1)} className="w-1/2 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-extrabold text-xs">Back</button>
                    <button onClick={() => setStep(3)} className="w-1/2 py-3 rounded-xl bg-blue-600 text-white font-extrabold text-xs">Next: Review Payouts →</button>
                  </div>
                </div>
              )}

              {/* Step 3: Review Weekly Schedule & Rental */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-base font-black text-slate-900 dark:text-white">Step 3: Review Weekly Schedule & Earnings</h3>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                    <div className="flex justify-between"><span className="text-slate-400 font-bold">Schedule:</span><span className="font-extrabold text-slate-800 dark:text-white">{acceptingProgram.schedule}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400 font-bold">Weekly Classroom Rental:</span><span className="font-black text-amber-500">₹{acceptingProgram.weeklyRentalPrice}/wk</span></div>
                    <div className="flex justify-between"><span className="text-slate-400 font-bold">Student Commission:</span><span className="font-black text-emerald-500">15% on all enrollments</span></div>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={() => setStep(2)} className="w-1/2 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-extrabold text-xs">Back</button>
                    <button onClick={() => setStep(4)} className="w-1/2 py-3 rounded-xl bg-blue-600 text-white font-extrabold text-xs">Next: Terms & Conditions →</button>
                  </div>
                </div>
              )}

              {/* Step 4: Accept Terms */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="text-base font-black text-slate-900 dark:text-white">Step 4: Accept CSF Partner Terms</h3>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2 text-slate-600 dark:text-slate-300 max-h-40 overflow-y-auto">
                    <p>1. The school agrees to provide clean, air-conditioned classroom space as per selected schedule.</p>
                    <p>2. Foundation teachers will manage all learning delivery, attendance, and student evaluations.</p>
                    <p>3. Weekly classroom rental will be disbursed bi-weekly directly to registered school bank account.</p>
                  </div>

                  <button
                    onClick={handleConfirmAcceptance}
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-xl"
                  >
                    Confirm & Reserve Classroom
                  </button>
                </div>
              )}

              {/* Step 5: Success Screen */}
              {step === 5 && (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-3xl font-black mx-auto">
                    ✓
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">Classroom Reserved Successfully!</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                    Child Skill Foundation has been notified. Weekly booking has been updated in your classroom calendar.
                  </p>

                  <button
                    onClick={() => setAcceptingProgram(null)}
                    className="px-6 py-3 rounded-xl bg-blue-600 text-white font-extrabold text-xs"
                  >
                    Done & Return to Programs
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
