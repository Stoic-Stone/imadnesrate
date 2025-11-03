import { Card } from "@/components/ui/card";
import { Brain, Database, Code2 } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Expertise in developing intelligent systems and predictive models"
    },
    {
      icon: Database,
      title: "Big Data",
      description: "Processing and analyzing large-scale datasets for actionable insights"
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building robust applications with modern technologies"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative" ref={ref} aria-label="About section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" aria-hidden="true"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="space-y-6"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Computer Engineering student at <span className="text-foreground font-semibold">Université Internationale de Rabat</span>, 
              specializing in Big Data and Artificial Intelligence. My journey in technology is driven by curiosity 
              and a passion for transforming data into meaningful solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in data science, machine learning, and software development, I combine 
              technical expertise with strong analytical thinking to tackle complex challenges. I'm committed to 
              continuous learning and staying at the forefront of emerging technologies.
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="group p-10 bg-card/30 backdrop-blur-md border border-border/20 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden">
              {/* Subtle gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden="true" />

              <div className="relative">
                <h3 className="text-xl font-bold mb-8 text-foreground tracking-tight">Quick Facts</h3>
                <div className="space-y-5">
                  <div className="flex justify-between items-center py-3 border-b border-border/10">
                    <span className="text-sm font-medium text-muted-foreground">Education</span>
                    <span className="text-sm font-semibold text-foreground">UIR, 2021-2025</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border/10">
                    <span className="text-sm font-medium text-muted-foreground">Focus</span>
                    <span className="text-sm font-semibold text-foreground">Big Data & AI</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border/10">
                    <span className="text-sm font-medium text-muted-foreground">Languages</span>
                    <span className="text-sm font-semibold text-foreground">AR, EN, FR</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-sm font-medium text-muted-foreground">Location</span>
                    <span className="text-sm font-semibold text-foreground">Morocco</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={prefersReducedMotion ? {} : { y: -8 }}
            >
              <Card className="group p-8 bg-card/20 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-all duration-500 h-full hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-foreground tracking-tight">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
