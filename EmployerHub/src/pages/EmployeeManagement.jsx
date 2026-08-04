import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sidebar } from '../components/layout/Sidebar';
import { mockEmployees } from '../data/employerData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Users, Building2, MapPin, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';

export const EmployeeManagement = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <Sidebar activePage="employees" setActivePage={setActivePage} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <ScrollReveal direction="down" amount={0.1} className="border-b border-slate-800 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-white">
            Employee HRMS Directory & Attendance
          </h1>
          <p className="text-xs text-slate-400">Corporate workforce directory, department structures, and joining logs</p>
        </ScrollReveal>

        {/* Mobile View: Employee Cards (Visible on screens smaller than md) */}
        <div className="block md:hidden space-y-4">
          {mockEmployees.map((emp) => (
            <div key={emp.id} className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3 shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-extrabold text-sm text-white">{emp.name}</h3>
                  <span className="text-[10px] text-slate-400 font-mono font-bold">{emp.id}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-extrabold text-[10px]">
                  {emp.status}
                </span>
              </div>

              <div className="space-y-1 text-xs text-slate-300">
                <p><strong className="text-slate-400">Role:</strong> {emp.role}</p>
                <p><strong className="text-slate-400">Department:</strong> <span className="text-blue-400 font-extrabold">{emp.department}</span></p>
                <p><strong className="text-slate-400">Location:</strong> 📍 {emp.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop & Tablet View: Smooth Responsive Scrollable Table */}
        <div className="hidden md:block overflow-x-auto w-full rounded-3xl border border-slate-800 bg-slate-900/90 shadow-xl scrollbar-thin">
          <table className="w-full min-w-[700px] text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-950 text-slate-400 border-b border-slate-800 uppercase tracking-wider text-[11px]">
                <th className="p-4 font-extrabold">EMP ID</th>
                <th className="p-4 font-extrabold">Employee Name</th>
                <th className="p-4 font-extrabold">Designation Role</th>
                <th className="p-4 font-extrabold">Department</th>
                <th className="p-4 font-extrabold">Location</th>
                <th className="p-4 font-extrabold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {mockEmployees.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-mono font-bold text-slate-400">{emp.id}</td>
                  <td className="p-4 font-extrabold text-white">{emp.name}</td>
                  <td className="p-4 text-slate-300 font-medium">{emp.role}</td>
                  <td className="p-4 text-blue-400 font-extrabold">{emp.department}</td>
                  <td className="p-4 text-slate-300">{emp.location}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-extrabold text-[10px]">
                      {emp.status}
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
