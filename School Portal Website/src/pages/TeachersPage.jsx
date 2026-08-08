import React from 'react';
import { UserCheck, Lock, MapPin, Calendar, Clock, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const TeachersPage = () => {
  const { assignedTeachers } = useSchool();

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <UserCheck className="w-6 h-6 text-purple-400" />
            <h1 className="text-xl sm:text-2xl font-black text-white">Assigned CSF Instructors</h1>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
              <Lock className="w-3 h-3" /> Read Only Module
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Teachers belong to Child Skill Foundation. Schools view assigned faculty, arrival status, and schedules. Teacher profiles are centrally managed by CSF.
          </p>
        </div>
      </div>

      {/* Teachers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assignedTeachers.map((t) => (
          <div 
            key={t.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img src={t.photo} alt={t.name} className="w-16 h-16 rounded-2xl object-cover ring-2 ring-purple-500/30" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-black text-slate-900 dark:text-white">{t.name}</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400">
                        {t.experience} Exp
                      </span>
                    </div>
                    <p className="text-xs text-purple-600 dark:text-purple-400 font-bold mt-0.5">{t.certification}</p>
                  </div>
                </div>
              </div>

              {/* Status Pill */}
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-bold">Campus Arrival Status:</span>
                <span className={`font-extrabold ${t.arrivalStatus.includes('On Site') ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'}`}>
                  {t.arrivalStatus}
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-bold">Assigned Program:</span>
                  <span className="font-extrabold text-slate-900 dark:text-white">{t.assignedProgram}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-bold">Allocated Classroom:</span>
                  <span className="font-extrabold text-slate-900 dark:text-white">{t.classroom}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-bold">Weekly Schedule:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{t.schedule}</span>
                </div>
              </div>
            </div>

            {/* Footer Quick Contact */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-400">
              <span>📞 {t.phone}</span>
              <span>✉️ {t.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
