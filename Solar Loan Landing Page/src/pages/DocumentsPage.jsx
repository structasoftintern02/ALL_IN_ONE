import React from 'react';
import { Documents } from '../components/sections/Documents';

export const DocumentsPage = ({ setActivePage }) => (
  <div>
    <div className="py-12 bg-gradient-to-br from-slate-900 to-indigo-950 text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-4">
          📋 Documents Required
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Required <span className="text-gradient-green">Documents</span></h1>
        <p className="text-slate-300 text-lg">Complete document checklist for a smooth solar loan application.</p>
      </div>
    </div>
    <Documents setActivePage={setActivePage} />
  </div>
);
