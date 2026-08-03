export const mockUserData = {
  name: 'Rajesh Sharma',
  email: 'rajesh.sharma@example.com',
  phone: '+91 98765 43210',
  city: 'Bengaluru, Karnataka',
  cibilScore: 785,
  activeLoan: {
    loanId: 'SL-2026-88912',
    lenderName: 'State Bank Green Solar Loan',
    lenderLogo: '🏛️',
    sanctionedAmount: 350000,
    disbursedAmount: 350000,
    remainingBalance: 310500,
    tenureMonths: 84,
    paidEMIs: 8,
    interestRate: 6.95,
    monthlyEMI: 5240,
    nextEmiDate: '15 Aug 2026',
    solarCapacityKw: 5.5,
    solarInstaller: 'Tata Power Solar Authorized EPC',
    lifetimeGenerationKwh: 4820,
    monthlyElectricitySavedRs: 6850,
    netMonthlyGainRs: 1610, // Savings minus EMI!
    co2OffsetTons: 3.9
  },
  applicationHistory: [
    {
      id: 'SL-2026-88912',
      product: '5.5 kW Residential Rooftop Solar',
      bank: 'SBI Green Solar',
      amount: 350000,
      status: 'Active & Disbursed',
      date: '12 Jan 2026',
      progressPercent: 100
    },
    {
      id: 'SL-2025-41029',
      product: '15 kW Commercial Rooftop Upgrade',
      bank: 'Tata Capital CleanTech',
      amount: 850000,
      status: 'Under Review',
      date: '28 Jul 2026',
      progressPercent: 65
    }
  ],
  trackingTimeline: [
    { step: 1, title: 'Application Submitted', date: '28 Jul 2026, 10:30 AM', completed: true, details: 'Form details received & verified digitally.' },
    { step: 2, title: 'Documents Verified', date: '28 Jul 2026, 04:15 PM', completed: true, details: 'Aadhaar, PAN, Paystub & Solar Vendor Quote approved.' },
    { step: 3, title: 'Under Technical Review', date: '29 Jul 2026, 11:00 AM', completed: true, details: 'Roof solar feasibility and grid Net Metering validated.' },
    { step: 4, title: 'Credit & Sanction Approved', date: '30 Jul 2026, 02:45 PM', completed: true, details: 'Sanction letter generated with 7.10% p.a. interest rate.' },
    { step: 5, title: 'Sanction Letter Download Ready', date: '31 Jul 2026, 09:00 AM', completed: true, details: 'Applicant signed digitally via e-Sign OTP.' },
    { step: 6, title: 'Disbursement to Solar Vendor', date: 'Expected 05 Aug 2026', completed: false, details: 'Phase 1 Tranche (50% Panel Delivery) scheduled.' },
    { step: 7, title: 'Grid Metering & Completed', date: 'Pending', completed: false, details: 'DISCOM Net-metering integration & final signoff.' }
  ],
  disbursementSchedule: [
    { tranche: 'Tranche 1 (Advance Booking)', percent: 20, amount: 170000, status: 'Released', releaseDate: '31 Jul 2026', recipient: 'Tata Power Solar Vendor Account' },
    { tranche: 'Tranche 2 (Panel & Inverter Delivery)', percent: 50, amount: 425000, status: 'Pending Approval', releaseDate: 'Expected 05 Aug 2026', recipient: 'Solar EPC Escrow Account' },
    { tranche: 'Tranche 3 (DISCOM Net Metering Sync)', percent: 30, amount: 255000, status: 'Scheduled', releaseDate: 'Expected 12 Aug 2026', recipient: 'Solar EPC Final Settlement' }
  ],
  recentPayments: [
    { id: 'PAY-9018', date: '15 Jul 2026', amount: 5240, status: 'Paid', method: 'Auto-Debit NACH (HDFC Bank)' },
    { id: 'PAY-8102', date: '15 Jun 2026', amount: 5240, status: 'Paid', method: 'Auto-Debit NACH (HDFC Bank)' },
    { id: 'PAY-7419', date: '15 May 2026', amount: 5240, status: 'Paid', method: 'UPI Instant Payment' },
    { id: 'PAY-6211', date: '15 Apr 2026', amount: 5240, status: 'Paid', method: 'Auto-Debit NACH (HDFC Bank)' }
  ],
  documentsVault: [
    { name: 'Sanction_Letter_SL202688912.pdf', category: 'Loan Letter', date: '12 Jan 2026', size: '1.4 MB' },
    { name: 'Solar_Vendor_Quotation_TataPower.pdf', category: 'Project Quote', date: '10 Jan 2026', size: '2.8 MB' },
    { name: 'PM_Surya_Ghar_Subsidy_Receipt.pdf', category: 'Govt Subsidy', date: '22 Feb 2026', size: '890 KB' },
    { name: 'Net_Metering_DISCOM_Approval.pdf', category: 'Grid Approval', date: '18 Feb 2026', size: '1.1 MB' }
  ]
};
