import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { MessageSquare, ShieldCheck, Mail, ArrowRight, Globe } from 'lucide-react';

export const Footer = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter Card */}
        <div className={`mb-16 p-8 bg-gradient-to-r ${activeConfig.gradientBg} ${activeConfig.cardRadius} text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10`}>
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white/10 rounded-full text-white/90 inline-block mb-3 border border-white/20">
              Meta Official Cloud API Solution
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Scale Your Sales on WhatsApp Today!
            </h3>
            <p className="text-sm text-slate-200 mt-2">
              Automate customer support with GPT-4o AI bots and reach 100,000+ contacts with 99.4% deliverability.
            </p>
          </div>

          <button
            onClick={() => navigateTo('register')}
            className={`px-8 py-4 bg-white text-slate-950 font-extrabold text-sm ${activeConfig.cardRadius} shadow-xl hover:bg-slate-100 transition-all flex items-center gap-2`}
          >
            <span>Start 14-Day Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('landing')}>
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                WHATSAPP<span className="text-emerald-400">AI</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Enterprise-grade WhatsApp CRM & GPT-4o AI Chatbot platform for e-commerce, real estate, education, and SaaS businesses globally.
            </p>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Meta Official Partner</span>
              <span className="flex items-center gap-1"><Globe className="w-4 h-4 text-cyan-400" /> 120+ Countries</span>
            </div>
          </div>

          {/* Core Platform */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Platform Features
            </h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigateTo('landing')} className="hover:text-white transition-colors">GPT-4o AI Bot Builder</button></li>
              <li><button onClick={() => navigateTo('landing')} className="hover:text-white transition-colors">Multi-Agent Team Inbox</button></li>
              <li><button onClick={() => navigateTo('landing')} className="hover:text-white transition-colors">Broadcast Campaigns</button></li>
              <li><button onClick={() => navigateTo('landing')} className="hover:text-white transition-colors">Shopify & WooCommerce Sync</button></li>
              <li><button onClick={() => navigateTo('landing')} className="hover:text-white transition-colors">Official Green Tick Help</button></li>
            </ul>
          </div>

          {/* Pricing & Billing */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Pricing & Plans
            </h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigateTo('pricing')} className="hover:text-white transition-colors">Country Pricing</button></li>
              <li><button onClick={() => navigateTo('comparison')} className="hover:text-white transition-colors">Compare All Plans</button></li>
              <li><button onClick={() => navigateTo('country')} className="hover:text-white transition-colors">Country Selection 🌐</button></li>
              <li><button onClick={() => navigateTo('purchase')} className="hover:text-white transition-colors">Checkout & Purchase</button></li>
              <li><button onClick={() => navigateTo('billing')} className="hover:text-white transition-colors">Billing & Invoices</button></li>
            </ul>
          </div>

          {/* Account & Auth */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Customer Portal
            </h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigateTo('login')} className="hover:text-white transition-colors">Customer Login</button></li>
              <li><button onClick={() => navigateTo('register')} className="hover:text-white transition-colors">Register Account</button></li>
              <li><button onClick={() => navigateTo('forgot')} className="hover:text-white transition-colors">Forgot Password</button></li>
              <li><button onClick={() => navigateTo('dashboard')} className="hover:text-white transition-colors">CRM Dashboard</button></li>
              <li><button onClick={() => navigateTo('profile')} className="hover:text-white transition-colors">Account Profile</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 WhatsApp AI CRM Tech Inc. All rights reserved. Meta Official Cloud API Integration.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => navigateTo('landing')} className="hover:text-slate-300">Privacy Policy</button>
            <button onClick={() => navigateTo('landing')} className="hover:text-slate-300">Terms of Service</button>
            <button onClick={() => navigateTo('landing')} className="hover:text-slate-300">API Documentation</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
