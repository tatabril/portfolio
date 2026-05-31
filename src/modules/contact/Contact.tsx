import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import iconMax from '@/shared/assets/icons/iconMax.svg';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 rounded-t-[100%] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center bg-card border border-border/50 p-8 md:p-16 rounded-2xl shadow-2xl"
        >
          <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
            {t('contact.badge')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-sans text-foreground mb-6">
            {t('contact.title')}
          </h3>

          <p className="text-lg text-muted-foreground font-light mb-8 max-w-xl mx-auto">
            {t('contact.description')}
          </p>

          <div className="flex flex-col items-center justify-center gap-6 mb-10 text-muted-foreground font-mono text-sm">
            <div className="flex items-center gap-2">
              <img src={iconMax} alt="max" className="h-5 w-5" />
              Tata Brilko
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-primary" />
              <span>tatabrilko.web@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="text-primary" />
              <span>{t('contact.location')}</span>
            </div>
          </div>

          <a
            href="mailto:tatabrilko.web@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-lg shadow-primary/20"
          >
            {t('contact.mailto')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
