export const mockCrmUser = {
  name: 'Alex Rivera',
  email: 'alex.rivera@fintechsaas.com',
  company: 'AeroPulse Global Tech Ltd',
  whatsappNumber: '+1 (555) 019-2834',
  country: 'United States',
  flag: '🇺🇸',
  currency: 'USD',
  symbol: '$',
  subscription: {
    planId: 'professional',
    planName: 'Professional CRM Plan',
    status: 'Active',
    renewsOn: '28 Aug 2026',
    pricePaid: '$79/mo',
    billingCycle: 'Monthly',
    messagesUsed: 42850,
    messagesLimit: 150000,
    aiQuotaUsed: 8420,
    aiQuotaLimit: 15000,
    contactsCount: 18420
  },
  stats: {
    totalSent: 142850,
    totalReceived: 98410,
    deliveryRate: '99.4%',
    aiAutoReplied: 18490,
    activeAgents: 8,
    activeCampaigns: 4,
    avgResponseTimeSec: 14
  },
  recentActivities: [
    { id: 1, type: 'broadcast', title: 'Summer Flash Sale Broadcast Sent', detail: 'Sent to 12,500 contacts (99.6% delivered)', time: '10 mins ago', status: 'Completed' },
    { id: 2, type: 'ai', title: 'AI Assistant Qualified New Lead', detail: 'Contact #9812 requested pricing demo', time: '24 mins ago', status: 'Converted' },
    { id: 3, type: 'order', title: 'Shopify Order #1089 Auto-Confirmed', detail: 'COD verification OTP validated on WhatsApp', time: '1 hour ago', status: 'Success' },
    { id: 4, type: 'inbox', title: 'Agent Sarah Assigned to Support Ticket', detail: 'Customer inquiry re: International Shipping', time: '2 hours ago', status: 'Assigned' }
  ],
  notifications: [
    { id: 1, text: 'Meta Cloud API token renewed successfully.', time: 'Today 09:30 AM', unread: true },
    { id: 2, text: 'Monthly AI Bot auto-reply quota reached 56%.', time: 'Yesterday', unread: true },
    { id: 3, text: 'Invoice #INV-2026-0812 ($79.00) paid.', time: '01 Aug 2026', unread: false }
  ],
  invoices: [
    { id: 'INV-2026-0812', date: '01 Aug 2026', amount: '$79.00', status: 'Paid', plan: 'Professional CRM (Monthly)', pdf: 'Invoice_Aug2026.pdf' },
    { id: 'INV-2026-0701', date: '01 Jul 2026', amount: '$79.00', status: 'Paid', plan: 'Professional CRM (Monthly)', pdf: 'Invoice_Jul2026.pdf' },
    { id: 'INV-2026-0601', date: '01 Jun 2026', amount: '$79.00', status: 'Paid', plan: 'Professional CRM (Monthly)', pdf: 'Invoice_Jun2026.pdf' }
  ]
};
