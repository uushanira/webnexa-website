export const COMPANY_INFO = {
  name: 'WebNexazz',
  tagline: 'Software Development & IT Services',
  domain: 'webnexazz.com',
  // Replace these placeholders with your actual business contact details before launch
  email: 'hello@webnexazz.example',
  phone: '+1 (000) 000-0000 [Placeholder]',
  location: 'Remote-First • Global Delivery [Update Location]',
  hours: 'Mon – Fri, 9:00 AM – 6:00 PM [Update Timezone]',
  socials: [
    {
      name: 'GitHub',
      href: 'https://github.com/your-org-placeholder',
      handle: '@webnexazz (placeholder)',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/your-company-placeholder',
      handle: 'WebNexazz (placeholder)',
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/your-handle-placeholder',
      handle: '@webnexazz (placeholder)',
    },
  ],
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact Us', to: '/contact' },
]

export const SERVICES = [
  {
    id: 'website-design-development',
    title: 'Website Design & Development',
    shortDesc:
      'Responsive, conversion-focused websites and modern web applications engineered for speed, accessibility, and search visibility.',
    description:
      'We design and build fast, mobile-first websites and interactive web portals tailored to your brand and business goals. Every interface is crafted with clean UI architecture, accessible markup, and optimized assets.',
    icon: 'Globe',
    deliverables: [
      'Custom responsive UI/UX design',
      'React, Next.js & modern frontend engineering',
      'SEO structure & Core Web Vitals optimization',
      'CMS & landing page architectures',
    ],
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    shortDesc:
      'Tailored business software, internal dashboards, and SaaS platforms built around your exact operational workflows.',
    description:
      'Off-the-shelf tools rarely fit unique business logic. WebNexazz builds bespoke web platforms, client portals, and workflow management systems designed for maintainability and long-term growth.',
    icon: 'Code2',
    deliverables: [
      'End-to-end SaaS & web product builds',
      'Role-based dashboards & admin portals',
      'Legacy system modernization',
      'Clean, modular codebase & documentation',
    ],
  },
  {
    id: 'backend-api-development',
    title: 'Backend & API Development',
    shortDesc:
      'Reliable, secure server architectures, RESTful and GraphQL APIs, and scalable database systems built to handle real workloads.',
    description:
      'Your applications depend on resilient infrastructure under the hood. We architect high-availability backends, structured data models, authentication flows, and third-party API integrations.',
    icon: 'Server',
    deliverables: [
      'REST & GraphQL API design',
      'Database modeling & query optimization',
      'Authentication, authorization & data security',
      'Payment, CRM & webhook integrations',
    ],
  },
  {
    id: 'mobile-application-development',
    title: 'Mobile Application Development',
    shortDesc:
      'Cross-platform iOS and Android applications delivering native-grade performance from a unified, maintainable codebase.',
    description:
      'Reach customers and teams on any device. We build intuitive mobile apps with smooth animations, offline-ready synchronization, and tight integration with your existing web and cloud platforms.',
    icon: 'Smartphone',
    deliverables: [
      'Cross-platform iOS & Android apps',
      'Responsive mobile UI & gesture flows',
      'API & push-notification integration',
      'App store readiness & release support',
    ],
  },
  {
    id: 'cloud-solutions-integration',
    title: 'Cloud Solutions & Integration',
    shortDesc:
      'Modern cloud deployments, edge hosting, CI/CD pipelines, and seamless system integrations that keep costs predictable.',
    description:
      'Whether launching lean on edge static hosting or scaling containerized services in the cloud, we help you deploy reliably with automated pipelines, observability, and cost-conscious architecture.',
    icon: 'Cloud',
    deliverables: [
      'Cloud architecture & migration planning',
      'CI/CD automation & zero-downtime deploys',
      'Edge hosting & CDN configuration',
      'Third-party SaaS & ERP integrations',
    ],
  },
  {
    id: 'ai-integration-automation',
    title: 'AI Integration & Automation',
    shortDesc:
      'Practical AI assistants, document processing, and workflow automation integrated securely into your existing software stack.',
    description:
      'Move beyond hype with practical AI capabilities that save real engineering and operations time. We connect modern language models, retrieval pipelines, and automated triggers directly into your business tools.',
    icon: 'Sparkles',
    deliverables: [
      'Custom AI chat & knowledge assistants',
      'Automated document & data extraction',
      'Workflow orchestration & webhook bots',
      'Guardrails, evaluation & cost controls',
    ],
  },
  {
    id: 'it-consulting-technical-support',
    title: 'IT Consulting & Technical Support',
    shortDesc:
      'Strategic technology roadmaps, architecture reviews, performance audits, and ongoing maintenance for peace of mind.',
    description:
      'Not sure which stack to pick or how to unblock a technical bottleneck? We provide candid architecture guidance, code audits, security hardening, and dependable post-launch technical support.',
    icon: 'LifeBuoy',
    deliverables: [
      'Technology stack & MVP roadmapping',
      'Codebase, security & performance audits',
      'Ongoing maintenance & dependency updates',
      'Dedicated technical advisory',
    ],
  },
]

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Engineering-First Craft',
    description:
      'We write clean, modular, well-documented code so your software stays fast, testable, and easy for any team to extend.',
    icon: 'Cpu',
  },
  {
    title: 'Transparent Collaboration',
    description:
      'Clear milestones, regular demos, and direct communication with the engineers building your product—no black boxes.',
    icon: 'MessageSquareCheck',
  },
  {
    title: 'Built to Scale Lean',
    description:
      'We avoid bloated infrastructure and unnecessary paid lock-in, choosing pragmatic architectures that grow with your revenue.',
    icon: 'TrendingUp',
  },
  {
    title: 'Security & Performance',
    description:
      'From input validation and least-privilege access to fast page loads and Core Web Vitals, quality is baked in from day one.',
    icon: 'ShieldCheck',
  },
]

