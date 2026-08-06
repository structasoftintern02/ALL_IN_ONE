import { Router } from 'express';
import { getSchools, handleSchoolAction } from '../controllers/school.controller.js';

const router = Router();

router.get('/', getSchools);
router.post('/:id/action', handleSchoolAction);

export default router;
