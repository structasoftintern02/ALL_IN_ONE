// ─── School Portal Mock Data Layer ───

export const platformStats = [
  { value: '540+', label: 'Empaneled Schools', icon: '🏫', color: 'blue' },
  { value: '1,480+', label: 'Certified Skill Teachers', icon: '🎓', color: 'green' },
  { value: '48,000+', label: 'Students Evaluated', icon: '👶', color: 'amber' },
  { value: '98.4%', label: 'Skill Identification Precision', icon: '🎯', color: 'purple' }
];

export const trustedSchools = [
  { name: 'Delhi Public School', logo: '🏫', location: 'New Delhi' },
  { name: 'Ryan International School', logo: '🌐', location: 'Mumbai' },
  { name: 'Greenwood High International', logo: '🌳', location: 'Bengaluru' },
  { name: 'The Heritage School', logo: '🏛️', location: 'Gurugram' },
  { name: 'Orchids International', logo: '🌺', location: 'Hyderabad' },
  { name: 'Amity Global School', logo: '⭐', location: 'Noida' }
];

export const ageGroupPrograms = [
  {
    id: 'prog-early',
    ageGroup: '3 – 5 Years',
    title: 'Early Observation & Sensory Play',
    tagline: 'Discover foundational sensory, cognitive, and fine motor coordination talents in early childhood.',
    badge: 'Baseline Observation',
    color: 'from-blue-600 to-indigo-600',
    accentColor: '#2563EB',
    icon: '🎨',
    duration: '1 Hour / Session • 6 Sessions / Week',
    targetedSkillsCount: 5,
    description: 'Observational play-based diagnostic testing fine motor control, tactile reflexes, auditory processing, and hand-eye sync.',
    skills: ['Sensory Processing', 'Fine Motor Control', 'Hand-Eye Motor Sync', 'Spatial Awareness', 'Tactile Reflexes'],
    benefits: [
      'Identify dominant hand & motor preference',
      'Early speech pattern and phonetic mapping',
      'Certified Occupational Therapist report',
      'Personalized sensory activity recommendation'
    ],
    activities: ['Tangram Play', 'Phonetic Sound Matching', 'Color Pattern Decoding', 'Rhythm Tapping'],
    outcomes: 'Early baseline skill mapping, early detection of developmental milestones, baseline motor score card.'
  },
  {
    id: 'prog-cognitive',
    ageGroup: '5 – 7 Years',
    title: 'Cognitive & Creative Talent Explorer',
    tagline: 'Map mathematical curiosity, creative problem solving, and social-emotional quotient.',
    badge: 'Cognitive Benchmarking',
    color: 'from-emerald-600 to-teal-600',
    accentColor: '#22C55E',
    icon: '🧩',
    duration: '1 Hour / Session • 6 Sessions / Week',
    targetedSkillsCount: 10,
    description: 'Tangram decoding, pattern sequence puzzles, visual arts expression, and numerical curiosity benchmarking for early STEM aptitude.',
    skills: ['Creative Logic Reasoning', 'Pattern Identification', 'Tangram Logic Decoding', 'Sequential Memory', 'Abstract Pattern Recognition', 'Spatial Rotation', 'Logical Problem Solving', 'Numerical Curiosity', 'Artistic Sensitivity', 'EQ Profiling'],
    benefits: [
      'Logical problem-solving quotient index',
      'Sequential memory scoring & percentile',
      'Visual-spatial reasoning breakdown',
      'Artistic inclination & EQ certificate'
    ],
    activities: ['Sequential Block Coding', 'Sculpting & Color Theory', 'Storytelling Logic', 'Rhythm Acoustics'],
    outcomes: 'Comprehensive cognitive scorecard, talent identification report across 4 core domains.'
  },
  {
    id: 'prog-advanced',
    ageGroup: '7 – 10 Years',
    title: 'Advanced Talent Mapping & STEM Logic',
    tagline: 'Nurture specialized skills in Robotics, Musical Pitch, Leadership, and Computational Thinking.',
    badge: 'Advanced Diagnostic',
    color: 'from-purple-600 to-indigo-700',
    accentColor: '#8B5CF6',
    icon: '🤖',
    duration: '1 Hour / Session • 6 Sessions / Week',
    targetedSkillsCount: 12,
    description: 'Block-based coding, mechanical logic, vocal pitch acoustics, and leadership dynamics mapping computational mindset.',
    skills: ['Junior Robotics Mechanics', 'Algorithmic Thinking', 'Block Coding', 'Circuit Assembly', 'Computational Logic', 'Hardware Aptitude', 'Mechanical Reasoning', 'Problem Decomposition', 'Flowchart Logic', 'Audio Pitch Percption', 'Tempo Tracking', 'Peer Leadership'],
    benefits: [
      'IIT & Industry expert mentorship mapping',
      'Absolute pitch & rhythm acoustics sensitivity test',
      'Hardware-software talent index',
      'National Talent Registry certification'
    ],
    activities: ['Circuit Assembly & Microbots', 'Vocal Pitch Acoustics', 'Debate & Public Speaking', 'Algorithmic Puzzles'],
    outcomes: 'National Talent Registry inclusion, specialized talent portfolio, recommendation for advanced STEM & Arts acceleration.'
  }
];

