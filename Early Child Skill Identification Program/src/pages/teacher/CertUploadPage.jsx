import React, { useState, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarTeacher } from '../../components/layout/SidebarTeacher';
import { Upload, CheckCircle2, FileText, AlertCircle, X, FileCheck, Image } from 'lucide-react';

export const CertUploadPage = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();
  const [uploaded, setUploaded] = useState(false);
  const [certName, setCertName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const formatFileSize = (bytes) => {
    if (!bytes) return '0 KB';
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const validateAndProcessFile = (file) => {
    setError('');
    if (!file) return;

    // Check size limit: 10MB
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      setError(`File size (${formatFileSize(file.size)}) exceeds the maximum limit of 10MB.`);
      return;
    }

    // Check file type
    const validExtensions = ['pdf', 'png', 'jpg', 'jpeg', 'webp'];
    const ext = file.name ? file.name.split('.').pop()?.toLowerCase() : '';
    const validMimeTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    
    const isValidExt = validExtensions.includes(ext);
    const isValidMime = validMimeTypes.includes(file.type);

    if (!isValidExt && !isValidMime && file.type !== '') {
      setError('Unsupported file type. Please upload a PDF or PNG/JPG image.');
      return;
    }

    const isImage = file.type.startsWith('image/') || ['png', 'jpg', 'jpeg', 'webp'].includes(ext);
    let previewUrl = null;
    if (isImage) {
      try {
        previewUrl = URL.createObjectURL(file);
      } catch (err) {
        console.error('Preview error', err);
      }
    }

    setSelectedFile({
      raw: file,
      name: file.name || 'Certification_Document',
      size: formatFileSize(file.size),
      isImage,
      previewUrl
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      validateAndProcessFile(e.target.files[0]);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'copy';
    }
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget && e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndProcessFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleRemoveFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (selectedFile?.previewUrl) {
      URL.revokeObjectURL(selectedFile.previewUrl);
    }
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    setError('');

    if (!selectedFile) {
      setError('Please select or drag & drop a certification document (PDF or PNG).');
      return;
    }

    if (!certName.trim()) {
      setError('Please enter the Certificate Name / Degree.');
      return;
    }

    setUploaded(true);
  };

  const handleReset = () => {
    if (selectedFile?.previewUrl) {
      URL.revokeObjectURL(selectedFile.previewUrl);
    }
    setSelectedFile(null);
    setCertName('');
    setError('');
    setUploaded(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
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
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.png,.jpg,.jpeg,.webp,application/pdf,image/png,image/jpeg,image/webp"
                onChange={handleFileChange}
                className="hidden"
                id="cert-file-input"
              />

              {error && (
                <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {!selectedFile ? (
                <label
                  htmlFor="cert-file-input"
                  onDragEnter={handleDragEnter}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`block border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center space-y-3 transition-all cursor-pointer ${
                    isDragging
                      ? 'border-purple-500 bg-purple-50/90 scale-[1.01] shadow-md ring-4 ring-purple-100'
                      : 'border-slate-300 bg-slate-50 hover:bg-slate-100/70 hover:border-purple-400'
                  }`}
                >
                  <Upload className={`w-10 h-10 mx-auto transition-transform ${isDragging ? 'text-purple-700 scale-110' : 'text-purple-600'}`} />
                  <div>
                    <p className="font-bold text-slate-800">
                      {isDragging ? 'Drop your certification file here' : 'Drag & Drop Certification PDF or PNG'}
                    </p>
                    <span className="text-slate-400 text-[11px]">Or click to browse from device • Maximum file size: 10MB</span>
                  </div>
                </label>
              ) : (
                <div className="border border-purple-200 bg-purple-50/40 rounded-2xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    {selectedFile.isImage && selectedFile.previewUrl ? (
                      <img src={selectedFile.previewUrl} alt="Preview" className="w-12 h-12 object-cover rounded-lg border border-purple-200 shrink-0" />
                    ) : (
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 text-purple-700">
                        {selectedFile.isImage ? <Image className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="font-bold text-slate-900 text-xs truncate">{selectedFile.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] text-slate-500">{selectedFile.size}</span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          <FileCheck className="w-3 h-3" /> Ready
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors shrink-0"
                    title="Remove file"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Certificate Name / Degree</label>
                <input
                  required
                  type="text"
                  value={certName}
                  onChange={(e) => setCertName(e.target.value)}
                  placeholder="e.g. Diploma in Child Psychology & ECCE"
                  className="w-full p-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3.5 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary} shadow-sm hover:shadow transition-all`}
              >
                Submit for Admin Audit →
              </button>
            </form>
          ) : (
            <div className="text-center p-6 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <div>
                <h3 className="text-lg font-bold text-slate-900">Certificate Submitted Successfully!</h3>
                <p className="text-xs text-slate-500 mt-1">Admin verification queue will review your credentials within 24 hours.</p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Certificate Title:</span>
                  <span className="font-bold text-slate-800">{certName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">File Name:</span>
                  <span className="font-bold text-slate-800 truncate max-w-[200px]">{selectedFile?.name || 'Document.pdf'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Status:</span>
                  <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md text-[11px]">Pending Audit</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 transition text-xs"
              >
                Upload Another Certificate
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
