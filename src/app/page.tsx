import Navbar from "./components/navigation/Navbar";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="sr-only">
          <h2>About Rosalyn Amondi Ajigoh</h2>
        </section>

        <section id="projects" className="sr-only">
          <h2>Projects</h2>
        </section>

        <section id="skills" className="sr-only">
          <h2>Technical skills</h2>
        </section>

        <section id="contact" className="sr-only">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}