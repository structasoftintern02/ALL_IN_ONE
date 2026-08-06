import { Router } from 'express';
import { 
  getChildren, getChildById, createChild, updateChild, deleteChild 
} from '../controllers/child.controller.js';

const router = Router();

router.get('/', getChildren);
router.get('/:id', getChildById);
router.post('/', createChild);
router.put('/:id', updateChild);
router.delete('/:id', deleteChild);

export default router;
