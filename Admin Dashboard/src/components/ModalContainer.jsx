import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Baby, Database, Clock, FileText, Check, User, Mail, Phone, MapPin, Building2, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ModalContainer = () => {
  const { activeModal, closeModal, addChild, addCategory, downloadReport, showToast, setScheduledReportsList } = useApp();

  if (!activeModal) return null;

  const { type, data } = activeModal;

  return (
    <AnimatePresence>
      <div 
        style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16
        }}
        onClick={closeModal}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'white', borderRadius: 20, width: '100%', maxWidth: 520,
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden',
            border: '1px solid var(--slate-200)'
          }}
        >
          {/* Add Child Form Modal */}
          {type === 'ADD_CHILD' && <AddChildForm closeModal={closeModal} addChild={addChild} />}

          {/* Add Skill Category Modal */}
          {type === 'ADD_CATEGORY' && <AddCategoryForm closeModal={closeModal} addCategory={addCategory} />}

          {/* Add Schedule Report Modal */}
          {type === 'ADD_SCHEDULE' && <AddScheduleForm closeModal={closeModal} showToast={showToast} setScheduledReportsList={setScheduledReportsList} />}

          {/* View Child Details Modal */}
          {type === 'VIEW_CHILD' && <ViewChildModal child={data} closeModal={closeModal} downloadReport={downloadReport} />}

          {/* View Parent Details Modal */}
          {type === 'VIEW_PARENT' && <ViewParentModal parent={data} closeModal={closeModal} showToast={showToast} />}

          {/* View Teacher Details Modal */}
          {type === 'VIEW_TEACHER' && <ViewTeacherModal teacher={data} closeModal={closeModal} />}

          {/* General Edit Modal */}
          {type === 'EDIT_SETTING' && <EditSettingModal data={data} closeModal={closeModal} showToast={showToast} />}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// ── Form Sub-components ──

const AddChildForm = ({ closeModal, addChild }) => {
  const [form, setForm] = useState({ name: '', age: 4, parent: '', school: 'Delhi Public School', program: 'Sensory & Motor Assessment' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    addChild(form);
    closeModal();
  };

  return (
    <div>
      <div className="card-header">
        <h3><Baby size={20} style={{ color: 'var(--primary)' }} /> Add New Child Enrollment</h3>
        <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}><X size={18} /></button>
      </div>
      <form onSubmit={handleSubmit} className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', display: 'block', marginBottom: 4 }}>Child Full Name *</label>
          <input 
            type="text" required placeholder="e.g. Riaan Sharma" 
            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-300)', fontSize: 13 }}
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', display: 'block', marginBottom: 4 }}>Age (Years)</label>
            <input 
              type="number" min="3" max="10" required 
              value={form.age} onChange={e => setForm({ ...form, age: e.target.value })}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-300)', fontSize: 13 }}
            />
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', display: 'block', marginBottom: 4 }}>Parent Name</label>
            <input 
              type="text" required placeholder="Parent Name" 
              value={form.parent} onChange={e => setForm({ ...form, parent: e.target.value })}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-300)', fontSize: 13 }}
            />
          </div>
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', display: 'block', marginBottom: 4 }}>School Name</label>
          <select 
            value={form.school} onChange={e => setForm({ ...form, school: e.target.value })}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-300)', fontSize: 13, background: 'white' }}
          >
            <option>Delhi Public School</option>
            <option>Ryan International</option>
            <option>Greenwood High</option>
            <option>Orchids International</option>
            <option>Amity Global School</option>
            <option>The Heritage School</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', display: 'block', marginBottom: 4 }}>Program</label>
          <select 
            value={form.program} onChange={e => setForm({ ...form, program: e.target.value })}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-300)', fontSize: 13, background: 'white' }}
          >
            <option>Sensory & Motor Assessment</option>
            <option>Language & Phonetic Explorer</option>
            <option>Creative Logic & Pattern Identification</option>
            <option>Visual Arts & Emotional Expression</option>
            <option>Junior Robotics & Algorithmic Thinking</option>
            <option>Musical Pitch & Rhythm Acoustics</option>
          </select>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 10 }}>
          <button type="button" className="btn btn-outline" onClick={closeModal}>Cancel</button>
          <button type="submit" className="btn btn-primary"><Baby size={14} /> Enroll Child</button>
        </div>
      </form>
    </div>
  );
};