export const assessmentProcessSteps = [
  {
    step: '01',
    title: 'School Onboarding & Baseline Setup',
    desc: 'Empanel your school, configure age group rosters, and assign certified skill teachers.',
    icon: '🏫'
  },
  {
    step: '02',
    title: 'Guided Diagnostic Sessions',
    desc: 'Conduct 1-hour structured play sessions 6 times a week using standardized diagnostic toolkits.',
    icon: '🧩'
  },
  {
    step: '03',
    title: 'Multi-Domain Evaluation',
    desc: 'Certified pedagogical observers evaluate 6 core domains: Cognitive, Motor, Creative, STEM, Linguistic & Musical.',
    icon: '📊'
  },
  {
    step: '04',
    title: 'Scientific Scorecard & Radar Report',
    desc: 'Generate comprehensive child progress reports featuring 360-degree radar charts and growth trajectories.',
    icon: '🎯'
  },
  {
    step: '05',
    title: 'Parent Consultation & Growth Roadmap',
    desc: 'Share verified diagnostic reports with parents and tailor specialized talent development pathways.',
    icon: '🤝'
  }
];

export const sampleSchools = [
  {
    id: 'sch-01',
    name: 'Greenwood High International School',
    principal: 'Dr. Meenakshi Sundaram',
    board: 'CBSE & IB World',
    type: 'K-12 Day Cum Boarding',
    city: 'Bengaluru',
    state: 'Karnataka',
    address: 'Sarjapur Main Road, Varthur Hobli, Bengaluru - 560087',
    studentsEnrolled: 420,
    accreditationStatus: 'Gold Accredited',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80'
    ],
    infrastructure: {
      classrooms: 48,
      activityRooms: 6,
      sportsFacilities: ['Indoor Badminton', 'Basketball Court', 'Olympic Pool', 'Synthetic Turf'],
      stemLabs: 4,
      musicRooms: 2,
      artRooms: 3,
      capacity: '2,800 Students'
    },
    offeredPrograms: ['Early Observation (3-5 yrs)', 'Cognitive Talent (5-7 yrs)', 'Advanced STEM (7-10 yrs)'],
    achievements: ['Ranked #1 Day-Boarding School in Karnataka 2025', 'National Excellence in Early Childhood Diagnostic Award']
  },
  {
    id: 'sch-02',
    name: 'The Heritage School',
    principal: 'Sunita Nagpal',
    board: 'CBSE Affiliated',
    type: 'Progressive School',
    city: 'Gurugram',
    state: 'Haryana',
    address: 'Sector 62, Golf Course Extension Road, Gurugram - 122011',
    studentsEnrolled: 380,
    accreditationStatus: 'Gold Accredited',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80'
    ],
    infrastructure: {
      classrooms: 40,
      activityRooms: 5,
      sportsFacilities: ['Cricket Academy', 'Tennis Courts', 'Skating Rink'],
      stemLabs: 3,
      musicRooms: 2,
      artRooms: 2,
      capacity: '2,200 Students'
    },
    offeredPrograms: ['Early Observation (3-5 yrs)', 'Cognitive Talent (5-7 yrs)'],
    achievements: ['Green School Award 2025', 'Pioneer in Experiential Skill Assessment']
  }
];

