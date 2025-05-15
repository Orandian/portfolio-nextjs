export interface Service {
  title?: string;
  subtitle?: string;
  description: string;
  basePrice: string;
  features: string[];
}

export const mobileServices: Service[] = [
  {
    title: "Mobile App Development",
    description:
      "Cross-platform apps using React Native with smooth UX/UI and API integration.",
    basePrice: "$1,000 – $15,000+",
    features: [
      "1–3 screens: $1,000 – $2,500",
      "4–6 screens: $2,500 – $4,000",
      "7–10 screens: $4,000 – $6,500",
      "11–15 screens: $6,500 – $9,000",
      "16+ screens: $9,000 – $15,000+",
    ],
  },
  {
    subtitle: "Add-On Features",
    description: "Enhance your app with custom features.",
    basePrice: "From $300",
    features: [
      "Authentication: +$300 – $800",
      "API Integration: +$400 – $1,000",
      "Payments: +$500 – $1,200",
      "Push Notifications: +$300 – $800",
      "Chat/Messaging: +$800 – $2,500",
      "Map & Location: +$500 – $1,500",
    ],
  },
  {
    subtitle: "Support & Maintenance",
    description: "Flexible plans to keep your app up-to-date.",
    basePrice: "From $200/month",
    features: [
      "Basic: $200/month – Bug fixes",
      "Standard: $400/month – Feature updates",
      "Premium: $700+/month – Full support",
    ],
  },
];

export const frontendServices: Service[] = [
  {
    title: "Frontend Development",
    subtitle: "Landing Page",
    description:
      "Responsive and fast-loading landing pages using React or Next.js.",
    basePrice: "$300 – $800",
    features: ["1–2 sections", "Mobile responsive", "Deployed and SEO ready"],
  },
  {
    subtitle: "Portfolio Website",
    description: "Interactive, animated personal portfolio with modern design.",
    basePrice: "$500 – $1,200",
    features: [
      "React + Tailwind / Next.js",
      "Figma to Code",
      "Smooth scroll and animations",
    ],
  },
  {
    subtitle: "Business Website (3–7 Pages)",
    description:
      "Corporate or product websites with contact forms and modern UI.",
    basePrice: "$1,000 – $2,500",
    features: [
      "Static or CMS-integrated",
      "Responsive design",
      "Contact form, basic SEO",
    ],
  },
  {
    subtitle: "Frontend Web App (SPA)",
    description:
      "Custom web applications using React, Vue, or similar frameworks.",
    basePrice: "$1,200 – $3,500+",
    features: [
      "Component-based architecture",
      "API integration",
      "State management (Redux, Zustand, etc.)",
    ],
  },
  {
    subtitle: "UI/UX Design to Code",
    description:
      "Convert Figma/Adobe XD designs into pixel-perfect frontend code.",
    basePrice: "$300 – $1,200",
    features: [
      "Fully responsive",
      "Accessibility support",
      "Smooth animations",
    ],
  },
];

export const backendServices: Service[] = [
  {
    title: "API Development",
    description:
      "Build scalable REST or GraphQL APIs using Node.js, Laravel, or Spring Boot.",
    basePrice: "$1,000 – $5,000+",
    features: [
      "Authentication & Authorization",
      "CRUD Operations",
      "Error handling & validation",
    ],
  },
  {
    subtitle: "Database Design & Integration",
    description: "Efficient database schema design and secure data handling.",
    basePrice: "$500 – $3,000+",
    features: [
      "PostgreSQL / MySQL / MongoDB",
      "ORMs (Prisma, Sequelize, TypeORM)",
      "Indexing & optimization",
    ],
  },
  {
    subtitle: "Authentication & Security",
    description: "Secure login systems and authorization layers.",
    basePrice: "$300 – $1,500",
    features: [
      "JWT / OAuth2 / Session-based auth",
      "Rate limiting & encryption",
      "Security best practices",
    ],
  },
  {
    subtitle: "Admin Panel (Backend)",
    description: "Server-side logic for managing admin dashboards.",
    basePrice: "$1,000 – $4,000+",
    features: [
      "User roles & permissions",
      "Dashboard analytics endpoints",
      "Multi-language support",
    ],
  },
];

export const fullstackServices: Service[] = [
  {
    title: "Full-stack Web Application",
    subtitle: "Custom Web Application",
    description:
      "Complete frontend + backend solution tailored to your business.",
    basePrice: "$2,000 – $7,000+",
    features: [
      "Next.js or React frontend",
      "Node.js, Laravel or Spring Boot backend",
      "Fully responsive & scalable",
    ],
  },
  {
    subtitle: "E-commerce Platform",
    description:
      "Build and deploy an online store with product, cart, and payment integration.",
    basePrice: "$2,500 – $10,000+",
    features: [
      "Product catalog & search",
      "Cart & checkout",
      "Stripe/PayPal payment integration",
    ],
  },
  {
    subtitle: "SaaS Platform",
    description:
      "Subscription-based application with authentication, billing, and dashboard.",
    basePrice: "$5,000 – $15,000+",
    features: ["Multi-tenant architecture", "Admin panel", "Stripe billing"],
  },
  {
    subtitle: "Full-stack Blog or CMS",
    description:
      "Manage content with a custom-built content management system.",
    basePrice: "$1,500 – $4,000+",
    features: [
      "Markdown or WYSIWYG support",
      "Admin interface",
      "SEO & social sharing setup",
    ],
  },
];
