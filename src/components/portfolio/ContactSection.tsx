import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Github, Linkedin, Twitter, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const sectionRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    // Simulate sending — replace with EmailJS or your backend
    await new Promise((r) => setTimeout(r, 1200));
    const mailto = `mailto:alex@example.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`From: ${data.name} <${data.email}>\n\n${data.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">Contact Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Have a project in mind, a job opportunity, or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — info */}
          <div className="reveal-left">
            <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm currently available for freelance projects, full-time roles, and consulting engagements.
              Whether you need a complete web application or help scaling your existing system — let's talk.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: Mail, label: "Email", value: "alex@example.com", href: "mailto:alex@example.com" },
                { icon: MapPin, label: "Location", value: "San Francisco, CA (Remote OK)", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest">{label}</p>
                    {href ? (
                      <a href={href} className="text-foreground font-medium hover:text-primary transition-colors">{value}</a>
                    ) : (
                      <p className="text-foreground font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-muted-foreground text-sm mb-4 uppercase tracking-widest">Find me online</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-12 h-12 rounded-lg border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal-right">
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-8 space-y-5">
              {submitted && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">Message sent! I'll get back to you soon.</span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Your Name</label>
                  <input
                    {...register("name")}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Email Address</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Subject</label>
                <input
                  {...register("subject")}
                  placeholder="Project inquiry / Job opportunity..."
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
                {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all duration-200 glow-sm hover:glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
