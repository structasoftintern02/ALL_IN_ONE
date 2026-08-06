const API_BASE_URL = 'http://localhost:5000/api';

export const fetchPublicOverview = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/dashboard/overview`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.warn('Backend API unreachable, using local fallback:', err);
    return null;
  }
};

export const fetchSkillCategoriesApi = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/skills`);
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error('Fetch skills error:', err);
    return null;
  }
};

export const fetchChildrenApi = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/children`);
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error('Fetch children error:', err);
    return null;
  }
};
