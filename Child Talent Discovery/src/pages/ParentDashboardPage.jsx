import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  User, Award, FileText, Calendar, CheckCircle2, Star, Download, 
  Sparkles, ArrowRight, Brain, Zap, Activity, BookOpen, LogOut, ShieldCheck 
} from 'lucide-react';

export const ParentDashboardPage = ({ setActivePage, userInfo, setIsLoggedIn }) => {
  const { activeConfig } = useTheme();

  const handleLogout = () => {
    if (setIsLoggedIn) setIsLoggedIn(false);
    setActivePage('home');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className={`p-6 sm:p-8 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.primaryGradient} text-white shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden`}>
        <div className="space-y-2 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-bold text-white/90">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Parent Talent Portal Active</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Welcome back, {userInfo?.name || 'Parent'}!
          </h1>
          <p className="text-xs sm:text-sm text-slate-100">
            Viewing diagnostic milestones & talent growth report for <strong className="text-amber-300">{userInfo?.childName || 'Aarav Sharma'}</strong> ({userInfo?.childAge || 'Age 6'}).
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <button
            onClick={() => setActivePage('how-it-works')}
            className={`px-4 py-2.5 bg-white text-slate-950 font-extrabold text-xs ${activeConfig.cardRadius} shadow-lg hover:bg-slate-100 transition-all flex items-center gap-2`}
          >
            <span>Start New Diagnostic Quiz</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleLogout}
            className="px-3.5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs rounded-xl border border-white/20 transition-all flex items-center gap-1.5"
            title="Log Out"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      {/* Grid Overview: Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <div className={`p-5 bg-white dark:bg-slate-900 ${activeConfig.cardRadius} border border-slate-100 dark:border-slate-800 shadow-sm space-y-2`}>
          <div className="flex items-center justify-between text-purple-600 dark:text-purple-400">
            <Brain className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-purple-50 dark:bg-purple-950/60 rounded-full">Top Talent Domain</span>
          </div>
          <div className="text-xl font-extrabold text-slate-900 dark:text-white">STEM & Pattern Logic</div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">95th percentile in spatial decoding</p>
        </div>

        <div className={`p-5 bg-white dark:bg-slate-900 ${activeConfig.cardRadius} border border-slate-100 dark:border-slate-800 shadow-sm space-y-2`}>
          <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400">
            <Activity className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/60 rounded-full">Diagnostic Status</span>
          </div>
          <div className="text-xl font-extrabold text-slate-900 dark:text-white">3 / 4 Completed</div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Fine Motor & Logic mapped</p>
        </div>

        <div className={`p-5 bg-white dark:bg-slate-900 ${activeConfig.cardRadius} border border-slate-100 dark:border-slate-800 shadow-sm space-y-2`}>
          <div className="flex items-center justify-between text-amber-600 dark:text-amber-400">
            <Star className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-amber-50 dark:bg-amber-950/60 rounded-full">Overall Rating</span>
          </div>
          <div className="text-xl font-extrabold text-slate-900 dark:text-white">High Talent Aptitude</div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">Recommended for Robotics track</p>
        </div>

        <div className={`p-5 bg-white dark:bg-slate-900 ${activeConfig.cardRadius} border border-slate-100 dark:border-slate-800 shadow-sm space-y-2`}>
          <div className="flex items-center justify-between text-pink-600 dark:text-pink-400">
            <Calendar className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-pink-50 dark:bg-pink-950/60 rounded-full">Next Session</span>
          </div>
          <div className="text-xl font-extrabold text-slate-900 dark:text-white">08 Aug, 04:00 PM</div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">1-on-1 Mentor Consultation</p>
        </div>

      </div>

      {/* Main Grid: Talent Breakdown & Download Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Detailed Talent Domain Scores */}
        <div className={`lg:col-span-2 bg-white dark:bg-slate-900 ${activeConfig.cardRadius} border border-slate-100 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-sm`}>
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-600" />
                <span>Child Talent Domain Scores</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Scientific observational assessment scores across 6 key talent pillars.</p>
            </div>
            <button
              onClick={() => setActivePage('report-preview')}
              className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline"
            >
              View Full Sample PDF →
            </button>
          </div>

          <div className="space-y-4">
            {[
              { title: 'STEM & Algorithmic Logic', score: 95, color: 'bg-purple-600', level: 'Exceptional Gift' },
              { title: 'Visual & Fine Motor Skills', score: 88, color: 'bg-pink-500', level: 'Advanced Competency' },
              { title: 'Language & Phonetic Recall', score: 91, color: 'bg-emerald-500', level: 'Above Average' },
              { title: 'Creative & Artistic Expression', score: 85, color: 'bg-amber-500', level: 'High Curiosity' },
              { title: 'Musical Pitch & Auditory Rhythm', score: 82, color: 'bg-blue-500', level: 'Solid Baseline' },
              { title: 'Emotional & Social Quotient (EQ)', score: 90, color: 'bg-teal-500', level: 'High Empathy' },
            ].map((domain, idx) => (
              <div key={idx} className="space-y-1.5 p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-slate-900 dark:text-white">{domain.title}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 rounded-full">
                      {domain.level}
                    </span>
                    <span className="font-extrabold text-slate-900 dark:text-white">{domain.score}%</span>
                  </div>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${domain.color} rounded-full transition-all duration-1000`} 
                    style={{ width: `${domain.score}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Download PDF & Scheduled Mentor Meetings */}
        <div className="space-y-6">
          
          {/* Download Report Card */}
          <div className={`p-6 bg-gradient-to-br from-slate-900 to-purple-950 text-white ${activeConfig.cardRadius} space-y-4 shadow-xl border border-purple-800/40`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm">Download 12-Page Report</h3>
                <p className="text-[11px] text-purple-200">Official Diagnostic PDF</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Complete breakdown of Aarav's talent roadmap, recommended learning tools, and school matching options.
            </p>
            <button
              onClick={() => setActivePage('report-preview')}
              className="w-full py-3 bg-white text-slate-950 font-extrabold text-xs rounded-xl shadow-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-purple-700" />
              <span>Download Official Report PDF</span>
            </button>
          </div>

          {/* Scheduled Mentor Consultations */}
          <div className={`p-6 bg-white dark:bg-slate-900 ${activeConfig.cardRadius} border border-slate-100 dark:border-slate-800 space-y-4 shadow-sm`}>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4 text-pink-500" />
              <span>Upcoming Mentor Sessions</span>
            </h3>

            <div className="space-y-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs space-y-1">
                <div className="flex justify-between font-extrabold text-slate-900 dark:text-white">
                  <span>Tangram & Spatial Logic Review</span>
                  <span className="text-emerald-600 font-bold">Confirmed</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-[11px]">With Dr. Ananya Sharma (Pediatric OT Specialist)</p>
                <div className="text-[10px] font-semibold text-purple-600 dark:text-purple-400 pt-1">📅 08 Aug 2026, 04:00 PM • Zoom Meeting</div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
