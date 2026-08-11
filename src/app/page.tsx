import Navbar from "./components/navigation/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />

        <Projects />
        <Contact />
        
      </main>
    </>
  );
}
