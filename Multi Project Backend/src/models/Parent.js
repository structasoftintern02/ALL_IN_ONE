import { getStore, saveData } from '../config/db.js';

export class ParentModel {
  static findAll() {
    return getStore().parents || [];
  }

  static findById(id) {
    const parents = this.findAll();
    return parents.find(p => p.id === id);
  }

  static create(parentData) {
    const store = getStore();
    const { name, email, phone, city, childrenCount, subscription } = parentData;

    const newParent = {
      id: `PAR-${Date.now().toString().slice(-3)}`,
      name,
      email,
      phone: phone || '+91 98000 00000',
      city: city || 'New Delhi',
      childrenCount: Number(childrenCount) || 1,
      children: Number(childrenCount) || 1,
      subscription: subscription || 'Basic',
      totalSpent: '₹0',
      status: 'Active',
      joinDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      avatar: (name || 'PA').split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    };

    store.parents.unshift(newParent);
    saveData();
    return newParent;
  }

  static update(id, updateData) {
    const store = getStore();
    const index = store.parents.findIndex(p => p.id === id);
    if (index === -1) return null;

    store.parents[index] = { ...store.parents[index], ...updateData };
    saveData();
    return store.parents[index];
  }

  static delete(id) {
    const store = getStore();
    const initialLength = store.parents.length;
    store.parents = store.parents.filter(p => p.id !== id);
    if (store.parents.length !== initialLength) {
      saveData();
      return true;
    }
    return false;
  }
}
