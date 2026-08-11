import Navbar from "./components/navigation/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Footer from "./components/navigation/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />

        <Projects />
        <Contact />
        
      </main>
      <Footer />
    </>
  );
}
