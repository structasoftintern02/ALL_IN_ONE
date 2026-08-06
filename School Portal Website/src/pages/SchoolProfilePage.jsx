import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { School, MapPin, Phone, Mail, Award, Calendar, Edit3, Save, Camera, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const SchoolProfilePage = () => {
  const { user, updateSchoolProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || '',
    principal: user?.principal || '',
    phone: user?.phone || '',
    address: user?.address || '',
    affiliation: user?.affiliation || 'CBSE / Skill Council'
  });

  const handleSave = (e) => {
    e.preventDefault();
    updateSchoolProfile(form);
    setEditing(false);
  };

  const galleryImages = [
    { title: 'Robotics & STEM Innovation Studio', emoji: '🤖', type: 'Lab' },
    { title: 'Early Child Sensory Play Center', emoji: '🎨', type: 'Activity Room' },
    { title: 'Multipurpose Skill Auditorium', emoji: '🎭', type: 'Auditorium' },
    { title: 'Indoor Sports & Fitness Turf', emoji: '🏟️', type: 'Sports' }
  ];

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto w-full">
      
      {/* Top Banner Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-3xl overflow-hidden p-6 sm:p-8 relative"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white font-black text-3xl flex items-center justify-center shadow-lg shadow-teal-500/30 flex-shrink-0">
              {user?.logo || '🏫'}
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 text-xs font-extrabold uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Partner School</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">{user?.name}</h1>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                School Code: <span className="font-extrabold text-teal-600 dark:text-teal-400">{user?.code}</span> • Established {user?.established || 2012}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setEditing(!editing)}
            className="px-5 h-11 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-extrabold text-xs shadow-md flex items-center gap-2 hover:scale-105 transition-all"
          >
            <Edit3 className="w-4 h-4" />
            <span>{editing ? 'Cancel Editing' : 'Edit School Info'}</span>
          </button>
        </div>
      </motion.div>

      {/* Editing Form OR Profile Details */}
      {editing ? (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSave}
          className="glass-card rounded-3xl p-6 sm:p-8 space-y-4"
        >
          <h3 className="text-base font-black text-slate-900 dark:text-white mb-4">Edit School Information</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">School Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="form-input"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">Principal Name</label>
              <input
                type="text"
                value={form.principal}
                onChange={(e) => setForm({ ...form, principal: e.target.value })}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">Contact Phone</label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="form-input"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">Board Affiliation</label>
              <input
                type="text"
                value={form.affiliation}
                onChange={(e) => setForm({ ...form, affiliation: e.target.value })}
                className="form-input"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 mb-1">Campus Address</label>
            <input
              type="text"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="form-input"
              required
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-6 h-11 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold text-xs shadow-md flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </motion.form>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Key Details Card */}
          <div className="md:col-span-2 glass-card rounded-3xl p-6 space-y-6">
            <h3 className="text-base font-black text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800">
              Campus Details & Contact Info
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <div className="text-slate-400 font-bold uppercase text-[10px]">Head Principal</div>
                <div className="text-sm font-black text-slate-900 dark:text-white">{user?.principal}</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <div className="text-slate-400 font-bold uppercase text-[10px]">Board Affiliation</div>
                <div className="text-sm font-black text-teal-600 dark:text-teal-400">{user?.affiliation}</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <div className="text-slate-400 font-bold uppercase text-[10px]">Official Phone</div>
                <div className="text-sm font-black text-slate-900 dark:text-white">{user?.phone}</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <div className="text-slate-400 font-bold uppercase text-[10px]">Official Email</div>
                <div className="text-sm font-black text-slate-900 dark:text-white">{user?.email}</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-slate-400 font-bold uppercase text-[10px]">Campus Address</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{user?.address}</div>
              </div>
            </div>
          </div>

          {/* Quick Stats Sidebar */}
          <div className="glass-card rounded-3xl p-6 space-y-4">
            <h3 className="text-base font-black text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800">
              Campus Highlights
            </h3>

            <div className="space-y-3 text-xs font-extrabold">
              <div className="flex justify-between items-center p-3 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                <span>Smart Classrooms</span>
                <span className="text-sm font-black">18 Rooms</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <span>STEM & Robotics Lab</span>
                <span className="text-sm font-black">2 Labs</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <span>Teacher Ratio</span>
                <span className="text-sm font-black">1:12 Ratio</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Photo Gallery Grid */}
      <div className="glass-card rounded-3xl p-6 space-y-4">
        <h3 className="text-base font-black text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800">
          Campus Gallery & Facilities
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img) => (
            <div key={img.title} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center space-y-2 group hover:border-teal-500 transition-colors">
              <div className="text-4xl py-3 group-hover:scale-110 transition-transform">{img.emoji}</div>
              <div className="text-xs font-black text-slate-900 dark:text-white">{img.title}</div>
              <span className="px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-[10px] font-extrabold text-slate-600 dark:text-slate-300">
                {img.type}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
