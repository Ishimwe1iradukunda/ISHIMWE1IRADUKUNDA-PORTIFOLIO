import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp Inc.",
    avatar: "SJ",
    text: "Emmanuel is one of the most talented engineers I've had the pleasure of working with. Their ability to architect scalable systems while keeping code clean and maintainable is exceptional. They delivered our analytics platform months ahead of schedule.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Founder at StartupXYZ",
    avatar: "MW",
    text: "Hiring Emmanuel was the best decision we made for our startup. They took full ownership of our backend architecture and frontend — and the results speak for themselves. Our user retention improved by 40% after their UX overhaul.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Product Manager at Digital Agency Co.",
    avatar: "EC",
    text: "Emmanuel consistently delivered high-quality work under tight deadlines. Their communication was always clear, and they proactively flagged risks before they became problems. A true professional and a great team player.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Lead Developer at OpenSource Project",
    avatar: "DP",
    text: "Emmanuel's contributions to our open-source CI/CD tool were game-changing. The architecture they proposed reduced our build times by 80%. If you need someone who can think at scale, Emmanuel is your person.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const sectionRef = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = (dir: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  useEffect(() => {
    const timer = setInterval(() => navigate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Kind Words</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">Testimonials</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto reveal">
          <div className={`glass rounded-2xl p-8 md:p-12 text-center transition-all duration-400 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
            <Quote className="w-10 h-10 text-primary/40 mx-auto mb-6" />

            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
              "{t.text}"
            </p>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-primary text-lg">★</span>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">{t.avatar}</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-primary" : "w-1.5 bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={() => navigate(1)}
              className="w-10 h-10 rounded-full border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
