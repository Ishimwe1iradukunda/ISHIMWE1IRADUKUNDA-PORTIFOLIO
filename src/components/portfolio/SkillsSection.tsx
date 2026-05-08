import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const skillCategories: {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}[] = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "React", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "shadcn/ui", level: 88 },
      { name: "HTML / CSS", level: 95 },
      { name: "Responsive Design", level: 92 },
    ],
  },
  {
    title: "Backend & Tools",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Vite", level: 90 },
      { name: "REST APIs", level: 85 },
      { name: "Git / GitHub", level: 92 },
      { name: "React Router", level: 88 },
    ],
  },
  {
    title: "Domains & Platforms",
    icon: "🚀",
    skills: [
      { name: "E-commerce Platforms", level: 88 },
      { name: "Healthcare Applications", level: 85 },
      { name: "Business Management Tools", level: 90 },
      { name: "Media & Design Tools", level: 82 },
      { name: "Agricultural Systems", level: 80 },
      { name: "Trade Management Systems", level: 85 },
    ],
  },
  {
    title: "Libraries & Frameworks",
    icon: "📚",
    skills: [
      { name: "TanStack React Query", level: 85 },
      { name: "React Hook Form", level: 88 },
      { name: "Zod (Validation)", level: 85 },
      { name: "Recharts", level: 80 },
      { name: "Lucide Icons", level: 90 },
      { name: "Next Themes", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level, visible }: { name: string; level: number; visible: boolean }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-1.5">
      <span className="text-sm text-foreground font-medium">{name}</span>
      <span className="text-xs text-primary font-semibold">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden border border-border/20">
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

        {skillCategories.length === 0 ? (
          <p className="text-center text-muted-foreground reveal">Coming soon...</p>
        ) : (
          <>
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
            <div className="max-w-3xl mx-auto glass rounded-2xl p-8 reveal border border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="text-2xl">{skillCategories[activeTab].icon}</span>
                {skillCategories[activeTab].title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories[activeTab].skills.map((skill, idx) => (
                  <div key={skill.name} style={{ transitionDelay: `${idx * 50}ms` }}>
                    <SkillBar name={skill.name} level={skill.level} visible={visible} />
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="reveal glass rounded-xl p-6 border border-border/40 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                  <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span>📦</span> Tech Stack Breadth
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Proficient in modern web technologies with deep expertise in React ecosystem, 
                    TypeScript, and full-stack development using Node.js and various databases.
                  </p>
                </div>
                <div className="reveal glass rounded-xl p-6 border border-border/40 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                  <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span>🎯</span> Domain Expertise
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Successfully delivered applications across healthcare, e-commerce, agriculture, 
                    and business management sectors with scalable and user-focused solutions.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
