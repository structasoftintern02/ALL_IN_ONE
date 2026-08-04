import React from 'react';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';

export const FAQPage = ({ setActivePage }) => (
  <div>
    <div className="py-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-4">
          ❓ Help Center
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Frequently Asked <span className="text-gradient-green">Questions</span></h1>
        <p className="text-slate-300 text-lg">All your solar loan questions answered by our experts.</p>
      </div>
    </div>
    <FAQ setActivePage={setActivePage} />
    <Contact />
  </div>
);
