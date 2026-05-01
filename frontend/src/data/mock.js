// Mock data for Dinith Shavindu's portfolio
// All data here is frontend-only. Contact form saves to localStorage.

export const profile = {
  name: 'Dinith Shavindu',
  role: 'Full-Stack Engineer',
  location: 'Colombo, Sri Lanka',
  email: 'hello@dinith.dev',
  phone: '+94 77 123 4567',
  bio: 'I build fast, accessible, and thoughtful web products — from crisp interfaces to resilient backends. Obsessed with clean architecture, pixel-perfect detail, and shipping things that feel right.',
  available: true,
  socials: [
    { name: 'GitHub', url: 'https://github.com', handle: '@dinithshavindu' },
    { name: 'LinkedIn', url: 'https://linkedin.com', handle: 'dinith-shavindu' },
    { name: 'Twitter / X', url: 'https://x.com', handle: '@dinith_dev' },
    { name: 'Read.cv', url: 'https://read.cv', handle: 'dinith' },
  ],
};

export const techStack = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  'Backend': ['Node.js', 'FastAPI', 'Go', 'PostgreSQL', 'MongoDB', 'Redis'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Vercel'],
  'Tooling': ['Git', 'Figma', 'Linear', 'Notion', 'Postman', 'VS Code'],
};

export const projects = [
  {
    id: '01',
    title: 'Helio Analytics',
    tagline: 'Real-time product analytics for SaaS teams.',
    description: 'A performant analytics dashboard that ingests millions of events daily. Built the event pipeline, query engine, and a snappy React frontend with sub-50ms interactions.',
    stack: ['Next.js', 'Go', 'ClickHouse', 'Redis'],
    role: 'Lead Full-Stack Engineer',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxkYXNoYm9hcmQlMjBtb2NrdXB8ZW58MHx8fHwxNzc3NjQ1MjMwfDA&ixlib=rb-4.1.0&q=85',
    link: '#',
    award: 'Product Hunt #2 Product of the Day',
  },
  {
    id: '02',
    title: 'Northwind CRM',
    tagline: 'Modern CRM for distributed sales teams.',
    description: 'Rebuilt a legacy CRM into a modern, collaborative workspace. Reduced load times by 78% and shipped real-time pipeline views powered by WebSockets.',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'AWS'],
    role: 'Senior Engineer',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBtb2NrdXB8ZW58MHx8fHwxNzc3NjQ1MjMwfDA&ixlib=rb-4.1.0&q=85',
    link: '#',
  },
  {
    id: '03',
    title: 'Arc Commerce',
    tagline: 'Headless commerce platform for indie brands.',
    description: 'Designed and engineered a headless storefront with sub-1s page loads, AI-assisted product descriptions, and a delightful checkout flow.',
    stack: ['Next.js', 'Node.js', 'Stripe', 'Algolia'],
    role: 'Founding Engineer',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzc3NjQ1MjMwfDA&ixlib=rb-4.1.0&q=85',
    link: '#',
  },
  {
    id: '04',
    title: 'Ledger Mobile',
    tagline: 'Personal finance tracker for the privacy-conscious.',
    description: 'A local-first mobile app for tracking personal finances. Client-side encryption, offline-first sync, and a gorgeous minimalist UI.',
    stack: ['React Native', 'SQLite', 'TypeScript'],
    role: 'Solo Engineer',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1654764450232-d0724be6dcd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHw0fHxhcHAlMjBpbnRlcmZhY2V8ZW58MHx8fHwxNzc3NjQ1MjMwfDA&ixlib=rb-4.1.0&q=85',
    link: '#',
  },
];

export const experience = [
  {
    company: 'Helio Labs',
    role: 'Lead Full-Stack Engineer',
    period: '2024 — Present',
    location: 'Remote',
    summary: 'Leading a 6-engineer team building a real-time analytics platform. Architected the event ingestion pipeline that now handles 120M+ events per day.',
    highlights: ['Cut p95 latency by 62%', 'Shipped 14 major features', 'Mentored 4 junior engineers'],
  },
  {
    company: 'Northwind Inc.',
    role: 'Senior Software Engineer',
    period: '2022 — 2024',
    location: 'Singapore',
    summary: 'Rebuilt the flagship CRM product from the ground up. Owned the frontend architecture and co-designed the new API contract with the backend team.',
    highlights: ['Led migration to Next.js', 'Reduced bundle size by 41%', 'Set up CI/CD from scratch'],
  },
  {
    company: 'Arc Studio',
    role: 'Full-Stack Engineer',
    period: '2020 — 2022',
    location: 'Colombo, Sri Lanka',
    summary: 'Built custom web experiences for design-forward brands. Collaborated closely with designers to turn ambitious mockups into production-ready products.',
    highlights: ['Shipped 18 client projects', 'Built internal CMS used by 3 agencies', 'Won an Awwwards SOTD'],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: '2018 — 2020',
    location: 'Remote',
    summary: 'Worked with small teams and founders to bring MVPs to life — from landing pages to full SaaS products.',
    highlights: ['30+ client projects', '4 products reached $10k MRR', 'Built long-term client relationships'],
  },
];

export const posts = [
  {
    title: 'The case for boring technology',
    excerpt: 'Why my team chose Postgres over six exciting new databases — and what we learned about the real cost of novelty.',
    date: 'Jun 12, 2025',
    read: '6 min read',
    tag: 'Engineering',
  },
  {
    title: 'Designing with developers in mind',
    excerpt: 'A practical guide to collaborating with engineering teams from the design brief to the final merge.',
    date: 'Apr 28, 2025',
    read: '9 min read',
    tag: 'Process',
  },
  {
    title: 'Building a 60fps list in React',
    excerpt: 'Virtualization, memoization, and the small details that make a list feel instant even with 10,000 rows.',
    date: 'Feb 02, 2025',
    read: '11 min read',
    tag: 'React',
  },
  {
    title: 'Notes on shipping: a year in review',
    excerpt: 'What I learned from shipping 47 features across 4 products — the wins, the regrets, and the systems I kept.',
    date: 'Dec 20, 2024',
    read: '7 min read',
    tag: 'Career',
  },
];

export const testimonials = [
  {
    name: 'Priya Nadkarni',
    role: 'CEO, Helio Labs',
    quote: 'Dinith is the kind of engineer you build a company around. He owns problems end-to-end, writes code that\'s a joy to read, and somehow ships twice as much as you expect.',
  },
  {
    name: 'Marcus Tan',
    role: 'Head of Product, Northwind',
    quote: 'Rare combination of speed, taste, and technical depth. He quietly turned our CRM from a liability into the product people ask to see in demos.',
  },
  {
    name: 'Elena Voss',
    role: 'Design Director, Arc Studio',
    quote: 'The only engineer I\'ve worked with who pushes back on design with better design. Our best projects are the ones he was on.',
  },
];

export const stats = [
  { label: 'Years shipping software', value: '7+' },
  { label: 'Production projects', value: '40+' },
  { label: 'Happy clients & teams', value: '22' },
  { label: 'Cups of coffee in 2025', value: '∞' },
];
