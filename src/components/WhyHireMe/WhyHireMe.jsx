import "./WhyHireMe.css";
import {
  FaChartLine,
  FaDatabase,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const points = [
  {
    icon: <FaChartLine />,
    title: "Business-Focused Analytics",
    text: "Transform business data into actionable insights through interactive dashboards and KPI reporting.",
  },
  {
    icon: <FaDatabase />,
    title: "Strong Technical Skills",
    text: "Experienced with Power BI, SQL, Python, Excel, DAX, ETL and data modeling.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solver",
    text: "Analyze complex datasets to identify trends, optimize processes and support decision-making.",
  },
  {
    icon: <FaUsers />,
    title: "Stakeholder Collaboration",
    text: "Translate business requirements into reports and dashboards that executives can use confidently.",
  },
];

function WhyHireMe() {
  return (
    <section id="why" className="why">
      <h2>Why Hire Me?</h2>

      <p className="why-subtitle">
        I combine analytical thinking with business understanding to deliver
        dashboards and insights that drive better decisions.
      </p>

      <div className="why-grid">
        {points.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyHireMe;