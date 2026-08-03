import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { SidebarParent } from '../../components/layout/SidebarParent';
import { mockParentUser } from '../../data/parentData';
import { User, Save, CheckCircle2 } from 'lucide-react';

export const ChildProfile = ({ setActivePage, setActivePortal }) => {
  const { activeConfig } = useTheme();

  const [child, setChild] = useState(mockParentUser.child);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
      <SidebarParent activePage="child-profile" setActivePage={setActivePage} setActivePortal={setActivePortal} />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Child Talent Profile & Behavior Log</h1>
            <p className="text-xs text-slate-500">Milestone parameters evaluated by certified teachers</p>
          </div>
          {saved && <span className="text-xs font-bold text-emerald-600">✓ Profile updated!</span>}
        </div>

        <form onSubmit={handleSave} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4 max-w-2xl text-xs shadow-sm w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Child Full Name</label>
              <input type="text" value={child.name} onChange={(e) => setChild({ ...child, name: e.target.value })} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Exact Age</label>
              <input type="text" value={child.age} onChange={(e) => setChild({ ...child, age: e.target.value })} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Age Milestone Group</label>
              <input type="text" value={child.ageGroup} onChange={(e) => setChild({ ...child, ageGroup: e.target.value })} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Enrolled School</label>
              <input type="text" value={child.schoolName} onChange={(e) => setChild({ ...child, schoolName: e.target.value })} className="w-full py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200" />
            </div>
          </div>

          <button type="submit" className={`w-full sm:w-auto px-6 py-2.5 ${activeConfig.cardRadius} text-xs font-extrabold ${activeConfig.buttonPrimary}`}>
            Save Child Profile
          </button>
        </form>
      </div>
    </div>
  );
};
