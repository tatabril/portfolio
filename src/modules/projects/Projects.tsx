import { motion } from 'framer-motion';
import { FiExternalLink, FiLock } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip';

import eis from '@/shared/assets/images/eis.png';
import realTime from '@/shared/assets/images/real-time.png';
import bcsDark from '@/shared/assets/images/bcs-dark.png';

const projects = [
  {
    title: 'projects.eis.title',
    type: 'projects.eis.type',
    description: 'projects.eis.description',
    tech: [
      'React',
      'Vite',
      'TypeScript',
      'Zustand',
      'Shadcn/ui',
      'Orval',
      'Storybook',
      'React Нook Form',
      'React Query',
    ],
    image: eis,
    links: { live: 'https://etp.it4prof.ru' },
  },
  {
    title: 'projects.shopkit.title',
    type: 'projects.shopkit.type',
    description: 'projects.shopkit.description',
    tech: [
      'React',
      'TypeScript',
      'React Query',
      'Webpack',
      'MUI',
      'React Нook Form',
      'React Context',
    ],
    image: realTime,
    nda: 'projects.nda',
    tooltip: 'projects.ndaTooltip',
  },
  {
    title: 'projects.bcs.title',
    type: 'projects.bcs.type',
    description: 'projects.bcs.description',
    tech: [
      'React',
      'MUI ➔ Ant Design',
      'MobX',
      'React Нook Form',
      'react-i18next',
    ],
    image: bcsDark,
    nda: 'projects.nda',
    tooltip: 'projects.ndaTooltip',
  },
];

export default function Projects() {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="projects"
      className="py-16 lg:py-24 bg-card/30 border-y border-border/50"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">
            {t('projects.badge')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-sans text-foreground">
            {t('projects.title')}
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={`${i18n.language}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-3/5 group relative">
                {project.image ? (
                  <div className="relative rounded-xl overflow-hidden border border-border/50 bg-card aspect-[16/10] shadow-xl p-2">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={project.image}
                      alt={t(project.title)}
                      className="w-full h-full rounded-xl object-container transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ) : (
                  <div className="relative rounded-xl overflow-hidden border border-border/50 bg-secondary/50 aspect-[16/10] flex items-center justify-center font-mono text-muted-foreground shadow-xl">
                    {t('projects.codePlaceholder')}
                  </div>
                )}
              </div>

              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <span className="text-primary font-mono text-sm mb-2">
                  {t(project.type)}
                </span>
                <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {t(project.title)}
                </h4>

                <div className="bg-card border border-border/50 p-6 rounded-xl shadow-lg mb-6 relative z-20 ml-0 lg:-ml-12 lg:group-even:ml-0 lg:group-even:-mr-12">
                  <p className="text-muted-foreground font-light leading-relaxed word-spacing-[0.5em]">
                    {t(project.description)}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-8 font-mono text-sm text-foreground/80">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs font-mono text-muted-foreground bg-card border border-border px-2 py-1 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4">
                  {'tooltip' in project && project.tooltip && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          type="button"
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                          aria-label={t(project.tooltip)}
                        >
                          <FiLock className="w-5 h-5" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="right" align="center">
                        {t(project.tooltip)}
                      </TooltipContent>
                    </Tooltip>
                  )}
                  {'links' in project && (
                    <a
                      href={project?.links?.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
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
