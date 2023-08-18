import tech_stack from "../../data/tech_stack_data";
import Slider from "../../components/slider/Slider";
import "./TechStack.css";

const TechStack = () => {
  return <Slider header="Tech Stack" data={tech_stack} setIsInfoOpen={null} />;
};

export default TechStack;
