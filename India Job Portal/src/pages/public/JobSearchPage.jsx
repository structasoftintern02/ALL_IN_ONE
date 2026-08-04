import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { jobListingsData } from '../../data/jobsData';
import { JobCard } from '../../components/ui/JobCard';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../components/common/StaggerContainer';
import { Search, MapPin, Filter, SlidersHorizontal, LayoutGrid, Table as TableIcon, Check } from 'lucide-react';

export const JobSearchPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedMode, setSelectedMode] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [minSalary, setMinSalary] = useState(0);
  const [sortBy, setSortBy] = useState('recent');

  let filteredJobs = jobListingsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCity = selectedCity === 'All' || job.city === selectedCity;
    const matchesMode = selectedMode === 'All' || job.mode === selectedMode;
    const matchesIndustry = selectedIndustry === 'All' || job.industry === selectedIndustry;
    const matchesSalary = job.salaryMin >= minSalary;

    return matchesSearch && matchesCity && matchesMode && matchesIndustry && matchesSalary;
  });

  if (sortBy === 'salary-high') {
    filteredJobs.sort((a, b) => b.salaryMax - a.salaryMax);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <ScrollReveal direction="down" amount={0.1}>
        <div className={`p-8 bg-gradient-to-r ${activeConfig.gradientBg} ${activeConfig.cardRadius} text-white space-y-3 shadow-xl`}>
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold border border-white/20">
            Smart Indian Job Search Engine
          </span>
          <h1 className={`text-3xl sm:text-4xl font-extrabold ${activeConfig.headingFont}`}>
            Search 245,000+ Verified Indian Openings
          </h1>
          <p className="text-xs sm:text-sm text-slate-200">
            Filter by CTC salary range, experience, tech stack, and remote/hybrid work modes.
          </p>
        </div>
      </ScrollReveal>

      {/* Main Grid: Filters Sidebar + Job Listings */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Filter Sidebar */}
        <ScrollReveal direction="right" className={`lg:col-span-4 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-6 space-y-6 shadow-sm sticky top-24`}>
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
              <span>Search Filters</span>
            </h3>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCity('All');
                setSelectedMode('All');
                setSelectedIndustry('All');
                setMinSalary(0);
              }}
              className="text-xs font-bold text-emerald-600 hover:underline"
            >
              Reset
            </button>
          </div>

          {/* Keyword Search */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700">Keyword Search</label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Title, skill, company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* City Selector */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700">Location City</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full py-2 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
            >
              <option value="All">All Cities (PAN India)</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Gurugram">Gurugram / Delhi NCR</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Pune">Pune</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>

          {/* Work Mode */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700">Work Mode</label>
            <div className="grid grid-cols-3 gap-1">
              {['All', 'Remote', 'Hybrid', 'Onsite'].map(mode => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setSelectedMode(mode)}
                  className={`py-1.5 text-[11px] font-bold rounded-lg border transition-all ${
                    selectedMode === mode
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Salary Min Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-slate-700">
              <span>Min CTC Salary</span>
              <span className="font-extrabold text-emerald-600">₹{minSalary} LPA+</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              step="2"
              value={minSalary}
              onChange={(e) => setMinSalary(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

        </ScrollReveal>

        {/* Right Job Cards Grid */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs text-xs">
            <span className="text-slate-600 font-semibold">
              Showing <strong>{filteredJobs.length}</strong> matching openings
            </span>

            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-1.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold"
              >
                <option value="recent">Most Recent Jobs</option>
                <option value="salary-high">Highest CTC Salary</option>
              </select>
            </div>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
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

        </div>

      </div>

    </div>
  );
};
