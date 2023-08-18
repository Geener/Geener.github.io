import Slider from "../slider/Slider";
import projects from "../../data/projects_data";

const Projects = () => {
  return (
    <div>
      <Slider header="Personal Projects" data={projects} setIsInfoOpen={null} />
    </div>
  );
};

export default Projects;
