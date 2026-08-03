export const mockCompanyUser = {
  name: 'Razorpay Software Pvt Ltd',
  brandLogo: '💳',
  gstin: '29ABCDE1234F1ZH',
  cin: 'U72200KA2014PTC077398',
  verifiedBadge: true,
  city: 'Bengaluru, Karnataka',
  size: '1,000 - 5,000 Employees',
  industry: 'FinTech & Financial Services',
  website: 'https://razorpay.com',
  activeJobsCount: 14,
  totalApplicants: 1840,
  shortlistedCount: 142,
  interviewsScheduled: 28,
  hiredThisMonth: 12,
  subscription: {
    planName: 'Enterprise ATS & Hiring Plan',
    status: 'Active',
    renewsOn: '15 Sep 2026',
    jobSlotsRemaining: '36 Slots'
  },
  kanbanPipeline: [
    {
      id: 'applied',
      title: 'Applied (New)',
      count: 42,
      color: 'border-blue-500',
      candidates: [
        { id: 'c-1', name: 'Aarav Sharma', role: 'Full Stack React Engineer', exp: '4 Yrs', location: 'Bengaluru', salary: '₹22 LPA', matchScore: 94 },
        { id: 'c-2', name: 'Priya Sundaram', role: 'Frontend Developer', exp: '3 Yrs', location: 'Chennai', salary: '₹16 LPA', matchScore: 88 }
      ]
    },
    {
      id: 'reviewed',
      title: 'Screened & Reviewed',
      count: 18,
      color: 'border-purple-500',
      candidates: [
        { id: 'c-3', name: 'Rahul Deshmukh', role: 'Backend Node Lead', exp: '6 Yrs', location: 'Pune', salary: '₹28 LPA', matchScore: 91 }
      ]
    },
    {
      id: 'shortlisted',
      title: 'Shortlisted for Interview',
      count: 12,
      color: 'border-cyan-500',
      candidates: [
        { id: 'c-4', name: 'Vikramaditya Verma', role: 'Senior React & Node Engineer', exp: '5.5 Yrs', location: 'Bengaluru', salary: '₹28 LPA', matchScore: 98 }
      ]
    },
    {
      id: 'interview',
      title: 'Interview Scheduled',
      count: 8,
      color: 'border-amber-500',
      candidates: [
        { id: 'c-5', name: 'Ananya Roy', role: 'System Architect', exp: '7 Yrs', location: 'Hyderabad', salary: '₹34 LPA', matchScore: 96 }
      ]
    },
    {
      id: 'selected',
      title: 'Offer Released / Selected',
      count: 5,
      color: 'border-emerald-500',
      candidates: [
        { id: 'c-6', name: 'Karan Malhotra', role: 'DevOps Lead', exp: '6 Yrs', location: 'Delhi NCR', salary: '₹30 LPA', matchScore: 95 }
      ]
    },
    {
      id: 'joined',
      title: 'Joined & Onboarded',
      count: 12,
      color: 'border-teal-500',
      candidates: [
        { id: 'c-7', name: 'Sneha Patel', role: 'UI/UX Designer', exp: '4 Yrs', location: 'Bengaluru', salary: '₹20 LPA', matchScore: 92 }
      ]
    }
  ],
  interviewsList: [
    { id: 'int-1', candidateName: 'Vikramaditya Verma', role: 'Senior Full Stack React Engineer', round: 'Round 2 - Technical System Design', date: '04 Aug 2026, 11:00 AM', interviewer: 'Siddharth V. (VP Eng)', mode: 'Google Meet' },
    { id: 'int-2', candidateName: 'Ananya Roy', role: 'System Architect', round: 'Round 3 - Leadership Fit', date: '04 Aug 2026, 03:30 PM', interviewer: 'Harshil M. (CTO)', mode: 'Zoom' }
  ],
  onboardingTracker: [
    { candidateName: 'Sneha Patel', role: 'UI/UX Designer', offerAccepted: true, docsSubmitted: true, bgVerified: true, joinedDate: '01 Aug 2026', status: 'Completed' },
    { candidateName: 'Karan Malhotra', role: 'DevOps Lead', offerAccepted: true, docsSubmitted: true, bgVerified: false, joinedDate: 'Expected 10 Aug 2026', status: 'In Progress' }
  ]
};

export const companyPricingPlans = [
  {
    id: 'comp-starter',
    name: 'Hiring Starter',
    badge: 'For Fast Growth Startups',
    priceMonthly: 4999,
    priceAnnual: 3999,
    features: [
      'Post 5 Active Jobs',
      'Access 1,000 Resume Database Search',
      'Smart Applicant Screening ATS',
      'WhatsApp Candidate Alerts',
      'Standard Support'
    ],
    buttonText: 'Buy Starter Plan'
  },
  {
    id: 'comp-pro',
    name: 'Employer HRMS Pro',
    badge: 'Most Popular for Enterprises',
    priceMonthly: 14999,
    priceAnnual: 11999,
    highlighted: true,
    features: [
      'Post 25 Active Jobs',
      'Unlimited Candidate Resume Search',
      'Full Interactive Kanban Hiring Pipeline',
      'Automated Interview Calendar Sync',
      'Employee Onboarding & Verification Tracker',
      'Priority 24/7 Account Manager'
    ],
    buttonText: 'Buy Pro HRMS Plan'
  },
  {
    id: 'comp-enterprise',
    name: 'Enterprise Scale',
    badge: 'Custom Unlimited',
    priceMonthly: 39999,
    priceAnnual: 31999,
    features: [
      'Unlimited Job Postings',
      'Dedicated Employer Branding Hub',
      'Background Check API Integration',
      'Custom ERP & Workday HRMS Sync',
      '99.99% Guaranteed SLA'
    ],
    buttonText: 'Contact Enterprise Sales'
  }
];
