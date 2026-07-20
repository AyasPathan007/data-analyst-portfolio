import "./Projects.css";
import projects from "../../data/projects";
import { FaGithub, FaCheckCircle } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <div className="projects-header">
        <h2>Featured Projects</h2>

        <p>
          A collection of Business Intelligence, Data Analytics and AI-driven
          solutions built using Power BI, SQL, Python and modern analytics
          technologies.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="highlights">
                <h4>Key Highlights</h4>

                <ul>
                  {project.highlights.map((item, index) => (
                    <li key={index}>
                      <FaCheckCircle className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>

              <div className="project-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;