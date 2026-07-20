import "./Expertise.css";
import {
  FaChartBar,
  FaDatabase,
  FaPython,
  FaBolt,
  FaFileExcel,
  FaCogs,
} from "react-icons/fa";

const expertise = [
  {
    icon: <FaChartBar />,
    title: "Power BI",
    text: "Interactive dashboards & business intelligence",
  },
  {
    icon: <FaDatabase />,
    title: "SQL",
    text: "Advanced queries, joins, CTEs & optimization",
  },
  {
    icon: <FaPython />,
    title: "Python",
    text: "Pandas, NumPy, automation & analysis",
  },
  {
    icon: <FaBolt />,
    title: "DAX",
    text: "Measures, KPIs & calculated columns",
  },
  {
    icon: <FaFileExcel />,
    title: "Excel",
    text: "Pivot tables, dashboards & reporting",
  },
  {
    icon: <FaCogs />,
    title: "ETL",
    text: "Data cleaning, transformation & validation",
  },
];

function Expertise() {
  return (
    <section
      id="expertise"
      className="expertise"
      data-aos="fade-up"
    >
      <h2>Core Expertise</h2>

      <div className="expertise-grid">
        {expertise.map((item, index) => (
          <div className="expertise-card" key={index}>
            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;