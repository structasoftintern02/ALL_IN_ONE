import React from 'react';

export const mockCompany = {
  name: 'TechCorp Solutions Pvt Ltd',
  logoText: 'TC',
  tagline: 'Enterprise Cloud & SaaS Product Innovation',
  industry: 'Information Technology & Software Services',
  employeeCount: '500 - 1,000 Employees',
  teamSize: '500 - 1,000 Employees',
  foundedYear: '2015',
  headquarters: 'Bengaluru, Karnataka, India',
  website: 'https://techcorp-example.com',
  gstin: '29ABCDE1234F1Z5',
  verified: true,
  rating: 4.8,
  description: 'TechCorp Solutions is a premier technology enterprise pioneering high-scale Cloud Infrastructure, Artificial Intelligence ATS workflows, and SaaS product engineering across India. Founded in 2015, we empower over 12,000 corporate clients with next-generation digital workforce solutions.',
  offices: [
    'Bengaluru (Global Tech Park HQ)',
    'Gurugram (Cyber City Hub)',
    'Hyderabad (HITEC City Center)',
    'Mumbai (Bandra Kurla Complex)'
  ],
  gallery: [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400'
  ]
};

export const mockPricingPlans = [
  {
    id: 'plan-starter',
    title: 'Startup HR Plan',
    subtitle: 'For fast-growing startups hiring tech talent',
    priceAnnual: '₹14,999',
    unit: ' / Year + GST',
    badge: 'Starter',
    highlighted: false,
    features: [
      'Post up to 5 Active Jobs',
      '500 Verified Resume Credits',
      'AI Resume Match Scoring',
      'Basic Kanban ATS Pipeline',
      'Email Support'
    ]
  },
  {
    id: 'plan-pro',
    title: 'Growth SaaS Plan',
    subtitle: 'Most popular for expanding recruitment teams',
    priceAnnual: '₹29,999',
    unit: ' / Year + GST',
    badge: 'Most Popular',
    highlighted: true,
    features: [
      'Post up to 20 Active Jobs',
      '3,000 Verified Resume Credits',
      '1-Click Google Meet Interview Sync',
      'Automated Stage Notifications',
      '5 Recruiter Workspace Seats',
      'Priority Phone & Chat Support'
    ]
  },
  {
    id: 'plan-enterprise',
    title: 'Enterprise HRMS Plan',
    subtitle: 'Unlimited scale for corporate hiring teams',
    priceAnnual: '₹59,999',
    unit: ' / Year + GST',
    badge: 'Enterprise',
    highlighted: false,
    features: [
      'Unlimited Job Postings',
      'Unlimited Candidate Resume Access',
      'Custom Role-based Access Control',
      'Dedicated Account Manager',
      'Custom ATS Pipeline Stages',
      'HRMS & Payroll Integration'
    ]
  }
];

