import React, { useState } from 'react';
import { useTheme, VARIATIONS } from '../context/ThemeContext';
import { Sidebar } from '../components/layout/Sidebar';
import { mockCrmUser } from '../data/crmData';
import { 
  MessageSquare, Send, Bot, Users, TrendingUp, CheckCircle2, Bell, 
  Sparkles, Zap, ShieldCheck, Plus, ArrowUpRight, Clock, AlertCircle 
} from 'lucide-react';

export const CustomerDashboard = ({ setActivePage }) => {
  const { variation, activeConfig } = useTheme();

  const user = mockCrmUser;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      
      {/* Responsive Collapsible Sidebar */}
      <Sidebar activePage="dashboard" setActivePage={setActivePage} />

      {/* Main Dashboard Canvas */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        
        {/* Top Header / Welcome Banner with Linear Gradient Animation */}
        <div className={`p-5 sm:p-8 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.gradientBg} text-white space-y-4 shadow-xl relative overflow-hidden animate-gradient-bg`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-0.5 rounded-full bg-white/10 text-xs font-bold border border-white/20 backdrop-blur-md">
                  Meta Official API Workspace
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-extrabold text-[11px] animate-pulse">
                  {user.subscription.status}
                </span>
              </div>
              <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-2">
                Welcome, {user.name}! <span className="animate-float-particle">✨</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-200">
                Connected Number: <strong className="text-white font-mono">{user.whatsappNumber}</strong> ({user.company})
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActivePage('billing')}
                className="w-full sm:w-auto px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-xl transition-all btn-magnetic shadow-md"
              >
                Upgrade Plan
              </button>

              <button
                onClick={() => setActivePage('profile')}
                className="w-full sm:w-auto px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs rounded-xl backdrop-blur-xs btn-magnetic"
              >
                Manage Profile
              </button>
            </div>
          </div>
        </div>

        {/* Top 4 WhatsApp & AI CRM Stat Cards with Glassmorphism & AI Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className={`p-5 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-2 glassmorphism-card`}>
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[11px] font-bold uppercase tracking-wider">Total Sent Messages</span>
              <Send className="w-4 h-4 text-emerald-500" />
            </div>
            <div className={`text-2xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
              {user.stats.totalSent.toLocaleString('en-US')}
            </div>
            <span className="text-[11px] text-emerald-500 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> Delivery Rate: {user.stats.deliveryRate}
            </span>
          </div>

          <div className={`p-5 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-2 glassmorphism-card ai-glow-border relative overflow-hidden`}>
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">GPT-4o Auto-Replies</span>
              <Bot className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>
            <div className={`text-2xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
              {user.stats.aiAutoReplied.toLocaleString('en-US')}
            </div>
            <span className="text-[11px] text-cyan-400 font-semibold">
              Avg Response: {user.stats.avgResponseTimeSec}s
            </span>
          </div>

          <div className={`p-5 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-2 glassmorphism-card`}>
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[11px] font-bold uppercase tracking-wider">Total CRM Contacts</span>
              <Users className="w-4 h-4 text-indigo-400" />
            </div>
            <div className={`text-2xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
              {user.subscription.contactsCount.toLocaleString('en-US')}
            </div>
            <span className="text-[11px] text-slate-500">8 Active Agents Online</span>
          </div>

          <div className={`p-5 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-2 glassmorphism-card`}>
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[11px] font-bold uppercase tracking-wider">AI Quota Gauge</span>
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            </div>
            <div className={`text-2xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
              56% <span className="text-xs font-normal text-slate-400">({user.subscription.aiQuotaUsed} / {user.subscription.aiQuotaLimit})</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 w-7/12 rounded-full" />
            </div>
          </div>

        </div>

        {/* Quick Actions Shortcuts */}
        <div className={`p-4 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} flex flex-wrap items-center justify-between gap-3 glassmorphism-card`}>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2">
            Quick Action Controls
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <button className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm btn-magnetic">
              <Send className="w-3.5 h-3.5" />
              <span>New Broadcast Campaign</span>
            </button>
            <button className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm btn-magnetic">
              <Bot className="w-3.5 h-3.5" />
              <span>Build AI Flow</span>
            </button>
            <button className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1.5 btn-magnetic">
              <Users className="w-3.5 h-3.5" />
              <span>Import Contacts CSV</span>
            </button>
          </div>
        </div>

        {/* Activity Feed + Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Recent Activity Stream */}
          <div className={`lg:col-span-7 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-5 sm:p-6 space-y-4 glassmorphism-card`}>
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-gray-800 pb-3">
              <h3 className={`font-bold text-sm ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
                Live WhatsApp Activity Logs
              </h3>
              <span className="text-xs text-emerald-500 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Real-time Stream
              </span>
            </div>

            <div className="space-y-3">
              {user.recentActivities.map((act) => (
                <div key={act.id} className="p-3.5 bg-slate-50 dark:bg-gray-800/60 rounded-xl border border-slate-200 dark:border-gray-700/60 flex items-center justify-between text-xs transition-all hover:border-emerald-500/40">
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-slate-900 dark:text-white">{act.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">{act.detail}</p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-bold text-[10px]">
                      {act.status}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-1">{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications Drawer & Plan Info */}
          <div className={`lg:col-span-5 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-5 sm:p-6 space-y-4 glassmorphism-card`}>
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-gray-800 pb-3">
              <h3 className={`font-bold text-sm ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
                Workspace Notifications
              </h3>
              <Bell className="w-4 h-4 text-slate-400" />
            </div>

            <div className="space-y-2.5">
              {user.notifications.map((n) => (
                <div key={n.id} className="p-3 bg-slate-50 dark:bg-gray-800/60 rounded-xl border border-slate-200 dark:border-gray-700 text-xs flex items-start gap-2.5 animate-notification-slide">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-800 dark:text-slate-200 font-medium">{n.text}</p>
                    <span className="text-[10px] text-slate-400">{n.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-xs space-y-2 pt-3 ai-glow-border">
              <span className="font-bold text-emerald-800 dark:text-emerald-400 block uppercase tracking-wider text-[10px]">Active Plan</span>
              <div className="flex justify-between items-center">
                <span className="font-extrabold text-slate-900 dark:text-white text-sm">{user.subscription.planName}</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">{user.subscription.pricePaid}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                Renews automatically on {user.subscription.renewsOn}
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
