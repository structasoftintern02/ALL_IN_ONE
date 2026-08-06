// ─── Premium Admin Dashboard — Mock Data Layer ───

export const platformStats = {
  totalChildren: { value: '28,450', trend: '+12.5%', direction: 'up', label: 'Total Children', color: 'indigo' },
  activeSchools: { value: '342', trend: '+8.2%', direction: 'up', label: 'Active Schools', color: 'blue' },
  certifiedTeachers: { value: '1,248', trend: '+15.3%', direction: 'up', label: 'Certified Teachers', color: 'purple' },
  assessmentsDone: { value: '4,280', trend: '+22.1%', direction: 'up', label: 'Assessments Done', color: 'emerald' },
  monthlyRevenue: { value: '₹18.6L', trend: '+18.7%', direction: 'up', label: 'Monthly Revenue', color: 'amber' },
  activeParents: { value: '12,840', trend: '+9.4%', direction: 'up', label: 'Active Parents', color: 'pink' }
};

export const revenueChartData = [
  { month: 'Jan', revenue: 820000, enrollments: 1200 },
  { month: 'Feb', revenue: 940000, enrollments: 1380 },
  { month: 'Mar', revenue: 1100000, enrollments: 1560 },
  { month: 'Apr', revenue: 1050000, enrollments: 1490 },
  { month: 'May', revenue: 1280000, enrollments: 1720 },
  { month: 'Jun', revenue: 1420000, enrollments: 1890 },
  { month: 'Jul', revenue: 1560000, enrollments: 2100 },
  { month: 'Aug', revenue: 1860000, enrollments: 2340 }
];

export const ageGroupDistribution = [
  { group: '3–5 Years', count: 11200, percentage: 39, color: '#EC4899', label: 'Early Observation' },
  { group: '5–7 Years', count: 9850, percentage: 35, color: '#F59E0B', label: 'Cognitive & Creative' },
  { group: '7–10 Years', count: 7400, percentage: 26, color: '#10B981', label: 'Advanced Talent' }
];

export const assessmentCategories = [
  { name: 'Cognitive & Logical', completed: 1240, total: 1500, percentage: 83, color: '#4F46E5', icon: '🧠' },
  { name: 'Motor & Physical', completed: 980, total: 1200, percentage: 82, color: '#3B82F6', icon: '🏃' },
  { name: 'Creative & Visual Arts', completed: 760, total: 1000, percentage: 76, color: '#EC4899', icon: '🎨' },
  { name: 'STEM & Robotics', completed: 620, total: 800, percentage: 78, color: '#8B5CF6', icon: '🤖' },
  { name: 'Language & Speech', completed: 540, total: 700, percentage: 77, color: '#10B981', icon: '🗣️' },
  { name: 'Musical & Rhythm', completed: 340, total: 500, percentage: 68, color: '#F59E0B', icon: '🎵' }
];

