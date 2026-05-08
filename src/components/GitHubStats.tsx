import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Code2, Zap } from "lucide-react";

export default function GitHubStats() {
  const stats = [
    {
      icon: <Github className="w-8 h-8" />,
      label: "Public Repositories",
      value: "30+",
      description: "Active projects across various domains",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      label: "Primary Technologies",
      value: "TypeScript",
      description: "React, Node.js, Tailwind CSS",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      label: "Focus Areas",
      value: "Full Stack",
      description: "Web apps, e-commerce, healthcare, business tools",
    },
  ];

  return (
    <div className="w-full py-12 bg-gradient-to-b from-background to-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">GitHub Overview</h2>
          <p className="text-muted-foreground text-lg">
            A snapshot of my development activities and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-primary">{stat.icon}</div>
                  <CardTitle className="text-lg">{stat.label}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-card border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "TypeScript",
              "React",
              "Tailwind CSS",
              "JavaScript",
              "Node.js",
              "Vite",
              "HTML/CSS",
              "shadcn/ui",
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-center"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-center">
            <span className="font-semibold">Interested in collaborating?</span>{" "}
            <a
              href="https://github.com/Ishimwe1iradukunda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Visit my GitHub profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
