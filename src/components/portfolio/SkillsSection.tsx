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
      { name: "TypeScript", level: 92 },
      { name: "React", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "shadcn/ui", level: 85 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend & Tools",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Vite", level: 88 },
      { name: "REST APIs", level: 85 },
      { name: "Git / GitHub", level: 90 },
    ],
  },
  {
    title: "Domains",
    icon: "🚀",
    skills: [
      { name: "E-commerce", level: 85 },
      { name: "Healthcare apps", level: 80 },
      { name: "Business tools", level: 88 },
      { name: "Media platforms", level: 78 },
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
            <div className="max-w-2xl mx-auto glass rounded-2xl p-8 reveal">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="text-2xl">{skillCategories[activeTab].icon}</span>
                {skillCategories[activeTab].title}
              </h3>
              {skillCategories[activeTab].skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} visible={visible} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
