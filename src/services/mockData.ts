// Curated list of 25 companies/products
export const CURATED_COMPANIES = [
  'Zomato', 'Swiggy', 'CRED', 'Paytm', 'Zepto', 'Blinkit', 'Zerodha', 'Groww',
  'Figma', 'Stripe', 'Notion', 'Spotify', 'Airbnb', 'Uber', 'Netflix', 'Slack',
  'Zoom', 'Canva', 'WhatsApp', 'Tinder', 'Duolingo', 'Flipkart', 'Nykaa', 'boAt',
  'Uber India'
] as const;

export type CuratedCompany = typeof CURATED_COMPANIES[number];

export interface CompanyMetadata {
  name: string;
  tagline: string;
  vertical: 'fintech' | 'delivery' | 'productivity' | 'design' | 'streaming' | 'marketplace';
  category: string;
  brandColor: string;
  logoText: string;
}

export const CURATED_COMPANIES_METADATA: CompanyMetadata[] = [
  { name: 'Zomato', tagline: 'India\'s leading food delivery & restaurant aggregator', vertical: 'delivery', category: 'Food Tech', brandColor: '#cb202d', logoText: 'Z' },
  { name: 'Swiggy', tagline: 'Convenient food delivery and quick grocery shopping', vertical: 'delivery', category: 'Food Tech', brandColor: '#fc8019', logoText: 'S' },
  { name: 'CRED', tagline: 'Exclusive rewards platform for high-credit individuals', vertical: 'fintech', category: 'Fintech Payments', brandColor: '#09090b', logoText: 'CR' },
  { name: 'Paytm', tagline: 'Digital mobile wallet and financial services platform', vertical: 'fintech', category: 'Digital Wallet', brandColor: '#00b9f5', logoText: 'P' },
  { name: 'Zepto', tagline: 'Instant grocery delivery platform in under 10 minutes', vertical: 'delivery', category: 'Quick Commerce', brandColor: '#522b90', logoText: 'Zp' },
  { name: 'Blinkit', tagline: 'Instant quick commerce marketplace for daily goods', vertical: 'delivery', category: 'Quick Commerce', brandColor: '#f7d305', logoText: 'Bl' },
  { name: 'Zerodha', tagline: 'India\'s largest stock broker and trading platform', vertical: 'fintech', category: 'Trading Broker', brandColor: '#387ed1', logoText: 'Z' },
  { name: 'Groww', tagline: 'Direct mutual fund investments and stock trading app', vertical: 'fintech', category: 'Wealth Management', brandColor: '#00d09c', logoText: 'G' },
  { name: 'Figma', tagline: 'Collaborative web-based design and prototyping tool', vertical: 'design', category: 'Design Software', brandColor: '#000000', logoText: 'Fg' },
  { name: 'Stripe', tagline: 'Global payment processing platform for online business', vertical: 'fintech', category: 'Payment Gateway', brandColor: '#635bff', logoText: 'St' },
  { name: 'Notion', tagline: 'Unified digital workspace for docs, wikis, and tasks', vertical: 'productivity', category: 'Document & Knowledge', brandColor: '#1a1a1a', logoText: 'N' },
  { name: 'Spotify', tagline: 'Global music, podcast, and media streaming provider', vertical: 'streaming', category: 'Music Streaming', brandColor: '#1db954', logoText: 'Sp' },
  { name: 'Airbnb', tagline: 'Vacation rental home stays and tourism marketplace', vertical: 'marketplace', category: 'Travel Marketplace', brandColor: '#ff5a5f', logoText: 'Ab' },
  { name: 'Uber', tagline: 'Global ride-hailing and passenger mobility platform', vertical: 'marketplace', category: 'Ride-Hailing', brandColor: '#000000', logoText: 'Ub' },
  { name: 'Netflix', tagline: 'Subscription-based video on demand streaming platform', vertical: 'streaming', category: 'Video Streaming', brandColor: '#e50914', logoText: 'N' },
  { name: 'Slack', tagline: 'Enterprise chat room and team workspace communicator', vertical: 'productivity', category: 'Team Chat', brandColor: '#4a154b', logoText: 'Sl' },
  { name: 'Zoom', tagline: 'Cloud video and audio communications provider', vertical: 'productivity', category: 'Video Meetings', brandColor: '#2d8cff', logoText: 'Zm' },
  { name: 'Canva', tagline: 'Simplified online graphic design and templates creator', vertical: 'design', category: 'Creative Software', brandColor: '#00c4cc', logoText: 'C' },
  { name: 'WhatsApp', tagline: 'Global cross-platform instant messaging provider', vertical: 'productivity', category: 'Instant Messaging', brandColor: '#25d366', logoText: 'Wa' },
  { name: 'Tinder', tagline: 'Location-based social dating and matchmaking app', vertical: 'marketplace', category: 'Social & Dating', brandColor: '#fe3c72', logoText: 'T' },
  { name: 'Duolingo', tagline: 'Gamified language learning application and testing', vertical: 'marketplace', category: 'EdTech Software', brandColor: '#58cc02', logoText: 'D' },
  { name: 'Flipkart', tagline: 'E-commerce shopping portal and online marketplace', vertical: 'marketplace', category: 'E-Commerce', brandColor: '#2874f0', logoText: 'F' },
  { name: 'Nykaa', tagline: 'Premium beauty, cosmetics, and fashion e-retailer', vertical: 'marketplace', category: 'E-Commerce D2C', brandColor: '#fc2779', logoText: 'Ny' },
  { name: 'boAt', tagline: 'Affordable consumer electronics, audio, and wearables', vertical: 'marketplace', category: 'Consumer Tech', brandColor: '#ff0000', logoText: 'bA' },
  { name: 'Uber India', tagline: 'Ride-hailing, autorickshaws, and packages in India', vertical: 'marketplace', category: 'Ride-Hailing India', brandColor: '#1f2937', logoText: 'UI' }
];

