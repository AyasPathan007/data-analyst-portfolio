import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Stats from "./components/Stats/Stats";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import CursorGlow from "./components/CursorGlow/CursorGlow";

function App() {
  return (
    <>
      <CursorGlow/>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}

export default App;