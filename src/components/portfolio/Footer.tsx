import { Github, Linkedin, Twitter, Code2, ArrowUp, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-6">
        {/* Contact info block */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            { icon: Mail, label: "Email", value: "iradukundaishimwe123@gmail.com", href: "mailto:iradukundaishimwe123@gmail.com" },
            { icon: Phone, label: "Phone", value: "+250 796 148 406", href: "tel:+250796148406" },
            { icon: MapPin, label: "Location", value: "Rwanda (Remote OK)", href: null },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">{label}</p>
                {href ? (
                  <a href={href} className="text-foreground font-medium hover:text-primary transition-colors text-sm">{value}</a>
                ) : (
                  <p className="text-foreground font-medium text-sm">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <Code2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">
              Emmanuel<span className="text-primary">Dev</span>
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Iradukunda Ishimwe Emmanuel. Built with React & ❤️
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
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
              className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 transition-all ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
