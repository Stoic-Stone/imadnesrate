import { Button } from "@/components/ui/button";
import { Mail, Phone, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Social links with proper labels for accessibility
  const socialLinks = [
    {
      href: "mailto:imadnesrat65@gmail.com",
      icon: Mail,
      label: "Send email to Imad Nesrate",
      delay: 0
    },
    {
      href: "tel:+212695260006",
      icon: Phone,
      label: "Call Imad Nesrate",
      delay: 0.1
    }
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" aria-hidden="true"></div>

      {/* Animated background elements - Hidden from screen readers and disabled for reduced motion */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={prefersReducedMotion ? {} : { y }}
        aria-hidden="true"
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        style={prefersReducedMotion ? {} : { opacity }}
      >
        <motion.div
          className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          role="status"
          aria-label="Professional title"
        >
          <span className="text-sm text-primary font-medium">Big Data & AI Engineer</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Imad Nesrate
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Computer Engineering student passionate about leveraging <span className="text-primary font-semibold">Big Data</span> and <span className="text-secondary font-semibold">Artificial Intelligence</span> to solve complex problems
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          role="group"
          aria-label="Call to action buttons"
        >
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-primary/50 transition-all"
            aria-label="Scroll to contact section"
          >
            <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
            Get In Touch
          </Button>

          <Button
            onClick={() => scrollToSection('experience')}
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 backdrop-blur-sm px-8 py-6 text-lg"
            aria-label="Scroll to experience section"
          >
            View Experience
          </Button>
        </motion.div>

        <motion.nav
          className="flex gap-6 justify-center"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          aria-label="Social media links"
        >
          {socialLinks.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target={item.href.startsWith('http') ? "_blank" : undefined}
              rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + item.delay }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.2, rotate: 5 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
              aria-label={item.label}
            >
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </motion.a>
          ))}
        </motion.nav>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer bg-transparent border-none p-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
        animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-label="Scroll down to about section"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2" aria-hidden="true">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
        <ChevronDown className="h-4 w-4 text-primary/70 mx-auto mt-1" aria-hidden="true" />
      </motion.button>
    </section>
  );
};

export default Hero;
