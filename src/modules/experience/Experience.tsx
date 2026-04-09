import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Yandex",
    period: "2023 – Present",
    description: "Led frontend architecture of 3 major products, mentored team of 5 developers, established internal UI library standards.",
    tags: ["React", "TypeScript", "Microfrontends", "Leadership"]
  },
  {
    role: "Middle Frontend Developer",
    company: "Tinkoff",
    period: "2021 – 2023",
    description: "Built customer-facing banking interfaces with React, TypeScript. Optimized Core Web Vitals, increasing conversion by 12%.",
    tags: ["React", "Redux", "Performance", "Web Vitals"]
  },
  {
    role: "Junior Frontend Developer",
    company: "EPAM Systems",
    period: "2020 – 2021",
    description: "Delivered 8+ React projects for international clients, learned modern frontend patterns and agile methodologies.",
    tags: ["React", "JavaScript", "Agile", "Client Delivery"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">Career Journey</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-sans text-foreground">Where I've built things.</h3>
        </div>

        <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12 pb-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h4 className="text-xl font-bold text-foreground">
                  {exp.role} <span className="text-primary font-light">@ {exp.company}</span>
                </h4>
                <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-secondary/50 px-3 py-1 rounded-md w-fit">
                  <FiCalendar /> {exp.period}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed font-light">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-muted-foreground bg-card border border-border px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
