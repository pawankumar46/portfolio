// Entries marked `placeholder: true` are sample content. Replace them before launch.

export const site = {
  url: "https://pawankumar.vercel.app",
  name: "Pawan Kumar",
  role: "Front-End Engineer",
  city: "Bengaluru, India",
  email: "pawanpk552@gmail.com",
  phone: "+91 96111 51935",
  available: true,
};

export const hero = {
  headline: "Interfaces that feel decisive.",
  roles: [
    "front-end engineer",
    "React Native developer",
    "TypeScript enthusiast",
    "motion-minded UI builder",
  ],
  intro:
    "I design and ship fast, expressive product UI for web and mobile, from first prototype to production at scale.",
  primaryCta: { label: "See selected work", href: "#work" },
  secondaryCta: { label: "Let's talk", href: "#contact" },
};

export const marquee = [
  "React",
  "React Native",
  "TypeScript",
  "Redux Toolkit",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "GraphQL",
  "Jest",
  "Expo",
  "Vite",
];

export const about = {
  heading: "Product-minded, pixel-obsessed.",
  bio: [
    "I'm a front-end engineer with 4.5 years of building React and React Native products that real teams depend on every day.",
    "I care about the details users feel but rarely name: load time, state that never lies, motion that explains instead of decorates. I work closely with design and backend to turn fuzzy ideas into shipped features.",
  ],
  photo: "",
  photoAlt: "Portrait of Pawan Kumar",
  stats: [
    { value: 4.5, decimals: 1, suffix: "", label: "Years shipping product UI" },
    { value: 20, decimals: 0, suffix: "+", label: "Projects delivered", placeholder: true },
    { value: 10, decimals: 0, suffix: "+", label: "Teams and clients", placeholder: true },
  ],
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  outcome: string;
  tags: string[];
  metric: { value: string; label: string };
  cover?: string;
  accent: "violet" | "coral" | "lime";
  problem: string;
  solution: string;
  stack: string[];
  results: string[];
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "apollo",
    title: "Apollo",
    client: "Internal communication platform",
    year: "2024",
    outcome: "Workflow efficiency up 35% for 500+ employees.",
    tags: ["React Native", "TypeScript", "Redux"],
    metric: { value: "+35%", label: "workflow efficiency" },
    accent: "violet",
    problem:
      "Teams of 500+ employees juggled chat, email and spreadsheets to coordinate tasks. Updates got lost, and managers had no single view of who was doing what.",
    solution:
      "A React Native app that merges messaging and task management into one feed. Typed Redux slices keep conversations and task state in sync, with optimistic updates so the app feels instant even on weak networks.",
    stack: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs", "Push notifications"],
    results: [
      "35% improvement in workflow efficiency",
      "Adopted across 500+ employees",
      "One source of truth for tasks and team updates",
    ],
  },
  {
    slug: "fudu",
    title: "Fudu",
    client: "Food delivery app",
    year: "2023",
    outcome: "Load times cut by 30% with live order tracking.",
    tags: ["React Native", "Redux", "Real-time"],
    metric: { value: "−30%", label: "load time" },
    accent: "coral",
    problem:
      "Customers abandoned orders when screens loaded slowly, and they had no live view of where their food was after checkout.",
    solution:
      "Rebuilt the ordering flow with lean screens, cached restaurant data and a real-time tracking view wired to restaurant and rider updates.",
    stack: ["React Native", "Redux", "JavaScript", "WebSockets", "Maps"],
    results: [
      "30% faster load times",
      "Live order tracking from kitchen to door",
      "Higher engagement through the ordering funnel",
    ],
  },
  {
    slug: "greater-national-advocates",
    title: "Greater National Advocates",
    client: "Legal advocacy web platform",
    year: "2023",
    outcome: "40% fewer redundant API calls after a state refactor.",
    tags: ["React", "Redux", "Performance"],
    metric: { value: "−40%", label: "redundant API calls" },
    accent: "lime",
    problem:
      "The web app fired duplicate requests on almost every screen, slowing pages down and making bugs hard to trace.",
    solution:
      "Restructured Redux state around normalized entities and request caching, so each piece of data is fetched once and reused across views.",
    stack: ["React", "Redux", "JavaScript", "REST APIs"],
    results: [
      "40% reduction in redundant API calls",
      "30% faster debugging for the team",
      "Predictable, easier-to-extend state layer",
    ],
  },
  {
    slug: "portfolio",
    title: "This portfolio",
    client: "Personal site",
    year: "2026",
    outcome: "Smooth-scrolling, motion-rich and fully keyboard accessible.",
    tags: ["React", "TypeScript", "Framer Motion"],
    metric: { value: "1 file", label: "for all site content" },
    accent: "violet",
    problem:
      "My old portfolio was a static template that said nothing about how I actually build interfaces.",
    solution:
      "A dark, editorial site built as a showcase of craft: Lenis smooth scrolling, scroll-linked motion, a custom cursor and a content model that lives in one typed data file.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis", "Vercel"],
    results: [
      "All content editable from one data file",
      "Respects reduced-motion preferences end to end",
      "Deploys to Vercel on every push",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES2023)", "HTML & CSS", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo", "Native modules", "Push notifications", "Offline-first"],
  },
  {
    title: "State & data",
    items: ["Redux Toolkit", "RTK Query", "React Query", "REST", "GraphQL", "WebSockets"],
  },
  {
    title: "Craft & tooling",
    items: ["Framer Motion", "Jest", "React Testing Library", "Git", "CI/CD", "Vite"],
  },
];

export const experience = [
  {
    period: "Present",
    role: "Solution Architect & Front-End Developer",
    company: "ValueWorkers",
    summary:
      "Architecting and building front ends for web and mobile products, from first prototype to production.",
  },
  {
    period: "Dec 2023 — May 2024",
    role: "React Native Developer",
    company: "CognitiveClouds",
    summary:
      "Apollo: designed and built an internal communication and task management app for Apollo employees, hardened through iterative testing and optimisation.",
  },
  {
    period: "Jan 2023 — Nov 2023",
    role: "React Native Developer",
    company: "CognitiveClouds",
    summary:
      "Fudu: built a real-time food delivery app with live order tracking and restaurant menu integration, in React Native and TypeScript.",
  },
  {
    period: "Nov 2022 — Jan 2023",
    role: "Front-End Developer",
    company: "CognitiveClouds",
    summary:
      "Greater National Advocates: integrated Redux to tighten state management and data flow across the web app.",
  },
  {
    period: "May 2022 — Jul 2022",
    role: "Front-End Developer",
    company: "Customer POS System",
    summary:
      "Built the front end of a point-of-sale system with authentication and admin tools for managing customers and products.",
  },
];

export const contact = {
  heading: "Let's build something.",
  intro:
    "Have a product that needs a sharper front end, or a role you think I'd fit? Send a note and I'll reply within two working days.",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/pawankumar46" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pawan-kumar-m-77511b142" },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
