import { getStore, saveData } from '../config/db.js';

export class SchoolModel {
  static findAllPending() {
    return getStore().pendingSchools || [];
  }

  static findById(id) {
    const schools = this.findAllPending();
    return schools.find(s => s.id === id);
  }

  static handleAction(id, action) {
    const store = getStore();
    const school = store.pendingSchools.find(s => s.id === id);
    if (!school) return null;

    store.pendingSchools = store.pendingSchools.filter(s => s.id !== id);

    if (action === 'approve') {
      store.activities.unshift({
        id: Date.now(),
        type: 'school',
        message: `Accredited partner school ${school.name}`,
        time: 'Just now',
        icon: '🏫'
      });
    }

    saveData();
    return school;
  }
}
