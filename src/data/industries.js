// Ten industry pages. "featured" entries are projects the previous site already named publicly.
// "examples" are anonymised, generic descriptions of the kind of work done (no client names).

export const industries = [
  {
    slug: 'food-processing',
    name: 'Food Processing & F&B',
    hue: 28,
    tagline: 'From a processing unit on paper to licences, loans and a running plant.',
    summary:
      'Nuts, coffee, seafood, meat, ready-to-eat and pet food: we prepare the project report, work out the economics and take the unit through approvals and funding.',
    help: [
      'Project reports and business plans for processing units, cafés and food brands',
      'Location study, plant layout and equipment planning',
      'FSSAI, factory and other statutory licensing guidance',
      'Bank loan files, subsidy and scheme applications',
      'Market study, pricing and distribution planning',
      'Investment proposals and valuation reports for growing brands',
    ],
    featured: [
      {
        title: 'Cashew Production & Processing',
        client: 'Eatery Malabarikas',
        text: 'A project study of the sector and a business plan submitted to the government for verification, with support on all finance and bank related activities.',
      },
      {
        title: 'Investment Proposal Preparation',
        client: 'Nikasu (food sector)',
        text: 'Studied the operations, evaluated the infrastructure needed for revenue generation, analysed viability and valuation, and built financial projections.',
      },
      {
        title: 'Pet Food',
        client: 'Butcher Bins',
        text: 'Market study, project visits, project report and financial plan, then coordination for implementation and further financial enquiries.',
      },
    ],
    examples: [
      'Project report and loan file for a nut processing and trading company',
      'Feasibility and cost study for a coffee quality-control and trading venture',
      'Business plan for a seafood processing and export unit',
      'Café and quick-service food concept: plan, costing and funding route',
    ],
    services: ['project-reports', 'government-schemes', 'startup-support'],
  },
  {
    slug: 'agriculture-fpo',
    name: 'Agriculture & FPO',
    hue: 140,
    tagline: 'Farmer producer organisations, cold storage and shared farm infrastructure.',
    summary:
      'We have prepared and implemented projects across India in the agriculture sector: FPO business plans, cold storage, custom hiring centres and agri-credit structures.',
    help: [
      'FPO business plans, incorporation support and capacity building',
      'Cold storage and agri-infrastructure project reports',
      'Custom Hiring Centre and Shared Infrastructure Fund projects',
      'Matching the FPO to central and state schemes, and the bank liaison that follows',
      'On-site study of existing infrastructure before a report is written',
      'Residential training for directors, CEOs and accountants',
    ],
    featured: [
      {
        title: 'Cold Storage Units',
        client: 'Agrika',
        text: 'Location study, feasibility, statutory matters, identification of infrastructure and facilities, and the applicable government schemes and their implementation.',
      },
      {
        title: 'FPO Business Plan Preparation',
        client: 'Chengannur, Kallada River Valley, Mallapally, Pandalam',
        text: 'Location study, feasibility and infrastructure identification, with the schemes that would benefit each FPO. Covered coconut and coconut oil, banana, tapioca and jackfruit.',
      },
      {
        title: 'Custom Hiring Centre & Shared Infrastructure Fund',
        client: 'Udupi',
        text: 'CHCs and SIFs give farmers top-end machinery without the initial investment. We covered location study, feasibility, cost of setup and preliminary implementation.',
      },
    ],
    examples: [
      'Bio-input and organic-produce company: business plan and scheme mapping',
      'Value-addition plan for a coastal-belt FPO',
      'Shared processing facility for a group of small growers',
    ],
    services: ['fpo-management', 'government-schemes', 'project-reports'],
  },
  {
    slug: 'hospitality-tourism',
    name: 'Hospitality & Tourism',
    hue: 190,
    tagline: 'Resorts, farm stays and wellness retreats, planned before the first brick.',
    summary:
      'Hill-station and beach resorts, farm stays and rejuvenation centres: opportunity identification, site visits, project report, financial plan and coordination of the build.',
    help: [
      'Opportunity identification and location study',
      'Site visits and scope definition',
      'Project report, financial plan and marketing strategy',
      'Listing the schemes and incentives that apply',
      'Bringing together the professionals and the team',
      'Coordination for implementation',
    ],
    featured: [
      {
        title: 'Hill Station Resort',
        client: 'Fusion X, Wind Haven',
        text: 'Location study, site visits, project report and financial plan, with coordination for implementation of the project.',
      },
      {
        title: 'Multi-Rejuvenating Centre',
        client: 'MRC Bangalore',
        text: 'Opportunity identification, location study and scope, listing of schemes, marketing strategy and financial plan, and bringing together professionals and the team.',
      },
      {
        title: 'Farm Stay and Getaway',
        client: 'Chikmanglur',
        text: 'Accommodation on a working farm where guests take part in the process, buy from the land and can stay for a getaway away from the city.',
      },
    ],
    examples: [
      'Beachfront resort: feasibility, licences and funding file',
      'Hill-station homestay cluster: costing and phased development plan',
      'Travel and experience platform: investment proposal and valuation',
    ],
    services: ['project-reports', 'startup-support', 'government-schemes'],
  },
  {
    slug: 'healthcare-wellness',
    name: 'Healthcare & Wellness',
    hue: 168,
    tagline: 'Clinics, hospitals, care homes and wellness products.',
    summary:
      'We plan and fund healthcare ventures: virtual clinics, hospitals, optical retail, biocare and wellness products, and care homes.',
    help: [
      'Sector study and business plan for clinics, hospitals and care homes',
      'Project report and financial plan for wellness and body-care products',
      'Team building: bringing together the right professionals',
      'Licensing, registration and compliance guidance',
      'Investment proposals for health-tech ventures',
    ],
    featured: [
      {
        title: 'Virtual Clinic',
        client: 'Orbislives',
        text: 'A project study of rural healthcare in India, a business plan, and support for its execution.',
      },
      {
        title: 'Health and Body Products',
        client: 'Foot Glow',
        text: 'Scope study, project report and financial plan, bringing together professionals and team, business plan and financial enquiries.',
      },
      {
        title: 'Investment Proposal Preparation',
        client: 'Serveeto (health sector)',
        text: 'Operations study, viability and valuation analysis, market trends and financial projections.',
      },
    ],
    examples: [
      'Hospital expansion: project report and bank funding file',
      'Old-age home: scheme listing, marketing strategy and financial plan',
      'Optical retail outlet: cost study and business plan',
      'Hemp-based wellness products: market study and regulatory route',
    ],
    services: ['project-reports', 'startup-support', 'government-schemes'],
  },
  {
    slug: 'media-arts-entertainment',
    name: 'Media, Arts & Entertainment',
    hue: 320,
    tagline: 'Film, theatre, advertising and creative institutions.',
    summary:
      'Film studios and associations, performing-arts bodies, production houses and ad agencies: project structuring, registrations and funding for creative ventures.',
    help: [
      'Project report for studios, film cities and production facilities',
      'Society, trust and association registration and compliance',
      'Business plans for production and advertising houses',
      'Grants, schemes and institutional funding for arts organisations',
      'Event and programme planning with budget and sponsor strategy',
    ],
    featured: [],
    examples: [
      'Film-industry association: structure, compliance and programme funding',
      'Performing-arts society: registration and scheme support',
      'Advertising agency: business plan and growth financing',
      'Production venture: studio facility feasibility and cost model',
    ],
    services: ['project-reports', 'government-schemes', 'startup-support'],
  },
  {
    slug: 'trusts-ngos-institutions',
    name: 'Trusts, NGOs, Education & Institutions',
    hue: 255,
    tagline: 'Registration, compliance and funding for organisations that serve the public.',
    summary:
      'PCP Innovations is itself a trust registered under the Indian Trust Act 1882. We help trusts, foundations, temples, training centres and public institutions to set up and stay compliant.',
    help: [
      'Trust, society and foundation formation and registration',
      'Compliance, accounts and annual filing',
      'Project proposals to government and donor agencies',
      'Education and training-centre project reports',
      'Documentation for institutional and public-sector projects',
    ],
    featured: [],
    examples: [
      'Charitable trust: deed, registration and exemption compliance',
      'Education and skill-training centre: plan, approvals and funding',
      'Religious and cultural trust: project proposal and documentation',
      'Public institution: project documentation for a rehabilitation programme',
    ],
    services: ['government-schemes', 'project-reports'],
  },
  {
    slug: 'construction-real-estate',
    name: 'Construction & Real Estate',
    hue: 18,
    tagline: 'Residential, commercial and retirement developments, feasibility to financing.',
    summary:
      'We guide landowners and developers through opportunity assessment, document legalisation, statutory compliance, financing and marketing for building projects.',
    help: [
      'Opportunity guidance for landowners and developers',
      'Feasibility assessment and location study',
      'Legalisation of documents and statutory compliance',
      'Financing, marketing and implementation planning',
      'Project reports for foundation and civil-works businesses',
    ],
    featured: [
      {
        title: 'Residential & Commercial Building',
        client: 'Kundanoor-Melath Project',
        text: 'Opportunity guidance for the landlord, legalisation of documents, feasibility assessment, and compiling resources, statutory compliances, financing and marketing.',
      },
      {
        title: 'Retirement Home',
        client: 'NRK Residency',
        text: 'Opportunity identification, location study and scope, listing of schemes, and preparation of marketing strategy and financial plan.',
      },
    ],
    examples: [
      'Residential enclave: feasibility, approvals and funding',
      'Piling and foundation contractor: business plan and expansion funding',
    ],
    services: ['project-reports', 'government-schemes'],
  },
  {
    slug: 'finance-cooperatives',
    name: 'Finance & Cooperative Societies',
    hue: 215,
    tagline: 'Credit societies, finance companies and the structures that fund them.',
    summary:
      'We help set up agri-credit societies and cooperative structures and prepare the business plans and documentation that finance companies need.',
    help: [
      'Agri-credit and multi-state cooperative society planning',
      'Business plan and project report for finance ventures',
      'Raising funds from members, the public or other sources',
      'Registration, bye-laws and statutory compliance',
    ],
    featured: [
      {
        title: 'Agri-Credit Societies',
        client: 'Financing in the agri-sector',
        text: 'Agricultural credit societies are the grass-root arms of the short-term cooperative credit structure, raising funds to lend to members for production or any useful purpose.',
      },
    ],
    examples: [
      'Multi-state agricultural cooperative: structure and compliance plan',
      'Small finance company: business plan and capital-raising route',
    ],
    services: ['project-reports', 'fpo-management', 'government-schemes'],
  },
  {
    slug: 'technology-startups',
    name: 'Technology & Startups',
    hue: 262,
    tagline: 'Software, apps and early-stage ventures, from idea to first funding.',
    summary:
      'Founders get mentoring, structuring advice, compliance and fund assistance across South India, whether the idea is an app, a platform or a product.',
    help: [
      'Choosing the right type of organisation',
      'Feasibility study and market opportunity analysis',
      'Business plan, financial model and valuation',
      'Compliance until the venture starts up',
      'Investment proposals and fund assistance',
    ],
    featured: [
      {
        title: 'Investment Proposal Preparation',
        client: 'Famroute (social platform)',
        text: 'Operations study, infrastructure needed for revenue, viability and valuation, market trends and financial projections.',
      },
    ],
    examples: [
      'Business app: concept validation, plan and funding pitch',
      'Software company: structuring and growth plan',
      'Technology consultancy: business model and registration',
    ],
    services: ['startup-support', 'project-reports'],
  },
  {
    slug: 'other-industries',
    name: 'Other Industries',
    hue: 45,
    tagline: 'Trade, retail, jewellery, manufacturing, logistics and security services.',
    summary:
      'Not every venture fits a neat sector. From soaps and jewellery to network infrastructure, laundry and security services, we apply the same method: study, plan, fund, implement.',
    help: [
      'Business plan and project report for any trading or manufacturing venture',
      'Study of expansion routes and logistics',
      'Company setup and introducing a new venture to a region',
      'Financial enquiries and bank coordination',
      'Government scheme listing for the sector',
    ],
    featured: [
      {
        title: 'Soaps & Detergents',
        client: 'Venma Detergents',
        text: 'Project analysis, study of possible routes for expansion and logistics, business plan and financial enquiries.',
      },
      {
        title: 'Network Infrastructure',
        client: 'Kantrac',
        text: 'Location study, project scope, financing and applicable government schemes, and coordination for implementation.',
      },
      {
        title: 'Gold and Jewellery',
        client: 'Jai Sri Dhurga Gold',
        text: 'Assistance in developing the business plan and in setting up the company, and introducing the new venture to the region.',
      },
    ],
    examples: [
      'Commercial laundry: business plan and equipment costing',
      'Security services company: registration and growth plan',
      'Solar project company: feasibility and financing',
      'Transport and logistics venture: plan and fleet funding',
    ],
    services: ['project-reports', 'startup-support', 'government-schemes'],
  },
]

export const getIndustry = (slug) => industries.find((i) => i.slug === slug)