export const TECH_STACK = [
  {
    category: 'Frontend & UI',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'HTML5 / CSS3'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Python', 'FastAPI', 'Express', 'PostgreSQL', 'REST & GraphQL'],
  },
  {
    category: 'Mobile & Cross-Platform',
    items: ['React Native', 'Flutter', 'Expo', 'PWA', 'Responsive Web'],
  },
  {
    category: 'Cloud, Edge & AI',
    items: ['Cloudflare Pages', 'AWS', 'Docker', 'GitHub Actions', 'OpenAI / LLM APIs', 'Vector Search'],
  },
]

export const DEVELOPMENT_APPROACH = [
  {
    step: '01',
    title: 'Discovery & Architecture',
    description:
      'We align on business goals, user workflows, technical constraints, and a realistic delivery roadmap before writing production code.',
  },
  {
    step: '02',
    title: 'Design & Rapid Prototyping',
    description:
      'Interactive layouts and component systems are designed early so you can validate user flows before full-scale engineering.',
  },
  {
    step: '03',
    title: 'Iterative Engineering & QA',
    description:
      'Features are delivered in focused sprints with code reviews, responsive testing, accessibility checks, and continuous integration.',
  },
  {
    step: '04',
    title: 'Launch, Monitor & Evolve',
    description:
      'Smooth production rollout, performance verification, documentation handoff, and ongoing technical support as your needs grow.',
  },
]

export const PORTFOLIO_PROJECTS = [
  {
    id: 'sample-saas-analytics',
    isSample: true,
    category: 'SaaS & Cloud',
    title: 'NexaPulse Operations Dashboard',
    subtitle: 'Sample Concept • B2B SaaS Platform',
    description:
      'A multi-tenant operations and telemetry dashboard concept built to demonstrate real-time KPI tracking, role-based access control, and automated anomaly alerts.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    highlights: [
      'Modular widget grid with responsive mobile views',
      'Role-based permission architecture',
      'Exportable CSV & scheduled report workflows',
    ],
    accent: 'from-cyan-500/20 via-blue-600/20 to-indigo-600/20',
    badgeColor: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10',
  },
  {
    id: 'sample-ecommerce-portal',
    isSample: true,
    category: 'Web Apps',
    title: 'CommerceFlow Order & Inventory Portal',
    subtitle: 'Sample Concept • Custom Web Application',
    description:
      'A streamlined supplier and inventory management web application designed for distributed retail teams needing fast SKU lookup and automated restock triggers.',
    technologies: ['Next.js', 'TypeScript', 'REST API', 'Cloudflare'],
    highlights: [
      'Sub-second catalog filtering & barcode-ready search',
      'Automated low-stock webhook notifications',
      'Accessible keyboard-first order entry UI',
    ],
    accent: 'from-blue-500/20 via-indigo-600/20 to-violet-600/20',
    badgeColor: 'text-blue-300 border-blue-500/30 bg-blue-500/10',
  },
  {
    id: 'sample-ai-support-desk',
    isSample: true,
    category: 'AI & Automation',
    title: 'DocuMind Knowledge & Triage Assistant',
    subtitle: 'Sample Concept • AI Integration',
    description:
      'An internal knowledge retrieval and ticket triage assistant concept that indexes product documentation and drafts grounded responses for support engineers.',
    technologies: ['Python', 'FastAPI', 'React', 'LLM APIs'],
    highlights: [
      'Citation-backed answers from internal docs',
      'Automated category & priority tagging',
      'Human-in-the-loop review before sending',
    ],
    accent: 'from-emerald-500/20 via-cyan-600/20 to-blue-600/20',
    badgeColor: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10',
  },
  {
    id: 'sample-field-mobile',
    isSample: true,
    category: 'Mobile',
    title: 'FieldSync Service Dispatch App',
    subtitle: 'Sample Concept • Cross-Platform Mobile',
    description:
      'A mobile companion concept for field technicians enabling offline job checklists, photo capture, and instant cloud sync once connectivity returns.',
    technologies: ['React Native', 'TypeScript', 'SQLite', 'Cloud Sync'],
    highlights: [
      'Offline-first local queue & conflict resolution',
      'Digital signature & inspection checklist capture',
      'Live dispatch status sync with web portal',
    ],
    accent: 'from-sky-500/20 via-blue-600/20 to-cyan-600/20',
    badgeColor: 'text-sky-300 border-sky-500/30 bg-sky-500/10',
  },
]

