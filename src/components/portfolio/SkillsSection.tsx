import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / FastAPI", level: 85 },
      { name: "Go", level: 70 },
      { name: "REST APIs", level: 95 },
      { name: "Microservices", level: 82 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 88 },
      { name: "Docker / Kubernetes", level: 85 },
      { name: "CI/CD (GitHub Actions)", level: 90 },
      { name: "Terraform", level: 75 },
      { name: "Linux / Bash", level: 85 },
    ],
  },
  {
    title: "Databases",
    icon: "🛢️",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 78 },
      { name: "MySQL", level: 82 },
      { name: "Elasticsearch", level: 70 },
    ],
  },
  {
    title: "Other Tools",
    icon: "🔧",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Testing (Jest/Cypress)", level: 85 },
      { name: "Figma", level: 72 },
      { name: "WebSockets", level: 80 },
      { name: "Agile / Scrum", level: 88 },
    ],
  },
];

const SkillBar = ({ name, level, visible }: { name: string; level: number; visible: boolean }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1.5">
      <span className="text-sm text-foreground font-medium">{name}</span>
      <span className="text-xs text-primary font-semibold">{level}%</span>
    </div>
    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-1000 ease-out"
        style={{ width: visible ? `${level}%` : "0%" }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const sectionRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleRef = (el: HTMLDivElement | null) => {
    if (!el) return;
    (sectionRef as React.MutableRefObject<HTMLDivElement>).current = el;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
  };

  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6" ref={handleRef}>
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === i
                  ? "bg-primary text-primary-foreground glow-sm"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active category */}
        <div className="max-w-2xl mx-auto glass rounded-2xl p-8 reveal">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">{skillCategories[activeTab].icon}</span>
            {skillCategories[activeTab].title}
          </h3>
          {skillCategories[activeTab].skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} visible={visible} />
          ))}
        </div>

        {/* Quick icon grid */}
        <div className="mt-16 reveal">
          <p className="text-center text-muted-foreground text-sm mb-8 uppercase tracking-widest">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "PostgreSQL", "Redis", "GraphQL", "Git", "Linux", "Figma"].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-lg border border-border bg-card text-muted-foreground text-sm font-medium hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200 hover:-translate-y-0.5"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
