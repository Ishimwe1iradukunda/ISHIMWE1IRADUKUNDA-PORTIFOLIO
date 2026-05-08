export type ProjectCategory = "Production" | "Business" | "Tools" | "Learning";

export interface PortfolioProject {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  stars: number;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  gradient: string;
}

const gradientFor: Record<ProjectCategory, string> = {
  Production: "from-primary/40 to-primary/10",
  Business: "from-cyan-500/40 to-blue-500/10",
  Tools: "from-emerald-500/40 to-primary/10",
  Learning: "from-amber-500/40 to-primary/10",
};

const repos: Omit<PortfolioProject, "gradient">[] = [
  {
    title: "asistanttech.com",
    description: "Main tech assistant website and online presence.",
    tags: ["TypeScript", "React", "Vite"],
    category: "Production",
    stars: 0,
    liveUrl: "https://github.com/Ishimwe1iradukunda/asistanttech.com",
    githubUrl: "https://github.com/Ishimwe1iradukunda/asistanttech.com",
    featured: true,
  },
  {
    title: "construction-website",
    description: "Professional website for construction equipment marketing and business promotion.",
    tags: ["TypeScript", "React"],
    category: "Production",
    stars: 0,
    liveUrl: "https://github.com/Ishimwe1iradukunda/construction-website",
    githubUrl: "https://github.com/Ishimwe1iradukunda/construction-website",
    featured: false,
  },
  {
    title: "patient_tracker_app",
    description: "Mobile app for tracking and managing patient medical records.",
    tags: ["JavaScript", "Mobile", "Healthcare"],
    category: "Business",
    stars: 0,
    liveUrl: "https://github.com/Ishimwe1iradukunda/patient_tracker_app",
    githubUrl: "https://github.com/Ishimwe1iradukunda/patient_tracker_app",
    featured: false,
  },
  {
    title: "first_patient_cure_app",
    description: "Healthcare app that tracks patient records and symptoms in real-time.",
    tags: ["JavaScript", "Healthcare"],
    category: "Business",
    stars: 0,
    liveUrl: "https://github.com/Ishimwe1iradukunda/first_patient_cure_app",
    githubUrl: "https://github.com/Ishimwe1iradukunda/first_patient_cure_app",
    featured: false,
  },
  {
    title: "rugwiro-trade-flow",
    description: "Enterprise trade and commerce management platform.",
    tags: ["TypeScript", "React", "Enterprise"],
    category: "Business",
    stars: 0,
    liveUrl: "https://github.com/Ishimwe1iradukunda/rugwiro-trade-flow",
    githubUrl: "https://github.com/Ishimwe1iradukunda/rugwiro-trade-flow",
    featured: true,
  },
  {
    title: "nobeefshopclothing",
    description: "Full-featured e-commerce platform for clothing retail.",
    tags: ["JavaScript", "E-commerce"],
    category: "Business",
    stars: 0,
    liveUrl: "https://github.com/Ishimwe1iradukunda/nobeefshopclothing",
    githubUrl: "https://github.com/Ishimwe1iradukunda/nobeefshopclothing",
    featured: false,
  },
  {
    title: "livestock-management-system",
    description: "Comprehensive system for agricultural livestock tracking and management.",
    tags: ["TypeScript", "Agriculture"],
    category: "Business",
    stars: 0,
    liveUrl: "https://github.com/Ishimwe1iradukunda/livestock-management-system",
    githubUrl: "https://github.com/Ishimwe1iradukunda/livestock-management-system",
    featured: false,
  },
  {
    title: "TASKNET-workspace",
    description: "Collaborative workspace and task management platform.",
    tags: ["TypeScript", "Collaboration"],
    category: "Business",
    stars: 0,
    liveUrl: "https://github.com/Ishimwe1iradukunda/TASKNET-workspace",
    githubUrl: "https://github.com/Ishimwe1iradukunda/TASKNET-workspace",
    featured: false,
  },
  {
    title: "climate-change-manager",
    description: "Environmental management tool for climate data analysis.",
    tags: ["TypeScript", "Data"],
    category: "Tools",
    stars: 0,
    liveUrl: "https://github.com/Ishimwe1iradukunda/climate-change-manager",
    githubUrl: "https://github.com/Ishimwe1iradukunda/climate-change-manager",
    featured: false,
  },
  {
    title: "media-editing-suite",
    description: "Professional media editing toolkit for designers and content creators.",
    tags: ["TypeScript", "Media"],
    category: "Tools",
    stars: 0,
    liveUrl: "https://github.com/Ishimwe1iradukunda/media-editing-suite",
    githubUrl: "https://github.com/Ishimwe1iradukunda/media-editing-suite",
    featured: false,
  },
  {
    title: "multimediasuite",
    description: "All-in-one multimedia suite for various design categories.",
    tags: ["TypeScript", "Design"],
    category: "Tools",
    stars: 0,
    liveUrl: "https://github.com/Ishimwe1iradukunda/multimediasuite",
    githubUrl: "https://github.com/Ishimwe1iradukunda/multimediasuite",
    featured: false,
  },
  {
    title: "javascript-quest-master",
    description: "Interactive JavaScript learning and practice platform.",
    tags: ["TypeScript", "Education"],
    category: "Learning",
    stars: 0,
    liveUrl: "https://github.com/Ishimwe1iradukunda/javascript-quest-master",
    githubUrl: "https://github.com/Ishimwe1iradukunda/javascript-quest-master",
    featured: false,
  },
];

export const portfolioProjects: PortfolioProject[] = repos.map((r) => ({
  ...r,
  gradient: gradientFor[r.category],
}));

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Production",
  "Business",
  "Tools",
  "Learning",
];

export const githubProfileUrl = "https://github.com/Ishimwe1iradukunda";
