import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  skillCategories as staticCategories, 
  agePrograms as staticPrograms, 
  statsData as staticStats 
} from '../data/talentData';
import { fetchPublicOverview } from '../services/api';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [skillCategories, setSkillCategories] = useState(staticCategories);
  const [agePrograms, setAgePrograms] = useState(staticPrograms);
  const [statsData, setStatsData] = useState(staticStats);
  const [childrenList, setChildrenList] = useState([]);
  const [homeCms, setHomeCms] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDynamicData = async () => {
      setLoading(true);
      const overview = await fetchPublicOverview();
      if (overview) {
        if (overview.homeCms) {
          setHomeCms(overview.homeCms);
        }
        if (overview.skillCategories && overview.skillCategories.length > 0) {
          setSkillCategories(overview.skillCategories.map(c => ({
            id: c.id,
            title: c.title || c.name,
            icon: c.icon || '🧠',
            color: c.color || 'from-purple-500 to-indigo-600',
            desc: c.desc || 'Comprehensive skill diagnostic and identification module.',
            keyMetrics: c.keyMetrics || ['Diagnostic Focus', 'Skill Identification', 'Progress Tracking'],
            recommendedActivities: c.recommendedActivities || ['Guided Activities', 'Interactive Assessments']
          })));
        }
        if (overview.children) {
          setChildrenList(overview.children);
        }
        if (overview.stats) {
          setStatsData([
            { label: 'Children Mapped', value: overview.stats.totalChildren?.value || 28450, suffix: '+', icon: '👶', color: 'text-purple-500' },
            { label: 'Parent Rating', value: 4.9, suffix: ' / 5', decimal: true, icon: '⭐', color: 'text-amber-500' },
            { label: 'Skill Domains', value: overview.skillCategories?.length || 12, suffix: ' Areas', icon: '🎨', color: 'text-rose-500' },
            { label: 'Accuracy Score', value: 98, suffix: '%', icon: '🎯', color: 'text-emerald-500' }
          ]);
        }
      }
      setLoading(false);
    };

    loadDynamicData();
  }, []);

  return (
    <DataContext.Provider value={{
      skillCategories,
      agePrograms,
      statsData,
      childrenList,
      homeCms,
      loading
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
