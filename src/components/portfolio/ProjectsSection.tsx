import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github, Star } from "lucide-react";

const allProjects = [
  {
    title: "CloudDash Analytics",
    description: "Real-time analytics platform with customizable dashboards, data visualization, and multi-tenant architecture serving 50K+ users.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    category: "Full Stack",
    stars: 342,
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "DevFlow CI/CD",
    description: "Automated deployment pipeline tool that reduces deployment time by 80% with built-in rollback, notifications and team collaboration.",
    tags: ["Go", "Docker", "Kubernetes", "GitHub Actions"],
    category: "DevOps",
    stars: 218,
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "ShopMind E-commerce",
    description: "Full-featured e-commerce platform with AI-powered product recommendations, Stripe payments, and inventory management system.",
    tags: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    category: "Full Stack",
    stars: 156,
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    title: "TaskHive",
    description: "Collaborative project management tool with real-time updates, Kanban boards, time tracking, and smart deadline predictions.",
    tags: ["React", "GraphQL", "PostgreSQL", "WebSockets"],
    category: "Full Stack",
    stars: 89,
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-orange-500/20 to-orange-500/5",
  },
  {
    title: "InfraBot",
    description: "Slack bot that automates infrastructure provisioning on AWS using Terraform, cutting manual DevOps work by 60%.",
    tags: ["Python", "AWS", "Terraform", "Slack API"],
    category: "DevOps",
    stars: 134,
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-green-500/20 to-green-500/5",
  },
  {
    title: "OpenChat API",
    description: "Open-source REST API for multi-platform chat integration with support for 10+ messaging platforms and webhooks.",
    tags: ["Node.js", "Express", "Redis", "Docker"],
    category: "API",
    stars: 421,
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-pink-500/20 to-pink-500/5",
  },
];

const categories = ["All", "Full Stack", "DevOps", "API"];

const ProjectsSection = () => {
  const sectionRef = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? allProjects : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">My Work</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground glow-sm"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="reveal glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Card header gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                {project.featured && (
                  <span className="absolute top-3 right-3 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-semibold">
                    Featured
                  </span>
                )}
                <span className="text-4xl opacity-50">{"</>"}</span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs shrink-0 ml-2">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <span>{project.stars}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-secondary border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1.5 text-sm text-primary font-medium hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground font-medium"
                  >
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
