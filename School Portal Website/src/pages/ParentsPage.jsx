import React from 'react';
import { Users, Lock, CheckCircle2, Mail, Phone, ShieldCheck } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const ParentsPage = () => {
  const { enrollments } = useSchool();

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Read-Only Notice Header */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-400" />
            <h1 className="text-xl sm:text-2xl font-black text-white">Parent Portal Directory</h1>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
              <Lock className="w-3 h-3" /> Read Only View
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Schools can view parent login status & program enrollments. For privacy & quality control, payment modifications & progress edits are managed directly by Child Skill Foundation.
          </p>
        </div>
      </div>

      {/* Parents Directory Table */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-extrabold uppercase text-[10px]">
                <th className="py-4 px-6">Parent Name</th>
                <th className="py-4 px-4">Student Name</th>
                <th className="py-4 px-4">Enrolled Program</th>
                <th className="py-4 px-4">Contact Phone</th>
                <th className="py-4 px-4">Parent Email</th>
                <th className="py-4 px-4">Login Status</th>
                <th className="py-4 px-6 text-right">Payment Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {enrollments.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-6 font-black text-slate-900 dark:text-white">{item.parentName}</td>
                  <td className="py-4 px-4 font-bold text-blue-600 dark:text-blue-400">{item.studentName} ({item.grade})</td>
                  <td className="py-4 px-4 font-extrabold text-slate-800 dark:text-slate-200">{item.programTitle}</td>
                  <td className="py-4 px-4 font-bold text-slate-600 dark:text-slate-400">{item.parentPhone}</td>
                  <td className="py-4 px-4 text-slate-500">{item.parentEmail}</td>
                  <td className="py-4 px-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      ✓ Active Account
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black ${
                      item.paymentStatus === 'Paid' ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' : 'bg-amber-500/15 text-amber-600'
                    }`}>
                      {item.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
