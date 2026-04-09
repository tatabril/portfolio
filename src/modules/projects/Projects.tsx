import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import project1Img from "@/shared/assets/images/project-1.png";
import project2Img from "@/shared/assets/images/project-2.png";
import project3Img from "@/shared/assets/images/project-3.png";

const projects = [
  {
    title: "TaskFlow",
    type: "SaaS Dashboard",
    description: "Project management SaaS with real-time task boards, drag-and-drop functionality, and team collaboration features. Currently serving 3,000+ active users.",
    tech: ["React 18", "TypeScript", "Zustand", "Framer Motion", "Supabase"],
    image: project1Img,
    links: { live: "#", github: "#" }
  },
  {
    title: "ShopKit",
    type: "Component Library",
    description: "Production-ready E-commerce component library. Contains 40+ highly customizable components used by 15 companies. Reached 1.2k GitHub stars.",
    tech: ["React", "TypeScript", "Storybook", "Rollup", "Tailwind"],
    image: project2Img,
    links: { live: "#", github: "#" }
  },
  {
    title: "PulseUI",
    type: "Design System",
    description: "Comprehensive design system for a fintech startup. Implemented strict CSS variables and seamless Figma integration, reducing UI inconsistencies by 70%.",
    tech: ["React", "CSS Variables", "Figma API", "Radix UI"],
    image: project3Img,
    links: { live: "#" }
  },
  {
    title: "DevLens",
    type: "Browser Extension",
    description: "Chrome extension for React debugging. Provides real-time component tree visualization and prop inspection. Over 800+ installs.",
    tech: ["React", "Chrome APIs", "TypeScript", "Vite"],
    image: null,
    links: { github: "#" }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">Selected Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-sans text-foreground">Featured Projects.</h3>
        </div>

        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              {/* Image side */}
              <div className="w-full lg:w-3/5 group relative">
                {project.image ? (
                  <div className="relative rounded-xl overflow-hidden border border-border/50 bg-card aspect-[16/10] shadow-xl">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ) : (
                  <div className="relative rounded-xl overflow-hidden border border-border/50 bg-secondary/50 aspect-[16/10] flex items-center justify-center font-mono text-muted-foreground shadow-xl">
                    &lt;Code Visualization /&gt;
                  </div>
                )}
              </div>
              
              {/* Content side */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <span className="text-primary font-mono text-sm mb-2">{project.type}</span>
                <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{project.title}</h4>
                
                <div className="bg-card border border-border/50 p-6 rounded-xl shadow-lg mb-6 relative z-20 -ml-0 lg:-ml-12 lg:group-even:ml-0 lg:group-even:-mr-12">
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-8 font-mono text-sm text-foreground/80">
                  {project.tech.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                
                <div className="flex items-center gap-4">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <FiGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
