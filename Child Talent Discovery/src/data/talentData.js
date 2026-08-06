// ─────────────────────────────────────────────────────────────────────────────
// Child Talent Discovery — Centralized Static Data
// ─────────────────────────────────────────────────────────────────────────────

export const statsData = [
  { label: 'Children Mapped', value: 25000, suffix: '+', icon: '👶', color: 'text-purple-500' },
  { label: 'Parent Rating', value: 4.9, suffix: ' / 5', decimal: true, icon: '⭐', color: 'text-amber-500' },
  { label: 'Skill Domains', value: 12, suffix: ' Areas', icon: '🎨', color: 'text-rose-500' },
  { label: 'Accuracy Score', value: 98, suffix: '%', icon: '🎯', color: 'text-emerald-500' },
];

export const agePrograms = [
  {
    id: 'age-3-5',
    ageRange: '3 – 5 Years',
    title: 'Early Discovery & Foundation',
    subtitle: 'Observation & Natural Curiosity Stage',
    icon: '🌱',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50 dark:bg-rose-950/30',
    borderColor: 'border-rose-200 dark:border-rose-900',
    badge: 'Foundation Stage',
    duration: '1 Week',
    focus: 'Playful Observation & Sensory Exploration',
    modules: [
      { name: 'Early Observation', desc: 'Tracking curiosity patterns through visual & auditory stimuli' },
      { name: 'Motor Skills', desc: 'Fine & gross motor coordination through guided activities' },
      { name: 'Communication', desc: 'Expression, vocabulary comprehension, and storytelling response' },
      { name: 'Social Behaviour', desc: 'Empathy, sharing, and peer interaction indicators' },
      { name: 'Curiosity Development', desc: 'Questioning habits and problem-driven exploration' }
    ],
    outcomes: [
      'Identifies primary sensory learning preference (Visual, Auditory, Kinaesthetic)',
      'Establishes baseline motor & hand-eye coordination benchmarks',
      'Provides early guidance for parent-child playful interaction'
    ]
  },
  {
    id: 'age-5-7',
    ageRange: '5 – 7 Years',
    title: 'Creative & Cognitive Growth',
    subtitle: 'Exploration & Expression Stage',
    icon: '🚀',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    borderColor: 'border-purple-200 dark:border-purple-900',
    badge: 'Growth Stage',
    duration: '1 Week',
    focus: 'Logical Thinking & Creative Problem Solving',
    modules: [
      { name: 'Creativity', desc: 'Divergent thinking, imaginative storytelling, and artistic expression' },
      { name: 'Memory Skills', desc: 'Pattern recall, sequence retention, and auditory memory' },
      { name: 'Logical Thinking', desc: 'Basic cause-and-effect, sorting, and spatial puzzle solving' },
      { name: 'Reading Readiness', desc: 'Phonics awareness, letter-sound association, and focus span' },
      { name: 'Learning Behaviour', desc: 'Task persistence, self-correction, and attention span' }
    ],
    outcomes: [
      'Discovers latent artistic, mathematical, or linguistic inclinations',
      'Pinpoints attention span strengths and optimal study environment',
      'Recommends tailored co-curricular activities and hobbies'
    ]
  },
  {
    id: 'age-7-10',
    ageRange: '7 – 10 Years',
    title: 'Talent Mapping & Leadership',
    subtitle: 'Specialization & Mastery Stage',
    icon: '🏆',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    borderColor: 'border-emerald-200 dark:border-emerald-900',
    badge: 'Advanced Mapping',
    duration: '1 Week',
    focus: 'Comprehensive Skill Profiling & Future Potential',
    modules: [
      { name: 'Talent Mapping', desc: 'Identification of core domain excellence (STEM, Arts, Leadership, Sports)' },
      { name: 'Leadership Skills', desc: 'Team coordination, initiative taking, and decision making' },
      { name: 'Problem Solving', desc: 'Multi-step analytical reasoning and strategy creation' },
      { name: 'Critical Thinking', desc: 'Evaluating information, questioning assumptions, and logical debate' },
      { name: 'Advanced Learning Skills', desc: 'Self-directed study habits, project completion, and grit' }
    ],
    outcomes: [
      'Generates a comprehensive 12-page Talent Discovery & Aptitude Profile',
      'Provides a 3-year personalized skill development roadmap',
      'Recommends specialized competitions, workshops, and mentorship'
    ]
  }
];

