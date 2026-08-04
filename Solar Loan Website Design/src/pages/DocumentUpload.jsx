import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme, CONCEPTS } from '../context/ThemeContext';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/common/StaggerContainer';
import { 
  Upload, FileText, CheckCircle2, Trash2, Eye, ShieldCheck, Sparkles, AlertCircle, File 
} from 'lucide-react';

export const DocumentUpload = ({ setActivePage }) => {
  const { concept, activeConfig } = useTheme();

  const [documents, setDocuments] = useState([
    { id: 'aadhaar', label: 'Aadhaar Card (Front & Back)', required: true, status: 'uploaded', fileName: 'Aadhaar_RajeshSharma.pdf', size: '1.2 MB', progress: 100 },
    { id: 'pan', label: 'PAN Card', required: true, status: 'uploaded', fileName: 'PAN_ABCDE1234F.jpg', size: '850 KB', progress: 100 },
    { id: 'income', label: 'Income Proof (3-Month Paystub / ITR)', required: true, status: 'uploaded', fileName: 'Paystub_Infosys_Jun2026.pdf', size: '2.1 MB', progress: 100 },
    { id: 'bank', label: '6-Month Bank Statement', required: true, status: 'uploading', fileName: 'HDFC_Bank_Statement_6M.pdf', size: '3.4 MB', progress: 65 },
    { id: 'bill', label: 'Recent DISCOM Electricity Bill', required: true, status: 'pending', fileName: null, size: null, progress: 0 },
    { id: 'property', label: 'Property Ownership Document / Tax Bill', required: false, status: 'pending', fileName: null, size: null, progress: 0 },
    { id: 'quotation', label: 'Solar Installer Technical Quotation', required: true, status: 'uploaded', fileName: 'Solar_Quotation_TataPower.pdf', size: '1.8 MB', progress: 100 }
  ]);

  const handleSimulateUpload = (docId) => {
    setDocuments(docs => docs.map(d => {
      if (d.id === docId) {
        return {
          ...d,
          status: 'uploaded',
          fileName: `${d.id.toUpperCase()}_Document_Scanned.pdf`,
          size: '1.5 MB',
          progress: 100
        };
      }
      return d;
    }));
  };

  const handleRemove = (docId) => {
    setDocuments(docs => docs.map(d => {
      if (d.id === docId) {
        return {
          ...d,
          status: 'pending',
          fileName: null,
          size: null,
          progress: 0
        };
      }
      return d;
    }));
  };

  const uploadedCount = documents.filter(d => d.status === 'uploaded').length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <ScrollReveal direction="down" amount={0.1} className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
            Document Verification Vault
          </span>
          <h1 className={`text-3xl font-extrabold text-slate-900 mt-2 ${activeConfig.headingFont}`}>
            Upload Required Verification Documents
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            256-bit encrypted paperless upload for instant e-sanction approval.
          </p>
        </div>

        {/* Upload Status Card */}
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 font-extrabold flex items-center justify-center text-base">
            {uploadedCount}/{documents.length}
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold block uppercase">Vault Completion</span>
            <span className="text-sm font-bold text-slate-900">
              {Math.round((uploadedCount / documents.length) * 100)}% Completed
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid of Drag & Drop Upload Cards */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <StaggerItem key={doc.id} direction="scale">
            <motion.div 
              whileHover={{ y: -4 }}
              className={`p-5 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 flex flex-col justify-between relative shadow-xs hover:shadow-md transition-all h-full`}
            >
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      {doc.label}
                    </h3>
                    <span className="text-[10px] text-slate-400">
                      {doc.required ? 'Mandatory Document' : 'Optional Top-Up Support'}
                    </span>
                  </div>

                  {doc.status === 'uploaded' && (
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
                    </span>
                  )}
                  {doc.status === 'uploading' && (
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold animate-pulse">
                      Uploading...
                    </span>
                  )}
                  {doc.status === 'pending' && (
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium">
                      Pending
                    </span>
                  )}
                </div>

                {/* Upload Drop Zone / Active File State */}
                <div className="mt-4">
                  {doc.status === 'uploaded' ? (
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <FileText className="w-5 h-5 text-teal-600 flex-shrink-0" />
                        <div className="truncate">
                          <span className="text-xs font-bold text-slate-800 block truncate">{doc.fileName}</span>
                          <span className="text-[10px] text-slate-400">{doc.size}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <button className="p-1 text-slate-400 hover:text-slate-700" title="Preview">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleRemove(doc.id)} className="p-1 text-red-400 hover:text-red-600" title="Remove">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : doc.status === 'uploading' ? (
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                      <div className="flex justify-between text-xs text-slate-600 font-semibold">
                        <span className="truncate">{doc.fileName}</span>
                        <span>{doc.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-teal-500 rounded-full transition-all duration-300" style={{ width: `${doc.progress}%` }} />
                      </div>
                    </div>
                  ) : (
                    <div 
                      onClick={() => handleSimulateUpload(doc.id)}
                      className="p-6 border-2 border-dashed border-slate-200 hover:border-teal-500 bg-slate-50/50 rounded-2xl text-center space-y-2 cursor-pointer transition-colors"
                    >
                      <Upload className="w-6 h-6 text-slate-400 mx-auto" />
                      <div>
                        <span className="text-xs font-bold text-slate-700 block">Click or Drop PDF/JPG</span>
                        <span className="text-[10px] text-slate-400">Max size 10MB</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {doc.status === 'pending' && (
                <button
                  onClick={() => handleSimulateUpload(doc.id)}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all mt-4"
                >
                  Upload {doc.id.toUpperCase()} File
                </button>
              )}
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Footer Action */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-200">
        <button
          onClick={() => setActivePage('apply')}
          className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold hover:bg-slate-100 text-slate-700"
        >
          ← Back to Application
        </button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActivePage('track')}
          className={`px-8 py-3 ${activeConfig.cardRadius} text-xs font-extrabold transition-all ${activeConfig.buttonPrimary}`}
        >
          Proceed to Track Application →
        </motion.button>
      </div>

    </div>
  );
};
