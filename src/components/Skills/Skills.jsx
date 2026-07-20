import "./Skills.css";
import {
  FaChartBar,
  FaDatabase,
  FaPython,
  FaTools,
} from "react-icons/fa";

const skillCategories = [
  {
    icon: <FaChartBar />,
    title: "Analytics & BI",
    skills: [
      "Power BI",
      "Excel",
      "DAX",
      "Power Query",
      "Data Visualization",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    skills: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "Views",
      "CTEs",
      "Window Functions",
    ],
  },
  {
    icon: <FaPython />,
    title: "Programming",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "Automation",
    ],
  },
  {
    icon: <FaTools />,
    title: "Tools & Concepts",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "ETL",
      "Data Modeling",
      "KPI Reporting",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="skills"
      data-aos="fade-up"
    >
      <h2>Technical Skills</h2>

      <p className="skills-subtitle">
        My toolkit for transforming raw data into meaningful business insights.
      </p>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              {category.icon}
            </div>

            <h3>{category.title}</h3>

            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;