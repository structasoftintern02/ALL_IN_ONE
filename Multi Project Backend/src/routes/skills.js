import { Router } from 'express';
import { getSkills, addCategory, updateCategory } from '../controllers/skill.controller.js';

const router = Router();

router.get('/', getSkills);
router.post('/categories', addCategory);
router.put('/categories/:id', updateCategory);

export default router;
