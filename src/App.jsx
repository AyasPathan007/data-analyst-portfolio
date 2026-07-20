import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import Expertise from "./components/Expertise/Expertise";
import WhyHireMe from "./components/WhyHireMe/WhyHireMe";
function App() {
  return (
    <>
      <CursorGlow/>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <WhyHireMe />
      <Expertise />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}

export default App;