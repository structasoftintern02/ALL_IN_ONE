import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme, VARIATIONS } from '../../context/ThemeContext';
import { 
  jobListingsData, cityCardsData, industryCardsData, featuredCompaniesData 
} from '../../data/jobsData';
import { JobCard } from '../../components/ui/JobCard';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/common/StaggerContainer';
import { ParallaxBox } from '../../components/common/ParallaxBox';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';
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
    <div className="space-y-24 pb-16 overflow-hidden">
      
      {/* SECTION 1: HERO BANNER WITH PARALLAX & ENTRANCE MOTION */}
      <section className={`relative pt-16 pb-28 border-b overflow-hidden ${
        variation === VARIATIONS.CORPORATE
          ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-blue-950 text-white'
          : variation === VARIATIONS.SAAS
          ? 'bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white'
          : 'bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 text-white'
      }`}>
        {/* Parallax Floating Decorative Elements */}
        <ParallaxBox offset={-40} className="absolute top-10 left-8 opacity-20 pointer-events-none hidden lg:block">
          <div className="w-40 h-40 rounded-full bg-blue-500 blur-3xl" />
        </ParallaxBox>
        <ParallaxBox offset={60} className="absolute bottom-10 right-12 opacity-20 pointer-events-none hidden lg:block">
          <div className="w-56 h-56 rounded-full bg-emerald-400 blur-3xl" />
        </ParallaxBox>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>India's Premier Smart Recruitment Network • 245,000+ Active Jobs</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Connect With <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">Verified Employers</span> Across India
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed"
            >
              Find top tech, finance, e-commerce, and corporate roles in Bengaluru, Mumbai, Delhi NCR, Hyderabad & Pune with zero placement fees.
            </motion.p>

            {/* Main Search Bar Card */}
            <motion.form 
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={handleSearchSubmit} 
              className="p-3 bg-white rounded-2xl sm:rounded-3xl shadow-2xl space-y-2 sm:space-y-0 sm:flex sm:items-center sm:gap-2 text-slate-900"
            >
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

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className={`w-full sm:w-auto px-8 py-3.5 ${activeConfig.cardRadius} font-extrabold text-xs sm:text-sm shadow-lg transition-all ${activeConfig.buttonPrimary}`}
              >
                Search Jobs
              </motion.button>
            </motion.form>

            {/* Quick Keyword Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-slate-300">
              <span className="font-semibold">Popular Searches:</span>
              <button onClick={() => setActivePage('job-search')} className="px-2.5 py-1 bg-white/10 rounded-full hover:bg-white/20 transition-all">Remote Tech</button>
              <button onClick={() => setActivePage('job-search')} className="px-2.5 py-1 bg-white/10 rounded-full hover:bg-white/20 transition-all">React Lead</button>
              <button onClick={() => setActivePage('job-search')} className="px-2.5 py-1 bg-white/10 rounded-full hover:bg-white/20 transition-all">FinTech Product</button>
              <button onClick={() => setActivePage('job-search')} className="px-2.5 py-1 bg-white/10 rounded-full hover:bg-white/20 transition-all">Data Science</button>
            </div>

          </div>
        </div>
      </section>

      {/* STATS COUNTER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" amount={0.3}>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">
                <AnimatedCounter to={245000} suffix="+" />
              </div>
              <p className="text-xs font-semibold text-slate-500">Active Job Listings</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">
                <AnimatedCounter to={18200} suffix="+" />
              </div>
              <p className="text-xs font-semibold text-slate-500">Verified Companies</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-600">
                <AnimatedCounter to={48} suffix="Lakh+" />
              </div>
              <p className="text-xs font-semibold text-slate-500">Registered Job Seekers</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-600">
                <AnimatedCounter to={98} suffix="%" />
              </div>
              <p className="text-xs font-semibold text-slate-500">Recruiter Response Rate</p>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 2: POPULAR CITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <ScrollReveal direction="up" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
            className={`px-5 py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonSecondary} hover:scale-105 transition-all`}
          >
            View All Cities →
          </button>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityCardsData.map((city) => (
            <StaggerItem key={city.id} direction="up">
              <motion.div
                whileHover={{ y: -6 }}
                onClick={() => setActivePage('job-search')}
                className={`group overflow-hidden bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-full`}
              >
                <div className="relative h-44 overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={city.image} 
                    alt={city.name} 
                    className="w-full h-full object-cover"
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
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* SECTION 3: FEATURED JOBS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <ScrollReveal direction="up" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className={`text-3xl font-extrabold ${activeConfig.headingFont}`}>
              Featured High-Salary Openings
            </h2>
            <p className="text-xs text-slate-500 mt-1">Direct applications with 48-hour recruiter response guarantee.</p>
          </div>
          <button
            onClick={() => setActivePage('job-search')}
            className={`px-5 py-2.5 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonSecondary} hover:scale-105 transition-all`}
          >
            Explore All 245,000+ Jobs →
          </button>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListingsData.slice(0, 6).map((job) => (
            <StaggerItem key={job.id} direction="scale">
              <JobCard 
                job={job} 
                onApply={() => {
                  setActivePortal('candidate');
                  setActivePage('candidate-register');
                }} 
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* SECTION 4: FEATURED COMPANIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className={`text-3xl font-extrabold ${activeConfig.headingFont}`}>
            Top Empaneled Hiring Companies
          </h2>
          <p className="text-xs text-slate-500">Verified IT, FinTech, and E-commerce giants actively hiring this month.</p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {featuredCompaniesData.map((comp) => (
            <StaggerItem key={comp.id} direction="scale">
              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                onClick={() => setActivePage('job-search')}
                className={`p-5 bg-white ${activeConfig.cardRadius} border border-slate-200/80 text-center hover:border-slate-400 transition-all cursor-pointer shadow-xs hover:shadow-md space-y-2 group h-full flex flex-col justify-between`}
              >
                <div className="text-4xl group-hover:scale-110 transition-transform">{comp.logo}</div>
                <h3 className="font-bold text-slate-900 text-xs truncate">{comp.name}</h3>
                <span className="text-[10px] text-emerald-600 font-bold block">{comp.openJobs} Open Jobs</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* SECTION 5: HOW IT WORKS STEP-BY-STEP */}
      <section className={`py-16 ${
        variation === VARIATIONS.CORPORATE ? 'bg-slate-900 text-white' : variation === VARIATIONS.SAAS ? 'bg-indigo-950 text-white' : 'bg-emerald-950 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal direction="down" className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 px-3 py-1 bg-white/10 rounded-full">
              Seamless Recruitment Workflow
            </span>
            <h2 className="text-3xl font-extrabold text-white">How India Jobs Works</h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StaggerItem direction="up">
              <motion.div whileHover={{ y: -4 }} className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3 h-full">
                <span className="text-3xl font-extrabold text-white/20">01</span>
                <h3 className="font-bold text-lg text-white">1. Create Profile</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Register with your skills, notice period, and upload resume.</p>
              </motion.div>
            </StaggerItem>

            <StaggerItem direction="up">
              <motion.div whileHover={{ y: -4 }} className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3 h-full">
                <span className="text-3xl font-extrabold text-white/20">02</span>
                <h3 className="font-bold text-lg text-white">2. Match & Apply</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Smart AI matches your profile with verified company salary ranges.</p>
              </motion.div>
            </StaggerItem>

            <StaggerItem direction="up">
              <motion.div whileHover={{ y: -4 }} className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3 h-full">
                <span className="text-3xl font-extrabold text-white/20">03</span>
                <h3 className="font-bold text-lg text-white">3. Direct Interview</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Connect directly with HR managers via WhatsApp or Google Meet.</p>
              </motion.div>
            </StaggerItem>

            <StaggerItem direction="up">
              <motion.div whileHover={{ y: -4 }} className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3 h-full">
                <span className="text-3xl font-extrabold text-white/20">04</span>
                <h3 className="font-bold text-lg text-white">4. Get Hired</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Receive offer letters with zero placement deduction.</p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale" amount={0.3}>
          <div className={`p-10 ${activeConfig.cardRadius} bg-gradient-to-r ${activeConfig.gradientBg} text-white text-center space-y-6 shadow-2xl relative overflow-hidden`}>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Take the Next Big Step in Your Career Today!
            </h2>
            <p className="text-slate-200 max-w-xl mx-auto text-sm">
              Join 4.8 Million+ verified job seekers and 18,200+ top Indian companies hiring across IT, Banking, Sales, and E-commerce.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActivePortal('candidate');
                  setActivePage('candidate-register');
                }}
                className={`px-8 py-4 bg-white text-slate-950 font-extrabold ${activeConfig.cardRadius} shadow-lg hover:bg-slate-100 transition-all flex items-center gap-2`}
              >
                <span>Register as Candidate</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActivePortal('company');
                  setActivePage('company-login');
                }}
                className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md"
              >
                Post Jobs as Employer
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
