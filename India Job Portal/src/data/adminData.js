export const mockAdminData = {
  platformStats: {
    totalCandidates: '4.8M+',
    verifiedCompanies: '18,200+',
    activeLiveJobs: '245,000+',
    monthlyHires: '68,400+',
    totalRevenueMonthly: '₹1.84 Crore',
    pendingCandidateVerifications: 142,
    pendingCompanyVerifications: 38
  },
  pendingCompanyVerifications: [
    { id: 'ver-c1', name: 'Zomato Media Pvt Ltd', gstin: '07AAACZ8910F1Z2', cin: 'U74999HR2008PTC037608', date: '02 Aug 2026', status: 'Pending Review', docs: 'GST_Certificate_Zomato.pdf' },
    { id: 'ver-c2', name: 'Swiggy Bundl Tech', gstin: '29AABCB4102F1Z9', cin: 'U72200KA2014PTC077123', date: '01 Aug 2026', status: 'Pending Review', docs: 'COI_Swiggy.pdf' }
  ],
  pendingCandidateVerifications: [
    { id: 'ver-u1', name: 'Rohan Deshmukh', type: 'IIT Degree Verification', degree: 'B.Tech IIT Bombay', status: 'Pending Verification' },
    { id: 'ver-u2', name: 'Meera Iyer', type: 'Aadhaar Identity Verification', status: 'Pending Verification' }
  ],
  masterIndustries: [
    'Information Technology & Software',
    'Banking & Financial Services (BFSI)',
    'E-Commerce & Supply Chain',
    'Healthcare & Pharmaceuticals',
    'Sales, Marketing & Business Development',
    'Automotive & Manufacturing',
    'Education & EdTech',
    'Media, Entertainment & Content'
  ],
  masterCities: [
    { name: 'Bengaluru', state: 'Karnataka', district: 'Bengaluru Urban' },
    { name: 'Mumbai', state: 'Maharashtra', district: 'Mumbai City' },
    { name: 'Gurugram', state: 'Haryana', district: 'Gurugram' },
    { name: 'Hyderabad', state: 'Telangana', district: 'Ranga Reddy' },
    { name: 'Pune', state: 'Maharashtra', district: 'Pune' },
    { name: 'Chennai', state: 'Tamil Nadu', district: 'Chennai' }
  ]
};
