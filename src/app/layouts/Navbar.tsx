import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { Switch } from '@/shared/ui/switch';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { id: 'about', name: t('about'), href: '#about' },
    { id: 'skills', name: t('skills'), href: '#skills' },
    { id: 'experience', name: t('experience'), href: '#experience' },
    { id: 'projects', name: t('projects'), href: '#projects' },
    { id: 'contact', name: t('contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleLanguageChange = (checked: boolean) => {
    const lng = checked ? 'en' : 'ru';
    i18n.changeLanguage(lng);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#top')}
          className="text-xl font-bold font-mono tracking-tighter text-foreground flex items-center gap-2"
        >
          <span className="text-primary">&lt;</span>
          tataBrilko.web
          <span className="text-primary">/&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label
              htmlFor="lang-mode"
              className="text-sm text-muted-foreground"
            >
              RU
            </label>
            <Switch
              id="lang-mode"
              onCheckedChange={handleLanguageChange}
              checked={i18n.language === 'en'}
            />
            <label
              htmlFor="lang-mode"
              className="text-sm text-muted-foreground"
            >
              EN
            </label>
          </div>

          <a
            href="https://github.com/tatabril"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FiGithub className="w-5 h-5" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
          >
            {t('hireMe')}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
