import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { cityCardsData } from '../../data/jobsData';
import { MapPin, ArrowRight } from 'lucide-react';

export const JobsByCityPage = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          Pan India Job Directory
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold ${activeConfig.headingFont}`}>
          Jobs by Indian Cities & Metro Hubs
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Discover top hiring opportunities in India's leading technology, finance, and industrial hubs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cityCardsData.map((city) => (
          <div
            key={city.id}
            onClick={() => setActivePage('job-search')}
            className={`group bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} overflow-hidden space-y-4 shadow-sm hover:shadow-xl transition-all cursor-pointer`}
          >
            <div className="relative h-48 overflow-hidden">
              <img src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-2xl font-extrabold">{city.name}</h3>
                <span className="text-xs text-emerald-300 font-semibold">{city.totalJobs}</span>
              </div>
            </div>

            <div className="p-4 pt-0 flex justify-between items-center text-xs">
              <span className="text-slate-500">{city.highlight}</span>
              <button className="font-bold text-emerald-600 flex items-center gap-1">
                <span>Explore Jobs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
