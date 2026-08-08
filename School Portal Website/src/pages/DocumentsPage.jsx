import React from 'react';
import { FileText, Download, ShieldCheck, CheckCircle2, Upload } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const DocumentsPage = () => {
  const { documents } = useSchool();

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-teal-400" />
            <h1 className="text-xl sm:text-2xl font-black text-white">Document Repository & KYC</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Access official partnership contracts, safety guidelines, infrastructure certificates, and tax compliance documents.
          </p>
        </div>

        <button className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-md flex-shrink-0">
          <Upload className="w-4 h-4" />
          <span>Upload KYC Document</span>
        </button>
      </div>

      {/* Documents List Table */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-extrabold uppercase text-[10px]">
                <th className="py-4 px-6">Document Name</th>
                <th className="py-4 px-4">Category</th>
                <th className="py-4 px-4">File Size</th>
                <th className="py-4 px-4">Upload Date</th>
                <th className="py-4 px-4">Verification Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-4 px-6 font-black text-slate-900 dark:text-white">{doc.name}</td>
                  <td className="py-4 px-4 font-bold text-blue-600 dark:text-blue-400">{doc.type}</td>
                  <td className="py-4 px-4 text-slate-500 font-mono">{doc.size}</td>
                  <td className="py-4 px-4 text-slate-500">{doc.uploadDate}</td>
                  <td className="py-4 px-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      ✓ {doc.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-extrabold text-xs hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-1.5 ml-auto">
                      <Download className="w-3.5 h-3.5" /> Download PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
