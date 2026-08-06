import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, '../../data/db.json');

const initialData = {
  platformStats: {
    totalChildren: { value: '28,450', trend: '+12.5%', direction: 'up', label: 'Total Children', color: 'indigo' },
    activeSchools: { value: '342', trend: '+8.2%', direction: 'up', label: 'Active Schools', color: 'blue' },
    certifiedTeachers: { value: '1,248', trend: '+15.3%', direction: 'up', label: 'Certified Teachers', color: 'purple' },
    assessmentsDone: { value: '4,280', trend: '+22.1%', direction: 'up', label: 'Assessments Done', color: 'emerald' },
    monthlyRevenue: { value: '₹18.6L', trend: '+18.7%', direction: 'up', label: 'Monthly Revenue', color: 'amber' },
    activeParents: { value: '12,840', trend: '+9.4%', direction: 'up', label: 'Active Parents', color: 'pink' }
  },
  children: [
    { id: 'CH-001', name: 'Aarav Sharma', age: 4, ageGroup: '3–5', parent: 'Priya Sharma', school: 'DPS, RK Puram', program: 'Sensory & Motor', assessments: 3, status: 'Active', joinDate: '12 Jan 2026', avatar: 'AS' },
    { id: 'CH-002', name: 'Ananya Gupta', age: 6, ageGroup: '5–7', parent: 'Rohit Gupta', school: 'Ryan International', program: 'Creative Logic', assessments: 5, status: 'Active', joinDate: '18 Feb 2026', avatar: 'AG' },
    { id: 'CH-003', name: 'Vihaan Patel', age: 8, ageGroup: '7–10', parent: 'Neha Patel', school: 'Greenwood High', program: 'Junior Robotics', assessments: 4, status: 'Active', joinDate: '05 Mar 2026', avatar: 'VP' },
    { id: 'CH-004', name: 'Diya Reddy', age: 5, ageGroup: '3–5', parent: 'Sanjay Reddy', school: 'Orchids Intl.', program: 'Language & Phonetic', assessments: 2, status: 'Active', joinDate: '22 Mar 2026', avatar: 'DR' },
    { id: 'CH-005', name: 'Arjun Nair', age: 7, ageGroup: '5–7', parent: 'Meera Nair', school: 'Amity Global', program: 'Visual Arts', assessments: 6, status: 'Completed', joinDate: '10 Apr 2026', avatar: 'AN' },
    { id: 'CH-006', name: 'Ishaan Mehta', age: 9, ageGroup: '7–10', parent: 'Kavita Mehta', school: 'Heritage School', program: 'Musical Pitch', assessments: 7, status: 'Active', joinDate: '28 Apr 2026', avatar: 'IM' }
  ],
  parents: [
    { id: 'PR-001', name: 'Priya Sharma', email: 'priya.sharma@email.com', phone: '+91 98765 43210', children: 2, subscription: 'Premium', totalSpent: '₹24,500', joinDate: '12 Jan 2026', status: 'Active', avatar: 'PS' },
    { id: 'PR-002', name: 'Rohit Gupta', email: 'rohit.gupta@email.com', phone: '+91 87654 32109', children: 1, subscription: 'Basic', totalSpent: '₹8,200', joinDate: '18 Feb 2026', status: 'Active', avatar: 'RG' },
    { id: 'PR-003', name: 'Neha Patel', email: 'neha.patel@email.com', phone: '+91 76543 21098', children: 1, subscription: 'Premium', totalSpent: '₹32,800', joinDate: '05 Mar 2026', status: 'Active', avatar: 'NP' },
    { id: 'PR-004', name: 'Sanjay Reddy', email: 'sanjay.reddy@email.com', phone: '+91 65432 10987', children: 3, subscription: 'Enterprise', totalSpent: '₹56,400', joinDate: '22 Mar 2026', status: 'Active', avatar: 'SR' },
    { id: 'PR-005', name: 'Meera Nair', email: 'meera.nair@email.com', phone: '+91 54321 09876', children: 1, subscription: 'Basic', totalSpent: '₹6,500', joinDate: '10 Apr 2026', status: 'Inactive', avatar: 'MN' },
    { id: 'PR-006', name: 'Kavita Mehta', email: 'kavita.mehta@email.com', phone: '+91 43210 98765', children: 2, subscription: 'Premium', totalSpent: '₹41,200', joinDate: '28 Apr 2026', status: 'Active', avatar: 'KM' }
  ],
  pendingTeachers: [
    { id: 'VT-001', name: 'Sunita Rao, M.Sc.', specialization: 'Phonics & Speech Coach', cert: 'Early Childhood Phonics Diploma (Trinity)', experience: '8 yrs', date: '04 Aug 2026', status: 'Pending Review', avatar: 'SR', rating: 4.8 },
    { id: 'VT-002', name: 'Manish Verma, B.E.', specialization: 'Robotics Instructor', cert: 'STEM Pedagogy Certified (IIT)', experience: '5 yrs', date: '04 Aug 2026', status: 'Pending Review', avatar: 'MV', rating: 4.6 },
    { id: 'VT-003', name: 'Prerna Singh, M.Ed.', specialization: 'Motor Skills Therapist', cert: 'Occupational Therapy License', experience: '12 yrs', date: '03 Aug 2026', status: 'Pending Review', avatar: 'PS', rating: 4.9 }
  ],
  pendingSchools: [
    { id: 'VS-001', name: 'Greenwood High International', city: 'Bengaluru', state: 'Karnataka', affiliation: 'CBSE/AFF/193048', type: 'K-12 International', students: 2400, infrastructure: 92, date: '04 Aug 2026', status: 'Pending Audit' },
    { id: 'VS-002', name: 'The Heritage School', city: 'Gurugram', state: 'Haryana', affiliation: 'CBSE/AFF/240156', type: 'Progressive', students: 1800, infrastructure: 88, date: '03 Aug 2026', status: 'Pending Audit' }
  ],
  skillCategories: [
    { id: 'cognitive', title: 'Cognitive Skills', icon: '🧠', color: 'from-purple-500 to-indigo-600', desc: 'Memory retention, spatial orientation, information processing speed, and mental agility.' },
    { id: 'motor', title: 'Motor & Physical', icon: '🏃', color: 'from-blue-500 to-cyan-600', desc: 'Fine & gross motor coordination, hand-eye balance, dexterity, and physical agility.' },
    { id: 'creative', title: 'Creative & Arts', icon: '🎨', color: 'from-rose-500 to-pink-600', desc: 'Visual imagination, divergent thinking, artistic expression, and color-space harmony.' },
    { id: 'stem', title: 'STEM & Logic', icon: '🤖', color: 'from-amber-500 to-orange-600', desc: 'Mathematical logic, sequential reasoning, algorithmic thinking, and problem solving.' }
  ],
  activities: [
    { id: 1, type: 'assessment', message: 'Aarav Sharma completed Sensory & Motor assessment', time: '10 mins ago', icon: '📝' },
    { id: 2, type: 'parent', message: 'Kavita Mehta upgraded to Premium Plan', time: '45 mins ago', icon: '⭐' },
    { id: 3, type: 'teacher', message: 'New teacher verification request from Sunita Rao', time: '2 hours ago', icon: '🎓' }
  ],
  homeCms: {
    heroTagline: "Nurturing Young Minds & Natural Abilities",
    heroTitle: "Discover Your Child's Hidden Natural Talents Early",
    heroSubtitle: "Every child is born with unique cognitive, creative, and athletic gifts. Our play-based scientific skill mapping helps parents identify natural strengths between ages 3 to 10 years.",
    ctaPrimary: "Start Free Assessment",
    ctaSecondary: "View Sample Report",
    trustedParentsText: "Trusted by 25,000+ Indian Parents for early talent mapping.",
    stats: [
      { label: 'Children Mapped', value: '25,000+', icon: '👶' },
      { label: 'Parent Rating', value: '4.9 / 5', icon: '⭐' },
      { label: 'Skill Domains', value: '10 Areas', icon: '🎨' },
      { label: 'Accuracy Score', value: '98%', icon: '🎯' }
    ],
    featureBadges: [
      'No Stressful Exams',
      'Gardner AI Framework',
      '12-Page Talent Profile',
      '100% Parent-Guided',
      'Instant Report',
      'Ages 3 to 10 Years'
    ],
    visibility: {
      heroTagline: true,
      heroTitle: true,
      heroSubtitle: true,
      featureBadges: true,
      ctas: true,
      trustedText: true,
      stats: true,
      floatingBadges: true
    },
    howItWorksCms: {
      pageHeroBadge: "🐣 Simple Parent Guide",
      pageHeroTitle: "How Talent Assessment Works",
      pageHeroSubtitle: "A step-by-step walkthrough of registration, play-based task activities, instant report generation, and personalized learning guidance.",
      badge: "🛣️ 5-Step Learning Journey",
      title: "How Child Talent Discovery Works",
      subtitle: "Simple, non-stressful, and parent-guided. Discover your child's innate strengths in 5 simple steps.",
      steps: [
        {
          step: '01',
          title: 'Register Your Child',
          desc: 'Create a free parent profile and enter basic information about your child (age, interests, observed habits).',
          icon: '📝',
          duration: '2 Minutes',
          color: 'from-rose-500 to-purple-500',
          details: 'Quick 2-minute registration without complex paperwork. Completely private and secure.'
        },
        {
          step: '02',
          title: 'Choose Age Group',
          desc: 'Select the age-tailored evaluation module (3–5 Yrs, 5–7 Yrs, or 7–10 Yrs) matching your child\'s developmental milestone.',
          icon: '🎯',
          duration: '1 Minute',
          color: 'from-purple-500 to-indigo-500',
          details: 'Each age bucket features scientifically calibrated games, observational scenarios, and task prompts.'
        },
        {
          step: '03',
          title: 'Complete Skill Assessment',
          desc: 'Engage in fun, play-based interactive tasks and observational activities alongside your child at home.',
          icon: '🎮',
          duration: '15-20 Minutes',
          color: 'from-indigo-500 to-cyan-500',
          details: 'No stressful exams! Activities feel like enjoyable puzzles, creative drawing, or rhythm games.'
        },
        {
          step: '04',
          title: 'Receive Talent Report',
          desc: 'Get an instant, comprehensive 12-page Talent Profile breaking down cognitive, creative, and social strengths.',
          icon: '📊',
          duration: 'Instant Download',
          color: 'from-cyan-500 to-emerald-500',
          details: 'Includes visual radar charts, benchmark percentiles, and identified hidden natural talents.'
        },
        {
          step: '05',
          title: 'Get Personalized Recommendations',
          desc: 'Unlock a customized 3-year learning pathway, recommended hobbies, books, and talent nurturing activities.',
          icon: '🚀',
          duration: 'Ongoing Guidance',
          color: 'from-emerald-500 to-amber-500',
          details: 'Direct advice on what activities to encourage and how to avoid early academic burnout.'
        }
      ],
      ctaBadge: "✨ 100% Home Play-Based Assessment",
      ctaTitle: "Ready to Discover Your Child's Core Potential?",
      ctaSubtitle: "Takes less than 20 minutes of guided observational play. Get your 12-page Talent Profile immediately.",
      ctaText: "Explore Sample Assessment Report →",
      visibility: {
        pageHero: true,
        sectionBadge: true,
        sectionTitle: true,
        sectionSubtitle: true,
        stepsList: true,
        ctaBanner: true
      }
    },
    sampleReportCms: {
      pageHeroBadge: "📊 Sample Report Interactive Demo",
      pageHeroTitle: "Talent Assessment Report Preview",
      pageHeroSubtitle: "Interact with a full sample report dashboard. See how scores, radar charts, strengths, growth areas, and curated roadmaps are delivered to parents.",
      badge: "📊 Sample Assessment Report Preview",
      title: "Explore a Real Talent Discovery Report",
      subtitle: "Here is a live preview of the 12-page comprehensive talent report parents receive immediately after play assessment.",
      childName: "Aarav Sharma",
      childInitials: "AS",
      verifiedBadgeText: "Verified Profile",
      age: "6 Years 4 Months",
      assessmentDate: "August 2026",
      overallScore: 89,
      downloadButtonText: "Download Sample PDF",
      archetypeTitle: "IDENTIFIED TALENT ARCHETYPE",
      archetype: "The Creative Explorer & STEM Strategist",
      summary: "Aarav demonstrates exceptional spatial reasoning, divergent artistic imagination, and high verbal storytelling ability. He learns best through visual building tasks and hands-on experiments.",
      skills: [
        { name: 'Cognitive Reasoning', score: 92, percentile: '95th Percentile', status: 'High Talent', color: 'bg-purple-500' },
        { name: 'Creative Expression', score: 88, percentile: '90th Percentile', status: 'High Talent', color: 'bg-rose-500' },
        { name: 'Communication & Phonics', score: 90, percentile: '92nd Percentile', status: 'High Talent', color: 'bg-amber-500' },
        { name: 'STEM & Logical Math', score: 84, percentile: '85th Percentile', status: 'Strong Ability', color: 'bg-emerald-500' },
        { name: 'Social Collaboration', score: 89, percentile: '88th Percentile', status: 'High Talent', color: 'bg-cyan-500' },
        { name: 'Fine Motor Control', score: 78, percentile: '75th Percentile', status: 'Developing Well', color: 'bg-indigo-500' }
      ],
      strengths: [
        '3D Spatial Construction (Lego / Block Assembly)',
        'Inventive Story Creation with Rich Vocabulary',
        'Rapid Pattern Recognition in Visual Puzzles',
        'Empathetic Group Play & Peer Coordination'
      ],
      growthAreas: [
        'Fine Finger Control in Precision Scissors Crafting',
        'Task Persistence when Initial Attempt Fails'
      ],
      recommendedActivities: [
        { title: 'Robotics & Lego Structural Building', type: 'STEM Skill', duration: '2x / week' },
        { title: 'Illustrated Comic Story Writing', type: 'Creativity', duration: 'Daily Play' },
        { title: 'Origami & Clay Sculpting', type: 'Fine Motor Control', duration: '3x / week' },
        { title: 'Junior Chess & Logic Sequences', type: 'Cognitive', duration: 'Weekend Fun' }
      ],
      footerPrivacyNote: "🔒 All assessments are 100% private, parent-guided, and based on observational play metrics.",
      ctaButtonText: "Get a Report Like This for Your Child →",
      visibility: {
        pageHero: true,
        sectionBadge: true,
        sectionTitle: true,
        sectionSubtitle: true,
        reportCard: true,
        ctaButton: true
      }
    }
  }
};

