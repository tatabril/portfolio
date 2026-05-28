import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import avatarImg from '@/shared/assets/images/avatar.jpg';

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-[100dvh] flex items-center pt-20 pb-10 relative overflow-hidden"
    >
      <span id="about" className="absolute top-0" aria-hidden="true" />
      {/* Background ambient noise/glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight leading-tight mb-6 text-foreground">
            Building{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              pixel-perfect
            </span>{' '}
            React experiences.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg font-light leading-relaxed">
            I'm Alex Petrov, a Senior Frontend Developer with 5 years of
            experience crafting premium digital tools and interfaces.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('#projects')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Work <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium border border-border hover:bg-secondary/80 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground font-mono">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground font-sans">
                5+
              </span>
              <span>Years Exp.</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground font-sans">
                40+
              </span>
              <span>Projects</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground font-sans">
                1.2k
              </span>
              <span>Stars</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto w-full max-w-md lg:max-w-full"
        >
          <div className="aspect-square rounded-2xl overflow-hidden relative border border-border/50 bg-card p-2 shadow-2xl shadow-primary/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay pointer-events-none z-10" />
            <img
              src={avatarImg}
              alt="Alex Petrov"
              className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-700"
            />

            {/* Decorative tech elements */}
            <div className="absolute bottom-6 -left-6 bg-card border border-border px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 z-20">
              <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold font-mono">
                Ts
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-mono">
                  Strict mode
                </span>
                <span className="text-sm font-medium">Enabled</span>
              </div>
            </div>

            <div className="absolute top-12 -right-6 bg-card border border-border px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 z-20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-mono font-medium">React 18</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
