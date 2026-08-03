import React, { useState } from 'react';
import { useTheme, CONCEPTS } from '../context/ThemeContext';
import { 
  CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, User, MapPin, Briefcase, 
  CreditCard, Sun, Building, FileCheck2, Sparkles, Check 
} from 'lucide-react';

export const ApplyLoan = ({ setActivePage }) => {
  const { concept, activeConfig } = useTheme();

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Rajesh Sharma',
    email: 'rajesh.sharma@example.com',
    phone: '9876543210',
    dob: '1988-05-14',
    gender: 'Male',
    
    addressLine: 'Flat 402, Green Meadows, Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560038',
    residenceType: 'Self Owned Independent House',
    
    employmentType: 'Salaried Private Ltd',
    employerName: 'Infosys Limited',
    designation: 'Senior Project Lead',
    workExperienceYears: '8',
    
    monthlyIncome: '85000',
    panNumber: 'ABCDE1234F',
    existingEmi: '12000',
    
    solarInstaller: 'Tata Power Solar Empaneled Partner',
    systemCapacityKw: '5.5 kW Rooftop System',
    solarProjectCost: '350000',
    
    bankName: 'HDFC Bank',
    accountNumber: '5010023490182',
    ifscCode: 'HDFC0000128'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const steps = [
    { num: 1, title: 'Personal Details', icon: User },
    { num: 2, title: 'Address', icon: MapPin },
    { num: 3, title: 'Employment', icon: Briefcase },
    { num: 4, title: 'Income & Financials', icon: CreditCard },
    { num: 5, title: 'Solar Project Details', icon: Sun },
    { num: 6, title: 'Bank Account', icon: Building },
    { num: 7, title: 'Review & Submit', icon: FileCheck2 }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${activeConfig.badgeClass} rounded-full`}>
          100% Digital Solar Credit Application
        </span>
        <h1 className={`text-3xl font-extrabold text-slate-900 ${activeConfig.headingFont}`}>
          Apply for Solar Rooftop Finance
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Complete the guided steps below to generate your instant e-sanction letter.
        </p>
      </div>

      {!isSubmitted ? (
        <div className={`bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-6 sm:p-8 shadow-sm space-y-8`}>
          
          {/* Progress Stepper Bar */}
          <div className="overflow-x-auto pb-4">
            <div className="flex items-center justify-between min-w-[600px]">
              {steps.map((s, idx) => {
                const Icon = s.icon;
                const isDone = currentStep > s.num;
                const isCurrent = currentStep === s.num;

                return (
                  <React.Fragment key={s.num}>
                    <div className="flex flex-col items-center gap-1.5 cursor-pointer" onClick={() => s.num < currentStep && setCurrentStep(s.num)}>
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                        isDone 
                          ? 'bg-emerald-600 text-white' 
                          : isCurrent 
                          ? `${activeConfig.buttonPrimary}` 
                          : 'bg-slate-100 text-slate-400 border border-slate-200'
                      }`}>
                        {isDone ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                      </div>
                      <span className={`text-[11px] font-semibold ${isCurrent ? 'text-slate-900 font-bold' : 'text-slate-400'}`}>
                        {s.title}
                      </span>
                    </div>

                    {idx < steps.length - 1 && (
                      <div className={`flex-1 h-0.5 mx-2 ${idx + 1 < currentStep ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Form Step Content */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 1: Personal Identification
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Legal Name (As per Aadhaar)</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number (Aadhaar Linked)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Address */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 2: Installation Address & Ownership
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Installation Property Address</label>
                    <input
                      type="text"
                      name="addressLine"
                      value={formData.addressLine}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Pin Code</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Property Ownership Status</label>
                    <select
                      name="residenceType"
                      value={formData.residenceType}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                    >
                      <option value="Self Owned Independent House">Self Owned Independent House</option>
                      <option value="Ancestral Family Owned Property">Ancestral Family Owned Property</option>
                      <option value="Commercial Factory Premises">Commercial Factory Premises</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Employment */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 3: Employment & Professional Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Employment Category</label>
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                    >
                      <option value="Salaried Private Ltd">Salaried Private Ltd</option>
                      <option value="Salaried Public Sector / Govt">Salaried Public Sector / Govt</option>
                      <option value="Self Employed Business">Self Employed Business</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Employer / Business Name</label>
                    <input
                      type="text"
                      name="employerName"
                      value={formData.employerName}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Designation</label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Work Experience (Years)</label>
                    <input
                      type="number"
                      name="workExperienceYears"
                      value={formData.workExperienceYears}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Income & Financials */}
            {currentStep === 4 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 4: Financial & Income Parameters
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">PAN Card Number</label>
                    <input
                      type="text"
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium uppercase"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Net Monthly Salary / Income (₹)</label>
                    <input
                      type="number"
                      name="monthlyIncome"
                      value={formData.monthlyIncome}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Total Existing Monthly Loan EMIs (₹)</label>
                    <input
                      type="number"
                      name="existingEmi"
                      value={formData.existingEmi}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Solar Project Details */}
            {currentStep === 5 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 5: Solar System Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Solar System Capacity</label>
                    <select
                      name="systemCapacityKw"
                      value={formData.systemCapacityKw}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                    >
                      <option value="3.0 kW Rooftop System">3.0 kW Rooftop System (Residential)</option>
                      <option value="5.5 kW Rooftop System">5.5 kW Rooftop System (Villa)</option>
                      <option value="10.0 kW System">10.0 kW System (Commercial)</option>
                      <option value="25.0+ kW Factory Solar">25.0+ kW Factory Solar</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Vendor Quotation Amount (₹)</label>
                    <input
                      type="number"
                      name="solarProjectCost"
                      value={formData.solarProjectCost}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Empaneled Solar Installer / Vendor</label>
                    <input
                      type="text"
                      name="solarInstaller"
                      value={formData.solarInstaller}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Bank Account */}
            {currentStep === 6 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 6: Bank Disbursement Account
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Bank Name</label>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Account Number</label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">IFSC Code</label>
                    <input
                      type="text"
                      name="ifscCode"
                      value={formData.ifscCode}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium uppercase"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Review & Submit */}
            {currentStep === 7 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 7: Final Application Verification
                </h3>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div><span className="text-slate-400">Applicant:</span> <strong className="text-slate-900 block">{formData.fullName}</strong></div>
                    <div><span className="text-slate-400">PAN Card:</span> <strong className="text-slate-900 block">{formData.panNumber}</strong></div>
                    <div><span className="text-slate-400">Solar System:</span> <strong className="text-slate-900 block">{formData.systemCapacityKw}</strong></div>
                    <div><span className="text-slate-400">Project Cost:</span> <strong className="text-teal-700 block">₹{Number(formData.solarProjectCost).toLocaleString('en-IN')}</strong></div>
                    <div><span className="text-slate-400">Disbursement Bank:</span> <strong className="text-slate-900 block">{formData.bankName}</strong></div>
                    <div><span className="text-slate-400">Property:</span> <strong className="text-slate-900 block">{formData.residenceType}</strong></div>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 bg-emerald-50 text-emerald-900 rounded-xl border border-emerald-200 text-xs">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    By submitting, you consent to digital CIBIL verification and PM Surya Ghar subsidy auto-integration with your bank account.
                  </span>
                </div>
              </div>
            )}

            {/* Navigation Control Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 hover:bg-slate-100 text-slate-700 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              ) : <div />}

              {currentStep < 7 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className={`px-6 py-2.5 ${activeConfig.cardRadius} text-xs font-bold transition-all flex items-center gap-1.5 ${activeConfig.buttonPrimary}`}
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              )}
            </div>

          </form>

        </div>
      ) : (
        /* Instant Submission Success Screen */
        <div className={`p-8 bg-white ${activeConfig.cardRadius} border border-slate-200 text-center space-y-6 shadow-xl animate-in zoom-in-95 duration-200`}>
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">
              APPLICATION SUBMITTED SUCCESSFULLY
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Congratulations, {formData.fullName}!
            </h2>
            <p className="text-xs text-slate-500">
              Your application tracking ID is <strong className="text-slate-900 font-bold">SL-2026-88912</strong>
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2 text-left max-w-md mx-auto">
            <div className="flex justify-between"><span className="text-slate-500">Sanctioned Amount:</span> <strong className="text-slate-900">₹3,50,000</strong></div>
            <div className="flex justify-between"><span className="text-slate-500">Interest Rate:</span> <strong className="text-teal-700">6.95% p.a.</strong></div>
            <div className="flex justify-between"><span className="text-slate-500">Assigned Bank:</span> <strong className="text-slate-900">SBI Green Solar Loan</strong></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActivePage('upload')}
              className={`px-6 py-3 ${activeConfig.cardRadius} text-xs font-bold transition-all ${activeConfig.buttonPrimary}`}
            >
              Next Step: Upload Documents →
            </button>

            <button
              onClick={() => setActivePage('track')}
              className="px-6 py-3 rounded-xl border border-slate-300 text-xs font-semibold hover:bg-slate-100 text-slate-800"
            >
              Track Application Timeline
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
