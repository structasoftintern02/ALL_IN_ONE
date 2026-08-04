import React from 'react';
import { Contact } from '../components/sections/Contact';

export const ContactPage = () => (
  <div>
    <div className="py-12 bg-gradient-to-br from-slate-900 to-teal-950 text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-4">
          📞 Contact Us
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Talk to a <span className="text-gradient-green">Solar Loan Expert</span></h1>
        <p className="text-slate-300 text-lg">Our certified solar advisors are available Mon–Sat, 9AM–7PM IST.</p>
      </div>
    </div>
    <Contact />
  </div>
);
