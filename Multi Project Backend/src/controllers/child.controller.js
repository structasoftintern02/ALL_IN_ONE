import { ChildModel } from '../models/Child.js';

export const getChildren = (req, res) => {
  const children = ChildModel.findAll();
  res.json({ success: true, count: children.length, data: children });
};

export const getChildById = (req, res) => {
  const child = ChildModel.findById(req.params.id);
  if (!child) {
    return res.status(404).json({ success: false, error: 'Child not found' });
  }
  res.json({ success: true, data: child });
};

export const createChild = (req, res) => {
  const { childName, parentName } = req.body;
  if (!childName || !parentName) {
    return res.status(400).json({ success: false, error: 'childName and parentName are required' });
  }

  const newChild = ChildModel.create(req.body);
  res.status(201).json({ success: true, data: newChild });
};

export const updateChild = (req, res) => {
  const updatedChild = ChildModel.update(req.params.id, req.body);
  if (!updatedChild) {
    return res.status(404).json({ success: false, error: 'Child not found' });
  }
  res.json({ success: true, data: updatedChild });
};

export const deleteChild = (req, res) => {
  const success = ChildModel.delete(req.params.id);
  if (!success) {
    return res.status(404).json({ success: false, error: 'Child not found' });
  }
  res.json({ success: true, message: 'Child deleted successfully' });
};
