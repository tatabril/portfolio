import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('about'), href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
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
  const changeLanguage = (lng: string) => {
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
        <h1>{t('welcome')}</h1>
        <div>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('ru')}>Русский</button>
        </div>
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#top')}
          className="text-xl font-bold font-mono tracking-tighter text-foreground flex items-center gap-2"
        >
          <span className="text-primary">&lt;</span>
          Alex.dev
          <span className="text-primary">/&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/alexpetrov"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/alexpetrov"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.header>
  );
}
