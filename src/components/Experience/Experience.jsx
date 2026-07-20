import "./Experience.css";
import experiences from "../../data/experience";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2>Experience</h2>
        <p>
          Professional journey building data-driven solutions and business
          intelligence dashboards.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              <FaBriefcase />
            </div>

            <div className="experience-card">
              <span className="duration">{exp.year}</span>

              <h3>{exp.role}</h3>

              <h4>{exp.company}</h4>

              <p className="domain">{exp.domain}</p>

              <ul className="achievement-list">
                {exp.achievements.map((item, i) => (
                  <li key={i}>
                    <FaCheckCircle className="check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="tech-stack">
                {exp.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;