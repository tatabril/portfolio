import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { MaxIcon } from '@/shared/assets/icons/iconMAX';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 border-t border-border/50 bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground font-mono">
          &copy; {new Date().getFullYear()} {t('footer.coopirate')}
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/tatabril"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href="https://max.ru/u/f9LHodD0cOJ8c1gEdwmP01pjcl97fwgVrTyaOCcz5AlTQwwOMHxPaUtLF2Y"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <MaxIcon className="w-4 h-4" />
          </a>
          {/* <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FiTwitter className="w-4 h-4" />
          </a> */}
        </div>
      </div>
    </footer>
  );
}
