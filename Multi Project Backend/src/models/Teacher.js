import { getStore, saveData } from '../config/db.js';

export class TeacherModel {
  static findAllPending() {
    return getStore().pendingTeachers || [];
  }

  static findById(id) {
    const teachers = this.findAllPending();
    return teachers.find(t => t.id === id);
  }

  static handleAction(id, action) {
    const store = getStore();
    const teacher = store.pendingTeachers.find(t => t.id === id);
    if (!teacher) return null;

    store.pendingTeachers = store.pendingTeachers.filter(t => t.id !== id);

    if (action === 'approve') {
      store.activities.unshift({
        id: Date.now(),
        type: 'verification',
        message: `Approved teacher ${teacher.name}`,
        time: 'Just now',
        icon: '🎓'
      });
    }

    saveData();
    return teacher;
  }
}