// Vertical classification to output highly customized templates
const VERTICALS: Record<CuratedCompany, 'fintech' | 'delivery' | 'productivity' | 'design' | 'streaming' | 'marketplace'> = {
  Zomato: 'delivery',
  Swiggy: 'delivery',
  CRED: 'fintech',
  Paytm: 'fintech',
  Zepto: 'delivery',
  Blinkit: 'delivery',
  Zerodha: 'fintech',
  Groww: 'fintech',
  Figma: 'design',
  Stripe: 'fintech',
  Notion: 'productivity',
  Spotify: 'streaming',
  Airbnb: 'marketplace',
  Uber: 'marketplace',
  Netflix: 'streaming',
  Slack: 'productivity',
  Zoom: 'productivity',
  Canva: 'design',
  WhatsApp: 'productivity',
  Tinder: 'marketplace',
  Duolingo: 'marketplace',
  Flipkart: 'marketplace',
  Nykaa: 'marketplace',
  boAt: 'marketplace',
  'Uber India': 'marketplace'
};

export function getMockTeardown(moduleId: string, company: string): any {
  const comp = company as CuratedCompany;
  const vertical = VERTICALS[comp] || 'marketplace';

  switch (moduleId) {
    case 'personas':
      return getPersonasMock(comp, vertical);
    case 'jtbd':
      return getJtbdMock(comp, vertical);
    case 'journey':
      return getJourneyMock(comp, vertical);
    case 'business':
      return getBusinessMock(comp, vertical);
    case 'features':
      return getFeaturesMock(comp, vertical);
    case 'prd':
      return getPrdMock(comp, vertical);
    case 'history':
      return getHistoryMock(comp, vertical);
    default:
      return null;
  }
}

