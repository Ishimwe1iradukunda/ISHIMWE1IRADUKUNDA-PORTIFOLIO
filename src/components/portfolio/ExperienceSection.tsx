import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 – Present",
    achievements: [
      "Led migration of monolith to microservices, reducing infrastructure costs by 35%",
      "Built real-time analytics dashboard serving 100K+ daily active users",
      "Mentored a team of 4 junior developers, improving team velocity by 40%",
      "Architected zero-downtime deployment pipeline using Kubernetes and GitHub Actions",
    ],
    current: true,
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 – 2022",
    achievements: [
      "Developed core product features using React, Node.js and PostgreSQL from ground up",
      "Implemented OAuth2 authentication system supporting 5 providers",
      "Reduced page load times by 60% through performance optimizations and CDN integration",
      "Built automated testing suite achieving 85% code coverage",
    ],
    current: false,
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    location: "New York, NY",
    period: "2019 – 2020",
    achievements: [
      "Delivered 15+ client websites and web applications on schedule",
      "Introduced React to the tech stack, improving code reusability across projects",
      "Collaborated with designers to implement pixel-perfect UI from Figma mockups",
    ],
    current: false,
  },
  {
    role: "Junior Web Developer",
    company: "Freelance",
    location: "Remote",
    period: "2018 – 2019",
    achievements: [
      "Built and maintained websites for 10+ small businesses",
      "Learned full stack development through hands-on client projects",
      "Delivered projects with average client satisfaction rating of 4.9/5",
    ],
    current: false,
  },
];

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

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className="reveal pl-16 md:pl-24 mb-12 last:mb-0 relative"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Dot */}
              <div className={`absolute left-4 md:left-6 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center -translate-x-1/2 ${
                exp.current ? "border-primary bg-primary glow-sm" : "border-border bg-background"
              }`}>
                {exp.current && <div className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />}
              </div>

              <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-primary font-medium text-sm">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className={`inline-block text-xs px-3 py-1 rounded-full font-medium mb-1 ${
                      exp.current ? "bg-primary/10 text-primary border border-primary/30" : "bg-secondary text-muted-foreground"
                    }`}>
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
      </div>
    </section>
  );
};

export default ExperienceSection;
