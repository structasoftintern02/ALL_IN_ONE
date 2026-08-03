import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sidebar } from '../components/layout/Sidebar';
import { mockCrmUser } from '../data/crmData';
import { User, ShieldCheck, Phone } from 'lucide-react';

export const ProfilePage = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const user = mockCrmUser;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <Sidebar activePage="profile" setActivePage={setActivePage} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 dark:border-gray-800 pb-4">
          <h1 className={`text-xl sm:text-2xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
            Account & Meta Business Profile
          </h1>
          <p className="text-xs text-slate-500">Corporate identity & WhatsApp Cloud API connection credentials</p>
        </div>

        <div className={`p-6 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} max-w-2xl space-y-4 text-xs`}>
          <div className="flex items-center gap-3 border-b border-slate-100 dark:border-gray-800 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-slate-950 font-extrabold flex items-center justify-center text-lg">
              AR
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white">{user.name}</h2>
              <span className="text-slate-500">{user.email}</span>
            </div>
          </div>

          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p><strong>Company Workspace:</strong> {user.company}</p>
            <p><strong>WhatsApp Business Number:</strong> <span className="font-mono font-bold text-emerald-500">{user.whatsappNumber}</span></p>
            <p><strong>Meta Verified WABA ID:</strong> <span className="font-mono text-slate-400">109283746501928</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};