// 1. PERSONAS GENERATOR
function getPersonasMock(company: string, vertical: string) {
  const configs = {
    fintech: [
      {
        name: 'Siddharth Mehta', age: 31, occupation: 'Retail Stock Trader',
        goals: ['Maximize annual stock yield', 'Track indices with sub-second lag', 'Access unified tax reports'],
        frustrations: ['Complicated options tables', 'Delayed fund settlement rules', 'Hidden brokers premium charges'],
        quote: 'Managing money should feel as fast as checking my social feeds.',
        keyFeature: 'Instant unified funds dashboard'
      },
      {
        name: 'Sarah Jenkins', age: 29, occupation: 'Freelance Designer',
        goals: ['Automate monthly tax deductions', 'Invoice international clients easily', 'Keep personal and work expenses separate'],
        frustrations: ['Cross-border wire fees', 'Complex tax filing categories', 'Slow card transaction approval'],
        quote: 'As a freelancer, I just want client payments to clear without losing 5% to bank fees.',
        keyFeature: 'One-click international payment link'
      },
      {
        name: 'Kabir Dev', age: 24, occupation: 'Crypto Enthusiast',
        goals: ['DCA micro-investments hourly', 'Earn cashback rewards on bills', 'Analyze risk parameters easily'],
        frustrations: ['Low interest rates on standard balances', 'Bad mobile user interface designs', 'Irrelevant notification spam'],
        quote: 'I want my idle funds to work for me without lock-in periods.',
        keyFeature: 'Micro-savings cash roundups'
      }
    ],
    delivery: [
      {
        name: 'Ananya Rao', age: 27, occupation: 'Software Engineer',
        goals: ['Order healthy dinner under 15 mins', 'Split cart bills with roommates', 'Track live delivery status closely'],
        frustrations: ['Spike in delivery costs during rain', 'Wrong item replacements', 'Cold meals arriving late'],
        quote: 'Cooking takes hours. I want my groceries delivered in 10 minutes, fresh and ready.',
        keyFeature: '10-minute quick checkout cart'
      },
      {
        name: 'Vivek Sharma', age: 36, occupation: 'Father & Banker',
        goals: ['Stock household groceries weekly', 'Order bakery treats for weekend kids', 'Track monthly pantry budgets'],
        frustrations: ['Out of stock items when checking out', 'Complicated refund requests', 'Plastic packaging overload'],
        quote: 'My weekend grocery runs should take 2 taps, not 2 hours at a mall superstore.',
        keyFeature: 'Weekly recurring pantry subscription'
      },
      {
        name: 'Priya Patel', age: 21, occupation: 'College Student',
        goals: ['Order budget-friendly snacks', 'Unlock late-night free shipping', 'Share food orders with squad'],
        frustrations: ['High minimum order values', 'Slow customer support chat responses', 'Limited late-night restaurant coverage'],
        quote: 'Dorm life requires midnight delivery that doesn\'t cost more than the meal itself.',
        keyFeature: 'Late-Night Student Discount Pass'
      }
    ],
    productivity: [
      {
        name: 'David Carter', age: 35, occupation: 'Remote Product Manager',
        goals: ['Consolidate product roadmap docs', 'Keep engineering tickets aligned', 'Reduce daily slack meeting check-ins'],
        frustrations: ['Messy documentation structure', 'Search indexing failure across folders', 'Laggy mobile editor screens'],
        quote: 'We waste 20% of our week just looking for documentation. We need a single source of truth.',
        keyFeature: 'Omni-present search command menu'
      },
      {
        name: 'Elena Rostova', age: 29, occupation: 'Startup Founder',
        goals: ['Onboard team members under 10 mins', 'Share project summaries with VCs', 'Track execution velocity targets'],
        frustrations: ['Complex permissions controls', 'Expensive per-seat licensing tiers', 'Dense, text-heavy menus'],
        quote: 'Our tools should work for us, not require dedicated training classes to set up.',
        keyFeature: ' VC Share-links with secure views'
      },
      {
        name: 'Amit Patel', age: 32, occupation: 'Content Lead',
        goals: ['Write blog posts distraction-free', 'Organize media libraries logically', 'Embed Figma/Loom frames easily'],
        frustrations: ['Clunky markdown text formatting', 'Slow image uploads', 'Poor offline syncing'],
        quote: 'I want a workspace that feels like a clean notebook, but has powerful automation hidden underneath.',
        keyFeature: 'Rich-media drag-and-drop block library'
      }
    ],
    design: [
      {
        name: 'Marcus Chen', age: 28, occupation: 'UI/UX Designer',
        goals: ['Share responsive mockups instantly', 'Manage shared team component library', 'Co-edit frames with PMs live'],
        frustrations: ['Slow font load syncs', 'Poor layout grids rendering', 'Loss of version histories on crashes'],
        quote: 'Design works best when we can brainstorm and iterate together on a live canvas.',
        keyFeature: 'Multiplayer collaborative sync'
      },
      {
        name: 'Liam Vance', age: 26, occupation: 'Social Media Marketer',
        goals: ['Export poster shapes under 2 mins', 'Reuse brand assets easily', 'Bulk-create banners for ad sets'],
        frustrations: ['Steep learning curves on vector grids', 'Heavy RAM usage heating laptops', 'Complicated subscription models'],
        quote: 'I need a fast canvas to draft visuals, not a bloated workspace.',
        keyFeature: 'Brand Kit Asset Library'
      },
      {
        name: 'Ritu Sen', age: 33, occupation: 'Design Instructor',
        goals: ['Review student design canvases live', 'Record step-by-step layout tutorials', 'Export high-res PDF layouts'],
        frustrations: ['Losing zoom focus in large grids', 'Pixelated exports', 'Complicated shortcut key customization'],
        quote: 'Giving visual feedback directly on the design element saves hours of email comments.',
        keyFeature: 'Live Voice & Cursor annotation'
      }
    ],
    streaming: [
      {
        name: 'Jordan Bell', age: 25, occupation: 'Daily commuter',
        goals: ['Discover new synth-wave albums', 'Download podcasts for underground train', 'Sync playlists across phone & smart watch'],
        frustrations: ['Muffled audio streams on data drops', 'Boring podcast search lists', 'Sudden battery drain issues'],
        quote: 'Music is what gets me through a 90-minute commute. It needs to work offline flawlessly.',
        keyFeature: 'Adaptive offline audio buffer'
      },
      {
        name: 'Clara Oswald', age: 30, occupation: 'Motion Designer',
        goals: ['Stream movies in ultra-4K quality', 'Share watch-lists with friends', 'Set family filter profiles'],
        frustrations: ['Dense recommendation carousels', 'Sudden pricing tier hikes', 'Audio-video sync issues on TV'],
        quote: 'On weekends, I just want to sit back and watch my favorite sci-fi show without loading hiccups.',
        keyFeature: '4K Multi-Screen Profile stream sync'
      },
      {
        name: 'Sam Wilson', age: 22, occupation: 'Vlogger',
        goals: ['Access license-free background loops', 'Listen to tech reviews daily', 'Create custom audio workout lists'],
        frustrations: ['Intrusive video ads during songs', 'Copyright flags on shared lists', 'Slow music loading times'],
        quote: 'I use audio streams constantly to set my mood while drafting video concepts.',
        keyFeature: 'Copyright-Free Creator Playlist'
      }
    ],
    marketplace: [
      {
        name: 'Sofia Martinez', age: 34, occupation: 'Travel Blogger',
        goals: ['Find unique home stays in Europe', 'Access verified host support 24/7', 'Filter spots by high-speed Wi-Fi'],
        frustrations: ['Bait-and-switch listing descriptions', 'Host cancelling bookings last minute', 'Hidden cleaning fees added late'],
        quote: 'When traveling, I want a place that feels like a home, with a host I can trust.',
        keyFeature: 'Verified Superhost Shield'
      },
      {
        name: 'Ken Tanaka', age: 41, occupation: 'Management Consultant',
        goals: ['Book cabs in under 2 minutes', 'Get priority airport pickups', 'Receive clear business receipts'],
        frustrations: ['Drivers cancelling rides repeatedly', 'Surge pricing hikes of 3x', 'Dirty car interiors'],
        quote: 'Time is money. I am happy to pay a premium if it guarantees the cab arrives on time.',
        keyFeature: 'Business Priority Reserve ride'
      },
      {
        name: 'Rahul Sen', age: 28, occupation: 'Marketing Analyst',
        goals: ['Buy authentic accessories online', 'Avail no-cost EMI checkouts', 'Track order delivery details daily'],
        frustrations: ['Counterfeit products on marketplaces', 'Delayed package shipping times', 'Confusing return conditions'],
        quote: 'I want online shopping to be risk-free. If a gadget doesn\'t work, return it hassle-free.',
        keyFeature: '1-Click Instant Refund verification'
      }
    ]
  };

  const activeGroup = configs[vertical as keyof typeof configs] || configs.marketplace;
  return {
    title: 'Target User Personas',
    description: `Core target user segments for ${company}.`,
    personas: activeGroup
  };
}

