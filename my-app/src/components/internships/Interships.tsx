import Slider from "../slider/Slider";
import internships from "../../data/internship_data";
import { FC } from "react";

interface propTypes {
  setIsInfoOpen: (option: boolean) => any;
}

const Internships: FC<propTypes> = (props) => {
  return (
    <div>
      <Slider
        header="Internships"
        data={internships}
        setIsInfoOpen={props.setIsInfoOpen}
      />
    </div>
  );
};

export default Internships;
