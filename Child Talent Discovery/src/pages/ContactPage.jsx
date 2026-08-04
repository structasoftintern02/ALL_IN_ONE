import React from 'react';
import { Contact } from '../components/sections/Contact';

export const ContactPage = () => {
  return (
    <div>
      <div className="py-14 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-extrabold border border-white/20">
            📞 Contact Child Talent Advisory
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold">Parent Guidance & <span className="text-cyan-400">Support</span></h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Our certified child development advisors are here to answer your questions and assist you with selecting the right program for your child.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};
