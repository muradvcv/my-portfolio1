import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/shared/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero/>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}