const AddCategoryForm = ({ closeModal, addCategory }) => {
  const [form, setForm] = useState({ name: '', icon: '🧠', count: 12 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    addCategory(form);
    closeModal();
  };

  return (
    <div>
      <div className="card-header">
        <h3><Database size={20} style={{ color: 'var(--purple)' }} /> Add Skill Category</h3>
        <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}><X size={18} /></button>
      </div>
      <form onSubmit={handleSubmit} className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', display: 'block', marginBottom: 4 }}>Category Name *</label>
          <input 
            type="text" required placeholder="e.g. Algorithmic & Spatial Logic" 
            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-300)', fontSize: 13 }}
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', display: 'block', marginBottom: 4 }}>Icon Emoji</label>
            <input 
              type="text" required 
              value={form.icon} onChange={e => setForm({ ...form, icon: e.target.value })}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-300)', fontSize: 13 }}
            />
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', display: 'block', marginBottom: 4 }}>Programs Count</label>
            <input 
              type="number" min="1" required 
              value={form.count} onChange={e => setForm({ ...form, count: e.target.value })}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-300)', fontSize: 13 }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 10 }}>
          <button type="button" className="btn btn-outline" onClick={closeModal}>Cancel</button>
          <button type="submit" className="btn btn-primary"><Check size={14} /> Save Category</button>
        </div>
      </form>
    </div>
  );
};

const AddScheduleForm = ({ closeModal, showToast, setScheduledReportsList }) => {
  const [form, setForm] = useState({ name: 'Bi-Weekly Talent Audit', frequency: 'Every 14 days, 10:00 AM', recipients: 'analytics@ecsip.in' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setScheduledReportsList(prev => [...prev, { ...form, status: 'Active' }]);
    showToast(`Scheduled "${form.name}" successfully!`, 'success');
    closeModal();
  };

  return (
    <div>
      <div className="card-header">
        <h3><Clock size={20} style={{ color: 'var(--emerald)' }} /> Schedule Automatic Report</h3>
        <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}><X size={18} /></button>
      </div>
      <form onSubmit={handleSubmit} className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', display: 'block', marginBottom: 4 }}>Report Title</label>
          <input 
            type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-300)', fontSize: 13 }}
          />
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', display: 'block', marginBottom: 4 }}>Frequency & Time</label>
          <input 
            type="text" required value={form.frequency} onChange={e => setForm({ ...form, frequency: e.target.value })}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-300)', fontSize: 13 }}
          />
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', display: 'block', marginBottom: 4 }}>Recipients (Comma separated)</label>
          <input 
            type="text" required value={form.recipients} onChange={e => setForm({ ...form, recipients: e.target.value })}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-300)', fontSize: 13 }}
          />
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 10 }}>
          <button type="button" className="btn btn-outline" onClick={closeModal}>Cancel</button>
          <button type="submit" className="btn btn-primary"><Clock size={14} /> Save Schedule</button>
        </div>
      </form>
    </div>
  );
};

const ViewChildModal = ({ child, closeModal, downloadReport }) => {
  if (!child) return null;
  return (
    <div>
      <div className="card-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="table-avatar" style={{ background: 'linear-gradient(135deg, var(--primary), var(--purple))', width: 40, height: 40, fontSize: 14 }}>
            {child.avatar}
          </div>
          <div>
            <h3 style={{ fontSize: 16 }}>{child.name}</h3>
            <span style={{ fontSize: 11, color: 'var(--slate-500)' }}>{child.id} • {child.age} Years</span>
          </div>
        </div>
        <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}><X size={18} /></button>
      </div>
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Parent Name</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-900)', marginTop: 2 }}>{child.parent}</div>
          </div>
          <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Age Group Plan</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--primary)', marginTop: 2 }}>{child.ageGroup} Years</div>
          </div>
          <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Empaneled School</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-900)', marginTop: 2 }}>{child.school}</div>
          </div>
          <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Active Program</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-900)', marginTop: 2 }}>{child.program}</div>
          </div>
        </div>

        <div style={{ padding: 14, background: 'rgba(16,185,129,0.06)', borderRadius: 12, border: '1px solid rgba(16,185,129,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--emerald)' }}>Diagnostic Assessment Progress</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--slate-900)' }}>{child.assessments || 3} Diagnostic Modules Completed</div>
          </div>
          <span className="badge active">Certified</span>
        </div>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 6 }}>
          <button className="btn btn-outline" onClick={closeModal}>Close</button>
          <button className="btn btn-primary" onClick={() => { downloadReport(`${child.name}_Diagnostic_Report`, 'PDF'); closeModal(); }}>
            <FileText size={14} /> Export Diagnostic PDF
          </button>
        </div>
      </div>
    </div>
  );
};

