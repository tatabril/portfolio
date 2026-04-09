import { motion } from "framer-motion";
import { FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 rounded-t-[100%] blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center bg-card border border-border/50 p-8 md:p-16 rounded-2xl shadow-2xl"
        >
          <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-sans text-foreground mb-6">Get In Touch</h3>
          
          <p className="text-lg text-muted-foreground font-light mb-8 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-muted-foreground font-mono text-sm">
            <div className="flex items-center gap-2">
              <FiMail className="text-primary" />
              <span>alex.petrov@dev.io</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="text-primary" />
              <span>Moscow, Russia (Remote)</span>
            </div>
          </div>
          
          <a 
            href="mailto:alex.petrov@dev.io"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-lg shadow-primary/20"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
