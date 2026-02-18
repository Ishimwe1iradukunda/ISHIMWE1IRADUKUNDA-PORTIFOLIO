import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Cloud Engineer",
  "Problem Solver",
  "Open Source Contributor",
  "UI/UX Enthusiast",
];

const floatingIcons = [
  { label: "React", x: "10%", y: "20%", delay: "0s", size: "text-2xl" },
  { label: "⚙️", x: "85%", y: "15%", delay: "1s", size: "text-3xl" },
  { label: "🐳", x: "75%", y: "65%", delay: "0.5s", size: "text-2xl" },
  { label: "☁️", x: "15%", y: "70%", delay: "1.5s", size: "text-3xl" },
  { label: "🐍", x: "50%", y: "10%", delay: "2s", size: "text-2xl" },
  { label: "🛢️", x: "90%", y: "45%", delay: "0.8s", size: "text-2xl" },
  { label: "⚡", x: "5%", y: "45%", delay: "1.2s", size: "text-xl" },
];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 50 : 80;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIndex > 0) {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(191_97%_58%/0.05)_0%,transparent_70%)]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating tech icons */}
      {floatingIcons.map((icon, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none opacity-20"
          style={{
            left: icon.x,
            top: icon.y,
            animation: `float ${4 + i * 0.5}s ease-in-out ${icon.delay} infinite`,
          }}
        >
          <span className={icon.size}>{icon.label}</span>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 container mx-auto text-center px-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" />
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none">
          Hi, I'm{" "}
          <span className="text-gradient">Alex Chen</span>
        </h1>

        <div className="text-xl md:text-3xl text-muted-foreground font-medium mb-8 h-10 flex items-center justify-center gap-2">
          <span className="text-foreground">{displayText}</span>
          <span className="animate-blink text-primary font-light">|</span>
        </div>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I craft high-performance web applications, scalable cloud architectures, and elegant 
          user experiences that make a lasting impact.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-base glow hover:opacity-90 transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-lg border border-border bg-secondary/50 text-foreground font-bold text-base hover:border-primary/50 hover:bg-secondary transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Twitter, href: "#", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-11 h-11 rounded-lg border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll down */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
