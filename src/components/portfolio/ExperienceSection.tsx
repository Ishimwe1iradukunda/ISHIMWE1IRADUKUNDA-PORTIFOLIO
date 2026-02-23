import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences: {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  current: boolean;
}[] = [];

const ExperienceSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">Work Experience</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {experiences.length === 0 ? (
          <p className="text-center text-muted-foreground reveal">Coming soon...</p>
        ) : (
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />
            {experiences.map((exp, i) => (
              <div key={exp.company} className="reveal pl-16 md:pl-24 mb-12 last:mb-0 relative" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className={`absolute left-4 md:left-6 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center -translate-x-1/2 ${exp.current ? "border-primary bg-primary glow-sm" : "border-border bg-background"}`}>
                  {exp.current && <div className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />}
                </div>
                <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                      <p className="text-primary font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <div className={`inline-block text-xs px-3 py-1 rounded-full font-medium mb-1 ${exp.current ? "bg-primary/10 text-primary border border-primary/30" : "bg-secondary text-muted-foreground"}`}>
                        {exp.current ? "Current" : exp.period}
                      </div>
                      <p className="text-muted-foreground text-xs">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