export const recentEnrollments = [
  { id: 'ENR-2801', childName: 'Aarav Sharma', parentName: 'Priya Sharma', age: '4 yrs', ageGroup: '3–5', school: 'Delhi Public School', program: 'Sensory & Motor Assessment', date: '05 Aug 2026', status: 'Active', avatar: 'AS' },
  { id: 'ENR-2802', childName: 'Ananya Gupta', parentName: 'Rohit Gupta', age: '6 yrs', ageGroup: '5–7', school: 'Ryan International', program: 'Creative Logic & Pattern', date: '04 Aug 2026', status: 'Active', avatar: 'AG' },
  { id: 'ENR-2803', childName: 'Vihaan Patel', parentName: 'Neha Patel', age: '8 yrs', ageGroup: '7–10', school: 'Greenwood High', program: 'Junior Robotics', date: '04 Aug 2026', status: 'Pending', avatar: 'VP' },
  { id: 'ENR-2804', childName: 'Diya Reddy', parentName: 'Sanjay Reddy', age: '5 yrs', ageGroup: '3–5', school: 'Orchids Intl.', program: 'Language & Phonetic Explorer', date: '03 Aug 2026', status: 'Active', avatar: 'DR' },
  { id: 'ENR-2805', childName: 'Arjun Nair', parentName: 'Meera Nair', age: '7 yrs', ageGroup: '5–7', school: 'Amity Global', program: 'Visual Arts & Expression', date: '03 Aug 2026', status: 'Active', avatar: 'AN' },
  { id: 'ENR-2806', childName: 'Ishaan Mehta', parentName: 'Kavita Mehta', age: '9 yrs', ageGroup: '7–10', school: 'The Heritage School', program: 'Musical Pitch & Rhythm', date: '02 Aug 2026', status: 'Completed', avatar: 'IM' },
  { id: 'ENR-2807', childName: 'Saanvi Joshi', parentName: 'Arun Joshi', age: '3 yrs', ageGroup: '3–5', school: 'Kidzee Academy', program: 'Sensory & Motor Assessment', date: '02 Aug 2026', status: 'Active', avatar: 'SJ' },
  { id: 'ENR-2808', childName: 'Reyansh Kumar', parentName: 'Deepak Kumar', age: '6 yrs', ageGroup: '5–7', school: 'Vibgyor High', program: 'Creative Logic & Pattern', date: '01 Aug 2026', status: 'Pending', avatar: 'RK' }
];

export const pendingTeachers = [
  { id: 'VT-001', name: 'Sunita Rao, M.Sc.', specialization: 'Phonics & Speech Coach', cert: 'Early Childhood Phonics Diploma (Trinity)', experience: '8 yrs', date: '04 Aug 2026', status: 'Pending Review', avatar: 'SR', rating: 4.8 },
  { id: 'VT-002', name: 'Manish Verma, B.E.', specialization: 'Robotics Instructor', cert: 'STEM Pedagogy Certified (IIT)', experience: '5 yrs', date: '04 Aug 2026', status: 'Pending Review', avatar: 'MV', rating: 4.6 },
  { id: 'VT-003', name: 'Prerna Singh, M.Ed.', specialization: 'Motor Skills Therapist', cert: 'Occupational Therapy License', experience: '12 yrs', date: '03 Aug 2026', status: 'Pending Review', avatar: 'PS', rating: 4.9 },
  { id: 'VT-004', name: 'Ravi Kulkarni, B.F.A.', specialization: 'Visual Arts Educator', cert: 'National Fine Arts Certification', experience: '6 yrs', date: '03 Aug 2026', status: 'Pending Review', avatar: 'RK', rating: 4.5 },
  { id: 'VT-005', name: 'Anita Desai, M.A.', specialization: 'Music & Rhythm Coach', cert: 'Trinity Grade 8 Music Theory', experience: '10 yrs', date: '02 Aug 2026', status: 'Pending Review', avatar: 'AD', rating: 4.7 },
  { id: 'VT-006', name: 'Karan Malhotra, M.Sc.', specialization: 'Cognitive Assessment Expert', cert: 'Child Psychology Diploma (TISS)', experience: '7 yrs', date: '02 Aug 2026', status: 'Pending Review', avatar: 'KM', rating: 4.8 },
  { id: 'VT-007', name: 'Lakshmi Iyer, B.Ed.', specialization: 'Language Development', cert: 'TESOL Certified', experience: '9 yrs', date: '01 Aug 2026', status: 'Pending Review', avatar: 'LI', rating: 4.6 },
  { id: 'VT-008', name: 'Deepa Nambiar, Ph.D.', specialization: 'Child Developmental Psychologist', cert: 'RCI Licensed Psychologist', experience: '15 yrs', date: '01 Aug 2026', status: 'Pending Review', avatar: 'DN', rating: 5.0 }
];

