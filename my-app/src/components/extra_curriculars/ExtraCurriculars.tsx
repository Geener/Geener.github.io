import extraCurriculars from "../../data/extra_curricular_data";
import Slider from "../slider/Slider";

const ExtraCurriculars = () => {
  return (
    <div>
      <Slider header="Extra Curriculars" data={extraCurriculars} />
    </div>
  );
};

export default ExtraCurriculars;