// 2. JTBD GENERATOR
function getJtbdMock(company: string, vertical: string) {
  const configs = {
    fintech: [
      { situation: `When I receive my freelance invoice payments`, motivation: `I want to route them through ${company}'s automated tax jar`, outcome: `so I can avoid manual math at the end of the year.`, type: 'Functional' },
      { situation: `When tracking my equity portfolio movements during volatility`, motivation: `I want to see real-time triggers and warning indicators`, outcome: `so I can make rational, non-emotional trading choices.`, type: 'Emotional' },
      { situation: `When explaining our business finances to board members`, motivation: `I want to present clear, clean reports generated by ${company}`, outcome: `so I can project professional authority and competence.`, type: 'Social' },
      { situation: `When split-billing dinner with colleagues`, motivation: `I want to send instant credit requests without awkward follow-ups`, outcome: `so I can maintain high social standing with peers.`, type: 'Social' },
      { situation: `When my bank account holds excess idle cash`, motivation: `I want to auto-sweep it into short-term liquid funds via ${company}`, outcome: `so I can beat inflation without losing instant access.`, type: 'Functional' }
    ],
    delivery: [
      { situation: `When getting ready for a late-night coding session`, motivation: `I want to order energy drinks and snacks from ${company}'s quick store`, outcome: `so I can stay focused without interrupting my workflow.`, type: 'Functional' },
      { situation: `When hosting dinner for my in-laws at short notice`, motivation: `I want to order premium cuisines from verified gourmet kitchens`, outcome: `so I can impress them and feel relaxed as a host.`, type: 'Emotional' },
      { situation: `When trying to maintain a calorie-deficit diet`, motivation: `I want to filter meals by strict macronutrient values`, outcome: `so I can stay healthy without spending hours meal prepping.`, type: 'Functional' },
      { situation: `When my child asks for a specific birthday cake flavor at midnight`, motivation: `I want to find a bakery and book a 10-minute delivery`, outcome: `so I can be a hero parent who delivers under pressure.`, type: 'Emotional' },
      { situation: `When planning a group office lunch`, motivation: `I want to launch a shared cart link to coordinate options`, outcome: `so I can avoid collecting orders manually on paper notes.`, type: 'Social' }
    ],
    productivity: [
      { situation: `When drafting a complex project proposal at night`, motivation: `I want a clean, minimalist markdown writing interface in ${company}`, outcome: `so I can enter deep focus without visual clutter.`, type: 'Emotional' },
      { situation: `When onboarding a new engineer to our software squad`, motivation: `I want to share a single, neatly structured wiki link`, outcome: `so I can avoid answering the same setup questions over and over.`, type: 'Functional' },
      { situation: `When presenting weekly sprint metrics to executives`, motivation: `I want to display active, live dashboard frames inside the deck`, outcome: `so I can show real-time progress without pasting static screenshots.`, type: 'Social' },
      { situation: `When coordinate tasks with a distributed, global team`, motivation: `I want tasks to sync instantly across all timezone calendars`, outcome: `so I can prevent project blocks and double bookings.`, type: 'Functional' },
      { situation: `When transitioning between my desktop and mobile commute`, motivation: `I want the app cursor and offline cache to sync seamlessly`, outcome: `so I can write notes without losing a single paragraph.`, type: 'Emotional' }
    ],
    design: [
      { situation: `When working alongside copywriters on landing page mockups`, motivation: `I want to co-edit layout text concurrently in ${company}`, outcome: `so we can review adjustments live and skip file exports.`, type: 'Functional' },
      { situation: `When pitching a design proposal to corporate stakeholders`, motivation: `I want to run interactive, clickable prototype previews`, outcome: `so I can secure quick feedback and look like a premium designer.`, type: 'Social' },
      { situation: `When building repetitive component states (buttons, menus)`, motivation: `I want to design a master component with automatic layout rules`, outcome: `so I can scale our design system without pixel-pushing.`, type: 'Functional' },
      { situation: `When receiving harsh feedback on design frames`, motivation: `I want comments bound directly to the visual elements`, outcome: `so I can isolate adjustments without defensive email chains.`, type: 'Emotional' },
      { situation: `When looking for high-quality template assets for social banners`, motivation: `I want to search a verified community library in ${company}`, outcome: `so I can publish professional designs without drawing vectors.`, type: 'Emotional' }
    ],
    streaming: [
      { situation: `When walking through a crowded, noisy subway station`, motivation: `I want ${company} to dynamically filter noise and boost speech clarity`, outcome: `so I can enjoy my audio podcast without straining my ears.`, type: 'Functional' },
      { situation: `When choosing a movie for weekend family night`, motivation: `I want a curated, spoiler-free recommendation preview`, outcome: `so I can prevent endless scrolling and keep everyone happy.`, type: 'Emotional' },
      { situation: `When listening to a customized exercise playlist while running`, motivation: `I want the audio beats to match my running pace automatically`, outcome: `so I can feel energized and hit my physical milestones.`, type: 'Emotional' },
      { situation: `When sharing my favorite song on my Instagram stories`, motivation: `I want to embed a beautiful interactive lyrics frame from ${company}`, outcome: `so I can showcase my personal taste and connect with friends.`, type: 'Social' },
      { situation: `When board a flight with low connectivity`, motivation: `I want to access my downloaded playlist offline instantly`, outcome: `so I can stay entertained without thinking about networks.`, type: 'Functional' }
    ],
    marketplace: [
      { situation: `When booking a rental villa in a new city`, motivation: `I want to review verified customer photos and community feedback`, outcome: `so I can avoid bad listings and travel with complete peace of mind.`, type: 'Emotional' },
      { situation: `When trying to book a taxi during heavy rain rush hour`, motivation: `I want to choose a guaranteed ride with priority dispatch on ${company}`, outcome: `so I can make it to my business meeting on time.`, type: 'Functional' },
      { situation: `When buying high-end cosmetics for a special event`, motivation: `I want to select products verified by brand authenticity checks`, outcome: `so I can feel confident in the product quality.`, type: 'Emotional' },
      { situation: `When returning an clothing item that doesn't fit`, motivation: `I want to schedule a home pickup with immediate refund credit`, outcome: `so I can shop online without fearing financial locks.`, type: 'Functional' },
      { situation: `When showing my travel plans to friends`, motivation: `I want to share my booking itineraries via a single message link`, outcome: `so I can appear organized and coordinate plans smoothly.`, type: 'Social' }
    ]
  };

  const jobs = configs[vertical as keyof typeof configs] || configs.marketplace;
  return {
    title: 'Jobs-to-be-Done (JTBD)',
    description: `Jobs the user hires ${company} to accomplish.`,
    jobs
  };
}

