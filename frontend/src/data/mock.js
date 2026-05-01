// Real data from Dinith Shavindu's CV
// Contact form saves to localStorage (frontend-only).

export const profile = {
  name: 'Dinith Shavindu',
  role: 'Lead Software Engineer',
  location: 'Tangalle, Sri Lanka',
  email: 'dinithshavidu56@gmail.com',
  phone: '+94 71 5723 199',
  bio: 'A software engineer dedicated to crafting well-designed, high-quality tech solutions \u2014 both in functionality and aesthetics. I strive to exceed expectations through thoughtful design and solid principles.',
  available: true,
  socials: [
    { name: 'GitHub', url: 'https://github.com/Dinithshavidu', handle: '@Dinithshavidu' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/dinith-shavindu', handle: 'dinith-shavindu' },
    { name: 'Email', url: 'mailto:dinithshavidu56@gmail.com', handle: 'dinithshavidu56@gmail.com' },
    { name: 'Phone', url: 'tel:+94715723199', handle: '+94 71 5723 199' },
  ],
};

export const techStack = {
  'Languages': ['Go (Golang)', 'Python', 'JavaScript', 'PHP', 'HTML', 'SCSS'],
  'Frameworks': ['React.js', 'Next.js', 'Node.js', 'React Native'],
  'Databases': ['MongoDB', 'MySQL', 'PostgreSQL'],
  'Tools & Platforms': ['Docker', 'Git', 'Microservices', 'AWS (learning)', 'CI/CD'],
};

export const projects = [
  {
    id: '01',
    title: 'eLEAD Learning Management System',
    tagline: 'A scalable LMS architected for enterprise training delivery.',
    description: 'Architected and developed a scalable Learning Management System for eLead (Pvt) Ltd, supporting course delivery, assessments, and enterprise training operations.',
    stack: ['System Architecture', 'Full-stack', 'UI/UX'],
    role: 'LMS Architect',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxkYXNoYm9hcmQlMjBtb2NrdXB8ZW58MHx8fHwxNzc3NjQ1MjMwfDA&ixlib=rb-4.1.0&q=85',
    link: 'https://elead.lk',
    award: 'Live at elead.lk',
  },
  {
    id: '02',
    title: 'Qlub Restaurant Payment Platform',
    tagline: 'Multi-country POS integrations across a global payment platform.',
    description: 'Lead integration engineer at Qlub responsible for multi-country POS integrations. Designed and developed scalable APIs and backend services using Go and Python for high-traffic distributed systems serving global restaurants.',
    stack: ['Go', 'Python', 'Microservices', 'POS APIs'],
    role: 'Lead Software Engineer',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBtb2NrdXB8ZW58MHx8fHwxNzc3NjQ1MjMwfDA&ixlib=rb-4.1.0&q=85',
    link: 'https://qlub.io',
  },
  {
    id: '03',
    title: 'ZoomSkye Platform',
    tagline: 'Modular web platform built for performance and maintainability.',
    description: 'Led architecture and development of a scalable web platform focusing on modular design, performance optimization, and long-term maintainability.',
    stack: ['Software Architecture', 'Backend', 'Full-stack'],
    role: 'Lead Engineer',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzc3NjQ1MjMwfDA&ixlib=rb-4.1.0&q=85',
    link: 'https://zoomskye.com',
  },
  {
    id: '04',
    title: 'NBAC Education Platform',
    tagline: 'Full-stack education platform with scalable architecture.',
    description: 'Designed and developed a full-stack education platform with scalable architecture supporting learning content delivery and user management.',
    stack: ['Full-stack', 'System Design', 'Education'],
    role: 'Full-Stack Engineer',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1654764450232-d0724be6dcd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHw0fHxhcHAlMjBpbnRlcmZhY2V8ZW58MHx8fHwxNzc3NjQ1MjMwfDA&ixlib=rb-4.1.0&q=85',
    link: 'https://nbac-edu.com',
  },
  {
    id: '05',
    title: 'Bank of Ceylon \u2014 Bill Payment',
    tagline: 'Secure enterprise bill-payment system for a national bank.',
    description: 'Enterprise financial web application customized for Bank of Ceylon, built under strict banking security and compliance standards to ensure secure bill-payment processing.',
    stack: ['Security', 'Banking', 'UI Customization'],
    role: 'Software Engineer',
    year: '2021',
    image: 'https://images.pexels.com/photos/14158915/pexels-photo-14158915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    link: '#',
  },
  {
    id: '06',
    title: 'E-Secretary Registration Portal',
    tagline: 'Workflow automation for company registration agencies.',
    description: 'Enterprise portal designed to streamline company registration workflows for regulatory agencies, improving compliance, automation, and operational efficiency.',
    stack: ['Full-stack', 'Workflow Automation', 'System Design'],
    role: 'Full-Stack Developer',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzc3NjQ1MjMwfDA&ixlib=rb-4.1.0&q=85',
    link: '#',
  },
];

export const experience = [
  {
    company: 'Qlub \u2014 Fast Technology Service FZCO',
    role: 'Lead Software Engineer',
    period: 'Jan 2025 \u2014 Present',
    location: 'UAE / Sri Lanka',
    summary: 'Leading multi-country POS integrations across Qlub\u2019s global restaurant payment platform. Designing scalable APIs and backend services in Go and Python for high-traffic distributed systems.',
    highlights: ['Lead engineer for global POS integrations', 'Tech reviews across multiple teams', 'Real-time payment system reliability'],
  },
  {
    company: 'Qlub \u2014 Fast Technology Service FZCO',
    role: 'Senior Software Engineer',
    period: 'Nov 2023 \u2014 Jan 2025',
    location: 'UAE / Sri Lanka',
    summary: 'Built backend services for POS integration, payment flows, and restaurant ordering. Contributed to a scalable microservices architecture for a multi-tenant SaaS platform.',
    highlights: ['Production-grade microservices', 'Cross-region delivery', 'API reliability & performance'],
  },
  {
    company: 'ARIMAC Lanka (Pvt) Ltd',
    role: 'Consultant Software Engineer',
    period: 'Mar 2023 \u2014 Nov 2023',
    location: 'Dubai (Client project)',
    summary: 'Worked on a client-based project in Dubai as a React Native developer. Delivered scalable mobile apps and contributed to a micro-frontend architecture for modular mobile design.',
    highlights: ['React Native at scale', 'Unit testing strategy', 'Micro-frontend architecture'],
  },
  {
    company: 'Spades App FZ-LLC',
    role: 'Full-Stack Engineer',
    period: 'May 2022 \u2014 Mar 2023',
    location: 'Dubai, UAE',
    summary: 'End-to-end design and development of enterprise software systems. Played a key role in system architecture and provided technical leadership while mentoring junior engineers.',
    highlights: ['System architecture ownership', 'Mentored junior engineers', 'Adopted modern tooling'],
  },
  {
    company: 'Bank of Ceylon \u2014 IT Department',
    role: 'Software Engineer',
    period: 'Jul 2021 \u2014 Jan 2022',
    location: 'Colombo, Sri Lanka',
    summary: 'Developed and customized enterprise web applications including Bill Payment and Holiday Home Reservation systems under strict banking security and compliance standards.',
    highlights: ['Secure payment systems', 'Compliance & data integrity', 'UI & backend optimization'],
  },
  {
    company: 'Blendpath Systems (Pvt) Ltd',
    role: 'Web Developer',
    period: 'Jan 2019 \u2014 Jan 2021',
    location: 'Sri Lanka',
    summary: 'Built full-stack web applications using HTML, CSS, JavaScript, Node.js, PHP, and Python. Designed and optimized MySQL and MongoDB databases.',
    highlights: ['Full-stack delivery', 'DB performance tuning', 'Auth & security mechanisms'],
  },
];

export const education = {
  degree: 'BSc (Hons) in Software Engineering',
  university: 'General Sir John Kotelawala Defence University',
  location: 'Ratmalana, Sri Lanka',
  period: '2017 \u2014 2021',
};

export const posts = [
  {
    title: 'Building reliable POS integrations across regions',
    excerpt: 'Lessons from connecting payment systems across multiple countries \u2014 the protocols, the edge cases, and the small details that make integrations resilient.',
    date: 'May 2025',
    read: '8 min read',
    tag: 'Engineering',
  },
  {
    title: 'Why I chose Go for high-traffic backend services',
    excerpt: 'A look at how Go\u2019s concurrency model and tooling shaped our distributed payment platform \u2014 and what I would do differently.',
    date: 'Feb 2025',
    read: '7 min read',
    tag: 'Backend',
  },
  {
    title: 'Designing a scalable LMS from scratch',
    excerpt: 'Architectural decisions behind eLEAD: how we approached course delivery, assessments, and growth-ready infrastructure.',
    date: 'Oct 2023',
    read: '11 min read',
    tag: 'Architecture',
  },
  {
    title: 'Notes on micro-frontends in React Native',
    excerpt: 'What I learned shipping a modular React Native app for an enterprise client in Dubai.',
    date: 'Aug 2023',
    read: '6 min read',
    tag: 'Mobile',
  },
];

export const testimonials = [
  {
    name: 'Engineering Lead',
    role: 'Qlub \u2014 Fast Technology Service FZCO',
    quote: 'Dinith owns problems end-to-end. From global POS integrations to API reliability, he ships production-grade systems and lifts the engineers around him.',
  },
  {
    name: 'Product Manager',
    role: 'ARIMAC Lanka (Dubai project)',
    quote: 'A rare React Native developer who cares as much about architecture and testing as about the user experience. Our mobile platform got noticeably more stable after he joined.',
  },
  {
    name: 'Founding Team',
    role: 'Spades App FZ-LLC, Dubai',
    quote: 'Dinith brought the technical leadership our small team needed. Clear architectural thinking, kind mentorship, and a habit of finishing what he starts.',
  },
];

export const stats = [
  { label: 'Years shipping software', value: '6+' },
  { label: 'Countries delivered for', value: '4' },
  { label: 'Companies & teams', value: '6' },
  { label: 'Currently learning', value: 'Go \u00b7 AWS' },
];
