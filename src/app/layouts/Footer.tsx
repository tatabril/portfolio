import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground font-mono">
          &copy; {new Date().getFullYear()} Alex Petrov. Built with React & Tailwind.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/alexpetrov" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <FiGithub className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/alexpetrov" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <FiTwitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