// 3. USER JOURNEY GENERATOR
function getJourneyMock(company: string, vertical: string) {
  const configs = {
    fintech: [
      { name: 'Awareness', actions: ['Sees financial creator discuss trading returns.'], thoughts: 'Is this app safer than traditional banks?', emotion: 6, painPoints: ['Fear of financial security issues.'], opportunities: ['Highlight license badges and security layers.'] },
      { name: 'Consideration', actions: ['Downloads app, reads premium features.'], thoughts: 'Pricing seems reasonable, but KYC is tedious.', emotion: 7, painPoints: ['Complex onboarding documentation requirements.'], opportunities: ['Introduce rapid digital verification integrations.'] },
      { name: 'Onboarding', actions: ['Completes identity check, links bank card.'], thoughts: 'That was surprisingly fast. Ready to add cash.', emotion: 8, painPoints: ['Bank verification SMS delays.'], opportunities: ['Support multiple UPI/Direct linking alternatives.'] },
      { name: 'Core Use', actions: ['Performs first investment transaction.'], thoughts: 'The visual portfolio metrics charts are amazing.', emotion: 9, painPoints: ['None, the flow is zero-lag.'], opportunities: ['Recommend micro-tips for diversified portfolios.'] },
      { name: 'Retention', actions: ['Sets up weekly investment plans.'], thoughts: 'Money builds up quietly. I check this weekly.', emotion: 9, painPoints: ['Frequent push notification alerts.'], opportunities: ['Create customizable alert notification sliders.'] },
      { name: 'Advocacy', actions: ['Shares referral links with colleagues.'], thoughts: 'My friends will love these cashback rewards.', emotion: 9, painPoints: ['Referral credits take days to settle.'], opportunities: ['Award referral rewards instantly to boost loops.'] }
    ],
    delivery: [
      { name: 'Awareness', actions: ['Sees a friend track a 10-minute grocery delivery.'], thoughts: 'Is it actually possible to deliver that fast?', emotion: 7, painPoints: ['Skepticism about grocery fresh status.'], opportunities: ['Show real-time fresh storage temperature on ads.'] },
      { name: 'Consideration', actions: ['Installs app and browses categories.'], thoughts: 'They have all my favorite local brands listed.', emotion: 8, painPoints: ['Finding items in dense menus.'], opportunities: ['Implement voice search and visual search index.'] },
      { name: 'Onboarding', actions: ['Enters delivery address, checks coupon cards.'], thoughts: 'Free delivery coupon applied. Let\'s order.', emotion: 9, painPoints: ['Address pin placing on maps.'], opportunities: ['Use predictive address lookup APIs.'] },
      { name: 'Core Use', actions: ['Orders groceries; tracks delivery rider.'], thoughts: 'The grocery bag arrived in 9 minutes. Incredible.', emotion: 9, painPoints: ['Rider got lost near the gate.'], opportunities: ['Enable driver notes like gate codes in UI.'] },
      { name: 'Retention', actions: ['Orders weekly essentials regularly.'], thoughts: 'I don\'t need to visit supermarkets anymore.', emotion: 9, painPoints: ['Items frequently showing out of stock.'], opportunities: ['Provide auto-replacements for out-of-stock items.'] },
      { name: 'Advocacy', actions: ['Recommends the app to busy parents.'], thoughts: 'This tool saves me 4 hours every week.', emotion: 9, painPoints: ['No easy way to send gift boxes.'], opportunities: ['Launch one-click gift delivery bundles.'] }
    ]
  };

  // Fallback to fintech style journey if delivery doesn't apply (reusing layouts cleanly)
  const stages = configs[vertical as keyof typeof configs] || configs.fintech;
  return {
    title: 'User Journey Map',
    description: `6-Stage customer lifecycle map for ${company}.`,
    stages
  };
}

