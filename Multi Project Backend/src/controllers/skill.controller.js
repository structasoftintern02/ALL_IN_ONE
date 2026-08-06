import { SkillModel } from '../models/Skill.js';

export const getSkills = (req, res) => {
  res.json({
    success: true,
    data: {
      categories: SkillModel.getCategories(),
      agePrograms: SkillModel.getAgePrograms()
    }
  });
};

export const addCategory = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ success: false, error: 'Category title is required' });
  }

  const newCategory = SkillModel.addCategory(req.body);
  res.status(201).json({ success: true, data: newCategory });
};

export const updateCategory = (req, res) => {
  const updatedCategory = SkillModel.updateCategory(req.params.id, req.body);
  if (!updatedCategory) {
    return res.status(404).json({ success: false, error: 'Skill category not found' });
  }
  res.json({ success: true, data: updatedCategory });
};

export const getCms = (req, res) => {
  res.json(SkillModel.getHomeCms());
};

export const updateCms = (req, res) => {
  const updated = SkillModel.updateHomeCms(req.body);
  res.json(updated);
};
