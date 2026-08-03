import React, { useState } from 'react';
import { useTheme, VARIATIONS } from '../../context/ThemeContext';
import { 
  jobListingsData, cityCardsData, industryCardsData, featuredCompaniesData 
} from '../../data/jobsData';
import { JobCard } from '../../components/ui/JobCard';
import { 
  Search, MapPin, Briefcase, Sparkles, ShieldCheck, ArrowRight, CheckCircle2, 
  Building2, TrendingUp, Users, Award, Star, ChevronRight 
} from 'lucide-react';

export const HomePage = ({ setActivePage, setActivePortal }) => {
  const { variation, activeConfig } = useTheme();

  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchCity, setSearchCity] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActivePage('job-search');
  };

  return (
    <div className="space-y-24 pb-16">
      
      {/* SECTION 1: HERO BANNER */}
      <section className={`relative pt-12 pb-24 border-b overflow-hidden ${
        variation === VARIATIONS.CORPORATE
          ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-blue-950 text-white'
          : variation === VARIATIONS.SAAS
          ? 'bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white'
          : 'bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>India's Premier Smart Recruitment Network • 245,000+ Active Jobs</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Connect With <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">Verified Employers</span> Across India
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Find top tech, finance, e-commerce, and corporate roles in Bengaluru, Mumbai, Delhi NCR, Hyderabad & Pune with zero placement fees.
            </p>

            {/* Main Search Bar Card */}
            <form onSubmit={handleSearchSubmit} className="p-3 bg-white rounded-2xl sm:rounded-3xl shadow-2xl space-y-2 sm:space-y-0 sm:flex sm:items-center sm:gap-2 text-slate-900">
              
              <div className="flex-1 flex items-center gap-2 px-3 py-2 border-b sm:border-b-0 sm:border-r border-slate-200">
                <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Job title, skills, or company (e.g. React, Manager)..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-full text-xs sm:text-sm font-medium focus:outline-none bg-transparent"
                />
              </div>

              <div className="flex-1 flex items-center gap-2 px-3 py-2">
                <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="City (e.g. Bengaluru, Mumbai)..."
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="w-full text-xs sm:text-sm font-medium focus:outline-none bg-transparent"
                />
              </div>

              <button
                type="submit"
                className={`w-full sm:w-auto px-8 py-3.5 ${activeConfig.cardRadius} font-extrabold text-xs sm:text-sm shadow-lg transition-all ${activeConfig.buttonPrimary}`}
              >
                Search Jobs
              </button>

            </form>

            {/* Quick Keyword Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-slate-300">
              <span className="font-semibold">Popular Searches:</span>
              <button onClick={() => setActivePage('job-search')} className="px-2.5 py-1 bg-white/10 rounded-full hover:bg-white/20">Remote Tech</button>
              <button onClick={() => setActivePage('job-search')} className="px-2.5 py-1 bg-white/10 rounded-full hover:bg-white/20">React Lead</button>
              <button onClick={() => setActivePage('job-search')} className="px-2.5 py-1 bg-white/10 rounded-full hover:bg-white/20">FinTech Product</button>
              <button onClick={() => setActivePage('job-search')} className="px-2.5 py-1 bg-white/10 rounded-full hover:bg-white/20">Data Science</button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: POPULAR CITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
              Top Indian Employment Centers
            </span>
            <h2 className={`text-3xl font-extrabold mt-2 ${activeConfig.headingFont}`}>
              Explore Jobs by Top Cities
            </h2>
          </div>
          <button
            onClick={() => setActivePage('jobs-city')}
            className={`px-5 py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonSecondary}`}
          >
            View All Cities →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityCardsData.map((city) => (
            <div
              key={city.id}
              onClick={() => setActivePage('job-search')}
              className={`group overflow-hidden bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} transition-all duration-300 cursor-pointer`}
            >
              <div className="relative h-44 overflow-hidden">
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-emerald-500 text-slate-950 shadow-md">
                  {city.highlight}
                </span>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-2xl font-extrabold">{city.name}</h3>
                  <span className="text-xs font-semibold text-emerald-300">{city.totalJobs}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: FEATURED JOBS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className={`text-3xl font-extrabold ${activeConfig.headingFont}`}>
              Featured High-Salary Openings
            </h2>
            <p className="text-xs text-slate-500 mt-1">Direct applications with 48-hour recruiter response guarantee.</p>
          </div>
          <button
            onClick={() => setActivePage('job-search')}
            className={`px-5 py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonSecondary}`}
          >
            Explore All 245,000+ Jobs →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListingsData.slice(0, 6).map((job) => (
            <JobCard 
              key={job.id} 
              job={job} 
              onApply={() => {
                setActivePortal('candidate');
                setActivePage('candidate-register');
              }} 
            />
          ))}
        </div>
      </section>

      {/* SECTION 4: FEATURED COMPANIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className={`text-3xl font-extrabold ${activeConfig.headingFont}`}>
            Top Empaneled Hiring Companies
          </h2>
          <p className="text-xs text-slate-500">Verified IT, FinTech, and E-commerce giants actively hiring this month.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {featuredCompaniesData.map((comp) => (
            <div
              key={comp.id}
              onClick={() => setActivePage('job-search')}
              className={`p-5 bg-white ${activeConfig.cardRadius} border border-slate-200/80 text-center hover:border-slate-400 transition-all cursor-pointer shadow-xs space-y-2 group`}
            >
              <div className="text-4xl group-hover:scale-110 transition-transform">{comp.logo}</div>
              <h4 className="font-bold text-slate-900 text-xs truncate">{comp.name}</h4>
              <span className="text-[10px] text-emerald-600 font-bold block">{comp.openJobs} Open Jobs</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className={`py-16 ${
        variation === VARIATIONS.CORPORATE ? 'bg-slate-900 text-white' : variation === VARIATIONS.SAAS ? 'bg-indigo-950 text-white' : 'bg-emerald-950 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 px-3 py-1 bg-white/10 rounded-full">
              Seamless Recruitment Workflow
            </span>
            <h2 className="text-3xl font-extrabold text-white">How India Jobs Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3">
              <span className="text-3xl font-extrabold text-white/20">01</span>
              <h4 className="font-bold text-lg text-white">1. Create Profile</h4>
              <p className="text-xs text-slate-300">Register with your skills, notice period, and upload resume.</p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3">
              <span className="text-3xl font-extrabold text-white/20">02</span>
              <h4 className="font-bold text-lg text-white">2. Match & Apply</h4>
              <p className="text-xs text-slate-300">Smart AI matches your profile with verified company salary ranges.</p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3">
              <span className="text-3xl font-extrabold text-white/20">03</span>
              <h4 className="font-bold text-lg text-white">3. Direct Interview</h4>
              <p className="text-xs text-slate-300">Connect directly with HR managers via WhatsApp or Google Meet.</p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3">
              <span className="text-3xl font-extrabold text-white/20">04</span>
              <h4 className="font-bold text-lg text-white">4. Get Hired</h4>
              <p className="text-xs text-slate-300">Receive offer letters with zero placement deduction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-10 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.gradientBg} text-white text-center space-y-6 shadow-2xl relative overflow-hidden`}>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Take the Next Big Step in Your Career Today!
          </h2>
          <p className="text-slate-200 max-w-xl mx-auto text-sm">
            Join 4.8 Million+ verified job seekers and 18,200+ top Indian companies hiring across IT, Banking, Sales, and E-commerce.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                setActivePortal('candidate');
                setActivePage('candidate-register');
              }}
              className={`px-8 py-4 bg-white text-slate-950 font-extrabold ${activeConfig.cardRadius} shadow-lg hover:bg-slate-100 transition-all flex items-center gap-2`}
            >
              <span>Register as Candidate</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => {
                setActivePortal('company');
                setActivePage('company-login');
              }}
              className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md"
            >
              Post Jobs as Employer
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
