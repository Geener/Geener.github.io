import EY_logo from "../images/companies/EY_logo.png";
import HSBC_logo from "../images/companies/HSBC_logo.png";

interface intership_data {
  title: string;
  dates: string;
  img_path: string;
  description: string;
}

const EY: intership_data = {
  title: "Software Engineer",
  dates: "MAY - AUG 2023",
  img_path: EY_logo,
  description: "Got shit done",
};

const HSBC: intership_data = {
  title: "Data Science and Engineering",
  dates: "MAY - SEPT 2022",
  img_path: HSBC_logo,
  description: "Got shit done",
};

const internships: intership_data[] = [EY, HSBC];

export default internships;