export const certifiedTeachers = [
  {
    id: 'tch-101',
    name: 'Sunita Rao, M.Sc.',
    role: 'Phonics & Speech Specialist',
    experience: '8 Years',
    certifications: ['Early Childhood Phonics Diploma (Trinity)', 'Certified Speech Observer'],
    skills: ['Auditory Discrimination', 'Vocabulary Recall', 'Pronunciation Analysis'],
    rating: 4.9,
    availability: 'Mon - Fri (Morning)',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    assignedSchool: 'Delhi Public School, RK Puram'
  },
  {
    id: 'tch-102',
    name: 'Manish Verma, B.E.',
    role: 'Junior Robotics & STEM Instructor',
    experience: '6 Years',
    certifications: ['STEM Pedagogy Certified (IIT Delhi)', 'Robotics Master Trainer'],
    skills: ['Circuit Assembly', 'Block Coding', 'Computational Logic'],
    rating: 4.8,
    availability: 'Mon - Sat (Afternoon)',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    assignedSchool: 'Greenwood High International'
  },
  {
    id: 'tch-103',
    name: 'Prerna Singh, M.Ed.',
    role: 'Motor Skills & Sensory Therapist',
    experience: '11 Years',
    certifications: ['Licensed Occupational Therapist (RCI)', 'Sensory Integration Specialist'],
    skills: ['Fine Motor Control', 'Tactile Reflexes', 'Spatial Sync'],
    rating: 4.95,
    availability: 'Tue - Sat (Full Day)',
    photo: 'https://images.unsplash.com/photo-1580894732413-84725357870c?auto=format&fit=crop&w=400&q=80',
    assignedSchool: 'The Heritage School'
  },
  {
    id: 'tch-104',
    name: 'Ravi Kulkarni, B.F.A.',
    role: 'Visual Arts & Creative Expression Coach',
    experience: '7 Years',
    certifications: ['National Fine Arts Certification', 'Art Therapy Practitioner'],
    skills: ['Color Theory', 'Sculpting', 'Visual Cognition'],
    rating: 4.7,
    availability: 'Mon - Thu',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    assignedSchool: 'Orchids International School'
  }
];

export const expertEducators = [
  {
    id: 'exp-201',
    name: 'Dr. Deepa Nambiar, Ph.D.',
    qualification: 'Ph.D. in Developmental Child Psychology (TISS)',
    experience: '16 Years',
    specialization: 'Early Cognitive & EQ Profiling',
    assignedSchools: ['DPS RK Puram', 'Greenwood High', 'Heritage School'],
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'exp-202',
    name: 'Prof. Arvind Swaminathan',
    qualification: 'M.Tech (IIT Madras), Former ISRO Scientist',
    experience: '20 Years',
    specialization: 'Elementary Robotics & Algorithmic Pedagogy',
    assignedSchools: ['Ryan Intl', 'Amity Global', 'Orchids Intl'],
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  }
];

