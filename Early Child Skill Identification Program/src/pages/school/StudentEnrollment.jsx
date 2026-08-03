import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarSchool } from '../../components/layout/SidebarSchool';
import { Users, Search } from 'lucide-react';

export const StudentEnrollment = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarSchool activePage="school-students" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Student Roster & Skill Tracking</h1>
          <p className="text-xs text-slate-500">140 Enrolled children taking weekly talent diagnostic modules</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm w-full">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-xs border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 uppercase font-bold text-slate-500">
                  <th className="py-3.5 px-4">Student Name</th>
                  <th className="py-3.5 px-4">Age Group</th>
                  <th className="py-3.5 px-4">Enrolled Track</th>
                  <th className="py-3.5 px-4">Assigned Teacher</th>
                  <th className="py-3.5 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Aarav Verma</td>
                  <td className="py-3.5 px-4 text-slate-600">5.5 Years</td>
                  <td className="py-3.5 px-4 font-semibold text-pink-600">Creative Logic & STEM</td>
                  <td className="py-3.5 px-4 text-slate-700">Ananya Sharma</td>
                  <td className="py-3.5 px-4 text-right font-bold text-emerald-600">Active (92% Score)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
