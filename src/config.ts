// ============================================================
//  FOLIO — Your portfolio config
//  Edit this file to personalize your site.
//  All components read from here — no hunting through files.
// ============================================================

export const CONFIG = {
  // ── Personal Info ──────────────────────────────────────────
  name: "Alex Johnson",
  title: "Full-Stack Developer",
  tagline: "I build thoughtful software for the web.",
  bio: "I'm a developer focused on creating clean, performant web applications. I enjoy working across the stack — from database design to pixel-perfect UIs.",
  email: "hello@example.com",
  available: true, // shows the "available for work" badge in hero

  // ── Social Links (set to null to hide) ────────────────────
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    codepen: null, // e.g. "https://codepen.io/yourusername"
    youtube: null,
  },

  // ── Navigation ─────────────────────────────────────────────
  nav: [
    { label: "Work", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Posts", href: "/blog/" },
    { label: "About", href: "/about/" },
    { label: "Uses", href: "/uses/" },
  ],

  // ── Hero section ───────────────────────────────────────────
  hero: {
    greeting: "Hi, I'm",
    viewProjectsLabel: "View Projects",
    resumeLabel: "Resume",
    avatar: "/avatar.png", // Points to public/avatar.png
  },

  // ── Stats / Metrics (homepage) ────────────────────────────
  metrics: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Shipped", value: "30+" },
    { label: "Happy Clients", value: "20+" },
    { label: "GitHub Stars", value: "1k+" },
  ],

  // ── Skills (homepage) ────────────────────────────────────
  skills: {
    primary: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    secondary: ["Astro", "Next.js", "Tailwind CSS", "GraphQL", "Redis", "Linux"],
    tools: ["VS Code", "Figma", "Postman", "GitHub Actions", "Vercel", "Supabase"],
  },

  // ── Resume page ──────────────────────────────────────────
  resume: {
    location: "Remote · Available worldwide",
    languages: [
      { name: "English", level: "Native" },
      { name: "Bengali", level: "Native" },
    ],
    education: [
      {
        school: "University of Example",
        degree: "B.Sc. in Computer Science",
        from: "2015",
        to: "2019",
        notes: "Focus on systems programming and distributed databases. Graduated with honors.",
      },
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect — Associate",
        issuer: "Amazon Web Services",
        year: "2023",
        link: null,
      },
      {
        name: "Professional Scrum Master I",
        issuer: "Scrum.org",
        year: "2021",
        link: null,
      },
    ],
    awards: [
      { title: "Hackathon Winner — Best Use of AI", org: "DevFest 2024" },
      { title: "Open Source Contributor of the Month", org: "Astro Community, 2025" },
    ],
    interests: ["Type systems", "Static site performance", "Developer ergonomics", "Coffee"],
  },

  // ── Editorial phrases (homepage dividers) ────────────────
  editorial: [
    "Building products people actually want to use.",
    "Code is craft. Treat it that way.",
  ],

  // ── Site meta ─────────────────────────────────────────────
  site: {
    url: "https://your-site.com", // used for OG tags & sitemap
    description: "Full-stack developer portfolio — projects, blog & more.",
    ogImage: "/og-image.png",
  },
};
