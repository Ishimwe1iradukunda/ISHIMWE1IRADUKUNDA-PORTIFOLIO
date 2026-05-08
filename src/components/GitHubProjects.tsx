import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, GitFork } from "lucide-react";

interface Project {
  name: string;
  description: string;
  url: string;
  language?: string;
  stars?: number;
  forks?: number;
  category: "production" | "business" | "tools" | "learning";
}

const projects: Project[] = [
  {
    name: "asistanttech.com",
    description: "Your main tech assistant website and online presence",
    url: "https://github.com/Ishimwe1iradukunda/asistanttech.com",
    language: "TypeScript",
    category: "production",
  },
  {
    name: "construction-website",
    description: "Professional website for construction equipment marketing and business promotion",
    url: "https://github.com/Ishimwe1iradukunda/construction-website",
    language: "TypeScript",
    category: "production",
  },
  {
    name: "patient_tracker_app",
    description: "Mobile application for tracking and managing patient medical records",
    url: "https://github.com/Ishimwe1iradukunda/patient_tracker_app",
    language: "JavaScript",
    category: "business",
  },
  {
    name: "first_patient_cure_app",
    description: "Healthcare app that tracks patient records and symptoms in real-time",
    url: "https://github.com/Ishimwe1iradukunda/first_patient_cure_app",
    language: "JavaScript",
    category: "business",
  },
  {
    name: "rugwiro-trade-flow",
    description: "Enterprise trade and commerce management platform",
    url: "https://github.com/Ishimwe1iradukunda/rugwiro-trade-flow",
    language: "TypeScript",
    category: "business",
  },
  {
    name: "nobeefshopclothing",
    description: "Full-featured e-commerce platform for clothing retail",
    url: "https://github.com/Ishimwe1iradukunda/nobeefshopclothing",
    language: "JavaScript",
    category: "business",
  },
  {
    name: "livestock-management-system",
    description: "Comprehensive system for agricultural livestock tracking and management",
    url: "https://github.com/Ishimwe1iradukunda/livestock-management-system",
    language: "TypeScript",
    category: "business",
  },
  {
    name: "climate-change-manager",
    description: "Environmental management tool for climate data analysis",
    url: "https://github.com/Ishimwe1iradukunda/climate-change-manager",
    language: "TypeScript",
    category: "tools",
  },
  {
    name: "media-editing-suite",
    description: "Professional media editing toolkit for designers and content creators",
    url: "https://github.com/Ishimwe1iradukunda/media-editing-suite",
    language: "TypeScript",
    category: "tools",
  },
  {
    name: "multimediasuite",
    description: "All-in-one multimedia suite for various design categories",
    url: "https://github.com/Ishimwe1iradukunda/multimediasuite",
    language: "TypeScript",
    category: "tools",
  },
  {
    name: "TASKNET-workspace",
    description: "Collaborative workspace and task management platform",
    url: "https://github.com/Ishimwe1iradukunda/TASKNET-workspace",
    language: "TypeScript",
    category: "business",
  },
  {
    name: "javascript-quest-master",
    description: "Interactive JavaScript learning and practice platform",
    url: "https://github.com/Ishimwe1iradukunda/javascript-quest-master",
    language: "TypeScript",
    category: "learning",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "production":
      return "bg-purple-100 text-purple-800";
    case "business":
      return "bg-blue-100 text-blue-800";
    case "tools":
      return "bg-green-100 text-green-800";
    case "learning":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case "production":
      return "Production";
    case "business":
      return "Business";
    case "tools":
      return "Developer Tools";
    case "learning":
      return "Learning";
    default:
      return category;
  }
};

export default function GitHubProjects() {
  const productionProjects = projects.filter((p) => p.category === "production");
  const businessProjects = projects.filter((p) => p.category === "business");
  const toolProjects = projects.filter((p) => p.category === "tools");
  const learningProjects = projects.filter((p) => p.category === "learning");

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg line-clamp-2">{project.name}</CardTitle>
            <CardDescription className="mt-1">{project.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{getCategoryLabel(project.category)}</Badge>
            {project.language && (
              <Badge variant="outline">{project.language}</Badge>
            )}
          </div>
        </div>
        <Button
          asChild
          variant="outline"
          className="w-full mt-4"
          size="sm"
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            View on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );

  const ProjectSection = ({
    title,
    projectList,
  }: {
    title: string;
    projectList: Project[];
  }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">My Projects</h2>
          <p className="text-muted-foreground text-lg">
            A collection of my work across different categories and technologies
          </p>
        </div>

        {productionProjects.length > 0 && (
          <ProjectSection
            title="🚀 Production & Portfolio"
            projectList={productionProjects}
          />
        )}

        {businessProjects.length > 0 && (
          <ProjectSection
            title="💼 Business Applications"
            projectList={businessProjects}
          />
        )}

        {toolProjects.length > 0 && (
          <ProjectSection
            title="🛠️ Developer Tools & Platforms"
            projectList={toolProjects}
          />
        )}

        {learningProjects.length > 0 && (
          <ProjectSection
            title="📚 Learning & Practice"
            projectList={learningProjects}
          />
        )}

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <p className="text-center text-sm text-muted-foreground">
            View all projects on{" "}
            <a
              href="https://github.com/Ishimwe1iradukunda"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
