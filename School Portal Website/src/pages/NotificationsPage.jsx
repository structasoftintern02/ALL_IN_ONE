import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Send, CheckCircle2, AlertCircle, Info, Sparkles, X } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const NotificationsPage = () => {
  const { notifications, broadcastNotification, markAllNotificationsRead } = useSchool();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [target, setTarget] = useState('Parents');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !message) return;
    broadcastNotification(title, message, target);
    setTitle('');
    setMessage('');
    setShowModal(false);
  };

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Campus Notifications & Announcements</h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
            Broadcast official announcements to parents and teachers in real-time
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={markAllNotificationsRead}
            className="px-4 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-extrabold text-xs border border-slate-200 dark:border-slate-700"
          >
            Mark All Read
          </button>

          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="px-5 h-11 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold text-xs shadow-md flex items-center gap-2 hover:scale-105 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Broadcast Announcement</span>
          </button>
        </div>
      </div>

      {/* Notifications List Feed */}
      <div className="glass-card rounded-3xl p-6 space-y-4">
        <h3 className="text-base font-black text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
          <Bell className="w-5 h-5 text-teal-500" />
          <span>Notification Feed</span>
        </h3>

        <div className="space-y-3">
          {notifications.length === 0 ? (
            <div className="text-center py-10 text-slate-400 font-bold text-xs">
              No notifications available.
            </div>
          ) : (
            notifications.map((notif) => (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                  notif.read
                    ? 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
                    : 'bg-teal-500/10 dark:bg-teal-500/15 border-teal-500/30 text-slate-900 dark:text-white font-bold shadow-sm'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-black text-slate-900 dark:text-white truncate">{notif.title}</h4>
                    <span className="text-[11px] font-semibold text-slate-400 flex-shrink-0">{notif.time}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1 leading-relaxed">
                    {notif.message}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Broadcast Announcement Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="glass-card w-full max-w-lg rounded-3xl p-6 sm:p-8 relative z-10 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Broadcast Campus Announcement</h3>
                <button type="button" onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-bold">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 mb-1">Target Audience</label>
                  <select value={target} onChange={(e)=>setTarget(e.target.value)} className="form-input">
                    <option value="Parents">All Enrolled Parents</option>
                    <option value="Teachers">Faculty & Teachers</option>
                    <option value="Whole Campus">Entire Campus Community</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 mb-1">Announcement Title</label>
                  <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required placeholder="e.g. Monthly Skill Progress Reports Released" className="form-input" />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 mb-1">Announcement Message</label>
                  <textarea value={message} onChange={(e)=>setMessage(e.target.value)} required rows="4" placeholder="Enter notification content here..." className="form-input h-auto p-3" />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button type="button" onClick={() => setShowModal(false)} className="px-4 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Cancel</button>
                  <button type="submit" className="px-5 h-10 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-extrabold flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Broadcast Now</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
