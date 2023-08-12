interface intership_data {
  title: string;
  company: string;
  image_path: string;
  description: string;
}

const EY: intership_data = {
  title: "Software Engineer",
  company: "EY",
  image_path: "",
  description: "Got shit done",
};

const internships: intership_data[] = [EY];

export default internships;
