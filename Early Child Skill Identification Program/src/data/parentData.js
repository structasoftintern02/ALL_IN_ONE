export const mockParentUser = {
  parentName: 'Priya & Vikram Verma',
  email: 'priya.verma@example.com',
  phone: '+91 98765 43210',
  city: 'Bengaluru',
  child: {
    name: 'Aarav Verma',
    age: '5.5 Years',
    gender: 'Male',
    ageGroup: '5 – 7 Years',
    avatar: '👦',
    schoolName: 'Orchids International STEM School',
    enrolledProgram: 'Creative Logic & Pattern Identification',
    overallProgressScore: 92,
    skillScores: {
      cognitiveLogic: 94,
      fineMotor: 88,
      creativeArtistic: 96,
      emotionalEQ: 90,
      linguistic: 85
    },
    strengths: [
      'Exceptional Visual-Spatial Pattern Sequence Decoding (Top 3% percentile)',
      'High Color Theory Sensitivity & Fine Pencil Dexterity',
      'Strong Auditory Story Recall & Vocabulary'
    ],
    recommendations: [
      'Enroll in Advanced Junior Robotics module to nurture high spatial logic.',
      'Provide daily 15-minute 3D building block challenges at home.',
      'Schedule 1-on-1 consultation with Dr. Meenakshi for gifted track plan.'
    ],
    upcomingSessions: [
      { id: 'ses-1', date: '05 Aug 2026, 04:00 PM', topic: 'Tangram Pattern Challenge Round 3', teacher: 'Ananya Sharma', location: 'Orchids International (Room 102)' },
      { id: 'ses-2', date: '08 Aug 2026, 11:00 AM', topic: 'Color Theory & Clay Sculpting', teacher: 'Ananya Sharma', location: 'Orchids International (Art Studio)' }
    ]
  }
};

export const assessmentQuizQuestions = [
  {
    id: 1,
    skillArea: 'Logical & Spatial Reasoning',
    question: 'When presented with building blocks or puzzles, how does Aarav approach the task?',
    options: [
      { text: 'Instantly identifies pattern sequence and builds complex symmetrical shapes.', score: 100, trait: 'Gifted Spatial Aptitude' },
      { text: 'Follows instructions well and completes 2D puzzle boundaries step-by-step.', score: 85, trait: 'Structured Logical Reasoning' },
      { text: 'Prefers free-form stacking and experimenting with heights without templates.', score: 75, trait: 'Exploratory Visual Play' }
    ]
  },
  {
    id: 2,
    skillArea: 'Fine Motor Control & Precision',
    question: 'How comfortable is Aarav when using crayons, safety scissors, or threading beads?',
    options: [
      { text: 'Maintains steady tripod grip and cuts intricate curved outlines cleanly.', score: 95, trait: 'High Motor Precision' },
      { text: 'Holds crayons securely and stays within coloring boundaries 80% of the time.', score: 85, trait: 'Age-appropriate Fine Motor' },
      { text: 'Prefers finger painting and uses full palm grip for heavy strokes.', score: 70, trait: 'Developing Grip Strength' }
    ]
  },
  {
    id: 3,
    skillArea: 'Creative Arts & Imagination',
    question: 'When asked to draw a story or character, how does your child describe their creation?',
    options: [
      { text: 'Narrates elaborate backstories with distinct character emotions and colors.', score: 98, trait: 'Exceptional Imaginative Expression' },
      { text: 'Draws recognizable objects (sun, house, trees) and names each item clearly.', score: 85, trait: 'Realistic Representation' },
      { text: 'Enjoys abstract color mixing and explaining feelings associated with shades.', score: 90, trait: 'Artistic Emotional Sensitivity' }
    ]
  },
  {
    id: 4,
    skillArea: 'Social & Emotional Intelligence (EQ)',
    question: 'How does Aarav react when sharing toys or facing a challenging task that fails?',
    options: [
      { text: 'Pauses, takes a breath, and tries alternative solutions independently.', score: 95, trait: 'High Emotional Resilience' },
      { text: 'Asks a parent or teacher for guidance and resumes with encouragement.', score: 85, trait: 'Adaptive Co-regulation' },
      { text: 'Seeks immediate reassurance before trying again.', score: 75, trait: 'Developing Autonomy' }
    ]
  }
];
