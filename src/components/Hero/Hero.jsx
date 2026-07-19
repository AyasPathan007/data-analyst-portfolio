import "./Hero.css";
import profile from "../../assets/images/profile.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero" data-aos="fade-up">
      <div className="hero-content">

        {/* LEFT SIDE */}

        <div className="hero-left">

          <p className="hero-greeting">
            👋 Hello, I'm
          </p>

          <h1>
            Ayas <span>Pathan</span>
          </h1>

          <h2>Data Analyst</h2>

          <p className="hero-description">
            Transforming complex business data into actionable insights using
            <span> Power BI</span>,
            <span> SQL</span>,
            <span> Python</span>,
            <span> Excel</span> and
            <span> DAX</span>.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View Projects
              <FaArrowRight />
            </a>

            <a
                href="/resume.pdf"
                download="Ayas_Pathan_Resume.pdf"
                className="secondary-btn"
            >
  Download Resume
  <FaDownload />
</a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/AyasPathan007"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ayas-pathan-770268414/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:ayaspathn163@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-image">

          <div className="profile-circle">
            <img
              src={profile}
              alt="Ayas Pathan"
            />
          </div>

          <div className="floating one">Power BI</div>
          <div className="floating two">SQL</div>
          <div className="floating three">Python</div>
          <div className="floating four">Excel</div>

        </div>

      </div>
    </section>
  );
}

export default Hero;