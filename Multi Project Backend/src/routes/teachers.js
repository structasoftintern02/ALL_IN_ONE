import { Router } from 'express';
import { getTeachers, handleTeacherAction } from '../controllers/teacher.controller.js';

const router = Router();

router.get('/', getTeachers);
router.post('/:id/action', handleTeacherAction);

export default router;
