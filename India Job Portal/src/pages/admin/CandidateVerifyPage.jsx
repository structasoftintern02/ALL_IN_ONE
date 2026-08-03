import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarAdmin } from '../../components/layout/SidebarAdmin';
import { mockAdminData } from '../../data/adminData';
import { ShieldCheck } from 'lucide-react';

export const CandidateVerifyPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarAdmin activePage="admin-verify-candidate" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Candidate Identity & Degree Verification</h1>
          <p className="text-xs text-slate-500">Audit Aadhaar, PAN, and university degree transcripts</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm w-full">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-xs border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 uppercase font-bold text-slate-500">
                  <th className="py-3.5 px-4">Candidate Name</th>
                  <th className="py-3.5 px-4">Verification Type</th>
                  <th className="py-3.5 px-4">Details / Transcript</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockAdminData.pendingCandidateVerifications.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{item.name}</td>
                    <td className="py-3.5 px-4 text-slate-600">{item.type}</td>
                    <td className="py-3.5 px-4 text-slate-500">{item.degree || 'Aadhaar eKYC'}</td>
                    <td className="py-3.5 px-4 text-right">
                      <button onClick={() => alert(`Verified ${item.name}`)} className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white font-extrabold rounded-lg text-xs">
                        Grant Verified Badge
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
