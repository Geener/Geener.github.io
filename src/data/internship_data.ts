import EY_logo from "../images/companies/EY_logo.png";
import HSBC_logo from "../images/companies/HSBC_logo.png";
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

const EY: intership_data = {
  company: "Ernst & Young",
  title: "Software Engineer",
  dates: "MAY - AUG 2023",
  img_path: EY_logo,
  description: [
    "Independently developed a mobile app for a prestigious military group that utilized a Large Language Model (LLM) to promptly address user inquiries, resulting in contract negotiations valued at $800,000.",
    "Pioneered the implementation of a website which seamlessly integrates a LLM to operate locally, enabling users to  upload PDF documents for comprehensive inquiries without the need of an internet connection.",
    "Worked with Python, LangChain, Flutter, React, TypeScript, Flask",
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
    "Established an advanced pipeline for crafting synthetic time-series financial data via generative adversarial networks (GANs), achieving a synthetic data quality score of 91.",
    "Utilized machine learning and data visualization techniques to analyze a dataset spanning hundreds of thousands of hours of server data, resulting in a 28% reduction in carbon emissions.",
    "Worked with Python, NumPy, Pandas, Matplotlib, Seaborn, TensorFlow, Keras",
  ],
  tech_stack: HSBC_stack,
  link: "",
};

const internships: intership_data[] = [EY, HSBC];

export default internships;
