import { SchoolModel } from '../models/School.js';

export const getSchools = (req, res) => {
  const pendingSchools = SchoolModel.findAllPending();
  res.json({ success: true, count: pendingSchools.length, data: pendingSchools });
};

export const handleSchoolAction = (req, res) => {
  const { action } = req.body;
  const schoolId = req.params.id;

  const school = SchoolModel.handleAction(schoolId, action);
  if (!school) {
    return res.status(404).json({ success: false, error: 'School request not found' });
  }

  res.json({ success: true, message: `School accreditation request ${action}d successfully`, data: school });
};
