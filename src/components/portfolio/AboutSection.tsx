import { useScrollReveal } from "@/hooks/useScrollReveal";
import { User, Briefcase, Code, Award } from "lucide-react";
import profileImg from "@/assets/profile.png";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: Code, value: "40+", label: "Projects Built" },
  { icon: User, value: "20+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Certifications" },
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
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Iradukunda Ishimwe Emmanuel
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate Full Stack Developer with 5+ years of experience building scalable web applications 
              and cloud architectures. I love turning complex problems into elegant, user-friendly solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From architecting microservices on AWS to crafting pixel-perfect UIs with React, I thrive 
              across the full stack. When I'm not coding, I'm contributing to open source, writing technical 
              articles, or exploring the latest in DevOps and AI.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal glass rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
