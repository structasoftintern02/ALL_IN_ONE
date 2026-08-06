import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, Star, Building2, User, Mail, Phone, MapPin, ShieldCheck, GraduationCap } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ModalContainer = () => {
  const { activeModal, closeModal, showToast, navTo } = useApp();

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
            background: 'white', borderRadius: 20, width: '100%', maxWidth: 540,
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden',
            border: '1px solid var(--slate-200)'
          }}
        >
          {type === 'ENROLL_STUDENT' && <EnrollStudentModal closeModal={closeModal} showToast={showToast} navTo={navTo} />}
          {type === 'SCHEDULE_SESSION' && <ScheduleSessionModal closeModal={closeModal} showToast={showToast} navTo={navTo} />}
          {type === 'VIEW_TEACHER' && <ViewTeacherModal teacher={data} closeModal={closeModal} showToast={showToast} />}
          {type === 'VIEW_SCHOOL' && <ViewSchoolModal school={data} closeModal={closeModal} navTo={navTo} />}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const EnrollStudentModal = ({ closeModal, showToast, navTo }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(5);
  const [program, setProgram] = useState('Early Observation & Play');

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast(`Enrolled student ${name} in ${program}!`, 'success');
    closeModal();
    navTo('student-enrollment');
  };

  return (
    <div>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--slate-100)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--slate-900)' }}>Enroll Student in Program</h3>
        <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}><X size={18} /></button>
      </div>
      <form onSubmit={handleSubmit} style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Student Full Name *</label>
          <input type="text" required placeholder="e.g. Aarav Sharma" value={name} onChange={e => setName(e.target.value)} className="form-input" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Age (Years)</label>
            <input type="number" min="3" max="10" value={age} onChange={e => setAge(e.target.value)} className="form-input" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Target Program</label>
            <select value={program} onChange={e => setProgram(e.target.value)} className="form-select">
              <option>Early Observation & Play (3-5 yrs)</option>
              <option>Cognitive Talent Explorer (5-7 yrs)</option>
              <option>Advanced STEM & Robotics (7-10 yrs)</option>
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 10 }}>
          <button type="button" className="btn btn-outline btn-sm" onClick={closeModal}>Cancel</button>
          <button type="submit" className="btn btn-primary btn-sm"><Check size={14} /> Submit Enrollment</button>
        </div>
      </form>
    </div>
  );
};

const ScheduleSessionModal = ({ closeModal, showToast, navTo }) => {
  const [title, setTitle] = useState('Sensory & Fine Motor Baseline Testing');
  const [date, setDate] = useState('2026-08-15');
  const [time, setTime] = useState('10:00 AM');

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast(`Session "${title}" scheduled for ${date} at ${time}!`, 'success');
    closeModal();
    navTo('session-scheduling');
  };

  return (
    <div>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--slate-100)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--slate-900)' }}>Schedule Diagnostic Session</h3>
        <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}><X size={18} /></button>
      </div>
      <form onSubmit={handleSubmit} style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Session Title</label>
          <input type="text" required value={title} onChange={e => setTitle(e.target.value)} className="form-input" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Date</label>
            <input type="date" required value={date} onChange={e => setDate(e.target.value)} className="form-input" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Time Slot</label>
            <input type="text" required value={time} onChange={e => setTime(e.target.value)} className="form-input" />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 10 }}>
          <button type="button" className="btn btn-outline btn-sm" onClick={closeModal}>Cancel</button>
          <button type="submit" className="btn btn-accent btn-sm"><Calendar size={14} /> Confirm Schedule</button>
        </div>
      </form>
    </div>
  );
};

const ViewTeacherModal = ({ teacher, closeModal, showToast }) => {
  if (!teacher) return null;
  return (
    <div>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--slate-100)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={teacher.photo} alt={teacher.name} style={{ width: 44, height: 44, borderRadius: 12, objectFit: 'cover' }} />
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--slate-900)' }}>{teacher.name}</h3>
            <span style={{ fontSize: 11, color: 'var(--primary)', fontWeight: 700 }}>{teacher.role}</span>
          </div>
        </div>
        <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}><X size={18} /></button>
      </div>
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Experience</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-900)', marginTop: 2 }}>{teacher.experience}</div>
          </div>
          <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Rating</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--amber)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
              <Star size={14} style={{ fill: 'var(--amber)' }} /> {teacher.rating} / 5.0
            </div>
          </div>
        </div>
        <div style={{ padding: 12, background: 'var(--slate-50)', borderRadius: 10 }}>
          <div style={{ fontSize: 10, color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Certifications</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--slate-800)', marginTop: 4 }}>{teacher.certifications.join(' • ')}</div>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 10 }}>
          <button className="btn btn-outline btn-sm" onClick={closeModal}>Close</button>
          <button className="btn btn-primary btn-sm" onClick={() => { showToast(`Requested session assignment with ${teacher.name}`, 'info'); closeModal(); }}>
            Assign to School
          </button>
        </div>
      </div>
    </div>
  );
};

const ViewSchoolModal = ({ school, closeModal, navTo }) => {
  if (!school) return null;
  return (
    <div>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--slate-100)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--slate-900)' }}>{school.name}</h3>
        <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--slate-400)' }}><X size={18} /></button>
      </div>
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--slate-500)' }}>
          <MapPin size={14} /> {school.address}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div style={{ padding: 10, background: 'var(--slate-50)', borderRadius: 8 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--slate-500)' }}>Board</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-800)' }}>{school.board}</div>
          </div>
          <div style={{ padding: 10, background: 'var(--slate-50)', borderRadius: 8 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--slate-500)' }}>Status</div>
            <span className="badge badge-green" style={{ marginTop: 2 }}>{school.accreditationStatus}</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 10 }}>
          <button className="btn btn-outline btn-sm" onClick={closeModal}>Close</button>
          <button className="btn btn-primary btn-sm" onClick={() => { closeModal(); navTo('school-profile'); }}>
            View Full Profile
          </button>
        </div>
      </div>
    </div>
  );
};
