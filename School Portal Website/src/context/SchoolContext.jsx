import React, { createContext, useContext, useState } from 'react';

const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  // Navigation State
  const [activePage, setActivePage] = useState('dashboard');
  
  // Subscription Plan ('Basic' | 'Premium')
  const [subscription, setSubscription] = useState('Premium');

  // Toasts State
  const [toasts, setToasts] = useState([]);
  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // 1. School Profile State
  const [schoolProfile, setSchoolProfile] = useState({
    name: 'Greenwood International School',
    tagline: 'Empowering Young Minds for Tomorrow',
    code: 'SCH-IND-8842',
    type: 'Private K-12 Partner',
    board: 'CBSE / Cambridge Affiliate',
    established: 2012,
    address: 'Sector 42, Tech Park Boulevard, Bengaluru – 560103',
    phone: '+91 98765 43210',
    email: 'partnerships@greenwoodintl.edu.in',
    website: 'https://greenwoodintl.edu.in',
    principal: {
      name: 'Dr. Radhika Sen',
      qualification: 'Ph.D. in Educational Leadership',
      phone: '+91 98765 11223',
      email: 'principal@greenwoodintl.edu.in'
    },
    infrastructure: {
      totalCampusArea: '5.2 Acres',
      totalClassrooms: 32,
      smartRooms: 18,
      auditoriums: 2,
      laboratories: 4,
      sportsGround: 'Yes (Football, Tennis, Basketball)'
    },
    bankDetails: {
      bankName: 'HDFC Bank Ltd',
      accountName: 'Greenwood Educational Trust',
      accountNumber: '50200049281742',
      ifscCode: 'HDFC0001244',
      branch: 'Indiranagar, Bengaluru'
    },
    gstDetails: {
      gstin: '29AAACG1234F1Z8',
      panNumber: 'AAACG1234F',
      taxStatus: 'Active Exempt (Educational Entity)'
    },
    verificationStatus: 'Approved', // Approved, Pending, Under Review, Rejected
    approvalTimeline: [
      { step: 'Document Submission', date: '10 Jan 2026', status: 'Completed' },
      { step: 'Infrastructure Physical Verification', date: '14 Jan 2026', status: 'Completed' },
      { step: 'MoU & Banking Validation', date: '18 Jan 2026', status: 'Completed' },
      { step: 'Final CSF Partnership Approval', date: '22 Jan 2026', status: 'Approved' }
    ]
  });

  // 2. Classrooms State
  const [classrooms, setClassrooms] = useState([
    {
      id: 'CR-101',
      name: 'Innovation Hub Alpha',
      roomNumber: 'A-201',
      capacity: 35,
      maxStudents: 30,
      ageGroup: '5–8 Years',
      rentalPrice: 8500, // per week
      isSmart: true,
      hasAC: true,
      hasProjector: true,
      hasWhiteboard: true,
      hasWifi: true,
      hasCCTV: true,
      type: 'Indoor',
      status: 'Reserved', // Available, Reserved, Occupied, Under Maintenance
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80',
      description: 'Air-conditioned smart classroom equipped with interactive touch board, ergonomic seating, and high-speed fiber internet.'
    },
    {
      id: 'CR-102',
      name: 'Robotics & STEM Lab',
      roomNumber: 'B-104',
      capacity: 40,
      maxStudents: 35,
      ageGroup: '7–10 Years',
      rentalPrice: 10000,
      isSmart: true,
      hasAC: true,
      hasProjector: true,
      hasWhiteboard: true,
      hasWifi: true,
      hasCCTV: true,
      type: 'Indoor',
      status: 'Occupied',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80',
      description: 'Specialized lab with modular desks, electronic kit storage, and safety mats ideal for hands-on robotics workshops.'
    },
    {
      id: 'CR-103',
      name: 'Creative Studio Beta',
      roomNumber: 'C-302',
      capacity: 30,
      maxStudents: 25,
      ageGroup: '3–6 Years',
      rentalPrice: 7000,
      isSmart: false,
      hasAC: true,
      hasProjector: false,
      hasWhiteboard: true,
      hasWifi: true,
      hasCCTV: true,
      type: 'Indoor',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80',
      description: 'Brightly lit creative studio designed for early sensory play, drawing, crafts, and storytelling sessions.'
    },
    {
      id: 'CR-104',
      name: 'Leadership & Debate Hall',
      roomNumber: 'A-108',
      capacity: 50,
      maxStudents: 45,
      ageGroup: '8–12 Years',
      rentalPrice: 12000,
      isSmart: true,
      hasAC: true,
      hasProjector: true,
      hasWhiteboard: true,
      hasWifi: true,
      hasCCTV: true,
      type: 'Indoor',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80',
      description: 'Tiered acoustic room perfect for public speaking, drama, and youth leadership foundation activities.'
    }
  ]);

  // 3. CSF Published Programs State (Centrally managed by CSF)
  const [csfPrograms, setCsfPrograms] = useState([
    {
      id: 'CSF-PRG-01',
      title: 'Junior Robotics & Autonomous Systems',
      banner: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
      description: 'A 10-session hands-on engineering journey introducing kids to motors, sensors, and basic block coding.',
      ageGroup: '6–9 Years',
      durationWeeks: 10,
      maxSessions: 10,
      schedule: 'Saturdays, 10:00 AM – 12:00 PM',
      requiredCapacity: 25,
      startDate: '2026-08-15',
      endDate: '2026-10-24',
      totalSeats: 30,
      enrolledCount: 22,
      fee: 6500, // per student
      schoolCommissionPercent: 15, // 15% to school
      weeklyRentalPrice: 8500, // weekly classroom rental paid to school
      status: 'Enrollment Open', // Enrollment Open, In Progress, Scheduled, Completed
      learningOutcomes: [
        'Understand basic circuits and electrical safety',
        'Program line-following micro-bots using visual blocks',
        'Develop critical problem-solving and debugging skills'
      ]
    },
    {
      id: 'CSF-PRG-02',
      title: 'Cognitive Mind Mapping & Memory Master',
      banner: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80',
      description: 'Scientifically backed neuro-cognitive play activities to boost focus, spatial orientation, and recall.',
      ageGroup: '4–7 Years',
      durationWeeks: 8,
      maxSessions: 8,
      schedule: 'Sundays, 11:00 AM – 01:00 PM',
      requiredCapacity: 20,
      startDate: '2026-09-01',
      endDate: '2026-10-20',
      totalSeats: 25,
      enrolledCount: 18,
      fee: 4800,
      schoolCommissionPercent: 15,
      weeklyRentalPrice: 7000,
      status: 'Enrollment Open',
      learningOutcomes: [
        'Improve visual pattern recognition by 40%',
        'Learn mnemonic memory association techniques',
        'Enhance auditory focus during classroom tasks'
      ]
    },
    {
      id: 'CSF-PRG-03',
      title: 'Young Authors & Storytelling Academy',
      banner: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80',
      description: 'Expressive vocabulary building, creative writing, and public elocution mentored by certified authors.',
      ageGroup: '7–11 Years',
      durationWeeks: 10,
      maxSessions: 10,
      schedule: 'Fridays, 04:00 PM – 06:00 PM',
      requiredCapacity: 25,
      startDate: '2026-08-20',
      endDate: '2026-10-29',
      totalSeats: 25,
      enrolledCount: 25,
      fee: 5500,
      schoolCommissionPercent: 15,
      weeklyRentalPrice: 7500,
      status: 'Fully Booked',
      learningOutcomes: [
        'Publish a personal 12-page illustrated storybook',
        'Master vocal modulation and stage presence',
        'Expand core vocabulary by 350+ new words'
      ]
    }
  ]);

  // 4. Student Enrollments State
  const [enrollments, setEnrollments] = useState([
    {
      id: 'ENR-901',
      studentName: 'Aarav Sharma',
      age: 7,
      gender: 'Male',
      grade: 'Grade 2-B',
      programId: 'CSF-PRG-01',
      programTitle: 'Junior Robotics & Autonomous Systems',
      parentName: 'Sanjay Sharma',
      parentPhone: '+91 98112 33445',
      parentEmail: 'sanjay.sharma@gmail.com',
      enrollmentDate: '2026-08-01',
      status: 'Confirmed', // Draft, Submitted, Pending Parent, Payment Pending, Confirmed, Waitlisted, Rejected
      feeAmount: 6500,
      paymentStatus: 'Paid'
    },
    {
      id: 'ENR-902',
      studentName: 'Ananya Verma',
      age: 6,
      gender: 'Female',
      grade: 'Grade 1-A',
      programId: 'CSF-PRG-02',
      programTitle: 'Cognitive Mind Mapping & Memory Master',
      parentName: 'Meera Verma',
      parentPhone: '+91 98223 44556',
      parentEmail: 'meera.verma@outlook.com',
      enrollmentDate: '2026-08-03',
      status: 'Payment Pending',
      feeAmount: 4800,
      paymentStatus: 'Pending'
    },
    {
      id: 'ENR-903',
      studentName: 'Rohan Deshmukh',
      age: 8,
      gender: 'Male',
      grade: 'Grade 3-C',
      programId: 'CSF-PRG-01',
      programTitle: 'Junior Robotics & Autonomous Systems',
      parentName: 'Vikram Deshmukh',
      parentPhone: '+91 98334 55667',
      parentEmail: 'vikram.d@techcorp.com',
      enrollmentDate: '2026-08-04',
      status: 'Pending Parent',
      feeAmount: 6500,
      paymentStatus: 'Unpaid'
    }
  ]);

  // 5. Assigned CSF Teachers (Read-only)
  const [assignedTeachers, setAssignedTeachers] = useState([
    {
      id: 'TCH-108',
      name: 'Prof. Ankit Mehta',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      certification: 'CSF Master Robotics Instructor (Level 3)',
      experience: '8 Years',
      phone: '+91 97711 22334',
      email: 'ankit.mehta@childskillfoundation.org',
      assignedProgram: 'Junior Robotics & Autonomous Systems',
      classroom: 'Robotics & STEM Lab (B-104)',
      arrivalStatus: 'On Site (Checked In at 09:45 AM)',
      schedule: 'Saturdays 10:00 AM – 12:00 PM'
    },
    {
      id: 'TCH-112',
      name: 'Dr. Sunita Rao',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
      certification: 'Cognitive Neuro-Psychologist & CSF Faculty',
      experience: '12 Years',
      phone: '+91 97722 33445',
      email: 'sunita.rao@childskillfoundation.org',
      assignedProgram: 'Cognitive Mind Mapping & Memory Master',
      classroom: 'Innovation Hub Alpha (A-201)',
      arrivalStatus: 'Scheduled (Expected 10:45 AM)',
      schedule: 'Sundays 11:00 AM – 01:00 PM'
    }
  ]);

  // 6. Attendance Records (Read-only)
  const [attendanceRecords, setAttendanceRecords] = useState([
    {
      sessionDate: '2026-08-01',
      programTitle: 'Junior Robotics & Autonomous Systems',
      sessionNumber: 1,
      totalStudents: 22,
      presentStudents: 21,
      absentStudents: 1,
      teacherName: 'Prof. Ankit Mehta',
      sessionStatus: 'Completed',
      attendancePercentage: 95.4
    },
    {
      sessionDate: '2026-08-02',
      programTitle: 'Cognitive Mind Mapping & Memory Master',
      sessionNumber: 1,
      totalStudents: 18,
      presentStudents: 18,
      absentStudents: 0,
      teacherName: 'Dr. Sunita Rao',
      sessionStatus: 'Completed',
      attendancePercentage: 100.0
    }
  ]);

  // 7. Assessments Summary (Read-only)
  const [assessments, setAssessments] = useState([
    {
      programTitle: 'Junior Robotics & Autonomous Systems',
      evaluatedStudents: 22,
      averageScore: '91%',
      topPerformer: 'Aarav Sharma (98%)',
      lastEvaluationDate: '2026-08-01',
      status: 'Session 1 Evaluated by CSF Teacher'
    },
    {
      programTitle: 'Cognitive Mind Mapping & Memory Master',
      evaluatedStudents: 18,
      averageScore: '88%',
      topPerformer: 'Ananya Verma (95%)',
      lastEvaluationDate: '2026-08-02',
      status: 'Session 1 Evaluated by CSF Teacher'
    }
  ]);

  // 8. Revenue & Financial Data
  const [revenueStats, setRevenueStats] = useState({
    totalEarnings: 142500,
    commissionEarnings: 38250, // 15% of student fees
    rentalEarnings: 104250, // Classroom weekly rentals
    pendingPayments: 18500,
    upcomingPayoutDate: '15 Aug 2026',
    invoices: [
      { id: 'INV-2026-081', date: '01 Aug 2026', category: 'Classroom Rental', description: 'Weekly Rental for Innovation Hub (A-201)', amount: 8500, status: 'Paid' },
      { id: 'INV-2026-082', date: '01 Aug 2026', category: 'School Commission', description: '15% Commission on 22 Robotics Enrollments', amount: 21450, status: 'Paid' },
      { id: 'INV-2026-083', date: '03 Aug 2026', category: 'Classroom Rental', description: 'Weekly Rental for STEM Lab (B-104)', amount: 10000, status: 'Processing' }
    ]
  });

  // 9. School Events State (Premium Module)
  const [events, setEvents] = useState([
    {
      id: 'EVT-101',
      title: 'Annual Science & Tech Fair 2026',
      date: '2026-09-15',
      time: '09:00 AM – 04:00 PM',
      venue: 'Greenwood Main Auditorium & Lawn',
      category: 'Science Fair',
      maxSeats: 250,
      registeredCount: 184,
      entryFee: 250, // Paid event ticketing
      status: 'Published',
      description: 'Inter-school project display, robotics demo by CSF instructors, and live experiments for parents & students.'
    },
    {
      id: 'EVT-102',
      title: 'Parenting in Digital Age Workshop',
      date: '2026-08-28',
      time: '11:00 AM – 01:00 PM',
      venue: 'Leadership & Debate Hall (A-108)',
      category: 'Parent Workshop',
      maxSeats: 80,
      registeredCount: 65,
      entryFee: 0, // Free event
      status: 'Published',
      description: 'Expert panel discussion on child brain development, screen time balance, and early talent discovery.'
    }
  ]);

  // 10. Announcements & Notifications
  const [announcements, setAnnouncements] = useState([
    {
      id: 'ANC-01',
      sender: 'Child Skill Foundation HQ',
      title: 'New Autumn 2026 Robotics & Coding Program Published!',
      date: '05 Aug 2026',
      priority: 'High',
      unread: true,
      category: 'New Program',
      message: 'Foundation has published 2 new STEM programs for Q3. Partner schools can apply classrooms to reserve weekly slots.'
    },
    {
      id: 'ANC-02',
      sender: 'School Admin Desk',
      title: 'Scheduled Facility Maintenance in Block C',
      date: '04 Aug 2026',
      priority: 'Normal',
      unread: false,
      category: 'Internal Notice',
      message: 'Air-conditioning servicing in Creative Studio Beta (C-302) is scheduled for Friday evening.'
    }
  ]);

  // 11. Documents Repository
  const [documents, setDocuments] = useState([
    { id: 'DOC-01', name: 'School Registration Certificate', type: 'KYC', size: '2.4 MB', uploadDate: '10 Jan 2026', status: 'Verified' },
    { id: 'DOC-02', name: 'CSF Partnership MoU Agreement 2026', type: 'Contract', size: '4.1 MB', uploadDate: '18 Jan 2026', status: 'Active' },
    { id: 'DOC-03', name: 'CSF Safety & Infrastructure Manual v4', type: 'Guidelines', size: '5.8 MB', uploadDate: '22 Jan 2026', status: 'Official Guideline' }
  ]);

  // Handlers
  const addClassroom = (newRoom) => {
    setClassrooms(prev => [newRoom, ...prev]);
    addToast(`Classroom "${newRoom.name}" added successfully!`);
  };

  const addEvent = (newEvent) => {
    setEvents(prev => [newEvent, ...prev]);
    addToast(`Event "${newEvent.title}" published successfully!`);
  };

  const acceptProgram = (programId, classroomId) => {
    setClassrooms(prev => prev.map(c => c.id === classroomId ? { ...c, status: 'Reserved' } : c));
    setCsfPrograms(prev => prev.map(p => p.id === programId ? { ...p, status: 'Classroom Reserved' } : p));
    addToast('Program accepted & classroom reserved for weekly schedule!', 'success');
  };

  const enrollStudent = (newEnrollment) => {
    setEnrollments(prev => [newEnrollment, ...prev]);
    addToast(`Student ${newEnrollment.studentName} enrolled successfully!`);
  };

  return (
    <SchoolContext.Provider value={{
      activePage,
      setActivePage,
      subscription,
      setSubscription,
      toasts,
      addToast,
      schoolProfile,
      setSchoolProfile,
      classrooms,
      addClassroom,
      csfPrograms,
      acceptProgram,
      enrollments,
      enrollStudent,
      assignedTeachers,
      attendanceRecords,
      assessments,
      revenueStats,
      events,
      addEvent,
      announcements,
      documents
    }}>
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => useContext(SchoolContext);
