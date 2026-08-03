import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarAdmin } from '../../components/layout/SidebarAdmin';
import { mockAdminData } from '../../data/adminData';
import { Building2 } from 'lucide-react';

export const CompanyVerifyPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarAdmin activePage="admin-verify-company" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Employer GST Verification Queue</h1>
          <p className="text-xs text-slate-500">Audit company GSTIN registration certificates before granting verified employer badge</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm w-full">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-xs border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 uppercase font-bold text-slate-500">
                  <th className="py-3.5 px-4">Company Name</th>
                  <th className="py-3.5 px-4">GSTIN Number</th>
                  <th className="py-3.5 px-4">CIN Number</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockAdminData.pendingCompanyVerifications.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{item.name}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-700">{item.gstin}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-500">{item.cin}</td>
                    <td className="py-3.5 px-4 text-right">
                      <button onClick={() => alert(`Approved GST for ${item.name}`)} className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white font-extrabold rounded-lg text-xs">
                        Approve GST Badge
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
