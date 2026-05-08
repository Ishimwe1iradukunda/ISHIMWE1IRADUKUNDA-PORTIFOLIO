import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Twitter, Gauge } from "lucide-react";
import profileImg from "@/assets/profile.png";

const roles = [
  "Full Stack Developer",
  "Cloud Engineer",
  "Problem Solver",
  "Open Source Contributor",
  "UI/UX Enthusiast",
];

const langIcons = [
  { label: "Py", x: "8%", y: "18%", delay: "0s", duration: 6, rotate: -6 },
  { label: "TS", x: "82%", y: "12%", delay: "1.2s", duration: 7, rotate: 8 },
  { label: "Go", x: "18%", y: "55%", delay: "0.5s", duration: 5.5, rotate: -4 },
  { label: "☁️", x: "72%", y: "62%", delay: "1.8s", duration: 6.5, rotate: 6 },
  { label: "JS", x: "48%", y: "8%", delay: "2s", duration: 5, rotate: -8 },
  { label: "⚛️", x: "88%", y: "42%", delay: "0.8s", duration: 7.5, rotate: 4 },
  { label: "🐳", x: "5%", y: "75%", delay: "1.5s", duration: 6.2, rotate: -5 },
  { label: "C#", x: "30%", y: "25%", delay: "0.3s", duration: 5.8, rotate: 10 },
  { label: "🔥", x: "60%", y: "72%", delay: "1s", duration: 6.8, rotate: -3 },
  { label: "Kt", x: "92%", y: "22%", delay: "2.2s", duration: 5.2, rotate: 7 },
  { label: "Rs", x: "38%", y: "68%", delay: "0.7s", duration: 7.2, rotate: -9 },
  { label: "🐍", x: "75%", y: "82%", delay: "1.6s", duration: 6, rotate: 5 },
  { label: "⚡", x: "22%", y: "40%", delay: "0.2s", duration: 5.5, rotate: -7 },
  { label: "C++", x: "55%", y: "35%", delay: "1.4s", duration: 6.4, rotate: 3 },
  { label: "☕", x: "12%", y: "88%", delay: "0.9s", duration: 7, rotate: -2 },
  { label: "🛢️", x: "65%", y: "15%", delay: "2.5s", duration: 5.8, rotate: 6 },
];

const speedMultipliers = { slow: 1.8, normal: 1, fast: 0.5 } as const;
type SpeedKey = keyof typeof speedMultipliers;

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [speed, setSpeed] = useState<SpeedKey>("normal");
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const w = window.innerWidth;
      if (w < 640) setScale(0.85);       // mobile
      else if (w < 1024) setScale(1);    // tablet
      else if (w < 1536) setScale(1.15); // desktop
      else setScale(1.35);               // large desktop
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

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
      {/* Fixed background layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-secondary/20 -z-30" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,hsl(191_97%_58%/0.08)_0%,transparent_70%)] -z-30" />

      {/* Fixed grid pattern */}
      <div className="fixed inset-0 opacity-[0.03] bg-[linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:64px_64px] -z-30" />

      {/* Codewars-style floating language icon cards */}
      {langIcons.map((icon, i) => (
        <div
          key={i}
          className="fixed pointer-events-none select-none z-0"
          style={{
            left: icon.x,
            top: icon.y,
            animation: `float ${icon.duration * speedMultipliers[speed]}s ease-in-out ${icon.delay} infinite`,
          }}
        >
          <div
            className="w-14 h-14 md:w-16 md:h-16 rounded-xl border flex items-center justify-center shadow-lg backdrop-blur-sm"
            style={{
              transform: `rotate(${icon.rotate}deg)`,
              opacity: 0.75,
              background: 'hsl(220 18% 10% / 0.9)',
              borderColor: 'hsl(191 97% 58% / 0.2)',
              boxShadow: '0 0 15px hsl(191 97% 58% / 0.1)',
            }}
          >
            <span className="text-base md:text-lg font-bold text-primary/80">{icon.label}</span>
          </div>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 container mx-auto text-center px-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" />
          Available for new opportunities
        </div>

        <div className="mb-6">
          <img src={profileImg} alt="Iradukunda Ishimwe Emmanuel" className="w-32 h-32 rounded-full border-2 border-primary/30 mx-auto mb-6 object-cover" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none">
          Hi, I'm{" "}
          <span className="text-gradient">Emmanuel</span>
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
            { icon: Github, href: "https://github.com/Ishimwe1iradukunda", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Twitter, href: "https://x.com/gtaekashi", label: "Twitter" },
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

      {/* Speed control */}
      <div className="fixed bottom-6 right-6 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary/80 border border-border/50 backdrop-blur-sm">
        <Gauge className="w-4 h-4 text-muted-foreground" />
        {(["slow", "normal", "fast"] as SpeedKey[]).map((s) => (
          <button
            key={s}
            onClick={() => setSpeed(s)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
              speed === s
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
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
