import { ParentModel } from '../models/Parent.js';

export const getParents = (req, res) => {
  const parents = ParentModel.findAll();
  res.json({ success: true, count: parents.length, data: parents });
};

export const getParentById = (req, res) => {
  const parent = ParentModel.findById(req.params.id);
  if (!parent) {
    return res.status(404).json({ success: false, error: 'Parent not found' });
  }
  res.json({ success: true, data: parent });
};

export const createParent = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, error: 'Name and email are required' });
  }

  const newParent = ParentModel.create(req.body);
  res.status(201).json({ success: true, data: newParent });
};

export const updateParent = (req, res) => {
  const updatedParent = ParentModel.update(req.params.id, req.body);
  if (!updatedParent) {
    return res.status(404).json({ success: false, error: 'Parent not found' });
  }
  res.json({ success: true, data: updatedParent });
};

export const deleteParent = (req, res) => {
  const success = ParentModel.delete(req.params.id);
  if (!success) {
    return res.status(404).json({ success: false, error: 'Parent not found' });
  }
  res.json({ success: true, message: 'Parent deleted successfully' });
};
