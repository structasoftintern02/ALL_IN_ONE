import React from 'react';
import { useTheme, VARIATIONS } from '../context/ThemeContext';
import { ChatBubblePreview } from '../components/ui/ChatBubblePreview';
import { faqsData } from '../data/faqsData';
import { 
  MessageSquare, Zap, Bot, Users, Send, ShieldCheck, ArrowRight, CheckCircle2, 
  Sparkles, Star, Globe, TrendingUp, ChevronDown 
} from 'lucide-react';

export const LandingPage = ({ setActivePage }) => {
  const { variation, activeConfig } = useTheme();

  return (
    <div className="space-y-24 pb-16">
      
      {/* SECTION 1: HERO */}
      <section className={`relative pt-12 pb-24 border-b overflow-hidden ${
        variation === VARIATIONS.DARK
          ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-gray-800 text-white'
          : variation === VARIATIONS.WHATSAPP
          ? 'bg-gradient-to-b from-emerald-900 via-teal-900 to-slate-900 border-emerald-900 text-white'
          : 'bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 border-slate-800 text-white'
      }`}>
        
        {/* Background Glow Overlay */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>Meta Official WhatsApp Cloud API Partner</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Turn WhatsApp into Your <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">#1 AI Sales & CRM Engine</span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Automate support with GPT-4o chatbots, broadcast campaigns to 100,000+ contacts with 99.4% deliverability, and empower your team with a shared multi-agent inbox.
              </p>

              {/* Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Meta Verified API</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <span>GPT-4o Auto-Replies</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Multi-Agent Inbox</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setActivePage('register')}
                  className={`px-8 py-4 ${activeConfig.cardRadius} text-base font-bold flex items-center gap-3 transition-all ${activeConfig.buttonPrimary}`}
                >
                  <span>Start 14-Day Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setActivePage('pricing')}
                  className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all"
                >
                  View Country Pricing
                </button>
              </div>

              <p className="text-xs text-slate-400 font-medium">
                ⚡ No credit card required • Instant 2-minute setup
              </p>
            </div>

            {/* Right Widget: Interactive WhatsApp AI Simulator */}
            <div className="lg:col-span-5">
              <ChatBubblePreview />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
            Built for Modern High-Growth SaaS & E-Commerce
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
            Everything You Need to Scale on WhatsApp
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base">
            Eliminate missed leads, automate customer support, and run bulk broadcast campaigns effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className={`p-8 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4`}>
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold text-xl">
              🤖
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">GPT-4o AI Chatbot Builder</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Upload your website URL or PDF catalog. The AI agent auto-replies to customer queries 24/7 in 50+ languages with human accuracy.
            </p>
          </div>

          <div className={`p-8 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4`}>
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center font-bold text-xl">
              📥
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Shared Multi-Agent Inbox</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Enable your entire sales & support team to respond from a single WhatsApp number with internal notes, tagging, and ticket routing.
            </p>
          </div>

          <div className={`p-8 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4`}>
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 flex items-center justify-center font-bold text-xl">
              🚀
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Bulk Broadcast Campaigns</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Send personalized broadcast messages to 100,000+ opted-in contacts with interactive quick reply buttons and real-time read analytics.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: COUNTRY SELECTION & PRICING PREVIEW CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-10 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.gradientBg} text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden`}>
          <div className="space-y-3 max-w-xl">
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
              Multi-Currency Global Billing
            </span>
            <h3 className="text-3xl font-extrabold">Localized Country Pricing Available</h3>
            <p className="text-slate-200 text-sm">
              We offer regionalized pricing in USD ($), INR (₹), GBP (£), EUR (€), AED, and SGD with local tax compliance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActivePage('country')}
              className="px-6 py-3.5 bg-white text-slate-950 font-extrabold text-sm rounded-xl hover:bg-slate-100 transition-all flex items-center gap-2 shadow-lg"
            >
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>Select Your Country</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className={`text-3xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500">Everything you need to know about Meta Cloud API & AI bots.</p>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq, idx) => (
            <div key={idx} className={`p-5 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-2`}>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-start gap-2">
                <span className="text-emerald-500 font-extrabold">Q.</span>
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
