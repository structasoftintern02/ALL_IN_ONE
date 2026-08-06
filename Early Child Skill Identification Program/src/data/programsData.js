export const ageGroupPlansData = [
  {
    ageGroup: '3 – 5 Years',
    badge: 'Early Observation & Play',
    tagline: 'Discover foundational sensory, cognitive, and motor coordination talents.',
    color: 'from-pink-500 to-rose-400',
    programs: [
      {
        id: 'prog-301',
        title: 'Sensory & Motor Skill Assessment',
        category: 'Motor & Physical Development',
        duration: '1 Hour / Session • 6 Sessions / Week',
        icon: '🎨',
        description: 'Observational play-based diagnostic testing fine motor control, hand-eye coordination, and spatial awareness.',
        skills: ['Sensory Processing', 'Fine Motor Control', 'Hand-Eye Motor Sync', 'Spatial Awareness', 'Tactile Reflexes'],
        benefits: ['Identify dominant hand preference', 'Assess visual-spatial reasoning', 'Certified OT report'],
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'prog-302',
        title: 'Language & Phonetic Explorer',
        category: 'Linguistic Intelligence',
        duration: '1 Hour / Session • 6 Sessions / Week',
        icon: '🗣️',
        description: 'Interactive storytelling and phonics games measuring vocabulary recall, auditory discrimination, and expression.',
        skills: ['Language Comprehension', 'Phonetic Sound Analysis', 'Phonics & Speech', 'Verbal Language Skill', 'Vocabulary Recall', 'Auditory Discrimination', 'Storytelling Logic', 'Pronunciation Accuracy', 'Sentence Structuring', 'Linguistic Memory'],
        benefits: ['Early speech pattern analysis', 'Multilingual cognitive mapping', 'Speech therapist feedback'],
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    ageGroup: '5 – 7 Years',
    badge: 'Cognitive & Creative Talent',
    tagline: 'Map mathematical curiosity, creative problem solving, and social emotional quotient.',
    color: 'from-amber-500 to-orange-400',
    programs: [
      {
        id: 'prog-501',
        title: 'Creative Logic & Pattern Identification',
        category: 'Mathematical & Logical',
        duration: '1 Hour / Session • 6 Sessions / Week',
        icon: '🧩',
        description: 'Tangram puzzles, pattern sequence decoding, and numerical curiosity benchmarking for early STEM aptitude.',
        skills: ['Creative Logic Reasoning', 'Pattern Identification', 'Tangram Logic Decoding', 'Sequential Memory Skill', 'Abstract Pattern Recognition', 'Spatial Rotation', 'Logical Problem Solving', 'Numerical Curiosity'],
        benefits: ['Logical problem solving index', 'Sequential memory scoring', 'Personalized learning plan'],
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'prog-502',
        title: 'Visual Arts & Emotional Expression',
        category: 'Creative & Artistic',
        duration: '1 Hour / Session • 6 Sessions / Week',
        icon: '🖌️',
        description: 'Color theory, sculpting, and guided visual expression evaluating emotional intelligence and artistic inclination.',
        skills: ['Visual Arts & Color Theory', 'Emotional Expression', 'Artistic Sculpting', 'EQ Emotional Profiling', 'Artistic Sensitivity', 'Visual Cognition'],
        benefits: ['Emotional quotient (EQ) profiling', 'Artistic sensitivity score', 'Portfolio certification'],
        image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    ageGroup: '7 – 10 Years',
    badge: 'Advanced Talent Mapping',
    tagline: 'Nurture specialized skills in Robotics, Musical Pitch, Leadership, and Advanced STEM.',
    color: 'from-emerald-500 to-teal-400',
    programs: [
      {
        id: 'prog-701',
        title: 'Junior Robotics & Algorithmic Thinking',
        category: 'STEM & Technology',
        duration: '1 Hour / Session • 6 Sessions / Week',
        icon: '🤖',
        description: 'Block-based coding, circuit assembly, and mechanical logic mapping computational thinking skills.',
        skills: ['Junior Robotics Mechanics', 'Algorithmic Thinking', 'Block-Based Coding Logic', 'Circuit Assembly Skill', 'Computational Logic', 'Hardware Aptitude', 'Mechanical Reasoning', 'Problem Decomposition', 'Flowchart Logic', 'Sensor Integration', 'Debugging Mindset', 'Spatial Assembly'],
        benefits: ['Algorithmic skill certificate', 'Hardware-software aptitude', 'Mentorship by IIT engineers'],
        image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'prog-702',
        title: 'Musical Pitch & Rhythm Acoustics',
        category: 'Musical & Performing Arts',
        duration: '1 Hour / Session • 6 Sessions / Week',
        icon: '🎵',
        description: 'Audio frequency discrimination, vocal pitch accuracy, and rhythm synchronization assessment.',
        skills: ['Musical Pitch Discrimination', 'Rhythm Synchronization', 'Acoustic Sound Analysis', 'Vocal Pitch Accuracy', 'Audio Frequency Perception', 'Tempo Tracking', 'Instrumental Affinity'],
        benefits: ['Absolute pitch sensitivity test', 'Instrument affinity score', 'Trinity College framework'],
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
];

export const skillCategoriesData = [
  { id: 'cog', name: 'Cognitive & Logical Aptitude', count: '14 Programs', icon: '🧠', bg: 'bg-blue-100 text-blue-900' },
  { id: 'motor', name: 'Fine & Gross Motor Skills', count: '10 Programs', icon: '🏃‍♂️', bg: 'bg-amber-100 text-amber-900' },
  { id: 'creative', name: 'Creative & Visual Arts', count: '12 Programs', icon: '🎨', bg: 'bg-pink-100 text-pink-900' },
  { id: 'stem', name: 'Robotics & STEM Logic', count: '18 Programs', icon: '🚀', bg: 'bg-purple-100 text-purple-900' },
  { id: 'ling', name: 'Language & Public Speaking', count: '11 Programs', icon: '📢', bg: 'bg-emerald-100 text-emerald-900' },
  { id: 'music', name: 'Musical Pitch & Rhythm', count: '8 Programs', icon: '🎹', bg: 'bg-teal-100 text-teal-900' }
];
