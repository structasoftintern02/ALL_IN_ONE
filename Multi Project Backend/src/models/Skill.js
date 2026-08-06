import { getStore, saveData } from '../config/db.js';

export class SkillModel {
  static getCategories() {
    return getStore().skillCategories || [];
  }

  static getAgePrograms() {
    return getStore().agePrograms || [];
  }

  static addCategory(categoryData) {
    const store = getStore();
    const { title, desc, icon, color } = categoryData;

    const newCategory = {
      id: `skill-${Date.now()}`,
      title,
      desc: desc || '',
      icon: icon || '🎨',
      color: color || 'from-indigo-500 to-purple-600'
    };

    store.skillCategories.push(newCategory);
    saveData();
    return newCategory;
  }

  static updateCategory(id, updateData) {
    const store = getStore();
    const index = store.skillCategories.findIndex(c => c.id === id);
    if (index === -1) return null;

    store.skillCategories[index] = { ...store.skillCategories[index], ...updateData };
    saveData();
    return store.skillCategories[index];
  }

  static getHomeCms() {
    return getStore().homeCms || {};
  }

  static updateHomeCms(data) {
    const store = getStore();
    store.homeCms = { ...store.homeCms, ...data };
    saveData();
    return store.homeCms;
  }
}
