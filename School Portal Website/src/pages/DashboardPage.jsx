import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpenCheck, DoorClosed, GraduationCap, IndianRupee, 
  TrendingUp, Clock, Plus, ArrowUpRight, CheckCircle2, AlertCircle, 
  Calendar, ShieldCheck, Users, Sparkles
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar 
} from 'recharts';
import { useSchool } from '../context/SchoolContext';

const revenueChartData = [
  { month: 'Jan', revenue: 42000, rental: 28000 },
  { month: 'Feb', revenue: 58000, rental: 38000 },
  { month: 'Mar', revenue: 75000, rental: 52000 },
  { month: 'Apr', revenue: 92000, rental: 64000 },
  { month: 'May', revenue: 110000, rental: 78000 },
  { month: 'Jun', revenue: 128000, rental: 91000 },
  { month: 'Jul', revenue: 142500, rental: 104250 },
];

const classroomUtilizationData = [
  { name: 'Alpha Room (A-201)', utilization: 85 },
  { name: 'STEM Lab (B-104)', utilization: 92 },
  { name: 'Creative Studio (C-302)', utilization: 60 },
  { name: 'Debate Hall (A-108)', utilization: 75 },
];

export const DashboardPage = ({ onOpenAddClassroom }) => {
  const { schoolProfile, classrooms, csfPrograms, enrollments, revenueStats, setActivePage } = useSchool();

  const totalClassrooms = classrooms.length;
  const availableClassrooms = classrooms.filter(c => c.status === 'Available').length;
  const reservedClassrooms = classrooms.filter(c => c.status === 'Reserved' || c.status === 'Occupied').length;
  const totalStudents = enrollments.length;

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Top Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-black backdrop-blur-md border border-white/20">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>CSF Official School Partner Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Welcome back, {schoolProfile.name}! 🏫
            </h1>
            <p className="text-sm text-blue-100 font-medium leading-relaxed">
              Track classroom bookings, Child Skill Foundation program earnings, student enrollments, and weekly teacher schedules in one enterprise dashboard.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <button
              onClick={onOpenAddClassroom}
              className="px-4 py-2.5 rounded-xl bg-white text-blue-900 font-extrabold text-xs hover:bg-blue-50 transition-all flex items-center gap-2 shadow-lg hover:scale-105"
            >
              <Plus className="w-4 h-4" />
              <span>List New Classroom</span>
            </button>
            <button
              onClick={() => setActivePage('foundation-programs')}
              className="px-4 py-2.5 rounded-xl bg-blue-900/60 text-white font-extrabold text-xs border border-white/20 hover:bg-blue-900 transition-colors flex items-center gap-2"
            >
              <BookOpenCheck className="w-4 h-4" />
              <span>View CSF Programs</span>
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Cards Grid (10 Executive Metrics) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Card 1: Active Programs */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Active Programs</span>
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <BookOpenCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-slate-900 dark:text-white">{csfPrograms.length}</div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +2 this month
            </div>
          </div>
        </div>

        {/* Card 2: Classroom Stats */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Total Classrooms</span>
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
              <DoorClosed className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-slate-900 dark:text-white">{totalClassrooms}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold mt-1">
              {reservedClassrooms} Reserved • {availableClassrooms} Available
            </div>
          </div>
        </div>

        {/* Card 3: Total Enrolled Students */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Total Students</span>
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-slate-900 dark:text-white">65</div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold mt-1">
              100% Parent Invited
            </div>
          </div>
        </div>

        {/* Card 4: Total Revenue Earned */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Partner Earnings</span>
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <IndianRupee className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-amber-500">₹{revenueStats.totalEarnings.toLocaleString()}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold mt-1">
              15% Comm + Rental
            </div>
          </div>
        </div>

        {/* Card 5: Pending Payments */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Pending Payout</span>
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-rose-500">₹{revenueStats.pendingPayments.toLocaleString()}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold mt-1">
              Next Payout: {revenueStats.upcomingPayoutDate}
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart 1: Revenue & Rental Income Trend */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">Monthly Partner Revenue Trend</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Combined 15% Program Commission + Classroom Weekly Rentals</p>
            </div>
            <button 
              onClick={() => setActivePage('revenue')}
              className="text-xs font-extrabold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>View Financial Ledger</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueChartData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRental" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                <XAxis dataKey="month" stroke="#94A3B8" fontSize={11} tickLine={false} />
                <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} tickFormatter={(v) => `₹${v/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }} 
                  formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']}
                />
                <Area type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" name="Total Earnings" />
                <Area type="monotone" dataKey="rental" stroke="#14B8A6" strokeWidth={2} fillOpacity={1} fill="url(#colorRental)" name="Classroom Rental" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Classroom Utilization % */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white">Classroom Utilization</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Weekly occupancy rate across listed spaces</p>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={classroomUtilizationData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} horizontal={false} />
                <XAxis type="number" domain={[0, 100]} stroke="#94A3B8" fontSize={11} tickFormatter={(v) => `${v}%`} />
                <YAxis dataKey="name" type="category" stroke="#94A3B8" fontSize={10} width={100} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0F172A', borderRadius: '12px', color: '#fff', fontSize: '12px' }} />
                <Bar dataKey="utilization" fill="#8B5CF6" radius={[0, 8, 8, 0]} name="Occupancy %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Two Column Section: Active Programs & Weekly Schedule Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Listed Classrooms Status */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <DoorClosed className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-black text-slate-900 dark:text-white">Classroom Infrastructure Status</h3>
            </div>
            <button 
              onClick={() => setActivePage('classrooms')}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Manage All
            </button>
          </div>

          <div className="space-y-3">
            {classrooms.map(c => (
              <div key={c.id} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img src={c.image} alt={c.name} className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <div className="text-xs font-black text-slate-900 dark:text-white">{c.name} ({c.roomNumber})</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Cap: {c.capacity} • {c.ageGroup}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black ${
                    c.status === 'Available' ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30' :
                    c.status === 'Reserved' ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30' :
                    'bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30'
                  }`}>
                    {c.status}
                  </span>
                  <div className="text-xs font-extrabold text-amber-500 mt-1">₹{c.rentalPrice.toLocaleString()}/wk</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Foundation Published Programs */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <BookOpenCheck className="w-5 h-5 text-purple-600" />
              <h3 className="text-base font-black text-slate-900 dark:text-white">Published CSF Programs</h3>
            </div>
            <button 
              onClick={() => setActivePage('foundation-programs')}
              className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline"
            >
              Explore All
            </button>
          </div>

          <div className="space-y-3">
            {csfPrograms.map(p => (
              <div key={p.id} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img src={p.banner} alt={p.title} className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <div className="text-xs font-black text-slate-900 dark:text-white leading-tight">{p.title}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{p.schedule}</div>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <div className="text-xs font-black text-slate-900 dark:text-white">₹{p.fee}/student</div>
                  <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">15% Commission + Rent</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
