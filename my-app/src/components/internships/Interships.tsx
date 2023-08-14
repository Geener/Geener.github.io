import Slider from "../slider/Slider";
import internships from "../../data/internship_data";

const Internships = () => {
  return (
    <div>
      <Slider header="Internships" data={internships} />
    </div>
  );
};

export default Internships;
