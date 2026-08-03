import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarParent } from '../../components/layout/SidebarParent';
import { CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react';

export const PaymentCheckout = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const [paid, setPaid] = useState(false);
  const [method, setMethod] = useState('upi'); // 'upi' | 'card'

  const handlePay = (e) => {
    e.preventDefault();
    setPaid(true);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarParent activePage="payment-checkout" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Program Checkout & Enrollment Payment</h1>
          <p className="text-xs text-slate-500">Secure frontend checkout with 100% money-back satisfaction guarantee</p>
        </div>

        {!paid ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 max-w-4xl w-full">
            
            {/* Payment Method Form */}
            <div className={`lg:col-span-7 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-5 sm:p-6 space-y-6 shadow-sm`}>
              <h3 className="font-extrabold text-slate-900 text-sm border-b border-slate-100 pb-3">Select Payment Method</h3>
              
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setMethod('upi')}
                  className={`p-3 rounded-xl border transition-all ${method === 'upi' ? 'border-pink-500 bg-pink-50 text-pink-900' : 'border-slate-200'}`}
                >
                  📱 UPI / GPay
                </button>
                
                <button
                  type="button"
                  onClick={() => setMethod('card')}
                  className={`p-3 rounded-xl border transition-all ${method === 'card' ? 'border-pink-500 bg-pink-50 text-pink-900' : 'border-slate-200'}`}
                >
                  💳 Credit / Debit Card
                </button>
              </div>

              <form onSubmit={handlePay} className="space-y-4 text-xs">
                {method === 'upi' ? (
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Enter VPA / UPI ID</label>
                    <input type="text" placeholder="priya.verma@upi" className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" required />
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Card Number</label>
                      <input type="text" placeholder="4111 •••• •••• 9812" className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200 font-mono" required />
                    </div>
                  </div>
                )}

                <button type="submit" className={`w-full py-3.5 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary}`}>
                  Complete Payment of ₹4,999 →
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className={`lg:col-span-5 bg-white ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-5 sm:p-6 space-y-4 shadow-sm text-xs`}>
              <h3 className="font-extrabold text-slate-900 text-sm border-b border-slate-100 pb-3">Enrollment Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-slate-600"><span>Child:</span> <strong>Aarav Verma (5.5 Yrs)</strong></div>
                <div className="flex justify-between text-slate-600"><span>Program:</span> <strong>Creative Logic Track</strong></div>
                <div className="flex justify-between text-slate-600"><span>Duration:</span> <strong>8 Weeks (16 Sessions)</strong></div>
                <div className="flex justify-between text-slate-600"><span>Partner School:</span> <strong>Orchids International</strong></div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between font-extrabold text-slate-900 text-sm">
                <span>Total Due Amount:</span>
                <span className="text-pink-600">₹4,999</span>
              </div>
            </div>

          </div>
        ) : (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 text-center space-y-4 max-w-md mx-auto shadow-2xl w-full">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Enrollment Confirmed!</h2>
            <p className="text-xs text-slate-500">Receipt delivered to priya.verma@example.com. First session starts 05 Aug 2026.</p>
            <button onClick={() => setActivePage('parent-dashboard')} className={`w-full py-3 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary}`}>
              Return to Parent Dashboard →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
