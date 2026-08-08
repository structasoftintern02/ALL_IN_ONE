import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Plus, Calendar, MapPin, Ticket, Users, 
  Trash2, CheckCircle2, Lock, X 
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const SchoolEventsPage = () => {
  const { events, addEvent, subscription } = useSchool();
  const [showAddModal, setShowAddModal] = useState(false);

  // New Event Form State
  const [formData, setFormData] = useState({
    title: '',
    date: '2026-09-20',
    time: '10:00 AM – 03:00 PM',
    venue: 'Greenwood Main Campus Auditorium',
    category: 'Science Fair',
    maxSeats: 150,
    entryFee: 200,
    description: ''
  });

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    const newEvt = {
      id: `EVT-${Date.now()}`,
      ...formData,
      registeredCount: 0,
      status: 'Published'
    };

    addEvent(newEvt);
    setShowAddModal(false);
    setFormData({
      title: '',
      date: '2026-09-20',
      time: '10:00 AM – 03:00 PM',
      venue: 'Greenwood Main Campus Auditorium',
      category: 'Science Fair',
      maxSeats: 150,
      entryFee: 200,
      description: ''
    });
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white border border-amber-500 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-black backdrop-blur-md border border-white/30">
            <Sparkles className="w-4 h-4 text-white" />
            <span>Premium Subscription Feature</span>
          </div>
          <h1 className="text-xl sm:text-3xl font-black">School Partner Event Manager</h1>
          <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
            Host and monetize internal school events like Sports Days, Science Fairs, Annual Days & Workshops with integrated online parent registration & ticketing.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 rounded-xl bg-white text-amber-900 font-extrabold text-xs hover:bg-amber-50 transition-all flex items-center gap-2 shadow-lg flex-shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Create School Event</span>
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((evt) => (
          <div 
            key={evt.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-black">
                    {evt.category}
                  </span>
                  <h3 className="text-base font-black text-slate-900 dark:text-white mt-1">{evt.title}</h3>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-black">
                  {evt.status}
                </span>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{evt.description}</p>

              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>{evt.date} • {evt.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>{evt.venue}</span>
                </div>
              </div>

              {/* Registration Bar */}
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-bold">Registrations</span>
                  <span className="font-black text-slate-900 dark:text-white">{evt.registeredCount} / {evt.maxSeats} Seats</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${(evt.registeredCount / evt.maxSeats) * 100}%` }} />
                </div>
              </div>
            </div>

            {/* Footer Ticket Price */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 font-bold block uppercase">Ticket Price</span>
                <span className="text-sm font-black text-amber-500">
                  {evt.entryFee > 0 ? `₹${evt.entryFee} / Parent` : 'Free Entry'}
                </span>
              </div>
              <button className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-extrabold text-xs">
                Copy Parent Registration Link
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Event Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 relative"
            >
              <button
                onClick={() => setShowAddModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-black text-slate-900 dark:text-white">Create School Premium Event</h3>

              <form onSubmit={handleCreateSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Event Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Greenwood Annual Robotics Showcase 2026"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Event Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Event Category</label>
                    <input
                      type="text"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Max Capacity (Seats)</label>
                    <input
                      type="number"
                      value={formData.maxSeats}
                      onChange={(e) => setFormData({ ...formData, maxSeats: Number(e.target.value) })}
                      className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Ticket Fee (₹)</label>
                    <input
                      type="number"
                      value={formData.entryFee}
                      onChange={(e) => setFormData({ ...formData, entryFee: Number(e.target.value) })}
                      className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs shadow-lg mt-2"
                >
                  Publish Event & Enable Ticketing
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
