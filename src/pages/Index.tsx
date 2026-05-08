import { useEffect } from "react";
import GitHubStats from "@/components/GitHubStats";
import GitHubProjects from "@/components/GitHubProjects";

export default function Index() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-stack developer building innovative solutions across healthcare,
            e-commerce, business tools, and media platforms.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
            <a
              href="https://github.com/Ishimwe1iradukunda"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* GitHub Stats */}
      <GitHubStats />

      {/* Projects Section */}
      <section id="projects" className="w-full">
        <GitHubProjects />
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 border-t bg-muted/30">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 Ishimwe Iradukunda. Built with React, TypeScript & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
