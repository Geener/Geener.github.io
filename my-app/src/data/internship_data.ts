import EY_logo from "../images/companies/EY_logo.png";
import HSBC_logo from "../images/companies/HSBC_logo.png";

interface intership_data {
  title: string;
  dates: string;
  image_path: string;
  description: string;
}

const EY: intership_data = {
  title: "Software Engineer",
  dates: "May-Aug 2023",
  image_path: EY_logo,
  description: "Got shit done",
};

const HSBC: intership_data = {
  title: "Data Science and Engineering",
  dates: "May-Sept 2022",
  image_path: HSBC_logo,
  description: "Got shit done",
};

const internships: intership_data[] = [EY, HSBC];

export default internships;
