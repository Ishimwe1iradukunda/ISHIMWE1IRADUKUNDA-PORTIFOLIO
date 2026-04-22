import { Github, Linkedin, Twitter, Code2, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Footer = () => (
  <footer className="border-t border-border bg-card py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2 group"
      >
        <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
          <Code2 className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="font-bold text-foreground">
          Emmanuel<span className="text-primary">Dev</span>
        </span>
      </button>

      <p className="text-muted-foreground text-sm text-center">
        © {new Date().getFullYear()} Iradukunda Ishimwe Emmanuel
      </p>

      <div className="flex items-center gap-3">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 transition-all ml-1"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
