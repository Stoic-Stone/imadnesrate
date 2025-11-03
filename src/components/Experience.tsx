import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const experiences = [
    {
      title: "Technical Intern",
      company: "Axians",
      period: "July 2024",
      type: "Internship",
      description: "Network infrastructure and automation specialist",
      highlights: [
        "Participated in network infrastructure installation and configuration (switches, routers, VLANs)",
        "Contributed to automation script development for equipment deployment and monitoring",
        "Assisted in technical incident resolution and network procedure documentation",
        "Discovered best practices in cybersecurity and IT infrastructure management"
      ],
      icon: Briefcase
    },
    {
      title: "Observation Intern",
      company: "Transport de Frét Européen",
      period: "July 2022",
      type: "Internship",
      description: "Logistics and freight management",
      highlights: [
        "Observed logistics operations and freight management at European scale",
        "Discovered planning, monitoring and freight flow optimization processes",
        "Gained awareness of supply chain challenges, transport regulations and intermodal coordination"
      ],
      icon: Briefcase
    }
  ];

  const education = [
    {
      degree: "Computer Engineering",
      institution: "Université Internationale de Rabat",
      period: "2021 - 2025",
      specialization: "Big Data & Artificial Intelligence",
      icon: GraduationCap
    },
    {
      degree: "Scientific Baccalaureate",
      institution: "Lycée qualifiant Sidi Driss",
      period: "2020 - 2021",
      specialization: "Physics & Chemistry",
      icon: GraduationCap
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Briefcase className="text-primary" />
            Professional Experience
          </motion.h3>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
                whileHover={{ x: 10 }}
              >
                <Card className="p-6 md:p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                        <exp.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">{exp.title}</h4>
                        <p className="text-lg text-primary">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic mb-2">{exp.description}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className="bg-accent/20 text-accent border-accent/30 whitespace-nowrap">
                      {exp.period}
                    </Badge>
                    <Badge variant="outline" className="whitespace-nowrap">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
                <ul className="space-y-2 ml-4">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <motion.h3 
            className="text-3xl font-bold mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <GraduationCap className="text-secondary" />
            Education
          </motion.h3>
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.2 }}
                whileHover={{ x: -10 }}
              >
                <Card className="p-6 md:p-8 bg-gradient-to-br from-card to-card/50 border-secondary/20 backdrop-blur-sm hover:border-secondary/40 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20">
                        <edu.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">{edu.degree}</h4>
                        <p className="text-lg text-secondary">{edu.institution}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold">Specialization:</span> {edu.specialization}
                    </p>
                  </div>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30 whitespace-nowrap">
                    {edu.period}
                  </Badge>
                </div>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
