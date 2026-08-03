export const mockCandidateUser = {
  name: 'Vikramaditya Verma',
  email: 'vikram.verma@example.com',
  phone: '+91 98765 43210',
  currentRole: 'Senior Full Stack React Engineer',
  experienceYears: '5.5 Years',
  currentLocation: 'Bengaluru, Karnataka',
  preferredCities: ['Bengaluru', 'Hyderabad', 'Remote'],
  expectedSalary: '₹28 LPA',
  currentSalary: '₹20 LPA',
  noticePeriod: '15 Days / Serving Notice',
  profileCompletionScore: 92,
  skills: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'PostgreSQL', 'Docker', 'AWS'],
  education: [
    { degree: 'B.Tech in Computer Science & Engineering', college: 'IIT Madras', passYear: '2021', gpa: '8.9 / 10' }
  ],
  workExperience: [
    { company: 'Swiggy Tech', role: 'Senior Software Engineer', duration: '2023 - Present', details: 'Architected high-scale checkout flows processing 2M daily food orders.' },
    { company: 'ThoughtWorks India', role: 'Software Consultant', duration: '2021 - 2023', details: 'Consulted for global clients building micro-frontend microservice architectures.' }
  ],
  resumeFile: 'Vikramaditya_Verma_Resume_2026.pdf',
  resumeUpdated: '28 Jul 2026',
  appliedJobs: [
    { id: 'app-901', jobId: 'job-101', title: 'Senior Full Stack React & Node Engineer', company: 'Razorpay', appliedDate: '30 Jul 2026', status: 'Interview Scheduled', statusColor: 'amber' },
    { id: 'app-902', jobId: 'job-102', title: 'Lead AI & Machine Learning Scientist', company: 'Flipkart', appliedDate: '26 Jul 2026', status: 'Under Review', statusColor: 'blue' },
    { id: 'app-903', jobId: 'job-104', title: 'DevOps & Kubernetes Cloud Architect', company: 'Infosys', appliedDate: '20 Jul 2026', status: 'Shortlisted', statusColor: 'emerald' },
    { id: 'app-904', jobId: 'job-106', title: 'Senior UI/UX & Design Systems Lead', company: 'TCS', appliedDate: '15 Jul 2026', status: 'Offer Released', statusColor: 'purple' }
  ],
  applicationTrackingTimeline: [
    { step: 1, title: 'Application Submitted', date: '30 Jul 2026, 09:30 AM', completed: true, note: 'Resume & Portfolio delivered to Razorpay Talent Acquisition team.' },
    { step: 2, title: 'Profile Screened & Shortlisted', date: '31 Jul 2026, 02:15 PM', completed: true, note: 'HR Recruiter reviewed IIT degree & 5+ yrs experience.' },
    { step: 3, title: 'Technical System Design Interview', date: '04 Aug 2026, 11:00 AM', completed: true, active: true, note: 'Video interview scheduled with Lead Staff Engineer.' },
    { step: 4, title: 'Leadership & Culture Fit Round', date: 'Pending Schedule', completed: false, note: 'Final round with VP of Engineering.' },
    { step: 5, title: 'Offer Letter Released', date: 'Pending', completed: false, note: 'Formal offer roll-out.' }
  ]
};

export const candidatePricingPlans = [
  {
    id: 'cand-basic',
    name: 'Basic Candidate',
    badge: 'Free Forever',
    priceMonthly: 0,
    priceAnnual: 0,
    features: [
      'Apply to 50 Jobs / month',
      'Standard Resume Upload',
      'Basic Job Alerts',
      'Public Candidate Profile'
    ],
    buttonText: 'Free Registration'
  },
  {
    id: 'cand-pro',
    name: 'Career Booster Pro',
    badge: '3X More Recruiter Calls',
    priceMonthly: 499,
    priceAnnual: 399,
    highlighted: true,
    features: [
      'Unlimited Job Applications',
      'Direct Recruiter WhatsApp & Phone',
      'Featured Profile Badge to HRs',
      'AI Resume Score & Optimization',
      'Priority Interview Scheduling'
    ],
    buttonText: 'Get Pro Booster'
  }
];
