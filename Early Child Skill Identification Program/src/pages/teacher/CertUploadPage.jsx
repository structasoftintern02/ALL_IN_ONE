import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarTeacher } from '../../components/layout/SidebarTeacher';
import { Upload, CheckCircle2, FileText, AlertCircle } from 'lucide-react';

export const CertUploadPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = (e) => {
    e.preventDefault();
    setUploaded(true);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarTeacher activePage="teacher-cert-upload" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Pedagogical Certification Upload</h1>
          <p className="text-xs text-slate-500">Upload NIMHANS, Trinity College, or ECCE Early Education Diplomas for verified teacher badge</p>
        </div>

        <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-sm max-w-2xl mx-auto space-y-6 w-full">
          {!uploaded ? (
            <form onSubmit={handleUpload} className="space-y-4 text-xs">
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 sm:p-8 text-center space-y-3 bg-slate-50 hover:bg-slate-100/60 transition-all cursor-pointer">
                <Upload className="w-10 h-10 text-purple-600 mx-auto" />
                <div>
                  <p className="font-bold text-slate-800">Drag & Drop Certification PDF or PNG</p>
                  <span className="text-slate-400 text-[11px]">Maximum file size: 10MB</span>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Certificate Name / Degree</label>
                <input required type="text" placeholder="e.g. Diploma in Child Psychology & ECCE" className="w-full p-3 rounded-xl border border-slate-200 text-xs" />
              </div>

              <button type="submit" className={`w-full py-3.5 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary}`}>
                Submit for Admin Audit →
              </button>
            </form>
          ) : (
            <div className="text-center p-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">Certificate Submitted Successfully!</h3>
              <p className="text-xs text-slate-500">Admin verification queue will review your credentials within 24 hours.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
