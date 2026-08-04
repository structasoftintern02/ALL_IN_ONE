import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sidebar } from '../components/layout/Sidebar';
import { mockCompany } from '../data/employerData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Building2, Globe, MapPin, Users, Calendar, ShieldCheck, CheckCircle2, Edit } from 'lucide-react';

export const CompanyProfile = ({ setActivePage }) => {
  const { activeConfig } = useTheme();

  const company = mockCompany || {};
  const offices = company.offices || ['Bengaluru (HQ)', 'Gurugram', 'Hyderabad', 'Mumbai'];
  const gallery = company.gallery || [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400'
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <Sidebar activePage="company" setActivePage={setActivePage} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <ScrollReveal direction="down" amount={0.1} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-gray-800 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Company Employer Brand Profile
            </h1>
            <p className="text-xs text-slate-500">Public employer branding visible to job seekers across India</p>
          </div>
          <button className={`px-4 py-2 ${activeConfig.cardRadius} text-xs font-bold ${activeConfig.buttonPrimary} flex items-center gap-1.5`}>
            <Edit className="w-4 h-4" /> Edit Company Profile
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <ScrollReveal direction="right" className="lg:col-span-8 bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-lg">
                {company.logoText || 'TC'}
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>{company.name || 'TechCorp Solutions Pvt Ltd'}</span>
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </h2>
                <p className="text-xs text-blue-600 font-bold">{company.industry || 'Information Technology Services'}</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {company.description || 'TechCorp Solutions is a premier tech innovator delivering enterprise cloud and AI ATS workforce solutions across India.'}
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-gray-800">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Office Locations across India</h4>
              <div className="flex flex-wrap gap-2">
                {offices.map((off, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-gray-800 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300">
                    📍 {off}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-gray-800">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Company Office Gallery</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {gallery.map((img, idx) => (
                  <img key={idx} src={img} alt="Office" className="h-28 w-full object-cover rounded-2xl border border-slate-200 dark:border-gray-800" />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-3 text-xs shadow-xs">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-gray-800 pb-2">Employer Snapshot</h4>
              <div className="flex justify-between"><span className="text-slate-400">Team Size:</span> <strong className="text-slate-900 dark:text-white">{company.teamSize || company.employeeCount || '500 - 1,000'}</strong></div>
              <div className="flex justify-between"><span className="text-slate-400">Founded:</span> <strong className="text-slate-900 dark:text-white">{company.foundedYear || '2015'}</strong></div>
              <div className="flex justify-between"><span className="text-slate-400">Website:</span> <a href={company.website || '#'} target="_blank" rel="noreferrer" className="text-blue-600 font-bold underline">{company.website || 'https://techcorp-example.com'}</a></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