let storeData = { ...initialData };

const ensureDirExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

export const loadData = () => {
  try {
    const dataDir = path.dirname(DB_FILE);
    ensureDirExists(dataDir);

    if (fs.existsSync(DB_FILE)) {
      const fileContent = fs.readFileSync(DB_FILE, 'utf-8');
      const parsed = JSON.parse(fileContent);
      const loadedCms = (parsed.homeCms && Object.keys(parsed.homeCms).length > 0) ? parsed.homeCms : initialData.homeCms;
      const mergedHowItWorks = loadedCms.howItWorksCms || initialData.homeCms.howItWorksCms;
      const mergedSampleReport = loadedCms.sampleReportCms || initialData.homeCms.sampleReportCms;
      storeData = { ...initialData, ...parsed, homeCms: { ...initialData.homeCms, ...loadedCms, howItWorksCms: mergedHowItWorks, sampleReportCms: mergedSampleReport } };
    } else {
      fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
      storeData = { ...initialData };
    }
  } catch (err) {
    console.error('Error reading DB_FILE, falling back to initial data:', err);
    storeData = { ...initialData };
  }
  return storeData;
};

export const saveData = () => {
  try {
    const dataDir = path.dirname(DB_FILE);
    ensureDirExists(dataDir);
    fs.writeFileSync(DB_FILE, JSON.stringify(storeData, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving data to DB_FILE:', err);
  }
};

export const getStore = () => storeData;

export default {
  loadData,
  saveData,
  getStore
};
