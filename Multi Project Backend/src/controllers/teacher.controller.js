import { TeacherModel } from '../models/Teacher.js';

export const getTeachers = (req, res) => {
  const pendingTeachers = TeacherModel.findAllPending();
  res.json({ success: true, count: pendingTeachers.length, data: pendingTeachers });
};

export const handleTeacherAction = (req, res) => {
  const { action } = req.body;
  const teacherId = req.params.id;

  const teacher = TeacherModel.handleAction(teacherId, action);
  if (!teacher) {
    return res.status(404).json({ success: false, error: 'Teacher request not found' });
  }

  res.json({ success: true, message: `Teacher request ${action}d successfully`, data: teacher });
};
