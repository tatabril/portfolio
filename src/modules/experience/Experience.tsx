import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCalendar } from 'react-icons/fi';

export default function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      role: 'Middle Frontend Developer',
      company: 'Umbrella IT',
      period: '2024 – Present',
      description: 'career.middle.description',
      tags: [
        'React',
        'TypeScript',
        'Vite',
        'Shadcn/ui',
        'Ant Design',
        'Orval',
        'Storybook',
        'Zustand',
        'Cursor',
      ],
    },
    {
      role: 'Junior Frontend Developer',
      company: 'Umbrella IT',
      period: '2022 – 2023',
      description: 'career.junior.description',
      tags: [
        'React',
        'JavaScript',
        'TypeScript',
        'MUI',
        'Webpack',
        'Redux Saga',
      ],
    },
    {
      role: 'Intern Frontend Developer',
      company: 'Umbrella IT',
      period: '2021 - 2022',
      description: 'career.intern.description',
      tags: ['HTML5', 'CSS/SASS', 'React', 'JavaScript', 'Git'],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">
            {t('career.badge')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-sans text-foreground">
            {t('career.title')}
          </h3>
        </div>

        <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12 pb-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h4 className="text-xl font-bold text-foreground">
                  {exp.role}
                  <span className="text-primary font-light">
                    @ {exp.company}
                  </span>
                </h4>
                <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-secondary/50 px-3 py-1 rounded-md w-fit">
                  <FiCalendar /> {exp.period}
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed font-light">
                {t(exp.description)}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-muted-foreground bg-card border border-border px-2 py-1 rounded"
                  >
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
