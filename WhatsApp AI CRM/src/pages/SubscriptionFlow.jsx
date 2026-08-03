import React, { useState } from 'react';
import { useTheme, VARIATIONS } from '../context/ThemeContext';
import { basePlans, countriesData } from '../data/pricingData';
import { CreditCard, CheckCircle2, ShieldCheck, Tag, ArrowRight, ArrowLeft, Lock } from 'lucide-react';

export const SubscriptionFlow = ({ setActivePage, selectedPlan, selectedCountry }) => {
  const { variation, activeConfig } = useTheme();

  const plan = selectedPlan || basePlans[2]; // Default Pro
  const country = selectedCountry || countriesData[0]; // Default US

  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'upi' | 'paypal' | 'apple'
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  // Math
  const rawPrice = plan.billingCycle === 'annual' ? plan.basePriceAnnual : plan.basePriceMonthly;
  const subtotal = Math.round(rawPrice * country.rateMultiplier);
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const tax = Math.round((subtotal - discountAmount) * 0.10); // 10% tax
  const totalAmount = Math.max(0, subtotal - discountAmount + tax);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'WHATSAPP20' || couponCode.trim().toUpperCase() === 'PROMO20') {
      setAppliedDiscount(0.20);
      alert('Coupon WHATSAPP20 Applied! 20% Discount applied.');
    } else {
      alert('Invalid Coupon. Try typing "WHATSAPP20"');
    }
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      
      {!isSuccess ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Payment Details */}
          <div className={`lg:col-span-7 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} p-6 sm:p-8 space-y-6 shadow-sm`}>
            
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-gray-800 pb-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-500" />
                <span>Select Payment Method</span>
              </h3>
              <span className="text-xs text-slate-400">256-bit Encrypted SSL</span>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                  paymentMethod === 'card'
                    ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/40 text-slate-900 dark:text-white'
                    : 'border-slate-200 dark:border-gray-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                💳 Credit / Debit Card
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                  paymentMethod === 'upi'
                    ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/40 text-slate-900 dark:text-white'
                    : 'border-slate-200 dark:border-gray-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                📱 Instant UPI / GPay
              </button>
            </div>

            <form onSubmit={handleCheckout} className="space-y-4">
              {paymentMethod === 'card' ? (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="Alex Rivera"
                      className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Card Number</label>
                    <input
                      type="text"
                      placeholder="4532 •••• •••• 8812"
                      className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-mono font-medium"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Expiry (MM/YY)</label>
                      <input
                        type="text"
                        placeholder="08/29"
                        className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">CVC / CVV</label>
                      <input
                        type="text"
                        placeholder="381"
                        maxLength={4}
                        className="w-full py-2.5 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium"
                        required
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 space-y-2">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">Enter UPI Virtual ID (VPA)</label>
                  <input
                    type="text"
                    placeholder="alexrivera@okaxis"
                    className="w-full py-2.5 px-3 bg-white dark:bg-gray-900 rounded-xl border border-slate-300 dark:border-gray-700 text-xs font-medium"
                    required
                  />
                  <p className="text-[11px] text-slate-400">Collect request will be sent to your UPI App.</p>
                </div>
              )}

              <button
                type="submit"
                className={`w-full py-3.5 ${activeConfig.cardRadius} text-xs font-extrabold transition-all shadow-lg flex items-center justify-center gap-2 ${activeConfig.buttonPrimary}`}
              >
                <Lock className="w-4 h-4" />
                <span>Pay {country.symbol}{totalAmount.toLocaleString('en-US')} & Complete Purchase</span>
              </button>
            </form>

          </div>

          {/* Right Summary Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`p-6 ${activeConfig.cardBg} ${activeConfig.cardRadius} ${activeConfig.cardBorder} space-y-4 shadow-sm`}>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Order Summary</h3>

              <div className="p-3 bg-slate-50 dark:bg-gray-800 rounded-xl space-y-1 text-xs">
                <span className="text-emerald-500 font-bold uppercase text-[10px]">Selected Plan</span>
                <div className="flex justify-between font-extrabold text-slate-900 dark:text-white text-sm">
                  <span>{plan.name}</span>
                  <span>{country.symbol}{subtotal.toLocaleString('en-US')}</span>
                </div>
                <span className="text-slate-400 text-[10px] block">
                  Billing: {plan.billingCycle === 'annual' ? 'Annual (20% Savings)' : 'Monthly'}
                </span>
              </div>

              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon Code (e.g. WHATSAPP20)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 py-2 px-3 bg-slate-50 dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 text-xs font-medium uppercase"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-slate-800 text-white font-bold text-xs rounded-xl hover:bg-slate-700"
                >
                  Apply
                </button>
              </form>

              {/* Price Breakdown */}
              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-gray-800 text-xs">
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Subtotal:</span>
                  <span>{country.symbol}{subtotal.toLocaleString('en-US')}</span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-500 font-bold">
                    <span>Discount (20%):</span>
                    <span>-{country.symbol}{discountAmount.toLocaleString('en-US')}</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Estimated Tax (10%):</span>
                  <span>{country.symbol}{tax.toLocaleString('en-US')}</span>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-slate-200 dark:border-gray-800 text-sm font-extrabold text-slate-900 dark:text-white">
                  <span>Total Amount Due:</span>
                  <span className="text-emerald-500 text-lg">{country.symbol}{totalAmount.toLocaleString('en-US')}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      ) : (
        /* Purchase Success Screen */
        <div className={`p-8 ${activeConfig.cardBg} ${activeConfig.cardRadius} border border-slate-200 dark:border-gray-800 text-center space-y-6 shadow-2xl animate-in zoom-in-95`}>
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-500 flex items-center justify-center mx-auto text-3xl">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold">
              PAYMENT SUCCESSFUL • ORDER #ORD-89102
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Thank You! Your Subscription is Active
            </h2>
            <p className="text-xs text-slate-500">
              You are now subscribed to <strong className="text-slate-900 dark:text-white font-bold">{plan.name}</strong> for {country.symbol}{totalAmount.toLocaleString('en-US')}.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActivePage('dashboard')}
              className={`px-8 py-3.5 ${activeConfig.cardRadius} text-xs font-extrabold transition-all shadow-lg ${activeConfig.buttonPrimary}`}
            >
              Open Customer Dashboard →
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