// 4. BUSINESS CANVAS GENERATOR
function getBusinessMock(company: string, vertical: string) {
  const configs = {
    fintech: {
      keyPartners: ['Banking networks', 'Licensing brokers', 'Payment gateways', 'Compliance bodies'],
      keyActivities: ['Securing digital transactions', 'Portfolio ledger tracking', 'Customer onboarding KYC'],
      keyResources: ['Proprietary trading ledger', 'Secure hosting clouds', 'Finance legal consultants'],
      valuePropositions: ['Zero-lag transaction routing', 'Unified financial portfolios', 'Low-fee international payments'],
      customerRelationships: ['Self-serve workspace dashboard', '24/7 priority chat support', 'Automated alerts'],
      channels: ['Mobile application stores', 'Developer API packages', 'Social finance blogs'],
      customerSegments: ['High-volume retail day traders', 'Digital agencies & freelancers', 'Micro-savings retail investors'],
      costStructure: ['Server compute hosting scales', 'Regulatory legal audit compliance', 'Developer salary pools'],
      revenueStreams: ['Asset management fees (AUM)', 'Pro account subscription packages', 'Cross-border transaction commissions']
    },
    delivery: {
      keyPartners: ['Restaurant merchants', 'Contract delivery riders', 'Grocery wholesalers', 'Dark store managers'],
      keyActivities: ['Real-time logistics routing', 'Dark store stock management', 'Vendor menu curation'],
      keyResources: ['Proprietary dispatch engine', 'Cold-chain dark store networks', 'Delivery rider fleet'],
      valuePropositions: ['10-minute grocery delivery', 'Consolidated multi-store cart', 'Real-time order map tracking'],
      customerRelationships: ['Immediate chat support', 'Rider tracking interfaces', 'Personalized food recommendations'],
      channels: ['Consumer mobile apps', 'Merchant dashboards', 'Rider dispatch apps'],
      customerSegments: ['Busy urban professionals', 'Students & late-night cooks', 'Weekly pantry shoppers'],
      costStructure: ['Rider delivery incentives', 'Dark store rentals and utilities', 'Packaging and cold storage'],
      revenueStreams: ['Delivery convenience fees', 'Merchant commission cuts', 'In-app ad slot promotions']
    }
  };

  const canvas = configs[vertical as keyof typeof configs] || configs.fintech;
  return {
    title: 'Business Model Canvas',
    description: `Monetization and execution model for ${company}.`,
    canvas
  };
}

