import Navbar from "@/app/layouts/Navbar";
import Hero from "@/modules/hero/Hero";
import Skills from "@/modules/skills/Skills";
import Experience from "@/modules/experience/Experience";
import Projects from "@/modules/projects/Projects";
import Contact from "@/modules/contact/Contact";
import Footer from "@/app/layouts/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;