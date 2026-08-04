import React from 'react';
import { motion } from 'framer-motion';
import { useTheme, CONCEPTS } from '../context/ThemeContext';
import { mockUserData } from '../data/dashboardData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { 
  Printer, Download, ShieldCheck, Sun, CheckCircle2, Award, FileText, ArrowLeft 
} from 'lucide-react';

export const SanctionLetter = ({ setActivePage }) => {
  const { concept, activeConfig } = useTheme();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMock = () => {
    alert('Downloading official Solar Loan Sanction Letter (PDF)...');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      
      {/* Top Action Bar */}
      <ScrollReveal direction="down" amount={0.1} className="flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
        <button
          onClick={() => setActivePage('track')}
          className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Application Timeline</span>
        </button>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handlePrint}
            className="px-4 py-2 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition-all shadow-xs"
          >
            <Printer className="w-4 h-4" />
            <span>Print Sanction Letter</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleDownloadMock}
            className={`px-5 py-2 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary} flex items-center gap-2 shadow-md`}
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF</span>
          </motion.button>
        </div>
      </ScrollReveal>

      {/* Modern Digitized Official Letter Preview Document */}
      <ScrollReveal direction="up" amount={0.15}>
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-300 shadow-2xl space-y-8 text-slate-900 relative print:shadow-none print:border-none print:p-0">
          
          {/* Official Letterhead */}
          <div className="flex flex-col sm:flex-row items-start justify-between border-b-2 border-slate-900 pb-6 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-teal-400 flex items-center justify-center font-bold text-2xl">
                🏛️
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  STATE BANK GREEN SOLAR FINANCE
                </h2>
                <p className="text-xs text-slate-500 font-semibold">
                  Central Clean Energy Credit Division • New Delhi 110001
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-full inline-block">
                IN-PRINCIPLE SANCTIONED
              </span>
              <p className="text-xs text-slate-500 font-mono">Ref: SL-SANCTION/2026/88912</p>
              <p className="text-xs text-slate-500 font-mono">Date: 31st July 2026</p>
            </div>
          </div>

          {/* Recipient Details */}
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="font-bold text-slate-900">To,</p>
            <p className="font-extrabold text-slate-900 text-base">{mockUserData.name}</p>
            <p className="text-slate-600">{mockUserData.city}</p>
            <p className="text-slate-600">Mobile: {mockUserData.phone} | Email: {mockUserData.email}</p>
          </div>

          {/* Subject */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-900">
            Sub: In-Principle Sanction of Green Solar Rooftop Loan for 5.5 kW Installation
          </div>

          {/* Letter Body */}
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Dear Mr. Rajesh Sharma, We are pleased to inform you that based on your credit evaluation (CIBIL: 785) and solar rooftop project parameters, State Bank has approved in-principle sanction of your Solar Loan under the PM Surya Ghar: Muft Bijli Scheme with terms outlined below:
          </p>

          {/* Loan Terms Table Grid */}
          <div className="border border-slate-300 rounded-2xl overflow-hidden text-xs sm:text-sm">
            <div className="bg-slate-900 text-white font-bold py-2.5 px-4">
              APPROVED SOLAR LOAN PARAMETERS
            </div>

            <div className="divide-y divide-slate-200 bg-slate-50">
              <div className="grid grid-cols-2 p-3">
                <span className="text-slate-600">Sanctioned Loan Amount:</span>
                <strong className="text-slate-900 text-base">₹3,50,000 (Rupees Three Lakh Fifty Thousand)</strong>
              </div>

              <div className="grid grid-cols-2 p-3">
                <span className="text-slate-600">Applicable Interest Rate:</span>
                <strong className="text-teal-700 text-base">6.95% p.a. (Fixed Green Rate)</strong>
              </div>

              <div className="grid grid-cols-2 p-3">
                <span className="text-slate-600">Loan Tenure:</span>
                <strong className="text-slate-900">84 Months (7 Years)</strong>
              </div>

              <div className="grid grid-cols-2 p-3">
                <span className="text-slate-600">Equated Monthly Installment (EMI):</span>
                <strong className="text-slate-900 text-base">₹5,240 / Month</strong>
              </div>

              <div className="grid grid-cols-2 p-3">
                <span className="text-slate-600">Collateral Requirement:</span>
                <strong className="text-emerald-700">NIL (Hypothecation of Solar Panels Only)</strong>
              </div>

              <div className="grid grid-cols-2 p-3">
                <span className="text-slate-600">PM Surya Ghar Subsidy Direct Credit:</span>
                <strong className="text-amber-700">₹78,000 (To be credited post Net Metering)</strong>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="space-y-2 text-xs text-slate-600">
            <h4 className="font-bold text-slate-900 uppercase">Key Standard Conditions:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Disbursement will occur directly to empaneled Tier-1 Solar Vendor (Tata Power Solar EPC).</li>
              <li>Zero prepayment penalty applies after payment of first 6 EMIs.</li>
              <li>Net Metering commissioning certificate from DISCOM must be uploaded within 45 days of installation.</li>
            </ul>
          </div>

          {/* Digital Stamp & Signatures */}
          <div className="flex items-end justify-between pt-8 border-t border-slate-200">
            <div className="text-center space-y-1">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-teal-600 text-teal-700 flex flex-col items-center justify-center mx-auto text-[9px] font-bold p-1">
                <span>SBI DIGITAL</span>
                <span>SANCTIONED</span>
                <span>31-JUL-2026</span>
              </div>
              <span className="text-[10px] text-slate-400 block">Digital Verification Stamp</span>
            </div>

            <div className="text-right space-y-1">
              <div className="font-script text-lg text-slate-900 italic font-bold">V.K. Singhania</div>
              <p className="font-bold text-slate-900 text-xs">Vikram K. Singhania</p>
              <p className="text-[10px] text-slate-500">Authorized Officer, Green Finance Division</p>
            </div>
          </div>

        </div>
      </ScrollReveal>

    </div>
  );
};