// 5. FEATURE IDEAS GENERATOR
function getFeaturesMock(company: string, vertical: string) {
  const configs = {
    fintech: [
      { name: 'Omni Command (Cmd+K) Bar', problem: 'Users spend time click navigating menus to trade assets.', persona: 'Siddharth Mehta', effort: 'S', impact: 'High', rationale: 'Allows quick keyboard navigation and actions instantly.' },
      { name: 'Automated Tax Splitter', problem: 'Freelancers struggle to calculate tax allocations.', persona: 'Sarah Jenkins', effort: 'M', impact: 'High', rationale: 'Splits 25% of incoming client payments into a secure tax vault.' },
      { name: 'Micro-Savings Cash Roundups', problem: 'Young adults find it hard to start investing.', persona: 'Kabir Dev', effort: 'S', impact: 'Med', rationale: 'Invests spare change automatically when paying bills.' },
      { name: 'Cross-Border Instant Settlement', problem: 'International wire transfers take 3-5 business days.', persona: 'Sarah Jenkins', effort: 'L', impact: 'High', rationale: 'Settles currency transactions immediately using liquidity pools.' },
      { name: 'Advanced Risk Assessment Radar', problem: 'Traders buy volatile assets without realizing risks.', persona: 'Siddharth Mehta', effort: 'M', impact: 'Med', rationale: 'Visualizes risk metrics on an interactive coordinate grid.' },
      { name: 'Shared Family Finance Pools', problem: 'Couples struggle to coordinate shared expense funds.', persona: 'Sarah Jenkins', effort: 'M', impact: 'High', rationale: 'Enables co-managing utility cash pools with split controls.' },
      { name: 'Paper Trading Sandbox Mode', problem: 'New users lose real cash when learning trading patterns.', persona: 'Kabir Dev', effort: 'S', impact: 'Low', rationale: 'Provides $10k virtual cash to practice trades safely.' },
      { name: 'Smart Recurring Payment Calendar', problem: 'Users forget subscription dates and get overdraft fees.', persona: 'Sarah Jenkins', effort: 'S', impact: 'Med', rationale: 'Visualizes upcoming bills on a unified visual calendar.' }
    ],
    delivery: [
      { name: 'Consolidated Multi-Store Cart', problem: 'Users order food and grocery separately, paying double fee.', persona: 'Ananya Rao', effort: 'M', impact: 'High', rationale: 'Consolidates food and grocery items into a single delivery run.' },
      { name: 'Smart Pantry Auto-Replenish', problem: 'Users run out of milk and eggs at short notice.', persona: 'Vivek Sharma', effort: 'L', impact: 'High', rationale: 'Auto-orders essentials weekly based on smart inventory rules.' },
      { name: 'Midnight Student Pass', problem: 'Students find delivery costs too high for late-night snacks.', persona: 'Priya Patel', effort: 'S', impact: 'Med', rationale: 'Offers free delivery between 11 PM and 4 AM for verified students.' },
      { name: 'Group Cart Split-Billing', problem: 'Office coordinators pay full cart bills and manually chase peers.', persona: 'Ananya Rao', effort: 'M', impact: 'High', rationale: 'Shares cart links and splits bills automatically at payment.' },
      { name: 'Dynamic Surge Lock Guard', problem: 'Unexpected rain surges double delivery fees instantly.', persona: 'Ananya Rao', effort: 'S', impact: 'Low', rationale: 'Locks standard shipping fees for 15 mins once checkout starts.' },
      { name: 'Zero-Waste Reusable Bag Return', problem: 'Quick commerce creates immense packaging waste.', persona: 'Vivek Sharma', effort: 'M', impact: 'Med', rationale: 'Riders collect reusable delivery bags on their next run.' },
      { name: 'Gourmet Kitchen Verification Badge', problem: 'Users doubt hygiene standards of remote ghost kitchens.', persona: 'Vivek Sharma', effort: 'S', impact: 'Med', rationale: 'Displays live CCTV feeds of verified kitchen countertops.' },
      { name: 'Dietary Macro Tracker', problem: 'Gym-goers can\'t log accurate calorie counts for ordered food.', persona: 'Ananya Rao', effort: 'S', impact: 'Med', rationale: 'Integrates nutrition metrics directly with popular health apps.' }
    ]
  };

  const features = configs[vertical as keyof typeof configs] || configs.fintech;
  return {
    title: 'Feature & Growth Recommendations',
    description: `Product ideas designed to solve target pain points for ${company}.`,
    features
  };
}

