import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "C", level: 80 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 75 },
        { name: "Data Analysis", level: 88 },
        { name: "Neural Networks", level: 70 }
      ]
    },
    {
      category: "Big Data & Databases",
      skills: [
        { name: "Hadoop", level: 75 },
        { name: "Spark", level: 78 },
        { name: "SQL", level: 85 },
        { name: "NoSQL", level: 72 }
      ]
    }
  ];

  const softSkills = [
    { name: "Communication", color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-300" },
    { name: "Problem Solving", color: "from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-300" },
    { name: "Team Collaboration", color: "from-green-500/20 to-emerald-500/20 border-green-500/40 text-green-300" },
    { name: "Analytical Thinking", color: "from-orange-500/20 to-red-500/20 border-orange-500/40 text-orange-300" },
    { name: "Project Management", color: "from-teal-500/20 to-cyan-500/20 border-teal-500/40 text-teal-300" },
    { name: "Adaptability", color: "from-rose-500/20 to-pink-500/20 border-rose-500/40 text-rose-300" }
  ];

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "Fluent" }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
            >
              <Card className="group p-8 bg-card/20 backdrop-blur-sm border border-border/20 hover:border-secondary/30 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/10 relative overflow-hidden h-full">
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent" aria-hidden="true" />

                <h3 className="text-sm font-bold mb-8 text-secondary tracking-wide uppercase">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-3">
                      <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                      <motion.span
                        className="text-xs font-medium text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 + skillIdx * 0.05 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-secondary to-primary rounded-full shadow-sm shadow-secondary/50"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 + idx * 0.1 + skillIdx * 0.05, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="p-10 bg-card/20 backdrop-blur-sm border border-border/20 hover:border-primary/20 transition-all duration-500 mb-16 relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" aria-hidden="true" />

            <div className="relative">
              <h3 className="text-xl font-bold mb-8 text-center text-foreground tracking-tight">Soft Skills</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {softSkills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + idx * 0.05 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                  >
                    <Badge
                      variant="secondary"
                      className={`px-6 py-3 text-sm font-semibold bg-gradient-to-r ${skill.color} backdrop-blur-sm border-2 hover:shadow-lg hover:shadow-current/20 transition-all duration-300 cursor-default`}
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="p-10 bg-card/20 backdrop-blur-sm border border-border/20 hover:border-secondary/20 transition-all duration-500 relative overflow-hidden">
            {/* Bottom gradient accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent" aria-hidden="true" />

            <div className="relative">
              <h3 className="text-xl font-bold mb-8 text-center text-foreground tracking-tight">Languages</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {languages.map((lang, idx) => (
                  <motion.div
                    key={idx}
                    className="group text-center p-6 rounded-xl bg-background/30 border border-border/20 hover:border-secondary/30 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.9 + idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-2xl font-bold mb-2 text-foreground">{lang.name}</div>
                    <div className="text-xs font-medium text-secondary uppercase tracking-wider">{lang.level}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
