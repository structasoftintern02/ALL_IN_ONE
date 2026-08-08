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
    whyChooseUsCms: {
      badge: "⭐ Why Choose Us",
      title: "The Smartest Choice for Your Child's Future",
      highlightText: "Child's Future",
      subtitle: "We combine science, technology, and care to deliver the most accurate and actionable talent discovery experience for your child.",
      buttonText: "Learn More About Us →",
      cards: [
        {
          id: 'wc-1',
          iconName: 'Award',
          emoji: '🏆',
          title: 'Scientifically Backed Assessments',
          desc: 'Our assessments are designed by child psychologists and education experts using globally recognized frameworks like Howard Gardner\'s Multiple Intelligences theory.',
          color: 'from-violet-500 to-purple-600',
          bgColor: 'bg-violet-50 dark:bg-violet-950/30',
          borderColor: 'border-violet-200 dark:border-violet-900'
        },
        {
          id: 'wc-2',
          iconName: 'Users',
          emoji: '👨‍👩‍👧‍👦',
          title: 'Trusted by 10,000+ Families',
          desc: 'Thousands of parents across India trust our platform to discover and nurture their children\'s hidden talents, with a 98% satisfaction rate.',
          color: 'from-blue-500 to-indigo-600',
          bgColor: 'bg-blue-50 dark:bg-blue-950/30',
          borderColor: 'border-blue-200 dark:border-blue-900'
        },
        {
          id: 'wc-3',
          iconName: 'BookOpen',
          emoji: '📚',
          title: 'Personalized Learning Plans',
          desc: 'Every child receives a tailored development roadmap with specific activity recommendations, book lists, and hobby suggestions based on their unique profile.',
          color: 'from-emerald-500 to-green-600',
          bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
          borderColor: 'border-emerald-200 dark:border-emerald-900'
        },
        {
          id: 'wc-4',
          iconName: 'TrendingUp',
          emoji: '📈',
          title: 'Track Growth Over Time',
          desc: 'Monitor your child\'s progress with detailed reports and milestone tracking. See how their skills evolve and celebrate every achievement along the way.',
          color: 'from-orange-500 to-amber-600',
          bgColor: 'bg-orange-50 dark:bg-orange-950/30',
          borderColor: 'border-orange-200 dark:border-orange-900'
        },
        {
          id: 'wc-5',
          iconName: 'Shield',
          emoji: '🔒',
          title: '100% Safe & Private',
          desc: 'Your child\'s data is encrypted and completely confidential. We never share personal information with third parties. Your privacy is our top priority.',
          color: 'from-teal-500 to-cyan-600',
          bgColor: 'bg-teal-50 dark:bg-teal-950/30',
          borderColor: 'border-teal-200 dark:border-teal-900'
        },
        {
          id: 'wc-6',
          iconName: 'Clock',
          emoji: '⏰',
          title: 'Quick & Easy Process',
          desc: 'Complete the assessment in just 15-20 minutes from the comfort of your home. Get instant, detailed results with actionable insights — no waiting required.',
          color: 'from-pink-500 to-rose-600',
          bgColor: 'bg-pink-50 dark:bg-pink-950/30',
          borderColor: 'border-pink-200 dark:border-pink-900'
        }
      ],
      visibility: {
        section: true,
        header: true,
        cardsList: true,
        ctaButton: true
      }
    },
    ourAdvantagesCms: {
      badge: "⭐ Our Advantages",
      title: "The Key Advantages of Early Talent Mapping",
      highlightText: "Early Talent Mapping",
      subtitle: "We combine cognitive science, AI, and structured play to give your child an unfair advantage in early childhood development.",
      buttonText: "Explore Our Scientific Methodology →",
      cards: [
        {
          id: 'adv-1',
          iconName: 'Brain',
          emoji: '🧠',
          title: '90% Synaptic Growth Window',
          desc: 'Synaptic brain connections peak between ages 3 and 7. Identifying natural inclinations during this critical period ensures effortless learning.',
          color: 'from-purple-500 to-indigo-600',
          bgColor: 'bg-purple-50 dark:bg-purple-950/30'
        },
        {
          id: 'adv-2',
          iconName: 'Target',
          emoji: '🎯',
          title: 'Avoid Mismatched Tuitions',
          desc: 'Save time and money by avoiding trial-and-error classes. Focus only on activities aligned with your child\'s natural cognitive strengths.',
          color: 'from-rose-500 to-pink-600',
          bgColor: 'bg-rose-50 dark:bg-rose-950/30'
        },
        {
          id: 'adv-3',
          iconName: 'Sparkles',
          emoji: '✨',
          title: 'Nurture Innate Talents',
          desc: 'Whether logic, visual arts, or verbal fluency, early discovery lets natural talents flourish with intrinsic joy rather than external pressure.',
          color: 'from-amber-500 to-orange-600',
          bgColor: 'bg-amber-50 dark:bg-amber-950/30'
        },
        {
          id: 'adv-4',
          iconName: 'HeartHandshake',
          emoji: '🤝',
          title: 'Unshakable Self-Confidence',
          desc: 'Children excel when engaged in tasks matching their profile. Early success builds intrinsic motivation and lifelong self-esteem.',
          color: 'from-emerald-500 to-teal-600',
          bgColor: 'bg-emerald-50 dark:bg-emerald-950/30'
        },
        {
          id: 'adv-5',
          iconName: 'Zap',
          emoji: '⚡',
          title: 'Prevent Academic Burnout',
          desc: 'When learning style aligns with cognitive strength, studying becomes an exciting adventure rather than a stressful homework chore.',
          color: 'from-cyan-500 to-blue-600',
          bgColor: 'bg-cyan-50 dark:bg-cyan-950/30'
        },
        {
          id: 'adv-6',
          iconName: 'ShieldCheck',
          emoji: '🛡️',
          title: 'Actionable Parent Roadmap',
          desc: 'Get tailored recommendations for books, educational toys, sports, and hobbies tailored specifically to your child\'s unique profile.',
          color: 'from-fuchsia-500 to-pink-600',
          bgColor: 'bg-fuchsia-50 dark:bg-fuchsia-950/30'
        }
      ],
      visibility: {
        section: true,
        badge: true,
        title: true,
        subtitle: true,
        cardsList: true,
        button: true
      }
    },
    ourMethodologyCms: {
      badge: "🔬 Scientific Approach",
      title: "The Science of Child Talent Profiling",
      highlightText: "Child Talent Profiling",
      subtitle: "Our play-based methodology is built upon Howard Gardner's Multiple Intelligences framework, Montessori observational standards, and pediatric cognitive psychology.",
      bannerBadge: "✨ Play-Based Observation System",
      bannerTitle: "No Exams. No Pressure. Pure Playful Discovery. 🎈",
      bannerDesc: "Traditional schooling evaluates children using rigid exam benchmarks. Our system observes children during natural home play — analyzing how they solve spatial puzzles, express emotions, build Lego structures, and respond to music.",
      buttonText: "Explore Sample Talent Report →",
      checklist: [
        "Gardner's 8 Intelligences mapped",
        "100% Home play-based tasks",
        "Sensory learning style profiling",
        "Visual spatial & logic benchmarks",
        "Divergent creative expression score",
        "Motor dexterity & rhythm timing",
        "Emotional regulation indicators",
        "3-Year personalized learning roadmap"
      ],
      visibility: {
        section: true,
        header: true,
        banner: true,
        checklist: true,
        button: true
      }
    },
    programsCms: {
      badge: "🌱 Age-wise Development Programs",
      title: "Tailored Programs for Every Milestone",
      highlightText: "Every Milestone",
      subtitle: "Children develop distinct cognitive and physical capabilities at different ages. Our programs match your child's exact developmental stage.",
      programs: [
        {
          id: 'prog-1',
          ageRange: '3 – 5 Years',
          badge: 'FOUNDATION STAGE',
          icon: '🌱',
          title: 'Early Discovery & Foundation',
          subtitle: 'Observation & Natural Curiosity Stage',
          duration: '1 Week',
          focus: 'Playful Observation & Sensory Exploration',
          ctaText: 'Start 3 – 5 Years Program →',
          color: 'from-purple-500 to-indigo-600',
          bgColor: 'bg-purple-50 dark:bg-purple-950/30'
        },
        {
          id: 'prog-2',
          ageRange: '5 – 7 Years',
          badge: 'GROWTH STAGE',
          icon: '🚀',
          title: 'Creative & Cognitive Growth',
          subtitle: 'Exploration & Expression Stage',
          duration: '2 Weeks',
          focus: 'Creative Problem Solving & Spatial Logic',
          ctaText: 'Start 5 – 7 Years Program →',
          color: 'from-rose-500 to-pink-600',
          bgColor: 'bg-rose-50 dark:bg-rose-950/30'
        },
        {
          id: 'prog-3',
          ageRange: '7 – 10 Years',
          badge: 'LEADERSHIP STAGE',
          icon: '🏆',
          title: 'Talent Mapping & Leadership',
          subtitle: 'Specialization & Mastery Stage',
          duration: '2 Weeks',
          focus: 'Advanced Analytical & Leadership Mapping',
          ctaText: 'Start 7 – 10 Years Program →',
          color: 'from-amber-500 to-orange-600',
          bgColor: 'bg-amber-50 dark:bg-amber-950/30'
        }
      ],
      visibility: {
        section: true,
        badge: true,
        title: true,
        subtitle: true,
        programsList: true
      }
    },
    skillCategoriesCms: {
      badge: "🌳 10 Skill Domains",
      title: "Comprehensive Talent Categories",
      highlightText: "Talent Categories",
      subtitle: "We map 10 core development areas to build a 360-degree cognitive and creative profile of your child. Click any category for details.",
      ctaText: "See How These Skills Look in Talent Report →",
      skills: [
        { id: 'sc-1', icon: '🧠', title: 'Cognitive Skills', desc: 'Memory retention, spatial orientation, information processing speed, and mental agility.' },
        { id: 'sc-2', icon: '💬', title: 'Communication Skills', desc: 'Verbal clarity, active listening, vocabulary breadth, and expressive storytelling ability.' },
        { id: 'sc-3', icon: '🎨', title: 'Creativity & Innovation', desc: 'Divergent thinking, imaginative problem solving, visual arts, and original ideas.' },
        { id: 'sc-4', icon: '👑', title: 'Leadership & Initiative', desc: 'Responsibility, team motivation, decision making under ambiguity, and confidence.' },
        { id: 'sc-5', icon: '🧩', title: 'Problem Solving', desc: 'Deconstructing complex challenges, hypothesis testing, and systematic solutions.' },
        { id: 'sc-6', icon: '❤️', title: 'Emotional Intelligence', desc: 'Self-awareness, emotional regulation, empathy for others, and resilience.' },
        { id: 'sc-7', icon: '🏃', title: 'Motor Skills', desc: 'Fine finger dexterity, gross physical balance, hand-eye coordination, and agility.' },
        { id: 'sc-8', icon: '🤝', title: 'Social Skills', desc: 'Peer cooperation, conflict resolution, sharing, respectful listening, and group play.' },
        { id: 'sc-9', icon: '🔬', title: 'STEM Readiness', desc: 'Scientific curiosity, numerical intuition, mechanical understanding, and logic.' },
        { id: 'sc-10', icon: '🎵', title: 'Art & Music', desc: 'Rhythmic sensitivity, auditory discrimination, pitch perception, and visual harmony.' }
      ],
      visibility: {
        section: true,
        sectionBadge: true,
        sectionTitle: true,
        sectionSubtitle: true,
        ctaButton: true
      }
    },
    sampleReportsCms: {
      badge: "📊 Sample Assessment Report Preview",
      title: "Explore a Real Talent Discovery Report",
      highlightText: "Talent Discovery Report",
      subtitle: "Here is a live preview of the 12-page comprehensive talent report parents receive immediately after play assessment.",
      childInitials: "AS",
      childName: "Aarav Sharma",
      verifiedBadgeText: "Verified Profile",
      age: "6 Years 4 Months",
      assessmentDate: "August 2026",
      overallScore: "89",
      downloadButtonText: "Download Sample PDF",
      archetypeTitle: "IDENTIFIED TALENT ARCHETYPE",
      archetype: "The Creative Explorer & STEM Strategist",
      summary: "Aarav demonstrates exceptional spatial reasoning, divergent artistic imagination, and high verbal storytelling ability. He learns best through visual building tasks and hands-on experiments.",
      footerPrivacyNote: "🔒 All assessments are 100% private, parent-guided, and based on observational play metrics.",
      ctaButtonText: "Get a Report Like This for Your Child →",
      skills: [
        { name: "Cognitive Reasoning", score: 95, percentile: "95th Percentile", status: "High Talent", color: "bg-purple-500" },
        { name: "Creative Expression", score: 90, percentile: "90th Percentile", status: "High Talent", color: "bg-rose-500" },
        { name: "Communication & Phonics", score: 90, percentile: "92nd Percentile", status: "High Talent", color: "bg-amber-500" },
        { name: "STEM & Logical Math", score: 85, percentile: "85th Percentile", status: "Strong Ability", color: "bg-emerald-500" },
        { name: "Social Collaboration", score: 90, percentile: "88th Percentile", status: "High Talent", color: "bg-cyan-500" },
        { name: "Fine Motor Control", score: 80, percentile: "75th Percentile", status: "Developing Well", color: "bg-indigo-500" }
      ],
      strengths: [
        "High spatial visualization & 3D building block assembly speed",
        "Rich narrative imagination during free drawing & role-play",
        "Fast pattern recognition in logical sequence games"
      ],
      growthAreas: [
        "Focus stamina in sedentary listening tasks >15 mins",
        "Fine motor pencil grip stability under timed speed prompts"
      ],
      recommendedActivities: [
        { title: "LEGO Engineering Challenges", type: "Visual-Spatial", duration: "30 mins / 3x week" },
        { title: "Audio Storybook Storytelling", type: "Verbal-Linguistic", duration: "15 mins daily" },
        { title: "Clay Modeling & Pattern Matching", type: "Fine Motor", duration: "20 mins / 2x week" },
        { title: "Nature Scavenger Hunt Puzzles", type: "Naturalist-Logic", duration: "Weekend Activity" }
      ],
      visibility: {
        section: true,
        sectionBadge: true,
        sectionTitle: true,
        sectionSubtitle: true,
        reportCard: true,
        ctaButton: true
      }
    },
    successStoriesCms: {
      badge: "❤️ Parent Testimonials",
      title: "Loved by 25,000+ Indian Parents",
      highlightText: "25,000+ Indian Parents",
      subtitle: "Real stories from parents who discovered their child's natural talents and transformed their learning experience.",
      testimonials: [
        {
          id: 't-1',
          avatar: 'SM',
          parentName: 'Sunita & Vikram Mehta',
          childName: 'Ananya (Age 6)',
          location: 'Mumbai, Maharashtra',
          programTaken: '5–7 Years Creative & Cognitive Growth',
          rating: 5,
          story: 'We used to push Ananya into keyboard classes, but she always seemed disinterested. The Child Talent Discovery report revealed her true natural strength was spatial reasoning and visual architecture! We switched her to 3D design and Lego robotics, and she is thriving with absolute joy!',
          avatarBg: 'from-rose-500 to-purple-600'
        },
        {
          id: 't-2',
          avatar: 'RP',
          parentName: 'Rajesh & Pooja Patel',
          childName: 'Aarav (Age 8)',
          location: 'Ahmedabad, Gujarat',
          programTaken: '7–10 Years STEM & Logic Module',
          rating: 5,
          story: 'Aarav was struggling with traditional rote math homework. The assessment highlighted his kinaesthetic learning style and exceptional pattern recognition. Now learning through visual coding modules, his math confidence has skyrocketed!',
          avatarBg: 'from-blue-500 to-cyan-600'
        },
        {
          id: 't-3',
          avatar: 'NK',
          parentName: 'Neha & Kshitij Kapoor',
          childName: 'Riya (Age 4)',
          location: 'Bengaluru, Karnataka',
          programTaken: '3–5 Years Early Foundation',
          rating: 5,
          story: 'At age 4, we did not want stressful exams. The 20-minute observational play games felt like pure fun to Riya! The 12-page report gave us actionable advice on nursery books and rhythm games tailored to her auditory strength.',
          avatarBg: 'from-emerald-500 to-teal-600'
        }
      ],
      visibility: {
        section: true,
        sectionBadge: true,
        sectionTitle: true,
        sectionSubtitle: true,
        testimonialsList: true
      }
    },
    faqCms: {
      badge: "❓ Frequently Asked Questions",
      title: "Everything Parents Need to Know",
      highlightText: "Know",
      subtitle: "Clear answers to common questions about early skill discovery, scientific validation, and play assessment.",
      viewAllText: "View All 10 FAQs →",
      contactTitle: "Have a specific question about your child?",
      contactSubtitle: "Our child development advisors are available for free parent guidance.",
      callButtonText: "Call Advisor Free",
      emailButtonText: "Email Support",
      faqs: [
        { q: "What is Child Talent Discovery?", a: "Child Talent Discovery is a scientific, play-based observational assessment designed for children aged 3–10 years to identify their innate cognitive strengths, creative abilities, and natural learning styles before traditional schooling imposes rigid labels." },
        { q: "At what age should talent identification begin?", a: "Early childhood (ages 3–7) is the golden window of brain plasticity where neural pathways form rapidly. Identifying natural inclinations early allows parents to nurture innate potential without academic pressure." },
        { q: "How is the assessment conducted?", a: "The assessment is conducted 100% at home through guided 15-20 minute interactive play tasks, visual puzzles, rhythm games, and parent observation prompts. No stressful exams or paper tests!" },
        { q: "Is it scientifically validated?", a: "Yes. Our frameworks are built upon Howard Gardner's Theory of Multiple Intelligences, Montessori developmental benchmarks, and observational cognitive psychology principles." },
        { q: "Will my child have to sit for an exam?", a: "Not at all! There are zero tests or grades. Children perceive the entire process as enjoyable puzzles and creative play." },
        { q: "How long does the assessment take?", a: "The evaluation takes less than 20 minutes of observational play. You receive your comprehensive 12-page Talent Profile report immediately upon completion." }
      ],
      visibility: {
        section: true,
        badge: true,
        title: true,
        subtitle: true,
        faqList: true,
        contactBox: true
      }
    },
    contactUsCms: {
      badge: "📞 Get in Touch",
      title: "Connect with Our Child Talent Advisors",
      highlightText: "Child Talent Advisors",
      subtitle: "Have questions about which age assessment is right for your child? Send us a message or schedule a free 15-minute consultation.",
      formTitle: "Parent Inquiry & Consultation Form",
      submitButtonText: "Send Message & Request Advisor Call",
      phone: "1800-KIDS-TALENT (54378)",
      email: "support@childtalentdiscovery.org",
      address: "Child Development Center, Tech Park Phase 2, Outer Ring Road, Bengaluru – 560103",
      monFriHours: "9:00 AM – 7:00 PM IST",
      satHours: "10:00 AM – 4:00 PM IST",
      sunHours: "Online Parent Portal Open 24/7",
      mapTitle: "Child Talent Development Center",
      mapAddress: "Bengaluru, Karnataka 560103",
      mapButtonText: "View on Google Maps",
      visibility: {
        section: true,
        badge: true,
        title: true,
        subtitle: true,
        form: true,
        contactInfo: true,
        hoursBox: true,
        mapBox: true
      }
    },
    ctaCms: {
      badge: "✨ Unlock Natural Talents Early",
      title: "Discover What Your Child is Naturally Gifted At 🌟",
      highlightText: "Naturally Gifted At",
      subtitle: "Join 25,000+ parents who replaced guess-work with scientific early talent mapping.",
      primaryButtonText: "Start Assessment",
      secondaryButtonText: "View Sample Report",
      visibility: {
        section: true,
        badge: true,
        title: true,
        subtitle: true,
        primaryButton: true,
        secondaryButton: true
      }
    },
    footerCms: {
      brandName: "TalentDiscovery",
      brandSubtitle: "Child Skill Identification Portal",
      description: "India's leading scientific early child talent discovery platform. We empower parents to identify natural strengths, cognitive inclinations, and personalized learning pathways for children aged 3 to 10 years.",
      phone: "1800-KIDS-TALENT (54378)",
      email: "support@childtalentdiscovery.org",
      address: "Child Development Center, Tech Park Phase 2, Bengaluru – 560103",
      copyrightNotice: "© 2026 Child Talent Discovery Portal. All rights reserved. Designed for Early Child Development Awareness.",
      ageProgramsTitle: "AGE PROGRAMS",
      ageProgramsLinks: [
        "3–5 Years (Foundation)",
        "5–7 Years (Growth)",
        "7–10 Years (Mapping)",
        "Sensory Skill Modules"
      ],
      skillDomainsTitle: "SKILL DOMAINS",
      skillDomainsLinks: [
        "Cognitive & Spatial",
        "Creative & Artistic",
        "STEM & Logic",
        "Leadership & Emotional"
      ],
      parentToolsTitle: "PARENT TOOLS",
      parentToolsLinks: [
        "Parent Portal Login",
        "Sample Report Demo",
        "5-Step Process",
        "Parent Testimonials",
        "FAQ & Help Center"
      ],
      privacyLink: "Privacy Policy",
      termsLink: "Terms of Guidance",
      scientificLink: "Scientific Disclosure",
      visibility: {
        section: true,
        brand: true,
        contactInfo: true,
        socialIcons: true,
        categories: true,
        bottomBar: true
      }
    },
    skillCategoriesCms: {
      badge: "🌳 10 Skill Domains",
      title: "Scientific Skill Assessment Report",
      highlightText: "Assessment Report",
      subtitle: "Comprehensive talent evaluation across 10 core developmental domains. Highlighting top innate strengths for targeted guidance.",
      skills: [
        {
          id: 'cognitive',
          title: 'Cognitive Skills',
          icon: '🧠',
          color: 'from-purple-500 to-indigo-600',
          overallScore: 92,
          subSkills: [
            { name: 'Memory', score: 98 },
            { name: 'Pattern Recognition', score: 96 },
            { name: 'Spatial Reasoning', score: 95 },
            { name: 'Logical Thinking', score: 91 },
            { name: 'Decision Making', score: 89 },
            { name: 'Attention & Focus', score: 86 },
            { name: 'Processing Speed', score: 84 },
            { name: 'Problem Understanding', score: 82 }
          ]
        },
        {
          id: 'communication',
          title: 'Communication Skills',
          icon: '💬',
          color: 'from-blue-500 to-cyan-600',
          overallScore: 89,
          subSkills: [
            { name: 'Vocabulary', score: 95 },
            { name: 'Listening Skills', score: 92 },
            { name: 'Storytelling', score: 91 },
            { name: 'Expressive Language', score: 88 },
            { name: 'Public Speaking', score: 85 },
            { name: 'Non-verbal Cues', score: 83 },
            { name: 'Articulation', score: 80 }
          ]
        },
        {
          id: 'creativity',
          title: 'Creativity & Innovation',
          icon: '🎨',
          color: 'from-rose-500 to-pink-600',
          overallScore: 96,
          subSkills: [
            { name: 'Imagination', score: 99 },
            { name: 'Original Thinking', score: 98 },
            { name: 'Drawing & Design', score: 97 },
            { name: 'Idea Generation', score: 94 },
            { name: 'Curiosity', score: 93 },
            { name: 'Aesthetic Sense', score: 90 },
            { name: 'Flexible Thinking', score: 88 }
          ]
        },
        {
          id: 'leadership',
          title: 'Leadership & Initiative',
          icon: '👑',
          color: 'from-amber-500 to-orange-600',
          overallScore: 91,
          subSkills: [
            { name: 'Team Guidance', score: 96 },
            { name: 'Self-Drive', score: 93 },
            { name: 'Responsibility', score: 91 },
            { name: 'Delegation', score: 88 },
            { name: 'Decision Ownership', score: 86 },
            { name: 'Conflict Resolution', score: 84 },
            { name: 'Strategic Vision', score: 82 }
          ]
        },
        {
          id: 'problem-solving',
          title: 'Problem Solving',
          icon: '🧩',
          color: 'from-emerald-500 to-teal-600',
          overallScore: 94,
          subSkills: [
            { name: 'Analytical Thinking', score: 97 },
            { name: 'Root Cause Analysis', score: 95 },
            { name: 'Resourcefulness', score: 93 },
            { name: 'Hypothesis Testing', score: 90 },
            { name: 'Trial & Error Persistence', score: 87 },
            { name: 'Systematic Execution', score: 85 }
          ]
        },
        {
          id: 'emotional',
          title: 'Emotional Intelligence',
          icon: '❤️',
          color: 'from-red-500 to-rose-600',
          overallScore: 88,
          subSkills: [
            { name: 'Empathy', score: 94 },
            { name: 'Self-Awareness', score: 91 },
            { name: 'Emotional Regulation', score: 89 },
            { name: 'Stress Tolerance', score: 86 },
            { name: 'Mood Recognition', score: 84 },
            { name: 'Compassion', score: 83 }
          ]
        },
        {
          id: 'motor',
          title: 'Motor Skills',
          icon: '🏃',
          color: 'from-teal-500 to-emerald-600',
          overallScore: 90,
          subSkills: [
            { name: 'Hand-Eye Coordination', score: 96 },
            { name: 'Fine Motor Control', score: 93 },
            { name: 'Balance & Agility', score: 90 },
            { name: 'Physical Reflexes', score: 87 },
            { name: 'Spatial Awareness', score: 85 },
            { name: 'Dexterity', score: 83 }
          ]
        },
        {
          id: 'social',
          title: 'Social Skills',
          icon: '🤝',
          color: 'from-indigo-500 to-purple-600',
          overallScore: 93,
          subSkills: [
            { name: 'Peer Collaboration', score: 97 },
            { name: 'Active Sharing', score: 95 },
            { name: 'Respecting Rules', score: 92 },
            { name: 'Inclusion & Kindness', score: 89 },
            { name: 'Group Dynamics', score: 86 },
            { name: 'Cultural Adaptability', score: 84 }
          ]
        },
        {
          id: 'stem',
          title: 'STEM Readiness',
          icon: '🔬',
          color: 'from-violet-500 to-purple-600',
          overallScore: 95,
          subSkills: [
            { name: 'Mathematical Intuition', score: 98 },
            { name: 'Scientific Observation', score: 96 },
            { name: 'Algorithmic Thinking', score: 94 },
            { name: 'Data Interpretation', score: 91 },
            { name: 'Technological Curiosity', score: 88 },
            { name: 'Experimentation', score: 86 }
          ]
        },
        {
          id: 'art-music',
          title: 'Art & Music',
          icon: '🎵',
          color: 'from-pink-500 to-rose-600',
          overallScore: 92,
          subSkills: [
            { name: 'Rhythm & Tempo Sensing', score: 97 },
            { name: 'Pitch & Tone Recognition', score: 94 },
            { name: 'Visual Color Harmony', score: 92 },
            { name: 'Musical Expression', score: 89 },
            { name: 'Tactile Crafting', score: 87 },
            { name: 'Auditory Memory', score: 85 }
          ]
        }
      ],
      visibility: {
        section: true,
        sectionBadge: true,
        sectionTitle: true,
        sectionSubtitle: true
      }
    },
    assessmentProcessCms: {
      badge: "🛣️ 5-Step Learning Journey",
      title: "How Child Talent Discovery Works",
      highlightText: "Works",
      subtitle: "Simple, non-stressful, and parent-guided. Discover your child's innate strengths in 5 simple steps.",
      ctaBadge: "✨ 100% Home Play-Based Assessment",
      ctaTitle: "Ready to Discover Your Child's Core Potential?",
      ctaSubtitle: "Takes less than 20 minutes of guided observational play. Get your 12-page Talent Profile immediately.",
      ctaText: "Explore Sample Assessment Report →",
      steps: [
        {
          step: '01',
          title: 'Register Your Child',
          duration: '2 Minutes',
          desc: 'Create a free parent profile and enter basic information about your child (age, interests, observed habits).',
          details: 'Quick 2-minute registration without complex paperwork. Completely private and secure.',
          icon: '📝',
          color: 'from-purple-500 to-indigo-600'
        },
        {
          step: '02',
          title: 'Choose Age Group',
          duration: '1 Minute',
          desc: 'Select the age-tailored evaluation module (3–5 Yrs, 5–7 Yrs, or 7–10 Yrs) matching your child\'s developmental milestone.',
          details: 'Each age bucket features scientifically calibrated games, observational scenarios, and task prompts.',
          icon: '🎯',
          color: 'from-rose-500 to-pink-600'
        },
        {
          step: '03',
          title: 'Complete Skill Assessment',
          duration: '15-20 Minutes',
          desc: 'Engage in fun, play-based interactive tasks and observational activities alongside your child at home.',
          details: 'No stressful exams! Activities feel like enjoyable puzzles, creative drawing, or rhythm games.',
          icon: '🎮',
          color: 'from-amber-500 to-orange-600'
        },
        {
          step: '04',
          title: 'Receive Talent Report',
          duration: 'Instant Download',
          desc: 'Get an instant, comprehensive 12-page Talent Profile breaking down cognitive, creative, and social strengths.',
          details: 'Includes visual radar charts, benchmark percentiles, and identified hidden natural talents.',
          icon: '📊',
          color: 'from-emerald-500 to-teal-600'
        },
        {
          step: '05',
          title: 'Get Personalized Recommendations',
          duration: 'Ongoing Guidance',
          desc: 'Unlock a customized 3-year learning pathway, recommended hobbies, books, and talent nurturing activities.',
          details: 'Direct advice on what activities to encourage and how to avoid early academic burnout.',
          icon: '🚀',
          color: 'from-cyan-500 to-blue-600'
        }
      ],
      visibility: {
        section: true,
        sectionBadge: true,
        sectionTitle: true,
        sectionSubtitle: true,
        stepsList: true,
        ctaBanner: true
      }
    },
    keyBenefitsCms: {
      badge: "⭐ Key Benefits for Children & Parents",
      title: "Transform Your Child's Learning Experience",
      highlightText: "Learning Experience",
      subtitle: "Empower your child with confidence and focus by nurturing their natural inclinations from an early age.",
      buttonText: "Choose Age Group & Start Assessment →",
      benefits: [
        { id: 'kb-1', icon: '🔍', title: 'Discover Hidden Talents', desc: 'Identify natural inclinations toward STEM, Arts, Leadership, or Athletics before traditional schooling spots them.', tag: 'Validated Benefit', color: 'from-purple-500 to-indigo-600' },
        { id: 'kb-2', icon: '🔬', title: 'Scientific Skill Assessment', desc: 'Built upon validated child psychology frameworks (Gardner\'s Multiple Intelligences & Montessori principles).', tag: 'Validated Benefit', color: 'from-blue-500 to-cyan-600' },
        { id: 'kb-3', icon: '📖', title: 'Personalized Learning Path', desc: 'Avoid one-size-fits-all tuition. Focus effort and resources on activities your child naturally excels at.', tag: 'Validated Benefit', color: 'from-emerald-500 to-teal-600' },
        { id: 'kb-4', icon: '🌱', title: 'Early Development Support', desc: 'Address cognitive or motor gaps early when brain plasticity is highest for rapid progress.', tag: 'Validated Benefit', color: 'from-amber-500 to-orange-600' },
        { id: 'kb-5', icon: '⚽', title: 'Age-Appropriate Activities', desc: 'Receive curated lists of games, books, toys, and sports tailored precisely to your child\'s exact stage.', tag: 'Validated Benefit', color: 'from-rose-500 to-pink-600' },
        { id: 'kb-6', icon: '⭐', title: 'Confidence Building', desc: 'Children thrive when engaged in activities aligned with their natural talents, building high self-esteem.', tag: 'Validated Benefit', color: 'from-fuchsia-500 to-pink-600' },
        { id: 'kb-7', icon: '📈', title: 'Better Academic Growth', desc: 'Understanding learning style (Visual, Auditory, Kinaesthetic) makes school study faster and stress-free.', tag: 'Validated Benefit', color: 'from-indigo-500 to-purple-600' },
        { id: 'kb-8', icon: '👨‍👩‍👧', title: 'Actionable Parent Guidance', desc: 'Clear, non-judgmental advice for parents on how to encourage curiosity without pressure or expectation.', tag: 'Validated Benefit', color: 'from-orange-500 to-amber-600' }
      ],
      visibility: {
        section: true,
        badge: true,
        title: true,
        subtitle: true,
        benefitsList: true,
        button: true
      }
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
      const mergedWhyChooseUs = loadedCms.whyChooseUsCms || initialData.homeCms.whyChooseUsCms;
      const mergedWhyEarly = loadedCms.whyEarlyDiscoveryCms || initialData.homeCms.whyEarlyDiscoveryCms;
      const mergedOurAdvantages = loadedCms.ourAdvantagesCms || initialData.homeCms.ourAdvantagesCms;
      const mergedOurMethodology = loadedCms.ourMethodologyCms || initialData.homeCms.ourMethodologyCms;
      const mergedPrograms = loadedCms.programsCms || initialData.homeCms.programsCms;
      const mergedSkillCategories = loadedCms.skillCategoriesCms || loadedCms.skillsCms || initialData.homeCms.skillCategoriesCms;
      const mergedSampleReports = loadedCms.sampleReportsCms || loadedCms.sampleReportCms || initialData.homeCms.sampleReportsCms;
      const mergedKeyBenefits = loadedCms.keyBenefitsCms || loadedCms.benefitsCms || initialData.homeCms.keyBenefitsCms;
      const mergedSuccessStories = loadedCms.successStoriesCms || loadedCms.testimonialsCms || initialData.homeCms.successStoriesCms;
      const mergedFaq = loadedCms.faqCms || initialData.homeCms.faqCms;
      const mergedContactUs = loadedCms.contactUsCms || loadedCms.contactCms || initialData.homeCms.contactUsCms;
      const mergedCta = loadedCms.ctaCms || loadedCms.callToActionCms || initialData.homeCms.ctaCms;
      const mergedFooter = loadedCms.footerCms || initialData.homeCms.footerCms;
      storeData = { 
        ...initialData, 
        ...parsed, 
        homeCms: { 
          ...initialData.homeCms, 
          ...loadedCms, 
          howItWorksCms: mergedHowItWorks, 
          sampleReportCms: mergedSampleReports,
          sampleReportsCms: mergedSampleReports,
          whyChooseUsCms: mergedWhyChooseUs,
          whyEarlyDiscoveryCms: mergedWhyEarly,
          ourAdvantagesCms: mergedOurAdvantages,
          ourMethodologyCms: mergedOurMethodology,
          programsCms: mergedPrograms,
          skillCategoriesCms: mergedSkillCategories,
          assessmentProcessCms: mergedAssessmentProcess,
          keyBenefitsCms: mergedKeyBenefits,
          successStoriesCms: mergedSuccessStories,
          testimonialsCms: mergedSuccessStories,
          faqCms: mergedFaq,
          contactUsCms: mergedContactUs,
          contactCms: mergedContactUs,
          ctaCms: mergedCta,
          callToActionCms: mergedCta,
          footerCms: mergedFooter
        } 
      };
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
