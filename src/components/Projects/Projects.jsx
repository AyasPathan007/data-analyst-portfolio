import "./Projects.css";
import projects from "../../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
<section
  id="projects"
  className="projects"
  data-aos="fade-up"
>
          <h2>Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
  <img src={project.image} alt={project.title} />
</div>

            <h3>{project.title}</h3>

            <div className="project-section">
              <h4>📌 Business Problem</h4>
              <p>{project.problem}</p>
            </div>

            <div className="project-section">
              <h4>💡 Solution</h4>
              <p>{project.solution}</p>
            </div>

            <div className="project-section">
              <h4>📈 Business Impact</h4>
              <p>{project.impact}</p>
            </div>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-buttons">
              <button>
                <FaGithub /> GitHub
              </button>

              <button>
                <FaExternalLinkAlt /> Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;