export const mockJobs = [
  {
    id: 'JOB-101',
    title: 'Senior Full Stack React / Node Developer',
    department: 'Engineering',
    location: 'Bengaluru / Hybrid',
    type: 'Full-time',
    experience: '4 - 7 Years',
    ctc: '₹18,00,000 - ₹28,00,000 P.A.',
    status: 'Active',
    applicantsCount: 142,
    shortlistedCount: 18,
    interviewedCount: 6,
    postedDate: '2 Days Ago',
    skills: ['React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    id: 'JOB-102',
    title: 'Lead Product UI/UX Designer',
    department: 'Design',
    location: 'Gurugram / Remote',
    type: 'Full-time',
    experience: '5 - 8 Years',
    ctc: '₹22,00,000 - ₹32,00,000 P.A.',
    status: 'Active',
    applicantsCount: 98,
    shortlistedCount: 12,
    interviewedCount: 4,
    postedDate: '5 Days Ago',
    skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Micro-interactions']
  },
  {
    id: 'JOB-103',
    title: 'DevOps & Kubernetes Cloud Architect',
    department: 'Infrastructure',
    location: 'Hyderabad / On-site',
    type: 'Full-time',
    experience: '6 - 10 Years',
    ctc: '₹28,00,000 - ₹40,00,000 P.A.',
    status: 'Active',
    applicantsCount: 64,
    shortlistedCount: 9,
    interviewedCount: 3,
    postedDate: '1 Week Ago',
    skills: ['Kubernetes', 'Docker', 'Terraform', 'CI/CD Pipelines', 'AWS / Azure']
  },
  {
    id: 'JOB-104',
    title: 'Enterprise Account Executive (SaaS)',
    department: 'Sales & Growth',
    location: 'Mumbai / Hybrid',
    type: 'Full-time',
    experience: '3 - 6 Years',
    ctc: '₹16,00,000 - ₹25,00,000 P.A.',
    status: 'Active',
    applicantsCount: 85,
    shortlistedCount: 11,
    interviewedCount: 2,
    postedDate: '3 Days Ago',
    skills: ['B2B SaaS Sales', 'Enterprise Pitching', 'CRM Management', 'Lead Closure']
  },
  {
    id: 'JOB-105',
    title: 'Senior Talent Acquisition Specialist',
    department: 'Human Resources',
    location: 'Bengaluru / On-site',
    type: 'Full-time',
    experience: '4 - 6 Years',
    ctc: '₹12,00,000 - ₹18,00,000 P.A.',
    status: 'Closed',
    applicantsCount: 210,
    shortlistedCount: 24,
    interviewedCount: 8,
    postedDate: '1 Month Ago',
    skills: ['Tech Sourcing', 'ATS Screening', 'Salary Negotiation', 'Stakeholder Management']
  }
];

export const mockCandidates = [
  {
    id: 'CAN-801',
    name: 'Priya Sundaram',
    role: 'Senior Full Stack React / Node Developer',
    jobId: 'JOB-101',
    stage: 'Applied',
    experience: '5.5 Years',
    currentCompany: 'Infosys Tech Labs',
    expectedSalary: '₹24,00,000 P.A.',
    noticePeriod: 'Immediate Joiner',
    location: 'Bengaluru',
    matchScore: 94,
    email: 'priya.s@example.com',
    phone: '+91 98765 43210',
    appliedDate: 'Just Now',
    skills: ['React', 'Node.js', 'Redux', 'PostgreSQL', 'Tailwind']
  },
  {
    id: 'CAN-802',
    name: 'Rohan Deshmukh',
    role: 'Lead Product UI/UX Designer',
    jobId: 'JOB-102',
    stage: 'Reviewed',
    experience: '6.0 Years',
    currentCompany: 'MakeMyTrip Design Studio',
    expectedSalary: '₹28,00,000 P.A.',
    noticePeriod: '15 Days',
    location: 'Gurugram',
    matchScore: 91,
    email: 'rohan.d@example.com',
    phone: '+91 98112 33445',
    appliedDate: '1 Day Ago',
    skills: ['Figma', 'Design Tokens', 'User Testing', 'Wireframing']
  },
  {
    id: 'CAN-803',
    name: 'Ananya Sharma',
    role: 'Senior Full Stack React / Node Developer',
    jobId: 'JOB-101',
    stage: 'Shortlisted',
    experience: '4.8 Years',
    currentCompany: 'Wipro Digital',
    expectedSalary: '₹22,00,000 P.A.',
    noticePeriod: 'Serving Notice (2 Wks)',
    location: 'Bengaluru',
    matchScore: 96,
    email: 'ananya.s@example.com',
    phone: '+91 99887 66554',
    appliedDate: '2 Days Ago',
    skills: ['React', 'TypeScript', 'GraphQL', 'Next.js', 'AWS']
  },
  {
    id: 'CAN-804',
    name: 'Vikramaditya Nair',
    role: 'DevOps & Kubernetes Cloud Architect',
    jobId: 'JOB-103',
    stage: 'Interview',
    experience: '7.5 Years',
    currentCompany: 'TCS Innovation Hub',
    expectedSalary: '₹34,00,000 P.A.',
    noticePeriod: '30 Days',
    location: 'Hyderabad',
    matchScore: 89,
    email: 'vikram.nair@example.com',
    phone: '+91 97441 22901',
    appliedDate: '4 Days Ago',
    skills: ['Kubernetes', 'Docker', 'Terraform', 'Helm', 'Azure']
  },
  {
    id: 'CAN-805',
    name: 'Kavita Menon',
    role: 'Enterprise Account Executive (SaaS)',
    jobId: 'JOB-104',
    stage: 'Selected',
    experience: '5.0 Years',
    currentCompany: 'Freshworks India',
    expectedSalary: '₹21,00,000 P.A.',
    noticePeriod: '15 Days',
    location: 'Mumbai',
    matchScore: 98,
    email: 'kavita.menon@example.com',
    phone: '+91 98200 45123',
    appliedDate: '1 Week Ago',
    skills: ['SaaS Sales', 'HubSpot', 'Salesforce', 'Enterprise Pitching']
  },
  {
    id: 'CAN-806',
    name: 'Siddharth Roy',
    role: 'Senior Full Stack React / Node Developer',
    jobId: 'JOB-101',
    stage: 'Joined',
    experience: '6.2 Years',
    currentCompany: 'Cognizant Technology',
    expectedSalary: '₹24,00,000 P.A.',
    noticePeriod: 'Joined on Aug 1st',
    location: 'Bengaluru',
    matchScore: 95,
    email: 'siddharth.roy@example.com',
    phone: '+91 99100 33445',
    appliedDate: '2 Weeks Ago',
    skills: ['React', 'Express.js', 'PostgreSQL', 'Docker']
  }
];

export const mockInterviews = [
  {
    id: 'INT-501',
    candidateName: 'Vikramaditya Nair',
    candidateRole: 'DevOps & Kubernetes Cloud Architect',
    interviewer: 'Aakash Verma (VP Engineering)',
    time: 'Mon (Aug 04) • 03:30 PM',
    type: 'Technical System Architecture Round',
    status: 'Scheduled',
    link: 'https://meet.google.com/abc-defg-hij'
  },
  {
    id: 'INT-502',
    candidateName: 'Ananya Sharma',
    candidateRole: 'Senior Full Stack React / Node Developer',
    interviewer: 'Meera Rao (Engineering Lead)',
    time: 'Tue (Aug 05) • 11:00 AM',
    type: 'Live Coding & Machine Coding Round',
    status: 'Scheduled',
    link: 'https://meet.google.com/xyz-pqrs-tuv'
  },
  {
    id: 'INT-503',
    candidateName: 'Rohan Deshmukh',
    candidateRole: 'Lead Product UI/UX Designer',
    interviewer: 'Siddharth Roy (Head of Product)',
    time: 'Wed (Aug 06) • 02:00 PM',
    type: 'Portfolio Review & Design Culture',
    status: 'Scheduled',
    link: 'https://meet.google.com/mno-pjkl-wxy'
  },
  {
    id: 'INT-504',
    candidateName: 'Kavita Menon',
    candidateRole: 'Enterprise Account Executive (SaaS)',
    interviewer: 'Deepak Saxena (VP Sales)',
    time: 'Thu (Aug 07) • 04:00 PM',
    type: 'Enterprise Pitch & Sales Strategy',
    status: 'Scheduled',
    link: 'https://meet.google.com/rst-uvwx-yza'
  },
  {
    id: 'INT-505',
    candidateName: 'Priya Sundaram',
    candidateRole: 'Senior Full Stack Developer',
    interviewer: 'Neha Gupta (Talent Acquisition Lead)',
    time: 'Fri (Aug 08) • 05:30 PM',
    type: 'HR Culture & Leadership Fit',
    status: 'Scheduled',
    link: 'https://meet.google.com/lmn-opqr-stu'
  },
  {
    id: 'INT-506',
    candidateName: 'Arjun Kulkarni',
    candidateRole: 'Senior Cloud DevOps Architect',
    interviewer: 'Rajesh Sharma (Director Engg)',
    time: 'Sat (Aug 09) • 10:30 AM',
    type: 'Final Executive Panel Round',
    status: 'Scheduled',
    link: 'https://meet.google.com/efg-hijk-lmn'
  }
];

export const mockEmployees = [
  { id: 'EMP-001', name: 'Rajesh Sharma', role: 'VP Engineering', department: 'Engineering', location: 'Bengaluru', status: 'Active', joiningDate: '12-Jan-2018' },
  { id: 'EMP-002', name: 'Sunita Patel', role: 'Head of Product Design', department: 'Design', location: 'Gurugram', status: 'Active', joiningDate: '04-Mar-2020' },
  { id: 'EMP-003', name: 'Arjun Kulkarni', role: 'Senior DevOps Architect', department: 'Infrastructure', location: 'Hyderabad', status: 'Active', joiningDate: '15-Aug-2021' },
  { id: 'EMP-004', name: 'Neha Gupta', role: 'Lead Talent Acquisition Manager', department: 'HR', location: 'Bengaluru', status: 'Active', joiningDate: '01-Nov-2022' },
  { id: 'EMP-005', name: 'Amitabh Sen', role: 'Director Enterprise Sales', department: 'Sales', location: 'Mumbai', status: 'Active', joiningDate: '10-Feb-2023' }
];

export const mockStats = [
  { label: 'Active Resumes Pool', value: 48, suffix: 'L+' },
  { label: 'Avg. Time To Hire', value: 14, suffix: ' Days' },
  { label: 'Corporate Employers', value: 12.5, suffix: 'K+' },
  { label: 'Offer Acceptance Rate', value: 92, suffix: '%' }
];

export const mockTestimonials = [
  {
    name: 'Rajiv Mehta',
    designation: 'VP of Human Resources',
    company: 'TechCorp Solutions',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    text: 'EmployerHub transformed our hiring workflow. We reduced our time-to-hire from 45 days down to 14 days with their AI candidate ranking.'
  },
  {
    name: 'Shalini Nair',
    designation: 'Head of Talent Acquisition',
    company: 'Fintech Unicorn India',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    text: 'The Kanban ATS pipeline and 1-click Google Meet scheduling saved our recruiters 20+ hours every week. Highly recommended for enterprise teams.'
  },
  {
    name: 'Vikram Choudhury',
    designation: 'Founder & CEO',
    company: 'Nexus SaaS Labs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    text: 'Clear pricing, zero hidden charges, and immediate access to 4.8 Million verified tech profiles across India.'
  }
];

export const mockFaqs = [
  {
    q: 'How quickly can our company post jobs and start receiving candidate profiles?',
    a: 'Instant setup! As soon as you register your company account and choose a plan, your ATS dashboard activates immediately to publish job requisitions.'
  },
  {
    q: 'Does EmployerHub support GST invoice billing for Indian enterprises?',
    a: 'Yes, full GST invoices are automatically generated and emailed to your billing admin upon subscription activation or renewal.'
  },
  {
    q: 'Can we invite multiple recruiters and hiring managers to our company portal?',
    a: 'Absolutely! Our Modern SaaS and Premium Enterprise plans support unlimited team seats with custom role-based permissions.'
  }
];
