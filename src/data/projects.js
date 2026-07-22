import customer from "../assets/dashboards/customer-retention.jpg";
import sales from "../assets/dashboards/sales-dashboard.jpg";
import hr from "../assets/dashboards/hr-dashboard.jpg";
import banking from "../assets/dashboards/banking-dashboard.jpg";
import supply from "../assets/dashboards/supply-chain.jpg";
const projects = [
  {
    id: 1,
    title: "HR Analytics Dashboard",
    category: "Human Resources",
    image: hr,
    description:
      "Developed an interactive HR analytics dashboard to monitor workforce performance, employee attrition, hiring trends, and departmental KPIs for data-driven HR decision-making.",

    highlights: [
      "Analyzed employee attrition, hiring trends, and workforce demographics.",
      "Built KPI dashboards tracking Headcount, Attrition Rate, Average Tenure, and Department Performance.",
      "Automated HR reporting using Power BI, reducing manual reporting effort.",
    ],

    technologies: [
      "Power BI",
      "SQL",
      "Excel"
    ],

    github: "https://github.com/AyasPathan007/hr-analytics-dashboard",
  },

  {
    id: 2,
    title: "FinSight BI – Financial Performance Dashboard",
    category: "Finance",
    image: supply,
    description:
      "Built executive financial dashboards providing real-time visibility into organizational performance through revenue, profitability, and budget analysis.",

    highlights: [
      "Developed dashboards for Revenue, Gross Margin, Operating Expenses, and Budget vs Actual.",
      "Performed profitability and variance analysis using SQL to identify revenue drivers and cost optimization opportunities.",
      "Automated recurring financial KPI reporting and implemented data validation checks to improve reporting accuracy.",
    ],

    technologies: [
      "Power BI",
      "SQL",
      "Excel"
    ],

    github: "https://github.com/AyasPathan007/finsight-bi-dashboard"
  },

  {
    id: 3,
    title: "EdTech Customer Growth & Engagement Analytics",
    category: "EdTech",
    image: sales,
    description:
      "Analyzed user acquisition, engagement, subscription, and course consumption data to improve customer retention and platform growth.",

    highlights: [
      "Built KPI dashboards tracking Active Users, Conversion Rate, Course Completion, Monthly Recurring Revenue (MRR), and Customer Lifetime Value (LTV).",
      "Performed cohort and funnel analysis to identify user drop-off points.",
      "Provided actionable insights to improve engagement and subscription conversion.",
    ],

    technologies: [
      "Power BI",
      "SQL",
      "Python"
    ],

    github: "https://github.com/AyasPathan007/edtech-growth-dashboard"
  },

  {
    id: 4,
    title: "Generative AI Business Intelligence Assistant",
    category: "Generative AI",
    image: banking,
    description:
      "Developed an AI-powered analytics assistant that converts natural language questions into SQL queries and generates automated business insights.",

    highlights: [
      "Integrated LLMs to generate executive-ready KPI summaries and dashboard narratives.",
      "Converted business questions into SQL queries for automated analytics.",
      "Validated AI-generated SQL queries and analytical insights against business rules to ensure reliability.",
    ],

    technologies: [
      "Python",
      "SQL",
      "Power BI",
      "LLMs"
    ],

    github: "https://github.com/AyasPathan007/genai-bi-assistant"
  }
];

export default projects;