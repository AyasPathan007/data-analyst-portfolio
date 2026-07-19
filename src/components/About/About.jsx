import "./About.css";

function About() {
  return (
<section
  id="about"
  className="about"
  data-aos="fade-right"
>
              <div className="about-container">

        <div className="about-left">
          <h2>About Me</h2>

          <p>
            I am a <span>Data Analyst</span> with experience in transforming
            raw data into meaningful business insights using
            <span> Power BI</span>, <span>SQL</span>,
            <span> Python</span>, and <span>Excel</span>.
          </p>

          <p>
            I enjoy solving business problems through data visualization,
            dashboard development, KPI reporting, and analytical thinking.
          </p>

          <p>
            My goal is to help organizations make faster and smarter
            decisions by converting complex datasets into easy-to-understand
            reports and interactive dashboards.
          </p>

          <button>Download Resume</button>
        </div>

        <div className="about-right">
          <div className="about-card">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>

          <div className="about-card">
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="about-card">
            <h3>20+</h3>
            <p>Interactive Dashboards</p>
          </div>

          <div className="about-card">
            <h3>SQL</h3>
            <p>Power BI • Python • Excel</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;