// 6. PRD GENERATOR
function getPrdMock(company: string, vertical: string) {
  const configs = {
    fintech: {
      problem: `Freelancers and traders using ${company} spend excessive time navigating menu links to move funds, calculate tax splits, and check upcoming card statements. This context-switching leads to drops in session value and delays transaction volume.`,
      goal: `Establish an omni-present Command Launcher (Cmd+K menu) and Smart Automated Splits dashboard to compress common actions into a single keyboard-driven overlay window.`,
      metrics: [
        'Reduce average time-to-transaction (TTT) by 45%.',
        'Achieve a 30%+ Weekly Active User (WAU) adoption rate of the launcher menu.',
        'Decrease payment settlement navigation drop-offs by 20%.'
      ],
      userStories: [
        `As a power user, I want to press a global key command (Cmd+K) to open an input launcher, so I can initiate trades without clicking menus.`,
        `As a freelancer, I want incoming funds to automatically route a set tax percentage to a vault, so I can save time on manual allocations.`,
        `As a retail trader, I want the search menu to display popular indices instantly, so I can scan stock changes in real-time.`
      ],
      inScope: [
        'Global document keyboard event listener mounting.',
        'Client-side cached search indexing for top 30 navigation pages.',
        'Secure tax splitter rules engine with customizable percentage toggles.'
      ],
      outOfScope: [
        'Executing actual trading transactions from the command input box directly.',
        'Third-party external bank integration splits.'
      ],
      risks: [
        'Key conflicts: Cmd+K can clash with default browser shortcut commands. (Mitigation: Intercept keyboard focus only within the app viewport).'
      ]
    },
    delivery: {
      problem: `Users ordering food and grocery on ${company} frequently place separate orders from different merchants, resulting in double delivery fees, multiple courier rider drop-offs, and disjointed delivery schedules.`,
      goal: `Design a Consolidated Multi-Store Cart experience that allows bundling restaurant items and dark-store groceries into a single scheduled route run.`,
      metrics: [
        'Increase Average Order Value (AOV) by 25% due to item bundling.',
        'Reduce average delivery fleet carbon emissions per order by 15%.',
        'Achieve 15% user adoption of consolidated carts within the first 30 days.'
      ],
      userStories: [
        `As a coordinator, I want to add grocery essentials to my restaurant food checkout cart, so that I can receive them in a single delivery run.`,
        `As a budget shopper, I want to pay a single consolidated shipping fee, so that I can save money on split deliveries.`,
        `As a busy parent, I want to see both items tracked on a unified real-time GPS map in the app.`
      ],
      inScope: [
        'Cart layout adjustments to bundle multiple category items.',
        'Consolidated delivery routing algorithm in rider dispatch system.',
        'Single transaction payment routing.'
      ],
      outOfScope: [
        'Splitting delivery runs into separate days.',
        'Integrating merchants that are located more than 5km apart.'
      ],
      risks: [
        'Temperature control clashing: Warm food and cold groceries in the same transit bag. (Mitigation: Use insulated divider inserts in rider delivery packs).'
      ]
    }
  };

  const prd = configs[vertical as keyof typeof configs] || configs.fintech;
  return {
    title: 'Product Requirement Document (Sample)',
    description: `Sample PRD spec generated for ${company}'s highest impact feature.`,
    prd
  };
}

// 7. HISTORY GENERATOR
function getHistoryMock(company: string, vertical: string) {
  const configs = {
    fintech: [
      { year: '2016', event: `Founding & initial regulatory research stage.` },
      { year: '2018', event: `Beta release of the core investment dashboard.` },
      { year: '2019', event: `Pivot to a low-commission zero-brokerage pricing tier.` },
      { year: '2020', event: `Series A funding round of $12M led by tech venture funds.` },
      { year: '2022', event: `Launch of institutional cross-border settlements and APIs.` },
      { year: '2024', event: `Reached 5 Million active retail traders milestone.` },
      { year: '2025', event: `Introduced unified global currency vaults.` },
      { year: '2026', event: `Acquired local banking license for savings sweeps.` }
    ],
    delivery: [
      { year: '2014', event: `Initial launch as a restaurant reviews directory listing.` },
      { year: '2016', event: `Introduced native online food ordering and delivery fleets.` },
      { year: '2018', event: `Secured Series C capital to scale delivery hubs nationwide.` },
      { year: '2020', event: `Pivoted dark stores to support quick grocery commerce.` },
      { year: '2021', event: `Successful initial public offering (IPO) on stock exchanges.` },
      { year: '2023', event: `Acquired quick commerce competitor to merge logistics networks.` },
      { year: '2024', event: `Launched consolidated multi-store ordering pilot.` },
      { year: '2025', event: `Replaced plastic packaging with reusable bags.` }
    ]
  };

  const timeline = configs[vertical as keyof typeof configs] || configs.fintech;
  return {
    title: 'Product Milestones Timeline',
    description: `Timeline history of key events for ${company}.`,
    timeline
  };
}
