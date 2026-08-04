import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { ScrollReveal } from '../common/ScrollReveal';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', loanType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', loanType: '', message: '' });
  };

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        <SectionHeader
          badge="📞 Contact Us"
          title={<>Get in Touch with Our <span className="text-gradient-green">Solar Experts</span></>}
          subtitle="Have questions about solar loans? Our expert advisors are ready to help you choose the right financing option and walk you through every step."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Form */}
          <ScrollReveal direction="left">
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 p-8">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-500" /> Send Us a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">Message Sent!</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Our solar loan expert will call you within 2 business hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Rajesh Kumar"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Mobile Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="rajesh@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Loan Type Interested In</label>
                    <select
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select loan type...</option>
                      <option>Residential Solar Loan</option>
                      <option>Commercial Solar Loan</option>
                      <option>Industrial Solar Loan</option>
                      <option>Rooftop Solar Loan</option>
                      <option>Agriculture Solar Pump Loan</option>
                      <option>MSME Solar Loan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your solar requirements, loan amount needed, or any questions you have..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow"
                  >
                    <Send className="w-4 h-4" /> Send Message & Get Free Callback
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Contact Info + Map */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-6 space-y-5">
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">Contact Information</h3>

                {[
                  { icon: Phone, label: 'Toll Free', value: '1800-123-SOLAR (76527)', color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
                  { icon: Phone, label: 'WhatsApp', value: '+91 98765 43210', color: 'text-teal-500', bg: 'bg-teal-100 dark:bg-teal-900/30' },
                  { icon: Mail, label: 'Email', value: 'support@solarloanpro.in', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
                  { icon: MapPin, label: 'Head Office', value: 'Solar Tower, Green Business Park, Bengaluru – 560001', color: 'text-rose-500', bg: 'bg-rose-100 dark:bg-rose-900/30' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{item.label}</p>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Business Hours */}
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-800/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Business Hours</h4>
                </div>
                <div className="space-y-1.5 text-sm">
                  {[
                    { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM IST' },
                    { day: 'Saturday', time: '10:00 AM – 5:00 PM IST' },
                    { day: 'Sunday', time: 'Closed (Online Chat Available)' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">{item.day}</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-52 bg-gradient-to-br from-emerald-900 to-teal-900 rounded-2xl border border-emerald-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-dot-pattern opacity-30" />
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="text-white font-bold text-sm">Green Business Park</p>
                  <p className="text-emerald-300 text-xs">Bengaluru, Karnataka 560001</p>
                  <button className="mt-3 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white/20 transition-colors">
                    Open in Google Maps
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
