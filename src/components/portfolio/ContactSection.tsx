import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all";

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
    await new Promise((r) => setTimeout(r, 1200));
    window.location.href = `mailto:iradukundaishimwe123@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(`From: ${data.name} <${data.email}>\n\n${data.message}`)}`;
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
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto glass rounded-2xl p-8 space-y-5 reveal">
          {submitted && (
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span className="text-sm font-medium">Message sent! I'll get back to you soon.</span>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input {...register("name")} placeholder="Your name" className={inputClass} />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input {...register("email")} type="email" placeholder="you@example.com" className={inputClass} />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Tell me about your project..."
              className={`${inputClass} resize-none`}
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
    </section>
  );
};

export default ContactSection;
