import EY_logo from "../images/companies/EY_logo.png";
import HSBC_logo from "../images/companies/HSBC_logo.png";
import COVEO_logo from "../images/companies/coveo_logo.png";
import { EY_stack, HSBC_stack, TechItem } from "./tech_stack_data";

interface intership_data {
  company: string;
  title: string;
  dates: string;
  img_path: string;
  description: string[];
  link: string;
  tech_stack: TechItem[];
}

const COVEO: intership_data = {
  company: "Coveo",
  title: "Software Engineer",
  dates: "JAN - APR 2024",
  img_path: COVEO_logo,
  description: [
    "Collaborated with clients on the Professional Services team to analyze their specific software needs and developtailored solutions using TypeScript, JavaScript, and Python for both front-end and back-end components.",
    "Demonstrated effective communication skills by maintaining regular contact with clients, ensuring projectrequirements were met, and providing ongoing support for custom software solutions.",
  ],
  link: "",
  tech_stack: EY_stack,
};

const EY: intership_data = {
  company: "Ernst & Young",
  title: "Software Engineer",
  dates: "MAY - AUG 2023",
  img_path: EY_logo,
  description: [
    "Designed and built a mobile app for a prestigious military group that utilized a Large Language Model (LLM) to addressuser inquiries using LangChain, Flutter, and Azure, resulting in contract negotiations valued at $800,000.",
    "Developed the user interface and checkout process for a global entertainment industry leader’s website using Reactand TypeScript, resulting in a 12% increase in user checkout rates.",
    "Implemented an LLM to operate locally, enabling users to upload PDF documents for comprehensive inquiries withoutthe need for an internet connection using LangChain, Python, and Flask.",
  ],
  link: "",
  tech_stack: EY_stack,
};

const HSBC: intership_data = {
  company: "HSBC",
  title: "Data Science and Engineering",
  dates: "MAY - SEPT 2022",
  img_path: HSBC_logo,
  description: [
    "Established an advanced pipeline for crafting synthetic time-series financial data via generative adversarial networks(GANs) using Python, Pandas, and NumPy, achieving a synthetic data quality score of 91.",
    "Utilized machine learning and data visualization techniques to analyze a dataset spanning hundreds of thousands ofhours of server data using TensorFlow, Keras, and Matplotlib, resulting in a 28% reduction in carbon emissions.",
  ],
  tech_stack: HSBC_stack,
  link: "",
};

const internships: intership_data[] = [COVEO, EY, HSBC];

export default internships;
