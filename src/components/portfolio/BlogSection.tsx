import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    title: "Building Scalable Microservices with Node.js and Kubernetes",
    excerpt: "A practical guide to breaking down a monolithic application into microservices, deploying with Kubernetes, and handling service discovery.",
    date: "Jan 28, 2026",
    readTime: "8 min read",
    tags: ["DevOps", "Node.js", "Kubernetes"],
    gradient: "from-primary/20 to-primary/5",
    url: "#",
  },
  {
    title: "The Art of React Performance Optimization in 2025",
    excerpt: "Deep dive into React's latest optimizations — memoization, lazy loading, virtual DOM diffing, and how to profile your app effectively.",
    date: "Jan 10, 2026",
    readTime: "12 min read",
    tags: ["React", "Performance", "TypeScript"],
    gradient: "from-blue-500/20 to-blue-500/5",
    url: "#",
  },
  {
    title: "PostgreSQL vs MongoDB: Choosing the Right Database in 2025",
    excerpt: "An honest comparison of relational vs document databases — when to use each, trade-offs, and real-world use case analysis.",
    date: "Dec 18, 2025",
    readTime: "10 min read",
    tags: ["Databases", "PostgreSQL", "MongoDB"],
    gradient: "from-purple-500/20 to-purple-500/5",
    url: "#",
  },
  {
    title: "Zero-Downtime Deployments with GitHub Actions and AWS ECS",
    excerpt: "Step-by-step walkthrough of setting up a complete CI/CD pipeline that deploys to ECS with blue-green deployments and auto rollback.",
    date: "Nov 30, 2025",
    readTime: "15 min read",
    tags: ["CI/CD", "AWS", "DevOps"],
    gradient: "from-orange-500/20 to-orange-500/5",
    url: "#",
  },
  {
    title: "Why Every Developer Should Learn Terraform",
    excerpt: "Infrastructure as Code changed how I think about deployments. Here's everything I learned in my first year with Terraform and why you should start.",
    date: "Nov 10, 2025",
    readTime: "7 min read",
    tags: ["Terraform", "IaC", "Cloud"],
    gradient: "from-green-500/20 to-green-500/5",
    url: "#",
  },
  {
    title: "Writing Clean APIs: REST Design Principles I Swear By",
    excerpt: "The opinionated guide to designing APIs that your future self and teammates will love — naming, versioning, error handling, and documentation.",
    date: "Oct 22, 2025",
    readTime: "9 min read",
    tags: ["API", "Best Practices", "REST"],
    gradient: "from-pink-500/20 to-pink-500/5",
    url: "#",
  },
];

const BlogSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="blog" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Thoughts & Insights</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">Latest Articles</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <a
              key={post.title}
              href={post.url}
              className="reveal glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group block"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={`h-24 bg-gradient-to-br ${post.gradient}`} />
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-base leading-snug mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-secondary border border-border text-muted-foreground flex items-center gap-1">
                      <Tag className="w-2.5 h-2.5" /> {tag}
                    </span>
                  ))}
                </div>

                <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/50 text-foreground font-medium hover:border-primary/50 hover:text-primary transition-all duration-200"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
