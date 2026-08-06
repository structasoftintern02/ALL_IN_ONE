import { getStore, saveData } from '../config/db.js';

export class ChildModel {
  static findAll() {
    return getStore().children || [];
  }

  static findById(id) {
    const children = this.findAll();
    return children.find(c => c.id === id);
  }

  static create(childData) {
    const store = getStore();
    const { childName, parentName, age, ageGroup, school, program, status } = childData;

    const initials = (childName || 'Child').split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const newChild = {
      id: `ENR-${Date.now().toString().slice(-4)}`,
      childName,
      name: childName,
      parentName,
      parent: parentName,
      age: age || '5 yrs',
      ageGroup: ageGroup || '5–7',
      school: school || 'General Public School',
      program: program || 'Skill Assessment',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: status || 'Active',
      avatar: initials || 'CS',
      assessments: 1
    };

    store.children.unshift(newChild);
    saveData();
    return newChild;
  }

  static update(id, updateData) {
    const store = getStore();
    const index = store.children.findIndex(c => c.id === id);
    if (index === -1) return null;

    store.children[index] = { ...store.children[index], ...updateData };
    saveData();
    return store.children[index];
  }

  static delete(id) {
    const store = getStore();
    const initialLength = store.children.length;
    store.children = store.children.filter(c => c.id !== id);
    if (store.children.length !== initialLength) {
      saveData();
      return true;
    }
    return false;
  }
}
