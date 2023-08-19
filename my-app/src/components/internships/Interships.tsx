import Slider from "../slider/Slider";
import internships from "../../data/internship_data";
import { FC } from "react";

const Internships: FC = () => {
  return (
    <div>
      <Slider header="Internships" data={internships} />
    </div>
  );
};

export default Internships;
