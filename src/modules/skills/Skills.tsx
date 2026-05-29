import { motion } from 'framer-motion';
import {
  FiCode,
  FiTerminal,
  FiLayers,
  FiLayout,
  FiActivity,
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const skills = {
  Core: ['React', 'TypeScript', 'JavaScript (ES6+)'],
  State: ['Zustand', 'Redux Toolkit', 'React Query', 'Context API'],
  Styling: [
    'Tailwind CSS',
    'CSS Modules',
    'Styled Components',
    'shadcn/ui',
    'MUI / Ant Design',
    'Framer Motion',
  ],
  Tools: ['Git', 'Vite / Webpack', 'Docker', 'Storybook', 'VS Code / Cursor'],
  Soft: ['Code Review', 'Technical Documentation', 'Architecture'],
};

export const techStackData = [
  {
    id: 'core',
    titleKey: 'stack.titles.core',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)'],
  },
  {
    id: 'state',
    titleKey: 'stack.titles.state',
    skills: ['Zustand', 'Redux Toolkit', 'React Query', 'Context API'],
  },
  {
    id: 'styling',
    titleKey: 'stack.titles.styling',
    skills: [
      'Tailwind CSS',
      'CSS Modules',
      'Styled Components',
      'shadcn/ui',
      'MUI',
      'Ant Design',
      'Framer Motion',
    ],
  },
  {
    id: 'tools',
    titleKey: 'stack.titles.tools',
    skills: [
      'Vite',
      'Webpack',
      'Git',
      'Docker',
      'Storybook',
      'Cursor / VS Code',
    ],
  },
  {
    id: 'practices',
    titleKey: 'stack.titles.practices',
    skills: [
      'Code Review',
      { isTranslation: true, key: 'stack.skills.techDoc' },
      { isTranslation: true, key: 'stack.skills.archDesign' },
    ],
  },
];
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section
      id="skills"
      className="py-24 bg-card/30 border-y border-border/50 relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">
            {t('technicalArsenal')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-sans text-foreground">
            {t('toolsOfTheTrade')}
          </h3>
          <p className="mt-4 text-muted-foreground text-lg font-light">
            {t('toolsOfTheTradeDescription')}
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techStackData.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                {category.id === 'core' && <FiCode className="text-primary" />}
                {category.id === 'tools' && (
                  <FiTerminal className="text-primary" />
                )}
                {category.id === 'styling' && (
                  <FiLayout className="text-primary" />
                )}
                {category.id === 'practices' && (
                  <FiActivity className="text-primary" />
                )}
                {category.id !== 'core' && // TODO icons add in techStackData
                  category.id !== 'tools' &&
                  category.id !== 'styling' &&
                  category.id !== 'practices' && (
                    <FiLayers className="text-primary" />
                  )}
                {t(category.titleKey)}
              </h4>

              <ul className="space-y-3 relative z-10">
                {category.skills.map((skill, index) => {
                  if (typeof skill === 'object' && skill.isTranslation) {
                    return (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground font-mono text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {t(skill.key)}
                      </li>
                    );
                  }

                  return (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground font-mono text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {t(skill)}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}

          {/* {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                {category === 'Core' && <FiCode className="text-primary" />}
                {category === 'Tools' && (
                  <FiTerminal className="text-primary" />
                )}
                {category === 'Styling' && (
                  <FiLayout className="text-primary" />
                )}
                {category !== 'Core' &&
                  category !== 'Tools' &&
                  category !== 'Styling' && (
                    <FiLayers className="text-primary" />
                  )}
                {category}
              </h4>

              <ul className="space-y-3 relative z-10">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-muted-foreground font-mono text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))} */}
        </motion.div>
      </div>
    </section>
  );
}