export const skillCategories = [
  {
    id: 'cognitive',
    title: 'Cognitive Skills',
    icon: '🧠',
    color: 'from-purple-500 to-indigo-600',
    desc: 'Memory retention, spatial orientation, information processing speed, and mental agility.',
    keyMetrics: ['Pattern Recognition', 'Processing Speed', 'Spatial Reasoning'],
    recommendedActivities: ['Memory Matrix Games', '3D Spatial Puzzles', 'Logic Sequence Challenges']
  },
  {
    id: 'communication',
    title: 'Communication Skills',
    icon: '💬',
    color: 'from-rose-500 to-pink-600',
    desc: 'Verbal clarity, active listening, vocabulary breadth, and expressive storytelling ability.',
    keyMetrics: ['Vocabulary Breadth', 'Expressive Clarity', 'Active Listening'],
    recommendedActivities: ['Story Building Sessions', 'Role-play Drama', 'Show & Tell Activities']
  },
  {
    id: 'creativity',
    title: 'Creativity & Innovation',
    icon: '🎨',
    color: 'from-amber-500 to-orange-600',
    desc: 'Divergent thinking, imaginative problem solving, visual arts, and original idea generation.',
    keyMetrics: ['Idea Originality', 'Visual Expression', 'Divergent Thinking'],
    recommendedActivities: ['Mixed-media Crafting', 'Invent-a-Story', 'Unconventional Design']
  },
  {
    id: 'leadership',
    title: 'Leadership & Initiative',
    icon: '👑',
    color: 'from-emerald-500 to-teal-600',
    desc: 'Responsibility, team motivation, decision making under ambiguity, and confidence.',
    keyMetrics: ['Initiative Taking', 'Peer Guidance', 'Decision Quality'],
    recommendedActivities: ['Group Project Lead', 'Community Challenge', 'Goal Setting Drills']
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    icon: '🧩',
    color: 'from-cyan-500 to-blue-600',
    desc: 'Deconstructing complex challenges, hypothesis testing, and systematic solution finding.',
    keyMetrics: ['Analytical Breakdown', 'Trial & Learning', 'Strategy Formation'],
    recommendedActivities: ['Escape Room Puzzles', 'Coding Logic Blocks', 'Rube Goldberg Contraptions']
  },
  {
    id: 'emotional-intelligence',
    title: 'Emotional Intelligence',
    icon: '❤️',
    color: 'from-red-500 to-rose-600',
    desc: 'Self-awareness, emotional regulation, empathy for others, and resilience in adversity.',
    keyMetrics: ['Emotion Naming', 'Self-Regulation', 'Empathy Response'],
    recommendedActivities: ['Emotion Journaling', 'Mindful Breathing', 'Collaborative Story Circle']
  },
  {
    id: 'motor-skills',
    title: 'Motor Skills',
    icon: '🏃',
    color: 'from-lime-500 to-emerald-600',
    desc: 'Fine finger dexterity, gross physical balance, hand-eye coordination, and spatial control.',
    keyMetrics: ['Fine Dexterity', 'Balance Control', 'Hand-Eye Timing'],
    recommendedActivities: ['Origami Folding', 'Obstacle Course Training', 'Juggling Basics']
  },
  {
    id: 'social-skills',
    title: 'Social Skills',
    icon: '🤝',
    color: 'from-violet-500 to-purple-600',
    desc: 'Peer cooperation, conflict resolution, sharing, respectful listening, and group play.',
    keyMetrics: ['Sharing Tendency', 'Conflict Navigation', 'Group Play Integration'],
    recommendedActivities: ['Cooperative Board Games', 'Team Building Tasks', 'Peer Buddy Sharing']
  },
  {
    id: 'stem-readiness',
    title: 'STEM Readiness',
    icon: '🔬',
    color: 'from-indigo-500 to-blue-600',
    desc: 'Scientific curiosity, numerical intuition, mechanical understanding, and experimentation.',
    keyMetrics: ['Scientific Curiosity', 'Number Sense', 'Hypothesis Building'],
    recommendedActivities: ['Kitchen Science Experiments', 'Lego Robotics Construction', 'Math Magic Puzzles']
  },
  {
    id: 'art-music',
    title: 'Art & Music',
    icon: '🎵',
    color: 'from-fuchsia-500 to-pink-600',
    desc: 'Rhythmic sensitivity, auditory discrimination, pitch perception, and visual harmony.',
    keyMetrics: ['Rhythm Precision', 'Color Harmony', 'Pitch Discrimination'],
    recommendedActivities: ['Percussion Rhythm Games', 'Color Theory Sketching', 'Melody Recognition']
  },
  {
    id: 'sports-aptitude',
    title: 'Sports Aptitude',
    icon: '⚽',
    color: 'from-orange-500 to-amber-600',
    desc: 'Agility, stamina, reaction speed, tactical movement, and physical endurance.',
    keyMetrics: ['Reaction Speed', 'Physical Agility', 'Tactical Sense'],
    recommendedActivities: ['Multi-sport Drills', 'Reaction Ball Catching', 'Swimming & Gymnastics']
  },
  {
    id: 'language-dev',
    title: 'Language Development',
    icon: '📚',
    color: 'from-teal-500 to-cyan-600',
    desc: 'Phonetic awareness, grammar structure intuition, multi-lingual receptivity, and reading speed.',
    keyMetrics: ['Phonics Awareness', 'Grammar Structure', 'Reading Speed'],
    recommendedActivities: ['Interactive Reading Clubs', 'Word Association Games', 'Multilingual Rhymes']
  }
];

