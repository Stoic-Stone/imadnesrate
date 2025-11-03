import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "imadnesrat65@gmail.com",
      href: "mailto:imadnesrat65@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 696 250 006",
      href: "tel:696250006"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Morocco",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-card/30 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group p-8 bg-card/20 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-all duration-500 h-full hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

                {info.href ? (
                  <a href={info.href} className="block text-center relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                      <info.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">{info.label}</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </a>
                ) : (
                  <div className="text-center relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                      <info.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">{info.label}</div>
                    <div className="text-sm font-semibold text-foreground">{info.value}</div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="group p-12 bg-card/20 backdrop-blur-sm border border-border/20 hover:border-primary/20 transition-all duration-500 relative overflow-hidden">
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

            <div className="text-center relative">
              <h3 className="text-2xl font-bold mb-4 text-foreground tracking-tight">Ready to start a conversation?</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
                Whether you have a project in mind, need consulting, or just want to connect, I'd love to hear from you.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => window.location.href = 'mailto:imadnesrat65@gmail.com'}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-semibold px-10 py-6 text-base shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 rounded-xl"
                  aria-label="Send email to Imad Nesrate"
                >
                  <Send className="mr-2 h-5 w-5" aria-hidden="true" />
                  Send Me an Email
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/50">
          <p className="text-muted-foreground">
            © 2025 Imad Nesrate. Built with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
