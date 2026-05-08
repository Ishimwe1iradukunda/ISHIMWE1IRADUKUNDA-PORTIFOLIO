import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, Code, Github, Zap, GitBranch, Users } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { portfolioProjects } from "@/data/githubProjects";

const stats: { icon: typeof Briefcase; value: string; label: string; description: string }[] = [
  { 
    icon: Github, 
    value: `${portfolioProjects.length}+`, 
    label: "Public Repositories",
    description: "Active projects across domains"
  },
  { 
    icon: Code, 
    value: "TypeScript", 
    label: "Primary Stack",
    description: "React, Node.js, Tailwind CSS"
  },
  { 
    icon: Zap, 
    value: "Full Stack", 
    label: "Focus Area",
    description: "Web & Mobile Development"
  },
  { 
    icon: Briefcase, 
    value: "Open", 
    label: "To Opportunities",
    description: "Ready for new challenges"
  },
];

const highlights = [
  {
    icon: GitBranch,
    title: "Production Ready",
    description: "Multiple deployed applications in healthcare, e-commerce, and business domains"
  },
  {
    icon: Users,
    title: "Enterprise Experience",
    description: "Built scalable solutions for trade management, livestock tracking, and task coordination"
  },
  {
    icon: Code,
    title: "Modern Tech Stack",
    description: "Expertise in React, TypeScript, Tailwind CSS, Vite, and modern web technologies"
  },
];

const AboutSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar side */}
          <div className="flex justify-center reveal-left">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-xl" />
              <div className="relative w-72 h-72 rounded-2xl border-2 border-primary/30 overflow-hidden bg-secondary">
                <img src={profileImg} alt="Iradukunda Ishimwe Emmanuel" className="w-full h-full object-cover" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 glow-sm">
                <span className="text-primary font-bold text-sm">Open to Work 🚀</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal-right">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Iradukunda Ishimwe Emmanuel
            </h3>
            <p className="text-primary font-semibold text-sm mb-6">Full Stack Developer | Problem Solver</p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate full-stack developer with a proven track record of building innovative web applications 
              and scalable solutions. With expertise in modern technologies like React, TypeScript, and cloud architectures, 
              I create high-performance applications that solve real-world problems.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              My portfolio spans diverse domains including healthcare systems, e-commerce platforms, agricultural management, 
              and business tools. I'm committed to writing clean, maintainable code and delivering user-centric experiences 
              that make an impact.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">30+ Projects</h4>
                  <p className="text-sm text-muted-foreground">Ranging from production apps to experimental tools</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Multiple Domains</h4>
                  <p className="text-sm text-muted-foreground">Healthcare, E-commerce, Finance, Media, Agriculture</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Github className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Open Source Contributor</h4>
                  <p className="text-sm text-muted-foreground">Active on GitHub with public repositories</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal glass rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group border border-border/40 hover:shadow-lg hover:shadow-primary/10"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-black text-gradient mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-xs md:text-sm font-medium">{stat.label}</div>
              <p className="text-muted-foreground text-xs mt-2">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {highlights.map((highlight, i) => (
            <div
              key={highlight.title}
              className="reveal glass rounded-xl p-6 border border-border/40 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <highlight.icon className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-bold mb-2">{highlight.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
