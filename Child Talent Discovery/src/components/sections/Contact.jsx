import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { ScrollReveal } from '../common/ScrollReveal';
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const { activeConfig } = useTheme();
  const dataContext = useData();
  const homeCms = dataContext?.homeCms;
  const cmsData = homeCms?.contactUsCms || homeCms?.contactCms;

  const [formData, setFormData] = useState({ name: '', childAge: '', phone: '', email: '', program: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const badge = cmsData?.badge || "📞 Get in Touch";
  const rawTitle = cmsData?.title || "Connect with Our Child Talent Advisors";
  const highlightText = cmsData?.highlightText || "Child Talent Advisors";
  const subtitle = cmsData?.subtitle || "Have questions about which age assessment is right for your child? Send us a message or schedule a free 15-minute consultation.";
  const formTitle = cmsData?.formTitle || "Parent Inquiry & Consultation Form";
  const submitButtonText = cmsData?.submitButtonText || "Send Message & Request Advisor Call";
  const phone = cmsData?.phone || "1800-KIDS-TALENT (54378)";
  const email = cmsData?.email || "support@childtalentdiscovery.org";
  const address = cmsData?.address || "Child Development Center, Tech Park Phase 2, Outer Ring Road, Bengaluru – 560103";
  const monFriHours = cmsData?.monFriHours || "9:00 AM – 7:00 PM IST";
  const satHours = cmsData?.satHours || "10:00 AM – 4:00 PM IST";
  const sunHours = cmsData?.sunHours || "Online Parent Portal Open 24/7";
  const mapTitle = cmsData?.mapTitle || "Child Talent Development Center";
  const mapAddress = cmsData?.mapAddress || "Bengaluru, Karnataka 560103";
  const mapButtonText = cmsData?.mapButtonText || "View on Google Maps";

  const isVisible = cmsData?.visibility?.section !== false;
  if (!isVisible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', childAge: '', phone: '', email: '', program: '', message: '' });
  };

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  let titleNode = rawTitle;
  if (highlightText && rawTitle.includes(highlightText)) {
    const parts = rawTitle.split(highlightText);
    titleNode = (
      <>
        {parts[0]}
        <span className={`bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent`}>
          {highlightText}
        </span>
        {parts[1]}
      </>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {(cmsData?.visibility?.badge !== false || cmsData?.visibility?.title !== false || cmsData?.visibility?.subtitle !== false) && (
          <SectionHeader
            badge={cmsData?.visibility?.badge !== false ? badge : undefined}
            title={cmsData?.visibility?.title !== false ? titleNode : undefined}
            subtitle={cmsData?.visibility?.subtitle !== false ? subtitle : undefined}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Contact Form */}
          {(cmsData?.visibility?.form !== false) && (
            <ScrollReveal direction="left" className="lg:col-span-7">
              <div className={`p-8 bg-white dark:bg-slate-800 ${activeConfig.cardRadius} shadow-xl border border-slate-100 dark:border-slate-800 space-y-6`}>
                <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-700 pb-4">
                  <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{formTitle}</h3>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-3"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-500">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">Inquiry Received!</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
                      Our senior child talent advisor will contact you on WhatsApp or call within 2 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">Parent Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Sunita Mehta"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">Child Age (Years) *</label>
                        <input
                          type="text"
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleChange}
                          required
                          placeholder="e.g. 5 Years 6 Months"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">Mobile / WhatsApp *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="sunita@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">Program of Interest</label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="">Select age group...</option>
                        <option>3–5 Years (Foundation Stage)</option>
                        <option>5–7 Years (Growth Stage)</option>
                        <option>7–10 Years (Talent Specialization)</option>
                        <option>General Parent Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">Specific Questions / Observations</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us what specific hobbies or habits you observe in your child..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className={`w-full py-3.5 ${activeConfig.cardRadius} text-white font-extrabold text-sm flex items-center justify-center gap-2 ${activeConfig.buttonPrimary}`}
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitButtonText}</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          )}

          {/* Right Info Column & Map */}
          <ScrollReveal direction="right" className="lg:col-span-5 space-y-6">
            
            {/* Contact Details */}
            {(cmsData?.visibility?.contactInfo !== false) && (
              <div className={`p-6 bg-white dark:bg-slate-800 ${activeConfig.cardRadius} border border-slate-100 dark:border-slate-800 shadow-md space-y-4`}>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white">Contact & Office Information</h4>
                
                <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-300">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 dark:text-white">Toll-Free Parent Helpline</div>
                      <div>{phone}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 dark:text-white">Email Advisory</div>
                      <div>{email}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-300">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 dark:text-white">Development Center Address</div>
                      <div>{address}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Business Hours */}
            {(cmsData?.visibility?.hoursBox !== false) && (
              <div className={`p-5 ${activeConfig.cardRadius} bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 space-y-2`}>
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-extrabold text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Advisor Availability Hours</span>
                </div>
                <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span>Monday – Friday:</span>
                    <span className="font-extrabold">{monFriHours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-extrabold">{satHours}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Sunday:</span>
                    <span>{sunHours}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Map Box */}
            {(cmsData?.visibility?.mapBox !== false) && (
              <div className={`h-48 ${activeConfig.cardRadius} bg-gradient-to-br from-purple-900 to-slate-900 border border-purple-800 relative overflow-hidden flex flex-col items-center justify-center text-center p-4 text-white shadow-md`}>
                <div className="text-3xl mb-1">📍</div>
                <p className="font-extrabold text-sm">{mapTitle}</p>
                <p className="text-xs text-purple-300">{mapAddress}</p>
                <button className="mt-3 px-4 py-1.5 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/20 hover:bg-white/20 transition-colors">
                  {mapButtonText}
                </button>
              </div>
            )}

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
