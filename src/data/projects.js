import customer from "../assets/dashboards/customer-retention.jpg";
import sales from "../assets/dashboards/sales-dashboard.jpg";
import hr from "../assets/dashboards/hr-dashboard.jpg";
import banking from "../assets/dashboards/banking-dashboard.jpg";
import supply from "../assets/dashboards/supply-chain.jpg";
const projects = [
  {
    title: "Customer Retention Dashboard",
    image: customer,
    problem:
      "The business lacked visibility into customer churn and high-value customers.",
    solution:
      "Built an interactive Power BI dashboard using SQL and RFM analysis to segment customers and monitor retention KPIs.",
    impact:
      "Enabled stakeholders to identify at-risk customers and make data-driven retention decisions.",
    tech: ["Power BI", "SQL", "DAX", "Power Query"],
  },
  {
    title: "HR Analytics Dashboard",
    image: hr,
    problem:
      "HR teams had no centralized view of employee performance and attrition.",
    solution:
      "Developed dashboards to monitor hiring, attrition, and workforce KPIs.",
    impact:
      "Improved HR reporting and reduced manual reporting effort.",
    tech: ["Power BI", "Excel", "DAX"],
  },
  {
    title: "Sales Dashboard",
    image: sales,
    problem:
      "Sales managers struggled to monitor revenue and profit trends.",
    solution:
      "Designed interactive dashboards with drill-through and KPI tracking.",
    impact:
      "Provided faster insights into sales performance and profitability.",
    tech: ["Power BI", "SQL", "DAX"],
  },
];

export default projects;