export const howItWorksSteps = [
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
];

export const benefitsList = [
  {
    icon: '🔍',
    title: 'Discover Hidden Talents',
    desc: 'Identify natural inclinations toward STEM, Arts, Leadership, or Athletics before traditional schooling spots them.',
    color: 'from-rose-500 to-purple-500'
  },
  {
    icon: '🔬',
    title: 'Scientific Skill Assessment',
    desc: 'Built upon validated child psychology frameworks (Gardner\'s Multiple Intelligences & Montessori principles).',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: '🗺️',
    title: 'Personalized Learning Path',
    desc: 'Avoid one-size-fits-all tuition. Focus effort and resources on activities your child naturally excels at.',
    color: 'from-indigo-500 to-cyan-500'
  },
  {
    icon: '🌱',
    title: 'Early Development Support',
    desc: 'Address cognitive or motor gaps early when brain plasticity is highest for rapid progress.',
    color: 'from-cyan-500 to-emerald-500'
  },
  {
    icon: '⚽',
    title: 'Age-Appropriate Activities',
    desc: 'Receive curated lists of games, books, toys, and sports tailored precisely to your child\'s exact stage.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: '⭐',
    title: 'Confidence Building',
    desc: 'Children thrive when engaged in activities aligned with their natural talents, building high self-esteem.',
    color: 'from-teal-500 to-amber-500'
  },
  {
    icon: '📈',
    title: 'Better Academic Growth',
    desc: 'Understanding learning style (Visual, Auditory, Kinaesthetic) makes school study faster and stress-free.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Actionable Parent Guidance',
    desc: 'Clear, non-judgmental advice for parents on how to encourage curiosity without pressure or expectation.',
    color: 'from-orange-500 to-rose-500'
  }
];

export const sampleReportData = {
  childName: 'Aarav Sharma',
  age: '6 Years 4 Months',
  assessmentDate: 'August 2026',
  overallScore: 89,
  archetype: 'The Creative Explorer & STEM Strategist',
  summary: 'Aarav demonstrates exceptional spatial reasoning, divergent artistic imagination, and high verbal storytelling ability. He learns best through visual building tasks and hands-on experiments.',
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
  ]
};

