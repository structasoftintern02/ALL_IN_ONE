import React from 'react';
import { Testimonials } from '../components/sections/Testimonials';

export const TestimonialsPage = () => {
  return (
    <div>
      <div className="py-14 bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-extrabold border border-white/20">
            ❤️ Parent Reviews & Stories
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold">Parent <span className="text-purple-400">Success Stories</span></h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Read how over 25,000 parents across India unlocked their child's natural potential with early skill identification.
          </p>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};
