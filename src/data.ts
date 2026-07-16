import { Project, GalleryItem, Testimonial, FAQItem, ProcessStep, ServiceItem, WhyChooseUsItem } from './types';
import {
  HERO_IMAGE,
  PROJECT_VILLA_IMAGE,
  PROJECT_COMMERCIAL_IMAGE,
  HOUSE_EXTERIOR_ONE,
  HOUSE_EXTERIOR_TWO,
  HOUSE_EXTERIOR_THREE,
  HOUSE_EXTERIOR_FOUR,
  HOUSE_EXTERIOR_FIVE,
  HOUSE_EXTERIOR_SIX,
  HOUSE_EXTERIOR_SEVEN,
  HOUSE_EXTERIOR_EIGHT,
} from './imageAssets';

// Re-export used elsewhere
export { HERO_IMAGE, PROJECT_VILLA_IMAGE, PROJECT_COMMERCIAL_IMAGE };

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'House Construction',
    iconName: 'Home',
    description:
      'Bespoke residential building custom-tailored to your lifestyle, incorporating modern structural design with pristine architectural craftsmanship.',
    features: [
      'Custom floor plans',
      'Earthquake-resistant structures',
      'Premium masonry & concrete work',
      'High-end structural warranty',
    ],
  },
  {
    id: 'srv-2',
    title: 'Villa Construction',
    iconName: 'Compass',
    description:
      'Ultra-luxury estate construction featuring grand double-height entryways, integrated infinity pools, and expansive, high-concept outdoor living spaces.',
    features: [
      'Elite architectural styling',
      'Smart villa automation ready',
      'Bespoke material procurement',
      'Panoramic glass facades',
    ],
  },
  {
    id: 'srv-3',
    title: 'Commercial Buildings',
    iconName: 'Building2',
    description:
      'State-of-the-art office spaces, retail outlets, and commercial complexes constructed for durability, modern utility, and impressive visual branding.',
    features: [
      'Value optimized systems',
      'Sleek steel-and-glass facades',
      'Meets strict green energy standards',
      'Optimal space utilization layout',
    ],
  },
  {
    id: 'srv-4',
    title: 'Home Renovation',
    iconName: 'Hammer',
    description:
      'Breathe new life into your existing space with high-end structural conversions, layout expansions, and contemporary aesthetic remodeling.',
    features: [
      'Heritage house restoration',
      'Kitchen & luxury bath extensions',
      'Load-bearing wall alterations',
      'Fast and clean execution',
    ],
  },
  {
    id: 'srv-5',
    title: 'Structural Work',
    iconName: 'Layers',
    description:
      'Robust, precision-built core foundation and skeletal structural works including column casting, slabs, and beam reinforcements.',
    features: [
      'Premium grade steel reinforcement',
      'High-grade self-compacting concrete',
      'Soil bearing capacity analysis',
      'Zero deflection safety standards',
    ],
  },
  {
    id: 'srv-6',
    title: 'Interior & Exterior Finishing',
    iconName: 'Paintbrush',
    description:
      'Exquisite final touches including premium Italian marble laying, wood cladding, high-end plastering, and weather-shield external textured coatings.',
    features: [
      'Italian marble & wood flooring',
      'Custom architectural POP ceilings',
      'Anti-fungal external painting',
      'Hand-picked tile layouts',
    ],
  },
  {
    id: 'srv-7',
    title: 'Construction Planning',
    iconName: 'FileText',
    description:
      'Detailed pre-construction design, blueprint generation, 3D structural rendering, regulatory approvals, and cost estimations.',
    features: [
      '3D structural visualizers',
      'Detailed bill of quantities (BOQ)',
      'Local municipal body approvals',
      'Feasibility reports',
    ],
  },
  {
    id: 'srv-8',
    title: 'Turnkey Construction',
    iconName: 'Wrench',
    description:
      'An absolute end-to-end building solution starting from design, securing permits, material sourcing, structural build, to final handoff.',
    features: [
      'Single point of accountability',
      'Fixed budget & timeline guarantee',
      'Regular structural progress logs',
      'Move-in ready execution',
    ],
  },
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 'wcu-1',
    title: 'Experienced Team',
    description:
      'Our legacy is built by professional architects, site inspectors, and expert builders with decades of combined construction experience.',
    iconName: 'Users',
  },
  {
    id: 'wcu-2',
    title: 'Quality Materials',
    description:
      'We never compromise. We source only certified high-grade steel, premier grade concrete, and brand-name finishing materials.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'wcu-3',
    title: 'Transparent Pricing',
    description:
      'Enjoy peace of mind with highly detailed, itemized quotations. No hidden fees, no surprise costs, absolute budget integrity.',
    iconName: 'IndianRupee',
  },
  {
    id: 'wcu-4',
    title: 'Timely Project Completion',
    description:
      'We value your time. Utilizing micro-scheduled project timelines, we ensure on-time delivery without compromising structural integrity.',
    iconName: 'Clock',
  },
  {
    id: 'wcu-5',
    title: 'Modern Construction Techniques',
    description:
      'We deploy cutting-edge structural building methods, laser alignments, and advanced pre-cast elements for superior durability.',
    iconName: 'Cpu',
  },
  {
    id: 'wcu-6',
    title: 'Strong Customer Support',
    description:
      'Our dedicated customer success team keeps you updated with weekly site reports, high-resolution progress photos, and live consultations.',
    iconName: 'PhoneCall',
  },
  {
    id: 'wcu-7',
    title: 'Safety Standards',
    description:
      'We enforce an absolute zero-accident policy at our sites, complete with mandatory safety gear, secure scaffolding, and strict protocols.',
    iconName: 'Award',
  },
  {
    id: 'wcu-8',
    title: 'Skilled Workers',
    description:
      'All structural components are designed and vetted by licensed builders and skilled craftsmen, strictly complying with national building codes.',
    iconName: 'Briefcase',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'Meet our design consultants to share your lifestyle vision, structural needs, and budgetary outline.',
    iconName: 'MessageSquare',
  },
  {
    number: '02',
    title: 'Site Visit',
    description:
      'Our experienced site planning experts perform soil testing, alignment assessment, and topological site analysis.',
    iconName: 'MapPin',
  },
  {
    number: '03',
    title: 'Planning',
    description:
      'Drafting custom architectural blueprints, detailed structural designs, and itemized material schedules.',
    iconName: 'ClipboardList',
  },
  {
    number: '04',
    title: 'Design Approval',
    description:
      'Reviewing 3D walkthrough renders and layout adjustments to secure municipal permits and final customer approval.',
    iconName: 'CheckSquare',
  },
  {
    number: '05',
    title: 'Construction',
    description:
      'The foundation laying, structural framing, plumbing, electrification, and finishing under active site supervision.',
    iconName: 'Hammer',
  },
  {
    number: '06',
    title: 'Quality Inspection',
    description:
      'Over 150+ meticulous quality checks ranging from concrete cylinder tests to pressure plumbing tests.',
    iconName: 'SearchCode',
  },
  {
    number: '07',
    title: 'Handover',
    description:
      'Receiving the occupancy keys to your beautifully built, premium dream home, backed by robust structural warranties.',
    iconName: 'Key',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Annamalaiyar Illam (The Royal Villa)',
    category: 'Luxury Villa',
    image: HOUSE_EXTERIOR_ONE,
    location: 'Paramathi Road, Namakkal, Tamil Nadu',
    area: '4,800 Sq.ft',
    completionYear: '2025',
    description:
      'A striking luxury double-story modern residence featuring a grand entrance porch, a wide second-floor glass balcony, sleek white and charcoal-grey stucco, and spacious car parking.',
    features: [
      'Teakwood main door',
      'Modular luxury kitchen',
      'Toughened glass balcony',
      'Led-lit coffered ceilings',
      'Landscaped private garden',
    ],
  },
  {
    id: 'proj-2',
    title: 'Rasipuram Contemporary Residence',
    category: 'Modern House',
    image: HOUSE_EXTERIOR_TWO,
    location: 'Salem Main Road, Rasipuram, Tamil Nadu',
    area: '3,200 Sq.ft',
    completionYear: '2026',
    description:
      'A stylish contemporary home combining clean white walls with horizontal wooden cladding and slate-gray accent pillars. Features elegant concrete steps and manicured front lawns.',
    features: [
      'Teakwood ceiling accents',
      'Double covered car parking',
      'In-wall ambient external lighting',
      'Premium vitrified tile flooring',
      'High security designer gate',
    ],
  },
  {
    id: 'proj-3',
    title: 'Senthamangalam Heritage Villa',
    category: 'Luxury Villa',
    image: HOUSE_EXTERIOR_THREE,
    location: 'Kolli Hills Road, Senthamangalam, Tamil Nadu',
    area: '2,900 Sq.ft',
    completionYear: '2025',
    description:
      'A charming olive green and cream-white South Indian villa with custom wooden pillars, a cozy open sit-out (thinnai), and a functional upper-story private terrace.',
    features: [
      'Traditional front sit-out thinnai',
      'Modern weather-proof cladding',
      'Energy efficient LED fixtures',
      'Rainwater harvesting unit',
      'Expansive open terrace',
    ],
  },
  {
    id: 'proj-4',
    title: 'Tiruchengode Modern Duplex',
    category: 'Duplex House',
    image: HOUSE_EXTERIOR_FOUR,
    location: 'Sankari Road, Tiruchengode, Tamil Nadu',
    area: '3,500 Sq.ft',
    completionYear: '2024',
    description:
      'An exquisite double-story house featuring horizontal light wood paneling, premium granite stone facade, and a custom driveway with rectangular slate stones.',
    features: [
      'Double-height living lounge',
      'Bespoke wooden ceiling paneling',
      'Granite compound wall',
      'Designer POP false ceiling',
      'Modern utility washing yard',
    ],
  },
  {
    id: 'proj-5',
    title: 'The Kaveri River-View Duplex',
    category: 'Duplex House',
    image: HOUSE_EXTERIOR_FIVE,
    location: 'River Street, Mohanur, Tamil Nadu',
    area: '3,800 Sq.ft',
    completionYear: '2025',
    description:
      'A modern take on traditional architecture featuring sleek concrete flat slabs, horizontal teak wood rails on balconies, and a beautiful green block paved yard.',
    features: [
      'Traditional spacious sit-out',
      'Premium solid teak rails',
      'Coconut tree layout design',
      'Open family lounge',
      'Custom Pooja room',
    ],
  },
  {
    id: 'proj-6',
    title: 'Nallipalayam Premium Residence',
    category: 'Modern House',
    image: HOUSE_EXTERIOR_SIX,
    location: 'Salem Bypass Road, Nallipalayam, Namakkal',
    area: '4,200 Sq.ft',
    completionYear: '2026',
    description:
      'A spectacular architectural beauty with a textured granite facade, beautiful custom wood-cladded overhangs, and a wide welcoming portico.',
    features: [
      'Granite stone exterior cladding',
      'Double-height dining hall',
      'Three master suites',
      'Modern modular layout',
      'Toughened glass handrails',
    ],
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'House Exterior',
    image: HOUSE_EXTERIOR_ONE,
    title: 'Modern Two-Story House with Glass Balcony',
  },
  {
    id: 'gal-2',
    category: 'Luxury Villa',
    image: HOUSE_EXTERIOR_TWO,
    title: 'Contemporary Flat-Roof Villa with Wood Accents',
  },
  {
    id: 'gal-3',
    category: 'House Elevation',
    image: HOUSE_EXTERIOR_THREE,
    title: 'Olive Green & Cream South Indian Villa',
  },
  {
    id: 'gal-4',
    category: 'House Exterior',
    image: HOUSE_EXTERIOR_FOUR,
    title: 'Modern Duplex with Wood Siding Facade',
  },
  {
    id: 'gal-5',
    category: 'Luxury Villa',
    image: HOUSE_EXTERIOR_FIVE,
    title: 'Kerala-Style Contemporary Flat-Roof Duplex',
  },
  {
    id: 'gal-6',
    category: 'Finished Houses',
    image: HOUSE_EXTERIOR_SIX,
    title: 'Elegant White Villa with Wood Balcony Railing',
  },
  {
    id: 'gal-7',
    category: 'House Elevation',
    image: HOUSE_EXTERIOR_SEVEN,
    title: 'Spectacular Night View of Lit Modern Villa',
  },
  {
    id: 'gal-8',
    category: 'House Exterior',
    image: HOUSE_EXTERIOR_EIGHT,
    title: 'Daylight Modern House with Terracotta Jali Screen',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rajesh Subramanian',
    role: 'Owner, The Golden Crest Villa',
    rating: 5,
    comment:
      'SS Construction completed our dream home on time with outstanding quality. From foundation casting to the intricate Italian marble laying, they exhibited supreme professionalism and absolute budget honesty.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=RS',
  },
  {
    id: 'test-2',
    name: 'Sarah Fernandez',
    role: 'CEO, Apex Enterprises',
    rating: 5,
    comment:
      'Professional team and transparent communication throughout our commercial project. They valued our specific steel requirements and provided weekly high-res photo logs which made coordination completely hassle-free.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=SF',
  },
  {
    id: 'test-3',
    name: 'Anish & Priya Mehta',
    role: 'Homeowners, Origami House',
    rating: 5,
    comment:
      'Excellent workmanship! Highly recommended for premium residential construction. They easily converted our architect complex folding roof design into reality and the paint work is completely flawless.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=AP',
  },
  {
    id: 'test-4',
    name: 'Vikram Malhotra',
    role: 'Developer, Hillside Apartments',
    rating: 5,
    comment:
      'SS Construction is our trusted partner for turn-key projects. Their skilled structural builders, transparent pricing schedules, and compliance with high-stress safety standards are unmatched in the industry.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=VM',
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does construction take?',
    answer:
      'A premium residential house or luxury villa typically takes 9 to 14 months to construct from foundation to finishing, depending on size, topological site conditions, structural complexities, and selected materials. We supply an interactive, micro-scheduled project Gantt chart before initiating construction so you can track exact milestones.',
  },
  {
    id: 'faq-2',
    question: 'Do you provide design services?',
    answer:
      'Yes! We have an in-house elite design team of architects and draft specialists. We provide fully-realized custom architectural plans, beautiful interior layouts, high-resolution 3D walkthrough rendering, and detail-vetted structural framing diagrams tailored to your plot dimensions.',
  },
  {
    id: 'faq-3',
    question: 'Do you offer turnkey projects?',
    answer:
      'Absolutely. Our Turnkey Construction Service provides absolute end-to-end management of the build. We handle raw site soil analysis, architecture design, municipal clearances and approvals, high-grade material sourcing, active site structural supervision, interior work, and final key handover under a single, legally-vetted contract.',
  },
  {
    id: 'faq-4',
    question: 'Can I customize my house plan?',
    answer:
      'Yes, 100%. We believe your home should be an absolute reflection of your lifestyle. All our pre-construction plans can be modified dynamically, or we can design an entirely bespoke layout from scratch. Our structural designers ensure your requested changes remain safe and budget-efficient.',
  },
  {
    id: 'faq-5',
    question: 'What is included in the quotation?',
    answer:
      'We provide an extremely detailed, itemized Bill of Quantities (BOQ). It includes a complete breakdown of structural steel grades, cement brands, sand quality, flooring budgets, electrical wiring specs, plumbing fixture choices, doors, windows, and handovers. There are zero hidden charges or unlisted price markups.',
  },
];

