import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sidebar } from '../components/layout/Sidebar';
import { mockCrmUser } from '../data/crmData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/common/StaggerContainer';
import { CreditCard, CheckCircle2, Zap } from 'lucide-react';

export const BillingPage = ({ setActivePage }) => {
  const { activeConfig } = useTheme();
  const user = mockCrmUser;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <Sidebar activePage="billing" setActivePage={setActivePage} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <ScrollReveal direction="down" amount={0.1} className="border-b border-slate-200 dark:border-gray-800 pb-4">
          <h1 className={`text-xl sm:text-2xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
            Subscription & Billing Console
          </h1>
          <p className="text-xs text-slate-500">Manage Meta API quota, invoices, and active CRM plan</p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className={`p-6 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 shadow-sm transition-all h-full`}>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">Current Active Plan</span>
              <h3 className={`text-2xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
                {user.subscription.planName}
              </h3>
              <div className="text-xl font-bold text-emerald-600">{user.subscription.pricePaid}</div>
              <p className="text-xs text-slate-500">Includes {user.subscription.contactsCount.toLocaleString('en-US')} CRM Contacts & GPT-4o AI Workflows</p>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`w-full py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary}`}>
                Upgrade to Enterprise Tier
              </motion.button>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="scale">
            <motion.div whileHover={{ y: -4 }} className={`p-6 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 shadow-sm transition-all h-full`}>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Payment Method</span>
              <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-gray-800/60 rounded-xl border border-slate-200 dark:border-gray-700">
                <CreditCard className="w-6 h-6 text-indigo-500" />
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">Visa ending in •••• 4242</h4>
                  <span className="text-[10px] text-slate-400">Expires 08/2028</span>
                </div>
              </div>
              <p className="text-xs text-slate-500">Auto-renews on {user.subscription.renewsOn}</p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </div>
  );
};