export const pendingSchools = [
  { id: 'VS-001', name: 'Greenwood High International', city: 'Bengaluru', state: 'Karnataka', affiliation: 'CBSE/AFF/193048', type: 'K-12 International', students: 2400, infrastructure: 92, date: '04 Aug 2026', status: 'Pending Audit' },
  { id: 'VS-002', name: 'The Heritage School', city: 'Gurugram', state: 'Haryana', affiliation: 'CBSE/AFF/240156', type: 'Progressive', students: 1800, infrastructure: 88, date: '03 Aug 2026', status: 'Pending Audit' },
  { id: 'VS-003', name: 'Orchids International', city: 'Mumbai', state: 'Maharashtra', affiliation: 'ICSE/AFF/180234', type: 'Day School', students: 3200, infrastructure: 95, date: '03 Aug 2026', status: 'Pending Audit' },
  { id: 'VS-004', name: 'Vibgyor High School', city: 'Pune', state: 'Maharashtra', affiliation: 'CBSE/AFF/210789', type: 'K-12', students: 2100, infrastructure: 85, date: '02 Aug 2026', status: 'Pending Audit' },
  { id: 'VS-005', name: 'Amity Global Academy', city: 'Noida', state: 'Uttar Pradesh', affiliation: 'CBSE/AFF/195632', type: 'International', students: 2800, infrastructure: 90, date: '01 Aug 2026', status: 'Pending Audit' }
];

export const topSchools = [
  { rank: 1, name: 'Delhi Public School, RK Puram', city: 'New Delhi', enrollments: 480, rating: 4.9, growth: '+24%' },
  { rank: 2, name: 'Ryan International, Vasant Kunj', city: 'New Delhi', enrollments: 420, rating: 4.8, growth: '+18%' },
  { rank: 3, name: 'Amity Global School', city: 'Noida', enrollments: 380, rating: 4.7, growth: '+22%' },
  { rank: 4, name: 'Greenwood High International', city: 'Bengaluru', enrollments: 350, rating: 4.8, growth: '+15%' },
  { rank: 5, name: 'The Heritage School', city: 'Gurugram', enrollments: 310, rating: 4.6, growth: '+20%' }
];

export const activityFeed = [
  { id: 1, type: 'enrollment', message: 'Aarav Sharma enrolled in Sensory & Motor Assessment', time: '2 mins ago', icon: '👶' },
  { id: 2, type: 'verification', message: 'Teacher Sunita Rao submitted certification for review', time: '15 mins ago', icon: '📋' },
  { id: 3, type: 'assessment', message: 'Assessment batch completed for DPS Grade 1 (28 children)', time: '1 hour ago', icon: '✅' },
  { id: 4, type: 'school', message: 'Greenwood High applied for platform accreditation', time: '2 hours ago', icon: '🏫' },
  { id: 5, type: 'payment', message: 'Revenue milestone: ₹18L monthly target achieved', time: '3 hours ago', icon: '💰' },
  { id: 6, type: 'report', message: 'Monthly diagnostic report generated for 1,240 children', time: '5 hours ago', icon: '📊' },
  { id: 7, type: 'teacher', message: 'Deepa Nambiar (Ph.D.) approved as certified psychologist', time: '6 hours ago', icon: '🎓' },
  { id: 8, type: 'system', message: 'Platform uptime: 99.97% — All systems operational', time: '8 hours ago', icon: '⚡' }
];

export const subscriptionStats = [
  { plan: 'Basic Assessment', count: 8400, percentage: 42, revenue: '₹4.2L', color: '#3B82F6' },
  { plan: 'Premium Diagnostic', count: 7200, percentage: 36, revenue: '₹8.6L', color: '#8B5CF6' },
  { plan: 'Enterprise School', count: 4400, percentage: 22, revenue: '₹5.8L', color: '#10B981' }
];

export const systemHealth = {
  uptime: '99.97%',
  apiResponseTime: '142ms',
  activeSessions: 1847,
  storageUsed: '68%',
  lastBackup: '05 Aug 2026, 02:00 AM',
  serverStatus: 'Operational'
};