const ViewParentModal = ({ parent, closeModal, showToast }) => {
  if (!parent) return null;
  return (
    <div>
      <div className="card-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="table-avatar" style={{ background: 'linear-gradient(135deg, var(--blue), var(--primary))', width: 40, height: 40, fontSize: 14 }}>
            {parent.avatar}
          </div>
          <div>
            <h3 style={{ fontSize: 16 }}>{parent.name}</h3>
            <span style={{ fontSize: 11, color: 'var(--slate-500)' }}>{parent.id} • {parent.subscription} Plan</span>
          </div>
        </div>
        <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}><X size={18} /></button>
      </div>
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Email Address</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-900)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}><Mail size={12} /> {parent.email}</div>
          </div>
          <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Phone Number</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-900)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}><Phone size={12} /> {parent.phone}</div>
          </div>
          <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Children Enrolled</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--primary)', marginTop: 2 }}>{parent.children} Children</div>
          </div>
          <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Total Spent</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--emerald)', marginTop: 2 }}>{parent.totalSpent}</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 6 }}>
          <button className="btn btn-outline" onClick={closeModal}>Close</button>
          <button className="btn btn-primary" onClick={() => { showToast(`Email notification sent to ${parent.email}`, 'info'); closeModal(); }}>
            <Mail size={14} /> Send Email Notification
          </button>
        </div>
      </div>
    </div>
  );
};

const ViewTeacherModal = ({ teacher, closeModal }) => {
  if (!teacher) return null;
  return (
    <div>
      <div className="card-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="table-avatar" style={{ background: 'linear-gradient(135deg, var(--purple), var(--pink))', width: 40, height: 40, fontSize: 14 }}>
            {teacher.avatar}
          </div>
          <div>
            <h3 style={{ fontSize: 16 }}>{teacher.name}</h3>
            <span style={{ fontSize: 11, color: 'var(--purple)', fontWeight: 700 }}>{teacher.specialization}</span>
          </div>
        </div>
        <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}><X size={18} /></button>
      </div>
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10 }}>
          <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Certification</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-900)', marginTop: 2 }}>{teacher.cert}</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Teaching Experience</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-900)', marginTop: 2 }}>{teacher.experience}</div>
          </div>
          <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Platform Rating</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--amber)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
              <Star size={14} style={{ fill: 'var(--amber)' }} /> {teacher.rating} / 5.0
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 6 }}>
          <button className="btn btn-outline" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

const EditSettingModal = ({ data, closeModal, showToast }) => {
  const [val, setVal] = useState(data?.currentValue || '');

  const handleSave = (e) => {
    e.preventDefault();
    showToast(`Updated ${data?.title || 'Setting'} to "${val}"`, 'success');
    closeModal();
  };

  return (
    <div>
      <div className="card-header">
        <h3>Edit {data?.title || 'Setting'}</h3>
        <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}><X size={18} /></button>
      </div>
      <form onSubmit={handleSave} className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-700)', display: 'block', marginBottom: 4 }}>Value</label>
          <input 
            type="text" required value={val} onChange={e => setVal(e.target.value)}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid var(--slate-300)', fontSize: 13 }}
          />
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 6 }}>
          <button type="button" className="btn btn-outline" onClick={closeModal}>Cancel</button>
          <button type="submit" className="btn btn-primary"><Check size={14} /> Update</button>
        </div>
      </form>
    </div>
  );
};
