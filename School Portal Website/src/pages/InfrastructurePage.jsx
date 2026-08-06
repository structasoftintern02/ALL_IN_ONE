import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Plus, CheckCircle2, Wrench, Shield, Sparkles } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const InfrastructurePage = () => {
  const { infrastructure } = useSchool();
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Laboratories', 'Activity Rooms', 'Auditoriums', 'Sports & Playgrounds'];

  const filtered = filterCategory === 'All'
    ? infrastructure
    : infrastructure.filter(i => i.category === filterCategory);

  return (
    <div className="space-y-6 max-w-[1300px] mx-auto w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Campus Infrastructure</h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
            Explore and manage specialized learning labs, activity centers, and skill auditoriums
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert('Infrastructure facility request submitted!')}
          className="px-5 h-11 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold text-xs shadow-md flex items-center gap-2 self-start sm:self-auto hover:scale-105 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Facility</span>
        </button>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilterCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
              filterCategory === cat
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Infrastructure Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-teal-500/10 dark:bg-teal-500/20 text-3xl flex items-center justify-center flex-shrink-0">
                    {item.image}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white leading-tight">{item.name}</h3>
                    <div className="text-xs font-bold text-slate-400 mt-1">{item.category} • Capacity: {item.capacity}</div>
                  </div>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-black flex items-center gap-1.5 flex-shrink-0 ${
                  item.status === 'Operational'
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                    : 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                }`}>
                  {item.status === 'Operational' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Wrench className="w-3.5 h-3.5" />}
                  <span>{item.status}</span>
                </span>
              </div>

              {/* Features Tags */}
              <div className="space-y-1.5 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Equipment & Features</div>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feat) => (
                    <span key={feat} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold border border-slate-200 dark:border-slate-700">
                      ✨ {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-400">Regular Inspection Completed</span>
              <button
                type="button"
                onClick={() => alert(`View details for ${item.name}`)}
                className="font-extrabold text-teal-600 dark:text-teal-400 hover:underline"
              >
                View Details →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};