export const allChildren = [
  { id: 'CH-001', name: 'Aarav Sharma', age: 4, ageGroup: '3–5', parent: 'Priya Sharma', school: 'DPS, RK Puram', program: 'Sensory & Motor', assessments: 3, status: 'Active', joinDate: '12 Jan 2026', avatar: 'AS' },
  { id: 'CH-002', name: 'Ananya Gupta', age: 6, ageGroup: '5–7', parent: 'Rohit Gupta', school: 'Ryan International', program: 'Creative Logic', assessments: 5, status: 'Active', joinDate: '18 Feb 2026', avatar: 'AG' },
  { id: 'CH-003', name: 'Vihaan Patel', age: 8, ageGroup: '7–10', parent: 'Neha Patel', school: 'Greenwood High', program: 'Junior Robotics', assessments: 4, status: 'Active', joinDate: '05 Mar 2026', avatar: 'VP' },
  { id: 'CH-004', name: 'Diya Reddy', age: 5, ageGroup: '3–5', parent: 'Sanjay Reddy', school: 'Orchids Intl.', program: 'Language & Phonetic', assessments: 2, status: 'Active', joinDate: '22 Mar 2026', avatar: 'DR' },
  { id: 'CH-005', name: 'Arjun Nair', age: 7, ageGroup: '5–7', parent: 'Meera Nair', school: 'Amity Global', program: 'Visual Arts', assessments: 6, status: 'Completed', joinDate: '10 Apr 2026', avatar: 'AN' },
  { id: 'CH-006', name: 'Ishaan Mehta', age: 9, ageGroup: '7–10', parent: 'Kavita Mehta', school: 'Heritage School', program: 'Musical Pitch', assessments: 7, status: 'Active', joinDate: '28 Apr 2026', avatar: 'IM' },
  { id: 'CH-007', name: 'Saanvi Joshi', age: 3, ageGroup: '3–5', parent: 'Arun Joshi', school: 'Kidzee Academy', program: 'Sensory & Motor', assessments: 1, status: 'New', joinDate: '15 May 2026', avatar: 'SJ' },
  { id: 'CH-008', name: 'Reyansh Kumar', age: 6, ageGroup: '5–7', parent: 'Deepak Kumar', school: 'Vibgyor High', program: 'Creative Logic', assessments: 3, status: 'Active', joinDate: '02 Jun 2026', avatar: 'RK' },
  { id: 'CH-009', name: 'Myra Kapoor', age: 4, ageGroup: '3–5', parent: 'Vikram Kapoor', school: 'DPS Vasant Kunj', program: 'Language & Phonetic', assessments: 2, status: 'Active', joinDate: '18 Jun 2026', avatar: 'MK' },
  { id: 'CH-010', name: 'Kabir Saxena', age: 10, ageGroup: '7–10', parent: 'Anjali Saxena', school: 'Modern School', program: 'Junior Robotics', assessments: 8, status: 'Completed', joinDate: '01 Jul 2026', avatar: 'KS' }
];

