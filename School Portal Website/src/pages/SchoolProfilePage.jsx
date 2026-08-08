import React from 'react';
import { 
  Building2, UserCheck, ShieldCheck, FileText, Landmark, 
  MapPin, Phone, Mail, Globe, CheckCircle2, Clock, Award
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const SchoolProfilePage = () => {
  const { schoolProfile } = useSchool();

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-lg">
            GW
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-white">{schoolProfile.name}</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Approved Partner
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">{schoolProfile.tagline} • Code: <span className="text-blue-400 font-bold">{schoolProfile.code}</span></p>
          </div>
        </div>
      </div>

      {/* Grid Layout: Left 2 Columns & Right Approval Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (2 Cols wide) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Card 1: School Information */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <Building2 className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-black text-slate-900 dark:text-white">School Basic Details</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 font-bold block">School Type</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200">{schoolProfile.type}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold block">Educational Board</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200">{schoolProfile.board}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold block">Established Year</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200">{schoolProfile.established}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold block">Official Email</span>
                <span className="font-extrabold text-blue-600 dark:text-blue-400">{schoolProfile.email}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold block">Contact Number</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200">{schoolProfile.phone}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold block">Website</span>
                <span className="font-extrabold text-blue-600 dark:text-blue-400">{schoolProfile.website}</span>
              </div>

              <div className="sm:col-span-2">
                <span className="text-slate-400 font-bold block">Campus Address</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200">{schoolProfile.address}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Principal & Management */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <UserCheck className="w-5 h-5 text-purple-600" />
              <h3 className="text-base font-black text-slate-900 dark:text-white">Principal Information</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 font-bold block">Principal Name</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200">{schoolProfile.principal.name}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold block">Qualification</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200">{schoolProfile.principal.qualification}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold block">Direct Email</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200">{schoolProfile.principal.email}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold block">Direct Phone</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200">{schoolProfile.principal.phone}</span>
              </div>
            </div>
          </div>

          {/* Card 3: Banking & GST Information */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <Landmark className="w-5 h-5 text-emerald-600" />
              <h3 className="text-base font-black text-slate-900 dark:text-white">Banking & Tax Verification</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 font-bold block">Bank Name</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200">{schoolProfile.bankDetails.bankName}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold block">Account Name</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200">{schoolProfile.bankDetails.accountName}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold block">Account Number</span>
                <span className="font-mono font-extrabold text-slate-800 dark:text-slate-200">{schoolProfile.bankDetails.accountNumber}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold block">IFSC Code</span>
                <span className="font-mono font-extrabold text-slate-800 dark:text-slate-200">{schoolProfile.bankDetails.ifscCode}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold block">GSTIN Number</span>
                <span className="font-mono font-extrabold text-slate-800 dark:text-slate-200">{schoolProfile.gstDetails.gstin}</span>
              </div>

              <div>
                <span className="text-slate-400 font-bold block">Tax Status</span>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{schoolProfile.gstDetails.taxStatus}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Approval Timeline */}
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-black text-slate-900 dark:text-white">Partner Verification Status</h3>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-1">
              <div className="text-xs font-black text-emerald-600 dark:text-emerald-400">PARTNERSHIP VERIFIED</div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Approved to host CSF Foundation Programs & list classrooms.</div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="text-xs font-black uppercase text-slate-400 tracking-wider">Approval Timeline</div>
              <div className="space-y-4">
                {schoolProfile.approvalTimeline.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900 dark:text-white">{item.step}</div>
                      <div className="text-[11px] text-slate-400">{item.date} • <span className="text-emerald-500 font-bold">{item.status}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
