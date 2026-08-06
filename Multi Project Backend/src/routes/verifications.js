import { Router } from 'express';
import { handleTeacherAction, getTeachers } from '../controllers/teacher.controller.js';
import { handleSchoolAction, getSchools } from '../controllers/school.controller.js';

const router = Router();

router.get('/', (req, res) => {
  const pendingTeachers = getTeachers;
  res.json({
    success: true,
    data: {
      pendingTeachers: getTeachers ? req.app.get('store')?.pendingTeachers || [] : [],
      pendingSchools: req.app.get('store')?.pendingSchools || []
    }
  });
});

router.post('/teachers/:id/action', handleTeacherAction);
router.post('/schools/:id/action', handleSchoolAction);

export default router;