export const testimonials = [
  {
    id: 't1',
    parentName: 'Sunita & Vikram Mehta',
    childName: 'Ananya (Age 6)',
    role: 'Parents of 6-year-old',
    location: 'Mumbai, Maharashtra',
    avatar: 'SM',
    avatarBg: 'from-rose-500 to-purple-500',
    rating: 5,
    programTaken: '5–7 Years Creative & Cognitive Growth',
    story: 'We used to push Ananya into keyboard classes, but she always seemed disinterested. The Child Talent Discovery report revealed her true natural strength was spatial reasoning and visual architecture! We switched her to 3D design and Lego robotics, and she is thriving with absolute joy!'
  },
  {
    id: 't2',
    parentName: 'Dr. Rajesh & Neha Iyer',
    childName: 'Kabir (Age 4)',
    role: 'Parents of 4-year-old',
    location: 'Bengaluru, Karnataka',
    avatar: 'RN',
    avatarBg: 'from-purple-500 to-indigo-500',
    rating: 5,
    programTaken: '3–5 Years Early Discovery',
    story: 'As doctors, we wanted a scientific, non-stressful way to understand Kabir\'s early milestones. The report gave us immense clarity on his auditory learning style. Reading to him with voice modulation changed his vocabulary within 2 months!'
  },
  {
    id: 't3',
    parentName: 'Priya & Amit Deshmukh',
    childName: 'Rohan (Age 8)',
    role: 'Parents of 8-year-old',
    location: 'Pune, Maharashtra',
    avatar: 'PA',
    avatarBg: 'from-emerald-500 to-teal-500',
    rating: 5,
    programTaken: '7–10 Years Talent Mapping',
    story: 'Rohan was struggling with rote math memorization in school. The talent profile showed he was an intuitive visual problem solver who needed conceptual math puzzles rather than repetitive drills. His confidence shot up in just one term!'
  },
  {
    id: 't4',
    parentName: 'Kavita & Suresh Nair',
    childName: 'Diya (Age 5)',
    role: 'Parents of 5-year-old',
    location: 'Kochi, Kerala',
    avatar: 'KS',
    avatarBg: 'from-amber-500 to-orange-500',
    rating: 5,
    programTaken: '5–7 Years Creative Growth',
    story: 'The Talent Report identified Diya\'s high emotional intelligence and storytelling flair. Following the personalized recommendations, we enrolled her in drama and public speaking workshops. She won her first inter-school storytelling prize!'
  },
  {
    id: 't5',
    parentName: 'Gurpreet & Harleen Kaur',
    childName: 'Jaspreet (Age 9)',
    role: 'Parents of 9-year-old',
    location: 'Chandigarh, Punjab',
    avatar: 'GH',
    avatarBg: 'from-cyan-500 to-blue-500',
    rating: 5,
    programTaken: '7–10 Years Talent Mapping',
    story: 'This platform saved us from spending money on random coaching classes. The scientific assessment pinpointed Jaspreet\'s high aptitude for coding and strategic thinking. He is now building his own mini games!'
  }
];

export const faqs = [
  {
    q: 'What is Child Talent Discovery?',
    a: 'Child Talent Discovery is an early-stage scientific skill evaluation system designed to help parents identify their child\'s natural cognitive strengths, emotional tendencies, creative potential, and learning style (Visual, Auditory, or Kinaesthetic) between the ages of 3 and 10 years.'
  },
  {
    q: 'At what age should talent identification begin?',
    a: 'Child development experts recommend beginning observation and talent mapping as early as age 3. Between ages 3 and 10, the human brain exhibits maximum neuroplasticity, making early identification crucial for nurturing lifelong skills without pressure.'
  },
  {
    q: 'How is the assessment conducted?',
    a: 'The assessment is 100% play-based and parent-guided at home. Through interactive visual puzzles, rhythm challenges, story prompts, and observational tasks, children enjoy the process like a fun game while our analytics engine maps their responses.'
  },
  {
    q: 'Is it scientifically validated?',
    a: 'Yes! Our methodology is designed in alignment with Howard Gardner\'s Theory of Multiple Intelligences, Montessori observational metrics, and modern developmental psychology benchmarks.'
  },
  {
    q: 'Will my child have to sit for an exam?',
    a: 'No! Absolutely not. There are no paper tests, grades, or pass/fail scores. Every activity feels like an enjoyable game, drawing session, or puzzle solving time.'
  },
  {
    q: 'How long does the assessment take?',
    a: 'The assessment takes approximately 15 to 20 minutes and can be completed in one sitting or split into multiple fun play sessions over a few days.'
  },
  {
    q: 'What does the Talent Report include?',
    a: 'You receive a detailed 12-page Talent Profile containing domain score meters, visual radar charts, identified natural talents, areas for growth, learning style analysis, and a 3-year recommended activity roadmap.'
  },
  {
    q: 'What happens after I receive the report?',
    a: 'The report provides actionable parent guidance, recommended toys, books, hobbies, and sports tailored to your child\'s exact profile, along with tips on how to support them at home.'
  },
  {
    q: 'Can parents with no teaching experience do this at home?',
    a: 'Yes, completely! The instructions are simple, visual, and step-by-step. Any parent can easily guide their child through the observational play tasks.'
  },
  {
    q: 'Is my child\'s data safe and private?',
    a: '100% private and confidential. We strictly adhere to child privacy standards. No data is ever shared with third parties or academic institutions.'
  }
];
