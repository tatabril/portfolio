import { motion } from "framer-motion";
import { FiCode, FiTerminal, FiLayers } from "react-icons/fi";

const skills = {
  Core: ["React 18", "TypeScript", "Next.js", "Vite", "JavaScript (ES6+)"],
  State: ["Zustand", "Redux Toolkit", "React Query", "Context API"],
  Styling: ["Tailwind CSS", "Framer Motion", "CSS Modules", "Styled Components", "shadcn/ui"],
  Backend: ["Node.js", "Express", "REST APIs", "GraphQL", "tRPC"],
  Tools: ["Git", "Webpack", "ESBuild", "Vitest", "Testing Library", "Docker", "CI/CD"],
  Soft: ["Code Review", "Mentoring", "Technical Writing", "Architecture"]
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30 border-y border-border/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">Technical Arsenal</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-sans text-foreground">Tools of the trade.</h3>
          <p className="mt-4 text-muted-foreground text-lg font-light">
            I build with modern, scalable, and battle-tested technologies to deliver robust frontend architectures.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div 
              key={category} 
              variants={itemVariants}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                {category === "Core" && <FiCode className="text-primary" />}
                {category === "Tools" && <FiTerminal className="text-primary" />}
                {(category !== "Core" && category !== "Tools") && <FiLayers className="text-primary" />}
                {category}
              </h4>
              
              <ul className="space-y-3 relative z-10">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
