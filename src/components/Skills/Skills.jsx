import "./Skills.css";
import skills from "../../data/skills";
import {
  FaDatabase,
  FaPython,
  FaChartBar,
  FaGitAlt,
  FaFileExcel,
} from "react-icons/fa";

const iconMap = {
  "Power BI": <FaChartBar />,
  SQL: <FaDatabase />,
  Python: <FaPython />,
  Excel: <FaFileExcel />,
  PostgreSQL: <FaDatabase />,
  Git: <FaGitAlt />,
};

function Skills() {
  return (
<section
  id="skills"
  className="skills"
  data-aos="fade-left"
>
          <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (            
    <div className="skill-card" key={index}>
            <div className="icon">{iconMap[skill.name]}</div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;