export const studentEnrollments = [
  { id: 'STU-1001', name: 'Aarav Sharma', age: 4, ageGroup: '3–5 Years', program: 'Early Observation & Play', school: 'Delhi Public School', status: 'Active', progress: 85, score: '4.8/5.0' },
  { id: 'STU-1002', name: 'Ananya Gupta', age: 6, ageGroup: '5–7 Years', program: 'Cognitive Talent Explorer', school: 'Ryan International', status: 'Active', progress: 92, score: '4.9/5.0' },
  { id: 'STU-1003', name: 'Vihaan Patel', age: 8, ageGroup: '7–10 Years', program: 'Advanced STEM & Robotics', school: 'Greenwood High', status: 'Active', progress: 78, score: '4.6/5.0' },
  { id: 'STU-1004', name: 'Diya Reddy', age: 5, ageGroup: '3–5 Years', program: 'Early Observation & Play', school: 'Orchids Intl.', status: 'Active', progress: 90, score: '4.85/5.0' },
  { id: 'STU-1005', name: 'Arjun Nair', age: 7, ageGroup: '5–7 Years', program: 'Cognitive Talent Explorer', school: 'Amity Global', status: 'Completed', progress: 100, score: '5.0/5.0' },
  { id: 'STU-1006', name: 'Ishaan Mehta', age: 9, ageGroup: '7–10 Years', program: 'Advanced STEM & Robotics', school: 'The Heritage School', status: 'Active', progress: 82, score: '4.75/5.0' }
];

export const calendarSessions = [
  { id: 'ses-1', date: '08 Aug 2026', title: 'Sensory & Fine Motor Baseline Testing', ageGroup: '3–5 Yrs', teacher: 'Prerna Singh, M.Ed.', time: '09:30 AM - 10:30 AM', room: 'Activity Room 2', type: 'Assessment' },
  { id: 'ses-2', date: '10 Aug 2026', title: 'Tangram Pattern Decoding Workshop', ageGroup: '5–7 Yrs', teacher: 'Manish Verma, B.E.', time: '11:00 AM - 12:00 PM', room: 'STEM Lab 1', type: 'Workshop' },
  { id: 'ses-3', date: '12 Aug 2026', title: 'Phonics & Auditory Frequency Screening', ageGroup: '3–5 Yrs', teacher: 'Sunita Rao, M.Sc.', time: '10:00 AM - 11:00 AM', room: 'Linguistic Studio', type: 'Screening' },
  { id: 'ses-4', date: '15 Aug 2026', title: 'National Independence Day Holiday', ageGroup: 'All', teacher: 'N/A', time: 'All Day', room: 'N/A', type: 'Holiday' },
  { id: 'ses-5', date: '18 Aug 2026', title: 'Junior Robotics Micro-Circuit Assembly', ageGroup: '7–10 Yrs', teacher: 'Prof. Arvind Swaminathan', time: '02:00 PM - 03:30 PM', room: 'Robotics Center', type: 'Expert Visit' }
];

export const attendanceData = {
  summary: { presentPercentage: 94.2, totalSessions: 148, presentCount: 4120, absentCount: 180, lateCount: 74 },
  monthlyHistory: [
    { month: 'Mar', present: 93.5, absent: 6.5 },
    { month: 'Apr', present: 94.8, absent: 5.2 },
    { month: 'May', present: 92.1, absent: 7.9 },
    { month: 'Jun', present: 95.4, absent: 4.6 },
    { month: 'Jul', present: 96.0, absent: 4.0 },
    { month: 'Aug', present: 94.2, absent: 5.8 }
  ]
};

export const childProgressReportData = {
  childName: 'Ananya Gupta',
  childId: 'STU-1002',
  age: '6 Years',
  ageGroup: '5–7 Years',
  school: 'Ryan International School',
  overallScore: '4.9 / 5.0',
  percentile: '98th Percentile Nationally',
  certifiedBadge: 'Gold Talent Tier',
  skillsRadar: [
    { category: 'Creativity & Arts', score: 95, max: 100 },
    { category: 'Communication', score: 92, max: 100 },
    { category: 'Leadership', score: 88, max: 100 },
    { category: 'Logical Thinking', score: 96, max: 100 },
    { category: 'Memory & Recall', score: 90, max: 100 },
    { category: 'Fine Motor Control', score: 94, max: 100 }
  ],
  recommendations: [
    'Recommend enrolling in Advanced Pattern Decoding & Tangram Logic.',
    'Exhibits exceptional auditory discrimination; recommended for instrumental pitch coaching.',
    'Fine motor sync is well ahead of baseline curve.'
  ]
};

