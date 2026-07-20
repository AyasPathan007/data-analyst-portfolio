import "./About.css";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">
      <div
        className="about-container"
        data-aos="fade-up"
      >
        <div className="about-left">
          <span className="section-tag">ABOUT ME</span>

          <h2>
             Data-Driven<span> Problem Solver</span>
          </h2>

          <p>
            I am a Data Analyst with nearly <strong>3 years of experience </strong>
             building interactive dashboards, writing advanced SQL queries,
            and transforming raw business data into meaningful insights using
            <span> Power BI</span>, <span>SQL</span>, <span>Python</span>, and
            <span> Excel</span>.
          </p>

          <p>
            I enjoy solving business problems through data visualization,
            dashboard development, KPI reporting, automation, and analytical
            thinking.
          </p>

          <p>
            My goal is to help organizations make faster and smarter decisions
            by converting complex datasets into easy-to-understand reports and
            interactive dashboards.
          </p>

          <a
            href="/resume.pdf"
            download="Ayas_Pathan_Resume.pdf"
            className="download-btn"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>

        <div className="about-right">
          <div className="stat-card">
            <h3>20+</h3>
            <p>Dashboards Developed</p>
          </div>

          <div className="stat-card">
            <h3>£8.9M</h3>
            <p>Business Data Analyzed</p>
          </div>

          <div className="stat-card">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h3>SQL</h3>
            <p>Power BI • Python • Excel</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;