import { Router } from 'express';
import { getCms, updateCms } from '../controllers/skill.controller.js';

const router = Router();

router.get('/home', getCms);
router.put('/home', updateCms);

router.get('/child-talent', getCms);
router.post('/child-talent', updateCms);

export default router;
