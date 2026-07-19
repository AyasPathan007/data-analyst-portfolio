import "./Experience.css";
import experience from "../../data/experience";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="experience"
      data-aos="fade-up"
    >
      <h2>Experience</h2>

      <div className="timeline">

        {experience.map((job, index) => (
          <div className="timeline-item" key={index}>

            <div className="timeline-dot">
              <FaBriefcase />
            </div>

            <div className="timeline-content">

              <span className="timeline-date">
                {job.duration}
              </span>

              <h3>{job.role}</h3>

              <h4>{job.company}</h4>

              <ul>
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;