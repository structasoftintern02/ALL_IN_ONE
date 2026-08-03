import React, { useState } from 'react';
import { useTheme, VARIATIONS } from '../context/ThemeContext';
import { Mail, KeyRound, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export const ForgotPassword = ({ setActivePage }) => {
  const { variation, activeConfig } = useTheme();

  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: Reset, 4: Success
  const [email, setEmail] = useState('alex.rivera@fintechsaas.com');
  const [otp, setOtp] = useState(['8', '4', '1', '9', '0', '2']);
  const [newPassword, setNewPassword] = useState('••••••••••••');

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 4) setStep(step + 1);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      
      <div className={`p-8 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} shadow-2xl space-y-6`}>
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto text-xl font-bold">
            <KeyRound className="w-6 h-6" />
          </div>
          <h2 className={`text-2xl font-extrabold ${activeConfig.isDark ? 'text-white' : 'text-slate-900'}`}>
            {step === 1 && 'Account Password Recovery'}
            {step === 2 && 'Enter 6-Digit OTP Verification'}
            {step === 3 && 'Create New Secure Password'}
            {step === 4 && 'Password Reset Complete!'}
          </h2>
          <p className="text-xs text-slate-500">
            {step === 1 && 'Enter your registered work email to receive verification code'}
            {step === 2 && `We sent a 6-digit OTP code to ${email}`}
            {step === 3 && 'Choose a strong password for your CRM workspace'}
          </p>
        </div>

        {/* Step 1: Email */}
        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Registered Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-bold transition-all ${activeConfig.buttonPrimary}`}
            >
              Send OTP Verification Code →
            </button>
          </form>
        )}

        {/* Step 2: OTP Inputs */}
        {step === 2 && (
          <form onSubmit={handleNext} className="space-y-6">
            <div className="flex justify-between gap-2">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => {
                    const newOtp = [...otp];
                    newOtp[idx] = e.target.value;
                    setOtp(newOtp);
                  }}
                  className="w-11 h-12 text-center text-lg font-bold bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-300 dark:border-gray-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                />
              ))}
            </div>

            <button
              type="submit"
              className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-bold transition-all ${activeConfig.buttonPrimary}`}
            >
              Verify OTP Code →
            </button>
          </form>
        )}

        {/* Step 3: New Password */}
        {step === 3 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-bold transition-all ${activeConfig.buttonPrimary}`}
            >
              Update Password →
            </button>
          </form>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Your password has been reset successfully. You can now login with your new credentials.
            </p>
            <button
              onClick={() => setActivePage('login')}
              className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-bold transition-all ${activeConfig.buttonPrimary}`}
            >
              Back to Customer Login
            </button>
          </div>
        )}

        {step < 4 && (
          <button
            onClick={() => setActivePage('login')}
            className="w-full text-center text-xs font-semibold text-slate-500 hover:underline pt-2 block"
          >
            ← Remember your password? Back to Login
          </button>
        )}

      </div>

    </div>
  );
};
