export const countriesData = [
  { code: 'US', name: 'United States', flag: '🇺🇸', currency: 'USD', symbol: '$', rateMultiplier: 1.0 },
  { code: 'IN', name: 'India', flag: '🇮🇳', currency: 'INR', symbol: '₹', rateMultiplier: 80.0 },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', currency: 'GBP', symbol: '£', rateMultiplier: 0.8 },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪', currency: 'AED', symbol: 'AED ', rateMultiplier: 3.67 },
  { code: 'DE', name: 'Germany / Europe', flag: '🇪🇺', currency: 'EUR', symbol: '€', rateMultiplier: 0.92 },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', currency: 'SGD', symbol: 'S$', rateMultiplier: 1.35 },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', currency: 'AUD', symbol: 'A$', rateMultiplier: 1.50 },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', currency: 'BRL', symbol: 'R$', rateMultiplier: 5.00 }
];

export const basePlans = [
  {
    id: 'free',
    name: 'Free Trial',
    badge: '14-Day Free Access',
    basePriceMonthly: 0,
    basePriceAnnual: 0,
    contactsLimit: '500 Contacts',
    messagesLimit: '1,000 Messages/mo',
    teamMembers: '1 Agent Seat',
    aiBotResponses: '100 AI Bot Auto-replies',
    features: [
      'WhatsApp Cloud API Connect',
      'Shared Team Inbox',
      'Basic Contact Tagging',
      'Community Slack Support'
    ],
    highlighted: false,
    buttonText: 'Start Free Trial'
  },
  {
    id: 'starter',
    name: 'Starter AI',
    badge: 'Best for Small Business',
    basePriceMonthly: 29,
    basePriceAnnual: 23, // 20% discount
    contactsLimit: '5,000 Contacts',
    messagesLimit: '25,000 Messages/mo',
    teamMembers: '3 Agent Seats',
    aiBotResponses: '2,500 AI Bot Auto-replies',
    features: [
      'All Free Plan Features',
      'GPT-4o Auto-Responder Bot',
      'Broadcast Marketing Campaigns',
      'Interactive Reply Buttons & Templates',
      'CSV Contact Import & Export',
      'Standard Email & Chat Support'
    ],
    highlighted: false,
    buttonText: 'Get Started'
  },
  {
    id: 'professional',
    name: 'Professional CRM',
    badge: 'Most Popular',
    basePriceMonthly: 79,
    basePriceAnnual: 63,
    contactsLimit: '25,000 Contacts',
    messagesLimit: '150,000 Messages/mo',
    teamMembers: '10 Agent Seats',
    aiBotResponses: '15,000 AI Bot Auto-replies',
    features: [
      'All Starter Plan Features',
      'Multi-lingual AI Chatbots (50+ Languages)',
      'Shopify / WooCommerce Product Catalog Sync',
      'Automatic Order Tracking Notifications',
      'Smart Lead Scoring & Drip Workflows',
      'Priority 24/7 Support with SLA'
    ],
    highlighted: true,
    buttonText: 'Upgrade to Pro'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Scale',
    badge: 'Custom Dedicated',
    basePriceMonthly: 199,
    basePriceAnnual: 159,
    contactsLimit: 'Unlimited Contacts',
    messagesLimit: '1,000,000+ Messages/mo',
    teamMembers: 'Unlimited Seats',
    aiBotResponses: 'Unlimited AI Automations',
    features: [
      'All Professional Features',
      'Dedicated WhatsApp Official Green Tick',
      'Custom LLM Fine-Tuning on Brand Knowledge',
      'Dedicated Account Manager & Onboarding',
      'Custom Webhooks & REST API Integrations',
      '99.99% Uptime Guarantee SLA'
    ],
    highlighted: false,
    buttonText: 'Contact Sales'
  }
];

export const comparisonMatrix = [
  { feature: 'WhatsApp Official Cloud API', free: '✓', starter: '✓', professional: '✓', enterprise: '✓' },
  { feature: 'Shared Multi-agent Team Inbox', free: '1 Seat', starter: '3 Seats', professional: '10 Seats', enterprise: 'Unlimited' },
  { feature: 'GPT-4o AI Bot Auto-replies', free: '100 / mo', starter: '2,500 / mo', professional: '15,000 / mo', enterprise: 'Unlimited' },
  { feature: 'Broadcast Campaigns (Bulk Messages)', free: '✗', starter: '✓', professional: '✓', enterprise: '✓' },
  { feature: 'E-commerce Catalog & Order Sync', free: '✗', starter: 'Basic', professional: 'Full Shopify/Woo', enterprise: 'Custom ERP Sync' },
  { feature: 'Smart Lead Tagging & Drip Sequences', free: '✗', starter: '5 Workflows', professional: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Official Green Tick Verification Assistance', free: '✗', starter: '✗', professional: '✓', enterprise: 'Included Dedicated' },
  { feature: 'Support SLA & Onboarding', free: 'Community', starter: '24hr Email', professional: '1hr Priority', enterprise: 'Dedicated Manager' }
];
