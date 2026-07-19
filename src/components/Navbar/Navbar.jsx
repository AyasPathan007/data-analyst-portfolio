import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        Ayas<span>.</span>
      </div>

      <nav>

        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="active"
        >
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