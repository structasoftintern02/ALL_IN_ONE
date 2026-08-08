import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DoorClosed, Plus, Grid, List, Calendar as CalendarIcon, 
  Wifi, Tv, Shield, Video, CheckCircle2, AlertCircle, X, Search, Filter
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const ClassroomsPage = ({ isOpenAddModal, onCloseAddModal }) => {
  const { classrooms, addClassroom, setActivePage } = useSchool();
  const [viewMode, setViewMode] = useState('grid'); // grid, list, calendar
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Form State for Add Classroom
  const [formData, setFormData] = useState({
    name: '',
    roomNumber: '',
    capacity: 30,
    maxStudents: 25,
    ageGroup: '5–8 Years',
    rentalPrice: 8000,
    isSmart: true,
    hasAC: true,
    hasProjector: true,
    hasWhiteboard: true,
    hasWifi: true,
    hasCCTV: true,
    type: 'Indoor',
    description: '',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80'
  });

  const filteredClassrooms = classrooms.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.roomNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || c.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.roomNumber.trim()) return;

    const newRoom = {
      id: `CR-${Date.now()}`,
      ...formData,
      status: 'Available'
    };

    addClassroom(newRoom);
    onCloseAddModal();
    setFormData({
      name: '',
      roomNumber: '',
      capacity: 30,
      maxStudents: 25,
      ageGroup: '5–8 Years',
      rentalPrice: 8000,
      isSmart: true,
      hasAC: true,
      hasProjector: true,
      hasWhiteboard: true,
      hasWifi: true,
      hasCCTV: true,
      type: 'Indoor',
      description: '',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80'
    });
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <DoorClosed className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Classroom Infrastructure</h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            List and manage physical classroom spaces available for Child Skill Foundation weekly program bookings.
          </p>
        </div>

        <button
          onClick={onCloseAddModal ? () => {} : undefined} // managed in parent App or modal state
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-md self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>List New Classroom</span>
        </button>
      </div>

      {/* Filter Bar & View Toggle */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search & Status Filter */}
        <div className="flex flex-wrap items-center gap-3 flex-1">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by room name or number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-xs font-semibold text-slate-800 dark:text-slate-100 w-full"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
            {['All', 'Available', 'Reserved', 'Occupied', 'Under Maintenance'].map(status => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-colors flex-shrink-0 ${
                  selectedStatus === status
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl self-start md:self-auto">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg text-xs font-bold transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            title="Grid View"
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg text-xs font-bold transition-colors ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            title="List View"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('calendar')}
            className={`p-2 rounded-lg text-xs font-bold transition-colors ${viewMode === 'calendar' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            title="Weekly Calendar View"
          >
            <CalendarIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* View 1: Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClassrooms.map((c) => (
            <div 
              key={c.id}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={c.image} 
                    alt={c.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-black backdrop-blur-md shadow-lg ${
                      c.status === 'Available' ? 'bg-emerald-500/90 text-white' :
                      c.status === 'Reserved' ? 'bg-blue-600/90 text-white' :
                      'bg-purple-600/90 text-white'
                    }`}>
                      {c.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-xl bg-slate-950/80 text-white text-[11px] font-extrabold backdrop-blur-sm">
                    {c.roomNumber}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white leading-tight">{c.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{c.description}</p>
                  </div>

                  {/* Amenities Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {c.isSmart && <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold">⚡ Smart Class</span>}
                    {c.hasAC && <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold">❄️ AC</span>}
                    {c.hasProjector && <span className="px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-400 text-[10px] font-bold">📽️ Projector</span>}
                    {c.hasWifi && <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">📶 WiFi</span>}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-slate-400 font-bold block text-[10px]">Capacity</span>
                      <span className="font-extrabold text-slate-800 dark:text-slate-200">{c.capacity} Seats (Max {c.maxStudents})</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold block text-[10px]">Age Group</span>
                      <span className="font-extrabold text-slate-800 dark:text-slate-200">{c.ageGroup}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Price & Action */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Weekly Rental</span>
                  <span className="text-base font-black text-amber-500">₹{c.rentalPrice.toLocaleString()}<span className="text-xs font-normal text-slate-400">/wk</span></span>
                </div>
                <button
                  onClick={() => setActivePage('foundation-programs')}
                  className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-sm"
                >
                  Assign to Program
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View 2: List View */}
      {viewMode === 'list' && (
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-extrabold uppercase text-[10px]">
                  <th className="py-4 px-6">Classroom Details</th>
                  <th className="py-4 px-4">Room No</th>
                  <th className="py-4 px-4">Capacity</th>
                  <th className="py-4 px-4">Age Group</th>
                  <th className="py-4 px-4">Amenities</th>
                  <th className="py-4 px-4">Weekly Rental</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredClassrooms.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img src={c.image} alt={c.name} className="w-10 h-10 rounded-xl object-cover" />
                        <div>
                          <div className="font-black text-slate-900 dark:text-white">{c.name}</div>
                          <div className="text-[10px] text-slate-400">{c.type} Space</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold">{c.roomNumber}</td>
                    <td className="py-4 px-4 font-bold">{c.capacity} Seats</td>
                    <td className="py-4 px-4 font-bold">{c.ageGroup}</td>
                    <td className="py-4 px-4">
                      <span className="text-[10px] font-bold text-slate-500">
                        {c.isSmart ? '⚡ Smart Board • ' : ''}{c.hasAC ? '❄️ AC' : ''}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-black text-amber-500">₹{c.rentalPrice.toLocaleString()}/wk</td>
                    <td className="py-4 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-black ${
                        c.status === 'Available' ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' : 'bg-blue-500/15 text-blue-600 dark:text-blue-400'
                      }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button 
                        onClick={() => setActivePage('foundation-programs')}
                        className="px-3 py-1.5 rounded-xl bg-blue-600 text-white font-extrabold text-xs"
                      >
                        Book Slot
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* View 3: Calendar View */}
      {viewMode === 'calendar' && (
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">Weekly Classroom Booking Calendar</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">August 2026 CSF Foundation Session Allocations</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-black">
              4 Weeks Active Schedule
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            {/* Week 1 */}
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-black text-blue-600 dark:text-blue-400 uppercase text-[10px]">Week 1 (01-07 Aug)</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-bold">Booked</span>
              </div>
              <div className="font-extrabold text-slate-900 dark:text-white">Junior Robotics</div>
              <div className="text-[11px] text-slate-500">Room: B-104 (STEM Lab)</div>
              <div className="text-[11px] text-slate-500">Teacher: Prof. Ankit Mehta</div>
              <div className="font-black text-amber-500 pt-1">Rental Paid: ₹10,000</div>
            </div>

            {/* Week 2 */}
            <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-black text-purple-600 dark:text-purple-400 uppercase text-[10px]">Week 2 (08-14 Aug)</span>
                <span className="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[9px] font-bold">Booked</span>
              </div>
              <div className="font-extrabold text-slate-900 dark:text-white">Cognitive Mind Mapping</div>
              <div className="text-[11px] text-slate-500">Room: A-201 (Alpha Room)</div>
              <div className="text-[11px] text-slate-500">Teacher: Dr. Sunita Rao</div>
              <div className="font-black text-amber-500 pt-1">Rental Paid: ₹8,500</div>
            </div>

            {/* Week 3 */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-black text-emerald-600 dark:text-emerald-400 uppercase text-[10px]">Week 3 (15-21 Aug)</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-bold">Available</span>
              </div>
              <div className="font-extrabold text-slate-900 dark:text-white">Open Slot</div>
              <div className="text-[11px] text-slate-500">Room: C-302 (Creative Studio)</div>
              <div className="text-[11px] text-slate-400">Ready for upcoming CSF program</div>
              <div className="font-black text-amber-500 pt-1">Est Rent: ₹7,000</div>
            </div>

            {/* Week 4 */}
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-black text-blue-600 dark:text-blue-400 uppercase text-[10px]">Week 4 (22-28 Aug)</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-bold">Booked</span>
              </div>
              <div className="font-extrabold text-slate-900 dark:text-white">Young Authors Academy</div>
              <div className="text-[11px] text-slate-500">Room: A-108 (Debate Hall)</div>
              <div className="text-[11px] text-slate-500">Teacher: Staff Author</div>
              <div className="font-black text-amber-500 pt-1">Rental Paid: ₹12,000</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