export const allParents = [
  { id: 'PR-001', name: 'Priya Sharma', email: 'priya.sharma@email.com', phone: '+91 98765 43210', children: 2, subscription: 'Premium', totalSpent: '₹24,500', joinDate: '12 Jan 2026', status: 'Active', avatar: 'PS' },
  { id: 'PR-002', name: 'Rohit Gupta', email: 'rohit.gupta@email.com', phone: '+91 87654 32109', children: 1, subscription: 'Basic', totalSpent: '₹8,200', joinDate: '18 Feb 2026', status: 'Active', avatar: 'RG' },
  { id: 'PR-003', name: 'Neha Patel', email: 'neha.patel@email.com', phone: '+91 76543 21098', children: 1, subscription: 'Premium', totalSpent: '₹32,800', joinDate: '05 Mar 2026', status: 'Active', avatar: 'NP' },
  { id: 'PR-004', name: 'Sanjay Reddy', email: 'sanjay.reddy@email.com', phone: '+91 65432 10987', children: 3, subscription: 'Enterprise', totalSpent: '₹56,400', joinDate: '22 Mar 2026', status: 'Active', avatar: 'SR' },
  { id: 'PR-005', name: 'Meera Nair', email: 'meera.nair@email.com', phone: '+91 54321 09876', children: 1, subscription: 'Basic', totalSpent: '₹6,500', joinDate: '10 Apr 2026', status: 'Inactive', avatar: 'MN' },
  { id: 'PR-006', name: 'Kavita Mehta', email: 'kavita.mehta@email.com', phone: '+91 43210 98765', children: 2, subscription: 'Premium', totalSpent: '₹41,200', joinDate: '28 Apr 2026', status: 'Active', avatar: 'KM' },
  { id: 'PR-007', name: 'Arun Joshi', email: 'arun.joshi@email.com', phone: '+91 32109 87654', children: 1, subscription: 'Basic', totalSpent: '₹4,800', joinDate: '15 May 2026', status: 'Active', avatar: 'AJ' },
  { id: 'PR-008', name: 'Deepak Kumar', email: 'deepak.kumar@email.com', phone: '+91 21098 76543', children: 2, subscription: 'Enterprise', totalSpent: '₹68,900', joinDate: '02 Jun 2026', status: 'Active', avatar: 'DK' }
];

export const paymentHistory = [
  { id: 'PAY-4501', parent: 'Priya Sharma', amount: '₹4,999', plan: 'Premium Diagnostic', method: 'UPI', date: '05 Aug 2026', status: 'Success' },
  { id: 'PAY-4502', parent: 'Deepak Kumar', amount: '₹12,999', plan: 'Enterprise School', method: 'Card', date: '04 Aug 2026', status: 'Success' },
  { id: 'PAY-4503', parent: 'Kavita Mehta', amount: '₹4,999', plan: 'Premium Diagnostic', method: 'Net Banking', date: '04 Aug 2026', status: 'Success' },
  { id: 'PAY-4504', parent: 'Rohit Gupta', amount: '₹1,999', plan: 'Basic Assessment', method: 'UPI', date: '03 Aug 2026', status: 'Pending' },
  { id: 'PAY-4505', parent: 'Sanjay Reddy', amount: '₹12,999', plan: 'Enterprise School', method: 'Card', date: '03 Aug 2026', status: 'Success' },
  { id: 'PAY-4506', parent: 'Arun Joshi', amount: '₹1,999', plan: 'Basic Assessment', method: 'UPI', date: '02 Aug 2026', status: 'Failed' }
];

export const skillCategoriesData = [
  { id: 'cog', name: 'Cognitive & Logical Aptitude', count: '14 Programs', icon: '🧠', bg: 'bg-blue-100 text-blue-900' },
  { id: 'motor', name: 'Fine & Gross Motor Skills', count: '10 Programs', icon: '🏃‍♂️', bg: 'bg-amber-100 text-amber-900' },
  { id: 'creative', name: 'Creative & Visual Arts', count: '12 Programs', icon: '🎨', bg: 'bg-pink-100 text-pink-900' },
  { id: 'stem', name: 'Robotics & STEM Logic', count: '18 Programs', icon: '🚀', bg: 'bg-purple-100 text-purple-900' },
  { id: 'ling', name: 'Language & Public Speaking', count: '11 Programs', icon: '📢', bg: 'bg-emerald-100 text-emerald-900' },
  { id: 'music', name: 'Musical Pitch & Rhythm', count: '8 Programs', icon: '🎹', bg: 'bg-teal-100 text-teal-900' }
];

export const scheduledReports = [
  { name: 'Weekly Enrollment Summary', frequency: 'Every Monday, 9:00 AM', recipients: 'admin@ecsip.in, ops@ecsip.in', status: 'Active' },
  { name: 'Monthly Revenue Statement', frequency: '1st of every month, 6:00 AM', recipients: 'finance@ecsip.in', status: 'Active' },
  { name: 'Daily Assessment Digest', frequency: 'Daily, 8:00 PM', recipients: 'admin@ecsip.in', status: 'Paused' }
];

