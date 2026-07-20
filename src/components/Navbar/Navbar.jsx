import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // Hide on scroll down
      } else {
        setShowNavbar(true); // Show on scroll up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <div className="logo">
        Ayas<span>.</span>
      </div>

      <nav>
        <Link to="home" smooth duration={500} spy offset={-80} activeClass="active">
          Home
        </Link>

        <Link to="about" smooth duration={500} spy offset={-80} activeClass="active">
          About
        </Link>

        <Link to="skills" smooth duration={500} spy offset={-80} activeClass="active">
          Skills
        </Link>

        <Link to="experience" smooth duration={500} spy offset={-80} activeClass="active">
          Experience
        </Link>

        <Link to="projects" smooth duration={500} spy offset={-80} activeClass="active">
          Projects
        </Link>

        <Link to="contact" smooth duration={500} spy offset={-80} activeClass="active">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;