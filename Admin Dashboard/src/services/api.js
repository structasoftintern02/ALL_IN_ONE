const API_BASE_URL = 'http://localhost:5000/api';

export const fetchOverview = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/dashboard/overview`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.warn('API unavailable, returning fallback state:', err);
    return null;
  }
};

export const fetchChildren = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/children`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error('Fetch children error:', err);
    return null;
  }
};

export const createChild = async (childData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/children`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(childData)
    });
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error('Create child error:', err);
    return null;
  }
};

export const deleteChildApi = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/children/${id}`, {
      method: 'DELETE'
    });
    const json = await res.json();
    return json.success;
  } catch (err) {
    console.error('Delete child error:', err);
    return false;
  }
};

export const createParent = async (parentData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/parents`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parentData)
    });
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error('Create parent error:', err);
    return null;
  }
};

export const deleteParentApi = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/parents/${id}`, {
      method: 'DELETE'
    });
    const json = await res.json();
    return json.success;
  } catch (err) {
    console.error('Delete parent error:', err);
    return false;
  }
};

export const createSkillCategory = async (catData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/skills/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(catData)
    });
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error('Create skill category error:', err);
    return null;
  }
};

export const actionTeacherVerification = async (id, action) => {
  try {
    const res = await fetch(`${API_BASE_URL}/verifications/teachers/${id}/action`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action })
    });
    const json = await res.json();
    return json.success;
  } catch (err) {
    console.error('Teacher verification error:', err);
    return false;
  }
};

export const actionSchoolVerification = async (id, action) => {
  try {
    const res = await fetch(`${API_BASE_URL}/verifications/schools/${id}/action`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action })
    });
    const json = await res.json();
    return json.success;
  } catch (err) {
    console.error('School verification error:', err);
    return false;
  }
};

export const fetchHomeCms = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/cms/home`);
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error('Fetch home CMS error:', err);
    return null;
  }
};

export const updateHomeCms = async (cmsData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/cms/home`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cmsData)
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error('Update home CMS error:', err);
    return null;
  }
};