export const subscriptionPlans = [
  {
    id: 'starter',
    name: 'Starter School',
    tagline: 'Ideal for small pre-primary schools and standalone academies.',
    priceMonthly: '₹14,999',
    priceAnnual: '₹11,999',
    period: 'per month',
    capacity: 'Up to 200 Students',
    popular: false,
    color: 'border-slate-200',
    btnVariant: 'btn-outline',
    features: [
      'Early Observation (3–5 Yrs) Diagnostic Toolkits',
      '2 Certified Skill Teachers assigned',
      'Basic Child Diagnostic Scorecard Generator',
      'Monthly Attendance Tracking & Calendar',
      'Email & Helpdesk Support'
    ]
  },
  {
    id: 'professional',
    name: 'Professional School',
    tagline: 'Designed for K-10 schools seeking complete diagnostic coverage.',
    priceMonthly: '₹34,999',
    priceAnnual: '₹27,999',
    period: 'per month',
    capacity: 'Up to 1,000 Students',
    popular: true,
    color: 'border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500',
    btnVariant: 'btn-primary',
    features: [
      'All 3 Age Programs (3-5, 5-7, 7-10 Yrs)',
      '6 Certified Skill Teachers + 1 Expert Educator',
      '360° Radar Chart Diagnostic Reports (PDF)',
      'Session Scheduling & Live Attendance Dashboard',
      'Parent Portal & Progress Card Distribution',
      'Priority Support & Annual Accreditation Badge'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise School Chain',
    tagline: 'Custom solution for multi-branch school groups and trusts.',
    priceMonthly: 'Custom Quote',
    priceAnnual: 'Custom Quote',
    period: 'per branch',
    capacity: 'Unlimited Students',
    popular: false,
    color: 'border-purple-200',
    btnVariant: 'btn-outline',
    features: [
      'Full Multi-Branch Governance Dashboard',
      'Dedicated IIT & Child Psychologist Consultants',
      'Custom ERP API Integration & White-labeling',
      'National Talent Registry Co-Branding',
      'Dedicated Account Manager & On-site Audits'
    ]
  }
];

export const faqsList = [
  {
    question: 'How does the Early Child Skill Identification Program work for schools?',
    answer: 'Our program provides schools with standardized diagnostic toolkits, certified skill teachers, and a digital ERP portal. Teachers conduct 1-hour sessions 6 times a week to systematically observe and map children’s motor, cognitive, creative, STEM, linguistic, and musical talents.'
  },
  {
    question: 'Are the skill teachers provided by the platform or school staff?',
    answer: 'We provide certified skill teachers and expert developmental psychologists who collaborate directly with your existing school faculty to conduct diagnostic sessions and generate standardized reports.'
  },
  {
    question: 'Which education boards are supported?',
    answer: 'Our diagnostic frameworks align with NEP 2020 early childhood guidelines and are fully compatible with CBSE, ICSE, IB World, IGCSE, and State Boards.'
  },
  {
    question: 'How do parents receive their child progress report?',
    answer: 'Reports are generated digitally with 360° radar growth charts and can be shared directly via email, exported as certified PDFs, or accessed through the Parent Portal.'
  },
  {
    question: 'What infrastructure is required at the school?',
    answer: 'Basic activity rooms or classrooms equipped with soft flooring and tables are sufficient. Standardized diagnostic kits (tangrams, phonics sets, robotics blocks) are supplied by our platform.'
  }
];

export const testimonials = [
  {
    quote: 'The 360-degree diagnostic radar reports have transformed our parent-teacher meetings. Parents now have clear scientific insight into their child’s natural inclinations.',
    author: 'Dr. Meenakshi Sundaram',
    title: 'Principal, Greenwood High International',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    quote: 'Partnering with certified skill teachers from the platform elevated our pre-primary pedagogy to international standards. Highly recommended for progressive schools.',
    author: 'Sunita Nagpal',
    title: 'Director, The Heritage School',
    avatar: 'https://images.unsplash.com/photo-1580894732413-84725357870c?auto=format&fit=crop&w=200&q=80'
  }
];
